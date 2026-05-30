# GiorDota - Marketplace de Items de Dota 2 con Apuestas y Tienda Gaming

Plataforma de comercio de items del videojuego Dota 2 con marketplace de compra/venta, sistema de apuestas con monedas virtuales, cajas de loot (normales, gratis, sociales, fan y formulario), bots de Steam automatizados para intercambio de items, chat en tiempo real (soporte, grupal, administración y claves), sistema de triple wallet (compras, retiros y gratis), red social integrada, sistema VIP con niveles, bot de Discord, e integración con pasarelas de pago para el mercado peruano (Mercado Pago, PayPal, PagoEfectivo). Arquitectura de microservicios con Java Spring Boot, 4 servicios Node.js y frontend Astro/Svelte.

---

## Sobre el proyecto

GiorDota es una plataforma gaming diseñada para jugadores de Dota 2 en Perú y Latinoamérica. Los usuarios pueden comprar y vender items del juego a través de un marketplace con precios del mercado de Steam, apostar monedas virtuales en eventos, abrir cajas de loot con diferentes raridades, y participar en una comunidad gaming con chat, publicaciones y sistema de amigos. El sistema utiliza bots de Steam automatizados que realizan los intercambios de items directamente desde el inventario de Steam del usuario. Incluye un programa VIP con beneficios exclusivos y un bot de Discord para extender la comunidad.

---

## Funcionalidades principales

### Marketplace de items

- **Catálogo de items de Dota 2**: listado completo de items disponibles con precios actualizados del mercado de Steam.
- **Compra de items**: adquisición directa de items con saldo de la wallet interna.
- **Venta de items**: los usuarios pueden poner en venta items de su inventario de Steam.
- **Filtros y búsqueda**: filtrar por héroe, raridad, tipo de item, precio y calidad.
- **Historial de transacciones**: registro de todas las compras y ventas realizadas.

### Bots de Steam

- **Intercambio automatizado**: bots que envían y reciben items de Steam automáticamente.
- **Gestión de múltiples bots**: sistema de balanceo entre varios bots de Steam simultáneos.
- **Verificación de inventario**: comprobación en tiempo real del inventario del usuario en Steam.
- **Steam Guard**: autenticación de dos factores integrada en los bots.
- **Trade offers**: generación automática de ofertas de intercambio en Steam.

### Sistema de apuestas

- **Apuestas con monedas virtuales**: los usuarios apuestan coins en eventos y partidas.
- **Apuestas en tiempo real**: actualizaciones instantáneas por WebSocket.
- **Historial de apuestas**: registro completo de apuestas ganadas y perdidas.
- **Eventos y partidas**: diferentes tipos de eventos para apostar.

### Cajas de loot (Loot Boxes)

- **Cajas normales**: cajas de pago con items de diferentes raridades.
- **Cajas gratis**: cajas que se obtienen por actividad en la plataforma.
- **Cajas sociales**: cajas que se desbloquean al compartir en redes sociales.
- **Cajas fan**: cajas temáticas para fans con contenido especial.
- **Cajas formulario**: cajas que se obtienen al completar formularios o encuestas.
- **Animación de apertura**: efecto visual al abrir cada caja con revelación del item ganado.

### Sistema de wallets (Triple wallet)

- **Wallet de compras**: saldo para comprar items en el marketplace y abrir cajas.
- **Wallet de retiros**: saldo disponible para retirar a métodos de pago externos.
- **Wallet gratis**: saldo de bonificación obtenido por referidos, logros y promociones.
- **Depósitos**: integración con Mercado Pago, PayPal y PagoEfectivo.
- **Retiros**: solicitud de retiro con procesamiento y aprobación.

### Chat en tiempo real

- **Chat de soporte**: comunicación directa con el equipo de soporte.
- **Chat grupal**: salas de chat para la comunidad gaming.
- **Chat de administración**: canal interno para el equipo administrativo.
- **Chat de claves**: canal dedicado para intercambio de claves y códigos.

