'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import TransitionLink from '@/components/transition-link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { projects } from '@/lib/projects'
import { useTranslation } from '@/lib/i18n'
import { getTranslatedProject, initProjectTranslations } from '@/lib/translations'

function ImageSlider({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const go = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  }, [images.length])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
  }, [images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '60%' : '-60%', opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-60%' : '60%', opacity: 0, scale: 0.95 }),
  }

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-t-card group">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={current}
            src={images[current]}
            alt={`${title} - ${current + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-t-bg/70 backdrop-blur-sm border border-t-border-light/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-t-bg/90 hover:border-t-accent/50"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-t-bg/70 backdrop-blur-sm border border-t-border-light/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-t-bg/90 hover:border-t-accent/50"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-lg bg-t-bg/70 backdrop-blur-sm border border-t-border-light/50 text-xs font-mono text-t-text-secondary">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`relative shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              i === current
                ? 'border-t-accent shadow-[0_0_12px_var(--t-glow)]'
                : 'border-transparent opacity-50 hover:opacity-80'
            }`}
          >
            <img src={img} alt={`${title} - ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const { t, locale } = useTranslation()
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

  const baseProject = projects.find((p) => p.slug === slug)
  const project = baseProject ? getTranslatedProject(baseProject, locale) : null

  const [titleVisible, setTitleVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setTitleVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
    }),
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t('project.notFound')}</h1>
          <TransitionLink href="/work" className="text-t-text-tertiary hover:text-t-text transition-colors">
            {t('project.backToWork')}
          </TransitionLink>
        </div>
      </div>
    )
  }

  const allImages = project.images.length > 0
    ? [project.image, ...project.images]
    : []

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 pt-24 md:pt-40 pb-12 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <TransitionLink
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-t-text-tertiary hover:text-t-text transition-colors tracking-wider"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            {t('project.back')}
          </TransitionLink>
        </motion.div>

        <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight mb-6 overflow-hidden">
          <motion.span
            className="block"
            style={{
              clipPath: titleVisible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
              transform: titleVisible ? 'translateY(0)' : 'translateY(100%)',
              transition: 'all 0.45s ease-out',
            }}
          >
            {project.title.toUpperCase()}
          </motion.span>
        </h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="text-xl md:text-2xl text-t-text-secondary max-w-3xl mb-8"
        >
          {project.subtitle}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="flex flex-wrap gap-3 mb-12"
        >
          {project.categories.split(' • ').map((cat) => (
            <span key={cat} className="px-4 py-2 border border-t-border rounded-full text-sm text-t-text-secondary">
              {cat}
            </span>
          ))}
        </motion.div>

        <div className="w-full h-px bg-t-border" />
      </section>

      {/* ===== IMAGE / SLIDER ===== */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {allImages.length > 1 ? (
            <ImageSlider images={allImages} title={project.title} />
          ) : project.image ? (
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-t-card">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          ) : null}
        </motion.div>
      </section>

      {/* ===== DESCRIPTION ===== */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 bg-t-accent rounded-full" />
            <span className="text-sm tracking-wider">{t('project.about')}</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg md:text-xl leading-relaxed text-t-text-secondary max-w-4xl"
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 pb-16 md:pb-24 border-t border-t-border-light pt-16 md:pt-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 bg-t-accent rounded-full" />
            <span className="text-sm tracking-wider">{t('project.features')}</span>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {project.features.map((group) => (
              <motion.div
                key={group.title}
                variants={fadeUp}
                className="border border-t-border-light rounded-2xl p-8 hover:border-t-border transition-colors"
              >
                <h3 className="text-xl font-bold mb-6">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-t-text-secondary text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-t-accent/50 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 pb-16 md:pb-24 border-t border-t-border-light pt-16 md:pt-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 bg-t-accent rounded-full" />
            <span className="text-sm tracking-wider">{t('project.tech')}</span>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {project.tech.map((group) => (
              <motion.div key={group.label} variants={fadeUp}>
                <h3 className="text-lg font-bold mb-6 text-t-text-tertiary">{group.label}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-t-accent/8 border border-t-border-light rounded-lg text-sm text-t-text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== INTEGRATIONS ===== */}
      {project.integrations.length > 0 && (
        <section className="px-4 sm:px-6 md:px-12 lg:px-16 pb-16 md:pb-24 border-t border-t-border-light pt-16 md:pt-24">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-2 h-2 bg-t-accent rounded-full" />
              <span className="text-sm tracking-wider">{t('project.integrations')}</span>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {project.integrations.map((integration) => (
                <motion.div
                  key={integration.service}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-6 rounded-xl bg-t-accent/5 border border-t-border-light"
                >
                  <div className="w-10 h-10 rounded-lg bg-t-accent/12 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{integration.service}</h4>
                    <p className="text-xs text-t-text-tertiary leading-relaxed">{integration.use}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== HIGHLIGHTS ===== */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 pb-20 md:pb-32 border-t border-t-border-light pt-16 md:pt-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 bg-t-accent rounded-full" />
            <span className="text-sm tracking-wider">{t('project.highlights')}</span>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-x-16 gap-y-6"
          >
            {project.highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 py-4 border-b border-t-border-light"
              >
                <span className="text-3xl font-bold text-t-text/10 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-t-text-secondary leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== NEXT PROJECT ===== */}
      {(() => {
        const currentIndex = projects.findIndex((p) => p.slug === slug)
        const nextProject = projects[(currentIndex + 1) % projects.length]
        return (
          <section className="px-4 sm:px-6 md:px-12 lg:px-16 pb-16 md:pb-24 border-t border-t-border-light pt-16 md:pt-24">
            <div className="max-w-[1400px] mx-auto text-center">
              <p className="text-sm tracking-wider text-t-text-tertiary mb-4">{t('project.next')}</p>
              <TransitionLink
                href={`/work/${nextProject.slug}`}
                className="text-[clamp(2rem,6vw,5rem)] font-bold leading-[0.9] tracking-tight hover:opacity-60 transition-opacity"
              >
                {nextProject.title.toUpperCase()}
              </TransitionLink>
            </div>
          </section>
        )
      })()}

      <Footer />
    </div>
  )
}
