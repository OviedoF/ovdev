# Saucedo Abogados - Sistema de Gestión Legal con Firma Electrónica e Inteligencia Artificial

Sistema integral de gestión para estudio jurídico con administración de casos legales en 6 pestañas especializadas, gestión de clientes, presupuestos con flujo de aprobación, cobranzas, calendario integrado, 6 tipos de reportes, indexación inteligente de documentos con IA (OCR y resumen automático), firma electrónica con SignNow, integración con Google Drive y Google Calendar, panel de administración con Filament, aplicación móvil complementaria, y 3 roles diferenciados (administrador, abogado y autorizador). Backend con 48 modelos y 88 endpoints.

---

## Sobre el proyecto

Saucedo Abogados es una plataforma diseñada para digitalizar y optimizar las operaciones de un estudio de abogados. Los abogados gestionan sus casos con toda la documentación asociada, los presupuestos pasan por un flujo de aprobación con autorizadores, las cobranzas se rastrean hasta su cobro efectivo, y los documentos legales se firman electrónicamente con SignNow. El sistema incluye inteligencia artificial para indexar documentos automáticamente: lee PDFs con OCR, extrae la información relevante y genera resúmenes, ahorrando horas de trabajo manual. Todo se sincroniza con Google Drive para almacenamiento de archivos y Google Calendar para eventos y audiencias.

---

## Funcionalidades principales

### Gestión de casos legales

- **Casos con 6 pestañas**: cada caso tiene información general, partes involucradas, documentos, movimientos procesales, notas internas y tareas pendientes.
- **Estados del caso**: seguimiento del ciclo de vida del caso (nuevo, en proceso, en espera, cerrado, archivado).
- **Asignación de abogados**: cada caso se asigna a uno o más abogados del estudio.
- **Documentos del caso**: subida y organización de documentos legales con sincronización a Google Drive.
- **Movimientos procesales**: registro cronológico de todas las actuaciones judiciales.
- **Notas internas**: anotaciones privadas entre los abogados del caso.
- **Tareas pendientes**: checklist de acciones por realizar con fecha límite y responsable.

### Gestión de clientes

- **Directorio de clientes**: datos personales, empresariales y de contacto.
- **Historial de casos**: todos los casos asociados a cada cliente.
- **Documentación del cliente**: archivos y documentos vinculados.
- **Comunicaciones**: registro de comunicaciones con el cliente.

### Presupuestos con aprobación

- **Creación de presupuestos**: presupuestos detallados con conceptos, montos y condiciones.
- **Flujo de aprobación**: el presupuesto pasa por el autorizador antes de enviarse al cliente.
- **Estados del presupuesto**: borrador, pendiente de aprobación, aprobado, enviado, aceptado, rechazado.
- **Conversión a caso**: al aceptarse el presupuesto, se crea automáticamente el caso asociado.

### Cobranzas

- **Seguimiento de pagos**: registro de pagos parciales y totales.
- **Estados de cobranza**: pendiente, parcialmente cobrado, cobrado, vencido.
- **Recordatorios**: alertas de cobranzas próximas a vencer.
- **Reportes de cobranza**: informes de estado de cuentas por cobrar.

### Calendario integrado

- **FullCalendar**: calendario visual con eventos, audiencias y vencimientos.
- **Sincronización con Google Calendar**: los eventos se sincronizan bidirecionalmente.
- **Tipos de eventos**: audiencias, reuniones, vencimientos de plazos y tareas programadas.
- **Vista por día, semana y mes**: múltiples vistas para planificación.

### Reportes (6 tipos)

- **Reporte de casos**: estado y avance de todos los casos activos.
- **Reporte de facturación**: ingresos por período, abogado y cliente.
- **Reporte de cobranzas**: estado de cuentas por cobrar y vencimientos.
- **Reporte de productividad**: métricas de trabajo por abogado.
- **Reporte de clientes**: análisis de cartera de clientes.
- **Reporte de presupuestos**: conversión de presupuestos y montos aprobados.

