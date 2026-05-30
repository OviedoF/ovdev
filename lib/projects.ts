export interface Project {
  id: number
  slug: string
  title: string
  subtitle: string
  categories: string
  description: string
  image: string
  features: { title: string; items: string[] }[]
  integrations: { service: string; use: string }[]
  tech: { label: string; items: string[] }[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'cap-medical',
    title: 'CAP Medical',
    subtitle: 'Aplicación Móvil de Gestión de Servicios Médicos y Cirugías',
    categories: 'App Móvil • React Native • Multi-Módulo',
    description:
      'Aplicación móvil multiplataforma para la gestión integral de servicios médicos y cirugías. Permite administrar servicios quirúrgicos con seguimiento de estados, gestionar técnicos, controlar ubicaciones y hospitales, registrar pagos, administrar expedientes de pacientes y recibir notificaciones. Incluye sistema de permisos por rol, geolocalización GPS, cámara integrada y generación de códigos QR.',
    image: '/works/cap.png',
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
      'Sistema de permisos granular por rol',
      'Creación de servicios en 3 pasos con catálogos dinámicos',
      '10 pantallas especializadas por servicio',
      'Movimientos con geolocalización GPS automática',
      'Auditoría completa de todos los cambios',
      'TypeScript completo en toda la aplicación',
    ],
  },
  {
    id: 2,
    slug: 'petnder',
    title: 'Petnder',
    subtitle: 'Plataforma Móvil Pet-Friendly con Adopción y Comunidad',
    categories: 'App Móvil • React Native • Marketplace Pet',
    description:
      'Plataforma móvil que conecta a dueños de mascotas con servicios pet-friendly, adopción responsable y una comunidad comprometida con el bienestar animal. Ofrece dos perfiles diferenciados — usuario y empresa — cada uno con su propio flujo, navegación y funcionalidades.',
    image: '/works/pender.png',
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
      'Dos perfiles diferenciados (usuario y empresa)',
      'Sistema de adopción con chat integrado',
      'Comunidades con roles y moderación de contenido',
      'Billetera digital y estadísticas financieras',
      'Gamificación con sistema de logros',
      'Onboarding animado interactivo',
    ],
  },
  {
    id: 3,
    slug: 'controla2',
    title: 'ControlA2',
    subtitle: 'Sistema de Gestión Empresarial (ERP)',
    categories: 'SaaS • ERP • Facturación Electrónica',
    description:
      'Plataforma web integral diseñada para empresas de construcción e ingeniería que necesitan centralizar y automatizar sus operaciones diarias. ERP completo con gestión de proyectos, RRHH, facturación electrónica, adquisiciones, inventario y prevención de riesgos, adaptado a normativa chilena.',
    image: '/works/controleAI.png',
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
      'Dashboard en tiempo real con métricas y KPIs',
      'Generación automática de documentos (PDF, Excel, CSV)',
      '8 roles predefinidos con flujos de aprobación',
      'Adaptado a normativa chilena (AFP, ISAPRE, DTE, RUT)',
      'Módulo SSOMA de prevención de riesgos',
      'Notificaciones instantáneas para aprobaciones',
    ],
  },
  {
    id: 4,
    slug: 'alhambra',
    title: 'Alhambra Guide',
    subtitle: 'Sitio Web de Turismo para Granada, España',
    categories: 'Web App • Turismo • Panel Admin • Multilingüe',
    description:
      'Sitio web profesional para una empresa de guías turísticos en Granada, España, especializada en visitas guiadas a la Alhambra. Plataforma completa con exploración de circuitos, reservas, blog y traducción automática a 7 idiomas, con panel de administración para gestión autónoma del contenido.',
    image: '',
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
      'Contenido 100% administrable sin ayuda técnica',
      'Edición de textos en línea directamente en la página',
      'Renderizado del lado del servidor (SSR) para SEO',
      'Soporte para 7 idiomas orientado a turismo internacional',
      'Integración con WhatsApp y correo para maximizar reservas',
      'Seguridad con JWT, contraseñas encriptadas y roles',
    ],
  },
  {
    id: 5,
    slug: 'biznes-empresa',
    title: 'Biznes Empresa',
    subtitle: 'Plataforma de Gestión de Tarjetas Digitales Corporativas',
    categories: 'Web App • SaaS • Tarjetas Digitales • Roles',
    description:
      'Aplicación web para que las empresas gestionen de forma centralizada las tarjetas digitales de presentación de todos sus empleados, con control de roles, permisos, plantillas corporativas y estadísticas de uso.',
    image: '',
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
      'Gestión corporativa completa desde un solo panel',
      'Plantillas con branding que se aplican automáticamente',
      'Roles y permisos granulares por empleado',
      'Alta masiva de empleados por archivo Excel',
      'Estadísticas centralizadas con gráficos interactivos',
      'Comunicación en tiempo real con WebSockets',
    ],
  },
  {
    id: 6,
    slug: 'blackphone',
    title: 'BlackPhone',
    subtitle: 'Sistema de Gestión de Reparaciones de Dispositivos Móviles',
    categories: 'Web App • E-commerce • WhatsApp Bot • Panel Admin',
    description:
      'Plataforma web completa para un servicio técnico de reparación de celulares en España. Incluye cotizador automático, sistema de órdenes con seguimiento, notificaciones por email y WhatsApp, gestión de mayoristas y panel de administración integral.',
    image: '',
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
      'Cotizador inteligente por modelo, avería y zona geográfica',
      'Notificaciones multicanal (email + WhatsApp automático)',
      'Bot de WhatsApp integrado sin servicios externos de pago',
      'Sistema de mayoristas con flujo independiente',
      'Tabla de precios dinámica exportable a PDF',
      'Datos reales de provincias y poblaciones de España',
    ],
  },
  {
    id: 7,
    slug: 'casepe',
    title: 'CASEPE',
    subtitle: 'Sitio Web Institucional de la Cámara de Operaciones Petroleras',
    categories: 'Web Institucional • CMS en Vivo • Blog • Next.js 14',
    description:
      'Sitio web institucional para CASEPE (Cámara de Empresas de Operaciones Petroleras Especiales), una asociación civil que nuclea a empresas de servicios petroleros en Argentina. Todo el contenido se edita directamente desde la web sin panel separado: textos, imágenes y secciones se modifican haciendo clic sobre ellos cuando el administrador está conectado.',
    image: '',
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
      'Edición en vivo sin panel separado — todo desde la misma página',
      'Propiedades anidadas actualizables dinámicamente con Lodash',
      'Secciones expandibles: agregar y eliminar ítems desde la web',
      'Blog con artículos relacionados y etiquetas',
      'Emails de contacto con plantilla HTML profesional',
      'Animaciones profesionales en todas las secciones',
    ],
  },
  {
    id: 8,
    slug: 'dental-digital',
    title: 'Dental Digital',
    subtitle: 'Sistema de Gestión para Clínicas Odontológicas (SaaS)',
    categories: 'SaaS • Facturación AFIP • Odontograma • Mercado Pago',
    description:
      'Plataforma web tipo SaaS para odontólogos y clínicas dentales en Argentina. Gestión integral de pacientes, turnos con calendario interactivo, odontograma visual, presupuestos, facturación electrónica con ARCA/AFIP, obras sociales, documentos de consentimiento, suscripciones con Mercado Pago, notificaciones por email y WhatsApp, y respaldo de datos.',
    image: '',
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
      'Facturación electrónica real con ARCA/AFIP y CAE válido',
      'Generación de certificados RSA/CSR para vincular con AFIP',
      'Odontograma interactivo con registro por pieza y exportación PDF',
      'Suscripciones con Mercado Pago y webhooks automáticos',
      'Multiusuario con roles (dueño, profesional, administrador)',
      'Backup completo en JSON con restauración inteligente',
    ],
  },
  {
    id: 9,
    slug: 'sunchales-pos',
    title: 'Sunchales POS',
    subtitle: 'Sistema de Gestión Comercial y Punto de Venta',
    categories: 'SaaS • POS • Facturación AFIP • Código de Barras',
    description:
      'Plataforma web completa de gestión comercial para negocios y comercios en Argentina. Administración de productos con código de barras, registro de ventas y compras, clientes y proveedores, facturación electrónica con ARCA/AFIP, presupuestos, control de stock y materias primas, garantías y devoluciones (RMA), y estadísticas con gráficos interactivos. Incluye suscripciones con Mercado Pago.',
    image: '',
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
      'Ciclo comercial completo: compras, stock, ventas, facturación y reportes',
      'Facturación electrónica real con ARCA/AFIP y CAE válido',
      'Código de barras con generación visual y lectura rápida',
      'Sistema de RMA para garantías y devoluciones con seguimiento',
      'Presupuestos convertibles directamente en ventas',
      'SMTP personalizable por usuario para envío de facturas',
    ],
  },
  {
    id: 10,
    slug: 'fuku-shop',
    title: 'Fuku Shop',
    subtitle: 'Tienda Online de Ropa Urbana y Anime',
    categories: 'E-commerce • Next.js • Mercado Pago • Cloudinary',
    description:
      'Tienda online completa para venta de ropa con estilo anime, asiático y de videojuegos. Catálogo con variantes por color y talle, filtros avanzados combinados, galería con zoom, tabla de talles, carrito de compras, historial, reseñas, SEO con sitemap automático y panel de administración para gestionar todo el catálogo. Originaria de Rafaela, Santa Fe, Argentina.',
    image: '',
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
      'Variantes de producto con imágenes independientes por color',
      'Filtros combinados para búsquedas precisas en catálogo',
      'Generación estática (SSG) con revalidación incremental para SEO',
      'Sitemap XML generado automáticamente con prioridades por sección',
      'Imágenes en Cloudinary para optimización y carga rápida',
      'Categorías jerárquicas con subcategorías y subtipos',
    ],
  },
  {
    id: 11,
    slug: 'julian-winners',
    title: 'Julian Winners',
    subtitle: 'Plataforma de Rifas Online con Tickets Digitales',
    categories: 'Web App • Rifas • Mercado Pago • Referidos',
    description:
      'Plataforma web completa para la venta de tickets de rifas online. Los usuarios compran packs de tickets mediante Mercado Pago y reciben números asignados al azar con factura por email. Incluye sistema de referidos con puntos, carrito de compras, asignación manual de tickets, selección de ganador, moderadores, exportación a Excel y contenido 100% editable. Moneda: pesos colombianos (COP).',
    image: '',
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
      'Tickets al azar sin repeticiones con formato según total de la rifa',
      'Webhooks de Mercado Pago con verificación anti-duplicados',
      'Asignación manual por moderadores para ventas presenciales',
      'Selección de ganador por número de ticket',
      'Exportación completa a Excel (usuarios, compras, facturas)',
      'Tres roles diferenciados (usuario, moderador, administrador)',
    ],
  },
  {
    id: 12,
    slug: 'limcal',
    title: 'LIMCAL',
    subtitle: 'Tienda Online de Productos de Limpieza',
    categories: 'E-commerce • Mercado Pago • Revendedores • CMS',
    description:
      'Tienda online completa para LIMCAL, empresa de productos de limpieza en Argentina. Registro con CUIT y aprobación manual de cuentas, catálogo con filtros, carrito con compra mínima por producto, pago con Mercado Pago, mapa de revendedores con Google Maps, seguimiento de pedidos con email, formulario de contacto con respuesta desde el panel y contenido 100% editable.',
    image: '',
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
      'Aprobación manual de cuentas para control de acceso',
      'Compra mínima por producto ideal para venta mayorista',
      'Mapa de revendedores con Google Maps filtrable por zona',
      'Respuesta a mensajes de contacto directamente desde el panel',
      'Contenido editable con propiedades anidadas dinámicas',
      'Webhooks de Mercado Pago con registro automático de pedidos',
    ],
  },
  {
    id: 13,
    slug: 'limcal-pos',
    title: 'LIMCAL POS',
    subtitle: 'Aplicación de Escritorio de Gestión Comercial y Punto de Venta',
    categories: 'Desktop App • Electron • Facturación AFIP • IndexedDB',
    description:
      'Aplicación de escritorio con Electron para la gestión comercial completa de LIMCAL. Productos con importación masiva desde Excel, ventas y compras, facturación electrónica con ARCA/AFIP (Factura A/B, Notas de Crédito), remitos, stock, materias primas, revendedores con comisiones y descuentos, libro IVA, estadísticas y backup. Base de datos local con IndexedDB. Reemplaza al antiguo sistema basado en FoxPro.',
    image: '',
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
      'App de escritorio con Electron — funciona offline sin servidor',
      'Base de datos local con IndexedDB en el navegador de Electron',
      'Facturación electrónica real con AFIP (Factura A/B, NC A/B)',
      'Revendedores con descuento o comisión aplicados al facturar',
      'Importación masiva de productos y cambio masivo de precios desde Excel',
      'Migración completa desde FoxPro (Husky POS) a tecnología moderna',
    ],
  },
  {
    id: 14,
    slug: 'movilprint',
    title: 'MóvilPrint',
    subtitle: 'Plataforma de Diseño e Impresión Personalizada',
    categories: 'Web App • Editor Visual • Drag & Drop • Login Social',
    description:
      'Plataforma web para crear diseños personalizados de impresión. El usuario elige una plantilla, accede al editor visual con drag & drop donde agrega textos con +15 fuentes, imágenes y elementos decorativos, posiciona cada elemento libremente y envía el diseño para impresión. Login con Google y Facebook, sistema de puntos, y panel de administración para gestionar plantillas y diseños recibidos.',
    image: '',
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
      'Editor visual completo con lienzo interactivo y drag & drop',
      'Plantillas dinámicas con dimensiones en cm y recursos propios',
      '+15 fuentes tipográficas con control completo de estilos',
      'Sistema de capas para controlar profundidad de elementos',
      'Login social con Google y Facebook',
      'Diseños persistentes con todos los elementos guardados en BD',
    ],
  },
  {
    id: 15,
    slug: 'padel',
    title: 'PADEL',
    subtitle: 'Plataforma de Gestión de Torneos de Pádel',
    categories: 'Web App • Deportes • Ranking • Next.js 15',
    description:
      'Plataforma web para la organización y seguimiento de torneos de pádel. Gestión de torneos con categorías, jugadores con clubes y puntos, partidos con resultados por sets, calendario de eventos, circuito por categoría, ranking filtrado por género y categoría, y búsqueda de jugadores. Panel de administración y panel de moderador para carga de resultados.',
    image: '',
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
      'Circuito de torneos organizado automáticamente por categoría',
      'Ranking dinámico en tiempo real por categoría y género',
      'Partidos individuales y por equipos con resultados por sets',
      'Estado automático del torneo según partidos cargados',
      'Tres niveles de acceso (público, moderador, administrador)',
      'Eliminación lógica en categorías para restauración',
    ],
  },
  {
    id: 16,
    slug: '4me',
    title: '4ME',
    subtitle: 'Plataforma de Podología con Escaneo 3D y Calzado Ortopédico',
    categories: 'App Móvil • Web Admin • Escaneo 3D • Stripe',
    description:
      'Sistema integral de podología con escaneo 3D de pies. Los podólogos escanean pies desde la app móvil, las fotos se procesan en modelos 3D con Metashape, y se crean proyectos de calzado ortopédico a medida. Pagos con Stripe en USD, almacenamiento en Google Drive, visualización 3D en el panel web, notificaciones por email y comunicación en tiempo real.',
    image: '',
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
      'Escaneo 3D de pies desde el celular con procesamiento Metashape',
      'Subida masiva a Google Drive con progreso en tiempo real',
      'Visualización de modelos 3D (GLB) en el navegador',
      'Pipeline de 12 estados con notificación por email en cada cambio',
      'Pagos con Stripe en USD con link automático por proyecto',
      'Tres sistemas coordinados: app móvil + panel web + servidor',
    ],
  },
  {
    id: 17,
    slug: 'trewa-club',
    title: 'Trewa Club',
    subtitle: 'Plataforma de Venta de Entradas para Eventos con Sistema de Puntos',
    categories: 'Web App • Eventos • Facturación AFIP • QR • Mercado Pago',
    description:
      'Plataforma web para la venta de entradas a eventos nocturnos y fiestas. Compra con Mercado Pago, tickets con código QR, facturación electrónica automática con AFIP, sistema de puntos canjeables, códigos de descuento, tipos de entrada con cupos, revendedores con estadísticas, escaneo QR en puerta y login con Google/Facebook. Cinco roles diferenciados.',
    image: '',
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
      'Facturación electrónica automática con AFIP en cada compra',
      'Tipos de entrada con tandas, cupos y horarios de venta independientes',
      'Escaneo QR con validación anti-doble-escaneo y margen de 6 horas',
      'Sistema de puntos canjeables por productos del catálogo',
      'Análisis detallado por evento (género, edad, horas pico, tandas)',
      'Cinco roles: usuario, caja, operador, revendedor, administrador',
    ],
  },
  {
    id: 18,
    slug: 'nodominium',
    title: 'Casa de Nodominium',
    subtitle: 'Sitio Web de Centro Cultural y Educativo en El Salvador',
    categories: 'Sitio Estático • HTML/CSS/JS • Bitcoin • Google Maps',
    description:
      'Sitio web para Casa de Nodominium, centro independiente de educación y cultura en Playa Las Tunas, La Unión, El Salvador. Eventos con slider táctil y lightboxes, información institucional, mapa interactivo de Google Maps, formulario de contacto con FormSubmit y donaciones en Bitcoin con código QR. Sitio completamente estático sin backend.',
    image: '',
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
      'Sitio completamente estático sin servidor ni base de datos',
      'Slider de eventos con soporte táctil para móviles',
      'Lightboxes con información completa de cada evento',
      'Donaciones en Bitcoin con QR escaneable',
      'Animaciones CSS puras sin librerías externas',
      'Formulario funcional con FormSubmit sin backend propio',
    ],
  },
  {
    id: 19,
    slug: 'mdt-ingenieros',
    title: 'MDT Ingenieros',
    subtitle: 'Control de Horas y Gestión de Proyectos de Topografía',
    categories: 'Web App • RRHH • Facturación • Firmas Digitales',
    description:
      'Plataforma web para registro y control de horas trabajadas, gestión de proyectos y generación de reportes para una empresa de topografía. Jornadas con actividades, firmas digitales, aprobación de horas extras, reportes de nómina en PDF, facturación mensual con IVA y percepciones, calendario visual con estados, rotación de personal y monitoreo de horas no registradas. Moneda: USD.',
    image: '',
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
      'Cálculo inteligente de horas extras por día, feriado y almuerzo',
      'Firmas digitales del topógrafo y supervisor en los partes',
      'Facturación mensual automática con IVA (13%) y percepción (1%)',
      'Calendario visual con estados diarios por proyecto',
      'Monitoreo de horas no registradas en los últimos 7 días',
      'Rotación de personal entre proyectos con desglose mensual',
    ],
  },
  {
    id: 20,
    slug: 'storybox',
    title: 'StoryBox',
    subtitle: 'Editor Interactivo de Historias y Presentaciones con Programación Visual',
    categories: 'Web App • Educación • Programación Visual • Blockly',
    description:
      'Aplicación web interactiva para crear historias y presentaciones multimedia con programación visual. El usuario crea escenas con fondos, objetos arrastrables y redimensionables, textos con múltiples fuentes y estilos, música de fondo por escena, transiciones animadas y programa el comportamiento de los objetos usando bloques visuales (Blockly). Modo presentación a pantalla completa, exportación a PDF, guardado en servidor con miniatura automática, sistema de deshacer/rehacer, copiar y pegar, e interfaz bilingüe español/inglés.',
    image: '',
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
      'Programación visual con 17 tipos de bloques (movimiento, apariencia, control)',
      'Editor de lienzo con drag & drop, 8 puntos de agarre, rotación y capas',
      'Transiciones animadas en 8 direcciones con 3 velocidades',
      'Música de fondo por escena con reproducción automática en bucle',
      'Sistema completo de deshacer/rehacer basado en pilas',
      'Exportación a PDF de alta calidad con html2canvas + jsPDF',
      'Interfaz bilingüe español/inglés con textos dinámicos',
      'Guardado en servidor con miniatura automática generada',
    ],
  },
  {
    id: 21,
    slug: 'konecta',
    title: 'Konecta',
    subtitle: 'Aplicación Móvil de Control de Asistencia y Permisos Laborales',
    categories: 'App Móvil • RRHH • QR • Geolocalización • Google Maps',
    description:
      'Aplicación móvil multiplataforma para el control de asistencia de empleados. Registro de entrada y salida mediante código QR o geolocalización GPS, historial de asistencia con vista de mapa en Google Maps, solicitud de permisos e incidencias con adjuntos, soporte multiempresa, selfie para foto de perfil, roles diferenciados (empleado y supervisor) y navegación adaptable según el rol del usuario.',
    image: '',
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
      'Doble método de registro: código QR y geolocalización GPS',
      'Mapa interactivo de Google Maps con historial de ubicaciones',
      'Soporte multiempresa con selección por sesión',
      'Roles diferenciados con navegación adaptable (empleado/supervisor)',
      'Permisos e incidencias con adjuntos y flujo de aprobación',
      'Selfie para perfil con cámara frontal codificada en Base64',
    ],
  },
  {
    id: 22,
    slug: 'el-lobito-4pe',
    title: 'El Lobito 4pe',
    subtitle: 'Calculadora de Puntuaciones de Golf para 4 Jugadores',
    categories: 'App Móvil • Deportes • Cálculo • React Native',
    description:
      'Aplicación móvil para calcular las puntuaciones de un juego de apuestas de golf entre 4 jugadores. Grilla interactiva de 18 hoyos × 4 jugadores con cálculo automático de puntos según reglas condicionales (empates previos, cantidad de marcados por hoyo). Precio por unidad configurable y resultados en pesos colombianos. Aplicación autocontenida sin backend ni base de datos.',
    image: '',
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
      'Reglas de puntuación ajustadas para partidas de 4 jugadores',
      'Motor de cálculo con multiplicadores por empates previos',
      'Aplicación autocontenida: un solo componente, sin backend',
      'Formato de moneda colombiana (COP) con locale es-CO',
      'APK compilado incluido listo para instalar',
      'Grilla con scroll horizontal para visualización cómoda',
    ],
  },
  {
    id: 23,
    slug: 'casino-online',
    title: 'Casino Online',
    subtitle: 'Plataforma de Juegos de Azar con Apuestas en Tiempo Real',
    categories: 'Web App • Gaming • WebSocket • Redux • Firebase',
    description:
      'Plataforma de casino online con 5 juegos interactivos (Tragamonedas, Aviator, Blackjack, Ruleta y Hunt the Ace), apuestas en tiempo real con WebSocket, panel de administración con gráficos estadísticos, sistema de referidos con bonificación, programa de staking BFG, gestión de depósitos y retiros, CDN de imágenes con ImageKit, y autenticación segura con JWT y roles diferenciados.',
    image: '',
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
      '5 juegos completos con lógica de casino implementada desde cero',
      'Apuestas y resultados en tiempo real con WebSocket (Socket.io)',
      'Stack MERN completo con triple librería de UI (MUI + Ant Design + Bootstrap)',
      'Sistema de referidos con bonificación automática de $10',
      'Programa BFG Staking con rendimientos calculados',
      'CDN de imágenes con ImageKit para carga optimizada',
      'Estado global con Redux Toolkit para experiencia fluida entre juegos',
      'Panel de administración con gráficos en tiempo real',
    ],
  },
  {
    id: 24,
    slug: 'giordota',
    title: 'GiorDota',
    subtitle: 'Marketplace de Items de Dota 2 con Apuestas y Tienda Gaming',
    categories: 'Web App • Gaming • Microservicios • Steam API • Astro + Svelte',
    description:
      'Plataforma de comercio de items de Dota 2 con marketplace, sistema de apuestas con monedas virtuales, 5 tipos de cajas de loot, bots de Steam automatizados para intercambio de items, chat en tiempo real multicanal, sistema de triple wallet, red social integrada, sistema VIP con niveles, bot de Discord, y pasarelas de pago para Perú (Mercado Pago, PayPal, PagoEfectivo). Arquitectura de microservicios con Java Spring Boot, 4 servicios Node.js y frontend Astro/Svelte.',
    image: '',
    features: [
      {
        title: 'Marketplace y Bots',
        items: [
          'Catálogo de items de Dota 2 con precios de Steam',
          'Compra y venta de items con wallet interna',
          'Bots de Steam automatizados con trade offers',
          'Gestión de múltiples bots con Steam Guard integrado',
          'Verificación de inventario en tiempo real',
        ],
      },
      {
        title: 'Cajas de Loot y Apuestas',
        items: [
          '5 tipos de cajas: normales, gratis, sociales, fan y formulario',
          'Animación de apertura con revelación del item ganado',
          'Apuestas con monedas virtuales en eventos y partidas',
          'Probabilidades configurables por administrador',
        ],
      },
      {
        title: 'Triple Wallet y Pagos',
        items: [
          'Wallet de compras, wallet de retiros y wallet gratis',
          'Depósitos con Mercado Pago, PayPal y PagoEfectivo',
          'Retiros con solicitud y procesamiento',
          'Historial completo de transacciones',
        ],
      },
      {
        title: 'Comunidad y Chat',
        items: [
          'Chat en tiempo real: soporte, grupal, admin y claves',
          'Red social con publicaciones y sistema de amigos',
          'Bot de Discord con comandos y notificaciones',
          'Sistema VIP con niveles y beneficios exclusivos',
        ],
      },
    ],
    integrations: [
      { service: 'Steam API', use: 'Autenticación, inventarios y datos de items de Dota 2' },
      { service: 'Steam Bots', use: 'Intercambio automatizado de items con trade offers' },
      { service: 'Mercado Pago', use: 'Pasarela de pago para el mercado peruano' },
      { service: 'PayPal', use: 'Pasarela de pago internacional' },
      { service: 'PagoEfectivo', use: 'Pagos en efectivo en puntos de pago en Perú' },
      { service: 'Discord Bot', use: 'Comunidad extendida con comandos y notificaciones' },
      { service: 'Socket.io', use: 'Chat, apuestas y actualizaciones en tiempo real' },
    ],
    tech: [
      {
        label: 'Frontend',
        items: ['Astro 4.6', 'Svelte 5', 'Tailwind CSS', 'WebSocket Client'],
      },
      {
        label: 'Backend Principal',
        items: ['Java 17', 'Spring Boot 3.2', 'Spring Security', 'Spring Data JPA', 'MySQL', 'JWT'],
      },
      {
        label: 'Microservicios (Node.js)',
        items: ['Steam Bots', 'Chat (Socket.io)', 'Pagos (MP + PayPal + PagoEfectivo)', 'Discord Bot', 'MongoDB'],
      },
    ],
    highlights: [
      'Arquitectura de microservicios: Spring Boot + 4 servicios Node.js',
      'Bots de Steam automatizados con trade offers y Steam Guard',
      '5 tipos de loot boxes con probabilidades configurables',
      'Triple wallet (compras, retiros, gratis) para control financiero granular',
      'Frontend moderno con Astro + Svelte para SSG + interactividad',
      '3 pasarelas de pago para Perú: Mercado Pago, PayPal y PagoEfectivo',
      'Chat multicanal en tiempo real con WebSocket',
      'Bot de Discord integrado con la plataforma',
    ],
  },
  {
    id: 25,
    slug: 'saucedo-abogados',
    title: 'Saucedo Abogados',
    subtitle: 'Sistema de Gestión Legal con Firma Electrónica e Inteligencia Artificial',
    categories: 'Web App • App Móvil • Legal • IA • Firma Electrónica • Laravel',
    description:
      'Sistema integral de gestión para estudio jurídico con casos legales en 6 pestañas especializadas, gestión de clientes, presupuestos con flujo de aprobación, cobranzas, calendario integrado, 6 tipos de reportes, indexación de documentos con IA (OCR y resumen automático), firma electrónica con SignNow, integración con Google Drive y Google Calendar, panel Filament, app móvil y 3 roles diferenciados. Backend Laravel con 48 modelos y 88 endpoints.',
    image: '',
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
      'Indexación de documentos con IA: OCR + resumen automático con OpenAI',
      'Firma electrónica con SignNow con validez jurídica',
      'Triple integración Google: Drive, Calendar y OAuth',
      '48 modelos y 88 endpoints en Laravel para gestión legal completa',
      'Flujo de aprobación de presupuestos con 3 roles diferenciados',
      '6 tipos de reportes para toma de decisiones del estudio',
      'Casos con 6 pestañas especializadas para gestión integral',
      'Tests E2E con Playwright y app móvil complementaria',
    ],
  },
  {
    id: 26,
    slug: 'grupo-sdg',
    title: 'Grupo SDG',
    subtitle: 'Sistema de Gestión Empresarial con Facturación Electrónica CFDI 4.0 (México)',
    categories: 'Web App • ERP • Facturación CFDI • Laravel 12 • SAT',
    description:
      'Sistema de gestión empresarial para el mercado mexicano con facturación electrónica CFDI 4.0. Pipeline de ventas completo (cotización → pedido → factura → pago → cobranza), emisión de comprobantes fiscales con certificados CSD, timbrado con PAC, validación de RFC contra lista negra del SAT, módulo de tesorería, políticas de contraseña con expiración y 4 tablas de auditoría. Backend Laravel 12 con 40+ modelos y 80+ endpoints documentados con Swagger.',
    image: '',
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
      'Facturación CFDI 4.0 completa con timbrado PAC y certificados CSD',
      'Pipeline de ventas end-to-end: cotización hasta cobranza',
      'Validación de RFC contra lista negra del SAT',
      '4 tablas de auditoría para trazabilidad completa',
      'Políticas de contraseña empresariales con expiración periódica',
      '40+ modelos y 80+ endpoints documentados con Swagger',
      'Módulo de tesorería con conciliación bancaria',
      'Catálogos oficiales del SAT integrados (uso CFDI, régimen, forma de pago)',
    ],
  },
  {
    id: 27,
    slug: 'goodbye-friend',
    title: 'Goodbye Friend',
    subtitle: 'Cementerio Virtual 3D para Mascotas con Tumbas Interactivas',
    categories: 'Web 3D • App Móvil • Three.js • React Three Fiber • Stripe • Laravel',
    description:
      'Plataforma de memorial virtual para mascotas con un cementerio 3D completo. Más de 1.075 parcelas en 25+ filas, 3 estilos de tumba, 57 objetos 3D de tributo, nichos circulares y mausoleos. Cámara en primera persona con pointer lock en escritorio y joysticks táctiles en móvil, minimapa, rendering por distancia, perfiles de mascotas con galerías, memoriales colaborativos, marketplace de colaboradores y pagos con Stripe. App móvil con React Native y backend Laravel.',
    image: '',
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
      'Cementerio 3D con 1.075+ parcelas, 3 estilos de tumba y 57 objetos de tributo',
      'Cámara híbrida: pointer lock en desktop, joysticks táctiles en móvil',
      'Rendering optimizado por distancia para mantener 60fps',
      'Minimapa de navegación con posición en tiempo real',
      'Marketplace de colaboradores para personalización de memoriales',
      'Tres plataformas: web 3D (Three.js/R3F), app móvil (React Native), backend (Laravel)',
      'Sistema de colisiones para recorrido realista',
      'Monetización con Stripe: planes, tributos y pagos a colaboradores',
    ],
  },
  {
    id: 28,
    slug: 'safetrade',
    title: 'SafeTrade',
    subtitle: 'Marketplace de Señales de Trading con Suscripciones',
    categories: 'App Móvil • Fintech • Trading • Stripe • Zustand • React Query',
    description:
      'Aplicación móvil para compra y venta de señales de trading. Los traders publican señales con análisis técnico y los clientes se suscriben para recibirlas. Dos roles diferenciados, suscripciones recurrentes con Stripe, dashboard de rendimiento, exploración de traders con métricas de performance, gráficos estadísticos, navegación por tabs según rol, y validación con Zod. Stack moderno: React Native, Expo, TypeScript, Zustand y React Query.',
    image: '',
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
      'Dos roles con interfaces y navegación completamente diferenciadas',
      'Stack moderno: Zustand + React Query + Zod para estado, caché y validación',
      'Stripe nativo en React Native para pagos sin salir de la app',
      'Métricas automáticas: % aciertos, retorno acumulado, racha ganadora',
      'TypeScript completo en toda la aplicación',
      'Expo Router con tabs condicionales según rol del usuario',
      'React Query con caché y sincronización optimista',
      'Suscripciones recurrentes con cobro mensual automático',
    ],
  },
  {
    id: 29,
    slug: 'talenthunt',
    title: 'TalentHunt',
    subtitle: 'Chatbot de Reclutamiento con IA y Parsing de CVs',
    categories: 'Web App • RRHH • IA • GPT-4 • Chatbot • Laravel 12 • Filament',
    description:
      'Plataforma de reclutamiento automatizado con chatbot conversacional con IA. Recibe candidatos a través de un chatbot configurable, parsea CVs con GPT-4 (extracción automática de datos personales, experiencia y educación desde PDFs), gestiona postulaciones con flujo Kanban, se integra con TalentTalent API para publicación de ofertas, constructor de flujos de chatbot, dashboard de analítica (funnel, time-to-hire, rendimiento por reclutador) y 3 roles. Panel Filament.',
    image: '',
    features: [
      {
        title: 'Chatbot Conversacional',
        items: [
          'Flujo de conversación configurable por oferta laboral',
          'Constructor de flujos con pasos: preguntas abiertas, opción múltiple, archivos',
          'Respuestas dinámicas según las respuestas del candidato',
          'Subida de CV directamente en la conversación',
          'Interfaz tipo chat amigable para el candidato',
        ],
      },
      {
        title: 'Parsing de CVs con GPT-4',
        items: [
          'Lectura automática de texto en PDFs con OCR',
          'Extracción de datos personales: nombre, email, teléfono, ubicación',
          'Extracción de experiencia laboral: empresas, cargos, fechas',
          'Identificación de habilidades técnicas y blandas',
          'Campos automáticos guardados en perfil del candidato',
        ],
      },
      {
        title: 'Gestión de Postulaciones',
        items: [
          'Kanban: nuevo → revisión → entrevista → prueba → oferta → contratado',
          'Detalle del candidato con CV parseado y respuestas del chatbot',
          'Notas internas del reclutador y timeline completo',
          'Asignación de postulaciones a reclutadores',
        ],
      },
      {
        title: 'Analítica y Administración',
        items: [
          'Funnel de conversión: visitas → postulaciones → contrataciones',
          'Time-to-hire y rendimiento por reclutador',
          'Publicación de ofertas en portales vía TalentTalent API',
          '3 roles: administrador, reclutador, visor (Filament)',
        ],
      },
    ],
    integrations: [
      { service: 'OpenAI GPT-4', use: 'Parsing inteligente de CVs: datos, experiencia, educación y habilidades' },
      { service: 'TalentTalent API', use: 'Publicación de ofertas en múltiples portales de empleo' },
      { service: 'Filament v3.3', use: 'Panel de administración con dashboard y gestión de recursos' },
      { service: 'Alpine.js', use: 'Interactividad del chatbot y componentes dinámicos' },
      { service: 'DomPDF', use: 'Generación de reportes en PDF' },
    ],
    tech: [
      {
        label: 'Backend + Panel',
        items: ['Laravel 12', 'Filament v3.3', 'MySQL', 'Sanctum', 'Spatie Permission', 'Livewire'],
      },
      {
        label: 'Frontend',
        items: ['Alpine.js 3.14', 'Tailwind CSS v4'],
      },
      {
        label: 'IA y Herramientas',
        items: ['OpenAI PHP SDK (GPT-4)', 'Spatie Media Library', 'DomPDF', 'OpenSpout (Excel)'],
      },
    ],
    highlights: [
      'Parsing de CVs con GPT-4: extracción automática de datos, experiencia y habilidades',
      'Constructor visual de flujos de chatbot sin necesidad de programar',
      'Dashboard de analítica: funnel de conversión, time-to-hire, rendimiento por reclutador',
      'Integración con TalentTalent API para publicar en múltiples portales',
      '3 roles diferenciados: administrador, reclutador y visor',
      'Filament v3.3 como panel principal con dashboard profesional',
      'Flujo Kanban completo para gestión visual de candidatos',
      'Laravel 12 con Alpine.js, Livewire y Tailwind CSS v4',
    ],
  },
  {
    id: 30,
    slug: 'biznes',
    title: 'Biznes',
    subtitle: 'Plataforma SaaS de Tarjetas Digitales de Presentación',
    categories: 'Web App • SaaS • E-commerce • QR • Mercado Pago • Redux',
    description:
      'Plataforma SaaS para crear tarjetas de presentación digitales personalizables y compartibles por link o QR. Editor visual con vista previa en tiempo real, redes sociales integradas, botones personalizados, vCard descargable, sistema de membresías con Mercado Pago, tienda de productos con carrito, panel de administración completo, estadísticas detalladas de interacciones (visitas, clics, descargas, tiempo en pantalla) y comunicación en tiempo real con Socket.IO.',
    image: '',
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
      'SaaS completo con suscripciones y permisos granulares por plan',
      'Editor visual avanzado con vista previa en tiempo real en formato celular',
      'Estadísticas detalladas: visitas, clics, descargas, tiempo en pantalla',
      'QR + vCard automáticos para cada tarjeta digital',
      'Tienda de productos con carrito y checkout con Mercado Pago',
      'Optimización de imágenes automática a WebP con Sharp',
      'Importación masiva de usuarios/tarjetas desde Excel',
      'Tareas programadas con Agenda.js para vencimiento de membresías',
    ],
  },
  {
    id: 31,
    slug: 'citamovil',
    title: 'CitaMóvil',
    subtitle: 'Sistema de Gestión de Reparaciones de Dispositivos Móviles',
    categories: 'Web App • Servicio Técnico • WhatsApp Bot • Next.js 14 • Mayoristas',
    description:
      'Plataforma web para un servicio técnico de reparación de celulares, tablets y dispositivos electrónicos en España. Cotizador automático con tabla de precios por modelo, avería y zona, sistema de órdenes con seguimiento por código de 5 dígitos, notificaciones automáticas por email y WhatsApp, gestión de mayoristas con aprobación y seguimiento, blog con editor enriquecido, y panel de administración con contenido 100% editable.',
    image: '',
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
      'Cotizador inteligente con precios por modelo, avería y zona geográfica',
      'Bot de WhatsApp integrado con whatsapp-web.js (sin servicios de pago)',
      'Notificaciones multicanal: email + WhatsApp automáticos',
      'Sistema de mayoristas con registro, aprobación y seguimiento',
      'Tabla de precios dinámica con drag & drop y exportación a PDF',
      'Contenido 100% editable desde el panel de administración',
    ],
  },
]
