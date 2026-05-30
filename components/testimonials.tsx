'use client'

import { motion } from "framer-motion"
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

const companies = ['CAP Medical', 'ControlA2', 'Dental Digital', 'Fuku Shop', 'Saucedo Abogados', 'Goodbye Friend']

function CompanyMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative overflow-hidden py-4 mb-10"
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-t-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-t-bg to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee-slow">
        {[0, 1].map(copy => (
          <div key={copy} className="flex items-center gap-10 shrink-0 pr-10">
            {companies.map((name, i) => (
              <span key={i} className="flex items-center gap-3 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-t-accent/40 shrink-0" />
                <span className="text-lg md:text-xl font-bold text-t-text-tertiary/30 tracking-wider uppercase">
                  {name}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function TestimonialCard({ quote, author, role, index }: { quote: string; author: string; role: string; index: number }) {
  const company = role.split('·')[1]?.trim() || role

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-xl border border-t-border-light p-6 md:p-8 transition-all duration-300 hover:border-t-accent/50 hover:shadow-[0_8px_40px_var(--t-glow)] overflow-hidden"
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-t-accent/5 via-transparent to-t-accent/3" />

      <div className="relative flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-md bg-t-accent/10 text-[11px] font-semibold uppercase tracking-wider text-t-accent">
          {company}
        </span>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3 h-3 text-t-accent/60" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      <blockquote className="relative mb-5">
        <svg className="absolute -top-1 -left-1 w-6 h-6 text-t-accent/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 7.05C8.2 8.2 6.5 10.4 6.5 13c0 1.3.5 2.3 1.3 3 .8.7 1.8 1 2.9 1 1.2 0 2.2-.4 3-1.2.8-.8 1.3-1.9 1.3-3.1 0-1.1-.4-2-.9-2.7-.6-.7-1.4-1-2.4-1-.4 0-.8.1-1.2.2.5-1.7 1.8-3.2 3.8-4.3L11 3.05v4zm10 0c-2.8 1.15-4.5 3.35-4.5 5.95 0 1.3.5 2.3 1.3 3 .8.7 1.8 1 2.9 1 1.2 0 2.2-.4 3-1.2.8-.8 1.3-1.9 1.3-3.1 0-1.1-.4-2-.9-2.7-.6-.7-1.4-1-2.4-1-.4 0-.8.1-1.2.2.5-1.7 1.8-3.2 3.8-4.3L21 3.05v4z" />
        </svg>
        <p className="text-base md:text-lg leading-relaxed text-t-text pl-6">
          {quote}
        </p>
      </blockquote>

      <div className="relative flex items-center gap-3 pt-4 border-t border-t-border-light">
        <div className="w-9 h-9 rounded-full bg-t-accent/15 flex items-center justify-center text-t-accent text-xs font-bold ring-2 ring-t-accent/10">
          {author.split(' ').map(n => n[0]).slice(0, 2).join('')}
        </div>
        <div>
          <p className="text-sm font-semibold text-t-text">{author}</p>
          <p className="text-xs text-t-text-tertiary">{role}</p>
        </div>
      </div>
    </motion.article>
  )
}

export function Testimonials() {
  const { t } = useTranslation()

  const testimonials = [
    { quote: t('testimonials.1.quote'), author: 'Roberto Méndez', role: 'Director · CAP Medical' },
    { quote: t('testimonials.2.quote'), author: 'Andrés Fuentes', role: 'Gerente · ControlA2' },
    { quote: t('testimonials.3.quote'), author: 'Dra. Valeria Ruiz', role: 'Fundadora · Dental Digital' },
    { quote: t('testimonials.4.quote'), author: 'Tomás Nakamura', role: 'CEO · Fuku Shop' },
    { quote: t('testimonials.5.quote'), author: 'Lic. Martín Saucedo', role: 'Socio · Saucedo Abogados' },
    { quote: t('testimonials.6.quote'), author: 'Emily Carter', role: 'Founder · Goodbye Friend' },
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
          <span className="text-xs font-mono text-t-text-tertiary tracking-wider">03</span>
          <span className="w-8 h-px bg-t-border" />
          <span className="text-xs uppercase tracking-widest text-t-text-tertiary">{t('testimonials.label')}</span>
        </motion.div>

        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-tight mb-6">
          <AnimatedHeading text={t('testimonials.title')} />
        </h2>

        <CompanyMarquee />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {testimonials.map((item, idx) => (
            <TestimonialCard
              key={idx}
              quote={item.quote}
              author={item.author}
              role={item.role}
              index={idx}
            />
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="h-px w-full bg-t-border mt-14 md:mt-20 origin-left"
        />
      </div>
    </section>
  )
}
