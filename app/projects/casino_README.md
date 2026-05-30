# Casino Online - Plataforma de Juegos de Azar con Apuestas en Tiempo Real

Plataforma de casino online completa con 5 juegos interactivos (Tragamonedas, Aviator, Blackjack, Ruleta y Hunt the Ace), sistema de apuestas en tiempo real con WebSocket, panel de administración con monitoreo de usuarios y juegos, sistema de referidos con bonificación de $10 por referido, programa de staking BFG, gestión de depósitos y retiros, notificaciones por email, y dashboard con gráficos estadísticos. Incluye CDN de imágenes con ImageKit, autenticación segura con JWT y roles diferenciados.

---

## Sobre el proyecto

Casino Online es una plataforma de entretenimiento digital que permite a los usuarios jugar a distintos juegos de azar con apuestas reales. Los jugadores se registran, depositan fondos, eligen entre 5 juegos diferentes y pueden retirar sus ganancias. El sistema incluye un programa de referidos que recompensa a los usuarios que invitan a nuevos jugadores, un programa de staking BFG para generar rendimientos, y un panel de administración completo donde los operadores monitorean la actividad de los usuarios, los juegos y las transacciones financieras en tiempo real.

---

## Funcionalidades principales

### Juegos disponibles

- **Tragamonedas (Slots)**: máquina tragamonedas con múltiples líneas de pago, símbolos animados y jackpots.
- **Aviator**: juego de apuestas con multiplicador creciente donde el jugador decide cuándo cobrar antes de que el avión se vaya.
- **Blackjack**: juego de cartas clásico contra la casa con reglas estándar de casino.
- **Ruleta**: ruleta europea con apuestas a números, colores, pares/impares y secciones.
- **Hunt the Ace (Caza el As)**: juego de cartas donde el jugador debe encontrar el as entre las cartas mezcladas.

### Sistema de apuestas

- **Apuestas en tiempo real**: comunicación instantánea por WebSocket para actualizaciones de juego.
- **Historial de apuestas**: registro completo de todas las apuestas realizadas por cada usuario.
- **Balance en tiempo real**: actualización instantánea del saldo después de cada apuesta.
- **Límites configurables**: límites de apuesta mínimos y máximos por juego.

### Gestión financiera

- **Depósitos**: múltiples métodos de depósito con procesamiento automático.
- **Retiros**: solicitud de retiro con flujo de aprobación.
- **Historial de transacciones**: registro detallado de todos los movimientos financieros.
- **Balance de cuenta**: saldo disponible y saldo en juego.

### Sistema de referidos

- **Código de referido único**: cada usuario recibe un código personalizado para compartir.
- **Bonificación por referido**: $10 de bonificación por cada nuevo usuario registrado con el código.
- **Panel de referidos**: seguimiento de usuarios referidos y bonificaciones acumuladas.
- **Estadísticas de referidos**: métricas de conversión y rendimiento del programa.

### Programa BFG Staking

- **Staking de tokens**: los usuarios pueden depositar tokens BFG para generar rendimientos.
- **Rendimientos calculados**: cálculo automático de ganancias por staking.
- **Panel de staking**: visualización del capital invertido y ganancias generadas.

### Panel de administración

- **Dashboard con gráficos**: métricas generales del casino con Chart.js y ApexCharts.
- **Gestión de usuarios**: listado, búsqueda, edición y bloqueo de cuentas de usuarios.
- **Monitoreo de juegos**: estadísticas por juego, sesiones activas y resultados.
- **Control de transacciones**: aprobación de retiros, revisión de depósitos y movimientos.
- **Configuración del casino**: parámetros de juegos, límites y promociones.
- **Reportes**: informes de ingresos, actividad de usuarios y rendimiento de juegos.

### Notificaciones y comunicación

- **Emails transaccionales**: confirmación de registro, depósitos, retiros y bonificaciones.
- **Notificaciones en la plataforma**: alertas de eventos importantes para el usuario.
- **Emails de marketing**: comunicaciones promocionales configurables.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **ImageKit** | CDN de imágenes para assets del casino, avatares y recursos gráficos de los juegos |
| **WebSocket (Socket.io)** | Comunicación en tiempo real para juegos, apuestas y actualizaciones de balance |
| **Nodemailer + SendGrid** | Envío de emails transaccionales y notificaciones |
| **Firebase Admin** | Servicios de autenticación y notificaciones push |
| **Chart.js + ApexCharts** | Gráficos estadísticos en el dashboard de administración |
| **JWT (JSON Web Tokens)** | Autenticación segura con tokens de acceso y refresh |

---

## Tecnologías utilizadas

