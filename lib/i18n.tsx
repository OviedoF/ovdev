'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Locale = 'es' | 'en' | 'ja' | 'zh' | 'de' | 'pt' | 'fr' | 'it'

// Por ahora un solo idioma. Para reactivar otros, agregá el locale acá y su bloque en `translations`.
export const locales: { code: Locale; label: string; flag: string }[] = [
  { code: 'es', label: 'Español', flag: '🇦🇷' },
]

const translations: Record<string, Record<string, string>> = {
  es: {
    // Nav
    'nav.home': 'INICIO',
    'nav.about': 'SOBRE MÍ',
    'nav.work': 'TRABAJOS',
    'nav.contact': 'CONTACTO',
    'fab.label': 'Contactame',

    // ===== HOME (nueva) =====
    // Hero
    'home.hero.l1.pre': 'Hola, soy ',
    'home.hero.l1.name': 'Federico.',
    'home.hero.l2': 'Planeamiento y diseño.',
    'home.hero.l3.verb': 'Desarrollo',
    'home.hero.l3.post': ' y despliegue.',
    'home.hero.sub': 'Vos ponés la idea. Del resto me encargo yo.',
    'home.hero.scroll': 'Saber más',
    'home.hero.theme': 'Cambiar tema',
    'home.hero.artBy': 'Arte de',

    // Selector de temas
    'theme.title': 'Elegí un tema',
    'theme.change': 'Cambiar tema',
    'theme.close': 'Cerrar',
    'theme.artBy': 'Arte de',

    // Story (scroll)
    'home.story.1.pre': 'Primero, necesitamos una',
    'home.story.1.word': 'idea',
    'home.story.1.post': '...',
    'home.story.2.pre': 'Después, un análisis y una',
    'home.story.2.word': 'dirección',
    'home.story.2.post': '...',
    'home.story.3.pre': 'La creatividad hace su parte:',
    'home.story.3.word': 'el diseño',
    'home.story.3.post': '.',
    'home.story.4.pre': 'Y por último,',
    'home.story.4.word': 'programo y publico',
    'home.story.4.post': ' tu web o tu app.',

    // Dialog
    'home.dialog.label': 'Te estarás preguntando...',
    'home.dialog.1': 'Necesito una web para mi negocio. Punto. Vendemos productos para mascotas y quiero que la gente nos encuentre y compre online.',
    'home.dialog.2': '¡Genial! Yo me encargo de todo. Primero el diseño, que te comparto para que lo veas. Cuando lo apruebes, programo tu web, la publico y te la dejo funcionando.',
    'home.dialog.3': 'Perfecto, ¿cuándo empezamos?',
    'home.dialog.4': '¡Ahora!',
    'home.dialog.you': 'Vos',
    'home.dialog.me': 'Yo',
    'home.dialog.eyebrow': 'Así arranca un proyecto',
    'home.dialog.sub': 'Sin formularios eternos ni reuniones de tres horas: me contás la idea, te propongo el camino y arrancamos.',
    'home.dialog.point.1': 'Respuesta en el día',
    'home.dialog.point.2': 'Diseño antes de programar',
    'home.dialog.point.3': 'Una sola persona de principio a fin',
    'home.dialog.cta': 'Empezar una conversación',
    'home.dialog.status': 'en línea',
    'home.dialog.badge': 'Sin bots',
    'home.dialog.today': 'Hoy',
    'home.dialog.input': 'Contame tu idea…',

    // FAQ trio
    'home.faq.label': 'Lo que todos preguntan',
    'home.faq.1.title': '¿Cuánto cuesta?',
    'home.faq.1.desc': 'Contame tu proyecto: el precio depende del tiempo que lleve. Como referencia, una web simple está entre USD 100 y 400, una tienda online o web completa entre USD 400 y 900, y una app móvil o un sistema a medida entre USD 900 y 1.500. Siempre con presupuesto cerrado antes de arrancar.',
    'home.faq.2.title': '¿Y después?',
    'home.faq.2.desc': 'Te entrego todo funcionando y a tu nombre. Incluyo una capacitación para que puedas cargar y modificar el contenido vos mismo, sin depender de nadie.',
    'home.faq.3.title': 'Dormí tranquilo',
    'home.faq.3.desc': 'Si no querés ocuparte de nada, dejámelo a mí: con un plan mensual me encargo del hosting, el dominio, las actualizaciones, los backups, la seguridad y el soporte directo conmigo.',
    'home.faq.3.price': 'Desde USD 30/mes',
    'home.faq.3.cta': 'Quiero el plan',

    // Projects
    'home.projects.label': 'Mis mejores proyectos',
    'home.projects.title': 'Ideas que ya son productos',
    'home.projects.all': 'Ver todos los proyectos',
    'home.projects.view': 'Ver proyecto',

    // Outro / bio
    'home.outro.name': 'FEDERICO OVIEDO',
    'home.outro.location': 'Argentina · trabajo para todo el mundo',
    'home.outro.1': 'Diseño y desarrollo sitios web, apps móviles y sistemas que son simples de usar y que funcionan.',
    'home.outro.2': 'Me ocupo de todo el proceso — idea, diseño, código, publicación y mantenimiento — sin intermediarios. Así vos hablás con una sola persona y sabés siempre en qué está tu proyecto.',
    'home.outro.3': 'Desde una idea simple salen una web o una app reales. Mis clientes valoran la rapidez, la comunicación clara y que las cosas queden funcionando.',
    'home.outro.cta': 'Conocer mi recorrido',
    'home.outro.skill1': '.Diseño UX/UI',
    'home.outro.skill2': '.Desarrollo web y móvil',
    'home.outro.skill3': '.Mantenimiento mensual',

    // ===== Hero (legacy component) =====
    'hero.line1': 'TENÉS UNA IDEA.',
    'hero.line2': 'YO LA DISEÑO,',
    'hero.line3': 'LA PROGRAMO',
    'hero.line4': 'Y LA PUBLICO.',
    'hero.location1': 'Desde Argentina,',
    'hero.location2': 'para clientes de todo el mundo.',
    'hero.desc1': 'Sitios web, apps y sistemas a medida.',
    'hero.desc2': 'Vos ponés la idea; del resto me encargo yo.',

    // Services (legacy component)
    'services.label': 'QUÉ HAGO POR VOS',
    'services.title': 'Contame qué necesitás. Yo me ocupo del resto.',
    'services.dev.title': 'TU WEB O TU APP, LISTA PARA USAR',
    'services.dev.col1.1': 'Sitio web para tu negocio',
    'services.dev.col1.2': 'App móvil (iOS y Android)',
    'services.dev.col1.3': 'Tienda online',
    'services.dev.col2.1': 'Sistema de gestión a medida',
    'services.dev.col2.2': 'Pagos integrados (Mercado Pago, Stripe)',
    'services.dev.col2.3': 'Publicada y funcionando',
    'services.ux.title': 'DISEÑO QUE SE ENTIENDE SOLO',
    'services.ux.col1.1': 'Diseño de interfaz',
    'services.ux.col1.2': 'Tu marca aplicada',
    'services.ux.col1.3': 'Se ve bien en celular',
    'services.ux.col2.1': 'Prototipo antes de programar',
    'services.ux.col2.2': 'Experiencia simple para tu cliente',
    'services.ux.col2.3': 'Vos aprobás cada pantalla',
    'services.seo.title': 'DESPUÉS DEL LANZAMIENTO',
    'services.seo.col1.1': 'Mantenimiento mensual',
    'services.seo.col1.2': 'Actualizaciones y mejoras',
    'services.seo.col1.3': 'Soporte directo por WhatsApp',
    'services.seo.col2.1': 'Hosting y dominio gestionados',
    'services.seo.col2.2': 'Backups y seguridad',
    'services.seo.col2.3': 'Vos dormís tranquilo',

    // About (home, legacy component)
    'about.label': 'SOBRE MÍ',
    'about.desc': 'Soy Federico Oviedo. Hace más de 4 años convierto ideas en',
    'about.highlight1': 'apps móviles',
    'about.mid': 'y',
    'about.highlight2': 'sitios y sistemas web',
    'about.desc2': ' para emprendedores, clínicas, comercios y empresas de Argentina, Chile, Uruguay, México y más. Vos me contás qué querés lograr;',
    'about.highlight3': 'yo diseño, programo, publico y mantengo',
    'about.desc3': 'tu producto.',
    'about.projects': 'Proyectos Entregados',
    'about.experience': 'Años de Experiencia',
    'about.clients': 'Clientes en el Mundo',
    'about.title': 'CÓMO TRABAJO CON VOS',
    'about.quote': 'No necesitás saber de tecnología. Necesitás alguien que la entienda por vos y te entregue algo que funcione.',
    'about.countries': 'Países Alcanzados',
    'about.approach.label': 'ASÍ DE SIMPLE',
    'about.approach.1.title': 'Vos traés la idea',
    'about.approach.1.desc': 'No hace falta un brief técnico. Me contás el problema y te propongo la solución, con tiempos y precio claros.',
    'about.approach.2.title': 'Yo diseño y te muestro',
    'about.approach.2.desc': 'Antes de programar ves cómo va a quedar. Ajustamos juntos hasta que te guste.',
    'about.approach.3.title': 'Lo programo y lo publico',
    'about.approach.3.desc': 'Avances cada semana. Al final tu web o app queda online, funcionando y a tu nombre.',
    'about.approach.4.title': 'Y te lo mantengo',
    'about.approach.4.desc': 'Con un plan mensual me ocupo de hosting, actualizaciones, seguridad y soporte. Vos te dedicás a tu negocio.',
    'about.cta': 'Ver cómo trabajo',

    // Testimonials
    'testimonials.label': 'CONFIARON EN MÍ',
    'testimonials.title': 'LO QUE DICEN MIS CLIENTES',
    'testimonials.prev': 'Anterior',
    'testimonials.next': 'Siguiente',
    'testimonials.1.quote': 'Le di la idea a Federico y él armó toda la plataforma: la app, el panel, todo. Muy profesional y, sobre todo, muy rápido para responder. Más que satisfecho con el resultado.',
    'testimonials.2.quote': 'Necesitábamos un sistema de gestión completo y no teníamos idea de por dónde empezar. Federico nos guió, nos propuso el camino y lo entregó funcionando de punta a punta.',
    'testimonials.3.quote': 'Nos hizo el sistema de la clínica: turnos, historia clínica, facturación y cobros. Nuestros odontólogos lo usan todos los días sin problemas. Y cuando necesitamos algo, responde.',
    'testimonials.4.quote': 'La tienda online quedó espectacular y vendiendo desde el primer día. Me mostró el diseño antes de programar, ajustamos juntos y el resultado superó lo que tenía en la cabeza.',
    'testimonials.5.quote': 'Federico desarrolló nuestro sistema legal completo y se sigue encargando del mantenimiento. Tener una sola persona que entiende todo el proyecto es una tranquilidad enorme.',
    'testimonials.6.quote': 'Un proyecto muy ambicioso que a otros les parecía imposible. Federico lo resolvió con un nivel técnico increíble y comunicación clara en todo momento. Lo recomiendo sin dudar.',

    // CTA
    'cta.subtitle': '¿TENÉS UNA IDEA?',
    'cta.title': 'EMPECEMOS HOY',
    'cta.button': 'Contarte mi idea',
    'cta.desc': 'Contame tu idea en dos líneas. Te respondo en menos de 24 hs con una propuesta clara: qué, cuánto y cuándo.',

    // Footer
    'footer.portfolio': 'Diseño, desarrollo y mantenimiento de sitios web, apps y sistemas a medida.',
    'footer.available': 'Disponible para nuevos proyectos',
    'footer.backtotop': 'Volver arriba',
    'footer.navigate': 'Navegar',
    'footer.connect': 'Contacto',

    // Contact
    'contact.label': 'CONTACTO',
    'contact.title': 'HABLEMOS',
    'contact.form.title': 'Contame tu idea',
    'contact.form.name': 'Nombre',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'tu@email.com',
    'contact.form.message': 'Tu proyecto',
    'contact.form.message.placeholder': 'Contame qué querés hacer, para quién y cuándo lo necesitás',
    'contact.form.submit': 'Enviar',
    'contact.success.title': '¡Mensaje recibido!',
    'contact.success.desc': 'Gracias por escribirme. Te respondo en menos de 24 horas con los próximos pasos.',
    'contact.success.close': 'Cerrar',
    'contact.hero.line1': 'CONTAME',
    'contact.hero.line2': 'TU IDEA',
    'contact.hero.desc': 'Dos líneas alcanzan. Te respondo en menos de 24 hs con una propuesta clara: qué, cuánto y cuándo.',
    'contact.info.title': 'Información de Contacto',
    'contact.info.location': 'Ubicación',
    'contact.info.available': 'Disponible para nuevos proyectos',
    'contact.info.response': 'Respondo en menos de 24hs',
    'contact.form.subtitle': 'No hace falta que tengas todo definido. Para eso estoy.',
    'contact.form.sending': 'Enviando...',
    'contact.direct.title': 'Directo',
    'contact.wa.cta': 'Escribime por WhatsApp',
    'contact.wa.sub': 'Lo más rápido: te respondo en el día',
    'contact.wa.prefill': '¡Hola Federico! Tengo una idea y quiero contártela.',
    'contact.email.copy': 'Copiar',
    'contact.email.copied': 'Copiado',
    'contact.time': 'Hora local',
    'contact.status': 'Estado',
    'contact.type.label': '¿Qué tenés en mente?',
    'contact.type.web': 'Sitio web',
    'contact.type.app': 'App móvil',
    'contact.type.system': 'Sistema a medida',
    'contact.type.shop': 'Tienda online',
    'contact.type.other': 'Todavía no sé',
    'contact.form.note': 'Sin compromiso. Te respondo con una propuesta clara: qué, cuánto y cuándo.',
    'contact.form.again': 'Enviar otro mensaje',
    'contact.form.error': 'Algo falló al enviar. Probá de nuevo o escribime por WhatsApp.',

    // About page
    'aboutPage.faq.label': 'FAQ',
    'aboutPage.faq.title': 'RESPUESTAS RÁPIDAS',
    'aboutPage.faq.q1': '¿Cómo empiezo?',
    'aboutPage.faq.a1': 'Escribime y contame la idea. Hacemos una llamada gratis de 30 minutos y te mando una propuesta con alcance, precio y tiempos. Sin compromiso.',
    'aboutPage.faq.q2': '¿Cuánto cuesta?',
    'aboutPage.faq.a2': 'Depende del proyecto. Como referencia: una web simple entre USD 100 y 400, una tienda online o web completa entre USD 400 y 900, y una app móvil o un sistema a medida entre USD 900 y 1.500. Siempre con presupuesto cerrado antes de arrancar.',
    'aboutPage.faq.q3': '¿Cuánto tarda?',
    'aboutPage.faq.a3': 'Una web simple, 1–2 semanas. Una tienda online, 2–4. Una app móvil, 4–8. Un sistema a medida, 6–12. Siempre con avances semanales para que veas cómo va.',
    'aboutPage.faq.q4': '¿Y después del lanzamiento?',
    'aboutPage.faq.a4': 'Te entrego todo funcionando y a tu nombre, con una capacitación para que puedas cargar y modificar el contenido vos mismo.',
    'aboutPage.faq.q5': '¿Y si no quiero ocuparme de nada?',
    'aboutPage.faq.a5': 'Para eso está el plan mensual de mantenimiento: hosting, dominio, actualizaciones, backups, seguridad y soporte directo conmigo. Desde USD 30/mes. Vos dormís tranquilo.',
    'aboutPage.faq.q6': '¿Necesito saber de tecnología?',
    'aboutPage.faq.a6': 'No. Ese es mi trabajo. Vos conocés tu negocio; yo traduzco eso en un producto que funciona.',
    'aboutPage.hero.title': 'VOS LA IDEA, YO EL RESTO',
    'aboutPage.hero.subtitle': 'Diseño, desarrollo, publicación y mantenimiento de sitios web, apps y sistemas. Un solo interlocutor, de principio a fin, sin intermediarios.',
    'aboutPage.who.label': 'QUIÉN SOY',
    'aboutPage.who.desc': 'Soy <b>Federico Oviedo</b>. Hace más de 4 años diseño y desarrollo <b>apps móviles</b> y <b>sitios y sistemas web</b> para emprendedores, clínicas, comercios y empresas de Argentina, Chile, Uruguay, México y más.<br/><br/>No necesitás saber de tecnología ni tener todo definido: me contás qué querés lograr y yo me ocupo de diseñar, programar, publicar y mantener tu producto.<br/><br/>Trabajo con comunicación clara, avances semanales y una obsesión por que las cosas queden funcionando.',
    'aboutPage.who.cta': 'Contame tu idea',
    'aboutPage.who.projects': 'Proyectos Entregados',
    'aboutPage.who.clients': 'Clientes Satisfechos',
    'aboutPage.who.experience': 'Años de Experiencia',
    'aboutPage.who.countries': 'Países Alcanzados',
    'aboutPage.tech.label': 'HERRAMIENTAS',
    'aboutPage.tech.title': 'CON QUÉ LO CONSTRUYO',
    'aboutPage.process.label': 'PROCESO',
    'aboutPage.process.title': 'ASÍ DE SIMPLE',
    'aboutPage.process.card1.title': 'ME CONTÁS LA IDEA',
    'aboutPage.process.card1.desc': 'Por WhatsApp, email o una llamada gratis de 30 minutos. No necesitás tenerlo todo definido: para eso estoy.',
    'aboutPage.process.card2.title': 'TE PROPONGO EL CAMINO',
    'aboutPage.process.card2.desc': 'Te devuelvo un plan claro: qué vamos a hacer, cuánto cuesta y cuánto tarda. Sin sorpresas.',
    'aboutPage.process.card3.title': 'DISEÑO, PROGRAMO, PUBLICO',
    'aboutPage.process.card3.desc': 'Ves el diseño antes de programar, avances cada semana, y al final tu producto queda online y funcionando.',
    'aboutPage.process.card4.title': 'ME OCUPO DE QUE SIGA FUNCIONANDO',
    'aboutPage.process.card4.desc': 'Plan mensual de mantenimiento: hosting, actualizaciones, seguridad, soporte. Vos dormís tranquilo.',
    'aboutPage.faq.subtitle': 'Las preguntas que me hacen antes de empezar. Si tenés otra, escribime.',
    'aboutPage.faq.more': 'Hacerme otra pregunta',
    'aboutPage.hero.label': 'Sobre mí',
    'aboutPage.fact.location.k': 'Base',
    'aboutPage.fact.location.v': 'Argentina · remoto',
    'aboutPage.fact.exp.k': 'Experiencia',
    'aboutPage.fact.exp.v': '4+ años · 35+ proyectos',
    'aboutPage.fact.avail.k': 'Disponibilidad',
    'aboutPage.fact.avail.v': 'Abierta',
    'aboutPage.fact.reply.k': 'Respuesta',
    'aboutPage.fact.reply.v': 'Menos de 24 hs',
    'aboutPage.hero.work': 'Ver trabajos',
    'aboutPage.hero.note': 'Respuesta en menos de 24 hs',
    'aboutPage.card.available': 'Disponible',
    'aboutPage.card.role': 'Diseño & desarrollo web y móvil',
    'aboutPage.card.location': 'Argentina · trabajo remoto para todo el mundo',
    'aboutPage.card.years': 'años',
    'aboutPage.card.projects': 'proyectos',
    'aboutPage.card.countries': 'países',
    'aboutPage.who.title': 'Una sola persona, de principio a fin.',
    'aboutPage.who.tag1': 'Comunicación clara',
    'aboutPage.who.tag2': 'Avances semanales',
    'aboutPage.who.tag3': 'Todo queda funcionando',
    'aboutPage.tech.sub': 'Elijo la herramienta según el proyecto, no al revés. Lo que importa es que el resultado sea rápido, estable y fácil de mantener.',
    'aboutPage.process.sub': 'Cuatro pasos, cero vueltas. Vos siempre sabés en qué está tu proyecto.',

    // Work page
    'work.hero.label': 'PORTFOLIO',
    'work.hero.line1': 'IDEAS QUE YA',
    'work.hero.line2': 'SON PRODUCTOS',
    'work.hero.desc': 'Una selección de proyectos reales: webs, apps y sistemas que hoy están funcionando para mis clientes.',
    'work.filter.label': '¿Qué querés ver?',
    'work.filter.all': 'Todos',
    'work.filter.mobile': 'Apps Móviles',
    'work.filter.web': 'Web Apps',
    'work.filter.saas': 'SaaS',
    'work.filter.ecommerce': 'E-commerce',
    'work.filter.dashboards': 'Dashboards',
    'work.filter.billing': 'Facturación',
    'work.filter.gaming': 'Gaming',
    'work.filter.ai': 'IA',
    'work.view': 'Ver Proyecto',
    'home.projects.hint': 'Scrolleá o arrastrá',
    'work.empty': 'No hay proyectos en esta categoría',
    'work.viewAll': 'Ver todos',
    'work.project': 'proyecto',
    'work.projects': 'proyectos',

    // Project detail
    'project.back': 'VOLVER A TRABAJOS',
    'project.about': 'SOBRE EL PROYECTO',
    'project.features': 'FUNCIONALIDADES',
    'project.tech': 'TECNOLOGÍAS',
    'project.integrations': 'INTEGRACIONES',
    'project.highlights': 'ASPECTOS DESTACADOS',
    'project.next': 'SIGUIENTE PROYECTO',
    'project.notFound': 'Proyecto no encontrado',
    'project.backToWork': 'Volver a Trabajos',
  },
}

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType>({
  locale: 'es',
  setLocale: () => {},
  t: (key) => key,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es')

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null
    if (saved && translations[saved] && locales.some((l) => l.code === saved)) {
      setLocale(saved)
    }
  }, [])

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
    document.documentElement.lang = newLocale
  }

  const t = (key: string): string => {
    return translations[locale]?.[key] || translations['es'][key] || key
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale: changeLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  return useContext(I18nContext)
}
