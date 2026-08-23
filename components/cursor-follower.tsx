'use client'

import { useEffect, useRef } from 'react'

/**
 * Círculo que sigue al mouse con un poco de inercia.
 * Todo por refs + transform: cero re-renders de React y cero layout por frame.
 * El loop se duerme cuando el círculo alcanzó al mouse.
 */
export default function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const el = ref.current
    if (isTouch || !el) return

    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0
    let visible = false
    let raf = 0
    let running = false

    const loop = () => {
      cx += (tx - cx) * 0.15
      cy += (ty - cy) * 0.15
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      if (Math.abs(tx - cx) < 0.1 && Math.abs(ty - cy) < 0.1) {
        running = false
        return
      }
      raf = requestAnimationFrame(loop)
    }
    const wake = () => {
      if (!running) {
        running = true
        raf = requestAnimationFrame(loop)
      }
    }
    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      if (!visible) {
        visible = true
        cx = tx
        cy = ty
        el.style.opacity = '1'
      }
      wake()
    }
    const onLeave = () => {
      visible = false
      el.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0 transition-opacity duration-300 hidden md:block"
      style={{ willChange: 'transform' }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div className="h-6 w-6 rounded-full border-2 border-t-cursor" />
      </div>
    </div>
  )
}
