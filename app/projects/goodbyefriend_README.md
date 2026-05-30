# Goodbye Friend - Cementerio Virtual 3D para Mascotas con Tumbas Interactivas

Plataforma de memorial virtual para mascotas con un cementerio 3D completo construido con Three.js y React Three Fiber. El usuario recorre un cementerio tridimensional con más de 1.075 parcelas de tumbas distribuidas en 25+ filas, 3 estilos de tumbas diferentes, 57 objetos 3D de tributo, 10 nichos circulares, mausoleos, cámara híbrida (pointer lock en escritorio + joysticks en móvil), minimapa de navegación, rendering por distancia, perfiles de mascotas con galerías de fotos, memoriales colaborativos, marketplace de colaboradores, y pagos con Stripe. Incluye aplicación móvil con React Native y backend con Laravel.

---

## Sobre el proyecto

Goodbye Friend es una plataforma de homenaje digital que permite a las personas crear un memorial virtual para sus mascotas fallecidas dentro de un cementerio 3D interactivo. Los usuarios eligen una parcela en el cementerio, crean el perfil de su mascota con fotos y recuerdos, seleccionan el estilo de tumba y la decoran con objetos 3D de tributo (flores, velas, juguetes, fotos). Otros usuarios pueden visitar el cementerio, recorrerlo en primera persona como si caminaran por un cementerio real, dejar tributos en las tumbas y compartir mensajes de condolencia. El sistema incluye un marketplace donde artistas pueden ofrecer servicios de personalización de memoriales.

---

## Funcionalidades principales

### Cementerio 3D interactivo

- **Mundo 3D completo**: cementerio tridimensional con terreno, césped, caminos, árboles, bancas y decoración ambiental.
- **25+ filas de tumbas**: más de 1.075 parcelas distribuidas en filas con 43 posiciones cada una.
- **3 estilos de tumba**: tumba simple, tumba con lápida decorada y tumba premium con adornos.
- **57 objetos 3D de tributo**: flores, velas, coronas, juguetes, marcos de fotos, peluches y más para decorar las tumbas.
- **10 nichos circulares**: estructura circular con nichos individuales para urnas.
- **Mausoleos**: estructuras arquitectónicas especiales para memoriales premium.
- **Iluminación dinámica**: sistema de luces que simula diferentes momentos del día.
- **Rendering por distancia**: los objetos lejanos se simplifican automáticamente para mantener el rendimiento.

### Sistema de cámara y navegación

- **Cámara en primera persona (escritorio)**: movimiento con pointer lock (mouse capturado) para recorrer el cementerio como un videojuego en primera persona.
- **Joysticks virtuales (móvil)**: controles táctiles con joystick izquierdo para movimiento y joystick derecho para rotación de cámara.
- **Minimapa**: mapa en miniatura del cementerio con la posición actual del usuario y las tumbas ocupadas.
- **Navegación a tumba**: sistema para ir directamente a una tumba específica.
- **Colisiones**: el usuario no puede atravesar tumbas, paredes ni objetos del cementerio.

### Perfiles de mascotas y memoriales

- **Perfil de la mascota**: nombre, especie, raza, fecha de nacimiento, fecha de fallecimiento y biografía.
- **Galería de fotos**: subida de múltiples fotos de la mascota con orden personalizable.
- **Mensajes de condolencia**: otros usuarios pueden dejar mensajes en el memorial.
- **Tributos virtuales**: visitantes pueden dejar objetos 3D como flores y velas en las tumbas.
- **Memorial público o privado**: el dueño elige si el memorial es visible para todos o solo para invitados.

### Marketplace de colaboradores

- **Artistas y diseñadores**: profesionales que ofrecen servicios de personalización de memoriales.
- **Servicios disponibles**: diseño de tumbas personalizadas, objetos 3D exclusivos, retratos digitales.
- **Perfiles de colaboradores**: portfolio, calificaciones y precios.
- **Contratación**: los usuarios contratan colaboradores directamente desde la plataforma.

### Pagos y planes

- **Integración con Stripe**: pagos seguros con tarjeta de crédito y débito.
- **Planes de memorial**: diferentes niveles de servicio (básico, premium, mausoleo).
- **Compra de tributos**: objetos 3D adicionales disponibles para compra.
- **Pagos a colaboradores**: sistema de pagos para el marketplace de servicios.

### Aplicación móvil

- **Recorrido 3D móvil**: experiencia del cementerio adaptada para dispositivos móviles con joysticks táctiles.
- **Gestión de perfil**: crear y editar el perfil de la mascota desde el celular.
- **Galería de fotos**: subir fotos desde la cámara o galería del dispositivo.
- **Notificaciones**: alertas de tributos, mensajes y eventos del memorial.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Three.js + React Three Fiber** | Motor 3D para el cementerio virtual con tumbas, objetos y ambiente |
| **Drei** | Helpers y componentes para Three.js (cámara, controles, loaders, textos 3D) |
| **Stripe** | Procesamiento de pagos para planes, tributos y marketplace |
| **Laravel Sanctum** | Autenticación segura por tokens |
| **Expo Camera + Image Picker** | Captura y selección de fotos desde la app móvil |

---

## Tecnologías utilizadas

### Cementerio 3D (Frontend Web)
- **React 18** — Interfaz de usuario
- **Three.js 0.181** — Motor gráfico 3D
- **React Three Fiber (@react-three/fiber)** — React renderer para Three.js
- **Drei (@react-three/drei)** — Componentes y helpers para R3F
- **React Router DOM 6** — Navegación SPA
- **Axios** — Comunicación con el servidor API
- **CSS Modules** — Estilos aislados por componente

