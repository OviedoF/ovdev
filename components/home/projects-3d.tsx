'use client'

import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree, type ThreeEvent } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import { useTranslation } from '@/lib/i18n'
import { usePageTransition } from '@/lib/transition-context'
import { scrollTo } from '@/components/smooth-scroll'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

const FEATURED = ['petnder', 'controla2', 'saucedo-abogados', 'dental-digital', 'fuku-shop', 'biznes']
const RADIUS = 3.0
/** Separación angular entre proyectos: 45° → los vecinos se ven a los costados, los demás quedan de canto/atrás */
const STEP = Math.PI / 4
const PLANE_W = 2.05
const PLANE_H = PLANE_W * 0.625 // 16:10
const SCROLL_PER_ITEM = 420 // px de scroll por proyecto (pin)

/* ------------------------------------------------------------------ */
/* Shader: curvatura leve + distorsión "líquida" al hover + dimming    */
/* ------------------------------------------------------------------ */

const VERT = /* glsl */ `
  uniform float uHover;
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    // curvatura sutil (como si fuera parte del cilindro)
    p.z -= pow(uv.x - 0.5, 2.0) * 0.35;
    // onda al hover
    p.z += sin(uv.x * 6.283 + uTime * 2.5) * 0.06 * uHover;
    p.y += sin(uv.x * 3.14 + uTime * 2.0) * 0.03 * uHover;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`
const FRAG = /* glsl */ `
  uniform sampler2D uMap;
  uniform float uHover;
  uniform float uActive;
  uniform float uFacing;
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    uv.x += sin(uv.y * 12.0 + uTime * 3.0) * 0.012 * uHover;
    float shift = 0.006 * uHover;
    float r = texture2D(uMap, uv + vec2(shift, 0.0)).r;
    vec4 c = texture2D(uMap, uv);
    float b = texture2D(uMap, uv - vec2(shift, 0.0)).b;
    vec3 col = vec3(r, c.g, b);
    // los que no están al frente se oscurecen según cuánto miran a cámara (profundidad)
    col *= mix(0.35, 1.0, pow(uFacing, 1.5));
    col *= mix(0.85, 1.0, uActive);
    // viñeta leve en los bordes
    float vig = smoothstep(0.0, 0.08, uv.x) * smoothstep(1.0, 0.92, uv.x) * smoothstep(0.0, 0.08, uv.y) * smoothstep(1.0, 0.92, uv.y);
    col *= mix(0.85, 1.0, vig);
    gl_FragColor = vec4(col, 1.0);
  }
`

/* ------------------------------------------------------------------ */
/* Escena                                                              */
/* ------------------------------------------------------------------ */

type SceneProps = {
  urls: string[]
  progress: React.MutableRefObject<number> // 0..1 (scroll)
  drag: React.MutableRefObject<number> // offset extra por arrastre (en "items")
  onActive: (i: number) => void
  onSelect: (i: number, isActive: boolean) => void
}

