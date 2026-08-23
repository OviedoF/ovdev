'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import HomeProjects from './projects'

// El carrusel WebGL se carga sólo en el cliente y sólo si vale la pena
const Projects3D = dynamic(() => import('./projects-3d'), { ssr: false, loading: () => <div className="h-[100svh]" /> })

function supportsWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

/**
 * Sección de trabajos del home.
 * Desktop con WebGL y sin reduced-motion → anillo 3D (R3F). Si no → carrusel horizontal clásico.
 */
export default function HomeProjectsShowcase() {
  const [mode, setMode] = useState<'pending' | '3d' | 'fallback'>('pending')

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setMode(desktop && !reduce && supportsWebGL() ? '3d' : 'fallback')
  }, [])

  if (mode === 'pending') return <section className="h-[100svh]" aria-hidden />
  return mode === '3d' ? <Projects3D /> : <HomeProjects />
}
