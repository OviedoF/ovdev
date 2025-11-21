'use client'

import { motion } from "framer-motion"

export function CTA() {

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

  return (
    <section className="px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* Top Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-32 h-px w-full bg-white"
        />

        {/* Content */}
        <div className="flex flex-col items-center text-center">

          {/* Small text */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            className="mb-8 text-sm uppercase tracking-wider"
          >
            ¿TENÉS UN PROYECTO EN MENTE?
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.25}
            className="mb-12 text-[clamp(3rem,10vw,7rem)] font-bold leading-none tracking-tight"
          >
            TRABAJEMOS JUNTOS
          </motion.h2>

          {/* Button */}
          <motion.a
            href="mailto:tu-email-aqui@ejemplo.com"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.45}
            className="rounded-full border border-white px-10 py-4 text-lg font-medium transition-all hover:bg-white hover:text-black cursor-pointer"
          >
            Contactarme
          </motion.a>
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-32 h-px w-full bg-white"
        />
      </div>
    </section>
  )
}
