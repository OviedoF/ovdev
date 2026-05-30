'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme, themes, type Theme } from '@/lib/theme'

export default function ThemeSelector() {
  const { theme, setTheme, selectorOpen: open, openSelector, closeSelector } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('theme-modal-open')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('theme-modal-open')
    }
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('theme-modal-open')
    }
  }, [open])

  const current = themes.find((t) => t.code === theme)!

  const modal = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex flex-col items-center justify-center"
          style={{ zIndex: 999999, backgroundColor: 'var(--t-overlay)' }}
          onClick={(e) => { if (e.target === e.currentTarget) closeSelector() }}
        >
          <AnimatePresence mode="wait">
            {hoveredIdx !== null && (
              <motion.div
                key={hoveredIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 pointer-events-none"
              >
                <img
                  src={themes[hoveredIdx].gifUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center mb-6 relative z-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-t-text">Choose a theme</h2>
          </motion.div>

          <div className="theme-scrollbar relative z-10 w-[90%] max-w-[1200px] grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-h-[65vh] overflow-y-auto px-1">
            {themes.map((t, i) => {
              const isActive = theme === t.code
              return (
                <motion.button
                  key={t.code}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => {
                    setTheme(t.code as Theme)
                    closeSelector()
                  }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group flex flex-col items-center gap-2"
                >
                  <div
                    className="relative w-full aspect-[3/4] rounded-xl overflow-hidden transition-all duration-300"
                    style={{
                      boxShadow: isActive
                        ? `0 0 0 3px ${t.accent}, 0 8px 30px ${t.accent}40`
                        : '0 4px 20px rgba(0,0,0,0.3)',
                    }}
                  >
                    <img
                      src={t.gifUrl}
                      alt={t.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: t.accent }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </motion.div>
                    )}
                  </div>

                  <div className="text-center">
                    <p className="text-sm font-semibold leading-tight text-t-text">{t.name}</p>
                    <p className="text-[10px] opacity-50 mt-0.5 text-t-text">
                      Art by {t.author}
                    </p>
                  </div>
                </motion.button>
              )
            })}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => closeSelector()}
            className="relative z-10 mt-5 px-6 py-2.5 rounded-full border border-t-border text-sm font-medium text-t-text hover:bg-t-btn-bg hover:text-t-btn-text transition-colors duration-300"
          >
            Close
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <button
        onClick={() => openSelector()}
        className="flex items-center gap-1.5 text-t-text text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
        aria-label="Change theme"
      >
        <span
          className="w-4 h-4 rounded-full border border-t-border"
          style={{ backgroundColor: current.accent }}
        />
      </button>

      {mounted && createPortal(modal, document.body)}
    </>
  )
}
