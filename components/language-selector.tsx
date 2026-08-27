'use client'

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Languages, Check } from 'lucide-react'
import { useTranslation, locales, type Locale } from '@/lib/i18n'

/**
 * Selector de idioma.
 * - `rail`: botón cuadrado dentro del rail lateral; el menú abre hacia la derecha, alineado abajo.
 * - default: compacto (bandera + código) para la barra mobile; el menú abre hacia abajo.
 */
export default function LanguageSelector({ variant = 'default' }: { variant?: 'rail' | 'default' }) {
  const { locale, setLocale, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = locales.find((l) => l.code === locale) ?? locales[0]

  // Un solo idioma activo: no tiene sentido mostrar el selector
  if (locales.length <= 1) return null

  const rail = variant === 'rail'

  const menu = (
    <AnimatePresence>
      {open && (
        <motion.ul
          role="listbox"
          aria-label={t('lang.change')}
          data-lenis-prevent
          initial={{ opacity: 0, x: rail ? -8 : 0, y: rail ? 0 : -8, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: rail ? -8 : 0, y: rail ? 0 : -8, scale: 0.96 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute z-[100] w-48 max-h-[70vh] overflow-y-auto rounded-xl bg-t-card border border-t-border-light/50 shadow-[0_20px_50px_-20px_rgba(0,0,0,.6)] p-1.5 ${
            rail ? 'left-[calc(100%+14px)] bottom-0 origin-bottom-left' : 'right-0 top-full mt-2 origin-top-right'
          }`}
        >
          {locales.map((l) => {
            const active = locale === l.code
            return (
              <li key={l.code}>
                <button
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLocale(l.code as Locale)
                    setOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    active ? 'bg-t-accent/15 text-t-text' : 'text-t-text-secondary hover:bg-t-accent/8 hover:text-t-text'
                  }`}
                >
                  <span className="w-7 text-[10px] font-mono font-semibold tracking-wider text-t-text-tertiary">{l.code.toUpperCase()}</span>
                  <span className="flex-1 text-left">{l.label}</span>
                  {active && <Check className="w-3.5 h-3.5 text-t-accent" strokeWidth={2.5} />}
                </button>
              </li>
            )
          })}
        </motion.ul>
      )}
    </AnimatePresence>
  )

  if (rail) {
    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={t('lang.change')}
          aria-expanded={open}
          className={`group relative grid place-items-center w-12 h-12 rounded-2xl transition-colors ${
            open ? 'text-t-text bg-t-accent/10' : 'text-t-text-secondary hover:text-t-text'
          }`}
        >
          <span className="flex flex-col items-center gap-1 leading-none">
            <Languages className="w-5 h-5" strokeWidth={1.6} />
            <span className="text-[9px] font-semibold tracking-[0.2em]">{current.code.toUpperCase()}</span>
          </span>
          {!open && (
            <span
              role="tooltip"
              className="pointer-events-none absolute left-[calc(100%+14px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-t-card text-t-text border border-t-border-light/40 px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] opacity-0 -translate-x-2 transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] group-hover:opacity-100 group-hover:translate-x-0 shadow-[0_10px_30px_-12px_rgba(0,0,0,.5)]"
            >
              {t('lang.change').toUpperCase()}
              <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-t-card border-l border-b border-t-border-light/40" />
            </span>
          )}
        </button>
        {menu}
      </div>
    )
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t('lang.change')}
        aria-expanded={open}
        className="flex items-center gap-1.5 text-t-text text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
      >
        <Languages className="w-5 h-5" strokeWidth={1.6} />
        <span className="text-xs font-semibold tracking-wider">{current.code.toUpperCase()}</span>
      </button>
      {menu}
    </div>
  )
}
