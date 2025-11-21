'use client'

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FAQItem from '@/components/FAQItem'

export default function AboutPage() {
  const [titleVisible, setTitleVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setTitleVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

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

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  }

  // Parallax for image
  const x = useMotionValue(0)
  const rotateY = useTransform(x, [0, 1000], [-10, 10])

  return (
    <main
      className="bg-black text-white min-h-screen"
      onMouseMove={(e) => x.set(e.clientX)}
    >
      <Navigation />

      {/* ===================== FAQ SECTION ===================== */}
      <section className="px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">

            {/* Left - Title */}
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm tracking-wider">FAQ</span>
              </motion.div>

              <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight overflow-hidden">
                <motion.span
                  initial={{ clipPath: "inset(100% 0 0 0)", y: 100 }}
                  animate={{ clipPath: "inset(0 0 0 0)", y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  RESPUESTAS RÁPIDAS
                </motion.span>
              </h2>
            </div>

            {/* Right - Accordion */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-0"
            >
              <motion.div variants={fadeUp}><FAQItem
                question="¿Cómo empiezo un proyecto con vos?"
                answer="Muy simple: me escribís por WhatsApp o email, me contás tu idea y preparo una propuesta clara con tiempos, costos y las fases del proyecto."
                isOpen={false}
              /></motion.div>

              <motion.div variants={fadeUp}><FAQItem
                question="¿Cuánto cuestan tus servicios?"
                answer="Depende del tipo de proyecto: apps móviles, páginas web, paneles administrativos, APIs, automaciones, etc. Siempre entrego un presupuesto detallado según tus necesidades reales."
                isOpen={true}
              /></motion.div>

              <motion.div variants={fadeUp}><FAQItem
                question="¿Cuánto suele tardar un proyecto?"
                answer="Un landing puede tardar 1–2 semanas. Una app móvil completa entre 4–8 semanas. Un sistema empresarial entre 6–12 semanas. Siempre con comunicación constante."
                isOpen={false}
              /></motion.div>

              <motion.div variants={fadeUp}><FAQItem
                question="¿Qué te diferencia del resto?"
                answer="Mi enfoque: diseño moderno, calidad de código, velocidad y comunicación constante. Me involucro en el proyecto como si fuese mío."
                isOpen={false}
              /></motion.div>

              <motion.div variants={fadeUp}><FAQItem
                question="¿Cómo puedo contactarte?"
                answer="Podés escribirme por WhatsApp, email o mediante el formulario de contacto. Respondo rápido."
                isOpen={false}
              /></motion.div>

              <motion.div variants={fadeUp}><FAQItem
                question="¿Ofrecés una reunión inicial gratuita?"
                answer="Sí. La primera reunión (30 min) es totalmente gratuita para escuchar tu idea y guiarte en el camino ideal."
                isOpen={false}
              /></motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ===================== WHO AM I ===================== */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-t border-white/20">
        <div className="max-w-[1400px] mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-sm tracking-wider">QUIÉN SOY</span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

            {/* Left - Orb Animado */}
            <motion.div
              style={{ rotateY }}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="
      w-64 h-64 md:w-80 md:h-80 
      rounded-full 
      bg-gradient-to-br from-[#000000] to-[#001122] 
      blur-[2px]
      relative
      overflow-hidden
      shadow-[0_0_60px_rgba(100,100,100,0.5)]
    "
                animate={{
                  boxShadow: [
                    "0 0 60px rgba(100,100,100,0.5)",
                    "0 0 90px rgba(100,100,100,0.7)",
                    "0 0 60px rgba(100,100,100,0.5)"
                  ],
                  scale: [1, 1.04, 1],
                  rotate: [0, 20, -15, 0],
                  borderRadius: ["50%", "47%", "53%", "48%", "50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Partículas internas */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 60%)",
                      "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.4), transparent 60%)",
                      "radial-gradient(circle at 40% 70%, rgba(255,255,255,0.35), transparent 60%)",
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 60%)",
                    ]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>


            {/* Right */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-16"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-white/90">
                Soy <span className="font-bold">Federico Oviedo</span>,
                desarrollador full-stack especializado en
                <span className="font-bold"> aplicaciones móviles (React Native · Expo)</span>
                y <span className="font-bold">experiencias web modernas (Next.js · Node.js)</span>.
                <br /><br />
                Trabajo con clientes de Argentina, Chile, Uruguay, México y más,
                creando productos digitales funcionales, escalables y con un diseño atractivo.
                <br /><br />
                Me enfoco en transformar ideas en soluciones reales, trabajando con
                comunicación clara, velocidad y una obsesión por los detalles.
              </p>

              {/* Stats */}
              <div className="space-y-12">

                <div>
                  <div className="text-[clamp(4rem,12vw,8rem)] font-bold leading-none mb-4">35+</div>
                  <div className="h-px bg-white mb-3 opacity-60"></div>
                  <div className="text-lg">Proyectos Completados</div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-[clamp(4rem,12vw,8rem)] font-bold leading-none mb-4">30+</div>
                    <div className="h-px bg-white mb-3 opacity-60"></div>
                    <div className="text-lg">Clientes Satisfechos</div>
                  </div>
                  <div>
                    <div className="text-[clamp(4rem,12vw,8rem)] font-bold leading-none mb-4">4+</div>
                    <div className="h-px bg-white mb-3 opacity-60"></div>
                    <div className="text-lg">Años de Experiencia</div>
                  </div>
                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* ===================== HOW I WORK ===================== */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-t border-white/20">
        <div className="max-w-[1400px] mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-sm tracking-wider">PROCESO</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight mb-16"
          >
            MI MANERA DE TRABAJAR
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >

            {/* CARD 1 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="border border-white/30 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">PEDIDO DE PROYECTO</h3>
              <p className="text-base md:text-lg leading-relaxed mb-16 text-white/80">
                Me contás tu idea, qué necesitás y qué problema querés resolver.
                Te hago preguntas clave y defino el camino ideal para tu proyecto.
              </p>
              <div className="text-[8rem] md:text-[10rem] font-bold leading-none opacity-10 absolute bottom-4 left-8">
                01
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="border border-white/30 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">PLAN + ESTRATEGIA</h3>
              <p className="text-base md:text-lg leading-relaxed mb-16 text-white/80">
                Defino la estructura, funcionalidades, diseño y arquitectura técnica.
                Te entrego un plan claro con tiempos y costos.
              </p>
              <div className="text-[8rem] md:text-[10rem] font-bold leading-none opacity-10 absolute bottom-4 left-8">
                02
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="border border-white/30 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">DISEÑO & DESARROLLO</h3>
              <p className="text-base md:text-lg leading-relaxed mb-16 text-white/80">
                Construyo tu sitio, app o sistema con un enfoque en velocidad, usabilidad y calidad.
                Te muestro avances periódicos y lo ajustamos juntos.
              </p>
              <div className="text-[8rem] md:text-[10rem] font-bold leading-none opacity-10 absolute bottom-4 left-8">
                03
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