### Aplicación móvil
- **React Native** — Aplicación multiplataforma
- **Expo** — Plataforma de desarrollo móvil
- **React Navigation** — Navegación nativa
- **Expo Camera + Image Picker** — Captura de fotos
- **AsyncStorage** — Almacenamiento local

### Servidor (Backend)
- **Laravel 12** — Framework PHP para API REST
- **MySQL** — Base de datos relacional
- **Laravel Sanctum** — Autenticación por tokens
- **Stripe PHP** — Procesamiento de pagos
- **Eloquent ORM** — Modelos con relaciones

---

## Arquitectura del sistema

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   Cementerio 3D (React + Three.js + R3F)                │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Escena 3D                                        │  │
│  │                                                   │  │
│  │  - Terreno + Césped + Caminos                     │  │
│  │  - 25+ filas × 43 posiciones = 1.075+ parcelas    │  │
│  │  - 3 estilos de tumba                             │  │
│  │  - 57 objetos 3D de tributo                       │  │
│  │  - 10 nichos circulares                           │  │
│  │  - Mausoleos                                      │  │
│  │  - Árboles, bancas, decoración ambiental          │  │
│  │  - Iluminación dinámica                           │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Cámara 1ra  │  │  Joysticks   │  │  Minimapa    │  │
│  │  persona     │  │  táctiles    │  │  + Navegación │  │
│  │  (desktop)   │  │  (móvil)     │  │              │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                         │
│  - Perfiles de mascotas + Galerías                      │
│  - Memoriales + Condolencias                            │
│  - Marketplace de colaboradores                         │
│  - Planes + Pagos (Stripe)                              │
│                                                         │
└──────────────────────────┬──────────────────────────────┘
                           │
                      REST API
                           │
┌────────────────────┐     │     ┌────────────────────────┐
│                    │     │     │                        │
│   App Móvil        │     │     │   Servidor API         │
│   (React Native    │─────┼────►│   (Laravel 12)         │
│    + Expo)         │     │     │                        │
│                    │     │     │  - Autenticación       │
│  - Cementerio 3D   │     │     │  - CRUD Mascotas       │
│    con joysticks   │     │     │  - Memoriales          │
│  - Perfiles        │     │     │  - Tributos            │
│  - Galería fotos   │     │     │  - Marketplace         │
│  - Notificaciones  │     │     │  - Pagos Stripe        │
│                    │     │     │  - Galerías            │
└────────────────────┘     │     │                        │
                           │     └───────────┬────────────┘
                           │                 │
                           │     ┌───────────▼────────────┐
                           │     │  MySQL                  │
                           │     │                        │
                           │     │  - Mascotas + Perfiles  │
                           │     │  - Memoriales           │
                           │     │  - Parcelas + Tumbas    │
                           │     │  - Tributos + Objetos   │
                           │     │  - Colaboradores        │
                           │     │  - Pagos + Planes       │
                           │     │  - Usuarios             │
                           │     └────────────────────────┘
                           │
                      ┌────▼─────────────┐
                      │  Stripe          │
                      │  (Pagos)         │
                      └──────────────────┘
```

---

## Flujo de creación de un memorial

```
El usuario se registra y elige un plan (básico, premium o mausoleo)
        ↓
Realiza el pago con Stripe
        ↓
Selecciona una parcela disponible en el cementerio 3D
        ↓
Crea el perfil de su mascota (nombre, especie, fechas, biografía)
        ↓
Sube fotos a la galería del memorial
        ↓
Elige el estilo de tumba (simple, decorada o premium)
        ↓
Decora la tumba con objetos 3D de tributo (flores, velas, juguetes)
        ↓
El memorial queda visible en el cementerio 3D
        ↓
Otros usuarios pueden:
  - Recorrer el cementerio y encontrar la tumba
  - Dejar tributos virtuales (flores, velas)
  - Escribir mensajes de condolencia
  - Compartir el memorial con otros
```

---

## Aspectos destacados del desarrollo

- **Cementerio 3D completo con Three.js**: mundo tridimensional navegable con más de 1.075 parcelas, 3 estilos de tumba, 57 objetos de tributo, nichos circulares y mausoleos, todo renderizado en tiempo real en el navegador.
- **Cámara híbrida desktop/móvil**: en escritorio se usa pointer lock para movimiento en primera persona como un videojuego; en móvil se usan joysticks virtuales táctiles para la misma experiencia.
- **Rendering optimizado por distancia**: los objetos 3D lejanos se simplifican o se ocultan automáticamente para mantener 60fps incluso con miles de objetos en escena.
- **57 objetos 3D de tributo**: catálogo extenso de modelos 3D que los usuarios pueden colocar en las tumbas para personalizar el memorial.
- **Minimapa de navegación**: mapa en miniatura que muestra la posición del usuario en el cementerio y permite navegar directamente a una tumba específica.
- **Marketplace de colaboradores**: ecosistema donde artistas ofrecen servicios de personalización, creando una comunidad alrededor de la plataforma.
- **Tres plataformas**: web 3D con Three.js/R3F, aplicación móvil con React Native/Expo, y backend robusto con Laravel 12.
- **Stripe para monetización**: planes de memorial, compra de tributos y pagos a colaboradores, todo procesado de forma segura con Stripe.
- **Sistema de colisiones**: el usuario no puede atravesar objetos del cementerio, creando una experiencia de recorrido realista.
- **Galería de fotos por memorial**: cada mascota tiene su propia galería con fotos subidas por el dueño y por visitantes autorizados.
