'use client'

import { useRef, type ReactNode } from 'react'
import { ArrowRight, ArrowUpRight, Code2, LifeBuoy, MessageCircle, Route, Sparkles } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FAQItem from '@/components/FAQItem'
import PatternBg from '@/components/home/pattern-bg'
import TransitionLink from '@/components/transition-link'
import { ContactButton } from '@/components/contact-fab'
import { RevealWords, RevealBlock } from '@/components/home/reveal'
import { useTranslation } from '@/lib/i18n'
import { gsap, ScrollTrigger, useGSAP, EASE_OUT } from '@/lib/gsap'

/* ------------------------------------------------------------------ */
/* Piezas                                                              */
/* ------------------------------------------------------------------ */

function Eyebrow({ n, text, className = '' }: { n: string; text: string; className?: string }) {
  return (
    <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-t-text-tertiary ${className}`}>
      <span className="font-mono text-t-accent">{n}</span>
      <span className="w-8 h-px bg-t-accent/60" />
      {text}
    </p>
  )
}

/** Número que cuenta hasta `target` al entrar en pantalla */
function Counter({ target, suffix = '+', label }: { target: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      const num = ref.current!.querySelector<HTMLElement>('[data-num]')!
      const obj = { v: 0 }
      gsap.to(obj, {
        v: target,
        duration: 1.8,
        ease: 'power3.out',
        onUpdate: () => (num.textContent = String(Math.round(obj.v))),
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      })
    },
    { scope: ref },
  )
  return (
    <div ref={ref} className="rounded-2xl border border-t-border-light/40 bg-t-card/40 p-5 md:p-6">
      <div className="flex items-baseline gap-0.5">
        <span data-num className="text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-none tracking-[-0.03em] tabular-nums text-t-text">
          0
        </span>
        <span className="text-2xl md:text-3xl font-bold text-t-accent leading-none">{suffix}</span>
      </div>
      <p className="mt-2 text-xs md:text-sm text-t-text-tertiary">{label}</p>
    </div>
  )
}

/** Datos clave del hero: lista tipográfica, sin cajas. Entra en stagger. */
function Facts() {
  const { t } = useTranslation()
  const ref = useRef<HTMLDListElement>(null)
  useGSAP(
    () => {
      gsap.fromTo(
        ref.current!.querySelectorAll('[data-fact]'),
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: EASE_OUT, stagger: 0.09, delay: 0.55 },
      )
      gsap.fromTo(ref.current!.querySelectorAll('[data-rule]'), { scaleX: 0 }, { scaleX: 1, duration: 1, ease: EASE_OUT, stagger: 0.09, delay: 0.5 })
    },
    { scope: ref },
  )
  const facts: [string, ReactNode][] = [
    [t('aboutPage.fact.location.k'), t('aboutPage.fact.location.v')],
    [t('aboutPage.fact.exp.k'), t('aboutPage.fact.exp.v')],
    [
      t('aboutPage.fact.avail.k'),
      <span key="a" className="inline-flex items-center gap-2">
        <span className="relative flex w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
          <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
        </span>
        {t('aboutPage.fact.avail.v')}
      </span>,
    ],
    [t('aboutPage.fact.reply.k'), t('aboutPage.fact.reply.v')],
  ]
  return (
    <dl ref={ref} className="w-full md:max-w-[380px] md:ml-auto md:pt-6">
      {facts.map(([k, v], i) => (
        <div key={i} className="relative py-4 md:py-5">
          <span data-rule aria-hidden className="absolute left-0 top-0 w-full h-px bg-t-border-light/50 origin-left" />
          <div data-fact className="flex items-baseline justify-between gap-6 opacity-0 invisible">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-t-text-tertiary">{k}</dt>
            <dd className="text-sm md:text-[15px] font-medium text-t-text text-right">{v}</dd>
          </div>
        </div>
      ))}
      <span data-rule aria-hidden className="block w-full h-px bg-t-border-light/50 origin-left" />
    </dl>
  )
}

const TECH = [
  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'React Native', 'Expo'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs', 'WebSockets'] },
  { label: 'Datos', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma', 'Supabase'] },
  { label: 'Infra & tools', items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Figma', 'Stripe'] },
]

const PROCESS_ICONS: ReactNode[] = [
  <MessageCircle key="1" className="w-4 h-4" strokeWidth={2} />,
  <Route key="2" className="w-4 h-4" strokeWidth={2} />,
  <Code2 key="3" className="w-4 h-4" strokeWidth={2} />,
  <LifeBuoy key="4" className="w-4 h-4" strokeWidth={2} />,
]

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      // Chips del stack: pop en stagger por fila
      gsap.utils.toArray<HTMLElement>('[data-tech-row]').forEach((row) => {
        gsap.fromTo(
          row.querySelectorAll('[data-chip]'),
          { autoAlpha: 0, y: 10, scale: 0.9 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.8)', stagger: 0.04, scrollTrigger: { trigger: row, start: 'top 85%', once: true } },
        )
      })

      // Línea de tiempo del proceso: se "dibuja" con el scroll
      const line = document.querySelector<HTMLElement>('[data-line-fill]')
      const list = document.querySelector<HTMLElement>('[data-timeline]')
      if (line && list) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          { scaleY: 1, ease: 'none', scrollTrigger: { trigger: list, start: 'top 70%', end: 'bottom 70%', scrub: 0.4 } },
        )
      }
      gsap.utils.toArray<HTMLElement>('[data-step]').forEach((step) => {
        const node = step.querySelector('[data-node]')
        const body = step.querySelector('[data-body]')
        const tl = gsap.timeline({ scrollTrigger: { trigger: step, start: 'top 75%', once: true } })
        tl.fromTo(node, { scale: 0.4, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5, ease: 'back.out(2)' })
        tl.fromTo(body, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: EASE_OUT }, '<0.1')
      })

      ScrollTrigger.refresh()
    },
    { scope: ref },
  )

  const steps = [1, 2, 3, 4] as const

  return (
    <main ref={ref} className="min-h-screen">
      <Navigation />
      <PatternBg />

      {/* ===================== HERO ===================== */}
      <section data-pattern="dots" className="px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-16 md:pb-28">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-12 md:gap-16 items-end">
          <div>
            <Eyebrow n="01" text={t('aboutPage.hero.label')} className="mb-8" />
            <h1 className="text-[clamp(2.6rem,6.5vw,5.2rem)] font-bold leading-[0.98] tracking-[-0.03em] text-t-text">
              <RevealWords text={t('aboutPage.hero.title')} onScroll={false} delay={0.15} />
            </h1>
            <RevealBlock delay={0.5}>
              <p className="mt-8 text-lg md:text-xl text-t-text-secondary leading-relaxed max-w-[560px]">{t('aboutPage.hero.subtitle')}</p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <TransitionLink
                  href="/work"
                  className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-t-border-light/60 text-sm font-semibold text-t-text hover:border-t-accent/70 hover:text-t-accent transition-colors"
                >
                  {t('aboutPage.hero.work')}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </TransitionLink>
                <span className="inline-flex items-center gap-2 text-sm text-t-text-tertiary">
                  <Sparkles className="w-4 h-4 text-t-accent" />
                  {t('aboutPage.hero.note')}
                </span>
              </div>
            </RevealBlock>
          </div>
          <Facts />
        </div>
      </section>

      {/* ===================== QUIÉN SOY ===================== */}
      <section data-pattern="grid" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20">
          <div>
            <Eyebrow n="02" text={t('aboutPage.who.label')} className="mb-6" />
            <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-t-text">
              <RevealWords text={t('aboutPage.who.title')} />
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-3 md:gap-4">
              <Counter target={35} label={t('aboutPage.who.projects')} />
              <Counter target={4} label={t('aboutPage.who.experience')} />
              <Counter target={20} label={t('aboutPage.who.clients')} />
              <Counter target={6} label={t('aboutPage.who.countries')} />
            </div>
          </div>
          <RevealBlock delay={0.1} className="md:pt-16">
            <div
              className="text-lg md:text-xl leading-relaxed text-t-text-secondary [&_b]:text-t-text [&_b]:font-semibold"
              dangerouslySetInnerHTML={{ __html: t('aboutPage.who.desc') }}
            />
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {[t('aboutPage.who.tag1'), t('aboutPage.who.tag2'), t('aboutPage.who.tag3')].map((tag) => (
                <li key={tag} className="px-3.5 py-1.5 rounded-full bg-t-accent/10 text-t-accent text-xs font-semibold tracking-wide">
                  {tag}
                </li>
              ))}
            </ul>
          </RevealBlock>
        </div>
      </section>

      {/* ===================== HERRAMIENTAS ===================== */}
      <section data-pattern="cross" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-20 items-end mb-10 md:mb-14">
            <div>
              <Eyebrow n="03" text={t('aboutPage.tech.label')} className="mb-6" />
              <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-t-text">
                <RevealWords text={t('aboutPage.tech.title')} />
              </h2>
            </div>
            <RevealBlock>
              <p className="text-base md:text-lg text-t-text-tertiary leading-relaxed max-w-[460px]">{t('aboutPage.tech.sub')}</p>
            </RevealBlock>
          </div>

          <div className="border-t border-t-border-light/40">
            {TECH.map((cat) => (
              <div key={cat.label} data-tech-row className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-6 md:py-7 border-b border-t-border-light/40">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-t-accent md:pt-2">{cat.label}</span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      data-chip
                      className="opacity-0 invisible px-3.5 py-1.5 rounded-full border border-t-border-light/50 bg-t-card/40 text-[13px] font-mono text-t-text-secondary hover:text-t-accent hover:border-t-accent/60 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROCESO ===================== */}
      <section data-pattern="diag" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto mb-14 md:mb-20">
            <Eyebrow n="04" text={t('aboutPage.process.label')} className="justify-center mb-6" />
            <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-t-text">
              <RevealWords text={t('aboutPage.process.title')} />
            </h2>
            <RevealBlock>
              <p className="mt-5 text-base md:text-lg text-t-text-tertiary">{t('aboutPage.process.sub')}</p>
            </RevealBlock>
          </div>

          <ol data-timeline className="relative max-w-[960px] mx-auto">
            {/* línea base + línea que se dibuja */}
            <div aria-hidden className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-t-border-light/40 md:-translate-x-1/2" />
            <div aria-hidden data-line-fill className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-t-accent origin-top md:-translate-x-1/2" />
            {steps.map((n, i) => {
              const left = i % 2 === 0
              return (
                <li key={n} data-step className="relative pl-16 md:pl-0 py-6 md:py-8 md:grid md:grid-cols-2">
                  <span
                    data-node
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 md:top-8 grid place-items-center w-10 h-10 rounded-full bg-t-bg border border-t-accent text-t-accent shadow-[0_0_0_6px_var(--t-bg)]"
                  >
                    {PROCESS_ICONS[i]}
                  </span>
                  <div data-body className={`${left ? 'md:col-start-1 md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                    <span className="text-[11px] font-mono text-t-text-tertiary">0{n}</span>
                    <h3 className="mt-1 text-xl md:text-2xl font-bold tracking-tight text-t-text">{t(`aboutPage.process.card${n}.title`)}</h3>
                    <p className="mt-3 text-base text-t-text-secondary leading-relaxed">{t(`aboutPage.process.card${n}.desc`)}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section data-pattern="dots" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <Eyebrow n="05" text={t('aboutPage.faq.label')} className="mb-6" />
            <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-t-text">
              <RevealWords text={t('aboutPage.faq.title')} />
            </h2>
            <RevealBlock>
              <p className="mt-5 text-base text-t-text-tertiary leading-relaxed max-w-[360px]">{t('aboutPage.faq.subtitle')}</p>
              <TransitionLink
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-t-text hover:text-t-accent transition-colors"
              >
                {t('aboutPage.faq.more')}
                <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1" />
              </TransitionLink>
            </RevealBlock>
          </div>
          <RevealBlock delay={0.1}>
            <FAQItem question={t('aboutPage.faq.q1')} answer={t('aboutPage.faq.a1')} isOpen />
            <FAQItem question={t('aboutPage.faq.q2')} answer={t('aboutPage.faq.a2')} />
            <FAQItem question={t('aboutPage.faq.q3')} answer={t('aboutPage.faq.a3')} />
            <FAQItem question={t('aboutPage.faq.q4')} answer={t('aboutPage.faq.a4')} />
            <FAQItem question={t('aboutPage.faq.q5')} answer={t('aboutPage.faq.a5')} />
            <FAQItem question={t('aboutPage.faq.q6')} answer={t('aboutPage.faq.a6')} />
          </RevealBlock>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section data-pattern="none" className="px-6 md:px-12 lg:px-20 py-24 md:py-36">
        <div className="max-w-[820px] mx-auto text-center">
          <Eyebrow n="06" text={t('cta.subtitle')} className="justify-center mb-6" />
          <h2 className="text-[clamp(2.4rem,6.5vw,5rem)] font-bold leading-[0.98] tracking-[-0.03em] text-t-text">
            <RevealWords text={t('cta.title')} />
          </h2>
          <RevealBlock>
            <p className="mt-6 text-base md:text-lg text-t-text-secondary max-w-[520px] mx-auto leading-relaxed">{t('cta.desc')}</p>
            <div className="mt-10 flex justify-center">
              {/* Acá aterriza el botón flotante de contacto */}
              <span data-fab-slot className="inline-flex invisible">
                <ContactButton />
              </span>
            </div>
          </RevealBlock>
        </div>
      </section>

      <Footer />
    </main>
  )
}
