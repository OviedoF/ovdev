'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItemProps {
  question: string
  answer: string
  isOpen?: boolean
}

export default function FAQItem({ question, answer, isOpen: initialIsOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(initialIsOpen)

  return (
    <div className="border-t border-t-border py-2">
      {/* Botón */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        {/* Pregunta */}
        <span className="text-xl md:text-2xl font-normal pr-8 transition-all group-hover:opacity-80">
          {question}
        </span>

        {/* Icono */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-3xl flex-shrink-0 transition-transform group-hover:scale-110"
        >
          {isOpen ? '−' : '+'}
        </motion.span>
      </button>

      {/* Respuesta */}
      <AnimatePresence initial={false}>
        {isOpen && answer && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-lg text-t-text-secondary leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