### Sitio web (Frontend)
- **React 18** — Interfaz de usuario
- **Material-UI (MUI) 5** — Componentes principales de diseño
- **Ant Design 5** — Componentes complementarios de interfaz
- **Bootstrap 5** — Estilos y grilla responsive
- **Redux Toolkit** — Estado global de la aplicación
- **React Router DOM 6** — Navegación SPA
- **Chart.js + ApexCharts** — Gráficos y visualización de datos
- **Socket.io Client** — Comunicación en tiempo real
- **Axios** — Comunicación con el servidor API
- **Formik + Yup** — Manejo y validación de formularios
- **React Toastify** — Notificaciones visuales
- **Sass** — Preprocesador de estilos

### Servidor (Backend)
- **Node.js + Express** — Servidor web API REST
- **MongoDB + Mongoose** — Base de datos NoSQL
- **Socket.io** — WebSocket para tiempo real
- **JWT + Bcrypt** — Autenticación y encriptación
- **Nodemailer + SendGrid** — Envío de emails
- **Firebase Admin** — Servicios de backend
- **ImageKit** — Gestión de imágenes CDN
- **Node Cron** — Tareas programadas
- **Multer** — Subida de archivos

---

## Arquitectura del sistema

```
┌─────────────────────────────────┐         ┌─────────────────────────────────┐
│                                 │         │                                 │
│   Sitio Web                     │◄───────►│   Servidor API                  │
│   (React + MUI + Ant Design)    │REST+WS  │   (Node + Express)              │
│                                 │         │                                 │
│  - Lobby de juegos              │         │  - Autenticación JWT            │
│  - Tragamonedas                 │         │  - Lógica de juegos             │
│  - Aviator                      │         │  - Gestión de apuestas          │
│  - Blackjack                    │         │  - Sistema de referidos         │
│  - Ruleta                       │         │  - Depósitos y retiros          │
│  - Hunt the Ace                 │         │  - BFG Staking                  │
│  - Panel de administración      │         │  - WebSocket (Socket.io)        │
│  - Dashboard + Gráficos         │         │  - Emails + Cron jobs           │
│  - Perfil + Balance             │         │  - Firebase Admin               │
│  - Referidos + Staking          │         │                                 │
│                                 │         │                                 │
└─────────────────────────────────┘         └────────┬────────────────────────┘
                                                     │
                                            ┌────────▼────────────────────────┐
                                            │  Base de datos (MongoDB)        │
                                            │                                 │
                                            │  - Usuarios + Roles             │
                                            │  - Juegos + Configuración       │
                                            │  - Apuestas + Resultados        │
                                            │  - Transacciones                │
                                            │  - Referidos + Bonificaciones   │
                                            │  - BFG Staking                  │
                                            │  - Sesiones + Auditoría         │
                                            └─────────────────────────────────┘

┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│                   │  │                   │  │                   │
│  ImageKit         │  │  SendGrid         │  │  Firebase         │
│  (CDN Imágenes)   │  │  (Emails)         │  │  (Auth + Push)    │
│                   │  │                   │  │                   │
└───────────────────┘  └───────────────────┘  └───────────────────┘
```

---

## Flujo de un jugador

```
El usuario se registra (puede usar código de referido)
        ↓
Verifica su email → Inicia sesión
        ↓
Deposita fondos en su cuenta
        ↓
Elige un juego del lobby (Slots, Aviator, Blackjack, Ruleta, Hunt the Ace)
        ↓
Realiza apuestas → El sistema calcula resultados en tiempo real
        ↓
Las ganancias se acreditan instantáneamente al balance
        ↓
Puede continuar jugando, hacer staking BFG o solicitar un retiro
        ↓
El administrador aprueba el retiro → Se procesan los fondos
```

---

## Aspectos destacados del desarrollo

- **5 juegos completos con lógica de casino**: cada juego tiene su propia mecánica, animaciones y sistema de apuestas implementado desde cero.
- **Tiempo real con WebSocket**: las apuestas, resultados y actualizaciones de balance se transmiten instantáneamente a través de Socket.io.
- **Stack MERN completo**: MongoDB, Express, React y Node.js trabajando en conjunto para una aplicación full-stack moderna.
- **Triple librería de UI**: combinación de Material-UI, Ant Design y Bootstrap para una interfaz rica y variada.
- **Sistema de referidos con incentivos**: programa completo de referidos con bonificaciones automáticas que impulsan el crecimiento orgánico.
- **Panel de administración robusto**: monitoreo completo de usuarios, juegos, transacciones y métricas del casino con gráficos en tiempo real.
- **CDN de imágenes con ImageKit**: optimización y distribución de assets gráficos para carga rápida.
- **Programa BFG Staking**: funcionalidad financiera avanzada que permite a los usuarios generar rendimientos sobre sus tokens.
- **Seguridad**: JWT con refresh tokens, contraseñas encriptadas con Bcrypt y validación de transacciones.
- **Estado global con Redux Toolkit**: gestión centralizada del estado de la aplicación para una experiencia fluida entre juegos.
