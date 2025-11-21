'use client'

import { motion } from "framer-motion"

export function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" }
    })
  }

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      }
    }
  }

  return (
    <footer className="px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* === MAIN FOOTER === */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-between gap-8 lg:flex-row"
        >

          {/* Logo */}
          <motion.div variants={fadeUp}>
            <div className="text-xl font-bold tracking-wider">
              OVIEDO FEDERICO
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            variants={stagger}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            {[
              { label: "INICIO", href: "/" },
              { label: "SOBRE MÍ", href: "/about" },
              { label: "TRABAJOS", href: "/work" },
              { label: "CONTACTO", href: "/contact" },
            ].map((item, i) => (
              <motion.a
                key={i}
                variants={fadeUp}
                href={item.href}
                className="text-sm font-medium uppercase tracking-wider transition-all hover:text-gray-400 hover:opacity-75"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>

          {/* Social Icons */}
          <motion.div 
            variants={stagger}
            className="flex items-center gap-4"
          >
            {[
              {
                label: "Twitter",
                icon: (
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                )
              },
              {
                label: "Facebook",
                icon: (
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                )
              },
              {
                label: "Instagram",
                icon: (
                  <>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
                  </>
                )
              },
              {
                label: "LinkedIn",
                icon: (
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                )
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                aria-label={item.label}
                variants={fadeUp}
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ duration: 0.25 }}
                className="transition-colors hover:text-gray-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </motion.a>
            ))}
          </motion.div>

        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 h-px w-full bg-white"
        />

        {/* Bottom Links */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-4 text-sm"
        >
          <motion.div variants={fadeUp}>Portafolio de Oviedo Federico</motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-8">
            <a href="#" className="hover:text-gray-400">2025</a>
          </motion.div>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer
