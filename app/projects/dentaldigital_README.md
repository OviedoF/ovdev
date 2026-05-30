# Dental Digital - Sistema de Gestión para Clínicas Odontológicas

Plataforma web tipo SaaS diseñada para que odontólogos y clínicas dentales gestionen toda su operación diaria: pacientes, turnos, odontograma, presupuestos, facturación electrónica con ARCA/AFIP, obras sociales, prestaciones, documentos de consentimiento, y más. Incluye sistema de suscripciones con pagos mediante Mercado Pago, notificaciones por email y WhatsApp, generación de PDFs, respaldo y restauración de datos, y gráficos estadísticos.

---

## Sobre el proyecto

Dental Digital es un sistema integral para consultorios odontológicos en Argentina. Cada profesional se registra, elige un plan de suscripción y accede a un panel donde puede gestionar sus pacientes, agendar turnos en un calendario interactivo, registrar tratamientos en un odontograma visual, generar presupuestos, emitir facturas electrónicas validadas por ARCA (AFIP) y enviarlas por email o WhatsApp al paciente. El sistema soporta múltiples clínicas, profesionales asociados y roles diferenciados (dueño, profesional, administrador).

---

## Funcionalidades principales

### Gestión de pacientes

- **Ficha completa del paciente**: nombre, género, fecha de nacimiento, DNI, teléfono, email, referencia, detalles clínicos y obra social asociada.
- **Responsable del paciente**: para menores de edad, se registran los datos del responsable (nombre, fecha de nacimiento, DNI, teléfono).
- **Búsqueda y filtrado**: listado de pacientes con búsqueda rápida.
- **Eliminación lógica**: los registros no se borran definitivamente, se marcan como eliminados y se pueden restaurar.

### Calendario de turnos

- **Calendario interactivo**: vista mensual, semanal y diaria con los turnos agendados. Cada turno tiene título, paciente, profesional, prestación, hora de inicio y fin, y observaciones.
- **Turnos por profesional**: los turnos se asignan a profesionales específicos de la clínica.
- **Colores por prestación**: cada prestación tiene un color asignado que se refleja en el calendario para identificar rápidamente el tipo de tratamiento.

### Odontograma

- **Odontograma visual e interactivo**: representación gráfica de la boca del paciente con dientes permanentes y temporarios.
- **Registro por diente**: se pueden agregar observaciones y marcas en cada diente individualmente.
- **Vistas adicionales**: maxila, mandíbula, cara, arcada superior, arcada inferior y ambas arcadas.
- **Exportación a PDF**: el odontograma se puede imprimir o exportar como PDF con html2canvas y jsPDF.
- **Comentarios por pieza**: se pueden agregar notas clínicas a cada pieza dental.

### Presupuestos

- **Creación de presupuestos**: generar presupuestos detallados con múltiples ítems (nombre y precio de cada tratamiento), asociados a un paciente registrado o a un cliente rápido (nombre, dirección, CUIT, DNI).
- **Estados de presupuesto**: cada presupuesto tiene un estado (pendiente, aprobado, rechazado, etc.).
- **Conversión a factura**: un presupuesto aprobado se puede convertir directamente en una factura.
- **Generación de PDF**: cada presupuesto genera un documento PDF descargable con los datos del profesional y del paciente.

### Facturación electrónica (ARCA/AFIP)

- **Emisión de facturas electrónicas**: el sistema se conecta directamente con ARCA (AFIP) para emitir comprobantes electrónicos válidos.
- **Tipos de comprobante**: Factura A, B y C, Nota de Crédito A, B y C, Nota de Débito A, B y C.
- **Cálculo automático de IVA**: soporte para IVA del 0%, 10.5%, 21% y 27%.
- **CAE automático**: cada factura obtiene su Código de Autorización Electrónica directamente de AFIP.
- **Generación de certificados**: el sistema genera las claves RSA y el CSR necesarios para vincular con ARCA/AFIP.
- **PDF de factura**: cada comprobante genera un PDF profesional con todos los datos fiscales.
- **Envío por email**: las facturas se pueden enviar automáticamente por email al paciente con una plantilla HTML.
- **Envío por WhatsApp**: opción de enviar el comprobante por WhatsApp al paciente (integración con Twilio).
- **Estadísticas de facturación**: total de facturas, monto del mes, notas de crédito y notas de débito.

### Prestaciones con costo

- **Catálogo de prestaciones**: crear tratamientos/prestaciones con nombre, código, valor y color identificativo.
- **Uso en turnos y presupuestos**: las prestaciones se seleccionan al crear turnos y presupuestos.

### Obras sociales

- **Gestión de obras sociales**: registrar obras sociales con nombre, código y valor de cobertura.
- **Asignación a pacientes**: cada paciente puede tener una obra social asociada.

