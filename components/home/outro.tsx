'use client'

import { useTranslation } from '@/lib/i18n'
import TransitionLink from '@/components/transition-link'
import { ContactButton } from '@/components/contact-fab'
import { RevealWords, RevealBlock } from './reveal'

/** Bio corta + llamada a la acción, al estilo del pie de briceclain.com. */
export default function HomeOutro() {
  const { t } = useTranslation()

  return (
    <section data-pattern="dots" className="px-6 md:px-12 lg:px-20 py-24 md:py-40">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
        <div>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-[-0.02em] leading-[1]">
            <RevealWords text={t('home.outro.name')} />
          </h2>
          <RevealBlock delay={0.2}>
            <p className="mt-4 text-sm text-t-text-tertiary">{t('home.outro.location')}</p>
            <ul className="mt-10 space-y-2 text-lg md:text-xl font-semibold">
              <li>{t('home.outro.skill1')}</li>
              <li>{t('home.outro.skill2')}</li>
              <li className="text-t-accent">{t('home.outro.skill3')}</li>
            </ul>
          </RevealBlock>
        </div>

        <RevealBlock delay={0.1} className="space-y-6 text-lg md:text-xl leading-relaxed text-t-text-secondary">
          <p className="text-t-text text-xl md:text-2xl font-medium leading-snug">{t('home.outro.1')}</p>
          <p>{t('home.outro.2')}</p>
          <p>{t('home.outro.3')}</p>

          <div className="pt-6 flex flex-wrap items-center gap-6">
            {/* Acá "aterriza" el botón flotante de contacto (ver contact-fab.tsx) */}
            <span data-fab-slot className="inline-flex invisible">
              <ContactButton />
            </span>
            <TransitionLink href="/about" className="text-sm text-t-text-secondary hover:text-t-accent transition-colors underline-offset-4 hover:underline">
              {t('home.outro.cta')}
            </TransitionLink>
          </div>
        </RevealBlock>
      </div>
    </section>
  )
}
