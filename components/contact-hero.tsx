'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/lib/i18n'

export default function ContactHero() {
  const { t } = useTranslation()
  const [line1Visible, setLine1Visible] = useState(false)
  const [line2Visible, setLine2Visible] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setLine1Visible(true), 100)
    const timer2 = setTimeout(() => setLine2Visible(true), 600)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <section className="px-6 md:px-12 lg:px-16 py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] tracking-tight overflow-hidden">
          <span
            className="block transition-all duration-500 ease-out"
            style={{
              clipPath: line1Visible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
              transform: line1Visible ? 'translateY(0)' : 'translateY(100%)',
            }}
          >
            {t('contact.hero.line1')}
          </span>
          <span
            className="block transition-all duration-500 ease-out"
            style={{
              clipPath: line2Visible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
              transform: line2Visible ? 'translateY(0)' : 'translateY(100%)',
            }}
          >
            {t('contact.hero.line2')}
          </span>
        </h1>
      </div>
      <div className="max-w-[1400px] mx-auto mt-24">
        <div className="h-px bg-t-accent w-full" />
      </div>
    </section>
  )
}
