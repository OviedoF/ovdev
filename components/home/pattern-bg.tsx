'use client'

import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

/**
 * Fondo global del home: una capa fija con distintos patrones (puntos, grilla,
 * diagonales, cruces). Cada sección declara `data-pattern="dots|grid|diag|cross|none"`
 * y, al entrar en viewport, el patrón nuevo aparece con un "wipe" radial desde el
 * centro mientras el anterior se desvanece y escala.
 */

export type PatternName = 'dots' | 'grid' | 'diag' | 'cross'

// Cada patrón es una "forma" en mask-image sobre un relleno de color de borde,
// así todos responden al tema y se pueden mezclar con el wipe.
const CROSS_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 18v12M18 24h12' stroke='%23000' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E\")"

const PATTERNS: Record<PatternName, { mask: string; size: string; opacity: number }> = {
  dots: { mask: 'radial-gradient(#000 1.1px, transparent 1.2px)', size: '28px 28px', opacity: 0.42 },
  grid: {
    mask: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
    size: '64px 64px',
    opacity: 0.22,
  },
  diag: { mask: 'repeating-linear-gradient(-45deg, #000 0 1px, transparent 1px 22px)', size: 'auto', opacity: 0.2 },
  cross: { mask: CROSS_SVG, size: '48px 48px', opacity: 0.32 },
}

const NAMES = Object.keys(PATTERNS) as PatternName[]

export default function PatternBg() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = ref.current!
      const layers = new Map<string, HTMLElement>()
      root.querySelectorAll<HTMLElement>('[data-layer]').forEach((el) => layers.set(el.dataset.layer!, el))

      let currentName: string | null = null

      const show = (name: string) => {
        if (name === currentName) return
        const prev = currentName
        currentName = name

        // saliente: se desvanece y crece un poco
        if (prev && layers.has(prev)) {
          const out = layers.get(prev)!
          gsap.killTweensOf(out)
          gsap.to(out, { autoAlpha: 0, scale: 1.08, rotate: 2, duration: 0.9, ease: 'power2.inOut' })
        }
        // entrante: la opacidad sube rápido y el wipe radial "abre" el patrón desde el centro
        if (layers.has(name)) {
          const inn = layers.get(name)!
          gsap.killTweensOf(inn)
          gsap.set(inn, { scale: 0.94, rotate: -2, '--wipe': '0%' })
          gsap.to(inn, { autoAlpha: PATTERNS[name as PatternName].opacity, duration: 0.35, ease: 'power1.out' })
          gsap.to(inn, { scale: 1, rotate: 0, '--wipe': '140%', duration: 1.3, ease: 'power3.inOut' })
        }
      }

      // Una ScrollTrigger por sección marcada. El "centro" de la pantalla decide qué patrón manda.
      const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-pattern]'))
      const triggers = sections.map((sec) =>
        ScrollTrigger.create({
          trigger: sec,
          start: 'top 55%',
          end: 'bottom 55%',
          // Se refresca después de los pins (carrusel de proyectos), si no las posiciones quedan desfasadas
          refreshPriority: -1,
          onEnter: () => show(sec.dataset.pattern || 'none'),
          onEnterBack: () => show(sec.dataset.pattern || 'none'),
        })
      )

      // Estado inicial: la sección que ya esté bajo el centro al cargar.
      const initial = sections.find((s) => {
        const r = s.getBoundingClientRect()
        return r.top <= window.innerHeight * 0.55 && r.bottom > window.innerHeight * 0.55
      })
      if (initial) {
        const n = initial.dataset.pattern || 'none'
        currentName = n
        if (layers.has(n)) gsap.set(layers.get(n)!, { autoAlpha: PATTERNS[n as PatternName].opacity, '--wipe': '140%' })
      }

      return () => {
        triggers.forEach((t) => t.kill())
      }
    },
    { scope: ref }
  )

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, #000 35%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, #000 35%, transparent 100%)',
      }}
    >
      {NAMES.map((name) => (
        <div
          key={name}
          data-layer={name}
          className="absolute inset-[-12%] opacity-0 invisible"
          style={
            {
              '--wipe': '0%',
              maskImage: 'radial-gradient(circle at 50% 50%, #000 calc(var(--wipe) - 25%), transparent var(--wipe))',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000 calc(var(--wipe) - 25%), transparent var(--wipe))',
            } as React.CSSProperties
          }
        >
          <div
            data-shape
            className="absolute inset-0"
            style={{
              backgroundColor: 'var(--t-border-light)',
              maskImage: PATTERNS[name].mask,
              WebkitMaskImage: PATTERNS[name].mask,
              maskSize: PATTERNS[name].size,
              WebkitMaskSize: PATTERNS[name].size,
            }}
          />
        </div>
      ))}
    </div>
  )
}
