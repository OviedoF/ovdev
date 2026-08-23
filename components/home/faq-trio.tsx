'use client'

import { useRef } from 'react'
import { useTranslation } from '@/lib/i18n'
import { gsap, useGSAP, EASE_OUT } from '@/lib/gsap'
import TransitionLink from '@/components/transition-link'
import { RevealWords } from './reveal'

/** "¿Cuánto cuesta? / ¿Y después? / Dormí tranquilo" — el tercero vende el plan mensual. */
export default function HomeFaqTrio() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '[data-faq-card]',
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: EASE_OUT,
          stagger: 0.15,
          scrollTrigger: { trigger: '[data-faq-grid]', start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    },
    { scope: ref }
  )

  const cards = [
    { n: 1, highlight: false },
    { n: 2, highlight: false },
    { n: 3, highlight: true },
  ]

  return (
    <section ref={ref} data-pattern="cross" className="px-6 md:px-12 lg:px-20 py-24 md:py-40">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-t-text-tertiary mb-12 md:mb-16">
          <RevealWords text={t('home.faq.label')} />
        </p>

        <div data-faq-grid className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map(({ n, highlight }) => (
            <article
              key={n}
              data-faq-card
              className={[
                'relative flex flex-col rounded-3xl p-8 md:p-10 opacity-0 will-change-transform',
                highlight
                  ? 'bg-t-card border border-t-accent/50 shadow-[0_20px_80px_-30px_var(--t-glow-strong)]'
                  : 'border border-t-border-light/50',
              ].join(' ')}
            >
              <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.05] mb-5">
                {t(`home.faq.${n}.title`)}
              </h3>
              <p className="text-base md:text-lg text-t-text-secondary leading-relaxed">{t(`home.faq.${n}.desc`)}</p>

              {highlight && (
                <div className="mt-8 pt-6 border-t border-t-border-light/50 flex items-center justify-between gap-4 flex-wrap">
                  <span className="text-xl md:text-2xl font-bold text-t-accent">{t('home.faq.3.price')}</span>
                  <TransitionLink
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-t-btn-bg text-t-btn-text text-sm font-semibold hover:scale-[1.03] transition-transform duration-300"
                  >
                    {t('home.faq.3.cta')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </TransitionLink>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
