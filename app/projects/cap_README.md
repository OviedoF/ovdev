# CAP Medical - Aplicación Móvil de Gestión de Servicios Médicos y Cirugías

Aplicación móvil multiplataforma para la gestión integral de servicios médicos y cirugías. Permite administrar servicios quirúrgicos con seguimiento de estados y movimientos, gestionar técnicos con directorio y perfiles detallados, controlar ubicaciones y hospitales, registrar pagos y contra recibos, administrar expedientes de pacientes con subida de archivos, y recibir notificaciones. Incluye sistema de permisos por rol, creación de servicios en formulario de 3 pasos con catálogos dinámicos, registro de movimientos con geolocalización GPS y adjuntos, gráficos y calendarios, cámara integrada para fotos y video, y generación de códigos QR. Se conecta a una API REST con autenticación por tokens.

---

## Sobre el proyecto

CAP Medical es una aplicación diseñada para la gestión operativa de una empresa de servicios médicos y quirúrgicos. El personal administrativo programa los servicios asignando técnicos, cirugías, ubicaciones, médicos y empresas aseguradoras. Los técnicos en campo registran los movimientos del servicio (checkpoints, incidencias) con la ubicación GPS y fotos adjuntas. El sistema lleva un historial completo de cambios, gestiona los pagos con contra recibos, y almacena los expedientes de los pacientes. Cada usuario tiene permisos específicos que controlan qué secciones puede ver y qué acciones puede realizar.

---

## Funcionalidades principales

### Gestión de servicios

- **Listado de servicios**: ver todos los servicios con filtro por estado (programado, en proceso, completado, cancelado) y búsqueda.
- **Creación de servicios en 3 pasos**: formulario guiado con selección de cliente, empresa, técnico, cirugía, prioridad, ubicación, médico, hospital, aseguradora, forma de pago y condiciones de pago. Catálogos dinámicos cargados desde el servidor.
- **Detalle del servicio**: vista completa con toda la información del servicio en 10 pantallas especializadas.
- **Movimientos del servicio**: registro de checkpoints e incidencias con tipo, fecha, hora, coordenadas GPS y archivos adjuntos.
- **Pagos y contra recibos**: historial de pagos del servicio, creación de nuevos contra recibos con fecha y monto.
- **Información del paciente**: datos del paciente con edad y subida de expedientes médicos.
- **Remisiones**: gestión de productos asociados al servicio.
- **Recibos**: documentación y almacenamiento de recibos del servicio.
- **Historial de cambios**: auditoría completa con usuario, fecha y detalle de cada modificación.

### Directorio de técnicos

- **Listado de técnicos**: directorio buscable con agrupación alfabética.
- **Filtro por rol**: filtrar entre técnico auxiliar, técnico titular o todos.
- **Perfil del técnico**: nombre, rol, teléfono, email, RFC, NSS, fecha de ingreso, fecha de baja y estado de empleo.

### Gestión de ubicaciones

- **Listado de ubicaciones**: hospitales y centros médicos con búsqueda y filtro por estado (activo/inactivo).
- **Detalle de ubicación**: nombre, tipo, teléfono, dirección completa (calle, número exterior/interior, colonia, municipio, ciudad, código postal, país), sitio web.

### Gestión de cirugías

- **Categorías de cirugías**: listado de tipos de cirugía con categoría, descripción y estado.
- **Edición de cirugías**: modificar categoría, descripción y estado (activo/inactivo) con modal de edición y confirmación.

### Notificaciones

- **Centro de notificaciones**: listado de notificaciones con asunto, mensaje, estado de lectura y fecha.

### Perfil y cuenta

- **Datos del usuario**: ver y editar información personal.
- **Cambio de contraseña**: formulario de cambio de contraseña.
- **Cierre de sesión**: logout con limpieza de token.

### Dashboard

- **Pantalla principal**: accesos directos a servicios, técnicos, cirugías, ubicaciones y perfil.
- **Saludo personalizado**: nombre del usuario y fecha actual.
- **Icono de notificaciones**: acceso rápido al centro de notificaciones.
- **Búsqueda**: barra de búsqueda integrada.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **API REST (CAP Soluciones)** | Servidor backend para autenticación, servicios, técnicos, ubicaciones, cirugías, pagos, notificaciones y catálogos |
| **Google Maps** | Mapas interactivos para visualización de ubicaciones de hospitales y servicios |
| **Expo Location** | Captura de coordenadas GPS al registrar movimientos de servicios |
| **Expo Camera** | Captura de fotos y video para adjuntar a movimientos y expedientes |
| **Expo Document Picker** | Selección de archivos para subir expedientes médicos y documentación |
| **Expo Image Picker** | Selección de imágenes desde la galería del dispositivo |
| **Google Places Autocomplete** | Autocompletado de direcciones al buscar ubicaciones |
| **QR Code SVG** | Generación de códigos QR dentro de la aplicación |
| **React Native Charts** | Gráficos y visualización de datos estadísticos |
| **React Native Calendars** | Calendarios visuales para selección de fechas y rangos |

---

## Tecnologías utilizadas

