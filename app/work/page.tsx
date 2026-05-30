'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import TransitionLink from '@/components/transition-link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { projects } from '@/lib/projects'
import { useTranslation } from '@/lib/i18n'
import { getTranslatedProjects, initProjectTranslations } from '@/lib/translations'

function normalize(str: string): string {
  return str.normalize('NFD').replace(/[̀-ͯ]/g, '')
}

const FILTER_KEYS = [
  'all', 'mobile', 'web', 'saas', 'ecommerce', 'dashboards', 'billing', 'gaming', 'ai'
] as const

const FILTER_MATCHERS: Record<string, (cats: string) => boolean> = {
  'all':        () => true,
  'mobile':     (c) => c.includes('App Movil'),
  'web':        (c) => c.includes('Web App'),
  'saas':       (c) => c.includes('SaaS'),
  'ecommerce':  (c) => c.includes('E-commerce'),
  'dashboards': (c) => c.includes('Panel Admin') || c.includes('ERP') || c.includes('CMS'),
  'billing':    (c) => c.includes('Facturacion') || c.includes('AFIP') || c.includes('CFDI'),
  'gaming':     (c) => c.includes('Gaming'),
  'ai':         (c) => c.includes('IA') || c.includes('GPT'),
}

const wordContainer = (delay = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: delay,
    },
  },
})

