'use client'

import { useRef, type ReactNode } from 'react'
import { useTranslation } from '@/lib/i18n'
import { useTheme, themes } from '@/lib/theme'
import { gsap, useGSAP, EASE_OUT } from '@/lib/gsap'
import { scrollTo } from '@/components/smooth-scroll'
import ThemeVideo from '@/components/theme-video'

type Segment = { text: string; className?: string; underline?: boolean }

/** Divide un texto en palabras → caracteres (cada char es un span que se "tipea"). */
function Typed({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((seg, si) => {
        const words = seg.text.split(' ')
        const content = words.map((word, wi) => (
          <span key={wi}>
            {wi > 0 && ' '}
            {word && (
              <span className="inline-block whitespace-nowrap">
                {Array.from(word).map((ch, ci) => (
                  <span key={ci} data-char className="opacity-0">
                    {ch}
                  </span>
                ))}
              </span>
            )}
          </span>
        ))
        if (seg.underline) {
          return (
            <span key={si} data-accent className={`relative inline-block ${seg.className ?? ''}`}>
              {content}
              <svg
                aria-hidden
                className="absolute left-0 -bottom-[0.06em] w-full h-[0.26em] overflow-visible pointer-events-none"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
              >
                <path
                  data-underline
                  d="M3 14 C 40 4, 80 18, 120 9 S 180 6, 197 12"
                  fill="none"
                  stroke="var(--t-accent)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="400"
                  strokeDashoffset="400"
                />
              </svg>
            </span>
          )
        }
        return (
          <span key={si} className={seg.className}>
            {content}
          </span>
        )
      })}
    </>
  )
}

function Line({ children }: { children: ReactNode }) {
  return (
    <div data-line>
      <span data-line-text className="relative">
        <span data-bracket-open aria-hidden className="text-t-text-tertiary/70 font-extralight opacity-0 mr-[0.06em]">
          &lt;
        </span>
        {children}
        <span data-bracket-close aria-hidden className="text-t-text-tertiary/70 font-extralight opacity-0 ml-[0.06em]">
          &gt;
        </span>
        {/* cursor de tipeo: se posiciona por JS detrás del último carácter escrito */}
        <span data-cursor aria-hidden className="absolute w-[2px] md:w-[3px] bg-t-accent opacity-0 pointer-events-none" />
      </span>
    </div>
  )
}

