'use client'

import { useRef } from 'react'
import { useTranslation } from '@/lib/i18n'
import { gsap, useGSAP } from '@/lib/gsap'
import { projects } from '@/lib/projects'
import { useTranslatedProjects } from '@/lib/translations'
import TransitionLink from '@/components/transition-link'
import { RevealWords } from './reveal'

// Destacados de la home (orden = orden de aparición)
const FEATURED = ['petnder', 'controla2', 'saucedo-abogados', 'dental-digital', 'fuku-shop', 'biznes']

const FEATURED_PROJECTS = FEATURED.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean) as typeof projects
/**
 * Galería horizontal: en desktop la sección se fija y el scroll vertical
 * mueve las tarjetas en horizontal (scrub). En mobile es un carrusel nativo con snap.
 */
export default function HomeProjects() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const featured = useTranslatedProjects(FEATURED_PROJECTS)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => {
        const track = ref.current?.querySelector<HTMLElement>('[data-track]')
        const pinEl = ref.current?.querySelector<HTMLElement>('[data-pin]')
        if (!track || !pinEl) return
        const distance = () => track.scrollWidth - pinEl.clientWidth

        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: pinEl,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onToggle: (self) => gsap.set(track, { willChange: self.isActive ? 'transform' : 'auto' }),
          },
        })
      })
      return () => mm.revert()
    },
    { scope: ref }
  )

  return (
    <section ref={ref} data-pattern="none" className="py-16 md:py-0">
      <div data-pin className="md:h-[100svh] flex flex-col justify-center overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20 mb-8 md:mb-12">
          <div className="max-w-[1200px] mx-auto flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-widest text-t-text-tertiary mb-4">
                <RevealWords text={t('home.projects.label')} />
              </p>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1]">
                <RevealWords text={t('home.projects.title')} />
              </h2>
            </div>
            <TransitionLink
              href="/work"
              className="group inline-flex items-center gap-2 text-sm text-t-text-secondary hover:text-t-accent transition-colors"
            >
              {t('home.projects.all')}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </TransitionLink>
          </div>
        </div>

        {/* Track: en mobile scrollea nativo; en desktop lo mueve GSAP */}
        <div
          data-track
          className="flex gap-5 md:gap-8 px-6 md:px-12 lg:px-20 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scroll-pl-6 md:scroll-pl-12 lg:scroll-pl-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featured.map((p, i) => (
            <TransitionLink
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group shrink-0 snap-start w-[78vw] sm:w-[60vw] md:w-[44vw] lg:w-[36vw] max-w-[560px]"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-t-card border border-t-border-light/40">
                <img
                  src={p.image}
                  alt={p.title}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                />
                <span className="absolute top-4 left-4 text-[11px] font-mono text-t-text/80 bg-t-bg/60 backdrop-blur px-2.5 py-1 rounded-full">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight group-hover:text-t-accent transition-colors">.{p.title}</h3>
                  <p className="text-xs md:text-sm text-t-text-tertiary mt-1 line-clamp-1">{p.categories}</p>
                </div>
                <span className="text-xs text-t-text-tertiary whitespace-nowrap mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('home.projects.view')} →
                </span>
              </div>
            </TransitionLink>
          ))}
          {/* aire al final del track */}
          <div className="shrink-0 w-6 md:w-12 lg:w-20" aria-hidden />
        </div>
      </div>
    </section>
  )
}