### Red social y comunidad

- **Publicaciones**: crear y compartir contenido con la comunidad.
- **Sistema de amigos**: agregar amigos y ver su actividad.
- **Bot de Discord**: extensión de la comunidad a Discord con comandos y notificaciones.
- **Sistema VIP**: niveles de membresía con beneficios exclusivos, descuentos y acceso prioritario.

### Panel de administración

- **Dashboard**: métricas de la plataforma, usuarios activos, transacciones y ventas.
- **Gestión de bots de Steam**: monitoreo y configuración de los bots de intercambio.
- **Control de cajas de loot**: configurar probabilidades, items y tipos de cajas.
- **Gestión de usuarios**: administración de cuentas, VIP y sanciones.
- **Configuración de eventos**: crear y administrar eventos de apuestas.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Steam API** | Autenticación Steam, inventarios de usuarios y datos de items de Dota 2 |
| **Steam Bots (steamcommunity + steam-tradeoffer-manager)** | Bots automatizados para intercambio de items de Steam |
| **Mercado Pago** | Pasarela de pago para depósitos y retiros en el mercado peruano |
| **PayPal** | Pasarela de pago internacional |
| **PagoEfectivo** | Pagos en efectivo en puntos de pago en Perú |
| **Discord Bot** | Bot para la comunidad de Discord con comandos y notificaciones |
| **WebSocket** | Comunicación en tiempo real para chat, apuestas y actualizaciones |
| **Steam Guard (SteamTOTP)** | Autenticación de dos factores para los bots de Steam |

---

## Tecnologías utilizadas

### Sitio web (Frontend)
- **Astro 4.6** — Framework de generación estática y SSR
- **Svelte 5** — Componentes interactivos
- **Tailwind CSS** — Estilos utilitarios
- **WebSocket Client** — Comunicación en tiempo real

### Servidor principal (Backend - Java)
- **Java 17 + Spring Boot 3.2** — API REST principal
- **Spring Security + JWT** — Autenticación y autorización
- **Spring Data JPA + Hibernate** — Acceso a base de datos
- **MySQL** — Base de datos relacional
- **Maven** — Gestión de dependencias

### Microservicios (Node.js)
- **Node.js + Express** — 4 microservicios especializados
- **Microservicio de bots de Steam** — Gestión de bots e intercambios
- **Microservicio de chat** — Chat en tiempo real con WebSocket
- **Microservicio de pagos** — Procesamiento de pagos y wallets
- **Microservicio de Discord** — Bot de Discord
- **steamcommunity + steam-tradeoffer-manager** — Librerías de Steam
- **Socket.io** — WebSocket para tiempo real
- **Mongoose** — ODM para MongoDB (logs y chat)

---

## Arquitectura del sistema