export default function HomeHero() {
  const { t, locale } = useTranslation()
  const { theme, openSelector } = useTheme()
  const current = themes.find((th) => th.code === theme)
  const ref = useRef<HTMLElement>(null)
  const introTl = useRef<gsap.core.Timeline | null>(null)
  const introRan = useRef(false)

  useGSAP(
    () => {
      const lines = gsap.utils.toArray<HTMLElement>('[data-line]')
      const tl = gsap.timeline({ defaults: { ease: 'none' }, delay: 0.4 })
      introTl.current = tl

      // cada línea: "<" al empezar, ">" al terminar de escribirse

      const CHAR = 0.032 // seg por caracter
      const PAUSE = 0.45 // pausa entre líneas
      let typedEnd = 0 // momento en que termina de escribirse la última línea

      /** Coloca el cursor pegado al borde derecho (o izquierdo) de un elemento, relativo a la línea. */
      const placeCursor = (cursor: HTMLElement, el: HTMLElement, side: 'left' | 'right') => {
        const parent = cursor.parentElement!.getBoundingClientRect()
        const r = el.getBoundingClientRect()
        const h = r.height * 0.78
        cursor.style.left = `${(side === 'right' ? r.right : r.left) - parent.left + 2}px`
        cursor.style.top = `${r.top - parent.top + (r.height - h) / 2}px`
        cursor.style.height = `${h}px`
      }

      lines.forEach((line, i) => {
        const chars = Array.from(line.querySelectorAll<HTMLElement>('[data-char]'))
        const cursor = line.querySelector<HTMLElement>('[data-cursor]')!
        const underline = line.querySelector('[data-underline]')
        const openB = line.querySelector<HTMLElement>('[data-bracket-open]')
        const closeB = line.querySelector<HTMLElement>('[data-bracket-close]')
        const isLast = i === lines.length - 1

        const start = tl.duration()
        tl.to(openB, { opacity: 1, duration: 0.3 }, start)
        // cursor al inicio de la línea, después del "<"
        tl.call(() => placeCursor(cursor, openB!, 'right'), [], start)
        tl.set(cursor, { opacity: 1 }, start)

        // tipeo: cada carácter aparece y el cursor se corre detrás de él
        const typeStart = start + 0.2
        chars.forEach((ch, k) => {
          const at = typeStart + k * CHAR
          tl.set(ch, { opacity: 1 }, at)
          tl.call(() => placeCursor(cursor, ch, 'right'), [], at)
        })
        let end = typeStart + chars.length * CHAR

        if (underline) {
          // el subrayado se dibuja apenas termina de escribirse la palabra acentuada
          const accentChars = underline.closest('[data-accent]')!.querySelectorAll('[data-char]').length
          tl.to(underline, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.inOut' }, typeStart + accentChars * CHAR + 0.05)
        }

        // ">" cierra la línea y el cursor se corre detrás
        tl.to(closeB, { opacity: 1, duration: 0.3, ease: EASE_OUT }, end + 0.08)
        tl.call(() => placeCursor(cursor, closeB!, 'right'), [], end + 0.08)
        end += 0.1

        if (!isLast) {
          tl.set(cursor, { opacity: 0 }, end + PAUSE * 0.45)
          end += PAUSE
          tl.to({}, { duration: 0.001 }, end) // extiende la duración hasta "end"
        } else {
          typedEnd = end
          // último cursor: parpadea un rato y se va
          tl.to(cursor, { opacity: 0, duration: 0.5, ease: 'steps(1)', repeat: 5, yoyo: true }, end + 0.3)
          tl.to(cursor, { opacity: 0, duration: 0.2 }, end + 3.4)
        }
      })

      // resto del hero entra cuando terminó de escribir la última línea
      const afterTyping = typedEnd + 0.1
      tl.fromTo('[data-hero-sub]', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: EASE_OUT }, afterTyping)
        .fromTo('[data-hero-scroll]', { opacity: 0 }, { opacity: 1, duration: 0.8, ease: EASE_OUT }, afterTyping + 0.3)
        .fromTo('[data-hero-card]', { opacity: 0, y: 40, rotate: 8 }, { opacity: 1, y: 0, rotate: -4, duration: 1.1, ease: EASE_OUT }, afterTyping - 0.2)

      // Flecha de "saber más" rebotando suave
      gsap.to('[data-hero-arrow]', { y: 6, duration: 0.9, ease: 'sine.inOut', yoyo: true, repeat: -1 })

      // Al scrollear, el hero se aleja apenas (parallax) y se funde
      // autoAlpha: al llegar a 0 pone visibility:hidden → el hero (video incluido) deja de ocupar capas GPU.
      // willChange sólo mientras el hero está en pantalla (si no, las capas quedan vivas toda la página).
      const heroLayers = '[data-hero-inner], [data-hero-bg], [data-hero-card-wrap]'
      gsap.to(heroLayers, {
        yPercent: -12,
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          onToggle: (self) => gsap.set(heroLayers, { willChange: self.isActive ? 'transform, opacity' : 'auto' }),
        },
      })
      gsap.set(heroLayers, { willChange: 'transform, opacity' })

      // Tilt 3D de la tarjeta siguiendo el mouse
      const card = ref.current?.querySelector<HTMLElement>('[data-tilt]')
      if (!card) return
      const rx = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3.out' })
      const ry = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3.out' })
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        rx(((e.clientY - r.top) / r.height - 0.5) * -16)
        ry(((e.clientX - r.left) / r.width - 0.5) * 16)
      }
      const onLeave = () => {
        rx(0)
        ry(0)
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      return () => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      }
    },
    { scope: ref }
  )

  // Al cambiar de idioma el texto se re-renderiza y las letras nuevas nacen con opacity-0,
  // pero la intro de tipeo ya corrió: se corta la timeline y se deja todo en su estado final.
  useGSAP(
    () => {
      if (!introRan.current) {
        introRan.current = true
        return
      }
      introTl.current?.kill()
      gsap.set('[data-char], [data-bracket-open], [data-bracket-close]', { opacity: 1 })
      gsap.set('[data-underline]', { strokeDashoffset: 0 })
      gsap.set('[data-cursor]', { opacity: 0 })
      gsap.set('[data-hero-sub], [data-hero-scroll]', { opacity: 1, y: 0 })
      gsap.set('[data-hero-card]', { opacity: 1, y: 0, rotate: -4 })
    },
    { scope: ref, dependencies: [locale] }
  )

  // Crossfade del GIF de fondo al cambiar de tema
  useGSAP(
    () => {
      gsap.fromTo('[data-hero-bg-img]', { opacity: 0 }, { opacity: 0.22, duration: 1.4, ease: 'power2.out', overwrite: 'auto' })
    },
    { scope: ref, dependencies: [theme] }
  )

  return (
    <section ref={ref} data-pattern="none" className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-24 overflow-hidden">
      {/* GIF del tema de fondo, tenue y fundido con el fondo */}
      {current && (
        <div data-hero-bg aria-hidden className="absolute inset-0 pointer-events-none">
          <ThemeVideo theme={current} data-hero-bg-img className="w-full h-full object-cover opacity-0" posterWidth={1280} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, var(--t-bg) 0%, transparent 30%, transparent 55%, var(--t-bg) 100%), linear-gradient(to right, var(--t-bg) 0%, transparent 45%)',
            }}
          />
        </div>
      )}

      <div data-hero-inner className="relative max-w-[1200px] w-full mx-auto">
        <h1 className="text-[clamp(2rem,5vw,4.25rem)] font-medium leading-[1.18] tracking-[-0.02em] space-y-[0.15em]">
          <Line>
            <Typed
              segments={[
                { text: t('home.hero.l1.pre'), className: 'text-t-text-secondary' },
                { text: t('home.hero.l1.name'), className: 'font-semibold' },
              ]}
            />
          </Line>
          <Line>
            <Typed segments={[{ text: t('home.hero.l2') }]} />
          </Line>
          <Line>
            <Typed
              segments={[
                { text: t('home.hero.l3.verb'), className: 'text-t-accent font-semibold', underline: true },
                { text: t('home.hero.l3.post') },
              ]}
            />
          </Line>
        </h1>

        <p data-hero-sub className="mt-7 md:mt-9 text-lg md:text-xl text-t-text-tertiary max-w-[520px] leading-relaxed opacity-0">
          {t('home.hero.sub')}
        </p>
      </div>

      <button
        data-hero-scroll
        onClick={() => scrollTo('#story')}
        className="absolute bottom-8 left-6 md:left-12 lg:left-20 text-t-text-tertiary hover:text-t-accent transition-colors opacity-0"
        aria-label={t('home.hero.scroll')}
        title={t('home.hero.scroll')}
      >
        <span data-hero-arrow className="inline-flex w-9 h-9 rounded-full border border-current/60 items-center justify-center">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Tarjeta del tema, inclinada, abajo a la derecha: abre el selector */}
      {current && (
        <div data-hero-card-wrap className="absolute bottom-8 right-6 md:right-12 lg:right-20">
          <div data-hero-card className="opacity-0" style={{ perspective: '900px' }}>
            <button
              data-tilt
              type="button"
              onClick={openSelector}
              aria-label={t('home.hero.theme')}
              className="group relative w-[88px] md:w-[116px] lg:w-[136px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer will-change-transform"
              style={{ boxShadow: `0 24px 60px -20px ${current.accent}80`, transformStyle: 'preserve-3d' }}
            >
              <ThemeVideo
                theme={current}
                posterWidth={300}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--t-bg) 0%, transparent 45%)' }} />
              <div className="absolute bottom-2.5 left-3 right-3 text-left">
                <p className="text-[11px] font-medium text-t-text leading-tight truncate">{current.name}</p>
              </div>
              <span className="absolute top-2.5 right-2.5 hidden lg:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-t-bg/70 backdrop-blur text-[10px] font-medium text-t-text opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.accent }} />
                {t('home.hero.theme')}
              </span>
              <span className="absolute top-2 right-2 lg:hidden w-2.5 h-2.5 rounded-full ring-2 ring-t-bg/60" style={{ backgroundColor: current.accent }} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
