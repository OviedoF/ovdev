'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import TransitionLink from '@/components/transition-link'
import Navigation from '@/components/navigation'
import PatternBg from '@/components/home/pattern-bg'
import { RevealWords, RevealBlock } from '@/components/home/reveal'
import { projects, type Project } from '@/lib/projects'
import { useTranslation } from '@/lib/i18n'
import { getTranslatedProjects, initProjectTranslations } from '@/lib/translations'
import { gsap, useGSAP, EASE_OUT } from '@/lib/gsap'

function normalize(str: string): string {
  return str.normalize('NFD').replace(/[̀-ͯ]/g, '')
}

const FILTER_KEYS = ['all', 'mobile', 'web', 'saas', 'ecommerce', 'dashboards', 'billing', 'gaming', 'ai'] as const

const FILTER_MATCHERS: Record<string, (cats: string) => boolean> = {
  all: () => true,
  mobile: (c) => c.includes('App Movil'),
  web: (c) => c.includes('Web App'),
  saas: (c) => c.includes('SaaS'),
  ecommerce: (c) => c.includes('E-commerce'),
  dashboards: (c) => c.includes('Panel Admin') || c.includes('ERP') || c.includes('CMS'),
  billing: (c) => c.includes('Facturacion') || c.includes('AFIP') || c.includes('CFDI'),
  gaming: (c) => c.includes('Gaming'),
  ai: (c) => c.includes('IA') || c.includes('GPT'),
}

const ROWS = 3
/** Velocidad del muro (px/seg) */
const SPEED = 38
/** Ancho del tile = alto de la fila × WIDTH_FACTOR. Expandido = ancho × HOVER_FACTOR. */
const WIDTH_FACTOR = 1.35
const HOVER_FACTOR = 1.5

/* ------------------------------------------------------------------ */

