# Trewa Club - Plataforma de Venta de Entradas para Eventos con Sistema de Puntos

Plataforma web completa para la venta de entradas a eventos nocturnos y fiestas. Los usuarios se registran, navegan los eventos disponibles, compran entradas con Mercado Pago, reciben sus tickets con código QR por email, y acumulan puntos canjeables por productos. Incluye facturación electrónica con AFIP (ARCA), códigos de descuento, tipos de entrada con cupos y precios diferenciados, sistema de revendedores con estadísticas, escaneo de entradas con QR, login con Google y Facebook, panel de administración con análisis detallado por evento, generación masiva de entradas, y notificaciones automáticas. Moneda: pesos argentinos (ARS).

---

## Sobre el proyecto

Trewa Club es una plataforma para un club/bar de eventos que necesita vender entradas online y gestionar el acceso. El usuario se registra con sus datos personales (o entra con Google/Facebook), navega los eventos activos, elige un tipo de entrada (general, VIP, etc.), aplica un código de descuento si tiene, y paga con Mercado Pago. Una vez confirmado el pago, el sistema genera automáticamente los tickets con códigos únicos, emite la factura electrónica con AFIP, envía la confirmación por email y suma puntos al usuario. En la puerta del evento, el operador escanea el código QR del ticket para validar la entrada. El administrador gestiona todo desde un panel: eventos, tipos de entrada, descuentos, beneficios, productos canjeables, revendedores, FAQs y análisis detallado de cada evento.

---

## Funcionalidades principales

### Para el usuario

- **Registro y login**: registro con nombre, apellido, email, fecha de nacimiento, género, DNI, teléfono, Instagram y preferencia musical (Electrónica, Cachengue o Ambos). Login con email o con Google/Facebook.
- **Catálogo de eventos**: listado de todos los eventos activos con nombre, imagen, fecha, lugar, hora y tipos de entrada disponibles.
- **Tipos de entrada**: cada evento puede tener múltiples tipos de entrada (General, VIP, Early Bird, etc.) con nombre, precio, cupo limitado, fecha y hora límite de venta.
- **Códigos de descuento**: aplicar códigos de descuento a la compra (monto fijo o porcentaje), con validación de cupo, fecha y evento asociado.
- **Pago con Mercado Pago**: al confirmar la compra, se genera un link de pago. Una vez aprobado, se asignan los tickets automáticamente.
- **Tickets con código QR**: cada ticket tiene un código único que se muestra como QR para el escaneo en la puerta del evento.
- **Factura electrónica con AFIP**: al completar la compra, se emite automáticamente una factura B a consumidor final a través de ARCA/AFIP, con obtención de CAE.
- **Email de confirmación**: el usuario recibe un email con los detalles de la compra, número de orden, cantidad de entradas y enlace para ver el detalle.
- **Mi cuenta**: página con los datos personales, historial de compras y tickets adquiridos.
- **Sistema de puntos**: cada compra suma puntos al usuario (cada $1000 = 1 punto). Los puntos se notifican automáticamente.
- **Productos canjeables**: catálogo de productos que se pueden obtener canjeando puntos acumulados.
- **Beneficios**: sección con los beneficios disponibles para los miembros del club (imágenes, títulos y detalles).
- **FAQs**: preguntas frecuentes organizadas por institución (Bar, Club, Café, General).
- **Recuperación de contraseña**: flujo con código de verificación por email.
- **Búsqueda de cuenta por DNI**: recuperar el email de la cuenta usando el DNI.

### Panel de administración

