'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import emailjs from 'emailjs-com'
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

function AnimatedHeading({ text }: { text: string }) {
  return (
    <motion.span variants={wordContainer()} initial="hidden" animate="show">
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

function FloatingInput({ label, placeholder, type = 'text', required = true, value, onChange }: {
  label: string; placeholder: string; type?: string; required?: boolean; value: string; onChange: (v: string) => void
}) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative group">
      <label className="block text-xs uppercase tracking-widest text-t-text-tertiary mb-2 font-medium transition-colors duration-300 group-focus-within:text-t-accent">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full px-5 py-4 bg-t-input border border-t-input-border rounded-xl text-t-text placeholder-t-text-tertiary/50 transition-all duration-300 focus:border-t-accent focus:shadow-[0_0_0_3px_var(--t-glow)] outline-none"
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-t-accent to-t-accent/0 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: focused ? '100%' : '0%' }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>
    </div>
  )
}

function FloatingTextarea({ label, placeholder, required = true, value, onChange }: {
  label: string; placeholder: string; required?: boolean; value: string; onChange: (v: string) => void
}) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative group">
      <label className="block text-xs uppercase tracking-widest text-t-text-tertiary mb-2 font-medium transition-colors duration-300 group-focus-within:text-t-accent">
        {label}
      </label>
      <div className="relative">
        <textarea
          required={required}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full px-5 py-4 bg-t-input border border-t-input-border rounded-xl text-t-text placeholder-t-text-tertiary/50 transition-all duration-300 focus:border-t-accent focus:shadow-[0_0_0_3px_var(--t-glow)] outline-none resize-none"
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-t-accent to-t-accent/0 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: focused ? '100%' : '0%' }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>
    </div>
  )
}

