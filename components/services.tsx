"use client";

import { motion } from "framer-motion";

export function Services() {
  return (
    <section className="px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        
        {/* Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center gap-3"
        >
          <div className="h-2 w-2 rounded-full bg-white" />
          <span className="text-sm font-medium uppercase tracking-wider">
            MIS SERVICIOS
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-[clamp(3rem,8vw,6rem)] font-bold leading-none tracking-tight"
        >
          ¿Qué puedo hacer por ti?
        </motion.h2>

        {/* Divider */}
        <Divider />

        {/* ====== SECCIÓN 1 ====== */}
        <Section
          title="DESARROLLO DE APLICACIONES"
          col1={[
            "Aplicaciones web",
            "Aplicaciones móviles",
            "APIs y backend",
          ]}
          col2={[
            "Integración de terceros",
            "Optimización de rendimiento",
            "Mantenimiento y soporte",
          ]}
        />

        <Divider />

        {/* ====== SECCIÓN 2 ====== */}
        <Section
          title="UX / UI DESIGN"
          col1={[
            "Investigación de usuarios",
            "Wireframes y prototipos",
            "Diseño visual",
          ]}
          col2={[
            "Diseño responsivo",
            "Pruebas de usabilidad",
            "Guías de estilo",
          ]}
        />

        <Divider extra />

        {/* ====== SECCIÓN 3 ====== */}
        <Section
          title="SEO / MARKETING DIGITAL"
          col1={[
            "Optimización on-page",
            "Investigación de palabras clave",
            "Creación de contenido",
          ]}
          col2={[
            "Link building",
            "Análisis de competencia",
            "Marketing en redes sociales",
          ]}
        />
        <Divider extra />
      </div>
    </section>
  );
}

/* ----------------------------------------------
 *  SUBCOMPONENTE: Sección animada
 * ---------------------------------------------- */
function Section({ title, col1, col2 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2"
    >
      {/* Título */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight"
      >
        {title}
      </motion.h3>

      {/* Listas */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <ListAnimated items={col1} delay={0.1} />
        <ListAnimated items={col2} delay={0.25} />
      </div>
    </motion.div>
  );
}

/* ----------------------------------------------
 *  SUBCOMPONENTE: Lista animada en stagger
 * ---------------------------------------------- */
function ListAnimated({ items, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: delay,
          },
        },
      }}
      className="space-y-3"
    >
      {items.map((text: string, i: number) => (
        <motion.p
          key={i}
          className="text-lg"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {text}
        </motion.p>
      ))}
    </motion.div>
  );
}

/* ----------------------------------------------
 *  SUBCOMPONENTE: Divider con animación de reveal
 * ---------------------------------------------- */
function Divider({ extra = false }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`h-px w-full origin-left bg-white ${
        extra ? "mt-16 mb-16" : "mb-16"
      }`}
    />
  );
}
