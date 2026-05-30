'use client'

import { motion, useMotionValue, useTransform, useInView } from "framer-motion"
import { useEffect, useState, useRef } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FAQItem from '@/components/FAQItem'
import TransitionLink from '@/components/transition-link'
import { useTranslation } from '@/lib/i18n'

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
    <motion.span variants={wordContainer()} initial="hidden" whileInView="show" viewport={{ once: true }} className={className}>
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

function AnimatedCounter({ target, suffix = '', label, delay = 0 }: { target: number; suffix?: string; label: string; delay?: number }) {
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
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-[clamp(3rem,8vw,6rem)] font-bold leading-none tabular-nums" style={{
          background: 'linear-gradient(135deg, var(--t-text), var(--t-accent))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {count}
        </span>
        <span className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-t-accent">{suffix}</span>
      </div>
      <div className="h-px bg-t-accent/40 my-3 mx-auto w-16" />
      <span className="text-sm text-t-text-tertiary">{label}</span>
    </div>
  )
}

function ProcessCard({ title, desc, number, icon, index }: { title: string; desc: string; number: string; icon: React.ReactNode; index: number }) {
  const [hovered, setHovered] = useState(false)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const glowX = useTransform(mouseX, [0, 1], ['0%', '100%'])
  const glowY = useTransform(mouseY, [0, 1], ['0%', '100%'])
  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(350px circle at ${x} ${y}, var(--t-accent) 0%, transparent 70%)`
  )

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: index * 0.12 }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); mouseX.set(0.5); mouseY.set(0.5) }}
      className="group relative rounded-2xl border border-t-border-light p-8 md:p-10 overflow-hidden transition-all duration-300 hover:border-t-accent/50 hover:shadow-[0_8px_40px_var(--t-glow)]"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ background: glowBg, opacity: hovered ? 0.07 : 0 }}
      />

      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.2 + index * 0.1 }}
            className="w-14 h-14 rounded-xl bg-t-accent/10 border border-t-accent/20 flex items-center justify-center text-t-accent"
          >
            {icon}
          </motion.div>
          <span className="text-[4rem] md:text-[5rem] font-bold leading-none" style={{
            background: 'linear-gradient(135deg, var(--t-grad-from), var(--t-grad-to))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.2,
          }}>
            {number}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-t-accent transition-colors duration-300">{title}</h3>
        <p className="text-base text-t-text-secondary leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

const techCategories = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Native', 'Expo'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs', 'WebSockets'],
  },
  {
    label: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma', 'Supabase'],
  },
  {
    label: 'DevOps & Tools',
    items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Figma', 'Stripe'],
  },
]

const processIcons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>,
]

export default function AboutPage() {
  const { t } = useTranslation()
  const x = useMotionValue(0)
  const rotateY = useTransform(x, [0, 1000], [-8, 8])

  return (
    <main className="min-h-screen" onMouseMove={(e) => x.set(e.clientX)}>
      <Navigation />

      {/* ===================== HERO ===================== */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-xs font-mono text-t-text-tertiary tracking-wider">01</span>
            <span className="w-8 h-px bg-t-border" />
            <span className="text-xs uppercase tracking-widest text-t-text-tertiary">{t('aboutPage.who.label')}</span>
          </motion.div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight mb-10">
            <AnimatedHeading text={t('aboutPage.hero.title')} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
            className="text-lg md:text-xl text-t-text-secondary leading-relaxed max-w-[700px]"
          >
            {t('aboutPage.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* ===================== WHO AM I ===================== */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 items-center">

            <motion.div
              style={{ rotateY }}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-[var(--t-grad-from)] to-[var(--t-grad-to)] blur-[2px] relative overflow-hidden shadow-[0_0_60px_var(--t-glow)]"
                animate={{
                  boxShadow: [
                    "0 0 60px var(--t-glow)",
                    "0 0 90px var(--t-glow-strong)",
                    "0 0 60px var(--t-glow)"
                  ],
                  scale: [1, 1.04, 1],
                  rotate: [0, 15, -10, 0],
                  borderRadius: ["50%", "47%", "53%", "48%", "50%"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 60%)",
                      "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.4), transparent 60%)",
                      "radial-gradient(circle at 40% 70%, rgba(255,255,255,0.35), transparent 60%)",
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 60%)",
                    ]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            >
              <p
                className="text-lg md:text-xl leading-relaxed text-t-text-secondary mb-8"
                dangerouslySetInnerHTML={{ __html: t('aboutPage.who.desc') }}
              />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <TransitionLink
                  href="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-t-btn-bg text-t-btn-text font-semibold text-sm hover:shadow-[0_4px_24px_var(--t-glow-strong)] hover:scale-[1.03] transition-all duration-300"
                >
                  {t('aboutPage.who.cta')}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            className="h-px w-full bg-gradient-to-r from-transparent via-t-accent/30 to-transparent my-16 md:my-20 origin-center"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <AnimatedCounter target={35} suffix="+" label={t('aboutPage.who.projects')} delay={0} />
            <AnimatedCounter target={4} suffix="+" label={t('aboutPage.who.experience')} delay={0.1} />
            <AnimatedCounter target={20} suffix="+" label={t('aboutPage.who.clients')} delay={0.2} />
            <AnimatedCounter target={6} suffix="+" label={t('aboutPage.who.countries')} delay={0.3} />
          </div>
        </div>
      </section>

      {/* ===================== TECH STACK ===================== */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xs font-mono text-t-text-tertiary tracking-wider">02</span>
            <span className="w-8 h-px bg-t-border" />
            <span className="text-xs uppercase tracking-widest text-t-text-tertiary">{t('aboutPage.tech.label')}</span>
          </motion.div>

          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-tight mb-12">
            <AnimatedHeading text={t('aboutPage.tech.title')} />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {techCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: catIdx * 0.1 }}
                className="rounded-xl border border-t-border-light p-5 md:p-6"
              >
                <span className="text-[11px] uppercase tracking-widest text-t-accent font-semibold mb-4 block">{category.label}</span>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + catIdx * 0.08 + i * 0.04 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 rounded-md border border-t-border-light/50 text-xs font-mono text-t-text-tertiary hover:text-t-accent hover:border-t-accent/50 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xs font-mono text-t-text-tertiary tracking-wider">03</span>
            <span className="w-8 h-px bg-t-border" />
            <span className="text-xs uppercase tracking-widest text-t-text-tertiary">{t('aboutPage.process.label')}</span>
          </motion.div>

          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-tight mb-14">
            <AnimatedHeading text={t('aboutPage.process.title')} />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <ProcessCard title={t('aboutPage.process.card1.title')} desc={t('aboutPage.process.card1.desc')} number="01" icon={processIcons[0]} index={0} />
            <ProcessCard title={t('aboutPage.process.card2.title')} desc={t('aboutPage.process.card2.desc')} number="02" icon={processIcons[1]} index={1} />
            <ProcessCard title={t('aboutPage.process.card3.title')} desc={t('aboutPage.process.card3.desc')} number="03" icon={processIcons[2]} index={2} />
            <ProcessCard title={t('aboutPage.process.card4.title')} desc={t('aboutPage.process.card4.desc')} number="04" icon={processIcons[3]} index={3} />
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20">

            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="text-xs font-mono text-t-text-tertiary tracking-wider">04</span>
                <span className="w-8 h-px bg-t-border" />
                <span className="text-xs uppercase tracking-widest text-t-text-tertiary">{t('aboutPage.faq.label')}</span>
              </motion.div>

              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-tight mb-4">
                <AnimatedHeading text={t('aboutPage.faq.title')} />
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm text-t-text-tertiary leading-relaxed"
              >
                {t('aboutPage.faq.subtitle')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-0"
            >
              <FAQItem question={t('aboutPage.faq.q1')} answer={t('aboutPage.faq.a1')} isOpen={true} />
              <FAQItem question={t('aboutPage.faq.q2')} answer={t('aboutPage.faq.a2')} />
              <FAQItem question={t('aboutPage.faq.q3')} answer={t('aboutPage.faq.a3')} />
              <FAQItem question={t('aboutPage.faq.q4')} answer={t('aboutPage.faq.a4')} />
              <FAQItem question={t('aboutPage.faq.q5')} answer={t('aboutPage.faq.a5')} />
              <FAQItem question={t('aboutPage.faq.q6')} answer={t('aboutPage.faq.a6')} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-px w-full bg-gradient-to-r from-transparent via-t-accent/40 to-transparent mb-16 origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-t-text-tertiary mb-4"
          >
            {t('cta.subtitle')}
          </motion.p>

          <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight mb-6">
            <AnimatedHeading text={t('cta.title')} />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-t-text-secondary max-w-[500px] mx-auto mb-10"
          >
            {t('cta.desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TransitionLink
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-t-btn-bg text-t-btn-text font-bold text-base hover:shadow-[0_8px_40px_var(--t-glow-strong)] hover:scale-[1.04] transition-all duration-300"
            >
              {t('cta.button')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </TransitionLink>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
