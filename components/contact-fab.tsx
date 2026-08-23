'use client'

import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import TransitionLink from '@/components/transition-link'
import { useTranslation } from '@/lib/i18n'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

/** El botón en sí. Se usa dos veces: flotando (fixed) y "posado" en la última sección del home. */
export function ContactButton({ className = '' }: { className?: string }) {
  const { t } = useTranslation()
  return (
    <TransitionLink
      href="/contact"
      className={`group inline-flex items-center gap-2.5 pl-5 pr-4 py-3 rounded-full bg-t-accent text-t-bg font-semibold text-sm tracking-tight whitespace-nowrap shadow-[0_16px_40px_-14px_var(--t-accent)] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.06] ${className}`}
    >
      <span className="relative flex w-2 h-2">
        <span className="absolute inset-0 rounded-full bg-t-bg/60 animate-ping" />
        <span className="relative w-2 h-2 rounded-full bg-t-bg" />
      </span>
      {t('fab.label')}
      <ArrowUpRight
        className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2.2}
      />
    </TransitionLink>
  )
}

const TILT = -6

/**
 * Botón de contacto fijo (arriba a la derecha en desktop, abajo a la derecha en mobile), inclinado.
 * Si la página tiene un `[data-fab-slot]` (la última sección del home), al llegar ahí el botón
 * "vuela" desde la esquina hasta ese lugar, se endereza y pasa a formar parte de la sección.
 * Al volver a subir, despega y vuelve a la esquina.
 */
export default function ContactFab() {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const fab = ref.current
      if (!fab) return
      const inner = fab.firstElementChild as HTMLElement

      gsap.set(inner, { rotate: TILT })
      gsap.fromTo(fab, { autoAlpha: 0, y: -16, x: 16 }, { autoAlpha: 1, y: 0, x: 0, duration: 0.9, ease: 'power4.out', delay: 0.5 })

      const slot = document.querySelector<HTMLElement>('[data-fab-slot]')
      if (!slot) return

      const st = { p: 0 } // 0 = en la esquina, 1 = posado en el slot
      let flight: gsap.core.Tween | null = null

      // Posición "base" del fab (sin su transform) y objetivo vivo del slot → interpola según p
      const apply = () => {
        const x = (gsap.getProperty(fab, 'x') as number) || 0
        const y = (gsap.getProperty(fab, 'y') as number) || 0
        const r = fab.getBoundingClientRect()
        const s = slot.getBoundingClientRect()
        const arc = Math.sin(st.p * Math.PI) // 0 → 1 → 0: arco y leve zoom a mitad de vuelo
        gsap.set(fab, { x: (s.left - (r.left - x)) * st.p, y: (s.top - (r.top - y)) * st.p - arc * 70 })
        gsap.set(inner, { rotate: TILT * (1 - st.p) + arc * 6, scale: 1 + arc * 0.1 })
      }

      const dock = () => {
        flight?.kill()
        gsap.set(slot, { visibility: 'hidden' })
        gsap.set(fab, { autoAlpha: 1, overwrite: 'auto' })
        flight = gsap.to(st, {
          p: 1,
          duration: 0.85,
          ease: 'power3.inOut',
          onUpdate: apply,
          onComplete: () => {
            // ya aterrizó: el de la sección toma el relevo y el flotante se apaga
            gsap.set(slot, { visibility: 'visible' })
            gsap.set(fab, { autoAlpha: 0 })
          },
        })
      }

      const undock = () => {
        flight?.kill()
        gsap.set(slot, { visibility: 'hidden' })
        gsap.set(fab, { autoAlpha: 1, overwrite: 'auto' })
        apply() // arranca exactamente donde está el slot ahora
        flight = gsap.to(st, { p: 0, duration: 0.75, ease: 'power3.inOut', onUpdate: apply })
      }

      const trigger = ScrollTrigger.create({ trigger: slot, start: 'top 78%', onEnter: dock, onLeaveBack: undock })

      return () => {
        trigger.kill()
        flight?.kill()
      }
    },
    { scope: ref, dependencies: [pathname] },
  )

  if (pathname === '/contact') return null

  return (
    // Mobile: centrado abajo (arriba está la barra y abajo a la derecha la card del tema). Desktop: arriba a la derecha.
    <div className="fixed z-[45] pointer-events-none inset-x-0 bottom-5 flex justify-center md:inset-x-auto md:bottom-auto md:top-7 md:right-8 md:block">
      <div ref={ref} data-fab className="pointer-events-auto opacity-0 invisible will-change-transform">
        <div>
          <ContactButton />
        </div>
      </div>
    </div>
  )
}
