'use client'

import { useRef, type ReactNode } from 'react'
import { ArrowRight, ArrowUpRight, Code2, LifeBuoy, MessageCircle, Route, Sparkles } from 'lucide-react'
import { track } from '@vercel/analytics'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FAQItem from '@/components/FAQItem'
import PatternBg from '@/components/home/pattern-bg'
import TransitionLink from '@/components/transition-link'
import { RevealWords, RevealBlock } from '@/components/home/reveal'
import { useTranslation } from '@/lib/i18n'
import { waLink } from '@/lib/site'
import { gsap, useGSAP, EASE_OUT } from '@/lib/gsap'

/**
 * Landing por nicho (odontólogos, estudios jurídicos, ...).
 * Todo el copy vive en i18n bajo `landing.<ns>.*`; lo compartido bajo `landing.*`.
 * Las claves faltantes en otros idiomas caen al español.
 */
export type NicheConfig = {
  /** namespace de i18n: landing.<ns>.* */
  ns: string
  /** slug del proyecto que se muestra como caso */
  caseSlug: string
  /** capturas del caso, la primera es la grande */
  images: string[]
  /** clave i18n del testimonio */
  quoteKey: string
  /** íconos de las 6 funcionalidades */
  featureIcons: ReactNode[]
}

const PROCESS_ICONS: ReactNode[] = [
  <MessageCircle key="1" className="w-4 h-4" strokeWidth={2} />,
  <Route key="2" className="w-4 h-4" strokeWidth={2} />,
  <Code2 key="3" className="w-4 h-4" strokeWidth={2} />,
  <LifeBuoy key="4" className="w-4 h-4" strokeWidth={2} />,
]