- **Dashboard con estadísticas**: cantidad de eventos, productos y compras del día.
- **Gestión de eventos**: crear, editar, activar/desactivar y eliminar eventos con nombre, imagen, fecha, lugar, hora, cantidad de tickets, precio base y puntos por entrada.
- **Tipos de entrada por evento**: crear múltiples tipos de entrada para cada evento (tandas) con nombre, cupo, precio, descripción, cantidad de tickets por compra, y fecha/hora límite de venta.
- **Análisis detallado por evento**: estadísticas completas incluyendo entradas vendidas, monto total recaudado, compradores únicos, precio promedio, distribución por género, edad promedio, compradores recientes, horas pico, ventas por tanda/tipo de entrada y entradas generadas.
- **Gestión de compras**: listado paginado de todas las compras con filtros por evento, código de descuento, ID de pago, email y nombre de usuario. Resumen de compras por día, semana y mes.
- **Gestión de tickets**: listado de todos los tickets con filtro por evento y estado (escaneado/no escaneado). Estadísticas de tickets escaneados vs. no escaneados.
- **Generación masiva de entradas**: generar tickets de forma manual para un evento (entradas de cortesía o preventa especial).
- **Escaneo de entradas (QR)**: el operador escanea el código QR del ticket para validar la entrada. El sistema verifica que no haya sido escaneada previamente y que el evento no haya pasado.
- **Revisar compra manualmente**: verificar y procesar una compra por su ID de pago de Mercado Pago, con generación automática de tickets si el pago fue aprobado.
- **Códigos de descuento**: crear, editar y eliminar códigos con nombre, tipo (fijo/porcentaje), valor, fecha de vencimiento, cupo máximo, usos realizados, evento asociado y estado activo/inactivo.
- **Gestión de beneficios**: crear, editar y eliminar beneficios del club con título, imagen y detalle.
- **Otros beneficios**: sección adicional de beneficios con el mismo formato.
- **Productos canjeables**: crear, editar y eliminar productos que los usuarios pueden obtener con puntos, con nombre, imagen, detalle y puntos requeridos.
- **Canjear productos**: sección para realizar el canje de productos por puntos.
- **Sumar puntos**: agregar puntos manualmente a un usuario por email y monto.
- **Gestión de FAQs**: crear, editar y eliminar preguntas frecuentes organizadas por institución.
- **Gestión de revendedores**: ver estadísticas de todos los revendedores (cantidad de ventas, tickets vendidos, evento más vendido, revendedor top), con detalle de ventas por revendedor y por evento.
- **Roles de usuarios**: cambiar el rol de un usuario (usuario, caja, operador, admin, revendedor).
- **Búsqueda de usuarios**: buscar usuarios por nombre o email, con detalle de edad, género, cantidad de compras, última compra y detalle de cada compra.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Mercado Pago** | Procesamiento de pagos para la compra de entradas con webhooks automáticos (ARS) |
| **AFIP / ARCA (afip.ts)** | Facturación electrónica automática (Factura B consumidor final) con obtención de CAE en cada compra |
| **Google OAuth** | Inicio de sesión con cuenta de Google |
| **Facebook Login** | Inicio de sesión con cuenta de Facebook mediante Graph API |
| **Nodemailer** | Envío de emails de confirmación de compra, códigos de recuperación de contraseña y notificaciones de puntos |
| **QRCode** | Generación de códigos QR para cada ticket, usados para el escaneo en la puerta del evento |
| **Day.js** | Manejo de fechas y zonas horarias (Argentina) para validar límites de venta y eventos pasados |

---

## Tecnologías utilizadas

### Sitio web (Frontend)
- **Next.js 15** — Framework React con App Router
- **React 19** — Interfaz de usuario dinámica e interactiva
- **Tailwind CSS** — Estilos utilitarios para diseño responsive
- **NextAuth** — Autenticación con proveedores sociales (Google)
- **React OAuth Google** — Login con Google
- **React Facebook Login** — Login con Facebook
- **QRCode React** — Generación de códigos QR para los tickets
- **Axios** — Comunicación con el servidor
- **Notistack** — Notificaciones visuales
- **React Icons** — Iconografía
- **React Spinners** — Indicadores de carga

### Servidor (Backend)
- **Node.js + Express** — Servidor web con módulos ES
- **MongoDB + Mongoose** — Base de datos flexible con relaciones entre entidades
- **JWT** — Autenticación segura con tokens
- **Bcrypt** — Encriptación de contraseñas
- **Mercado Pago SDK** — Procesamiento de pagos con webhooks automáticos
- **AFIP SDK (afip.ts)** — Facturación electrónica con ARCA/AFIP
- **Google Auth Library + Google APIs** — Verificación de login social con Google
- **Nodemailer** — Envío de correos electrónicos
- **Multer** — Subida de imágenes (eventos)
- **Day.js** — Manejo de fechas y zonas horarias
- **UUID** — Generación de identificadores únicos para tickets
- **Crypto** — Generación de códigos de recuperación seguros

---

## Arquitectura del sistema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│                         │         │                         │
│   Sitio Web             │◄───────►│   Servidor API          │
│   (Next.js 15)          │  REST   │   (Node + Express)      │
│                         │         │                         │
│  - Eventos              │         │  - Autenticación        │
│  - Compra de entradas   │         │  - Login social         │
│  - Mi cuenta + Tickets  │         │    (Google + Facebook)  │
│  - Productos + Puntos   │         │  - CRUD Eventos         │
│  - Beneficios           │         │  - Tipos de entrada     │
│  - FAQs                 │         │  - Compras + Tickets    │
│  - Login / Registro     │         │  - Pagos (Mercado Pago) │
│  - Panel admin          │         │  - Facturación (AFIP)   │
│  - Análisis de eventos  │         │  - Descuentos           │
│  - Escaneo QR           │         │  - Puntos + Productos   │
│  - Revendedores         │         │  - Beneficios + FAQs    │
│                         │         │  - Emails               │
└─────────────────────────┘         └────────┬────────────────┘
                                             │
    ┌───────────────────┐           ┌────────▼────────────────┐
    │                   │           │                         │
    │  Mercado Pago     │◄──────────│   Base de datos         │
    │  (Pagos + Webhook)│           │   (MongoDB)             │
    │                   │           │                         │
    └───────────────────┘           │  - Usuarios + Roles     │
                                    │  - Eventos              │
    ┌───────────────────┐           │  - Tipos de entrada     │
    │                   │           │  - Compras              │
    │  AFIP / ARCA      │◄──────────│  - Tickets              │
    │  (Facturación)    │           │  - Descuentos           │
    │                   │           │  - Beneficios           │
    │  - Factura B      │           │  - Productos            │
    │  - CAE            │           │  - FAQs                 │
    └───────────────────┘           │  - Notificaciones       │
                                    │                         │
    ┌───────────────────┐           └─────────────────────────┘
    │                   │
    │  Google + Facebook│
    │  (Login social)   │
    │                   │
    └───────────────────┘

    ┌───────────────────┐
    │                   │
    │  Email (SMTP)     │
    │  (Nodemailer)     │
    │                   │
    │  - Confirmación   │
    │  - Recuperación   │
    │  - Puntos         │
    │                   │
    └───────────────────┘
