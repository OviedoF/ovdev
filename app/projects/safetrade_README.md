# SafeTrade - Marketplace de Señales de Trading con Suscripciones

Aplicación móvil multiplataforma para la compra y venta de señales de trading. Los traders publican sus señales de inversión con análisis técnico y los clientes se suscriben para recibirlas en tiempo real. Incluye dos roles diferenciados (trader y cliente), sistema de suscripciones con pagos recurrentes vía Stripe, dashboard de rendimiento para traders, exploración de traders con métricas de performance, gráficos estadísticos, navegación por tabs según el rol, y validación de formularios con Zod. Construida con React Native, Expo, TypeScript, Zustand y React Query.

---

## Sobre el proyecto

SafeTrade es una plataforma que conecta traders experimentados con personas que quieren seguir sus estrategias de inversión. Los traders publican señales de trading (compra/venta de activos financieros) con su análisis y los clientes se suscriben a los traders que les interesan para recibir sus señales. Cada trader tiene un perfil con métricas de rendimiento (porcentaje de aciertos, retorno acumulado, cantidad de señales) que permite a los clientes tomar decisiones informadas antes de suscribirse. Los pagos de suscripción se procesan con Stripe.

---

## Funcionalidades principales

### Para traders

- **Publicar señales**: crear señales de trading con activo, dirección (compra/venta), precio de entrada, take profit, stop loss y análisis.
- **Dashboard de rendimiento**: métricas personales con porcentaje de aciertos, retorno acumulado, racha ganadora y estadísticas históricas.
- **Gestión de suscriptores**: ver quiénes están suscritos, desde cuándo y estado de la suscripción.
- **Historial de señales**: registro completo de todas las señales publicadas con resultado (ganadora/perdedora).
- **Perfil profesional**: bio, experiencia, mercados en los que opera y métricas públicas.
- **Gráficos de performance**: visualización de rendimiento con gráficos de línea y barras.

### Para clientes

- **Explorar traders**: directorio de traders disponibles con métricas de rendimiento, precio de suscripción y especialidad.
- **Suscribirse a traders**: suscripción mensual a uno o más traders para recibir sus señales.
- **Recibir señales**: las señales del trader aparecen en tiempo real en la app.
- **Ver detalle de señal**: activo, dirección, precios objetivo, análisis del trader y resultado.
- **Historial de señales recibidas**: registro de todas las señales de los traders suscritos.
- **Gestión de suscripciones**: ver, pausar o cancelar suscripciones activas.

### Pagos con Stripe

- **Suscripciones recurrentes**: cobro mensual automático por cada trader suscrito.
- **Métodos de pago**: tarjetas de crédito y débito a través de Stripe.
- **Gestión de pagos**: historial de cobros, facturas y estado de pagos.
- **Stripe React Native SDK**: integración nativa para pagos seguros dentro de la app.

### Perfil y cuenta

- **Datos personales**: información de perfil editable.
- **Cambio de contraseña**: actualización de credenciales.
- **Configuración de notificaciones**: preferencias de alertas.
- **Cierre de sesión**: logout con limpieza de tokens.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Stripe (React Native SDK)** | Pagos de suscripciones recurrentes con tarjeta de crédito/débito |
| **Firebase** | Configuración de servicios backend y notificaciones |
| **React Native Chart Kit** | Gráficos de rendimiento y estadísticas de traders |
| **API REST** | Servidor backend para autenticación, señales, suscripciones y pagos |

---

## Tecnologías utilizadas

- **React Native 0.76** — Aplicación móvil multiplataforma (Android e iOS)
- **Expo ~52** — Plataforma de desarrollo y compilación
- **React 19** — Interfaz de usuario
- **TypeScript** — Tipado estático completo
- **Expo Router** — Navegación basada en archivos
- **React Navigation (Bottom Tabs)** — Navegación por tabs según rol
- **Zustand** — Estado global de la aplicación
- **React Query (TanStack Query)** — Gestión de datos del servidor con caché
- **React Hook Form + Zod** — Formularios y validación con esquemas
- **Stripe React Native** — SDK nativo para pagos
- **React Native Chart Kit** — Gráficos estadísticos
- **Axios** — Comunicación con el servidor API
- **AsyncStorage** — Almacenamiento local de tokens y preferencias
- **React Native Reanimated** — Animaciones avanzadas
- **React Native Gesture Handler** — Gestos táctiles

