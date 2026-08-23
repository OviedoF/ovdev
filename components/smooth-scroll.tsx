'use client'

import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'

let lenis: Lenis | null = null

/** Scroll suave hacia un target (selector, elemento o número). Cae a window.scrollTo si Lenis no está activo. */
export function scrollTo(target: string | HTMLElement | number, offset = 0) {
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.2 })
    return
  }
  const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target
  const top = typeof el === 'number' ? el : (el?.getBoundingClientRect().top ?? 0) + window.scrollY + offset
  window.scrollTo({ top, behavior: 'smooth' })
}

/** Pausa/reanuda el scroll suave (p. ej. mientras hay un modal abierto). */
export function stopScroll() {
  lenis?.stop()
}
export function startScroll() {
  lenis?.start()
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Respetar reduced-motion: scroll nativo, sin inercia
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    lenis = new Lenis({ lerp: 0.14, wheelMultiplier: 1.15, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time: number) => lenis?.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis?.destroy()
      lenis = null
    }
  }, [])

  return <>{children}</>
}