```

---

## Flujo de compra de entradas

```
El usuario se registra o inicia sesión (email, Google o Facebook)
        ↓
Navega los eventos activos → Selecciona un evento
        ↓
Elige el tipo de entrada (General, VIP, etc.) y la cantidad
        ↓
Aplica un código de descuento (opcional) → Se valida cupo, fecha y evento
        ↓
Paga con Mercado Pago → Webhook notifica al servidor
        ↓
Se generan los tickets con códigos únicos → Se emite factura con AFIP (CAE)
        ↓
El usuario recibe email de confirmación con los detalles de la compra
        ↓
Se suman puntos al usuario → Se envía notificación de puntos
        ↓
En el evento, el operador escanea el QR → Se valida que no haya sido escaneado antes
```

---

## Flujo de revendedores

```
El admin asigna el rol "revendedor" a un usuario
        ↓
El revendedor comparte su enlace de venta
        ↓
Los compradores compran mediante el enlace del revendedor
        ↓
Cada compra queda asociada al revendedor
        ↓
El admin ve estadísticas por revendedor: ventas, tickets vendidos, evento más vendido
        ↓
Puede ver el detalle de ventas de cada revendedor por evento
```

---

## Aspectos destacados del desarrollo

- **Facturación electrónica automática con AFIP**: cada compra aprobada genera automáticamente una Factura B a consumidor final a través de ARCA/AFIP, obteniendo el CAE válido, usando el SDK afip.ts en modo producción.
- **Tipos de entrada con tandas**: cada evento puede tener múltiples tipos de entrada (tandas) con precios, cupos y horarios de venta independientes, permitiendo estrategias como early bird, general y VIP.
- **Escaneo de QR con validación completa**: el operador escanea el código QR del ticket y el sistema valida que no haya sido escaneado antes, que el evento no haya pasado (con margen de 6 horas) y registra la hora exacta de ingreso.
- **Webhooks de Mercado Pago**: el sistema procesa automáticamente los pagos, genera los tickets, actualiza cupos, aplica descuentos, emite la factura AFIP y envía el email de confirmación, todo en una sola transacción.
- **Verificación de compras duplicadas**: endpoint separado para verificar y procesar manualmente pagos que no se procesaron por el webhook, evitando duplicaciones.
- **Sistema de puntos y productos**: cada compra suma puntos al usuario (cada $1000 = 1 punto), y los puntos se pueden canjear por productos del catálogo, con notificación automática.
- **Análisis completo por evento**: estadísticas detalladas incluyendo entradas vendidas, monto recaudado, compradores únicos, precio promedio, distribución por género, edad promedio, compradores recientes, horas pico y desglose por tanda de entrada.
- **Sistema de revendedores con estadísticas**: cada compra puede estar asociada a un revendedor, con panel de estadísticas que muestra ventas por revendedor, evento más vendido, revendedor top y detalle de ventas por evento.
- **Login social con Google y Facebook**: acceso rápido con cuentas de Google (vía OAuth) y Facebook (vía Graph API). Si es la primera vez, se crea automáticamente la cuenta.
- **Generación masiva de entradas**: el administrador puede generar tickets manualmente para cortesías o preventas especiales, sin necesidad de pago.
- **Cinco roles diferenciados**: usuario (compra y ve sus tickets), caja (procesa ventas), operador (escanea entradas), revendedor (vende con enlace propio) y administrador (gestión completa).
- **Códigos de descuento flexibles**: códigos con tipo (fijo o porcentaje), cupo limitado, fecha de vencimiento, asignación a evento específico y seguimiento de usos.
- **Zona horaria Argentina**: toda la lógica de fechas y validaciones usa la zona horaria de Argentina para evitar problemas con horarios de eventos y límites de venta.
- **Seguridad**: autenticación JWT, contraseñas encriptadas con Bcrypt, códigos de recuperación con expiración y control de acceso por roles.
