'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TransitionLink from '@/components/transition-link'
import LanguageSelector from '@/components/language-selector'
import ThemeSelector from '@/components/theme-selector'
import { useTranslation } from '@/lib/i18n'

const navItem =
  "relative overflow-hidden inline-block h-[26px] text-md font-medium text-t-text tracking-wider group";

const navText =
  "block transition-transform duration-300 group-hover:-translate-y-full";

const navTextHover =
  "block absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full";

const underline =
  "absolute bottom-[0] right-0 h-[2px] bg-t-accent w-0 group-hover:w-full transition-all duration-300 origin-right";

function useScrollDirection() {
  const [scrollUp, setScrollUp] = useState(true)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastY && currentY > 50) {
        setScrollUp(false)
      } else {
        setScrollUp(true)
      }
      lastY = currentY
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollUp
}

export function Navigation() {
  const scrollUp = useScrollDirection()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const allItems = [
    { href: "/", label: t('nav.home') },
    { href: "/about", label: t('nav.about') },
    { href: "/work", label: t('nav.work') },
    { href: "/contact", label: t('nav.contact') },
  ];

  const itemsLeft = allItems.slice(0, 2);
  const itemsRight = allItems.slice(2);

  return (
    <>
      <nav
        className={`
          nav-animated fixed top-0 left-0 right-0 z-50 bg-t-bg/70 backdrop-blur-md
          transition-transform duration-300
          ${scrollUp ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <div className="mx-auto px-6 md:px-12">
          <div className="flex h-[72px] items-center justify-between">

            {/* Left navigation - desktop */}
            <div className="hidden md:flex items-center gap-10">
              {itemsLeft.map((item) => (
                <TransitionLink key={item.href} href={item.href} className={navItem}>
                  <span className={navText}>{item.label}</span>
                  <span className={navTextHover}>{item.label}</span>
                  <span className={underline}></span>
                </TransitionLink>
              ))}
            </div>

            {/* Hamburger button - mobile */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[2px] bg-t-text transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`block w-6 h-[2px] bg-t-text transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
            </button>

            {/* Center logo */}
            <TransitionLink
              href="/"
              className="absolute left-1/2 -translate-x-1/2 group overflow-hidden inline-block h-[20px] text-base md:text-lg font-medium tracking-[0.2em] text-t-text"
            >
              <span className="block font-extrabold transition-transform duration-300 group-hover:-translate-y-full">
                FED. OVIEDO
              </span>
              <span className="block font-extrabold absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
                FED. OVIEDO
              </span>
              <span className={underline} />
            </TransitionLink>

            {/* Right navigation - desktop */}
            <div className="hidden md:flex items-center gap-10">
              {itemsRight.map((item) => (
                <TransitionLink key={item.href} href={item.href} className={navItem}>
                  <span className={navText}>{item.label}</span>
                  <span className={navTextHover}>{item.label}</span>
                  <span className={underline}></span>
                </TransitionLink>
              ))}
              <LanguageSelector />
              <ThemeSelector />
            </div>

            {/* Mobile selectors */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeSelector />
              <LanguageSelector />
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-t-bg flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-10">
              {allItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <TransitionLink
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-bold tracking-wider text-t-text hover:opacity-70 transition-opacity"
                  >
                    {item.label}
                  </TransitionLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation
