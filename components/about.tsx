'use client'

import { motion } from "framer-motion"

export function About() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }
    })
  }

  const statsVariant = {
    hidden: { opacity: 0, y: 40 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay }
    })
  }

  return (
    <section className="px-6 pb-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* LABEL */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 flex items-center gap-3"
        >
          <div className="h-2 w-2 rounded-full bg-white" />
          <span className="text-sm font-medium uppercase tracking-wider">
            SOBRE MÍ
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          {/* COLUMNA IZQUIERDA VACÍA */}
          <div />

          {/* CONTENIDO */}
          <div>

            {/* DESCRIPCIÓN */}
            <motion.p
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-20 text-[clamp(1.5rem,3vw,2rem)] leading-relaxed"
            >
              Soy Federico Oviedo — desarrollador full-stack especializado en crear{" "}
              <span className="font-bold">aplicaciones móviles</span> y{" "}
              <span className="font-bold">experiencias web modernas</span>.
              Colaboro con clientes de todo el mundo para construir productos digitales 
              eficientes, escalables y visualmente atractivos utilizando{" "}
              <span className="font-bold">React Native, Expo, Next.js, Node.js</span> 
              y tecnologías basadas en la nube.
            </motion.p>

            {/* STATS */}
            <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2">

              {/* Proyectos */}
              <motion.div
                custom={0.4}
                variants={statsVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="mb-6 text-[clamp(4rem,10vw,8rem)] font-bold leading-none">
                  35+
                </div>
                <div className="h-px w-full bg-white" />
                <p className="mt-4 text-lg">Proyectos Completados</p>
              </motion.div>

              {/* Experiencia */}
              <motion.div
                custom={0.55}
                variants={statsVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="mb-6 text-[clamp(4rem,10vw,8rem)] font-bold leading-none">
                  4+
                </div>
                <div className="h-px w-full bg-white" />
                <p className="mt-4 text-lg">Años de Experiencia</p>
              </motion.div>

            </div>

            {/* BOTÓN CTA */}
            <motion.button
              custom={0.7}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group flex items-center gap-2 rounded-full border border-white px-8 py-4 text-lg font-medium transition-all hover:bg-white hover:text-black"
            >
              Saber Más de Mí
              <svg 
                className="h-5 w-5 transition-transform group-hover:rotate-45" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.button>

          </div>
        </div>

        {/* DIVISOR INFERIOR */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          className="mt-32 h-px w-full bg-white"
        />
      </div>
    </section>
  )
}
