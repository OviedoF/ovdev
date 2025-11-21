'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How do I start a project with you ?',
    answer: ''
  },
  {
    question: 'What is the cost of your services ?',
    answer: "The cost of my projects varies depending on the type of service and project complexity. I'll provide a cost estimate after understanding your requirements."
  },
  {
    question: 'How much time is typically needed to finish a project ?',
    answer: ''
  },
  {
    question: 'What sets you apart from your competitors?',
    answer: ''
  },
  {
    question: 'How can I contact you to initiate a project ?',
    answer: ''
  },
  {
    question: 'Do you provide free consultations ?',
    answer: ''
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(1)

  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Title */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-sm tracking-widest uppercase">FAQ</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-tight">
              QUICK ANSWERS
            </h2>
          </div>

          {/* Right side - FAQ items */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full py-8 flex items-start justify-between gap-8 text-left hover:opacity-70 transition-opacity"
                >
                  <span className="text-xl md:text-2xl font-normal">
                    {faq.question}
                  </span>
                  <span className="text-2xl flex-shrink-0 mt-1">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {openIndex === index && faq.answer && (
                  <div className="pb-8 pr-12">
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
                
                {index < faqs.length - 1 && (
                  <div className="h-px bg-white/20 w-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
