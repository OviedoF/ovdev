'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, Copy, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import emailjs from 'emailjs-com'
import { useTranslation } from '@/lib/i18n'
import { RevealWords, RevealBlock } from '@/components/home/reveal'
import { gsap, useGSAP, EASE_OUT } from '@/lib/gsap'

const EMAIL = 'oviedofederico39@gmail.com'
const WHATSAPP = '543492621665'
const TYPES = ['web', 'app', 'system', 'shop', 'other'] as const

/* ------------------------------------------------------------------ */
/* Piezas                                                              */
/* ------------------------------------------------------------------ */

/** Hora local en Rafaela, actualizada cada minuto */
function LocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Argentina/Cordoba' })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])
  return <span className="tabular-nums">{time || '--:--'}</span>
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  textarea = false,
  required = true,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  placeholder: string
  textarea?: boolean
  required?: boolean
}) {
  const common =
    'peer w-full bg-transparent border-0 border-b border-t-text/25 focus:border-t-accent px-0 py-3 text-base md:text-lg text-t-text placeholder:text-t-text-tertiary/80 outline-none transition-colors duration-300 rounded-none'
  return (
    <label className="group block">
      <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-t-text-secondary group-focus-within:text-t-accent transition-colors">{label}</span>
      <span className="relative block">
        {textarea ? (
          <textarea required={required} rows={3} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={`${common} resize-none`} />
        ) : (
          <input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={common} />
        )}
        {/* línea de acento que crece al enfocar */}
        <span className="pointer-events-none absolute left-0 bottom-0 h-px w-full bg-t-accent origin-left scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]" />
      </span>
    </label>
  )
}

/* ------------------------------------------------------------------ */