- **React Native 0.81** — Aplicación móvil multiplataforma (Android, iOS y Web)
- **Expo ~54** — Plataforma de desarrollo y compilación
- **React 19** — Interfaz de usuario
- **TypeScript** — Tipado estático completo
- **Expo Router** — Navegación basada en archivos
- **React Navigation** — Stack y Bottom Tabs para navegación
- **React Native Maps** — Mapas de Google Maps integrados
- **Expo Location** — Geolocalización GPS
- **Expo Camera** — Cámara para fotos y video
- **Expo Document Picker** — Selección de documentos
- **Expo Image Picker** — Selección de imágenes
- **Expo AV** — Reproducción de audio y video
- **Expo Clipboard** — Copiar al portapapeles
- **React Native Chart Kit** — Gráficos estadísticos
- **React Native Calendars** — Calendarios y rangos de fechas
- **React Native QRCode SVG** — Generación de códigos QR
- **React Native Reanimated** — Animaciones avanzadas
- **React Native Gesture Handler** — Gestos táctiles
- **AsyncStorage** — Almacenamiento local de tokens y preferencias
- **Axios** — Comunicación con el servidor API
- **Context API** — Estado global y permisos del usuario
- **Ionicons + MaterialIcons + FontAwesome + Lucide** — Iconografía

---

## Arquitectura del sistema

```
┌─────────────────────────────────────────────┐
│                                             │
│   App Móvil (React Native + Expo)           │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │  Pantallas principales                │  │
│  │                                       │  │
│  │  - Login                              │  │
│  │  - Dashboard                          │  │
│  │  - Servicios (listado + detalle)      │  │
│  │    · Info del servicio                │  │
│  │    · Movimientos + GPS + Adjuntos     │  │
│  │    · Pagos + Contra recibos           │  │
│  │    · Paciente + Expedientes           │  │
│  │    · Remisiones + Recibos             │  │
│  │    · Historial de cambios             │  │
│  │  - Crear servicio (3 pasos)           │  │
│  │  - Técnicos (directorio + perfil)     │  │
│  │  - Ubicaciones (listado + detalle)    │  │
│  │  - Cirugías (listado + edición)       │  │
│  │  - Notificaciones                     │  │
│  │  - Perfil                             │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐ │
│  │  Cámara  │  │   GPS    │  │ Archivos  │ │
│  │  (Foto + │  │ (Ubica-  │  │ (Docs +   │ │
│  │  Video)  │  │  ción)   │  │ Imágenes) │ │
│  └──────────┘  └──────────┘  └───────────┘ │
│                                             │
└──────────────────┬──────────────────────────┘
                   │
              REST API + Bearer Token
                   │
┌──────────────────▼──────────────────────────┐
│                                             │
│   Servidor API (CAP Soluciones)             │
│                                             │
│  - Autenticación + Permisos por rol         │
│  - CRUD Servicios + Movimientos             │
│  - CRUD Técnicos                            │
│  - CRUD Ubicaciones                         │
│  - CRUD Cirugías                            │
│  - Pagos + Contra recibos                   │
│  - Notificaciones                           │
│  - Catálogos (clientes, empresas, médicos,  │
│    hospitales, aseguradoras, prioridades)    │
│  - Expedientes de pacientes                 │
│  - Historial de auditoría                   │
│                                             │
└─────────────────────────────────────────────┘

┌───────────────────┐  ┌───────────────────┐
│                   │  │                   │
│  Google Maps      │  │  Google Places    │
│  (Ubicaciones)    │  │  (Autocomplete)   │
│                   │  │                   │
└───────────────────┘  └───────────────────┘
```

---

## Flujo de un servicio médico

```
El administrador crea un nuevo servicio en 3 pasos:
  Paso 1: selecciona cliente, empresa y técnico
  Paso 2: selecciona cirugía, prioridad, ubicación y médico
  Paso 3: selecciona hospital, aseguradora, forma de pago y condiciones
        ↓
El servicio queda en estado "Programado"
        ↓
El técnico en campo registra movimientos:
  - Checkpoint o incidencia con tipo y descripción
  - Coordenadas GPS automáticas
  - Fotos o archivos adjuntos
        ↓
El servicio pasa a estado "En Proceso"
        ↓
Se registran los pagos con contra recibos (fecha y monto)
        ↓
Se sube el expediente del paciente con documentación
        ↓
El servicio se completa → Queda el historial completo de auditoría
```

---

## Aspectos destacados del desarrollo

- **Sistema de permisos granular**: cada usuario tiene permisos específicos (ver servicios, ver técnicos, ver ubicaciones, ver cirugías, editar cirugías, crear servicios) que controlan qué secciones ve y qué acciones puede realizar.
- **Creación de servicios en 3 pasos**: formulario guiado con catálogos dinámicos cargados desde el servidor (clientes, empresas, técnicos, cirugías, prioridades, ubicaciones, médicos, hospitales, aseguradoras, formas de pago).
- **10 pantallas especializadas por servicio**: cada servicio tiene pantallas dedicadas para información general, movimientos, pagos, paciente, expedientes, remisiones, recibos e historial de cambios.
- **Movimientos con geolocalización**: al registrar un checkpoint o incidencia, se capturan automáticamente las coordenadas GPS del dispositivo junto con archivos adjuntos.
- **Auditoría completa**: historial de todos los cambios realizados en cada servicio con usuario, fecha y detalle de la modificación.
- **Cámara integrada**: captura de fotos y video directamente desde la app para adjuntar a movimientos y expedientes.
- **TypeScript completo**: tipado estático en toda la aplicación para mayor robustez y mantenibilidad.
- **Expo Router con navegación por archivos**: estructura de rutas organizada y escalable.
- **Gráficos y calendarios**: visualización de datos estadísticos con gráficos y selección de fechas con calendarios interactivos.
- **Diseño responsive**: la app funciona en iOS, Android y Web con manejo de áreas seguras y teclado.
