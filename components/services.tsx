'use client'

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, useInView } from "framer-motion"
import { useTranslation } from "@/lib/i18n"

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

const serviceIcons = [
  <svg key="dev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>,
  <svg key="ux" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
  </svg>,
  <svg key="seo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>,
]

const techStack = [
  'React', 'Next.js', 'React Native', 'Expo', 'Node.js', 'TypeScript',
  'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'AWS',
  'Firebase', 'Stripe', 'GraphQL', 'Docker', 'Figma',
]

function TechMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative overflow-hidden py-6 mt-10"
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-t-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-t-bg to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map(copy => (
          <div key={copy} className="flex gap-3 shrink-0 pr-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full border border-t-border-light/40 text-xs font-mono text-t-text-tertiary whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function ServiceCard({ title, items, index, icon }: { title: string; items: string[]; index: number; icon: React.ReactNode }) {
  const [hovered, setHovered] = useState(false)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true })

  const rotateX = useTransform(mouseY, [0, 1], [5, -5])
  const rotateY = useTransform(mouseX, [0, 1], [-5, 5])
  const glowX = useTransform(mouseX, [0, 1], ['0%', '100%'])
  const glowY = useTransform(mouseY, [0, 1], ['0%', '100%'])
  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(400px circle at ${x} ${y}, var(--t-accent) 0%, transparent 70%)`
  )

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: index * 0.12 }}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); mouseX.set(0.5); mouseY.set(0.5) }}
        style={{
          rotateX: hovered ? rotateX : 0,
          rotateY: hovered ? rotateY : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="relative rounded-xl border border-t-border-light p-6 md:p-8 overflow-hidden group"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: glowBg,
            opacity: hovered ? 0.07 : 0,
          }}
        />

        <div className="flex items-center gap-4 mb-5">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.2 + index * 0.1 }}
            className="w-12 h-12 rounded-lg bg-t-accent/10 border border-t-accent/20 flex items-center justify-center text-t-accent shrink-0"
          >
            {icon}
          </motion.div>
          <div className="flex items-baseline gap-3 flex-1">
            <span className="text-[clamp(2rem,4vw,3rem)] font-bold leading-none" style={{
              background: 'linear-gradient(135deg, var(--t-grad-from), var(--t-grad-to))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0.4,
            }}>
              0{index + 1}
            </span>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h3>
          </div>
        </div>

        <div ref={lineRef} className="h-px w-full bg-t-border/30 mb-5 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0"
            style={{ background: 'linear-gradient(to right, var(--t-accent), transparent)' }}
            initial={{ width: '0%' }}
            animate={lineInView ? { width: '100%' } : {}}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.3 + index * 0.1 }}
          />
        </div>

        <div className="flex flex-wrap gap-2.5">
          {items.map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.3 + i * 0.06 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="relative px-4 py-2 rounded-lg border border-t-border-light bg-t-card/50 backdrop-blur-sm text-xs md:text-sm text-t-text-secondary font-medium cursor-default transition-colors duration-300 hover:border-t-accent hover:text-t-text hover:shadow-[0_4px_20px_var(--t-glow)] overflow-hidden group/tag"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-t-accent/0 to-t-accent/10 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300" />
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Services() {
  const { t } = useTranslation()

  const services = [
    {
      title: t('services.dev.title'),
      items: [
        t('services.dev.col1.1'), t('services.dev.col1.2'), t('services.dev.col1.3'),
        t('services.dev.col2.1'), t('services.dev.col2.2'), t('services.dev.col2.3'),
      ],
      icon: serviceIcons[0],
    },
    {
      title: t('services.ux.title'),
      items: [
        t('services.ux.col1.1'), t('services.ux.col1.2'), t('services.ux.col1.3'),
        t('services.ux.col2.1'), t('services.ux.col2.2'), t('services.ux.col2.3'),
      ],
      icon: serviceIcons[1],
    },
    {
      title: t('services.seo.title'),
      items: [
        t('services.seo.col1.1'), t('services.seo.col1.2'), t('services.seo.col1.3'),
        t('services.seo.col2.1'), t('services.seo.col2.2'), t('services.seo.col2.3'),
      ],
      icon: serviceIcons[2],
    },
  ]

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-mono text-t-text-tertiary tracking-wider">01</span>
          <span className="w-8 h-px bg-t-border" />
          <span className="text-xs uppercase tracking-widest text-t-text-tertiary">{t('services.label')}</span>
        </motion.div>

        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-tight mb-14">
          <AnimatedHeading text={t('services.title')} />
        </h2>

        <div className="grid grid-cols-1 gap-4 md:gap-5">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              items={service.items}
              index={idx}
              icon={service.icon}
            />
          ))}
        </div>

        <TechMarquee />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="h-px w-full bg-t-border mt-6 md:mt-10 origin-left"
        />
      </div>
    </section>
  )
}