export default function ContactForm() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [types, setTypes] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [copied, setCopied] = useState(false)

  const toggleType = (k: string) => setTypes((prev) => (prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]))

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t('contact.wa.prefill'))}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const typeLabels = types.map((k) => t(`contact.type.${k}`)).join(', ')
    const templateParams = {
      from_name: form.name,
      reply_to: form.email,
      message: `${form.message}${typeLabels ? `\n\nTipo de proyecto: ${typeLabels}` : ''}\n\n- Enviado desde: ${form.email} - Nombre: ${form.name}`,
    }
    try {
      await emailjs.send('service_mvtkkak', 'template_fqqwbqv', templateParams, 'YW2ZRC_tFc7q8fORZ')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTypes([])
    } catch (err) {
      console.error('Error:', err)
      setStatus('error')
    }
  }

  // Éxito inline: el form se va y entra la confirmación
  useGSAP(
    () => {
      if (status !== 'sent') return
      gsap.fromTo('[data-success] > *', { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, ease: EASE_OUT, stagger: 0.08 })
      gsap.fromTo('[data-success-check]', { scale: 0.5, rotate: -30 }, { scale: 1, rotate: 0, duration: 0.7, ease: 'back.out(2)', delay: 0.1 })
    },
    { scope: ref, dependencies: [status] },
  )

  return (
    <section ref={ref} data-pattern="dots" className="px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-20 md:pb-32">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 lg:gap-24">
        {/* ================= IZQUIERDA: título + vías directas ================= */}
        <div>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-t-text-tertiary mb-7">
            <span className="font-mono text-t-accent">01</span>
            <span className="w-8 h-px bg-t-accent/60" />
            {t('contact.label')}
          </p>
          <h1 className="text-[clamp(2.6rem,6.5vw,5.2rem)] font-bold leading-[0.98] tracking-[-0.03em] text-t-text">
            <RevealWords text={t('contact.hero.line1') + ' ' + t('contact.hero.line2')} onScroll={false} delay={0.1} as="span" className="block" wordClassName="" />
          </h1>
          <RevealBlock delay={0.45}>
            <p className="mt-7 text-base md:text-lg text-t-text-secondary leading-relaxed max-w-[480px]">{t('contact.hero.desc')}</p>
          </RevealBlock>

          {/* Disponibilidad, como una línea */}
          <RevealBlock delay={0.55} y={10}>
            <p className="mt-6 flex items-center gap-2.5 text-sm text-t-text-secondary">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
              </span>
              {t('contact.info.available')} · {t('contact.info.response').toLowerCase()}
            </p>
          </RevealBlock>

          {/* Vías directas: lista simple */}
          <RevealBlock delay={0.65} className="mt-10 md:mt-14">
            <ul className="border-t border-t-border-light/40">
              <li>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 border-b border-t-border-light/40 hover:border-t-accent/50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-t-accent shrink-0" strokeWidth={2} />
                  <span className="flex-1 min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-t-text-tertiary">WhatsApp</span>
                    <span className="block text-base md:text-lg font-medium text-t-text group-hover:text-t-accent transition-colors">+54 3492 621665</span>
                  </span>
                  <span className="hidden sm:block text-xs text-t-text-tertiary">{t('contact.wa.sub')}</span>
                  <ArrowUpRight className="w-4 h-4 text-t-text-tertiary group-hover:text-t-accent transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" strokeWidth={2} />
                </a>
              </li>
              <li className="flex items-center gap-4 py-4 border-b border-t-border-light/40">
                <Mail className="w-4 h-4 text-t-accent shrink-0" strokeWidth={2} />
                <span className="flex-1 min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-t-text-tertiary">Email</span>
                  <a href={`mailto:${EMAIL}`} className="block text-base md:text-lg font-medium text-t-text hover:text-t-accent transition-colors truncate">
                    {EMAIL}
                  </a>
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className={`shrink-0 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                    copied ? 'text-emerald-300' : 'text-t-text-tertiary hover:text-t-accent'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" strokeWidth={2.5} /> : <Copy className="w-3.5 h-3.5" strokeWidth={2} />}
                  {copied ? t('contact.email.copied') : t('contact.email.copy')}
                </button>
              </li>
              <li className="flex items-center gap-4 py-4 border-b border-t-border-light/40">
                <MapPin className="w-4 h-4 text-t-accent shrink-0" strokeWidth={2} />
                <span className="flex-1 min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-t-text-tertiary">{t('contact.info.location')}</span>
                  <span className="block text-base md:text-lg font-medium text-t-text">Rafaela, Santa Fe, Argentina</span>
                </span>
                <span className="text-xs text-t-text-tertiary">
                  {t('contact.time')} <LocalTime />
                </span>
              </li>
            </ul>
          </RevealBlock>
        </div>

        {/* ================= DERECHA: formulario ================= */}
        <RevealBlock delay={0.35} className="lg:pt-20">
          <div className="relative rounded-2xl border border-t-border-light/50 bg-t-card/60 p-6 md:p-9">
            {status === 'sent' ? (
              <div data-success className="py-8 md:py-14 text-center">
                <span data-success-check className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/40">
                  <Check className="w-7 h-7" strokeWidth={2.5} />
                </span>
                <h3 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight text-t-text">{t('contact.success.title')}</h3>
                <p className="mt-3 text-sm md:text-base text-t-text-secondary leading-relaxed max-w-[380px] mx-auto">{t('contact.success.desc')}</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-t-text hover:text-t-accent transition-colors"
                >
                  {t('contact.form.again')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-[-0.02em] text-t-text">{t('contact.form.title')}</h2>
                <p className="mt-1.5 text-sm text-t-text-secondary">{t('contact.form.subtitle')}</p>

                {/* Tipo de proyecto */}
                <div className="mt-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-t-text-secondary mb-3">{t('contact.type.label')}</p>
                  <div className="flex flex-wrap gap-2">
                    {TYPES.map((k) => {
                      const on = types.includes(k)
                      return (
                        <button
                          key={k}
                          type="button"
                          onClick={() => toggleType(k)}
                          aria-pressed={on}
                          className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium border transition-all duration-300 ${
                            on
                              ? 'border-t-accent text-t-bg bg-t-accent'
                              : 'border-t-text/20 text-t-text-secondary hover:border-t-accent/60 hover:text-t-text'
                          }`}
                        >
                          {t(`contact.type.${k}`)}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-7">
                  <Field label={t('contact.form.name')} placeholder={t('contact.form.name.placeholder')} value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field label={t('contact.form.email')} type="email" placeholder={t('contact.form.email.placeholder')} value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                  <div className="sm:col-span-2">
                    <Field label={t('contact.form.message')} textarea placeholder={t('contact.form.message.placeholder')} value={form.message} onChange={(v) => setForm({ ...form, message: v })} />
                  </div>
                </div>

                <div className="mt-9 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-t-text-tertiary max-w-[260px]">{t('contact.form.note')}</p>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-t-btn-bg text-t-btn-text font-semibold text-sm disabled:opacity-60 disabled:cursor-not-allowed transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.03]"
                  >
                    {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                    <span className="grid place-items-center w-9 h-9 rounded-full bg-t-btn-text/15 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:rotate-[-20deg]">
                      <Send className="w-4 h-4 -ml-0.5 mt-0.5" strokeWidth={2.2} />
                    </span>
                  </button>
                </div>
                {status === 'error' && <p className="mt-4 text-sm text-red-300">{t('contact.form.error')}</p>}
              </form>
            )}
          </div>
        </RevealBlock>
      </div>
    </section>
  )
}
