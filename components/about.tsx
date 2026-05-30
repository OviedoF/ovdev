'use client'

import { motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useTranslation } from "@/lib/i18n"
import TransitionLink from "@/components/transition-link"

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1], delay },
  },
})

const wordContainer = (delay = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
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
    transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
  },
}

function AnimatedHeading({ text }: { text: string }) {
  return (
    <motion.span variants={wordContainer()} initial="hidden" whileInView="show" viewport={{ once: true }}>
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

function AnimatedCounter({ target, suffix = '', label, icon, delay = 0 }: { target: number; suffix?: string; label: string; icon: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    const timeout = setTimeout(() => requestAnimationFrame(tick), delay * 1000)
    return () => clearTimeout(timeout)
  }, [isInView, target, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay }}
      className="group relative rounded-xl border border-t-border-light p-5 md:p-6 overflow-hidden transition-all duration-300 hover:border-t-accent/50 hover:shadow-[0_4px_24px_var(--t-glow)]"
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-t-accent/5 via-transparent to-t-accent/3" />

      <div className="relative flex items-center gap-4">
        <div className="w-11 h-11 rounded-lg bg-t-accent/10 border border-t-accent/20 flex items-center justify-center text-t-accent shrink-0">
          {icon}
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-[clamp(2rem,5vw,3rem)] font-bold leading-none tabular-nums" style={{
              background: 'linear-gradient(135deg, var(--t-text), var(--t-accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {count}
            </span>
            <span className="text-[clamp(1.2rem,3vw,1.8rem)] font-bold text-t-accent">{suffix}</span>
          </div>
          <span className="text-[11px] text-t-text-tertiary uppercase tracking-widest mt-1">{label}</span>
        </div>
      </div>
    </motion.div>
  )
}

function ApproachCard({ title, desc, icon, index }: { title: string; desc: string; icon: React.ReactNode; index: number }) {
  const [hovered, setHovered] = useState(false)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const glowX = useTransform(mouseX, [0, 1], ['0%', '100%'])
  const glowY = useTransform(mouseY, [0, 1], ['0%', '100%'])
  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(300px circle at ${x} ${y}, var(--t-accent) 0%, transparent 70%)`
  )

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: 0.1 + index * 0.08 }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); mouseX.set(0.5); mouseY.set(0.5) }}
      className="group relative rounded-xl border border-t-border-light p-6 overflow-hidden transition-all duration-300 hover:border-t-accent/50 hover:shadow-[0_4px_24px_var(--t-glow)]"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: glowBg,
          opacity: hovered ? 0.06 : 0,
        }}
      />

      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: 0.2 + index * 0.08 }}
            className="w-10 h-10 rounded-lg bg-t-accent/10 border border-t-accent/20 flex items-center justify-center text-t-accent shrink-0"
          >
            {icon}
          </motion.div>
          <span className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-none" style={{
            background: 'linear-gradient(135deg, var(--t-grad-from), var(--t-grad-to))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.35,
          }}>
            0{index + 1}
          </span>
        </div>
        <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-t-text group-hover:text-t-accent transition-colors duration-300">{title}</h4>
        <p className="text-xs text-t-text-tertiary leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

const statIcons = [
  <svg key="proj" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
  </svg>,
  <svg key="exp" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>,
  <svg key="cli" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
  </svg>,
  <svg key="loc" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>,
]

const approachIcons = [
  <svg key="code" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>,
  <svg key="design" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
  </svg>,
  <svg key="speed" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>,
  <svg key="comm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>,
]

export function About() {
  const { t } = useTranslation()

  const approaches = [
    { title: t('about.approach.1.title'), desc: t('about.approach.1.desc'), icon: approachIcons[0] },
    { title: t('about.approach.2.title'), desc: t('about.approach.2.desc'), icon: approachIcons[1] },
    { title: t('about.approach.3.title'), desc: t('about.approach.3.desc'), icon: approachIcons[2] },
    { title: t('about.approach.4.title'), desc: t('about.approach.4.desc'), icon: approachIcons[3] },
  ]

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-28">
      <div className="max-w-[1200px] mx-auto">

        <motion.div variants={fade(0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-t-text-tertiary tracking-wider">02</span>
          <span className="w-8 h-px bg-t-border" />
          <span className="text-xs uppercase tracking-widest text-t-text-tertiary">{t('about.label')}</span>
        </motion.div>

        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-tight mb-14">
          <AnimatedHeading text={t('about.title')} />
        </h2>

        {/* Two-column: Quote + Bio */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-14 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="relative"
          >
            <div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-t-accent via-t-accent/40 to-transparent" />
            <blockquote className="pl-6 md:pl-8">
              <p className="text-[clamp(1.25rem,3vw,1.75rem)] font-medium leading-relaxed text-t-text-secondary italic">
                &ldquo;{t('about.quote')}&rdquo;
              </p>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-base md:text-lg text-t-text-secondary leading-relaxed mb-2">
              {t('about.desc')}{' '}
              <span className="text-t-accent font-semibold">{t('about.highlight1')}</span> {t('about.mid')}{' '}
              <span className="text-t-accent font-semibold">{t('about.highlight2')}</span>
              {t('about.desc2')}{' '}
              <span className="text-t-text font-medium">{t('about.highlight3')}</span>{' '}
              {t('about.desc3')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4"
            >
              <TransitionLink
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium text-t-accent hover:text-t-text transition-colors duration-300"
              >
                {t('about.cta')}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </TransitionLink>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px w-full bg-gradient-to-r from-t-accent/50 via-t-border to-transparent mb-10 origin-left"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16 md:mb-20">
          <AnimatedCounter target={35} suffix="+" label={t('about.projects')} icon={statIcons[0]} delay={0} />
          <AnimatedCounter target={4} suffix="+" label={t('about.experience')} icon={statIcons[1]} delay={0.1} />
          <AnimatedCounter target={20} suffix="+" label={t('about.clients')} icon={statIcons[2]} delay={0.2} />
          <AnimatedCounter target={6} suffix="+" label={t('about.countries')} icon={statIcons[3]} delay={0.3} />
        </div>

        {/* Approach */}
        <motion.div variants={fade(0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-t-border" />
          <span className="text-xs uppercase tracking-widest text-t-text-tertiary">{t('about.approach.label')}</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {approaches.map((item, idx) => (
            <ApproachCard
              key={idx}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
              index={idx}
            />
          ))}
        </div>

        <motion.div
          variants={fade(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="h-px w-full bg-t-border mt-16 md:mt-20"
        />
      </div>
    </section>
  )
}
