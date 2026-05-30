'use client'

import { useEffect, useState, useRef } from 'react'

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const rafRef = useRef<number>()

  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouch)
    if (isTouch) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (isTouchDevice) return

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setCirclePosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [mousePosition, isTouchDevice])

  if (isTouchDevice) return null

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-opacity duration-300"
      style={{
        left: `${circlePosition.x}px`,
        top: `${circlePosition.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div className="h-6 w-6 rounded-full border-2 border-t-cursor" />
      </div>
    </div>
  )
}