const wordReveal = {
  hidden: { y: '110%', opacity: 0, rotateX: 40 },
  show: {
    y: '0%',
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
}

function AnimatedHeading({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span variants={wordContainer()} initial="hidden" animate="show" className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]" style={{ perspective: '400px' }}>
          <motion.span variants={wordReveal} className="inline-block origin-bottom">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

function ProjectCard({ project, index, featured = false }: { project: typeof projects[0]; index: number; featured?: boolean }) {
  const [hovered, setHovered] = useState(false)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const glowX = useTransform(mouseX, [0, 1], ['0%', '100%'])
  const glowY = useTransform(mouseY, [0, 1], ['0%', '100%'])
  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(500px circle at ${x} ${y}, var(--t-accent) 0%, transparent 70%)`
  )

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const techItems = project.tech?.flatMap(t => t.items).slice(0, featured ? 6 : 4) || []
  const mainCategory = project.categories.split('•')[0]?.trim()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: index * 0.06 }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); mouseX.set(0.5); mouseY.set(0.5) }}
      className={`group relative rounded-2xl border border-t-border-light overflow-hidden transition-all duration-300 hover:border-t-accent/50 hover:shadow-[0_8px_40px_var(--t-glow)] ${featured ? 'md:col-span-2' : ''}`}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10"
        style={{ background: glowBg, opacity: hovered ? 0.06 : 0 }}
      />

      <TransitionLink href={`/work/${project.slug}`} className="block">
        <div className={`grid ${featured ? 'md:grid-cols-[1.3fr_1fr]' : 'grid-cols-1'}`}>
          {/* Image */}
          <div className={`relative overflow-hidden bg-t-card ${featured ? 'aspect-[16/10] md:aspect-auto md:min-h-[320px]' : 'aspect-[4/3]'}`}>
            {project.image ? (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{ scale: hovered ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-t-card to-t-bg">
                <span className="text-[clamp(2rem,6vw,4rem)] font-bold text-t-text/8">
                  {project.title}
                </span>
              </div>
            )}

            {/* Category badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="absolute top-4 left-4 z-20"
            >
              <span className="px-3 py-1.5 rounded-md bg-t-bg/80 backdrop-blur-sm border border-t-border-light/50 text-[11px] font-semibold uppercase tracking-wider text-t-accent">
                {mainCategory}
              </span>
            </motion.div>

            {/* Hover overlay */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-t-overlay/60 flex items-center justify-center z-20"
            >
              <span className="px-6 py-3 rounded-lg border border-t-accent/60 bg-t-bg/30 backdrop-blur-sm text-t-text text-sm font-medium tracking-wide flex items-center gap-2">
                Ver Proyecto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                </svg>
              </span>
            </motion.div>
          </div>

          {/* Content */}
          <div className={`relative p-5 md:p-6 ${featured ? 'flex flex-col justify-center' : ''}`}>
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className={`font-bold tracking-tight group-hover:text-t-accent transition-colors duration-300 ${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                {project.title}
              </h3>
              <svg className="w-5 h-5 shrink-0 mt-1 text-t-text-tertiary group-hover:text-t-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" /><path d="M7 17 17 7" />
              </svg>
            </div>

            <p className={`text-t-text-secondary leading-relaxed mb-4 ${featured ? 'text-sm md:text-base line-clamp-3' : 'text-xs md:text-sm line-clamp-2'}`}>
              {project.subtitle}
            </p>

            {/* Tech pills */}
            {techItems.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {techItems.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md border border-t-border-light/40 text-[10px] font-mono text-t-text-tertiary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </TransitionLink>
    </motion.div>
  )
}

export default function WorkPage() {
  const { t, locale } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')
  const [ready, setReady] = useState(locale === 'es')

  useEffect(() => {
    if (locale !== 'es') {
      initProjectTranslations()
      const timer = setTimeout(() => setReady(true), 100)
      return () => clearTimeout(timer)
    } else {
      setReady(true)
    }
  }, [locale])

  const translatedProjects = useMemo(() => {
    if (!ready) return projects
    return getTranslatedProjects(projects, locale)
  }, [locale, ready])

  const filterCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    FILTER_KEYS.forEach((key) => {
      if (key === 'all') {
        counts[key] = projects.length
      } else {
        counts[key] = projects.filter((p) => FILTER_MATCHERS[key](normalize(p.categories))).length
      }
    })
    return counts
  }, [])

  const availableFilters = useMemo(() => {
    return FILTER_KEYS.filter((key) => {
      if (key === 'all') return true
      return filterCounts[key] > 0
    })
  }, [filterCounts])

  const filtered = useMemo(() => {
    const matcher = FILTER_MATCHERS[activeFilter]
    if (!matcher) return translatedProjects
    const matchingIds = new Set(
      projects.filter((p) => matcher(normalize(p.categories))).map((p) => p.id)
    )
    return translatedProjects.filter((p) => matchingIds.has(p.id))
  }, [activeFilter, translatedProjects])

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-xs font-mono text-t-text-tertiary tracking-wider">01</span>
            <span className="w-8 h-px bg-t-border" />
            <span className="text-xs uppercase tracking-widest text-t-text-tertiary">{t('work.hero.label')}</span>
          </motion.div>

          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight mb-6">
            <AnimatedHeading text={t('work.hero.line1')} />
            <br />
            <AnimatedHeading text={t('work.hero.line2')} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
            className="text-base md:text-lg text-t-text-secondary max-w-[600px] mb-10"
          >
            {t('work.hero.desc')}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="h-px w-full bg-gradient-to-r from-t-accent via-t-border to-transparent origin-left"
          />
        </div>
      </section>

      {/* ===== FILTERS ===== */}
      <section className="px-6 md:px-12 lg:px-20 pb-10 md:pb-14">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-t-text-tertiary mb-5 font-medium">
              {t('work.filter.label')}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {availableFilters.map((filterKey) => {
                const isActive = activeFilter === filterKey
                const label = t(`work.filter.${filterKey}`)
                const count = filterCounts[filterKey]
                return (
                  <button
                    key={filterKey}
                    onClick={() => setActiveFilter(filterKey)}
                    className="relative px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border border-t-border-light overflow-hidden hover:border-t-accent/40"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 bg-t-btn-bg rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 flex items-center gap-1.5 transition-colors duration-300 ${isActive ? 'text-t-btn-text' : 'text-t-text-secondary'}`}>
                      {label}
                      <span className={`text-[10px] font-mono ${isActive ? 'text-t-btn-text/70' : 'text-t-text-tertiary'}`}>
                        {count}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>

            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-5 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-t-accent" />
              <span className="text-xs text-t-text-tertiary">
                {filtered.length} {filtered.length !== 1 ? t('work.projects') : t('work.project')}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== GRID ===== */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  featured={idx === 0 && activeFilter === 'all'}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
            >
              <p className="text-xl font-bold text-t-text-tertiary mb-4">{t('work.empty')}</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="text-sm text-t-accent underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                {t('work.viewAll')}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
