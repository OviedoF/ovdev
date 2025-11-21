'use client'

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState } from "react"
import clsx from "clsx"

export function Testimonials() {
  const testimonials = [
    {
      id: '01',
      quote:
        'Trabajar con Federico fue increíble. Transformó nuestra idea en una aplicación funcional, moderna y genial de usar. Su rapidez y comunicación clara hicieron que todo el proceso fuera perfecto.',
      author: 'Matías López',
      company: 'Founder · PetConnect',
      image: '/testimonial-matias.jpg',
    },
    {
      id: '02',
      quote:
        'Necesitábamos un sistema web sólido y escalable, y Federico superó nuestras expectativas. Su nivel técnico y capacidad de resolver problemas lo convierten en un aliado clave en cualquier proyecto.',
      author: 'Carla Herrera',
      company: 'CEO · NovaTech Studio',
      image: '/testimonial-carla.jpg',
    },
  ]

  const [index, setIndex] = useState(0)
  const x = useMotionValue(0)

  const next = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

  return (
    <section className="px-6 pb-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* LABEL */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-center gap-3"
        >
          <div className="h-2 w-2 rounded-full bg-white" />
          <span className="text-sm font-medium uppercase tracking-wider">
            TESTIMONIOS
          </span>
        </motion.div>

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
            LO QUE DICEN MIS CLIENTES
          </h2>
        </motion.div>

        {/* CARRUSEL 3D + PARALLAX */}
        <div
          className="relative w-full h-[420px] overflow-visible flex items-center justify-center perspective-[2000px]"
          onMouseMove={(e) => x.set(e.clientX)}
        >
          {testimonials.map((t, i) => {
            const offset = i - index
            const isCenter = offset === 0

            // Parallax based on mouse movement
            const rotateY = useTransform(
              x,
              [0, typeof window !== "undefined" ? window.innerWidth : 1000],
              [-10, 10]
            )

            return (
              <motion.div
                key={t.id}
                style={{
                  rotateY: isCenter ? rotateY : offset * -30,
                }}
                animate={{
                  x: offset * 320,
                  scale: isCenter ? 1 : 0.75,
                  opacity: isCenter ? 1 : 0.4,
                  filter: isCenter ? "blur(0px)" : "blur(2px)",
                  zIndex: isCenter ? 10 : 5,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={clsx(
                  "absolute w-[360px] p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl text-white"
                )}
              >
                {/* Número */}
                <div className="text-sm mb-4 opacity-70">{t.id}</div>

                {/* Cita */}
                <p className="text-lg mb-8 leading-relaxed">“{t.quote}”</p>

                {/* Autor */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{t.author}</div>
                    <div className="text-sm opacity-70">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* BOTONES */}
        <div className="flex justify-center gap-6 mt-20">
          <button
            onClick={prev}
            className="rounded-full border border-white px-6 py-3 hover:bg-white hover:text-black transition-all"
          >
            ← Anterior
          </button>
          <button
            onClick={next}
            className="rounded-full border border-white px-6 py-3 hover:bg-white hover:text-black transition-all"
          >
            Siguiente →
          </button>
        </div>
      </div>
    </section>
  )
}
