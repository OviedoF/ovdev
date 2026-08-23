'use client'

import { useRef } from 'react'
import { gsap, useGSAP, EASE_OUT } from '@/lib/gsap'

/**
 * "Pantalla" 3D en CSS: la captura del proyecto dentro de una ventana/monitor con bisel,
 * barra superior y reflejo. Entra inclinada, se endereza con el scroll y sigue al mouse
 * con un tilt suave. Sin WebGL: puro transform 3D (compositor).
 */
export default function DeviceMockup({ image, title }: { image: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const scrollWrap = ref.current!.querySelector<HTMLElement>('[data-scroll]')!
      const tilt = ref.current!.querySelector<HTMLElement>('[data-tilt]')!
      const glare = ref.current!.querySelector<HTMLElement>('[data-glare]')!
      const shadow = ref.current!.querySelector<HTMLElement>('[data-shadow]')!

      // Entrada: cae desde atrás, inclinada
      gsap.fromTo(
        scrollWrap,
        { autoAlpha: 0, y: 90, rotateX: 28, rotateY: -18, scale: 0.94 },
        { autoAlpha: 1, y: 0, rotateX: 14, rotateY: -10, scale: 1, duration: 1.4, ease: EASE_OUT, delay: 0.25 },
      )
      gsap.fromTo(shadow, { autoAlpha: 0, scaleX: 0.7 }, { autoAlpha: 1, scaleX: 1, duration: 1.4, ease: EASE_OUT, delay: 0.35 })

      // Scroll: se endereza y gira levemente hacia el otro lado mientras baja
      gsap.to(scrollWrap, {
        rotateX: -5,
        rotateY: 6,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top 75%', end: 'bottom 20%', scrub: 0.6 },
      })

      // Mouse: tilt adicional + reflejo que se mueve
      if (!window.matchMedia('(hover: hover)').matches) return
      const rx = gsap.quickTo(tilt, 'rotationX', { duration: 0.6, ease: 'power3.out' })
      const ry = gsap.quickTo(tilt, 'rotationY', { duration: 0.6, ease: 'power3.out' })
      const gx = gsap.quickTo(glare, 'xPercent', { duration: 0.6, ease: 'power3.out' })
      const onMove = (e: MouseEvent) => {
        const r = tilt.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        rx(py * -10)
        ry(px * 12)
        gx(px * 60)
      }
      const onLeave = () => {
        rx(0)
        ry(0)
        gx(0)
      }
      tilt.addEventListener('mousemove', onMove)
      tilt.addEventListener('mouseleave', onLeave)
      return () => {
        tilt.removeEventListener('mousemove', onMove)
        tilt.removeEventListener('mouseleave', onLeave)
      }
    },
    { scope: ref },
  )

  const host = title.toLowerCase().replace(/[^a-z0-9]+/g, '') + '.com'

  return (
    <div ref={ref} className="relative mx-auto max-w-[1100px] pt-4 md:pt-8 pb-16 md:pb-24" style={{ perspective: '1600px' }}>
      {/* sombra en el "piso" (gradiente, sin filter) */}
      <div
        data-shadow
        aria-hidden
        className="absolute left-[6%] right-[6%] bottom-4 md:bottom-8 h-24 md:h-32 rounded-[50%] opacity-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,.55) 0%, rgba(0,0,0,.25) 40%, transparent 70%)' }}
      />

      <div data-scroll className="relative opacity-0 invisible will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
        <div data-tilt className="relative" style={{ transformStyle: 'preserve-3d' }}>
          {/* bisel */}
          <div className="relative rounded-[1.1rem] md:rounded-[1.5rem] p-[5px] md:p-2 bg-[#0c0c16] shadow-[0_60px_120px_-30px_rgba(0,0,0,.8),inset_0_1px_0_rgba(255,255,255,.08)]">
            <div className="relative rounded-[0.8rem] md:rounded-[1.1rem] overflow-hidden bg-t-card">
              {/* barra de ventana */}
              <div className="relative flex items-center h-8 md:h-10 px-3 md:px-4 bg-black/40 border-b border-white/10">
                <span className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 text-[10px] md:text-[11px] font-mono text-t-text-tertiary">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {host}
                </span>
              </div>
              {/* pantalla */}
              <div className="relative aspect-[16/10]">
                <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                <div
                  data-glare
                  aria-hidden
                  className="absolute -inset-x-1/2 inset-y-0 pointer-events-none mix-blend-screen"
                  style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,.16) 50%, transparent 65%)' }}
                />
              </div>
            </div>
          </div>
          {/* "base" / canto inferior que da grosor */}
          <div
            aria-hidden
            className="absolute left-[3%] right-[3%] -bottom-[6px] h-[10px] rounded-b-2xl bg-[#07070f]"
            style={{ transform: 'translateZ(-6px)' }}
          />
        </div>
      </div>
    </div>
  )
}