---

## Arquitectura del sistema

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   App Móvil (React Native + Expo + TypeScript)      │
│                                                     │
│  ┌─────────────────────┐  ┌──────────────────────┐  │
│  │  Vista Trader        │  │  Vista Cliente       │  │
│  │                     │  │                      │  │
│  │  - Publicar señales │  │  - Explorar traders  │  │
│  │  - Dashboard        │  │  - Suscribirse       │  │
│  │  - Suscriptores     │  │  - Ver señales       │  │
│  │  - Historial        │  │  - Historial         │  │
│  │  - Gráficos         │  │  - Suscripciones     │  │
│  │  - Perfil           │  │  - Perfil            │  │
│  └─────────────────────┘  └──────────────────────┘  │
│                                                     │
│  ┌────────────────────────────────────────────────┐ │
│  │  Estado y datos                                │ │
│  │  - Zustand (estado global)                     │ │
│  │  - React Query (datos del servidor + caché)    │ │
│  │  - React Hook Form + Zod (formularios)         │ │
│  │  - Stripe SDK (pagos)                          │ │
│  └────────────────────────────────────────────────┘ │
│                                                     │
└──────────────────────────┬──────────────────────────┘
                           │
                      REST API + Bearer Token
                           │
┌──────────────────────────▼──────────────────────────┐
│                                                     │
│   Servidor API                                      │
│                                                     │
│  - Autenticación + Roles (Trader / Cliente)         │
│  - CRUD Señales de trading                          │
│  - Suscripciones + Gestión                          │
│  - Métricas de rendimiento                          │
│  - Procesamiento de pagos Stripe                    │
│  - Notificaciones                                   │
│                                                     │
└─────────────────────────────────────────────────────┘

┌───────────────────┐  ┌───────────────────┐
│                   │  │                   │
│  Stripe           │  │  Firebase         │
│  (Suscripciones   │  │  (Config +        │
│  recurrentes)     │  │  Notificaciones)  │
│                   │  │                   │
└───────────────────┘  └───────────────────┘
```

---

## Flujo de suscripción a un trader

```
El cliente abre la app → Explora el directorio de traders
        ↓
Ve las métricas de cada trader:
  - Porcentaje de aciertos
  - Retorno acumulado
  - Cantidad de señales publicadas
  - Precio de suscripción mensual
        ↓
Selecciona un trader → Ve su perfil completo con historial de señales
        ↓
Decide suscribirse → Ingresa los datos de pago con Stripe
        ↓
Se activa la suscripción mensual automática
        ↓
Comienza a recibir las señales del trader en tiempo real
        ↓
Cada señal incluye: activo, dirección, precio de entrada,
take profit, stop loss y análisis del trader
        ↓
Al finalizar cada señal, se actualiza el resultado
(ganadora/perdedora) y las métricas del trader
```

---

## Aspectos destacados del desarrollo

- **Dos roles con experiencias diferenciadas**: traders y clientes tienen interfaces, navegación y funcionalidades completamente distintas dentro de la misma app, con tabs personalizados por rol.
- **Stack moderno de React Native**: Zustand para estado global, React Query para datos del servidor con caché automático, React Hook Form con Zod para validación tipada de formularios.
- **Stripe nativo en React Native**: integración directa con el SDK de Stripe para React Native, permitiendo pagos seguros sin salir de la app.
- **Métricas de rendimiento de traders**: cálculo automático de porcentaje de aciertos, retorno acumulado y estadísticas históricas para que los clientes tomen decisiones informadas.
- **TypeScript completo**: tipado estático en toda la aplicación para mayor robustez y mantenibilidad.
- **Expo Router con navegación por archivos**: estructura de rutas organizada y escalable con tabs condicionales según el rol del usuario.
- **React Query para gestión de datos**: caché automático, revalidación y sincronización optimista para una experiencia fluida.
- **Gráficos de performance**: visualización de rendimiento de traders con gráficos interactivos.
- **Suscripciones recurrentes**: modelo de negocio con cobros mensuales automáticos que genera ingresos predecibles.