function Eyebrow({ n, text, className = '' }: { n: string; text: string; className?: string }) {
  return (
    <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-t-text-tertiary ${className}`}>
      <span className="font-mono text-t-accent">{n}</span>
      <span className="w-8 h-px bg-t-accent/60" />
      {text}
    </p>
  )
}

function WhatsAppButton({ href, label, page, className = '' }: { href: string; label: string; page: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('whatsapp_click', { page })}
      className={`group inline-flex items-center gap-2.5 pl-5 pr-4 py-3 rounded-full bg-t-accent text-t-bg font-semibold text-sm tracking-tight whitespace-nowrap shadow-[0_16px_40px_-14px_var(--t-accent)] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.06] ${className}`}
    >
      <span className="relative flex w-2 h-2">
        <span className="absolute inset-0 rounded-full bg-t-bg/60 animate-ping" />
        <span className="relative w-2 h-2 rounded-full bg-t-bg" />
      </span>
      {label}
      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
    </a>
  )
}

export default function NicheLanding({ ns, caseSlug, images, quoteKey, featureIcons }: NicheConfig) {
  const { t } = useTranslation()
  const k = (s: string) => t(`landing.${ns}.${s}`)
  const ref = useRef<HTMLElement>(null)
  const wa = waLink(k('wa'))

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
        gsap.fromTo(
          group.querySelectorAll('[data-item]'),
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: EASE_OUT, stagger: 0.08, scrollTrigger: { trigger: group, start: 'top 82%', once: true } },
        )
      })
    },
    { scope: ref },
  )

  const pains = [1, 2, 3, 4] as const
  const feats = [1, 2, 3, 4, 5, 6] as const
  const steps = [1, 2, 3, 4] as const
  const faqs = [1, 2, 3, 4] as const

  return (
    <main ref={ref} className="min-h-screen">
      <Navigation />
      <PatternBg />

      {/* ===================== HERO ===================== */}
      <section data-pattern="dots" className="px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Eyebrow n="01" text={k('eyebrow')} className="mb-8" />
          <h1 className="text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-[1] tracking-[-0.03em] text-t-text max-w-[900px]">
            <RevealWords text={k('title')} onScroll={false} delay={0.15} />
          </h1>
          <RevealBlock delay={0.5}>
            <p className="mt-8 text-lg md:text-xl text-t-text-secondary leading-relaxed max-w-[620px]">{k('sub')}</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <WhatsAppButton href={wa} label={t('landing.cta')} page={ns} />
              <TransitionLink
                href={`/work/${caseSlug}`}
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-t-border-light/60 text-sm font-semibold text-t-text hover:border-t-accent/70 hover:text-t-accent transition-colors"
              >
                {t('landing.cta2')}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </TransitionLink>
              <span className="inline-flex items-center gap-2 text-sm text-t-text-tertiary">
                <Sparkles className="w-4 h-4 text-t-accent" />
                {t('landing.note')}
              </span>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ===================== TE SUENA ===================== */}
      <section data-pattern="grid" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto">
          <Eyebrow n="02" text={t('landing.pains.label')} className="mb-6" />
          <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-t-text max-w-[720px]">
            <RevealWords text={k('pains.title')} />
          </h2>
          <ul data-stagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {pains.map((n) => (
              <li key={n} data-item className="opacity-0 invisible rounded-2xl border border-t-border-light/40 bg-t-card/40 p-6 md:p-7">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-t-text">{k(`pain${n}.t`)}</h3>
                <p className="mt-2.5 text-[15px] md:text-base text-t-text-secondary leading-relaxed">{k(`pain${n}.d`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== QUÉ INCLUYE ===================== */}
      <section data-pattern="cross" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto">
          <Eyebrow n="03" text={t('landing.feat.label')} className="mb-6" />
          <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-t-text max-w-[720px]">
            <RevealWords text={k('feat.title')} />
          </h2>
          <ul data-stagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {feats.map((n, i) => (
              <li key={n} data-item className="opacity-0 invisible">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-t-accent/12 text-t-accent">{featureIcons[i]}</span>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-t-text">{k(`f${n}.t`)}</h3>
                <p className="mt-2 text-[15px] text-t-text-secondary leading-relaxed">{k(`f${n}.d`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== CASO ===================== */}
      <section data-pattern="diag" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
          <div>
            <Eyebrow n="04" text={t('landing.case.label')} className="mb-6" />
            <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-t-text">
              <RevealWords text={k('case.title')} />
            </h2>
            <RevealBlock>
              <p className="mt-5 text-base md:text-lg text-t-text-secondary leading-relaxed">{k('case.desc')}</p>
              <blockquote className="mt-8 border-l-2 border-t-accent pl-5">
                <p className="text-base md:text-lg text-t-text leading-relaxed">{t(quoteKey)}</p>
                <footer className="mt-3 text-sm text-t-text-tertiary">{k('case.author')}</footer>
              </blockquote>
              <TransitionLink
                href={`/work/${caseSlug}`}
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-t-text hover:text-t-accent transition-colors"
              >
                {t('landing.case.link')}
                <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1" />
              </TransitionLink>
            </RevealBlock>
          </div>
          <RevealBlock delay={0.15} className="grid gap-4">
            <img
              src={images[0]}
              alt={k('case.title')}
              loading="lazy"
              className="w-full rounded-2xl border border-t-border-light/40 shadow-[0_30px_80px_-30px_rgba(0,0,0,.6)]"
            />
            {images[1] && (
              <img src={images[1]} alt="" loading="lazy" className="w-3/4 ml-auto rounded-2xl border border-t-border-light/40 shadow-[0_30px_80px_-30px_rgba(0,0,0,.6)]" />
            )}
          </RevealBlock>
        </div>
      </section>

      {/* ===================== PRECIO Y TIEMPOS ===================== */}
      <section data-pattern="dots" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto">
          <Eyebrow n="05" text={t('landing.price.label')} className="mb-6" />
          <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-t-text max-w-[720px]">
            <RevealWords text={t('landing.price.title')} />
          </h2>
          <dl data-stagger className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[1, 2, 3].map((n) => (
              <div key={n} data-item className="opacity-0 invisible rounded-2xl border border-t-border-light/40 bg-t-card/40 p-6 md:p-7">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-t-text-tertiary">{t(`landing.price.${n}.k`)}</dt>
                <dd className="mt-3 text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.02em] text-t-text leading-none">{t(`landing.price.${n}.v`)}</dd>
                <dd className="mt-3 text-[15px] text-t-text-secondary leading-relaxed">{t(`landing.price.${n}.d`)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===================== PROCESO ===================== */}
      <section data-pattern="grid" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto">
          <Eyebrow n="06" text={t('landing.process.label')} className="mb-6" />
          <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-t-text">
            <RevealWords text={t('aboutPage.process.title')} />
          </h2>
          <ol data-stagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {steps.map((n, i) => (
              <li key={n} data-item className="opacity-0 invisible rounded-2xl border border-t-border-light/40 p-6">
                <span className="grid place-items-center w-9 h-9 rounded-full border border-t-accent text-t-accent">{PROCESS_ICONS[i]}</span>
                <span className="mt-5 block text-[11px] font-mono text-t-text-tertiary">0{n}</span>
                <h3 className="mt-1 text-base md:text-lg font-bold tracking-tight text-t-text">{t(`aboutPage.process.card${n}.title`)}</h3>
                <p className="mt-2 text-[15px] text-t-text-secondary leading-relaxed">{t(`aboutPage.process.card${n}.desc`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section data-pattern="cross" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <Eyebrow n="07" text={t('landing.faq.label')} className="mb-6" />
            <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-t-text">
              <RevealWords text={t('aboutPage.faq.title')} />
            </h2>
            <RevealBlock>
              <a href={wa} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click', { page: ns, where: 'faq' })} className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-t-text hover:text-t-accent transition-colors">
                {t('landing.faq.more')}
                <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1" />
              </a>
            </RevealBlock>
          </div>
          <RevealBlock delay={0.1}>
            {faqs.map((n) => (
              <FAQItem key={n} question={k(`q${n}`)} answer={k(`a${n}`)} isOpen={n === 1} />
            ))}
          </RevealBlock>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section data-pattern="none" className="px-6 md:px-12 lg:px-20 py-24 md:py-36">
        <div className="max-w-[820px] mx-auto text-center">
          <h2 className="text-[clamp(2.2rem,6vw,4.6rem)] font-bold leading-[0.98] tracking-[-0.03em] text-t-text">
            <RevealWords text={k('cta.title')} />
          </h2>
          <RevealBlock>
            <p className="mt-6 text-base md:text-lg text-t-text-secondary max-w-[520px] mx-auto leading-relaxed">{t('landing.cta.desc')}</p>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-5">
              <WhatsAppButton href={wa} label={t('landing.cta')} page={ns} />
              <TransitionLink href="/contact" className="text-sm font-semibold text-t-text-secondary hover:text-t-accent transition-colors">
                {t('landing.cta.form')}
              </TransitionLink>
            </div>
          </RevealBlock>
        </div>
      </section>

      <Footer />
    </main>
  )
}
