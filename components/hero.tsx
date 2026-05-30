'use client'

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "@/lib/i18n"
import { useTheme, themes } from "@/lib/theme"

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1], delay },
  },
})

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
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
  },
}

function AnimatedWords({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span variants={wordReveal} className={`inline-block ${className || ''}`}>
            {word}
          </motion.span>
        </span>
      ))}
    </>
  )
}

type HoverZone = 'accent' | 'where' | 'what' | null

export function Hero() {
  const { t } = useTranslation()
  const { theme, openSelector } = useTheme()
  const current = themes.find((th) => th.code === theme)
  const [hovered, setHovered] = useState<HoverZone>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleCardMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -15, y: x * 15 })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  const dimmed = hovered !== null

  return (
    <section className="relative overflow-hidden px-6 md:px-12 lg:px-20 pt-28 md:pt-36 pb-12 md:pb-20">
      {/* Background GIF */}
      {current && (
        <motion.div
          key={`bg-${theme}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none"
          style={{
            filter: dimmed ? 'blur(6px)' : 'blur(0px)',
            transition: 'filter 0.4s ease',
          }}
        >
          <img
            src={current.gifUrl}
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, var(--t-bg) 0%, transparent 30%, transparent 50%, var(--t-bg) 100%)`,
            }}
          />
        </motion.div>
      )}

      {/* Dimming overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400"
        style={{
          backgroundColor: 'var(--t-bg)',
          opacity: dimmed ? 0.6 : 0,
        }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">

          {/* Left: content */}
          <div>
            <motion.div
              variants={fade(0)}
              initial="hidden"
              animate="show"
              className="flex items-center gap-3 mb-6 transition-opacity duration-300"
              style={{ opacity: dimmed ? 0.2 : 1 }}
            >
              <span className="text-xs font-mono text-t-text-tertiary tracking-wider">00</span>
              <span className="w-8 h-px bg-t-border" />
              <span className="text-xs uppercase tracking-widest text-t-text-tertiary">Intro</span>
            </motion.div>

            <motion.h1
              variants={wordContainer(0.1)}
              initial="hidden"
              animate="show"
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-tight mb-6"
            >
              <span
                className="transition-opacity duration-300"
                style={{ opacity: dimmed && hovered !== 'accent' ? 0.15 : 1 }}
              >
                <AnimatedWords text={t('hero.line1')} />
              </span>
              <br />
              <span
                className="inline-block cursor-default transition-all duration-300"
                style={{
                  opacity: dimmed && hovered !== 'accent' ? 0.15 : 1,
                  textShadow: hovered === 'accent' ? `0 0 30px var(--t-accent)` : 'none',
                }}
                onMouseEnter={() => setHovered('accent')}
                onMouseLeave={() => setHovered(null)}
              >
                <AnimatedWords text={t('hero.line2')} className="text-t-accent" />
                <br />
                <AnimatedWords text={t('hero.line3')} className="text-t-accent" />
              </span>
              <br />
              <span
                className="transition-opacity duration-300"
                style={{ opacity: dimmed && hovered !== 'accent' ? 0.15 : 1 }}
              >
                <AnimatedWords text={t('hero.line4')} />
              </span>
            </motion.h1>

            <motion.div
              variants={wordContainer(0.4)}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 max-w-[700px] mb-10"
            >
              <motion.div
                variants={wordReveal}
                className="cursor-default transition-all duration-300"
                style={{
                  opacity: dimmed && hovered !== 'where' ? 0.15 : 1,
                  transform: hovered === 'where' ? 'scale(1.03)' : 'scale(1)',
                }}
                onMouseEnter={() => setHovered('where')}
                onMouseLeave={() => setHovered(null)}
              >
                <p className="text-sm text-t-text-tertiary uppercase tracking-wider mb-1">Where</p>
                <p className="text-base text-t-text-secondary leading-relaxed">{t('hero.location1')}<br />{t('hero.location2')}</p>
              </motion.div>
              <motion.div
                variants={wordReveal}
                className="cursor-default transition-all duration-300"
                style={{
                  opacity: dimmed && hovered !== 'what' ? 0.15 : 1,
                  transform: hovered === 'what' ? 'scale(1.03)' : 'scale(1)',
                }}
                onMouseEnter={() => setHovered('what')}
                onMouseLeave={() => setHovered(null)}
              >
                <p className="text-sm text-t-text-tertiary uppercase tracking-wider mb-1">What</p>
                <p className="text-base text-t-text-secondary leading-relaxed">{t('hero.desc1')}<br />{t('hero.desc2')}</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: 3D tilt art card (desktop only) */}
          {current && (
            <motion.div
              key={`strip-${theme}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
              className="hidden lg:flex flex-col items-center gap-3 self-start mt-8 transition-opacity duration-300"
              style={{ opacity: dimmed ? 0.3 : 1, perspective: '800px' }}
            >
              <div
                ref={cardRef}
                onClick={openSelector}
                onMouseMove={handleCardMouse}
                onMouseLeave={resetTilt}
                className="relative w-full aspect-[3/5] rounded-xl overflow-hidden cursor-pointer group"
                style={{
                  boxShadow: `0 8px 40px ${current.accent}25`,
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
                }}
              >
                <img
                  src={current.gifUrl}
                  alt={current.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-colors duration-300 group-hover:bg-black/10"
                  style={{
                    background: `linear-gradient(to top, var(--t-bg) 0%, transparent 40%)`,
                  }}
                />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs font-semibold text-t-text">{current.name}</p>
                  <p className="text-[10px] text-t-text-tertiary">
                    Art by {current.author}
                  </p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2 py-1 rounded-md bg-t-bg/80 text-[10px] font-medium text-t-text backdrop-blur-sm">
                    Change theme
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          variants={fade(0.5)}
          initial="hidden"
          animate="show"
          className="h-px w-full bg-t-border transition-opacity duration-300"
          style={{ opacity: dimmed ? 0.2 : 1 }}
        />
      </div>
    </section>
  )
}
