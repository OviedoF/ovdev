# Petnder

Plataforma movil que conecta a duenos de mascotas con servicios pet-friendly, adopcion responsable y una comunidad comprometida con el bienestar animal.

Desarrollada con **React Native + Expo**, la app ofrece dos perfiles diferenciados — **usuario** y **empresa** — cada uno con su propio flujo, navegacion y funcionalidades.

---

## Funcionalidades

### Usuarios

- **Explorar servicios pet-friendly** — Busqueda por categorias (cafes y restaurantes, salud y clinica, guarderias, adiestradores, tiendas, grooming, fundaciones) con filtros por etiquetas y ubicacion.
- **Adopcion de mascotas** — Listado de mascotas en adopcion con filtros por especie, sexo y tamano. Creacion y gestion de publicaciones de adopcion propias. Solicitudes de adopcion con chat integrado.
- **Encuentrame (mascotas perdidas)** — Reportes de mascotas extraviadas con ubicacion, fotos y estado. Busqueda de reportes activos para ayudar a reunir mascotas con sus familias.
- **Beneficios y cupones** — Acceso a descuentos y promociones en establecimientos pet-friendly.
- **Fundaciones** — Directorio de albergues y fundaciones de proteccion animal.
- **Chat en tiempo real** — Mensajeria directa para coordinar adopciones y consultas con empresas.
- **Notificaciones push** — Alertas sobre adopciones, mensajes y novedades.
- **Planes de suscripcion** — Niveles de acceso con beneficios diferenciados.

### Empresas

- **Gestion de servicios** — Alta, edicion y administracion de servicios con imagenes, horarios, ubicacion en mapa (Google Maps), categorias y etiquetas.
- **Cupones y promociones** — Creacion de cupones de descuento con sistema de aprobacion. Estadisticas de uso y canje con codigos QR.
- **Billetera digital** — Balance de ingresos, historial de retiros y estadisticas financieras.
- **Comunidades** — Creacion y administracion de comunidades tematicas con sistema de roles, moderacion de comentarios, aprobacion de miembros y gestion de contenido reportado.
- **Foro** — Publicacion de articulos y discusiones organizados por categoria y etiquetas, con sistema de likes/dislikes y comentarios.
- **Estadisticas** — Metricas de visualizacion de servicios, rendimiento de cupones y analiticas de negocio.
- **Logros** — Sistema de gamificacion para empresas activas en la plataforma.
- **Configuracion avanzada** — Gestion de cuenta, redes sociales vinculadas, seguridad con historial de sesiones, preferencias y eliminacion de cuenta.

### General

- **Onboarding animado** — Introduccion interactiva con animaciones Reanimated.
- **Seleccion de perfil** — Flujo diferenciado para usuarios y empresas desde el primer acceso.
- **Recuperacion de contrasena** — Via email o telefono con codigo de validacion.
- **Mapas integrados** — Selector de ubicacion y visualizacion de servicios cercanos con Google Maps.

---

## Tech Stack

| Capa | Tecnologia |
|---|---|
| Framework | React Native + Expo (SDK 53) |
| Lenguaje | TypeScript |
| Navegacion | Expo Router (file-based routing) |
| Estado | React Hooks + AsyncStorage |
| HTTP Client | Axios (wrapper centralizado) |
| UI/Animaciones | React Native Reanimated, Expo Linear Gradient |
| Mapas | React Native Maps + Google Places Autocomplete |
| Multimedia | Expo Image Picker, Image Viewing, Sharing |
| Notificaciones | Expo Notifications |
| Graficos | React Native Chart Kit |
| QR | React Native QRCode SVG |
| Calendario | React Native Calendars |
| Backend | Node.js + Express + MongoDB (API REST) |
| Autenticacion | JWT |

---

## Arquitectura

```
app/
├── pages/
│   ├── usuario/          # Flujo de usuario
│   │   ├── home/         # Home, planes, carruseles
│   │   ├── adoption/     # CRUD adopciones, filtros
│   │   ├── foundMe/      # Reportes de mascotas perdidas
│   │   ├── benefits/     # Restaurantes, cupones, descuentos
│   │   ├── find/         # Busqueda de servicios por categoria
│   │   ├── chats/        # Mensajeria y solicitudes de adopcion
│   │   ├── fundations/   # Directorio de fundaciones
│   │   ├── notifications/# Centro de notificaciones
│   │   └── config/       # Terminos, privacidad
│   ├── empresa/          # Flujo de empresa
│   │   ├── home/         # Dashboard
│   │   ├── servicios/    # CRUD servicios, cupones, estadisticas
│   │   ├── wallet/       # Balance, retiros, estadisticas
│   │   ├── community/    # Comunidades, roles, moderacion
│   │   ├── Forum/        # Foro de discusion
│   │   └── config/       # Cuenta, seguridad, logros, redes sociales
│   ├── admin/            # Panel de aprobacion (cupones, pagos, destacados)
│   └── change-password/  # Recuperacion de contrasena
├── routes.ts             # Definicion centralizada de rutas
└── utils/
    └── api.ts            # Cliente HTTP con JWT automatico
```

---

## Instalacion

```bash
# Clonar el repositorio
git clone <repo-url>
cd petnder

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npx expo start

# Ejecutar en dispositivo/emulador
npx expo run:android
npx expo run:ios
```

---

## Screenshots

> _Proximamente_

---

## Contacto

Desarrollado por **Federico Oviedo** — [hoministudio.dev@gmail.com](mailto:hoministudio.dev@gmail.com)
