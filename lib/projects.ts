export interface Project {
  id: number
  slug: string
  title: string
  subtitle: string
  categories: string
  description: string
  image: string
  images: string[]
  features: { title: string; items: string[] }[]
  integrations: { service: string; use: string }[]
  tech: { label: string; items: string[] }[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'petnder',
    title: 'Petnder',
    subtitle: 'App para dueños de mascotas, con adopción y servicios cerca',
    categories: 'App Móvil • React Native • Marketplace Pet',
    description:
      'Es una app móvil para gente con mascotas. Desde ahí se buscan servicios pet-friendly por categoría, se adoptan animales con filtros y chat, y se reportan mascotas perdidas con ubicación. Las empresas entran con otro perfil, con su propia navegación, para cargar servicios con mapa y horarios, armar cupones con QR y ver estadísticas. Tiene chat en tiempo real, notificaciones push y comunidades con roles y moderación.',
    image: '/works/pender.webp',
    images: [],
    features: [
      {
        title: 'Para Usuarios',
        items: [
          'Explorar servicios pet-friendly por categorías',
          'Adopción de mascotas con filtros y chat',
          'Reportes de mascotas perdidas con ubicación',
          'Beneficios, cupones y fundaciones',
        ],
      },
      {
        title: 'Para Empresas',
        items: [
          'Gestión de servicios con mapas y horarios',
          'Cupones con QR y estadísticas de uso',
          'Billetera digital con balance e historial',
          'Comunidades con roles y moderación',
        ],
      },
      {
        title: 'General',
        items: [
          'Onboarding animado con Reanimated',
          'Chat en tiempo real',
          'Notificaciones push',
          'Mapas integrados con Google Maps',
        ],
      },
    ],
    integrations: [
      { service: 'Google Maps', use: 'Ubicación de servicios y selector de posición' },
      { service: 'Expo Notifications', use: 'Alertas push sobre adopciones y mensajes' },
      { service: 'QR Code SVG', use: 'Códigos QR para cupones y descuentos' },
      { service: 'React Native Charts', use: 'Estadísticas de negocio y rendimiento' },
    ],
    tech: [
      {
        label: 'App Móvil',
        items: ['React Native', 'Expo SDK 53', 'TypeScript', 'Expo Router', 'Reanimated'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'JWT', 'API REST'],
      },
    ],
    highlights: [
      'Dos perfiles separados, uno para usuarios y otro para empresas',
      'Adopción con filtros y chat entre las partes',
      'Comunidades con roles y moderación de contenido',
      'Billetera digital con balance e historial para empresas',
      'Logros para gamificar el uso',
      'Onboarding animado con Reanimated',
    ],
  },
  {
    id: 2,
    slug: 'controla2',
    title: 'ControlA2',
    subtitle: 'ERP para empresas de construcción e ingeniería en Chile',
    categories: 'SaaS • ERP • Facturación Electrónica',
    description:
      'Es un ERP web pensado para constructoras e ingenierías que quieren tener todo en un mismo lugar. Cubre proyectos con presupuestos y Gantt, RRHH con cálculo de nómina, facturación electrónica, compras, inventario y prevención de riesgos. Está adaptado a la normativa chilena (AFP, ISAPRE, DTE, RUT) y tiene ocho roles con flujos de aprobación.',
    image: '/works/controleAI.webp',
    images: [],
    features: [
      {
        title: 'Proyectos y Planificación',
        items: [
          'Presupuestos y cronogramas Gantt interactivos',
          'Seguimiento de avance y control de desviaciones',
          'Oficina técnica con horas hombre y producción',
        ],
      },
      {
        title: 'RRHH y Nómina',
        items: [
          'Ciclo completo del colaborador',
          'Cálculo automático de nómina (AFP, ISAPRE)',
          'Vacaciones, anticipos y finiquitos',
        ],
      },
      {
        title: 'Facturación y Compras',
        items: [
          'Documentos tributarios electrónicos',
          'Flujo completo de compras y cotizaciones',
          'Control de stock con trazabilidad',
        ],
      },
    ],
    integrations: [
      { service: 'Google Cloud Platform', use: 'Infraestructura y hosting del sistema' },
      { service: 'DTE Chile', use: 'Facturación electrónica con normativa chilena' },
      { service: 'Email SMTP', use: 'Alertas en flujos de aprobación' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['React', 'Material UI'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MySQL', 'Google Cloud Platform'],
      },
    ],
    highlights: [
      'Dashboard con métricas en tiempo real',
      'Genera PDF, Excel y CSV de forma automática',
      '8 roles predefinidos con flujos de aprobación',
      'Adaptado a la normativa chilena (AFP, ISAPRE, DTE, RUT)',
      'Módulo SSOMA para prevención de riesgos',
      'Avisos al instante cuando hay algo para aprobar',
    ],
  },
  {
    id: 3,
    slug: 'saucedo-abogados',
    title: 'Saucedo Abogados',
    subtitle: 'Gestión para un estudio jurídico, con firma electrónica e IA',
    categories: 'Web App • App Móvil • Legal • IA • Firma Electrónica • Laravel',
    description:
      'Sistema de gestión para un estudio de abogados. Cada caso tiene sus partes, documentos, movimientos procesales, notas y tareas, y se puede asignar a uno o más abogados. Los presupuestos pasan por un flujo de aprobación con tres roles y se convierten en caso, y las cobranzas tienen recordatorios de vencimiento. Los PDF se indexan con OCR y resumen automático con OpenAI, los documentos se firman con SignNow y el calendario se sincroniza en ambos sentidos con Google Calendar. El backend es Laravel, con 48 modelos y 88 endpoints, y hay una app móvil que acompaña.',
    image: '/works/saucedo/principal.webp',
    images: [
      '/works/saucedo/1.webp',
      '/works/saucedo/2.webp',
    ],
    features: [
      {
        title: 'Gestión de Casos',
        items: [
          'Casos con 6 pestañas: info, partes, documentos, movimientos, notas, tareas',
          'Estados del caso: nuevo, en proceso, en espera, cerrado, archivado',
          'Asignación a uno o más abogados',
          'Movimientos procesales cronológicos y notas internas',
          'Tareas pendientes con fecha límite y responsable',
        ],
      },
      {
        title: 'Presupuestos y Cobranzas',
        items: [
          'Presupuestos con flujo de aprobación (3 roles)',
          'Estados: borrador, pendiente, aprobado, enviado, aceptado, rechazado',
          'Conversión automática de presupuesto a caso',
          'Seguimiento de pagos parciales y totales',
          'Recordatorios de cobranzas próximas a vencer',
        ],
      },
      {
        title: 'IA y Firma Electrónica',
        items: [
          'OCR de documentos PDF con extracción de datos',
          'Resumen automático con IA (OpenAI)',
          'Búsqueda inteligente en documentos indexados',
          'Firma electrónica con SignNow con seguimiento de estado',
          'Descarga de documentos firmados con validez jurídica',
        ],
      },
      {
        title: 'Calendario y Reportes',
        items: [
          'FullCalendar con sincronización bidireccional a Google Calendar',
          'Eventos: audiencias, reuniones, vencimientos y tareas',
          '6 reportes: casos, facturación, cobranzas, productividad, clientes, presupuestos',
          'Panel Filament con dashboard y auditoría',
        ],
      },
    ],
    integrations: [
      { service: 'SignNow', use: 'Firma electrónica de documentos legales con validez jurídica' },
      { service: 'Google Drive API', use: 'Almacenamiento y sincronización de documentos del caso' },
      { service: 'Google Calendar API', use: 'Sincronización bidireccional de eventos y audiencias' },
      { service: 'OpenAI', use: 'OCR, resumen automático y extracción de datos de documentos' },
      { service: 'FullCalendar', use: 'Calendario visual interactivo con múltiples vistas' },
      { service: 'Filament PHP', use: 'Panel de administración con dashboard y gestión de recursos' },
      { service: 'DomPDF', use: 'Generación de PDFs para presupuestos y reportes' },
      { service: 'Playwright', use: 'Tests end-to-end automatizados' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['React 19', 'Vite', 'TypeScript', 'Zustand', 'React Router 7', 'FullCalendar', 'Tailwind CSS', 'React Hook Form + Zod'],
      },
      {
        label: 'Backend',
        items: ['Laravel 10', 'MySQL', 'Sanctum', 'Filament v3', 'Spatie Permission', 'DomPDF', 'Eloquent ORM', 'Swagger/OpenAPI'],
      },
      {
        label: 'App Móvil',
        items: ['React Native', 'Expo', 'TypeScript'],
      },
      {
        label: 'Testing',
        items: ['Playwright', 'PHPUnit'],
      },
    ],
    highlights: [
      'OCR y resumen automático de documentos con OpenAI',
      'Firma electrónica con SignNow, con validez jurídica',
      'Integración con Google Drive, Calendar y OAuth',
      '48 modelos y 88 endpoints en Laravel',
      'Presupuestos con aprobación en tres roles',
      '6 reportes: casos, facturación, cobranzas, productividad, clientes y presupuestos',
      'Casos organizados en 6 pestañas',
      'Tests end-to-end con Playwright y app móvil complementaria',
    ],
  },
  {
    id: 4,
    slug: 'biznes',
    title: 'Biznes',
    subtitle: 'Tarjetas de presentación digitales, con QR y membresías',
    categories: 'Web App • SaaS • E-commerce • QR • Mercado Pago • Redux',
    description:
      'Es un SaaS para armar tarjetas de presentación digitales y compartirlas por link o QR. El usuario carga foto, logo, bio, redes y botones, cambia colores y tipografías, y ve el resultado en tiempo real en un formato de celular. Cada tarjeta genera su QR y una vCard para guardar el contacto. Las membresías y la tienda se cobran con Mercado Pago, y el panel muestra visitas, clics, descargas y tiempo en pantalla.',
    image: '/works/biznes/principal.webp',
    images: [
      '/works/biznes/1.webp',
      '/works/biznes/2.webp',
      '/works/biznes/3.webp',
      '/works/biznes/4.webp',
      '/works/biznes/5.webp',
      '/works/biznes/6.webp',
      '/works/biznes/7.webp',
      '/works/biznes/8.webp',
      '/works/biznes/9.webp',
      '/works/biznes/10.webp',
    ],
    features: [
      {
        title: 'Editor de Tarjetas',
        items: [
          'Diseño paso a paso: foto, portada, logo, bio, puesto, empresa',
          'Redes sociales con favoritas destacadas (Instagram, LinkedIn, TikTok, etc.)',
          'Personalización visual: colores, tipografías, bordes, alineación, fondos',
          'Vista previa en tiempo real en formato celular',
          'QR automático descargable y vCard para guardar contacto',
        ],
      },
      {
        title: 'Membresías y Tienda',
        items: [
          'Planes con permisos configurables a nivel granular',
          'Pagos y suscripciones con Mercado Pago',
          'Tienda de productos con categorías, variaciones y carrito',
          'Cupones de descuento y descuentos por membresía',
        ],
      },
      {
        title: 'Estadísticas',
        items: [
          'Visitas a la tarjeta con fecha y dispositivo',
          'Clics en redes sociales, email y botones',
          'Descargas de vCard y tiempo de visualización',
          'Contactos recibidos por formulario integrado',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'Gestión de productos, categorías, membresías y pedidos',
          'Blog, FAQs, marcas, Hero Cards y anuncios',
          'Gestión de cupones, tickets y usuarios',
          'Importación masiva desde archivos Excel',
        ],
      },
    ],
    integrations: [
      { service: 'Mercado Pago', use: 'Pagos de membresías, suscripciones y compras en tienda' },
      { service: 'Google Login', use: 'Inicio de sesión rápido con cuenta de Google' },
      { service: 'Nodemailer', use: 'Emails transaccionales (compra, login, membresías)' },
      { service: 'QR Code', use: 'Generación automática de códigos QR por tarjeta' },
      { service: 'vCards.js', use: 'Archivos de contacto (.vcf) descargables' },
      { service: 'Socket.IO', use: 'Comunicación en tiempo real' },
      { service: 'Sharp', use: 'Optimización y conversión de imágenes a WebP' },
      { service: 'Swagger', use: 'Documentación interactiva de la API' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['React 18', 'Redux', 'React Router 6', 'Framer Motion', 'SASS', 'React Slick', 'Font Awesome'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Mercado Pago SDK', 'Socket.IO', 'Sharp', 'Agenda.js', 'Swagger'],
      },
    ],
    highlights: [
      'Suscripciones con permisos configurables por plan',
      'Editor con vista previa en tiempo real en formato celular',
      'Estadísticas de visitas, clics, descargas y tiempo en pantalla',
      'QR y vCard generados para cada tarjeta',
      'Tienda con carrito y checkout con Mercado Pago',
      'Imágenes convertidas a WebP con Sharp',
      'Importación masiva de usuarios y tarjetas desde Excel',
      'Tareas programadas con Agenda.js para vencer membresías',
    ],
  },
  {
    id: 5,
    slug: 'storybox',
    title: 'StoryBox',
    subtitle: 'Editor de historias con bloques de programación visual',
    categories: 'Web App • Educación • Programación Visual • Blockly',
    description:
      'Es una app web para armar historias y presentaciones con escenas. Se ponen fondos, objetos que se arrastran y redimensionan, textos con distintas fuentes y música por escena, y después se programa qué hace cada objeto con bloques visuales de Blockly. Tiene modo presentación a pantalla completa, exportación a PDF, deshacer y rehacer, copiar y pegar, y la interfaz está en español e inglés. Todo se guarda en el servidor con una miniatura automática.',
    image: '/works/storybox/principal.webp',
    images: [
      '/works/storybox/1.webp',
      '/works/storybox/2.webp',
      '/works/storybox/3.webp',
      '/works/storybox/4.webp',
      '/works/storybox/5.webp',
      '/works/storybox/6.webp',
      '/works/storybox/7.webp',
      '/works/storybox/8.webp',
      '/works/storybox/9.webp',
    ],
    features: [
      {
        title: 'Editor de Escenas',
        items: [
          'Escenas ilimitadas con panel lateral de miniaturas',
          'Escena de portada con carrusel de fondos y título automático',
          'Reordenar escenas con drag & drop',
          'Fondos de color (HSL) o imagen de biblioteca/subida propia',
        ],
      },
      {
        title: 'Objetos y Textos',
        items: [
          'Biblioteca de objetos por categorías + subida personalizada',
          'Drag & drop, redimensión (8 puntos), rotación y capas (z-index)',
          '5 fuentes, 6 tamaños, negrita/cursiva/subrayado y color HSL',
          'Modo narración fijo en la parte inferior de la escena',
        ],
      },
      {
        title: 'Programación Visual (Blockly)',
        items: [
          '5 bloques de movimiento: derecha, izquierda, arriba, abajo, seguir',
          '7 bloques de apariencia: aumentar, disminuir, rotar, comentario, sonido, mostrar, ocultar',
          '2 bloques de control: repetir y detener',
          'Ejecución secuencial automática durante la presentación',
        ],
      },
      {
        title: 'Multimedia y Exportación',
        items: [
          'Música de fondo por escena con biblioteca y subida de MP3',
          '8 direcciones de transición con 3 velocidades',
          'Presentación a pantalla completa con navegación',
          'Exportación a PDF (html2canvas + jsPDF) e impresión directa',
        ],
      },
    ],
    integrations: [
      { service: 'Blockly (Google)', use: 'Motor de programación visual por bloques para comportamiento de objetos' },
      { service: 'html2canvas', use: 'Captura de escenas como imagen para PDFs y miniaturas' },
      { service: 'jsPDF', use: 'Generación de documentos PDF exportables' },
      { service: 'react-beautiful-dnd', use: 'Reordenar escenas y bloques con drag & drop' },
      { service: 'react-draggable', use: 'Posicionamiento libre de objetos en la escena' },
      { service: 'react-colorful', use: 'Selector de color HSL para fondos y textos' },
      { service: 'Framer Motion', use: 'Animaciones de paneles e interfaz' },
      { service: 'Notistack', use: 'Notificaciones visuales de acciones' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['React 18', 'Vite', 'React Router', 'Blockly', 'SASS', 'Framer Motion', 'Context API'],
      },
      {
        label: 'Librerías',
        items: ['html2canvas', 'jsPDF', 'react-beautiful-dnd', 'react-draggable', 'react-resizable', 'react-colorful', 'react-slick', 'react-to-print'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'API REST'],
      },
    ],
    highlights: [
      '17 tipos de bloques de movimiento, apariencia y control',
      'Lienzo con drag and drop, 8 puntos de agarre, rotación y capas',
      'Transiciones en 8 direcciones con 3 velocidades',
      'Música de fondo por escena, en bucle',
      'Deshacer y rehacer basado en pilas',
      'Exportación a PDF con html2canvas y jsPDF',
      'Interfaz en español e inglés',
      'Guardado en servidor con miniatura generada automáticamente',
    ],
  },
  {
    id: 6,
    slug: 'mdt-ingenieros',
    title: 'MDT Ingenieros',
    subtitle: 'Control de horas y proyectos para una empresa de topografía',
    categories: 'Web App • RRHH • Facturación • Firmas Digitales',
    description:
      'Sistema web para una empresa de topografía que necesitaba llevar las horas de su gente por proyecto. El colaborador registra su jornada con actividades, firma digital y, si hace falta, pide horas extras que el supervisor aprueba. Del lado administrativo hay calendario por proyecto, reportes de nómina en PDF y facturación mensual con IVA y percepción. Los resúmenes diarios salen por email y todo se maneja en dólares.',
    image: '/works/mdt/principal.webp',
    images: [
      '/works/mdt/1.webp',
      '/works/mdt/2.webp',
      '/works/mdt/3.webp',
    ],
    features: [
      {
        title: 'Para el Colaborador',
        items: [
          'Registro de jornada con actividades, horarios y firmas digitales',
          'Solicitud de horas extras con motivo y aprobación',
          'Historial de entradas y estado de solicitudes',
          'Notificaciones internas de aprobaciones y asignaciones',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'Proyectos con cronograma semanal y tarifas por hora',
          'Calendario visual con estados diarios por proyecto',
          'Aprobación de horas extras con actualización automática',
          'Facturación mensual con IVA (13%) y percepción (1%)',
          'Reportes de nómina y salarios desglosados por proyecto',
          'Rotación de personal y monitoreo de horas no registradas',
        ],
      },
      {
        title: 'Reportes y PDFs',
        items: [
          'Resumen diario en PDF enviado por email al supervisor',
          'Reporte de nómina mensual descargable',
          'Factura mensual por proyecto con desglose de costos',
          'Calendario de horas extras en PDF',
        ],
      },
    ],
    integrations: [
      { service: 'Nodemailer', use: 'Resúmenes diarios, horas extras y facturas por email con PDF adjunto' },
      { service: 'Puppeteer', use: 'PDFs profesionales A4 para resúmenes, nómina y facturas' },
      { service: 'Day.js + date-fns', use: 'Cálculo de horas trabajadas, extras y deducción de almuerzo' },
      { service: 'Multer', use: 'Subida de firmas digitales' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'React Datepicker'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'Puppeteer', 'Nodemailer', 'JWT', 'Day.js'],
      },
    ],
    highlights: [
      'Cálculo de horas extras según día, feriado y descuento de almuerzo',
      'Firma digital del topógrafo y del supervisor en cada parte',
      'Factura mensual por proyecto con IVA del 13% y percepción del 1%',
      'Calendario con estado diario por proyecto',
      'Aviso de horas sin registrar en los últimos 7 días',
      'Rotación de personal entre proyectos con desglose mensual',
    ],
  },
  {
    id: 7,
    slug: 'dental-digital',
    title: 'Dental Digital',
    subtitle: 'Sistema de gestión para clínicas dentales, con factura AFIP',
    categories: 'SaaS • Facturación AFIP • Odontograma • Mercado Pago',
    description:
      'Es un SaaS para odontólogos y clínicas de Argentina. Tiene fichas de pacientes con obra social, turnos en un calendario, odontograma por pieza, presupuestos que se convierten en factura y consentimientos con firma digital. Factura electrónica con ARCA/AFIP (A, B y C, con notas de crédito y débito) y manda el PDF por email o WhatsApp. Las suscripciones se cobran con Mercado Pago y cada clínica puede tener varios profesionales con roles.',
    image: '/works/dentaldigital/principal.webp',
    images: [
      '/works/dentaldigital/1.webp',
      '/works/dentaldigital/2.webp',
      '/works/dentaldigital/3.webp',
      '/works/dentaldigital/4.webp',
      '/works/dentaldigital/5.webp',
      '/works/dentaldigital/6.webp',
      '/works/dentaldigital/7.webp',
    ],
    features: [
      {
        title: 'Gestión Clínica',
        items: [
          'Ficha completa de pacientes con obra social',
          'Calendario interactivo con vistas mensual, semanal y diaria',
          'Odontograma visual con registro por pieza y exportación PDF',
          'Presupuestos detallados convertibles a factura',
          'Documentos de consentimiento con firma digital',
        ],
      },
      {
        title: 'Facturación Electrónica',
        items: [
          'Emisión de Facturas, NC y ND tipo A, B y C con ARCA/AFIP',
          'CAE automático y cálculo de IVA (0%, 10.5%, 21%, 27%)',
          'Generación de certificados RSA y CSR para AFIP',
          'PDF de factura con envío por email y WhatsApp',
        ],
      },
      {
        title: 'SaaS y Administración',
        items: [
          'Suscripciones mensuales/anuales con Mercado Pago',
          'Múltiples clínicas y profesionales con roles',
          'Dashboard con gráficos de Chart.js',
          'Backup completo y restauración inteligente',
        ],
      },
    ],
    integrations: [
      { service: 'ARCA / AFIP', use: 'Facturación electrónica con CAE válido' },
      { service: 'Mercado Pago', use: 'Suscripciones recurrentes con webhooks automáticos' },
      { service: 'Twilio', use: 'Envío de facturas y notificaciones por WhatsApp' },
      { service: 'Nodemailer', use: 'Emails con facturas PDF y verificación de contraseña' },
      { service: 'Chart.js', use: 'Gráficos de tratamientos, presupuestos y turnos' },
      { service: 'React Big Calendar', use: 'Calendario interactivo de turnos' },
      { service: 'html2canvas + jsPDF', use: 'Exportación de odontograma a PDF' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['Next.js 14', 'React 18', 'SASS', 'Chart.js', 'React Big Calendar', 'Framer Motion', 'jsPDF'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'Afip.ts', 'Mercado Pago SDK', 'Argon2', 'Twilio', 'Puppeteer'],
      },
    ],
    highlights: [
      'Factura electrónica con ARCA/AFIP y CAE',
      'Genera los certificados RSA y CSR para vincular con AFIP',
      'Odontograma por pieza con exportación a PDF',
      'Suscripciones con Mercado Pago y webhooks',
      'Varios usuarios por clínica con roles de dueño, profesional y administrador',
      'Backup completo en JSON con restauración',
    ],
  },
  {
    id: 8,
    slug: 'fuku-shop',
    title: 'Fuku Shop',
    subtitle: 'Tienda online de ropa anime y urbana, de Rafaela',
    categories: 'E-commerce • Next.js • Mercado Pago • Cloudinary',
    description:
      'Tienda online para una marca de ropa de Rafaela, Santa Fe, con estilo anime, asiático y de videojuegos. Cada producto tiene variantes por color con sus propias fotos, tabla de talles con medidas reales y zoom en la galería. Se filtra por categoría, tipo, color, talle y precio, se paga con Mercado Pago y el usuario tiene historial, direcciones y reseñas. El panel permite cargar todo el catálogo.',
    image: '/works/fuku/principal.webp',
    images: [
      '/works/fuku/1.webp',
      '/works/fuku/2.webp',
      '/works/fuku/3.webp',
      '/works/fuku/4.webp',
      '/works/fuku/5.webp',
    ],
    features: [
      {
        title: 'Tienda Online',
        items: [
          'Catálogo con filtros combinados (categoría, tipo, color, talle, precio)',
          'Variantes por color con imágenes propias (frente, reverso, cuerpo)',
          'Zoom de imagen al pasar el cursor',
          'Tabla de talles con medidas reales',
          'Carrito de compras y checkout con Mercado Pago',
        ],
      },
      {
        title: 'Cuenta de Usuario',
        items: [
          'Registro y login con email o Google',
          'Historial de compras',
          'Múltiples direcciones de envío',
          'Reseñas y calificaciones de productos',
          'Notificaciones internas',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'CRUD de productos con variantes de color e imágenes',
          'Gestión de colores con código hexadecimal',
          'Categorías, subcategorías, tipos y subtipos de prenda',
          'Talles con medidas configurables',
        ],
      },
    ],
    integrations: [
      { service: 'Mercado Pago', use: 'Procesamiento de pagos para compras' },
      { service: 'Cloudinary', use: 'Almacenamiento y optimización de imágenes en la nube' },
      { service: 'Socket.IO', use: 'Comunicación en tiempo real' },
      { service: 'Nodemailer', use: 'Mensajes de contacto por email' },
      { service: 'Redux', use: 'Estado global (carrito, autenticación, filtros)' },
      { service: 'React Query', use: 'Caché inteligente de datos del servidor' },
      { service: 'Sitemap Generator', use: 'Generación automática de sitemap XML para SEO' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['Next.js 13 (SSG)', 'React 18', 'Redux', 'React Query', 'SASS', 'Sharp'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'Mercado Pago SDK', 'Cloudinary', 'Socket.IO', 'JWT'],
      },
    ],
    highlights: [
      'Variantes por color con fotos independientes',
      'Filtros combinados por categoría, tipo, color, talle y precio',
      'Generación estática con revalidación incremental para SEO',
      'Sitemap XML generado automáticamente',
      'Imágenes en Cloudinary',
      'Categorías con subcategorías, tipos y subtipos',
    ],
  },
  {
    id: 9,
    slug: 'cap-medical',
    title: 'CAP Medical',
    subtitle: 'App móvil para gestionar servicios médicos y cirugías',
    categories: 'App Móvil • React Native • Multi-Módulo',
    description:
      'App móvil para una empresa que administra servicios quirúrgicos. Desde el celular se crean servicios en tres pasos, se les sigue el estado, se registran movimientos con ubicación GPS y adjuntos, y se cargan pagos y contra recibos. También tiene directorio de técnicos, hospitales y centros médicos, expedientes de pacientes y notificaciones. Los permisos dependen del rol de cada usuario.',
    image: '/works/cap.webp',
    images: [],
    features: [
      {
        title: 'Gestión de Servicios',
        items: [
          'Listado con filtro por estado y búsqueda',
          'Creación en 3 pasos con catálogos dinámicos',
          'Movimientos con geolocalización GPS y adjuntos',
          'Pagos, contra recibos e historial de cambios',
        ],
      },
      {
        title: 'Directorio de Técnicos',
        items: [
          'Directorio buscable con agrupación alfabética',
          'Filtro por rol (auxiliar, titular)',
          'Perfil detallado con datos laborales',
        ],
      },
      {
        title: 'Gestión de Ubicaciones',
        items: [
          'Hospitales y centros médicos con búsqueda',
          'Detalle completo con dirección y contacto',
          'Filtro por estado activo/inactivo',
        ],
      },
    ],
    integrations: [
      { service: 'Google Maps', use: 'Mapas interactivos para ubicaciones de hospitales y servicios' },
      { service: 'Expo Location', use: 'Coordenadas GPS al registrar movimientos' },
      { service: 'Expo Camera', use: 'Captura de fotos y video para adjuntar a expedientes' },
      { service: 'QR Code SVG', use: 'Generación de códigos QR' },
      { service: 'React Native Charts', use: 'Gráficos y visualización de datos' },
    ],
    tech: [
      {
        label: 'App Móvil',
        items: ['React Native 0.81', 'Expo ~54', 'TypeScript', 'Expo Router', 'React Navigation'],
      },
      {
        label: 'Backend',
        items: ['API REST', 'Bearer Token Auth', 'Permisos por rol'],
      },
    ],
    highlights: [
      'Permisos por rol',
      'Alta de servicios en 3 pasos con catálogos dinámicos',
      '10 pantallas por cada servicio',
      'Movimientos con ubicación GPS automática',
      'Historial de todos los cambios',
      'Toda la app en TypeScript',
    ],
  },
  {
    id: 10,
    slug: 'blackphone',
    title: 'BlackPhone',
    subtitle: 'Web para un servicio técnico de celulares en España',
    categories: 'Web App • E-commerce • WhatsApp Bot • Panel Admin',
    description:
      'Sitio y sistema de gestión para un taller de reparación de celulares en España. El cliente elige modelo y averías, ve el precio al instante y después sigue su reparación con un código de 5 dígitos. Cada cambio de estado le llega por email y WhatsApp. Hay un flujo aparte para mayoristas, con aprobación y pedidos en volumen, y un panel para manejar precios, modelos, averías, estados y el blog.',
    image: '/works/blackphone/principal.webp',
    images: [
      '/works/blackphone/1.webp',
      '/works/blackphone/2.webp',
      '/works/blackphone/3.webp',
      '/works/blackphone/4.webp',
      '/works/blackphone/5.webp',
      '/works/blackphone/6.webp',
    ],
    features: [
      {
        title: 'Para el Cliente',
        items: [
          'Cotizador automático de reparaciones por modelo y avería',
          'Selección múltiple de averías con precio en tiempo real',
          'Seguimiento de reparación con código de 5 dígitos',
          'Notificaciones automáticas por email y WhatsApp',
        ],
      },
      {
        title: 'Sistema de Mayoristas',
        items: [
          'Registro y aprobación de empresas mayoristas',
          'Solicitudes de reparación en volumen',
          'Seguimiento independiente con código propio',
          'Precios diferenciados por zona',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'Tabla de precios dinámica con drag & drop',
          'Gestión de categorías, marcas, modelos y averías',
          'Estados de reparación personalizados con notificaciones',
          'Blog con editor enriquecido y contenido editable',
          'Exportación a PDF de tablas de precios',
        ],
      },
    ],
    integrations: [
      { service: 'WhatsApp Web.js', use: 'Mensajes automáticos al crear pedido o cambiar estado' },
      { service: 'Nodemailer', use: 'Emails con plantillas HTML al cliente y admin' },
      { service: 'PDFMake', use: 'PDFs descargables con tablas de precios' },
      { service: 'Google Reviews', use: 'Reseñas reales de clientes en la home' },
      { service: 'DND Kit', use: 'Drag & drop para reordenar modelos' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['Next.js 14 (App Router)', 'React 18', 'SASS', 'Material UI', 'Framer Motion', 'DND Kit'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'JWT', 'WhatsApp Web.js', 'Nodemailer', 'Multer', 'PDFMake'],
      },
    ],
    highlights: [
      'Cotizador por modelo, avería y zona',
      'Avisos por email y WhatsApp en cada cambio de estado',
      'Bot de WhatsApp propio, sin servicios pagos',
      'Mayoristas con su propio flujo de pedidos',
      'Tabla de precios editable y exportable a PDF',
      'Provincias y poblaciones reales de España',
    ],
  },
  {
    id: 11,
    slug: 'citamovil',
    title: 'CitaMóvil',
    subtitle: 'Web para un servicio técnico de celulares y tablets en España',
    categories: 'Web App • Servicio Técnico • WhatsApp Bot • Next.js 14 • Mayoristas',
    description:
      'Sitio para un servicio técnico que arregla celulares, tablets y otros dispositivos en España. El cliente cotiza eligiendo categoría, marca, modelo y averías, y el precio cambia según la zona. Después sigue la reparación con un código de 5 dígitos y recibe cada cambio por email y WhatsApp. Los mayoristas se registran, el administrador los aprueba y hacen pedidos en volumen con dirección de recogida. El contenido de la web se edita desde el panel sin tocar código.',
    image: '/works/citamovil/principal.webp',
    images: [
      '/works/citamovil/1.webp',
      '/works/citamovil/2.webp',
      '/works/citamovil/3.webp',
      '/works/citamovil/4.webp',
      '/works/citamovil/5.webp',
    ],
    features: [
      {
        title: 'Para el Cliente',
        items: [
          'Cotizador automático por categoría, marca, modelo y averías',
          'Selección múltiple de averías con precio en tiempo real',
          'Seguimiento de reparación con código de 5 dígitos',
          'Notificaciones por email y WhatsApp en cada cambio de estado',
          'Datos reales de provincias y poblaciones de España',
        ],
      },
      {
        title: 'Sistema de Mayoristas',
        items: [
          'Registro con aprobación manual del administrador',
          'Pedidos de reparación en volumen con dirección de recogida',
          'Seguimiento independiente con código y estados propios',
          'Notificaciones por email al mayorista y al admin',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'Tabla de precios por modelo, avería y zona (local/fuera/mayorista)',
          'Gestión de categorías, marcas, modelos y averías',
          'Órdenes con cambio de estado y notificación automática',
          'Blog con editor enriquecido, tags y artículos relacionados',
          'Contenido 100% editable sin tocar código',
          'Exportación de tabla de precios a PDF',
        ],
      },
    ],
    integrations: [
      { service: 'WhatsApp Web.js', use: 'Mensajes automáticos al crear pedidos o cambiar estado (conexión QR)' },
      { service: 'Nodemailer', use: 'Emails con plantillas HTML para pedidos, estados y mayoristas' },
      { service: 'PDFMake', use: 'Generación de PDFs con tabla de precios' },
      { service: 'Google Reviews', use: 'Reseñas de Google en la página de inicio' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['Next.js 14', 'React 18', 'SASS', 'Material UI', 'Framer Motion', 'DND Kit', 'React Quill', 'React Select'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'JWT', 'WhatsApp Web.js', 'Nodemailer', 'PDFMake', 'Multer'],
      },
    ],
    highlights: [
      'Precios por modelo, avería y zona',
      'Bot de WhatsApp con whatsapp-web.js, sin servicios pagos',
      'Avisos automáticos por email y WhatsApp',
      'Mayoristas con registro, aprobación y seguimiento propio',
      'Tabla de precios con drag and drop y exportación a PDF',
      'Todo el contenido editable desde el panel',
    ],
  },
  {
    id: 12,
    slug: 'casepe',
    title: 'CASEPE',
    subtitle: 'Sitio institucional de una cámara petrolera, editable en vivo',
    categories: 'Web Institucional • CMS en Vivo • Blog • Next.js 14',
    description:
      'Sitio web para CASEPE, la cámara que agrupa a empresas de operaciones petroleras especiales en Argentina. Lo particular es que no hay un panel aparte para el contenido. Cuando el administrador está logueado, hace clic sobre cualquier texto o imagen de la página y lo cambia ahí mismo, y también puede agregar o quitar ítems en cada sección. Tiene blog de noticias con artículos relacionados y formulario de contacto que llega por email.',
    image: '/works/casepe/principal.webp',
    images: [
      '/works/casepe/1.webp',
      '/works/casepe/2.webp',
      '/works/casepe/3.webp',
      '/works/casepe/4.webp',
      '/works/casepe/5.webp',
      '/works/casepe/6.webp',
      '/works/casepe/7.webp',
      '/works/casepe/8.webp',
      '/works/casepe/9.webp',
      '/works/casepe/10.webp',
    ],
    features: [
      {
        title: 'Para el Visitante',
        items: [
          'Hero con imagen de fondo y sección institucional con galería',
          'Servicios interactivos con navegación por ítems',
          'Historia, visión, compromiso ambiental y localidades',
          'Blog de noticias con artículos relacionados',
          'Formulario de contacto con envío automático de email',
        ],
      },
      {
        title: 'Edición en Vivo',
        items: [
          'Textos editables haciendo clic directamente en la página',
          'Imágenes reemplazables sin salir de la página',
          'Agregar y eliminar ítems en cualquier sección',
          'Editor de texto enriquecido integrado',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'Gestión del blog con editor enriquecido',
          'Tags y artículos relacionados',
          'Inicio de sesión seguro',
        ],
      },
    ],
    integrations: [
      { service: 'Nodemailer', use: 'Mensajes de contacto con plantilla HTML profesional' },
      { service: 'AOS', use: 'Animaciones de aparición al hacer scroll' },
      { service: 'React Scroll', use: 'Navegación suave hacia secciones' },
      { service: 'React Quill', use: 'Editor de texto enriquecido para contenido en línea' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['Next.js 14', 'React 18', 'SASS', 'React Quill', 'AOS', 'React Select'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt', 'Multer', 'Nodemailer', 'Lodash'],
      },
    ],
    highlights: [
      'Edición en vivo, sin panel separado',
      'Propiedades anidadas actualizables con Lodash',
      'Secciones donde se agregan y quitan ítems desde la web',
      'Blog con etiquetas y artículos relacionados',
      'Emails de contacto con plantilla HTML',
      'Animaciones al hacer scroll en todas las secciones',
    ],
  },
  {
    id: 13,
    slug: 'biznes-empresa',
    title: 'Biznes Empresa',
    subtitle: 'Tarjetas digitales para todos los empleados de una empresa',
    categories: 'Web App • SaaS • Tarjetas Digitales • Roles',
    description:
      'Versión corporativa de Biznes. Una empresa se registra con su logo y branding, invita a sus empleados por email o con un Excel, y les arma tarjetas digitales a partir de plantillas con la identidad de la marca. Cada tarjeta tiene su QR, vCard y link propio. Los roles definen quién puede editar qué, y las estadísticas de visitas, clics y descargas se ven todas juntas en gráficos.',
    image: '/works/biznesempresa.webp',
    images: [],
    features: [
      {
        title: 'Gestión Corporativa',
        items: [
          'Registro y perfil de empresa con logo y branding',
          'Invitación de empleados por email o Excel masivo',
          'Roles personalizados con permisos granulares',
          'Membresías empresariales con límites configurables',
        ],
      },
      {
        title: 'Tarjetas Digitales',
        items: [
          'Plantillas corporativas con diseño de marca',
          'Editor visual completo con vista previa en tiempo real',
          'Código QR automático y vCard descargable',
          'Link personalizado para cada tarjeta',
        ],
      },
      {
        title: 'Estadísticas',
        items: [
          'Visitas por tarjeta con desglose por dispositivo',
          'Clics en redes sociales y email',
          'Descargas de vCard y contactos agregados',
          'Gráficos interactivos (barras, líneas, tortas)',
        ],
      },
    ],
    integrations: [
      { service: 'Nodemailer', use: 'Invitaciones por email y notificaciones' },
      { service: 'QR Code', use: 'Generación automática de códigos QR' },
      { service: 'vCards.js', use: 'Archivos de contacto descargables' },
      { service: 'Socket.IO', use: 'Comunicación en tiempo real' },
      { service: 'Chart.js', use: 'Gráficos interactivos para estadísticas' },
      { service: 'Sharp', use: 'Optimización de imágenes a WebP' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['React 18', 'Redux', 'Material UI', 'Chart.js', 'Framer Motion', 'SASS'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.IO', 'Agenda.js', 'Multer + Sharp'],
      },
    ],
    highlights: [
      'Toda la gestión corporativa desde un solo panel',
      'Plantillas con la marca que se aplican solas',
      'Roles y permisos por empleado',
      'Alta masiva de empleados desde Excel',
      'Estadísticas de todas las tarjetas en gráficos',
      'Actualizaciones en tiempo real con WebSockets',
    ],
  },
  {
    id: 14,
    slug: 'limcal',
    title: 'LIMCAL',
    subtitle: 'Tienda online mayorista de productos de limpieza',
    categories: 'E-commerce • Mercado Pago • Revendedores • CMS',
    description:
      'Tienda online para LIMCAL, una empresa argentina de productos de limpieza que vende a comercios. Las cuentas se registran con CUIT y las aprueba alguien del equipo antes de poder comprar. Cada producto tiene una compra mínima, el pago va por Mercado Pago y el pedido se registra solo con el webhook. Hay un mapa de revendedores con Google Maps filtrable por provincia y ciudad, y el contenido del sitio se edita desde el panel.',
    image: '/works/limcal/principal.webp',
    images: [
      '/works/limcal/1.webp',
      '/works/limcal/2.webp',
      '/works/limcal/3.webp',
      '/works/limcal/4.webp',
    ],
    features: [
      {
        title: 'Tienda Online',
        items: [
          'Catálogo paginado con filtros por categoría y búsqueda',
          'Compra mínima configurable por producto',
          'Carrito con múltiples direcciones de envío',
          'Pago con Mercado Pago y registro automático vía webhook',
          'Seguimiento de pedidos con notificación por email',
        ],
      },
      {
        title: 'Revendedores',
        items: [
          'Mapa de revendedores con Google Maps embebido',
          'Filtro por provincia, ciudad y nombre',
          'Página informativa para nuevos revendedores',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'Gestión de productos, categorías y pedidos',
          'Aprobación manual de cuentas de usuarios',
          'Mensajes de contacto con respuesta directa por email',
          'Contenido editable con Lodash para propiedades anidadas',
          'Moderadores con permisos diferenciados',
        ],
      },
    ],
    integrations: [
      { service: 'Mercado Pago', use: 'Pagos del carrito con webhooks automáticos (ARS)' },
      { service: 'Nodemailer', use: 'Contacto, respuestas al cliente y notificaciones de pedidos' },
      { service: 'Google Maps', use: 'Mapa embebido en cada revendedor' },
      { service: 'Google Analytics', use: 'Seguimiento de visitas y comportamiento' },
      { service: 'React Quill', use: 'Editor enriquecido para políticas y secciones' },
      { service: 'AOS', use: 'Animaciones de aparición al hacer scroll' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['Next.js 13', 'React 18', 'Redux', 'SASS', 'React Quill', 'AOS'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'Mercado Pago SDK', 'Nodemailer', 'JWT', 'Lodash'],
      },
    ],
    highlights: [
      'Cuentas aprobadas a mano antes de poder comprar',
      'Compra mínima por producto, pensada para venta mayorista',
      'Mapa de revendedores con Google Maps, filtrable por zona',
      'Respuesta a los mensajes de contacto desde el panel',
      'Contenido editable con propiedades anidadas',
      'Pedidos registrados automáticamente con webhooks de Mercado Pago',
    ],
  },
  {
    id: 15,
    slug: 'limcal-pos',
    title: 'LIMCAL POS',
    subtitle: 'Sistema de escritorio de ventas y facturación, con Electron',
    categories: 'Desktop App • Electron • Facturación AFIP • IndexedDB',
    description:
      'Programa de escritorio para la gestión comercial de LIMCAL, que reemplazó un sistema viejo en FoxPro. Maneja productos, ventas, compras, stock, materias primas y revendedores con comisión o descuento. Emite factura A y B con ARCA/AFIP, notas de crédito, remitos en PDF y libro IVA. La base de datos es local con IndexedDB, así que funciona sin servidor ni conexión.',
    image: '/works/limcalpos/principal.webp',
    images: [
      '/works/limcalpos/1.webp',
      '/works/limcalpos/2.webp',
      '/works/limcalpos/3.webp',
      '/works/limcalpos/4.webp',
      '/works/limcalpos/5.webp',
    ],
    features: [
      {
        title: 'Ventas y Facturación',
        items: [
          'Facturación electrónica Factura A y B con ARCA/AFIP',
          'Notas de Crédito tipo A y B asociadas a facturas',
          'Generación de remitos descargables en PDF',
          'Libro IVA de ventas y compras',
          'Descuentos automáticos por revendedor y por cliente',
        ],
      },
      {
        title: 'Gestión Comercial',
        items: [
          'Importación masiva de productos desde Excel',
          'Cambio masivo de precios',
          'Control de stock y materias primas',
          'Revendedores con descuento o comisión configurable',
          'Estadísticas por día, cliente, producto y cruce',
        ],
      },
      {
        title: 'Sistema',
        items: [
          'Base de datos local con IndexedDB (sin servidor)',
          'Usuarios con roles y permisos configurables',
          'Backup completo en JSON y restauración',
          'Migración desde FoxPro (Husky POS)',
        ],
      },
    ],
    integrations: [
      { service: 'ARCA / AFIP', use: 'Facturación electrónica con CAE (Factura A/B, NC A/B)' },
      { service: 'IndexedDB', use: 'Base de datos local sin servidor externo' },
      { service: 'ExcelJS + XLSX', use: 'Importación y exportación de productos y datos' },
      { service: 'PDF Puppeteer + PDFMake', use: 'Facturas, notas de crédito y remitos en PDF' },
      { service: 'File Saver', use: 'Descarga de backups, PDFs y archivos Excel' },
    ],
    tech: [
      {
        label: 'Aplicación',
        items: ['Electron', 'HTML', 'CSS', 'JavaScript', 'IndexedDB'],
      },
      {
        label: 'Integraciones',
        items: ['AFIP SDK', 'Puppeteer', 'PDFMake', 'ExcelJS', 'Bcrypt'],
      },
    ],
    highlights: [
      'App de escritorio con Electron, funciona sin conexión',
      'Base de datos local con IndexedDB',
      'Factura A y B y notas de crédito con AFIP',
      'Descuento o comisión por revendedor aplicados al facturar',
      'Importación de productos y cambio de precios masivo desde Excel',
      'Migración de datos desde FoxPro (Husky POS)',
    ],
  },
  {
    id: 16,
    slug: 'sunchales-pos',
    title: 'Sunchales POS',
    subtitle: 'Gestión comercial y punto de venta con factura AFIP',
    categories: 'SaaS • POS • Facturación AFIP • Código de Barras',
    description:
      'Sistema web de gestión comercial para negocios de Argentina. Se cargan productos con código de barras, se registran ventas y compras, y se lleva el stock y las materias primas. Emite factura electrónica con ARCA/AFIP, convierte presupuestos en ventas y maneja garantías y devoluciones. El acceso se cobra por suscripción con Mercado Pago.',
    image: '/works/dentalpos/principal.webp',
    images: [
      '/works/dentalpos/1.webp',
      '/works/dentalpos/2.webp',
      '/works/dentalpos/3.webp',
      '/works/dentalpos/4.webp',
      '/works/dentalpos/5.webp',
      '/works/dentalpos/6.webp',
      '/works/dentalpos/7.webp',
    ],
    features: [
      {
        title: 'Ventas y Facturación',
        items: [
          'Registro de ventas con cálculo automático de IVA',
          'Venta rápida sin cliente registrado',
          'Facturación electrónica con ARCA/AFIP y CAE',
          'Conversión de presupuesto a venta directamente',
          'PDF de factura con envío por email',
        ],
      },
      {
        title: 'Productos y Stock',
        items: [
          'Catálogo con código de barras por producto',
          'Control de stock actualizado en tiempo real',
          'Materias primas con inventario independiente',
          'Productos físicos y servicios diferenciados',
        ],
      },
      {
        title: 'Gestión Comercial',
        items: [
          'Fichas completas de clientes y proveedores',
          'Presupuestos con estados y validez configurable',
          'Sistema de garantías y devoluciones (RMA)',
          'Dashboard con gráficos de ventas y compras',
        ],
      },
    ],
    integrations: [
      { service: 'ARCA / AFIP', use: 'Facturación electrónica con CAE válido' },
      { service: 'Mercado Pago', use: 'Suscripciones recurrentes para acceso al sistema' },
      { service: 'Nodemailer', use: 'Emails con facturas PDF y notificaciones de envío' },
      { service: 'Chart.js', use: 'Gráficos de ventas, compras y reportes' },
      { service: 'React Barcode', use: 'Generación y visualización de códigos de barras' },
      { service: 'React to Print', use: 'Impresión directa de facturas y etiquetas' },
      { service: 'Puppeteer', use: 'Generación de PDFs de facturas y presupuestos' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['Next.js 14', 'React 18', 'SASS', 'Chart.js', 'React Barcode', 'Framer Motion'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'Afip.ts', 'Mercado Pago SDK', 'Bcrypt', 'Puppeteer'],
      },
    ],
    highlights: [
      'Compras, stock, ventas, facturación y reportes en un solo lugar',
      'Factura electrónica con ARCA/AFIP y CAE',
      'Códigos de barras generados y leídos desde el sistema',
      'Garantías y devoluciones (RMA) con seguimiento',
      'Presupuestos que se convierten en ventas',
      'SMTP configurable por usuario para mandar facturas',
    ],
  },
  {
    id: 17,
    slug: 'padel',
    title: 'PADEL',
    subtitle: 'Torneos, resultados y ranking de pádel',
    categories: 'Web App • Deportes • Ranking • Next.js 15',
    description:
      'Sitio para organizar y seguir torneos de pádel. El público ve el calendario de torneos, el circuito por categoría, los resultados partido por partido con sets y el ranking por género y categoría. También puede buscar a un jugador y ver su posición. Un moderador carga los partidos y resultados, y el administrador maneja torneos, jugadores, clubes y categorías.',
    image: '/works/padel/principal.webp',
    images: [
      '/works/padel/1.webp',
      '/works/padel/2.webp',
      '/works/padel/3.webp',
      '/works/padel/4.webp',
    ],
    features: [
      {
        title: 'Para el Público',
        items: [
          'Calendario de torneos con ubicación y contacto',
          'Circuito organizado por categoría con todas las fechas',
          'Resultados de torneos con partidos y sets',
          'Ranking de jugadores por categoría y género',
          'Búsqueda de jugador con posición y top 5',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'Gestión de torneos con fecha, género y categoría',
          'Gestión de jugadores con club, categoría y puntos',
          'Gestión de categorías y clubes',
          'Administración de usuarios con roles',
        ],
      },
      {
        title: 'Panel de Moderador',
        items: [
          'Carga de partidos con equipos y resultados por sets',
          'Edición de partidos existentes',
          'Creación de jugadores y torneos',
        ],
      },
    ],
    integrations: [],
    tech: [
      {
        label: 'Frontend',
        items: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Axios'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt'],
      },
    ],
    highlights: [
      'Circuito armado automáticamente por categoría',
      'Ranking por categoría y género que se actualiza solo',
      'Partidos individuales y por equipos con resultado por sets',
      'El estado del torneo cambia según los partidos cargados',
      'Tres niveles de acceso: público, moderador y administrador',
      'Categorías con borrado lógico para poder restaurarlas',
    ],
  },
  {
    id: 18,
    slug: 'alhambra',
    title: 'Alhambra Guide',
    subtitle: 'Web para guías turísticos de la Alhambra, en 7 idiomas',
    categories: 'Web App • Turismo • Panel Admin • Multilingüe',
    description:
      'Sitio para una empresa de guías turísticos de Granada, España, que hace visitas a la Alhambra. Cada circuito tiene su página, las reservas llegan por email desde un formulario y hay contacto directo por WhatsApp. Se traduce automáticamente a 7 idiomas. El dueño gestiona circuitos y blog desde el panel, y edita los textos haciendo clic sobre ellos en la misma página.',
    image: '/works/alhambra.webp',
    images: [],
    features: [
      {
        title: 'Para el Visitante',
        items: [
          'Exploración de circuitos turísticos con páginas dedicadas',
          'Sistema de reservas integrado con formulario completo',
          'Blog de noticias con contenido enriquecido',
          'Traducción automática a 7 idiomas',
          'Contacto directo por WhatsApp',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'Gestión de circuitos con editor enriquecido',
          'Gestión del blog con imágenes y formato avanzado',
          'Edición de textos en vivo haciendo clic sobre ellos',
          'Sistema de acceso seguro',
        ],
      },
    ],
    integrations: [
      { service: 'WhatsApp Business', use: 'Contacto directo con un clic' },
      { service: 'FormSubmit', use: 'Recepción de reservas por correo electrónico' },
      { service: 'Google Translate', use: 'Traducción automática a múltiples idiomas' },
      { service: 'TripAdvisor', use: 'Enlace y banner hacia el perfil de la empresa' },
      { service: 'Instagram', use: 'Integración con el perfil del guía' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['Next.js 13', 'React 18', 'Redux', 'SASS', 'React Quill'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt', 'Multer', 'Nodemailer'],
      },
    ],
    highlights: [
      'Todo el contenido se administra sin ayuda técnica',
      'Textos editables haciendo clic en la página',
      'Renderizado en servidor para SEO',
      '7 idiomas para turismo internacional',
      'Reservas por email y contacto por WhatsApp',
      'JWT, contraseñas encriptadas y roles',
    ],
  },
  {
    id: 19,
    slug: 'konecta',
    title: 'Konecta',
    subtitle: 'App de asistencia de empleados por QR o GPS',
    categories: 'App Móvil • RRHH • QR • Geolocalización • Google Maps',
    description:
      'App móvil para que los empleados marquen entrada y salida escaneando un QR o con la ubicación GPS. Cada registro queda en un historial con búsqueda y se ve en un mapa de Google Maps. También se piden permisos e incidencias con adjuntos, que el supervisor aprueba o rechaza desde su panel. Un mismo usuario puede pertenecer a varias empresas y la navegación cambia según el rol.',
    image: '/works/konecta/principal.webp',
    images: [],
    features: [
      {
        title: 'Para el Empleado',
        items: [
          'Registro de asistencia por QR o geolocalización GPS',
          'Estado en tiempo real (pendiente, entrada, salida)',
          'Historial de asistencia paginado con búsqueda y filtros',
          'Vista de mapa con marcadores de ubicación de registros',
          'Solicitud de permisos con motivo, fechas y adjuntos',
          'Selfie para foto de perfil con cámara frontal',
        ],
      },
      {
        title: 'Para el Supervisor',
        items: [
          'Panel de operaciones con gestión de permisos',
          'Aprobación o rechazo de solicitudes de empleados',
          'Configuración avanzada de asociación empleado/empresa',
        ],
      },
      {
        title: 'Autenticación y Seguridad',
        items: [
          'Login con documento y código de verificación por empresa',
          'Soporte para múltiples empresas por usuario',
          'Tokens de sesión con detección de expiración',
          'Recuperación de contraseña por email',
        ],
      },
    ],
    integrations: [
      { service: 'Google Maps', use: 'Mapa interactivo con ubicaciones de registros de asistencia' },
      { service: 'Expo Camera', use: 'Captura de selfies para foto de perfil' },
      { service: 'Expo Barcode Scanner', use: 'Escaneo de códigos QR para registro de asistencia' },
      { service: 'Expo Location', use: 'Geolocalización GPS para registro de asistencia' },
      { service: 'Expo Document Picker', use: 'Adjuntar documentación a solicitudes de permisos' },
      { service: 'QR Code SVG', use: 'Generación de QR de confirmación tras el registro' },
    ],
    tech: [
      {
        label: 'App Móvil',
        items: ['React Native 0.72', 'Expo ~49', 'React 18', 'React Router Native', 'React Native Paper'],
      },
      {
        label: 'Servicios del Dispositivo',
        items: ['Expo Camera', 'Expo Barcode Scanner', 'Expo Location', 'Expo Document Picker', 'AsyncStorage'],
      },
      {
        label: 'Backend',
        items: ['API REST externa (ProjectBMS)', 'Axios', 'JWT'],
      },
    ],
    highlights: [
      'Registro por QR o por ubicación GPS',
      'Mapa de Google Maps con el historial de ubicaciones',
      'Varias empresas por usuario, con selección por sesión',
      'Navegación distinta para empleado y supervisor',
      'Permisos e incidencias con adjuntos y aprobación',
      'Selfie de perfil con la cámara frontal, guardada en Base64',
    ],
  },
  {
    id: 20,
    slug: 'grupo-sdg',
    title: 'Grupo SDG',
    subtitle: 'ERP para México con facturación CFDI 4.0',
    categories: 'Web App • ERP • Facturación CFDI • Laravel 12 • SAT',
    description:
      'Sistema de gestión para una empresa mexicana, con facturación electrónica CFDI 4.0. El flujo de ventas va de cotización a pedido, factura, pago y cobranza, arrastrando los datos de una etapa a la siguiente. Los comprobantes se firman con certificados CSD, se timbran con un PAC y el RFC se valida contra la lista negra del SAT. Tiene módulo de tesorería con conciliación bancaria, políticas de contraseña con expiración y cuatro tablas de auditoría. El backend es Laravel 12, con más de 40 modelos y 80 endpoints documentados en Swagger.',
    image: '/works/sdg/principal.webp',
    images: [
      '/works/sdg/1.webp',
      '/works/sdg/2.webp',
    ],
    features: [
      {
        title: 'Pipeline de Ventas',
        items: [
          'Flujo completo: cotización → pedido → factura → pago → cobranza',
          'Conversión automática entre etapas con arrastre de datos',
          'Complementos de pago según normativa SAT',
          'Seguimiento de cuentas por cobrar con vencimientos',
        ],
      },
      {
        title: 'Facturación CFDI 4.0',
        items: [
          'Comprobantes fiscales digitales según normativa SAT',
          'Firma digital con Certificado de Sello Digital (CSD)',
          'Timbrado fiscal con PAC (Proveedor Autorizado)',
          'Validación de RFC contra lista negra del SAT',
          'Generación de XML fiscal y representación impresa en PDF',
          'Cancelación de CFDI con motivo según normativa',
        ],
      },
      {
        title: 'Tesorería y Seguridad',
        items: [
          'Cuentas bancarias, movimientos y conciliación',
          'Flujo de caja con proyección de ingresos y egresos',
          'Políticas de contraseña con expiración y bloqueo',
          '4 tablas de auditoría: accesos, datos, fiscal, admin',
        ],
      },
      {
        title: 'Administración',
        items: [
          'Dashboard con métricas de ventas y facturación',
          'Catálogos oficiales del SAT integrados',
          'Impuestos configurables: IVA, ISR, IEPS',
          'Gestión de usuarios con roles y permisos',
        ],
      },
    ],
    integrations: [
      { service: 'PAC', use: 'Timbrado fiscal de comprobantes CFDI 4.0' },
      { service: 'SAT', use: 'Catálogos oficiales y validación de RFC contra lista negra' },
      { service: 'Certificados CSD', use: 'Firma digital de comprobantes fiscales' },
      { service: 'DomPDF', use: 'Representaciones impresas de CFDI en PDF' },
      { service: 'Swagger/OpenAPI', use: 'Documentación interactiva de 80+ endpoints' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['React 19', 'TypeScript', 'Vite', 'React Router 7', 'Tailwind CSS', 'React Hook Form + Zod'],
      },
      {
        label: 'Backend',
        items: ['Laravel 12', 'MySQL', 'Sanctum', 'Eloquent ORM', 'DomPDF', 'XML Builder', 'Swagger/OpenAPI'],
      },
    ],
    highlights: [
      'Facturación CFDI 4.0 con timbrado PAC y certificados CSD',
      'Flujo de ventas de cotización a cobranza',
      'Validación de RFC contra la lista negra del SAT',
      '4 tablas de auditoría: accesos, datos, fiscal y admin',
      'Contraseñas con expiración y bloqueo',
      'Más de 40 modelos y 80 endpoints documentados con Swagger',
      'Tesorería con conciliación bancaria',
      'Catálogos oficiales del SAT: uso CFDI, régimen y forma de pago',
    ],
  },
  {
    id: 21,
    slug: 'safetrade',
    title: 'SafeTrade',
    subtitle: 'App para vender y seguir señales de trading',
    categories: 'App Móvil • Fintech • Trading • Stripe • Zustand • React Query',
    description:
      'App móvil donde traders publican señales de trading y otros usuarios se suscriben para recibirlas. El trader carga activo, dirección, take profit y stop loss, y tiene un dashboard con porcentaje de aciertos, retorno acumulado y racha. El cliente explora traders, se suscribe por mes con Stripe y puede pausar o cancelar cuando quiera. Hecha con React Native, Expo, TypeScript, Zustand y React Query.',
    image: '/works/safetrade/principal.webp',
    images: [],
    features: [
      {
        title: 'Para Traders',
        items: [
          'Publicar señales con activo, dirección, take profit y stop loss',
          'Dashboard con % de aciertos, retorno acumulado y racha ganadora',
          'Gestión de suscriptores y estado de suscripciones',
          'Historial de señales con resultado (ganadora/perdedora)',
          'Gráficos de performance con líneas y barras',
        ],
      },
      {
        title: 'Para Clientes',
        items: [
          'Directorio de traders con métricas y precio de suscripción',
          'Suscripción mensual a uno o más traders',
          'Señales en tiempo real con detalle y análisis',
          'Gestión de suscripciones: ver, pausar o cancelar',
        ],
      },
      {
        title: 'Pagos y Cuenta',
        items: [
          'Suscripciones recurrentes mensuales con Stripe SDK nativo',
          'Historial de cobros, facturas y estado de pagos',
          'Configuración de notificaciones y perfil',
        ],
      },
    ],
    integrations: [
      { service: 'Stripe (React Native SDK)', use: 'Suscripciones recurrentes con tarjeta de crédito/débito' },
      { service: 'Firebase', use: 'Configuración de servicios y notificaciones' },
      { service: 'React Native Chart Kit', use: 'Gráficos de rendimiento y estadísticas de traders' },
    ],
    tech: [
      {
        label: 'App Móvil',
        items: ['React Native 0.76', 'Expo ~52', 'React 19', 'TypeScript', 'Expo Router', 'React Navigation'],
      },
      {
        label: 'Estado y Datos',
        items: ['Zustand', 'React Query (TanStack)', 'React Hook Form + Zod', 'Axios', 'AsyncStorage'],
      },
      {
        label: 'UI y Pagos',
        items: ['Stripe React Native', 'React Native Chart Kit', 'React Native Reanimated', 'Gesture Handler'],
      },
    ],
    highlights: [
      'Dos roles con navegación e interfaz distintas',
      'Zustand, React Query y Zod para estado, caché y validación',
      'Stripe nativo en React Native, sin salir de la app',
      'Métricas calculadas: porcentaje de aciertos, retorno acumulado y racha',
      'Toda la app en TypeScript',
      'Tabs de Expo Router que cambian según el rol',
      'React Query con caché y actualizaciones optimistas',
      'Suscripciones con cobro mensual automático',
    ],
  },
  {
    id: 22,
    slug: 'casino-online',
    title: 'Casino Online',
    subtitle: 'Casino online con 5 juegos y apuestas en tiempo real',
    categories: 'Web App • Gaming • WebSocket • Redux • Firebase',
    description:
      'Plataforma de casino online con cinco juegos: tragamonedas, Aviator, blackjack, ruleta y Hunt the Ace. Las apuestas y los resultados van por WebSocket, así que el balance se actualiza al instante. Tiene depósitos, retiros con aprobación, historial de transacciones, referidos con bono y un programa de staking. El panel de administración muestra gráficos, sesiones activas y permite bloquear cuentas.',
    image: '/works/casino/principal.webp',
    images: [],
    features: [
      {
        title: 'Juegos Disponibles',
        items: [
          'Tragamonedas con múltiples líneas de pago y jackpots',
          'Aviator con multiplicador creciente y cobro en tiempo real',
          'Blackjack clásico contra la casa',
          'Ruleta europea con apuestas a números, colores y secciones',
          'Hunt the Ace: encontrar el as entre cartas mezcladas',
        ],
      },
      {
        title: 'Sistema Financiero',
        items: [
          'Apuestas en tiempo real con WebSocket (Socket.io)',
          'Balance con actualización instantánea',
          'Depósitos con procesamiento automático',
          'Retiros con flujo de aprobación',
          'Historial completo de transacciones',
        ],
      },
      {
        title: 'Referidos y Staking',
        items: [
          'Código de referido único con $10 de bonificación',
          'Panel de referidos con estadísticas de conversión',
          'Programa BFG Staking con rendimientos calculados',
          'Visualización de capital invertido y ganancias',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'Dashboard con Chart.js y ApexCharts',
          'Gestión de usuarios con bloqueo de cuentas',
          'Monitoreo de juegos y sesiones activas',
          'Control de transacciones y aprobación de retiros',
          'Reportes de ingresos y rendimiento',
        ],
      },
    ],
    integrations: [
      { service: 'ImageKit', use: 'CDN de imágenes para assets del casino y recursos gráficos' },
      { service: 'Socket.io', use: 'Apuestas, resultados y actualizaciones de balance en tiempo real' },
      { service: 'Nodemailer + SendGrid', use: 'Emails transaccionales y notificaciones' },
      { service: 'Firebase Admin', use: 'Autenticación y notificaciones push' },
      { service: 'Chart.js + ApexCharts', use: 'Gráficos estadísticos en el dashboard de administración' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['React 18', 'Material-UI 5', 'Ant Design 5', 'Bootstrap 5', 'Redux Toolkit', 'Socket.io Client', 'Chart.js', 'ApexCharts', 'SASS'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Bcrypt', 'SendGrid', 'Firebase Admin', 'ImageKit', 'Node Cron'],
      },
    ],
    highlights: [
      '5 juegos con la lógica de casino programada desde cero',
      'Apuestas y resultados en tiempo real con Socket.io',
      'Stack MERN con MUI, Ant Design y Bootstrap',
      'Referidos con bono automático de $10',
      'Programa BFG Staking con rendimientos calculados',
      'Imágenes servidas desde ImageKit',
      'Estado global con Redux Toolkit compartido entre juegos',
      'Panel de administración con gráficos en tiempo real',
    ],
  },
  {
    id: 23,
    slug: '4me',
    title: '4ME',
    subtitle: 'Escaneo 3D de pies y calzado ortopédico a medida',
    categories: 'App Móvil • Web Admin • Escaneo 3D • Stripe',
    description:
      'Sistema para podólogos que hacen calzado ortopédico a medida. Desde la app móvil sacan fotos del pie desde varios ángulos, se suben a Google Drive con progreso en tiempo real y un proceso con Metashape las convierte en un modelo 3D. Con ese modelo se arma un proyecto eligiendo modelo, color, suela y plantilla, que pasa por 12 estados con aviso por email en cada cambio. El panel web muestra los pies en 3D y los pagos van por Stripe en dólares.',
    image: '/works/4me/principal.webp',
    images: [],
    features: [
      {
        title: 'App Móvil (Podólogo)',
        items: [
          'Escaneo de pies con cámara (múltiples ángulos)',
          'Subida masiva con progreso en tiempo real vía WebSocket',
          'Visualización del modelo 3D del pie',
          'Crear proyecto eligiendo modelo, color, suela y plantilla',
          'Seguimiento de 12 estados del proyecto',
        ],
      },
      {
        title: 'Panel Web (Admin)',
        items: [
          'Gestión de clínicas, podólogos, pacientes y proyectos',
          'Visualización 3D con Google Model Viewer',
          'Gestión de modelos de calzado con colores',
          'Actualización de estados con notificación por email',
        ],
      },
      {
        title: 'Procesamiento 3D',
        items: [
          'Fotos procesadas con Agisoft Metashape (Python)',
          'Imágenes almacenadas en Google Drive por paciente',
          'Cron job para verificar estado de procesamiento',
          'Limpieza automática de escaneos anteriores',
        ],
      },
    ],
    integrations: [
      { service: 'Stripe', use: 'Links de pago automáticos para proyectos en USD' },
      { service: 'Google Drive API', use: 'Almacenamiento de fotos organizado por paciente' },
      { service: 'Agisoft Metashape', use: 'Procesamiento fotogramétrico para modelos 3D' },
      { service: 'Google Model Viewer', use: 'Visualización 3D de pies en el navegador' },
      { service: 'Socket.IO', use: 'Progreso en tiempo real de subida de imágenes' },
      { service: 'Nodemailer (OAuth2)', use: 'Emails de estado y links de pago' },
      { service: 'Expo Camera', use: 'Captura de fotos desde la app móvil' },
    ],
    tech: [
      {
        label: 'App Móvil',
        items: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Expo Camera', 'Socket.IO'],
      },
      {
        label: 'Panel Web',
        items: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Google Model Viewer'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'Google APIs', 'Metashape (Python)', 'Node Cron'],
      },
    ],
    highlights: [
      'Escaneo 3D del pie desde el celular, procesado con Metashape',
      'Subida masiva a Google Drive con progreso en tiempo real',
      'Modelos 3D (GLB) que se ven en el navegador',
      '12 estados de proyecto con email en cada cambio',
      'Link de pago de Stripe en USD por proyecto',
      'Tres partes coordinadas: app móvil, panel web y servidor',
    ],
  },
  {
    id: 24,
    slug: 'trewa-club',
    title: 'Trewa Club',
    subtitle: 'Venta de entradas para fiestas, con QR y factura AFIP',
    categories: 'Web App • Eventos • Facturación AFIP • QR • Mercado Pago',
    description:
      'Plataforma para vender entradas a eventos nocturnos. El usuario paga con Mercado Pago, recibe un ticket con QR y la factura electrónica de AFIP sale sola con cada compra. Hay tipos de entrada con cupos y tandas, códigos de descuento, puntos canjeables por productos y login con Google o Facebook. En la puerta se escanean los QR con control de doble escaneo, y los revendedores tienen su link y sus estadísticas.',
    image: '/works/trewa/principal.webp',
    images: [],
    features: [
      {
        title: 'Para el Usuario',
        items: [
          'Catálogo de eventos con tipos de entrada (General, VIP, Early Bird)',
          'Códigos de descuento (fijo o porcentaje) con cupo y vencimiento',
          'Tickets con código QR único para escaneo en puerta',
          'Factura electrónica automática con AFIP en cada compra',
          'Sistema de puntos ($1000 = 1 punto) canjeables por productos',
          'Login con Google, Facebook o email',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'Análisis por evento: ventas, género, edad, horas pico, tandas',
          'Escaneo de entradas QR con validación anti-doble-escaneo',
          'Generación masiva de entradas (cortesías)',
          'Gestión de revendedores con estadísticas detalladas',
          'Búsqueda de usuarios con historial de compras',
        ],
      },
      {
        title: 'Sistema de Revendedores',
        items: [
          'Enlace propio para ventas asociadas',
          'Estadísticas por revendedor y por evento',
          'Revendedor top y evento más vendido',
        ],
      },
    ],
    integrations: [
      { service: 'Mercado Pago', use: 'Pagos con webhooks automáticos (ARS)' },
      { service: 'AFIP / ARCA', use: 'Factura B automática con CAE en cada compra' },
      { service: 'Google OAuth', use: 'Login con cuenta de Google' },
      { service: 'Facebook Login', use: 'Login con cuenta de Facebook' },
      { service: 'QRCode React', use: 'Códigos QR para tickets y escaneo en puerta' },
      { service: 'Nodemailer', use: 'Confirmación de compra, puntos y recuperación' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['Next.js 15', 'React 19', 'Tailwind CSS', 'NextAuth', 'QRCode React'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'AFIP SDK', 'Mercado Pago SDK', 'Google Auth', 'JWT'],
      },
    ],
    highlights: [
      'Factura electrónica de AFIP en cada compra',
      'Tipos de entrada con tandas, cupos y horarios de venta propios',
      'Escaneo QR con control de doble escaneo y margen de 6 horas',
      'Puntos canjeables por productos del catálogo',
      'Análisis por evento: género, edad, horas pico y tandas',
      'Cinco roles: usuario, caja, operador, revendedor y administrador',
    ],
  },
  {
    id: 25,
    slug: 'movilprint',
    title: 'MóvilPrint',
    subtitle: 'Editor online de diseños para mandar a imprimir',
    categories: 'Web App • Editor Visual • Drag & Drop • Login Social',
    description:
      'Web para armar diseños personalizados y mandarlos a imprimir. El usuario elige una plantilla y entra a un editor donde arrastra textos con más de 15 fuentes, imágenes y elementos decorativos, los redimensiona, rota y ordena en capas. Cuando termina, envía el diseño y queda guardado en su cuenta. Tiene login con Google y Facebook, puntos de fidelización y un panel para manejar plantillas y revisar los diseños que llegan.',
    image: '/works/movilprint/principal.webp',
    images: [],
    features: [
      {
        title: 'Editor Visual',
        items: [
          'Lienzo interactivo con arrastrar y soltar',
          'Textos con +15 fuentes, tamaño, color, negrita, cursiva',
          'Imágenes y elementos decorativos por plantilla',
          'Redimensionar, rotar, copiar y pegar elementos',
          'Sistema de capas (z-index) para profundidad',
          'Vista previa e impresión directa desde el navegador',
        ],
      },
      {
        title: 'Para el Usuario',
        items: [
          'Registro con email, Google o Facebook',
          'Selección de plantilla con vista previa',
          'Mis diseños guardados con historial',
          'Sistema de puntos de fidelización',
          'Recuperación de contraseña por email',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'Gestión de plantillas con dimensiones en cm',
          'Recursos por plantilla (formas e imágenes)',
          'Gestión de diseños recibidos',
          'Moderadores para revisión de diseños',
        ],
      },
    ],
    integrations: [
      { service: 'Google OAuth', use: 'Login con cuenta de Google' },
      { service: 'Facebook Login', use: 'Login con cuenta de Facebook vía Graph API' },
      { service: 'Mercado Pago', use: 'Procesamiento de pagos' },
      { service: 'Nodemailer', use: 'Códigos de verificación para recuperación de contraseña' },
      { service: 'React Draggable', use: 'Arrastrar y soltar elementos en el editor' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['React 18', 'Vite', 'React Router', 'React Draggable', 'Framer Motion', 'SASS'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'Google Auth', 'Facebook Graph API', 'JWT', 'Mercado Pago SDK'],
      },
    ],
    highlights: [
      'Editor con lienzo interactivo y drag and drop',
      'Plantillas con dimensiones en cm y recursos propios',
      'Más de 15 fuentes con control de estilos',
      'Capas para ordenar la profundidad de los elementos',
      'Login con Google y Facebook',
      'Diseños guardados en base de datos con todos sus elementos',
    ],
  },
  {
    id: 26,
    slug: 'goodbye-friend',
    title: 'Goodbye Friend',
    subtitle: 'Cementerio virtual en 3D para recordar mascotas',
    categories: 'Web 3D • App Móvil • Three.js • React Three Fiber • Stripe • Laravel',
    description:
      'Memorial virtual para mascotas con un cementerio en 3D que se recorre en primera persona. Tiene más de 1.075 parcelas, tres estilos de tumba, 57 objetos de tributo, nichos y mausoleos. En escritorio se navega con pointer lock y en el celular con joysticks táctiles, con minimapa y colisiones. Cada mascota tiene su perfil con biografía y fotos, donde otros dejan tributos y condolencias. Los planes y tributos se pagan con Stripe, hay un marketplace de artistas, app móvil en React Native y backend en Laravel.',
    image: '/works/goodbyefriend/principal.webp',
    images: [],
    features: [
      {
        title: 'Cementerio 3D',
        items: [
          'Mundo 3D con terreno, césped, caminos, árboles y decoración',
          '1.075+ parcelas en 25+ filas con 3 estilos de tumba',
          '57 objetos 3D de tributo: flores, velas, coronas, juguetes',
          '10 nichos circulares y mausoleos premium',
          'Iluminación dinámica y rendering por distancia',
        ],
      },
      {
        title: 'Navegación y Cámara',
        items: [
          'Primera persona con pointer lock en escritorio',
          'Joysticks virtuales táctiles en móvil',
          'Minimapa con posición actual y tumbas ocupadas',
          'Navegación directa a tumba específica',
          'Sistema de colisiones con objetos del cementerio',
        ],
      },
      {
        title: 'Memoriales y Comunidad',
        items: [
          'Perfil de mascota con biografía y galería de fotos',
          'Tributos virtuales de otros visitantes',
          'Mensajes de condolencia en cada memorial',
          'Memorial público o privado según preferencia',
          'Marketplace de artistas para personalización',
        ],
      },
      {
        title: 'Pagos y App Móvil',
        items: [
          'Planes de memorial: básico, premium, mausoleo (Stripe)',
          'Compra de tributos 3D adicionales',
          'App móvil con recorrido 3D y joysticks táctiles',
          'Gestión de perfil y galería desde el celular',
        ],
      },
    ],
    integrations: [
      { service: 'Three.js + React Three Fiber', use: 'Motor 3D para el cementerio con tumbas, objetos y ambiente' },
      { service: 'Drei', use: 'Helpers y componentes para Three.js (cámara, controles, loaders)' },
      { service: 'Stripe', use: 'Pagos para planes de memorial, tributos y marketplace' },
      { service: 'Expo Camera + Image Picker', use: 'Captura y selección de fotos desde la app móvil' },
    ],
    tech: [
      {
        label: 'Cementerio 3D (Web)',
        items: ['React 18', 'Three.js 0.181', 'React Three Fiber', 'Drei', 'React Router 6', 'CSS Modules'],
      },
      {
        label: 'App Móvil',
        items: ['React Native', 'Expo', 'React Navigation', 'Expo Camera', 'AsyncStorage'],
      },
      {
        label: 'Backend',
        items: ['Laravel 12', 'MySQL', 'Sanctum', 'Stripe PHP', 'Eloquent ORM'],
      },
    ],
    highlights: [
      'Cementerio 3D con más de 1.075 parcelas, 3 estilos de tumba y 57 objetos de tributo',
      'Pointer lock en escritorio y joysticks táctiles en móvil',
      'Rendering por distancia para sostener 60 fps',
      'Minimapa con la posición en tiempo real',
      'Marketplace de artistas para personalizar memoriales',
      'Web 3D con Three.js y R3F, app móvil en React Native y backend en Laravel',
      'Colisiones con los objetos del cementerio',
      'Pagos con Stripe: planes, tributos y pagos a colaboradores',
    ],
  },
  {
    id: 27,
    slug: 'el-lobito-4pe',
    title: 'El Lobito 4pe',
    subtitle: 'Calculadora de apuestas de golf para 4 jugadores',
    categories: 'App Móvil • Deportes • Cálculo • React Native',
    description:
      'App móvil para llevar las cuentas de un juego de apuestas de golf entre cuatro amigos. Es una grilla de 18 hoyos por 4 jugadores. Se marca quién ganó cada hoyo y la app calcula los puntos con las reglas del juego, incluyendo los empates que se acumulan para el hoyo siguiente. Se configura el precio por unidad y los resultados salen en pesos colombianos. No tiene backend ni base de datos.',
    image: '/works/ellobito/principal.webp',
    images: [],
    features: [
      {
        title: 'Mecánica del Juego',
        items: [
          'Grilla interactiva de 18 hoyos × 4 jugadores (A, B, C, D)',
          'Marcado de celdas con feedback visual en verde',
          'Cálculo automático de puntos con reglas condicionales',
          'Empates acumulativos que multiplican el siguiente hoyo',
        ],
      },
      {
        title: 'Resultados y Configuración',
        items: [
          'Precio por unidad configurable como multiplicador',
          'Resultados en pesos colombianos (COP)',
          'Resultados negativos resaltados en rojo',
          'Botón de limpiar para reiniciar el juego',
        ],
      },
    ],
    integrations: [],
    tech: [
      {
        label: 'App Móvil',
        items: ['React Native 0.74', 'Expo ~51', 'React 18', 'StyleSheet nativo'],
      },
    ],
    highlights: [
      'Reglas de puntuación para partidas de 4 jugadores',
      'Multiplicadores por empates acumulados',
      'Un solo componente, sin backend',
      'Formato de pesos colombianos con locale es-CO',
      'APK compilado listo para instalar',
      'Grilla con scroll horizontal',
    ],
  },
  {
    id: 28,
    slug: 'nodominium',
    title: 'Casa de Nodominium',
    subtitle: 'Sitio estático para un centro cultural en El Salvador',
    categories: 'Sitio Estático • HTML/CSS/JS • Bitcoin • Google Maps',
    description:
      'Sitio para Casa de Nodominium, un centro de educación y cultura en Playa Las Tunas, El Salvador. Muestra los eventos en un slider con swipe y lightboxes con detalle y patrocinadores, la historia del centro, un mapa de Google Maps y un formulario de contacto que funciona con FormSubmit. Acepta donaciones en Bitcoin con un QR. Es HTML, CSS y JavaScript puro, sin backend.',
    image: '/works/nodominium/principal.webp',
    images: [
      '/works/nodominium/1.webp',
      '/works/nodominium/2.webp',
    ],
    features: [
      {
        title: 'Contenido del Sitio',
        items: [
          'Slider de eventos con soporte táctil (swipe)',
          'Lightboxes con descripción, características y patrocinadores',
          'Presentación del centro con visión y actividades',
          'Mapa interactivo de Google Maps con ubicación',
          'Formulario de contacto funcional con FormSubmit',
          'Donaciones en Bitcoin con código QR escaneable',
        ],
      },
      {
        title: 'Diseño y UX',
        items: [
          'Animaciones CSS (fadeInUp, zoomIn, float, slide-in)',
          'Navegación fija inferior en todas las páginas',
          'Responsive con breakpoints en 480px, 768px y 1024px',
          'Gradientes oscuros con acentos naranja/dorado',
        ],
      },
    ],
    integrations: [
      { service: 'Google Maps', use: 'Mapa interactivo con ubicación del centro' },
      { service: 'FormSubmit', use: 'Formulario de contacto sin backend' },
      { service: 'Bitcoin (QR)', use: 'Donaciones en criptomoneda con código QR' },
      { service: 'Font Awesome', use: 'Iconografía en toda la interfaz' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Maps Embed'],
      },
    ],
    highlights: [
      'Sitio estático, sin servidor ni base de datos',
      'Slider de eventos con swipe en móviles',
      'Lightboxes con el detalle de cada evento',
      'Donaciones en Bitcoin con QR',
      'Animaciones en CSS puro, sin librerías',
      'Formulario de contacto con FormSubmit',
    ],
  },
  {
    id: 29,
    slug: 'julian-winners',
    title: 'Julian Winners',
    subtitle: 'Rifas online con tickets digitales y pago por Mercado Pago',
    categories: 'Web App • Rifas • Mercado Pago • Referidos',
    description:
      'Plataforma para vender tickets de rifas online en Colombia. El usuario compra packs de tickets con Mercado Pago, recibe números al azar sin repetir y le llega la factura en PDF por email. Tiene carrito para varias rifas, referidos con puntos, moderadores que asignan tickets a mano para ventas presenciales y una herramienta para elegir el ganador por número. Los textos, imágenes y hasta las credenciales de Mercado Pago y SMTP se configuran desde el panel.',
    image: '/works/julianwinners/principal.webp',
    images: [],
    features: [
      {
        title: 'Para el Usuario',
        items: [
          'Catálogo de rifas con packs de tickets y precios',
          'Carrito de compras con packs de múltiples rifas',
          'Números de ticket generados al azar sin repeticiones',
          'Factura PDF por email con detalle de tickets',
          'Sistema de referidos con enlace y acumulación de puntos',
        ],
      },
      {
        title: 'Panel de Administración',
        items: [
          'Gestión de rifas con packs, imágenes y destacados',
          'Asignación manual de tickets (ventas presenciales)',
          'Selección de ganador buscando número de ticket',
          'Historial de compras con exportación a Excel',
          'Moderadores para ventas presenciales',
        ],
      },
      {
        title: 'Contenido Editable',
        items: [
          'Textos, imágenes y datos del negocio editables',
          'Configuración de Mercado Pago y SMTP desde el panel',
          'Términos y condiciones editables',
        ],
      },
    ],
    integrations: [
      { service: 'Mercado Pago', use: 'Pagos con webhooks para asignación automática de tickets' },
      { service: 'Nodemailer', use: 'Facturas por email con plantilla HTML y enlace a PDF' },
      { service: 'PDFMake', use: 'Generación de facturas PDF descargables' },
      { service: 'ExcelJS', use: 'Exportación de usuarios e historial a Excel' },
      { service: 'Redux', use: 'Estado global (carrito, usuario, rifas)' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['Next.js 13', 'React 18', 'Redux', 'SASS', 'Axios'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'Mercado Pago SDK', 'PDFMake', 'ExcelJS', 'JWT'],
      },
    ],
    highlights: [
      'Tickets al azar sin repetir, con formato según el total de la rifa',
      'Webhooks de Mercado Pago con control de duplicados',
      'Asignación manual por moderadores para ventas presenciales',
      'Ganador elegido por número de ticket',
      'Exportación a Excel de usuarios, compras y facturas',
      'Tres roles: usuario, moderador y administrador',
    ],
  },
]