function ContactCard({ icon, label, value, href, delay }: { icon: React.ReactNode; label: string; value: string; href: string; delay: number }) {
  const [hovered, setHovered] = useState(false)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const glowX = useTransform(mouseX, [0, 1], ['0%', '100%'])
  const glowY = useTransform(mouseY, [0, 1], ['0%', '100%'])
  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(200px circle at ${x} ${y}, var(--t-accent) 0%, transparent 70%)`
  )

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); mouseX.set(0.5); mouseY.set(0.5) }}
      className="group relative flex items-center gap-4 p-5 rounded-xl border border-t-border-light overflow-hidden transition-all duration-300 hover:border-t-accent/50 hover:shadow-[0_4px_24px_var(--t-glow)]"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ background: glowBg, opacity: hovered ? 0.06 : 0 }}
      />
      <div className="relative w-11 h-11 rounded-lg bg-t-accent/10 border border-t-accent/20 flex items-center justify-center text-t-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="relative flex-1 min-w-0">
        <span className="block text-[10px] uppercase tracking-widest text-t-text-tertiary mb-0.5">{label}</span>
        <span className="block text-sm md:text-base text-t-text-secondary group-hover:text-t-text transition-colors duration-300 truncate">{value}</span>
      </div>
      <svg className="relative w-4 h-4 text-t-text-tertiary group-hover:text-t-accent group-hover:translate-x-0.5 transition-all duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </motion.a>
  )
}

export default function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message + `- Enviado desde: ${formData.email} - Nombre: ${formData.name}`,
    }

    emailjs
      .send('service_mvtkkak', 'template_fqqwbqv', templateParams, 'YW2ZRC_tFc7q8fORZ')
      .then(
        () => {
          setIsSending(false)
          setSent(true)
          setFormData({ name: '', email: '', message: '' })
        },
        (err) => {
          console.error('Error:', err)
          setIsSending(false)
        }
      )
  }

  return (
    <section className="px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-[1200px] mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-xs font-mono text-t-text-tertiary tracking-wider">01</span>
          <span className="w-8 h-px bg-t-border" />
          <span className="text-xs uppercase tracking-widest text-t-text-tertiary">{t('contact.label')}</span>
        </motion.div>

        <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight mb-4">
          <AnimatedHeading text={t('contact.hero.line1')} />
          <br />
          <AnimatedHeading text={t('contact.hero.line2')} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
          className="text-base md:text-lg text-t-text-secondary max-w-[550px] mb-10"
        >
          {t('contact.hero.desc')}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="h-px w-full bg-gradient-to-r from-t-accent via-t-border to-transparent origin-left mb-14 md:mb-20"
        />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">

          {/* LEFT - Contact info */}
          <div className="flex flex-col gap-6">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg font-bold mb-2"
            >
              {t('contact.info.title')}
            </motion.h3>

            <ContactCard
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              label="Email"
              value="oviedofederico39@gmail.com"
              href="mailto:oviedofederico39@gmail.com"
              delay={0.55}
            />

            <ContactCard
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>}
              label="WhatsApp"
              value="+54 3492 621665"
              href="https://wa.me/543492621665"
              delay={0.65}
            />

            <ContactCard
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>}
              label={t('contact.info.location')}
              value="Rafaela, Santa Fe, Argentina"
              href="https://maps.google.com/?q=Rafaela,Santa+Fe,Argentina"
              delay={0.75}
            />

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-4 flex items-center gap-3 p-4 rounded-xl border border-green-500/20 bg-green-500/5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <div>
                <span className="block text-sm font-medium text-t-text">{t('contact.info.available')}</span>
                <span className="block text-xs text-t-text-tertiary">{t('contact.info.response')}</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
            className="relative rounded-2xl border border-t-border-light bg-t-card/50 backdrop-blur-sm p-6 md:p-10 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-t-accent/3 via-transparent to-t-accent/2 pointer-events-none" />

            <div className="relative">
              <h3 className="text-xl md:text-2xl font-bold mb-1">{t('contact.form.title')}</h3>
              <p className="text-xs text-t-text-tertiary mb-8">{t('contact.form.subtitle')}</p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FloatingInput
                    label={t('contact.form.name')}
                    placeholder={t('contact.form.name.placeholder')}
                    value={formData.name}
                    onChange={(v) => setFormData({ ...formData, name: v })}
                  />
                  <FloatingInput
                    label={t('contact.form.email')}
                    placeholder={t('contact.form.email.placeholder')}
                    type="email"
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                  />
                </div>

                <FloatingTextarea
                  label={t('contact.form.message')}
                  placeholder={t('contact.form.message.placeholder')}
                  value={formData.message}
                  onChange={(v) => setFormData({ ...formData, message: v })}
                />

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: isSending ? 1 : 1.02 }}
                  whileTap={{ scale: isSending ? 1 : 0.98 }}
                  className="w-full py-4 bg-t-btn-bg text-t-btn-text font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_8px_32px_var(--t-glow-strong)] flex items-center justify-center gap-3"
                >
                  {isSending ? (
                    <div className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="block w-5 h-5 border-2 border-t-btn-text/30 border-t-t-btn-text rounded-full"
                        style={{ borderTopColor: 'currentColor' }}
                      />
                      <span>{t('contact.form.sending')}</span>
                    </div>
                  ) : (
                    <>
                      {t('contact.form.submit')}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-t-overlay/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSent(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-t-card border border-t-border-light rounded-2xl px-8 py-10 text-center shadow-2xl max-w-sm w-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-t-accent/5 via-transparent to-t-accent/3 pointer-events-none" />

              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-5"
                >
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>

                <h3 className="text-2xl font-bold mb-2">{t('contact.success.title')}</h3>
                <p className="text-sm text-t-text-secondary mb-8 leading-relaxed">{t('contact.success.desc')}</p>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSent(false)}
                  className="px-8 py-3 rounded-xl bg-t-btn-bg text-t-btn-text font-semibold text-sm hover:shadow-[0_4px_20px_var(--t-glow-strong)] transition-all duration-300"
                >
                  {t('contact.success.close')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
