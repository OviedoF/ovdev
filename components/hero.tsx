'use client'

import { motion } from "framer-motion"

export function Hero() {

  // Variantes para cada línea animada del título
  const lineVariant = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      filter: "blur(8px)",
      clipPath: "inset(100% 0 0 0)"
    },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4 + i * 0.4
      }
    })
  }

  // Variantes para el bloque inferior sticky
  const bottomVariant = {
    hidden: {
      opacity: 0,
      y: 40,
      clipPath: "inset(0 0 100% 0)"
    },
    show: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0 0)",
      transition: { 
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 1.6
      }
    }
  }

  // Variantes para la línea horizontal
  const dividerVariant = {
    hidden: { scaleX: 0, originX: 0 },
    show: {
      scaleX: 1,
      transition: { duration: 0.9, ease: "easeOut", delay: 1.65 }
    }
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black px-12 pt-[72px]">
      <div className="w-full">

        <div className="flex flex-col items-start justify-center" style={{ minHeight: 'calc(100vh - 72px)' }}>

          {/* ================================
              TITULOS CON ANIMACIONES PRO
             ================================ */}
          <h1 className="font-lg leading-[0.9] tracking-tight text-white mb-16 overflow-hidden">

            <motion.span
              custom={0}
              variants={lineVariant}
              initial="hidden"
              animate="show"
              className="block mb-8 text-[clamp(3rem,10vw,9rem)]"
            >
              HOLA, SOY FEDERICO
            </motion.span>

            <motion.span
              custom={1}
              variants={lineVariant}
              initial="hidden"
              animate="show"
              className="block mb-8 text-[clamp(3rem,10vw,9rem)]"
            >
              APPS MÓVILES
            </motion.span>

            <motion.span
              custom={2}
              variants={lineVariant}
              initial="hidden"
              animate="show"
              className="block text-[clamp(3rem,10vw,9rem)]"
            >
              & DESARROLLO WEB
            </motion.span>

          </h1>

          {/* ================================
              BLOQUE INFERIOR STICKY
             ================================ */}
          <motion.div
            variants={bottomVariant}
            initial="hidden"
            animate="show"
            className="
              w-full
              sticky 
              top-[72px]
              z-20 
              bg-black
              pb-4
            "
          >

            {/* Línea separadora animada */}
            <motion.div
              variants={dividerVariant}
              initial="hidden"
              animate="show"
              className="mb-12 h-[1px] w-full bg-white"
            />

            {/* Texto del footer */}
            <div className="flex w-full items-end justify-between text-white">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
              >
                <p className="text-lg leading-relaxed">Basado en Argentina</p>
                <p className="text-lg leading-relaxed">y trabajando para todo el mundo.</p>
              </motion.div>

              <motion.div
                className="max-w-[600px] text-right"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.95, duration: 0.8, ease: "easeOut" }}
              >
                <p className="text-lg leading-relaxed">
                  Diseñador y desarrollador apasionado creando sitios web cautivadores
                </p>
                <p className="text-lg leading-relaxed">
                  y aplicaciones funcionales que impulsan resultados.
                </p>
              </motion.div>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
