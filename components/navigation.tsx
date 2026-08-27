'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Home, User, Briefcase, Mail, Menu, X, type LucideIcon } from 'lucide-react'
import TransitionLink from '@/components/transition-link'
import LanguageSelector from '@/components/language-selector'
import ThemeSelector from '@/components/theme-selector'
import ContactFab from '@/components/contact-fab'
import { Logo } from '@/components/brand/logo'
import { useTranslation } from '@/lib/i18n'

type Item = { href: string; label: string; icon: LucideIcon }

const EASE = [0.16, 1, 0.3, 1] as const

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

/**
 * Navegación principal.
 * - Desktop (md+): rail fijo a la izquierda con íconos, tooltip al hover y píldora animada en el activo.
 * - Mobile: barra superior mínima + overlay a pantalla completa.
 * El resto del layout se corre con `--nav-w` (ver globals.css).
 */
export function Navigation() {
  const pathname = usePathname()
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Cerrar el overlay al navegar
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const items: Item[] = [
    { href: '/', label: t('nav.home'), icon: Home },
    { href: '/about', label: t('nav.about'), icon: User },
    { href: '/work', label: t('nav.work'), icon: Briefcase },
    { href: '/contact', label: t('nav.contact'), icon: Mail },
  ]

  return (
    <>
      <ContactFab />

      {/* ===== Rail desktop ===== */}
      <motion.nav
        initial={{ x: -90, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        aria-label="Principal"
        className="hidden md:flex fixed left-0 top-0 z-50 h-[100dvh] w-[var(--nav-w)] flex-col items-center justify-between py-6 border-r border-t-border-light/30 bg-t-bg/90"
      >
        {/* Logo / monograma */}
        <TransitionLink
          href="/"
          aria-label="Federico Oviedo — inicio"
          className="group relative grid place-items-center w-11 h-11 rounded-2xl bg-t-btn-bg text-t-btn-text overflow-hidden"
        >
          <span className="absolute inset-0 grid place-items-center transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-full">
            <Logo className="w-6 h-6" />
          </span>
          <span className="absolute inset-0 grid place-items-center translate-y-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0">
            <Logo className="w-6 h-6" />
          </span>
        </TransitionLink>

        {/* Items */}
        <ul className="flex flex-col items-center gap-2">
          {items.map((item, i) => {
            const active = isActive(pathname, item.href)
            const Icon = item.icon
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.45 + i * 0.07 }}
                className="relative"
              >
                <TransitionLink
                  href={item.href}
                  aria-label={item.label}
                  aria-current={active ? 'page' : undefined}
                  className={`group relative flex flex-col items-center justify-center gap-1.5 w-[72px] h-[58px] rounded-2xl transition-colors duration-300 ${
                    active ? 'text-t-accent' : 'text-t-text-secondary hover:text-t-text'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      className="absolute inset-0 rounded-2xl bg-t-card/90 border border-t-border-light/40"
                    />
                  )}
                  {active && (
                    <motion.span
                      layoutId="nav-bar"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      className="absolute -left-[calc((var(--nav-w)-72px)/2)] top-1/2 -translate-y-1/2 w-[3px] h-7 rounded-r-full bg-t-accent"
                    />
                  )}
                  <Icon
                    strokeWidth={1.75}
                    className="relative w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110 group-hover:-rotate-6 group-hover:-translate-y-0.5"
                  />
                  <span
                    className={`relative text-[9px] font-semibold leading-none tracking-[0.14em] whitespace-nowrap transition-opacity duration-300 ${
                      active ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                    }`}
                  >
                    {item.label}
                  </span>
                </TransitionLink>
              </motion.li>
            )
          })}
        </ul>

        {/* Extras */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <LanguageSelector variant="rail" />
          <ThemeSelector variant="rail" />
        </motion.div>
      </motion.nav>

      {/* ===== Barra mobile ===== */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        aria-label="Principal"
        className="md:hidden fixed top-0 left-0 right-0 z-50 h-16 px-5 flex items-center justify-between bg-t-bg/90 border-b border-t-border-light/30"
      >
        <TransitionLink
          href="/"
          aria-label="Federico Oviedo — inicio"
          className="grid place-items-center w-10 h-10 rounded-xl bg-t-btn-bg text-t-btn-text"
        >
          <Logo className="w-[22px] h-[22px]" />
        </TransitionLink>
        <div className="flex items-center gap-4">
          <ThemeSelector />
          <LanguageSelector />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? t('nav.close') : t('nav.open')}
            aria-expanded={mobileOpen}
            className="relative grid place-items-center w-10 h-10 text-t-text"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" strokeWidth={1.75} />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" strokeWidth={1.75} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ===== Overlay mobile ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-t-bg/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-stretch gap-3 w-[78%] max-w-[360px]">
              {items.map((item, i) => {
                const active = isActive(pathname, item.href)
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.45, ease: EASE, delay: 0.05 + i * 0.07 }}
                  >
                    <TransitionLink
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl border transition-colors ${
                        active ? 'bg-t-card text-t-accent border-t-border-light/50' : 'text-t-text border-transparent hover:bg-t-card/60'
                      }`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                      <span className="text-lg font-bold tracking-wider">{item.label}</span>
                    </TransitionLink>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