### Indexación de documentos con IA

- **OCR de documentos**: lectura automática de texto en documentos PDF escaneados.
- **Resumen automático**: la IA genera un resumen del contenido del documento.
- **Extracción de datos**: identificación automática de fechas, partes, montos y referencias.
- **Búsqueda inteligente**: buscar en el contenido de todos los documentos indexados.

### Firma electrónica

- **Integración con SignNow**: envío de documentos para firma electrónica.
- **Flujo de firma**: el documento se envía al firmante, quien firma desde cualquier dispositivo.
- **Estado de firma**: seguimiento en tiempo real del estado de la firma (enviado, visto, firmado).
- **Documentos firmados**: descarga del documento con la firma electrónica válida.

### Panel de administración (Filament)

- **Dashboard administrativo**: métricas del estudio con Filament PHP.
- **Gestión de usuarios y roles**: 3 roles (administrador, abogado, autorizador) con permisos granulares.
- **Configuración del sistema**: parámetros generales, tipos de caso, categorías de documentos.
- **Auditoría**: registro de todas las acciones realizadas en el sistema.

### Aplicación móvil

- **Consulta de casos**: ver el estado y detalle de los casos desde el celular.
- **Notificaciones push**: alertas de eventos, audiencias y tareas pendientes.
- **Calendario**: vista del calendario con próximos eventos.
- **Acceso rápido**: funcionalidades esenciales para el abogado en movimiento.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **SignNow** | Firma electrónica de documentos legales con validez jurídica |
| **Google Drive API** | Almacenamiento y sincronización de documentos del caso |
| **Google Calendar API** | Sincronización bidireccional de eventos, audiencias y vencimientos |
| **OpenAI (IA)** | OCR, resumen automático y extracción de datos de documentos legales |
| **FullCalendar** | Calendario visual interactivo en la interfaz web |
| **Filament PHP** | Panel de administración con dashboard y gestión de recursos |
| **DomPDF** | Generación de PDFs para presupuestos, reportes y documentos |
| **Playwright** | Tests end-to-end automatizados |

---

## Tecnologías utilizadas

### Sitio web (Frontend)
- **React 19** — Interfaz de usuario
- **Vite** — Bundler y servidor de desarrollo
- **TypeScript** — Tipado estático
- **Zustand** — Estado global de la aplicación
- **React Router DOM 7** — Navegación SPA
- **FullCalendar** — Calendario interactivo
- **React Hook Form + Zod** — Formularios y validación
- **Tailwind CSS** — Estilos utilitarios
- **Axios** — Comunicación con el servidor API
- **React Toastify** — Notificaciones visuales

### Servidor (Backend)
- **Laravel 10** — Framework PHP para API REST
- **MySQL** — Base de datos relacional
- **Laravel Sanctum** — Autenticación por tokens
- **Filament v3** — Panel de administración
- **Spatie Permission** — Roles y permisos granulares
- **DomPDF** — Generación de PDFs
- **Eloquent ORM** — 48 modelos con relaciones complejas
- **88 endpoints** — API REST completa
- **Swagger/OpenAPI** — Documentación de la API

### Aplicación móvil
- **React Native** — Aplicación multiplataforma
- **Expo** — Plataforma de desarrollo móvil
- **TypeScript** — Tipado estático

### Testing
- **Playwright** — Tests end-to-end automatizados
- **PHPUnit** — Tests unitarios del backend

---

## Arquitectura del sistema

