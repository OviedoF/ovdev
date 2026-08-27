'use client'

import { useRef, type ReactNode } from 'react'
import { Lightbulb, Check, Rocket, Globe, Sparkles } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { useTheme, themes } from '@/lib/theme'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import ThemeVideo from '@/components/theme-video'

const STEPS = [1, 2, 3, 4] as const
/** Alto de scroll por paso (vh). Menos = pasa más rápido. */
const STEP_VH = 72
/** Posición del glow por paso (% del contenedor) */
const GLOW_POS = [
  { x: 15, y: 20 },
  { x: 70, y: 15 },
  { x: 75, y: 70 },
  { x: 20, y: 75 },
]

/* ---------- Artefactos: mini-ilustraciones HTML por paso ---------- */

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-3xl bg-t-card/95 border border-t-border-light/40 shadow-[0_40px_90px_-30px_rgba(0,0,0,.6)] ${className}`}
    >
      {children}
    </div>
  )
}

function Bar({ w, className = '' }: { w: string; className?: string }) {
  return <span className={`block h-2 rounded-full bg-t-border-light/50 ${className}`} style={{ width: w }} />
}

/** 01 · Idea: una nota con líneas y un post-it */
function ArtIdea() {
  return (
    <Card className="w-[240px] md:w-[320px] lg:w-[360px] p-5 md:p-7">
      <div className="flex items-center gap-3 mb-5">
        <span className="grid place-items-center w-10 h-10 rounded-2xl bg-t-accent/15 text-t-accent">
          <Lightbulb className="w-5 h-5" strokeWidth={1.75} />
        </span>
        <Bar w="46%" className="h-2.5 bg-t-text/70" />
      </div>
      <div className="space-y-3">
        <Bar w="92%" />
        <Bar w="78%" />
        <Bar w="85%" />
        <Bar w="40%" />
      </div>
      <div
        data-pop
        className="absolute -right-6 -bottom-7 md:-right-10 md:-bottom-9 w-[120px] md:w-[150px] p-4 rounded-2xl text-[12px] md:text-sm font-semibold leading-snug rotate-[-7deg] shadow-[0_20px_50px_-18px_rgba(0,0,0,.7)]"
        style={{ background: 'var(--t-accent)', color: 'var(--t-bg)' }}
      >
        ¿y si lo hacemos así?
      </div>
    </Card>
  )
}

/** 02 · Dirección: un roadmap con pasos tildados */
function ArtDirection() {
  const rows = [
    { w: '70%', done: true },
    { w: '55%', done: true },
    { w: '80%', done: false, active: true },
    { w: '48%', done: false },
  ]
  return (
    <Card className="w-[250px] md:w-[330px] lg:w-[380px] p-5 md:p-7">
      <div className="flex items-center justify-between mb-5">
        <Bar w="38%" className="h-2.5 bg-t-text/70" />
        <span className="text-[10px] tracking-[0.2em] font-semibold text-t-accent border border-t-accent/40 rounded-full px-2.5 py-1">
          PLAN
        </span>
      </div>
      <ul className="space-y-3.5">
        {rows.map((r, i) => (
          <li key={i} className="flex items-center gap-3">
            <span
              className={`relative grid place-items-center w-5 h-5 rounded-full border ${
                r.done ? 'bg-t-accent border-t-accent text-t-bg' : r.active ? 'border-t-accent' : 'border-t-border-light'
              }`}
            >
              {r.done && <Check className="w-3 h-3" strokeWidth={3} style={{ color: 'var(--t-bg)' }} />}
              {r.active && <span className="absolute inset-0 rounded-full bg-t-accent/40 animate-ping" />}
              {r.active && <span className="w-2 h-2 rounded-full bg-t-accent" />}
            </span>
            <Bar w={r.w} className={r.done ? 'bg-t-text/40' : r.active ? 'bg-t-text/70' : ''} />
          </li>
        ))}
      </ul>
      <div
        data-pop
        className="absolute -left-5 -top-5 md:-left-8 md:-top-7 flex items-center gap-2 px-3.5 py-2 rounded-full bg-t-bg border border-t-border-light/50 text-[11px] md:text-xs font-semibold shadow-[0_20px_40px_-16px_rgba(0,0,0,.7)]"
      >
        <Sparkles className="w-3.5 h-3.5 text-t-accent" />
        objetivo claro
      </div>
    </Card>
  )
}

/** 03 · Diseño: un mini-browser con layout + swatches */
function ArtDesign() {
  return (
    <Card className="w-[260px] md:w-[340px] lg:w-[400px] overflow-visible">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-t-border-light/40">
        <span className="w-2 h-2 rounded-full bg-t-border-light" />
        <span className="w-2 h-2 rounded-full bg-t-border-light" />
        <span className="w-2 h-2 rounded-full bg-t-border-light" />
        <span className="ml-3 h-1.5 w-24 rounded-full bg-t-border-light/50" />
      </div>
      <div className="p-4 md:p-5">
        <div className="flex items-center justify-between mb-4">
          <Bar w="22%" className="h-1.5 bg-t-text/60" />
          <div className="flex gap-2">
            <Bar w="20px" className="h-1.5" />
            <Bar w="20px" className="h-1.5" />
            <Bar w="20px" className="h-1.5" />
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <Bar w="72%" className="h-3 md:h-4 bg-t-text/80" />
          <Bar w="50%" className="h-3 md:h-4 bg-t-text/80" />
          <span className="inline-block mt-2 h-6 w-20 rounded-full bg-t-accent" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <span className="h-10 md:h-14 rounded-xl bg-t-border-light/30" />
          <span className="h-10 md:h-14 rounded-xl bg-t-border-light/30" />
          <span className="h-10 md:h-14 rounded-xl bg-t-border-light/30" />
        </div>
      </div>
      <div data-pop className="absolute -right-6 top-8 md:-right-9 flex flex-col gap-2">
        {['var(--t-accent)', 'var(--t-text)', 'var(--t-border)', 'var(--t-bg)'].map((c) => (
          <span
            key={c}
            className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-t-card shadow-[0_10px_24px_-8px_rgba(0,0,0,.7)]"
            style={{ background: c }}
          />
        ))}
      </div>
    </Card>
  )
}

/** 04 · Programo y publico: editor de código + badge "en línea" */
function ArtShip() {
  const lines = [
    [
      { w: '14%', c: 'bg-t-accent/80' },
      { w: '30%', c: 'bg-t-text/60' },
    ],
    [
      { w: '8%', c: 'bg-t-border-light' },
      { w: '22%', c: 'bg-t-text/50' },
      { w: '26%', c: 'bg-t-accent/60' },
    ],
    [
      { w: '8%', c: 'bg-t-border-light' },
      { w: '40%', c: 'bg-t-text/50' },
    ],
    [
      { w: '8%', c: 'bg-t-border-light' },
      { w: '16%', c: 'bg-t-accent/80' },
      { w: '34%', c: 'bg-t-text/50' },
    ],
    [{ w: '14%', c: 'bg-t-text/60' }],
  ]
  return (
    <Card className="w-[260px] md:w-[340px] lg:w-[400px]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-t-border-light/40">
        <span className="w-2 h-2 rounded-full bg-t-border-light" />
        <span className="w-2 h-2 rounded-full bg-t-border-light" />
        <span className="w-2 h-2 rounded-full bg-t-border-light" />
        <span className="ml-3 font-mono text-[10px] text-t-text-tertiary">app/page.tsx</span>
      </div>
      <div className="p-4 md:p-5 space-y-3">
        {lines.map((l, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="font-mono text-[10px] w-3 text-t-text-tertiary/70 tabular-nums">{i + 1}</span>
            {l.map((s, j) => (
              <span
                key={j}
                className={`block h-2 rounded-full ${s.c}`}
                style={{ width: s.w, marginLeft: j === 0 && i > 0 && i < 4 ? 12 : 0 }}
              />
            ))}
          </div>
        ))}
      </div>
      <div
        data-pop
        className="absolute -right-5 -bottom-6 md:-right-8 md:-bottom-8 flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full bg-t-bg border border-t-border-light/50 shadow-[0_20px_40px_-16px_rgba(0,0,0,.7)]"
      >
        <span className="relative grid place-items-center w-6 h-6 rounded-full bg-t-accent text-t-bg">
          <Rocket className="w-3.5 h-3.5" strokeWidth={2} style={{ color: 'var(--t-bg)' }} />
        </span>
        <span className="flex items-center gap-1.5 text-[11px] md:text-xs font-semibold">
          <Globe className="w-3.5 h-3.5 text-t-text-tertiary" />
          tu-sitio.com
          <span className="ml-1 w-1.5 h-1.5 rounded-full bg-t-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--t-accent)_30%,transparent)]" />
        </span>
      </div>
    </Card>
  )
}

const ARTS = [ArtIdea, ArtDirection, ArtDesign, ArtShip]

/**
 * Secuencia "idea → dirección → diseño → programo y publico".
 * Sección sticky: el scroll pasa cada frase (scrub) y a la derecha aparece
 * un artefacto ilustrativo por paso. Fondo con grilla, glow del acento y el GIF del tema.
 */
export default function HomeStory() {
  const { t, locale } = useTranslation()
  // ja/zh no separan palabras con espacio
  const sep = locale === 'ja' || locale === 'zh' ? '' : ' '
  const { theme } = useTheme()
  const current = themes.find((x) => x.code === theme) ?? themes[0]
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const steps = gsap.utils.toArray<HTMLElement>('[data-step]')
      const arts = gsap.utils.toArray<HTMLElement>('[data-art]')
      const nums = gsap.utils.toArray<HTMLElement>('[data-num]')
      // Capas compuestas para lo que se anima por scroll (evita repintar números gigantes, glow, etc.),
      // pero SÓLO mientras la sección está en pantalla; fuera de pantalla se oculta todo el sticky
      // (visibility:hidden) para que el video, el glow y los artefactos no ocupen capas GPU.
      const promoted = [...steps, ...arts, ...nums, '[data-glow]', '[data-story-gif]', '[data-progress]']
      const sticky = ref.current!.firstElementChild as HTMLElement
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => {
          gsap.set(sticky, { autoAlpha: self.isActive ? 1 : 0 })
          gsap.set(promoted, { willChange: self.isActive ? 'transform, opacity' : 'auto' })
        },
      })
      const glow = ref.current!.querySelector<HTMLElement>('[data-glow]')!

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom bottom', scrub: 0.5 },
      })

      steps.forEach((step, i) => {
        const at = i
        const last = i === steps.length - 1
        const art = arts[i]
        const pops = art.querySelectorAll('[data-pop]')
        const tilt = i % 2 === 0 ? -2.5 : 2.5

        // Texto
        tl.fromTo(step, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.3 }, at)
        // Artefacto
        tl.fromTo(
          art,
          { opacity: 0, y: 90, rotate: tilt * 3, scale: 0.88 },
          { opacity: 1, y: 0, rotate: tilt, scale: 1, duration: 0.38, ease: 'power2.out' },
          at,
        )
        tl.fromTo(pops, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.18, ease: 'back.out(2)', stagger: 0.04 }, at + 0.22)
        // Número gigante
        tl.fromTo(nums[i], { opacity: 0, yPercent: 12 }, { opacity: 1, yPercent: 0, duration: 0.3 }, at)
        // Glow
        tl.to(glow, { xPercent: GLOW_POS[i].x - 50, yPercent: GLOW_POS[i].y - 50, duration: 0.6, ease: 'power1.inOut' }, at)

        if (!last) {
          tl.to(step, { opacity: 0, y: -50, duration: 0.22 }, at + 0.72)
          tl.to(art, { opacity: 0, y: -90, rotate: -tilt * 2, scale: 0.94, duration: 0.24, ease: 'power2.in' }, at + 0.7)
          tl.to(nums[i], { opacity: 0, yPercent: -12, duration: 0.22 }, at + 0.72)
        }
      })

      // Progreso + contador
      tl.fromTo('[data-progress]', { scaleX: 0 }, { scaleX: 1, duration: steps.length - 0.3 }, 0)
      steps.forEach((_, i) => {
        tl.call(
          () => {
            const el = ref.current?.querySelector('[data-counter]')
            if (el) el.textContent = String(i + 1).padStart(2, '0')
          },
          [],
          i + 0.15,
        )
      })

      // GIF de fondo: parallax lento a lo largo de toda la sección
      gsap.fromTo(
        '[data-story-gif]',
        { yPercent: 18, rotate: -4 },
        {
          yPercent: -18,
          rotate: 4,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )

      // Flotación suave de los artefactos (independiente del scroll)
      const floats = arts.map((a, i) =>
        gsap.to(a.firstElementChild, { y: i % 2 ? 10 : -10, duration: 2.6 + i * 0.3, ease: 'sine.inOut', yoyo: true, repeat: -1 }),
      )
      // No animar lo que no se ve
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => floats.forEach((f) => (self.isActive ? f.play() : f.pause())),
      })
    },
    { scope: ref },
  )

  return (
    <section id="story" ref={ref} data-pattern="dots" className="relative" style={{ height: `${STEPS.length * STEP_VH + 28}vh` }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* ---- Fondo ---- */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {/* glow del acento que se mueve por paso */}
          <div
            data-glow
            className="absolute left-1/2 top-1/2 w-[90vmin] h-[90vmin] rounded-full opacity-50"
            style={{
              // gradiente ya difuso: mismo look que con blur-3xl pero sin filtro (el blur repintaba 70vmin por frame)
              background: `radial-gradient(circle, ${current.accent}66 0%, ${current.accent}22 30%, transparent 62%)`,
              transform: 'translate(-50%,-50%)',
            }}
          />
          {/* GIF del tema, como una "ventana" difusa a la derecha */}
          <div
            data-story-gif
            className="absolute -right-[8vw] top-[12vh] w-[46vw] max-w-[620px] aspect-[4/5] rounded-[3rem] overflow-hidden opacity-[0.16] hidden md:block"
          >
            <ThemeVideo theme={current} posterWidth={800} className="w-full h-full object-cover scale-110" />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, var(--t-bg), transparent 40%, transparent 70%, var(--t-bg))' }}
            />
          </div>
          {/* Número gigante */}
          <div className="absolute left-[4vw] md:left-[2vw] bottom-[4vh] leading-none select-none">
            {STEPS.map((n, i) => (
              <span
                key={n}
                data-num
                className="absolute left-0 bottom-0 text-[34vw] md:text-[24vw] font-black tracking-[-0.06em] opacity-0"
                style={{ WebkitTextStroke: '1px var(--t-border-light)', color: 'transparent' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            ))}
          </div>
        </div>

        {/* ---- Contenido ---- */}
        <div className="relative h-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 pt-16 md:pt-0 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
          {/* Escenario de artefactos (arriba en mobile, derecha en desktop) */}
          <div className="order-1 md:order-2 relative w-full md:w-[48%] h-[34svh] md:h-[70svh] flex items-center justify-center">
            {ARTS.map((Art, i) => (
              <div key={i} data-art className="absolute opacity-0 will-change-transform">
                <div className="scale-[0.8] md:scale-100">
                  <Art />
                </div>
              </div>
            ))}
          </div>

          {/* Texto */}
          <div className="order-2 md:order-1 relative w-full md:w-[52%]">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span data-counter className="text-xs font-mono text-t-text-tertiary tabular-nums">
                01
              </span>
              <span className="relative w-24 h-px bg-t-border-light/60 overflow-hidden">
                <span data-progress className="absolute inset-0 bg-t-accent origin-left" />
              </span>
              <span className="text-xs font-mono text-t-text-tertiary">{String(STEPS.length).padStart(2, '0')}</span>
            </div>

            <div className="relative h-[22svh] md:h-[40svh] flex items-center">
              {STEPS.map((n) => (
                <p
                  key={n}
                  data-step
                  className="absolute inset-x-0 text-[clamp(1.6rem,3.6vw,3.4rem)] font-semibold leading-[1.12] tracking-[-0.02em] opacity-0 will-change-transform"
                >
                  {t(`home.story.${n}.pre`)}{sep}<span className="text-t-accent">{t(`home.story.${n}.word`)}</span>
                  {t(`home.story.${n}.post`)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