### Documentos de consentimiento

- **Plantillas de consentimiento**: crear documentos de consentimiento informado con nombre y texto editable.
- **Firma digital**: el usuario puede cargar su firma digital para incluirla en los documentos.

### Gestión de clínicas y profesionales

- **Múltiples clínicas**: el usuario puede registrar varias clínicas con nombre, dirección, teléfono, ciudad y provincia.
- **Profesionales por clínica**: asignar profesionales a cada clínica con nombre, DNI, teléfono y email.
- **Roles diferenciados**: dueño (acceso total), profesional (acceso limitado a sus datos) y administrador.
- **Usuarios profesionales**: el dueño puede crear cuentas para sus profesionales con acceso restringido.

### Dashboard con estadísticas

- **Gráficos interactivos**: visualización de tratamientos, presupuestos y turnos con gráficos de líneas y barras.
- **Vista por mes y por semana**: alternar entre vista mensual y semanal de las estadísticas.
- **Turnos del período**: listado de los próximos turnos del mes o semana actual.

### Configuración

- **Suscripción**: gestión del plan contratado, con opción de pago mensual o anual mediante Mercado Pago.
- **Configuración de ARCA**: datos de facturación (CUIT, razón social, punto de venta, condición de IVA, dirección, ingresos brutos), generación de certificados y carga de credenciales.
- **Configuración de email**: servidor SMTP configurable por usuario para envío de facturas.
- **Configuración de WhatsApp**: número y mensaje predeterminado para envíos por WhatsApp.
- **Texto de garantía**: texto personalizable que se incluye en las facturas.
- **Cambio de contraseña**: con verificación por código de email.

### Respaldo y restauración

- **Backup completo**: descargar un archivo JSON con todos los datos del usuario (pacientes, clínicas, prestaciones, obras sociales, presupuestos, facturas, eventos, odontogramas, documentos de consentimiento).
- **Restauración de datos**: subir un archivo de backup para restaurar los datos, detectando automáticamente registros existentes y nuevos.

### Sistema de suscripciones

- **Planes de pago**: suscripción mensual o anual con pagos recurrentes mediante Mercado Pago.
- **Período de prueba**: opción de prueba gratuita con días configurables.
- **Webhook de Mercado Pago**: procesamiento automático de pagos, renovaciones y cancelaciones.
- **Estados de suscripción**: activa, expirada, cancelada, fallida.

### Registro y autenticación

- **Registro de usuario**: formulario con nombre, email, teléfono, DNI, género y contraseña.
- **Recuperación de contraseña**: flujo con envío de código de verificación por email.
- **Auto-login**: verificación automática del token al ingresar.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **ARCA / AFIP** | Emisión de facturas electrónicas con CAE, notas de crédito y notas de débito validadas fiscalmente |
| **Mercado Pago** | Suscripciones recurrentes (mensuales y anuales) con webhooks para procesamiento automático de pagos |
| **Nodemailer** | Envío de emails con facturas PDF, verificación de contraseña y notificaciones |
| **Twilio** | Envío de facturas y notificaciones por WhatsApp al paciente |
| **Chart.js** | Gráficos interactivos de estadísticas (tratamientos, presupuestos, turnos) |
| **html2canvas + jsPDF** | Exportación del odontograma y documentos a PDF desde el navegador |
| **React Big Calendar** | Calendario interactivo de turnos con vistas mensual, semanal y diaria |
| **AOS** | Animaciones al hacer scroll |
| **Framer Motion** | Animaciones y transiciones fluidas |

---

## Tecnologías utilizadas

### Aplicación web (Frontend)
- **Next.js 14 (App Router)** — Framework React con rutas basadas en carpetas
- **React 18** — Interfaz de usuario interactiva
- **SASS** — Estilos avanzados con módulos
- **Chart.js + React Chartjs 2** — Gráficos y visualización de estadísticas
- **React Big Calendar** — Calendario de turnos interactivo
- **React DnD** — Drag & drop para elementos del calendario
- **Framer Motion** — Animaciones y transiciones
- **html2canvas + jsPDF** — Captura de pantalla y generación de PDF del odontograma
- **React to Print** — Impresión directa de componentes
- **React Select** — Selectores avanzados con búsqueda
- **Day.js** — Manejo de fechas
- **React Icons** — Iconografía
- **AOS** — Animaciones al hacer scroll
- **Axios** — Comunicación con el servidor
- **Notistack** — Notificaciones visuales
- **Sharp** — Optimización de imágenes

