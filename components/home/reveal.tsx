'use client'

import { useRef, type ReactNode } from 'react'
import { gsap, useGSAP, EASE_OUT } from '@/lib/gsap'

/**
 * Revela palabra por palabra con el "skew reveal" clásico (y + skewY, stagger corto).
 * Cada palabra va en un span con overflow-hidden para el efecto de cortina.
 */
export function RevealWords({
  text,
  className,
  wordClassName,
  delay = 0,
  onScroll = true,
  as: Tag = 'span',
}: {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  /** true: anima al entrar en viewport. false: anima al montar. */
  onScroll?: boolean
  as?: 'span' | 'p' | 'h1' | 'h2'
}) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const words = ref.current?.querySelectorAll<HTMLElement>('[data-word]')
      if (!words?.length) return
      gsap.fromTo(
        words,
        { yPercent: 110, skewY: 7, opacity: 0 },
        {
          yPercent: 0,
          skewY: 0,
          opacity: 1,
          duration: 0.9,
          ease: EASE_OUT,
          stagger: 0.04,
          delay,
          scrollTrigger: onScroll
            ? { trigger: ref.current, start: 'top 88%', toggleActions: 'play none none none' }
            : undefined,
        }
      )
    },
    { scope: ref, dependencies: [text] }
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = Tag as any
  return (
    <Comp ref={ref} className={className}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em] mr-[0.28em] last:mr-0">
          <span data-word className={`inline-block origin-bottom-left will-change-transform ${wordClassName ?? ''}`}>
            {w}
          </span>
        </span>
      ))}
    </Comp>
  )
}

/** Fade + subida simple al entrar en viewport. */
export function RevealBlock({
  children,
  className,
  delay = 0,
  y = 32,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!ref.current) return
      gsap.fromTo(
        ref.current,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: EASE_OUT,
          delay,
          scrollTrigger: { trigger: ref.current, start: 'top 88%', toggleActions: 'play none none none' },
        }
      )
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
