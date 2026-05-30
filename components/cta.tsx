'use client'

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/i18n"
import TransitionLink from "@/components/transition-link"

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
    <motion.span variants={wordContainer(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
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

export function CTA() {
  const { t } = useTranslation()
  const marqueeText = `${t('cta.title')}  ·  `

  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-36 overflow-hidden">
      {/* Background watermark marquee */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center opacity-[0.03]">
        <div className="flex animate-marquee-slow">
          {[0, 1].map(copy => (
            <span key={copy} className="text-[clamp(6rem,15vw,12rem)] font-bold whitespace-nowrap tracking-tight shrink-0">
              {marqueeText.repeat(5)}
            </span>
          ))}
        </div>
      </div>

      {/* Gradient accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-t-accent/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-t-accent/40 to-transparent" />

      <div className="relative max-w-[1200px] mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8 justify-center"
        >
          <span className="w-8 h-px bg-t-border" />
          <span className="text-xs font-mono text-t-text-tertiary tracking-wider">04</span>
          <span className="w-1.5 h-1.5 rounded-full bg-t-accent/40" />
          <span className="text-xs uppercase tracking-widest text-t-text-tertiary">{t('cta.subtitle')}</span>
          <span className="w-8 h-px bg-t-border" />
        </motion.div>

        <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight mb-6">
          <AnimatedHeading text={t('cta.title')} />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-t-text-secondary text-base md:text-lg mb-10 max-w-[500px] mx-auto"
        >
          {t('cta.desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
        >
          <TransitionLink
            href="/contact"
            className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold bg-t-btn-bg text-t-btn-text transition-all duration-300 hover:shadow-[0_8px_40px_var(--t-glow-strong)] hover:scale-[1.04]"
          >
            {t('cta.button')}
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </TransitionLink>
        </motion.div>
      </div>
    </section>
  )
}