```
┌────────────────────────┐  ┌────────────────────────┐
│                        │  │                        │
│   Sitio Web            │  │   App Móvil            │
│   (React 19 + Vite)    │  │   (React Native +Expo) │
│                        │  │                        │
│  - Casos (6 pestañas)  │  │  - Consulta de casos   │
│  - Clientes            │  │  - Calendario           │
│  - Presupuestos        │  │  - Notificaciones      │
│  - Cobranzas           │  │  - Acceso rápido       │
│  - Calendario          │  │                        │
│  - 6 Reportes          │  │                        │
│  - Firma electrónica   │  │                        │
│                        │  │                        │
└───────────┬────────────┘  └───────────┬────────────┘
            │                           │
            └─────────┬─────────────────┘
                      │ REST API
                      │
┌─────────────────────▼───────────────────────────────┐
│                                                     │
│   Servidor API (Laravel 10)                         │
│                                                     │
│  - Autenticación Sanctum + 3 Roles                  │
│  - 48 Modelos + 88 Endpoints                        │
│  - Gestión de casos + Documentos                    │
│  - Presupuestos + Flujo de aprobación               │
│  - Cobranzas + Seguimiento                          │
│  - IA: OCR + Resumen + Extracción de datos          │
│  - Generación de PDFs (DomPDF)                      │
│  - Panel Filament (Administración)                  │
│                                                     │
└───┬──────────┬──────────┬──────────┬────────────────┘
    │          │          │          │
┌───▼───┐ ┌───▼───┐ ┌───▼───┐ ┌───▼────────┐
│MySQL  │ │SignNow│ │Google │ │Google      │
│       │ │(Firma │ │Drive  │ │Calendar    │
│48     │ │elect.)│ │(Docs) │ │(Eventos)   │
│tablas │ │       │ │       │ │            │
└───────┘ └───────┘ └───────┘ └────────────┘
```

---

## Flujo de un caso legal

```
Se crea un presupuesto para el cliente
        ↓
El autorizador revisa y aprueba el presupuesto
        ↓
Se envía al cliente → El cliente acepta
        ↓
Se crea automáticamente el caso con la información del presupuesto
        ↓
El abogado gestiona el caso en 6 pestañas:
  - Información general + partes involucradas
  - Documentos (se suben y sincronizan con Google Drive)
  - Movimientos procesales (actuaciones judiciales)
  - Notas internas entre abogados
  - Tareas pendientes con responsables
        ↓
Los documentos se indexan con IA (OCR + resumen automático)
        ↓
Se envían documentos para firma electrónica con SignNow
        ↓
Las audiencias se sincronizan con Google Calendar
        ↓
Se generan cobranzas → Se registran los pagos
        ↓
Se generan reportes de avance, facturación y productividad
```

---

## Aspectos destacados del desarrollo

- **Indexación de documentos con IA**: el sistema lee documentos PDF con OCR, extrae información relevante y genera resúmenes automáticos, ahorrando horas de trabajo manual en la revisión documental.
- **Firma electrónica con SignNow**: integración completa para enviar, firmar y descargar documentos con validez jurídica desde cualquier dispositivo.
- **Triple integración Google**: sincronización con Google Drive para documentos y Google Calendar para eventos, además de autenticación OAuth.
- **48 modelos con relaciones complejas**: base de datos robusta con 48 entidades y 88 endpoints para cubrir todas las operaciones del estudio.
- **Flujo de aprobación de presupuestos**: workflow con 3 roles (administrador, abogado, autorizador) que garantiza la revisión antes de enviar al cliente.
- **6 tipos de reportes**: informes detallados de casos, facturación, cobranzas, productividad, clientes y presupuestos para la toma de decisiones.
- **Panel Filament completo**: administración del sistema con dashboard, gestión de recursos y configuración, construido con Filament v3.
- **Casos con 6 pestañas especializadas**: cada caso tiene vistas dedicadas para información, documentos, movimientos, notas, tareas y partes, permitiendo una gestión integral.
- **Tests E2E con Playwright**: suite de tests automatizados que verifican flujos completos de usuario.
- **Aplicación móvil complementaria**: acceso a funcionalidades esenciales desde el celular para abogados en movimiento.
- **Zustand para estado global**: gestión de estado moderna y eficiente en el frontend con React 19.