function Tile({ project, muted }: { project: Project; muted: boolean }) {
  const mainCategory = project.categories.split('•')[0]?.trim()
  return (
    <TransitionLink
      href={`/work/${project.slug}`}
      data-tile={project.slug}
      aria-label={project.title}
      className={`group relative block h-full shrink-0 rounded-[4px] overflow-hidden border border-white/10 hover:border-t-accent/60 bg-t-card transition-[opacity,filter,border-color] duration-500 ${
        muted ? 'opacity-20 saturate-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ width: 'var(--tile-w)' }}
    >
      <img
        src={project.image}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
      />
      {/* degradé para que el texto se lea siempre */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,.72) 0%, rgba(0,0,0,.18) 40%, transparent 62%)' }} />
      {/* texto: siempre visible */}
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 truncate">{mainCategory}</p>
          <h3 className="mt-0.5 text-[13px] md:text-[15px] font-semibold leading-tight text-white truncate">{project.title}</h3>
          <p className="hidden md:block max-h-0 opacity-0 overflow-hidden text-xs text-white/70 leading-snug transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:max-h-10 group-hover:opacity-100 group-hover:mt-1 line-clamp-2">
            {project.subtitle}
          </p>
        </div>
        <span className="hidden md:grid shrink-0 place-items-center w-8 h-8 rounded-full bg-t-accent text-t-bg opacity-0 scale-75 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:opacity-100 group-hover:scale-100">
          <ArrowUpRight className="w-4 h-4" strokeWidth={2.2} />
        </span>
      </div>
    </TransitionLink>
  )
}

/* ------------------------------------------------------------------ */

export default function WorkPage() {
  const { t, locale } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')
  const [ready, setReady] = useState(locale === 'es')
  const wallRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (locale !== 'es') {
      initProjectTranslations()
      const timer = setTimeout(() => setReady(true), 100)
      return () => clearTimeout(timer)
    } else {
      setReady(true)
    }
  }, [locale])

  const translated = useMemo(() => (ready ? getTranslatedProjects(projects, locale) : projects), [locale, ready])

  // Filas: 10 / 10 / 9
  const rows = useMemo(() => {
    const per = Math.ceil(translated.length / ROWS)
    return Array.from({ length: ROWS }, (_, i) => translated.slice(i * per, (i + 1) * per))
  }, [translated])

  const matches = useMemo(() => {
    const m = FILTER_MATCHERS[activeFilter] ?? (() => true)
    return new Set(projects.filter((p) => m(normalize(p.categories))).map((p) => p.id))
  }, [activeFilter])

  const filterCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    FILTER_KEYS.forEach((key) => {
      counts[key] = projects.filter((p) => FILTER_MATCHERS[key](normalize(p.categories))).length
    })
    return counts
  }, [])
  const availableFilters = useMemo(() => FILTER_KEYS.filter((key) => key === 'all' || filterCounts[key] > 0), [filterCounts])
  // "Ideas que ya son productos" (las claves están en mayúsculas para el hero viejo)
  const title = useMemo(() => {
    const raw = `${t('work.hero.line1')} ${t('work.hero.line2')}`.toLowerCase()
    return raw.charAt(0).toUpperCase() + raw.slice(1)
  }, [t])

  // ---- Marquee por fila + expansión al hover
  useGSAP(
    () => {
      const wall = wallRef.current!
      const tracks = Array.from(wall.querySelectorAll<HTMLElement>('[data-track]'))
      const desktop = window.matchMedia('(hover: hover) and (min-width: 768px)').matches
      const cleanups: (() => void)[] = []

      // entrada (sobre el contenedor de cada fila, no sobre el track que anima el marquee)
      gsap.fromTo(
        tracks.map((tr) => tr.parentElement!),
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: EASE_OUT, stagger: 0.12, delay: 0.35 },
      )

      tracks.forEach((track, i) => {
        const copy = track.firstElementChild as HTMLElement // primera copia: define el ancho del loop
        let tileW = 0
        const build = () => {
          // ancho proporcional al alto de la fila
          tileW = Math.round(track.offsetHeight * WIDTH_FACTOR)
          track.style.setProperty('--tile-w', `${tileW}px`)
          const w = copy.offsetWidth + parseFloat(getComputedStyle(track).gap || '0')
          const dir = i % 2 === 0 ? -1 : 1
          gsap.set(track, { x: dir === -1 ? 0 : -w })
          // filas arrancan desfasadas para que las costuras no coincidan
          const wrap = gsap.utils.wrap(-w, 0)
          const tl = gsap.to(track, {
            x: `${dir === -1 ? '-=' : '+='}${w}`,
            duration: w / SPEED,
            ease: 'none',
            repeat: -1,
            modifiers: { x: (x: string) => `${wrap(parseFloat(x))}px` },
          })
          tl.progress((i * 0.37) % 1)
          return tl
        }
        let tween = build()
        cleanups.push(() => tween.kill())

        if (desktop) {
          // hover: frena la fila y expande el tile (en las dos copias, así el loop sigue siendo simétrico)
          let current: string | null = null
          const expand = (slug: string | null) => {
            if (slug === current) return
            if (current) {
              gsap.to(track.querySelectorAll(`[data-tile="${current}"]`), { width: tileW, duration: 0.6, ease: 'power3.inOut', overwrite: true })
            }
            current = slug
            if (slug) {
              gsap.to(track.querySelectorAll(`[data-tile="${slug}"]`), { width: Math.round(tileW * HOVER_FACTOR), duration: 0.6, ease: 'power3.inOut', overwrite: true })
              gsap.to(tween, { timeScale: 0, duration: 0.7, ease: 'power2.out', overwrite: true })
            } else {
              gsap.to(tween, { timeScale: 1, duration: 0.9, ease: 'power2.in', overwrite: true })
            }
          }
          const onOver = (e: MouseEvent) => {
            const tile = (e.target as HTMLElement).closest<HTMLElement>('[data-tile]')
            if (tile && !tile.classList.contains('pointer-events-none')) expand(tile.dataset.tile!)
          }
          const onLeave = () => expand(null)
          track.addEventListener('mouseover', onOver)
          track.addEventListener('mouseleave', onLeave)
          cleanups.push(() => {
            track.removeEventListener('mouseover', onOver)
            track.removeEventListener('mouseleave', onLeave)
          })
        }

        // recalcular el loop si cambia el tamaño de la ventana
        const ro = new ResizeObserver(() => {
          tween.kill()
          tween = build()
        })
        ro.observe(wall)
        cleanups.push(() => ro.disconnect())
      })

      return () => cleanups.forEach((fn) => fn())
    },
    { scope: wallRef, dependencies: [rows] },
  )

  return (
    <div className="h-[100svh] overflow-hidden flex flex-col">
      <Navigation />
      <PatternBg />

      {/* ===== HEADER: título + filtros ===== */}
      <header data-pattern="dots" className="shrink-0 px-6 md:px-12 lg:px-20 pt-24 md:pt-10 pb-4 md:pb-6">
        <div className="max-w-[1400px] mx-auto md:pr-56">
          <h1 className="text-[clamp(1.7rem,3.4vw,2.9rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">
            <RevealWords text={title} onScroll={false} delay={0.1} />
          </h1>
          <RevealBlock delay={0.45} y={12}>
            <div className="mt-4 md:mt-5 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap">
              {availableFilters.map((key) => {
                const active = activeFilter === key
                return (
                  <button
                    key={key}
                    onClick={() => setActiveFilter(key)}
                    className={`shrink-0 px-3.5 py-1.5 rounded-full text-[13px] font-medium border transition-colors duration-300 ${
                      active ? 'bg-t-btn-bg text-t-btn-text border-transparent' : 'border-t-border-light/60 text-t-text-secondary hover:border-t-accent/60 hover:text-t-text'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {t(`work.filter.${key}`)}
                      <span className={`text-[10px] font-mono ${active ? 'text-t-btn-text/70' : 'text-t-text-tertiary'}`}>{filterCounts[key]}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </RevealBlock>
        </div>
      </header>

      {/* ===== MURO ===== */}
      <div
        ref={wallRef}
        data-pattern="grid"
        className="relative flex-1 min-h-0 grid gap-1.5 md:gap-2 pb-3 md:pb-4 [--tile-w:180px]"
        style={{ gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))` }}
      >
        {rows.map((row, i) => (
          <div key={i} className="relative min-h-0 overflow-hidden opacity-0 invisible">
            {/* fundidos laterales */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-24 z-10" style={{ background: 'linear-gradient(to right, var(--t-bg), transparent)' }} />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-24 z-10" style={{ background: 'linear-gradient(to left, var(--t-bg), transparent)' }} />
            <div data-track className="flex h-full gap-1.5 md:gap-2 will-change-transform">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex h-full gap-1.5 md:gap-2 shrink-0" aria-hidden={copy === 1}>
                  {row.map((p) => (
                    <Tile key={`${copy}-${p.id}`} project={p} muted={!matches.has(p.id)} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
