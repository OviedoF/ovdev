'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function WorkPage() {
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

  // === ANIMACIONES ===
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  })

  const staggerContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const cardAnim = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const projects = [
    {
      id: 1,
      title: 'CAP Medical',
      categories: 'Web App • Panel Administrativo • Multi-Módulo',
      image:
        'https://www.shutterstock.com/image-vector/medical-booking-app-vector-design-600nw-2498494071.jpg',
      slug: 'cap-medical',
    },
    {
      id: 2,
      title: 'Pender',
      categories: 'App Móvil • React Native • Marketplace Pet',
      image:
        'https://cdn.dribbble.com/userupload/14552223/file/original-64bf124f0b65350806add95f5317960f.jpg?resize=400x0',
      slug: 'pender',
    },
    {
      id: 3,
      title: 'ControlA2',
      categories: 'SaaS • Contabilidad • Facturación Electrónica',
      image:
        'https://www.getjobber.com/wp-content/uploads/2024/09/Invoice-Simple-invoicing-app-1.jpg',
      slug: 'controla2',
    },
    {
      id: 4,
      title: '4me',
      categories: 'App Móvil • Gestión Podológica • Videodiagnóstico',
      image:
        'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?q=80&w=1400&auto=format&fit=crop',
      slug: '4me',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-20 md:pb-32">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.9] tracking-tight mb-12 overflow-hidden"
        >
          <motion.span
            variants={fadeUp(0.1)}
            className="block"
            style={{
              clipPath: line1Visible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
              transform: line1Visible ? 'translateY(0)' : 'translateY(100%)',
              transition: 'all 0.7s ease-out',
            }}
          >
            ÚLTIMOS PROYECTOS
          </motion.span>

          <motion.span
            variants={fadeUp(0.2)}
            className="block"
            style={{
              clipPath: line2Visible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
              transform: line2Visible ? 'translateY(0)' : 'translateY(100%)',
              transition: 'all 0.7s ease-out',
            }}
          >
            & ESTUDIOS DE CASO
          </motion.span>
        </motion.h1>

        <div className="w-full h-px bg-white" />
      </section>

      {/* ===== GRID ===== */}
      <section className="px-6 md:px-12 lg:px-16 pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={cardAnim}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* ===== Imagen del proyecto ===== */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 mb-6 rounded-xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay + Botón */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl"
                >
                  <a
                    href={`/work/${project.slug}`}
                    className="px-8 py-4 border border-white text-white text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2 rounded-lg"
                  >
                    Ver Proyecto
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* ===== Información ===== */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h3>
                  <p className="text-neutral-400 text-sm md:text-base">
                    {project.categories}
                  </p>
                </div>

                <a
                  href={`/work/${project.slug}`}
                  className="hidden md:flex items-center gap-2 text-sm font-medium tracking-wide hover:gap-3 transition-all duration-300 mt-2"
                >
                  Ver Proyecto
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