### Servidor (Backend)
- **Node.js + Express** — Servidor web (ES Modules)
- **MongoDB + Mongoose** — Base de datos con relaciones entre entidades
- **Afip.ts** — Integración directa con ARCA/AFIP para facturación electrónica
- **Node Forge** — Generación de claves RSA y CSR para certificados de AFIP
- **Mercado Pago SDK** — Suscripciones recurrentes con webhooks
- **JWT** — Autenticación segura con tokens
- **Argon2** — Encriptación de contraseñas (algoritmo más seguro que Bcrypt)
- **Nodemailer** — Envío de correos electrónicos con plantillas HTML
- **Twilio** — Envío de mensajes por WhatsApp
- **PDF Puppeteer** — Generación de PDFs de facturas y presupuestos en el servidor
- **Multer** — Subida de archivos (firmas, backups, imágenes)
- **UUID** — Generación de identificadores únicos
- **Agenda.js** — Tareas programadas

---

## Arquitectura del sistema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│                         │         │                         │
│   Aplicación Web        │◄───────►│   Servidor API          │
│   (Next.js 14)          │  REST   │   (Node + Express)      │
│                         │         │                         │
│  - Login / Registro     │         │  - Autenticación        │
│  - Dashboard + Stats    │         │  - CRUD Pacientes       │
│  - Calendario turnos    │         │  - Turnos/Eventos       │
│  - Odontograma          │         │  - Odontograma          │
│  - Presupuestos         │         │  - Presupuestos         │
│  - Facturación AFIP     │         │  - Facturación + ARCA   │
│  - Obras sociales       │         │  - Obras sociales       │
│  - Prestaciones         │         │  - Prestaciones         │
│  - Consentimientos      │         │  - Clínicas/Profesional │
│  - Configuración        │         │  - Backup/Restore       │
│  - Backup/Restore       │         │  - Suscripciones MP     │
│                         │         │  - Emails + WhatsApp    │
└─────────────────────────┘         └────────┬────────────────┘
                                             │
┌─────────────────────────┐         ┌────────▼────────────────┐
│                         │         │                         │
│  Mercado Pago           │◄────────│   Base de datos         │
│  (Suscripciones)        │         │   (MongoDB)             │
│                         │         │                         │
└─────────────────────────┘         │  - Usuarios + Roles     │
                                    │  - Pacientes            │
┌─────────────────────────┐         │  - Clínicas             │
│                         │         │  - Profesionales        │
│  ARCA / AFIP            │◄────────│  - Eventos (turnos)     │
│  (Facturación electr.)  │         │  - Odontogramas         │
│                         │         │  - Presupuestos         │
└─────────────────────────┘         │  - Facturas             │
                                    │  - Prestaciones         │
┌─────────────────────────┐         │  - Obras sociales       │
│                         │         │  - Consentimientos      │
│  Email + WhatsApp       │◄────────│  - Suscripciones        │
│  (Nodemailer + Twilio)  │         │                         │
│                         │         └─────────────────────────┘
└─────────────────────────┘
```

---

## Aspectos destacados del desarrollo

- **SaaS con suscripciones**: sistema de planes con pagos recurrentes mediante Mercado Pago, webhooks automáticos y control de estado de suscripción.
- **Facturación electrónica real con AFIP**: integración completa con ARCA/AFIP para emitir Facturas, Notas de Crédito y Notas de Débito tipo A, B y C con CAE válido.
- **Generación de certificados AFIP**: el sistema genera las claves RSA y el CSR necesarios para vincular con ARCA, guiando al usuario paso a paso.
- **Odontograma interactivo**: representación visual completa de la boca con dientes permanentes y temporarios, con registro por pieza, comentarios y exportación a PDF.
- **Calendario de turnos**: calendario interactivo con múltiples vistas, drag & drop, colores por prestación y filtrado por profesional.
- **Multiusuario con roles**: sistema de dueño, profesional y administrador, donde el dueño gestiona clínicas y profesionales, y cada profesional accede solo a sus datos.
- **Backup y restauración**: descarga completa de todos los datos en JSON y restauración inteligente que detecta registros existentes.
- **Notificaciones multicanal**: envío de facturas y notificaciones por email (SMTP configurable) y WhatsApp (Twilio).
- **Generación de PDFs**: facturas, presupuestos y odontogramas se generan como PDF tanto en el servidor (Puppeteer) como en el cliente (html2canvas + jsPDF).
- **Eliminación lógica**: todos los registros usan soft delete para poder restaurarlos si es necesario.
- **Encriptación con Argon2**: se usa Argon2 en lugar de Bcrypt para mayor seguridad en el almacenamiento de contraseñas.
- **Estadísticas visuales**: dashboard con gráficos de Chart.js que muestran la evolución de tratamientos, presupuestos y turnos por mes y por semana.
- **Diseño responsive**: toda la plataforma se adapta a celulares, tablets y escritorio.