```
┌─────────────────────────────┐
│                             │
│   Sitio Web                 │
│   (Astro + Svelte)          │
│                             │
│  - Marketplace de items     │
│  - Cajas de loot            │
│  - Apuestas                 │
│  - Chat en tiempo real      │
│  - Red social               │
│  - Perfil + Wallets         │
│  - Sistema VIP              │
│  - Panel de administración  │
│                             │
└──────────────┬──────────────┘
               │ REST + WebSocket
               │
┌──────────────▼──────────────────────────────────────────────┐
│                                                             │
│   API Principal (Java Spring Boot 3.2)                      │
│                                                             │
│  - Autenticación Steam + JWT                                │
│  - CRUD Items + Marketplace                                 │
│  - Sistema de apuestas                                      │
│  - Cajas de loot + Probabilidades                           │
│  - Triple wallet (compras/retiros/gratis)                   │
│  - Sistema VIP + Niveles                                    │
│  - Red social + Publicaciones                               │
│                                                             │
└─────┬──────────┬──────────┬──────────┬──────────────────────┘
      │          │          │          │
┌─────▼────┐┌───▼─────┐┌──▼──────┐┌──▼───────┐
│ Steam    ││ Chat    ││ Pagos   ││ Discord  │
│ Bots     ││ Service ││ Service ││ Bot      │
│ (Node)   ││ (Node)  ││ (Node)  ││ (Node)   │
│          ││         ││         ││          │
│- Trade   ││- Socket ││- Mercado││- Comandos│
│  offers  ││  .io    ││  Pago   ││- Notif.  │
│- Invent. ││- Salas  ││- PayPal ││- Webhook │
│- Steam   ││- Histo- ││- Pago   ││          │
│  Guard   ││  rial   ││  Efect. ││          │
└─────┬────┘└───┬─────┘└──┬──────┘└──┬───────┘
      │         │         │          │
┌─────▼─────────▼─────────▼──────────▼────────┐
│                                             │
│  Bases de datos                             │
│  - MySQL (datos principales)                │
│  - MongoDB (chat, logs, sesiones)           │
│                                             │
└─────────────────────────────────────────────┘

┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│               │  │               │  │               │
│  Steam API    │  │  Mercado Pago │  │  Discord API  │
│  (Items +     │  │  PayPal       │  │  (Bot +       │
│  Inventarios) │  │  PagoEfectivo │  │  Webhooks)    │
│               │  │               │  │               │
└───────────────┘  └───────────────┘  └───────────────┘
```

---

## Flujo de compra de un item

```
El usuario inicia sesión con su cuenta de Steam
        ↓
Explora el marketplace → Encuentra un item de Dota 2
        ↓
Verifica que tiene saldo en su wallet de compras
        ↓
Confirma la compra → Se descuenta el saldo de la wallet
        ↓
El bot de Steam genera una trade offer automática
        ↓
El usuario acepta la oferta en Steam
        ↓
El item se transfiere al inventario de Steam del comprador
```

---

## Flujo de apertura de loot box

```
El usuario elige un tipo de caja (normal, gratis, social, fan o formulario)
        ↓
Si es de pago: se descuenta el costo de la wallet
Si es gratis: se verifica que cumple los requisitos (actividad, referidos, etc.)
        ↓
Se ejecuta la animación de apertura con efecto de suspenso
        ↓
El sistema calcula el resultado según las probabilidades configuradas
        ↓
Se revela el item ganado → Se agrega al inventario del usuario
        ↓
El usuario puede reclamar el item vía trade offer de Steam
```

---

## Aspectos destacados del desarrollo

- **Arquitectura de microservicios**: API principal en Java Spring Boot con 4 microservicios Node.js especializados (bots Steam, chat, pagos, Discord), cada uno con responsabilidad única.
- **Bots de Steam automatizados**: sistema completo de bots que gestionan inventarios, generan trade offers y manejan Steam Guard automáticamente para intercambios sin intervención humana.
- **5 tipos de loot boxes**: sistema de cajas con probabilidades configurables, cada tipo con su propia mecánica de obtención y catálogo de items.
- **Triple wallet**: sistema financiero con tres bolsillos separados (compras, retiros, gratis) que permite control granular sobre el flujo de dinero.
- **Frontend moderno con Astro + Svelte**: combinación de generación estática para SEO y componentes interactivos de Svelte para la experiencia de usuario.
- **3 pasarelas de pago para Perú**: Mercado Pago, PayPal y PagoEfectivo cubriendo tarjetas, transferencias y pagos en efectivo.
- **Chat en tiempo real multicanal**: sistema de chat con salas de soporte, grupales, administración y claves, todo en tiempo real con WebSocket.
- **Bot de Discord integrado**: extensión de la comunidad a Discord con comandos, notificaciones y webhooks.
- **Sistema VIP con niveles**: programa de membresía con beneficios progresivos que incentivan la retención de usuarios.
- **Integración profunda con Steam API**: autenticación, inventarios, precios de mercado y trade offers, todo automatizado.
