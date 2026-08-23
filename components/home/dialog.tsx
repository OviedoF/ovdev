'use client'

import { useRef } from 'react'
import { ArrowRight, Check, CheckCheck, Send, Sparkles } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { useTheme, themes } from '@/lib/theme'
import { gsap, ScrollTrigger, useGSAP, EASE_OUT } from '@/lib/gsap'
import TransitionLink from '@/components/transition-link'
import { RevealWords } from './reveal'

type Line = { side: 'you' | 'me'; key: string; time: string }

const LINES: Line[] = [
  { side: 'you', key: 'home.dialog.1', time: '10:42' },
  { side: 'me', key: 'home.dialog.2', time: '10:43' },
  { side: 'you', key: 'home.dialog.3', time: '10:45' },
  { side: 'me', key: 'home.dialog.4', time: '10:45' },
]

const POINTS = ['home.dialog.point.1', 'home.dialog.point.2', 'home.dialog.point.3']

/** Tres puntitos de "escribiendo…" */
function Typing() {
  return (
    <div data-typing className="flex items-end gap-3 opacity-0 invisible">
      <Avatar />
      <div className="flex items-center gap-1 px-4 py-3 rounded-[1.25rem] rounded-bl-md bg-t-btn-bg/90">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-t-btn-text/80 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s`, animationDuration: '0.9s' }}
          />
        ))}
      </div>
    </div>
  )
}

function Avatar({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  const dims = size === 'md' ? 'w-10 h-10 text-[13px]' : 'w-7 h-7 text-[10px]'
  return (
    <span className={`shrink-0 grid place-items-center rounded-full bg-t-accent text-t-bg font-extrabold tracking-tight ${dims}`}>
      FO
    </span>
  )
}

/**
 * Conversación ficticia cliente ↔ yo, presentada como una ventana de chat real.
 * Al entrar en pantalla la charla "sucede": globo del cliente, yo escribiendo…, mi respuesta, etc.
 * La barra de input es el CTA a contacto.
 */
export default function HomeDialog() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const current = themes.find((x) => x.code === theme) ?? themes[0]
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const root = ref.current!
      const win = root.querySelector<HTMLElement>('[data-chat]')!
      const rows = gsap.utils.toArray<HTMLElement>('[data-row]', root)
      const typing = win.querySelector<HTMLElement>('[data-typing]')!
      const input = win.querySelector<HTMLElement>('[data-input]')!
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // Ventana: entra deslizándose con un leve tilt que se endereza
      gsap.fromTo(
        win,
        { autoAlpha: 0, y: 60, rotate: 2 },
        { autoAlpha: 1, y: 0, rotate: 0, duration: 1.1, ease: EASE_OUT, scrollTrigger: { trigger: win, start: 'top 85%', once: true } },
      )

      // La conversación, como timeline que se dispara una vez
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'back.out(1.7)' } })
      rows.forEach((row) => {
        const me = row.dataset.row === 'me'
        if (me) {
          // "escribiendo…" antes de mi respuesta
          tl.fromTo(typing, { autoAlpha: 0, y: 8, scale: 0.9 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.35 }, '+=0.35')
          tl.to(typing, { autoAlpha: 0, duration: 0.15, ease: 'power1.in' }, '+=0.95')
        } else {
          tl.set({}, {}, '+=0.25')
        }
        tl.fromTo(
          row,
          { autoAlpha: 0, y: 18, scale: 0.92, transformOrigin: me ? 'left bottom' : 'right bottom' },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 },
        )
        // los tildes del cliente se ponen "leídos" (acento) cuando yo respondo
        if (me) {
          const prevYou = rows.slice(0, rows.indexOf(row)).reverse().find((r) => r.dataset.row === 'you')
          const prevTicks = prevYou?.querySelector('[data-ticks]')
          if (prevTicks) tl.to(prevTicks, { color: current.accent, duration: 0.3, ease: 'power1.out' }, '<0.1')
        }
      })
      // Barra de input al final
      tl.fromTo(input, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: EASE_OUT }, '+=0.2')
      tl.fromTo(input.querySelector('[data-send]'), { scale: 0.6 }, { scale: 1, duration: 0.5 }, '<0.2')

      if (reduce) tl.progress(1)
      else ScrollTrigger.create({ trigger: win, start: 'top 62%', once: true, onEnter: () => tl.play() })

      // Flotación suave del badge "en línea" / sparkle
      gsap.to('[data-float]', { y: -6, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    },
    { scope: ref, dependencies: [theme] },
  )

  return (
    <section ref={ref} data-pattern="grid" className="px-6 md:px-12 lg:px-20 py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-14 md:gap-12 lg:gap-20 items-center">
        {/* ---- Copy ---- */}
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-t-text-tertiary mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-t-accent/70" />
            {t('home.dialog.eyebrow')}
          </p>
          <h2 className="text-[clamp(1.9rem,4.2vw,3.4rem)] font-bold tracking-[-0.025em] leading-[1.08] text-t-text">
            <RevealWords text={t('home.dialog.label')} />
          </h2>
          <p className="mt-6 text-base md:text-lg text-t-text-tertiary leading-relaxed max-w-[460px]">{t('home.dialog.sub')}</p>

          <ul className="mt-8 flex flex-col gap-3">
            {POINTS.map((k) => (
              <li key={k} className="flex items-center gap-3 text-sm md:text-[15px] text-t-text-secondary">
                <span className="grid place-items-center w-5 h-5 rounded-full bg-t-accent/15 text-t-accent shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                {t(k)}
              </li>
            ))}
          </ul>

          <TransitionLink
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-t-text hover:text-t-accent transition-colors"
          >
            <span className="relative">
              {t('home.dialog.cta')}
              <span className="absolute left-0 -bottom-1 h-px w-full bg-current origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]" />
              <span className="absolute left-0 -bottom-1 h-px w-full bg-t-accent origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 ease-[cubic-bezier(.16,1,.3,1)]" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5" />
          </TransitionLink>
        </div>

        {/* ---- Ventana de chat ---- */}
        <div className="relative">
          {/* glow del acento detrás (gradiente ya difuso, sin filter) */}
          <div
            aria-hidden
            className="absolute -inset-10 md:-inset-16 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 60% 40%, ${current.accent}2e 0%, ${current.accent}12 35%, transparent 70%)` }}
          />
          <div
            data-chat
            className="relative rounded-[1.75rem] md:rounded-[2rem] border border-t-border-light/50 bg-t-card/85 shadow-[0_50px_120px_-40px_rgba(0,0,0,.65)] overflow-hidden opacity-0 invisible"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-t-border-light/40 bg-t-bg/40">
              <div className="relative">
                <Avatar size="md" />
                <span className="absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-t-card" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-t-text leading-tight truncate">Federico Oviedo</p>
                <p className="text-[11px] text-t-text-tertiary leading-tight flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {t('home.dialog.status')}
                </p>
              </div>
              <span
                data-float
                className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-t-border-light/50 bg-t-bg/60 text-[10px] font-semibold tracking-wider uppercase text-t-text-secondary"
              >
                <Sparkles className="w-3 h-3 text-t-accent" />
                {t('home.dialog.badge')}
              </span>
            </div>

            {/* Mensajes */}
            <div className="px-4 md:px-6 pt-5 pb-4 flex flex-col gap-4 min-h-[360px] md:min-h-[420px]">
              <div className="self-center text-[10px] font-semibold uppercase tracking-widest text-t-text-tertiary px-3 py-1 rounded-full bg-t-bg/50 border border-t-border-light/40">
                {t('home.dialog.today')}
              </div>

              {LINES.map((line, i) => {
                const me = line.side === 'me'
                const big = line.key.endsWith('.4')
                return (
                  <div key={i} data-row={line.side} className={`flex items-end gap-3 opacity-0 invisible ${me ? 'justify-start' : 'justify-end'}`}>
                    {me && <Avatar />}
                    <div className={`max-w-[86%] md:max-w-[78%] flex flex-col gap-1 ${me ? 'items-start' : 'items-end'}`}>
                      <p
                        className={[
                          'px-4 py-3 md:px-5 md:py-3.5 leading-relaxed',
                          big ? 'text-2xl md:text-3xl font-bold tracking-tight' : 'text-[15px] md:text-base',
                          me
                            ? 'bg-t-btn-bg text-t-btn-text rounded-[1.25rem] rounded-bl-md'
                            : 'bg-t-bg/70 text-t-text border border-t-border-light/60 rounded-[1.25rem] rounded-br-md',
                        ].join(' ')}
                      >
                        {t(line.key)}
                        {big && <span className="ml-2 inline-block align-middle">🚀</span>}
                      </p>
                      <span className="flex items-center gap-1 px-1 text-[10px] text-t-text-tertiary tabular-nums">
                        {line.time}
                        {!me && (
                          <span data-ticks className="inline-flex">
                            <CheckCheck className="w-3.5 h-3.5" strokeWidth={2.5} />
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                )
              })}

              <Typing />
            </div>

            {/* Input = CTA */}
            <div data-input className="px-4 md:px-5 pb-4 md:pb-5 opacity-0 invisible">
              <TransitionLink
                href="/contact"
                aria-label={t('home.dialog.cta')}
                className="group flex items-center gap-3 rounded-full border border-t-border-light/60 bg-t-bg/70 pl-5 pr-1.5 py-1.5 hover:border-t-accent/60 transition-colors"
              >
                <span className="flex-1 text-sm text-t-text-tertiary truncate">
                  {t('home.dialog.input')}
                  <span className="ml-0.5 inline-block w-px h-[1em] align-middle bg-t-text-tertiary animate-pulse" />
                </span>
                <span
                  data-send
                  className="grid place-items-center w-10 h-10 rounded-full bg-t-accent text-t-bg transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110 group-hover:rotate-12"
                >
                  <Send className="w-4 h-4 -ml-0.5 mt-0.5" strokeWidth={2.2} />
                </span>
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
