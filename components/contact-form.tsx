'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from 'emailjs-com'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message + `- Enviado desde: ${formData.email} - Nombre: ${formData.name}`,
    }

    emailjs
      .send(
        'service_mvtkkak',
        'template_fqqwbqv',
        templateParams,
        'YW2ZRC_tFc7q8fORZ'
      )
      .then(
        () => {
          setIsSending(false)
          setSent(true)
          setFormData({ name: '', email: '', message: '' })
        },
        (err) => {
          console.error('Error:', err)
          setIsSending(false)
        }
      )
  }

  // 🔧 AHORA ES FUNCIÓN
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay,
      },
    },
  })

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  }

  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* LEFT SIDE */}
          <motion.div variants={fadeUp(0)}>
            <motion.div
              variants={fadeUp(0.1)}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-sm tracking-widest uppercase">CONTACTO</span>
            </motion.div>

            <motion.h2
              variants={fadeUp(0.2)}
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-tight mb-16"
            >
              HABLEMOS
            </motion.h2>

            <motion.div variants={stagger} className="space-y-12">
              {/* Email */}
              <motion.div
                variants={fadeUp(0.3)}
                className="pb-12 border-b border-white/20"
              >
                <div className="flex items-start gap-4">
                  <motion.svg
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-6 mt-1 flex-shrink-0 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </motion.svg>

                  <a
                    href="mailto:oviedofederico39@gmail.com"
                    className="
          text-xl md:text-2xl relative group text-white/90
          transition-all duration-300
          hover:text-white
          hover:translate-x-1
        "
                  >
                    oviedofederico39@gmail.com

                    {/* underline animation */}
                    <span
                      className="
            pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 
            h-[1px] w-0 bg-white transition-all duration-300 
            group-hover:w-full
          "
                    />
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={fadeUp(0.35)}
                className="pb-12 border-b border-white/20"
              >
                <div className="flex items-start gap-4">
                  <motion.svg
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 mt-1 flex-shrink-0 text-white/80 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </motion.svg>

                  <a
                    href="https://wa.me/543492621665"
                    target="_blank"
                    className="
          text-xl md:text-2xl relative group text-white/90
          transition-all duration-300
          hover:text-white
          hover:translate-x-1
        "
                  >
                    +54 3492 621665

                    {/* underline animation */}
                    <span
                      className="
            pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 
            h-[1px] w-0 bg-white transition-all duration-300 
            group-hover:w-full
          "
                    />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div variants={fadeUp(0.25)}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-zinc-900 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                Enviame un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-base mb-3">Nombre</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    required
                    className="w-full px-4 py-4 bg-zinc-800 border border-zinc-700 rounded-lg
                               text-white placeholder-gray-500 focus:border-white"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-base mb-3">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    type="email"
                    required
                    className="w-full px-4 py-4 bg-zinc-800 border border-zinc-700 rounded-lg
                               text-white placeholder-gray-500 focus:border-white"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-base mb-3">Mensaje</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-zinc-800 border border-zinc-700 rounded-lg
                               text-white placeholder-gray-500 focus:border-white resize-none"
                    placeholder="Escribí tu mensaje"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: isSending ? 1 : 1.02 }}
                  whileTap={{ scale: isSending ? 1 : 0.98 }}
                  className="w-full py-4 bg-white text-black font-semibold rounded-lg 
                             transition-colors disabled:bg-zinc-600 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <motion.div
                      className="flex justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
                    >
                      ⏳
                    </motion.div>
                  ) : (
                    'Enviar'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-zinc-900 rounded-2xl px-12 py-10 text-center shadow-xl"
            >
              <h3 className="text-3xl font-bold mb-4">¡Mensaje recibido!</h3>
              <p className="text-zinc-300 mb-8 text-lg">
                Gracias por contactarme. Te voy a responder lo antes posible.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSent(false)}
                className="px-8 py-3 rounded-lg bg-white text:black font-semibold text-black"
              >
                Cerrar
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