function Ring({ urls, progress, drag, onActive, onSelect }: SceneProps) {
  const textures = useTexture(urls)
  const group = useRef<THREE.Group>(null)
  const n = urls.length
  const step = STEP
  const rot = useRef(0)
  const lastActive = useRef(-1)
  const hovered = useRef<number | null>(null)
  const hoverAmt = useRef<number[]>(urls.map(() => 0))
  const materials = useRef<THREE.ShaderMaterial[]>([])
  const { gl } = useThree()

  useEffect(() => {
    textures.forEach((t) => {
      t.colorSpace = THREE.SRGBColorSpace
      t.minFilter = THREE.LinearFilter
      t.magFilter = THREE.LinearFilter
      t.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy())
      t.needsUpdate = true
    })
  }, [textures, gl])

  const uniforms = useMemo(
    () =>
      urls.map((_, i) => ({
        uMap: { value: textures[i] },
        uHover: { value: 0 },
        uActive: { value: i === 0 ? 1 : 0 },
        uFacing: { value: i === 0 ? 1 : 0 },
        uTime: { value: 0 },
      })),
    [urls, textures],
  )

  useFrame((state, dt) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    // ángulo objetivo: índice continuo (scroll + drag) → rotación del anillo
    const idx = progress.current * (n - 1) + drag.current
    const target = -idx * step
    rot.current = THREE.MathUtils.damp(rot.current, target, 5, dt)
    group.current.rotation.y = rot.current

    // activo = el más cercano al frente
    const nearest = Math.max(0, Math.min(n - 1, Math.round(-rot.current / step)))
    if (nearest !== lastActive.current) {
      lastActive.current = nearest
      onActive(nearest)
    }

    group.current.children.forEach((child, i) => {
      // cuán de frente está (1 = al frente, 0 = atrás)
      const a = i * step + rot.current
      const facing = (Math.cos(a) + 1) / 2
      const mat = materials.current[i]
      if (mat) {
        const hTarget = hovered.current === i ? 1 : 0
        hoverAmt.current[i] = THREE.MathUtils.damp(hoverAmt.current[i], hTarget, 6, dt)
        mat.uniforms.uHover.value = hoverAmt.current[i]
        mat.uniforms.uActive.value = THREE.MathUtils.damp(mat.uniforms.uActive.value, i === nearest ? 1 : 0, 6, dt)
        mat.uniforms.uTime.value = t
        mat.uniforms.uFacing.value = facing
      }
      // el del frente se adelanta y agranda apenas
      const s = 1 + Math.pow(facing, 6) * 0.18
      child.scale.setScalar(THREE.MathUtils.damp(child.scale.x, s, 6, dt))
      child.position.y = THREE.MathUtils.damp(child.position.y, (facing - 0.5) * -0.15, 6, dt)
    })
  })

  return (
    <group ref={group} position={[0, 0.38, 0]}>
      {urls.map((_, i) => {
        const a = i * step
        return (
          <mesh
            key={i}
            position={[Math.sin(a) * RADIUS, 0, Math.cos(a) * RADIUS]}
            rotation={[0, a, 0]}
            onPointerOver={(e: ThreeEvent<PointerEvent>) => {
              e.stopPropagation()
              hovered.current = i
              document.body.style.cursor = 'pointer'
            }}
            onPointerOut={() => {
              if (hovered.current === i) hovered.current = null
              document.body.style.cursor = ''
            }}
            onClick={(e: ThreeEvent<MouseEvent>) => {
              e.stopPropagation()
              onSelect(i, i === lastActive.current)
            }}
          >
            <planeGeometry args={[PLANE_W, PLANE_H, 32, 8]} />
            <shaderMaterial
              ref={(m) => {
                if (m) materials.current[i] = m
              }}
              vertexShader={VERT}
              fragmentShader={FRAG}
              uniforms={uniforms[i]}
              side={THREE.FrontSide}
              transparent={false}
            />
          </mesh>
        )
      })}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/* Sección                                                             */
/* ------------------------------------------------------------------ */

export default function Projects3D() {
  const { t } = useTranslation()
  const { navigateTo } = usePageTransition()
  const ref = useRef<HTMLElement>(null)
  const progress = useRef(0)
  const drag = useRef(0)
  const stRef = useRef<ScrollTrigger | null>(null)
  const [active, setActive] = useState(0)
  const [running, setRunning] = useState(false)
  const featured = useMemo(() => FEATURED.map((s) => projects.find((p) => p.slug === s)).filter(Boolean) as typeof projects, [])
  const urls = useMemo(() => featured.map((p) => p.image), [featured])
  const n = featured.length

  // Pin + scrub → progress; activo/inactivo para pausar el render loop fuera de pantalla
  useGSAP(
    () => {
      const pinEl = ref.current!.querySelector<HTMLElement>('[data-pin]')!
      stRef.current = ScrollTrigger.create({
        trigger: pinEl,
        start: 'top top',
        end: `+=${n * SCROLL_PER_ITEM}`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        // al soltar el scroll, se acomoda en el proyecto más cercano
        snap: { snapTo: 1 / (n - 1), duration: { min: 0.25, max: 0.7 }, delay: 0.05, ease: 'power2.inOut' },
        onUpdate: (self) => (progress.current = self.progress),
      })
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => setRunning(self.isActive),
      })
      // el pin cambia el alto de la página: que el resto de los triggers se recalculen
      ScrollTrigger.refresh()
    },
    { scope: ref },
  )

  // Texto del proyecto activo: swap animado
  const infoRef = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      if (!infoRef.current) return
      gsap.fromTo(infoRef.current.children, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power4.out', stagger: 0.06, overwrite: true })
    },
    { scope: infoRef, dependencies: [active] },
  )

  // Arrastre horizontal: mueve el anillo; al soltar vuelve a 0 (el scroll manda)
  const dragState = useRef({ down: false, x: 0 })
  const onPointerDown = (e: React.PointerEvent) => {
    dragState.current = { down: true, x: e.clientX }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragState.current.down) return
    const dx = e.clientX - dragState.current.x
    drag.current = -dx / 320
  }
  const endDrag = () => {
    if (!dragState.current.down) return
    dragState.current.down = false
    // si arrastró bastante, saltamos al proyecto vecino vía scroll (y el drag vuelve a 0 suavemente)
    const shift = Math.round(drag.current)
    gsap.to(drag, { current: 0, duration: 0.6, ease: 'power3.out' })
    if (shift !== 0) goTo(Math.max(0, Math.min(n - 1, active + shift)))
  }
  const goTo = (i: number) => {
    const st = stRef.current
    if (!st) return
    scrollTo(st.start + (i / (n - 1)) * (st.end - st.start))
  }
  const onSelect = (i: number, isActive: boolean) => {
    if (Math.abs(drag.current) > 0.15) return // fue un arrastre, no un click
    if (isActive) navigateTo(`/work/${featured[i].slug}`)
    else goTo(i)
  }

  const current = featured[active]
  const mainCategory = current?.categories.split('•')[0]?.trim()

  return (
    <section ref={ref} data-pattern="none" className="relative">
      <div data-pin className="relative h-[100svh] overflow-hidden select-none">
        {/* Canvas */}
        <div
          className="absolute inset-0 touch-pan-y"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
        >
          <Canvas
            dpr={[1, 1.5]}
            frameloop={running ? 'always' : 'never'}
            camera={{ position: [0, 0, RADIUS + 5.6], fov: 30 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <Ring urls={urls} progress={progress} drag={drag} onActive={setActive} onSelect={onSelect} />
            </Suspense>
          </Canvas>
        </div>

        {/* Overlay DOM */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between px-6 md:px-12 lg:px-20 py-10 md:py-12">
          <div className="flex items-start justify-between">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-t-text-tertiary">
              <span className="font-mono text-t-accent">03</span>
              <span className="w-8 h-px bg-t-accent/60" />
              {t('home.projects.label')}
            </p>
            <p className="font-mono text-xs text-t-text-tertiary tabular-nums">
              <span className="text-t-text">{String(active + 1).padStart(2, '0')}</span> / {String(n).padStart(2, '0')}
            </p>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div ref={infoRef} className="max-w-[520px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-t-accent">{mainCategory}</p>
              <h3 className="mt-2 text-[clamp(1.8rem,4vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-t-text">{current?.title}</h3>
              <p className="mt-3 text-sm md:text-base text-t-text-secondary leading-relaxed line-clamp-2">{current?.subtitle}</p>
              <button
                type="button"
                onClick={() => current && navigateTo(`/work/${current.slug}`)}
                className="pointer-events-auto group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-t-text hover:text-t-accent transition-colors"
              >
                {t('work.view')}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            <div className="hidden md:flex flex-col items-end gap-4">
              <div className="flex items-center gap-2">
                {featured.map((p, i) => (
                  <button
                    key={p.slug}
                    type="button"
                    aria-label={p.title}
                    onClick={() => goTo(i)}
                    className={`pointer-events-auto h-1.5 rounded-full transition-all duration-500 ${i === active ? 'w-8 bg-t-accent' : 'w-3 bg-t-border-light/60 hover:bg-t-text-tertiary'}`}
                  />
                ))}
              </div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-t-text-tertiary">{t('home.projects.hint')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
