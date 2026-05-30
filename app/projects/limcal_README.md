# LIMCAL - Tienda Online de Productos de Limpieza

Tienda online completa para LIMCAL, empresa de productos de limpieza en Argentina. Los clientes se registran, navegan el catálogo de productos con filtros por categoría y búsqueda, agregan productos al carrito y pagan mediante Mercado Pago. Incluye sistema de revendedores con mapa de ubicaciones, aprobación manual de cuentas, seguimiento de pedidos con notificaciones por email, formulario de contacto con respuesta desde el panel, secciones de sobre nosotros dinámicas, y contenido de la web 100% editable. El administrador gestiona todo desde un panel: productos, categorías, pedidos, usuarios, revendedores, mensajes y moderadores.

---

## Sobre el proyecto

LIMCAL es una empresa de productos de limpieza que necesitaba una tienda online donde sus clientes pudieran ver el catálogo, hacer pedidos y pagar. El cliente se registra con su CUIT, solicita la aprobación de su cuenta y, una vez habilitado por el administrador, puede navegar los productos, agregarlos al carrito con la cantidad deseada (respetando la compra mínima de cada producto), elegir una dirección de envío y pagar con Mercado Pago. El sistema también tiene un mapa de revendedores para que los clientes encuentren puntos de venta cercanos.

---

## Funcionalidades principales

### Para el cliente

- **Registro con CUIT**: el cliente se registra con nombre, CUIT, email y contraseña. La cuenta queda pendiente de aprobación por el administrador.
- **Aprobación manual de cuentas**: el administrador revisa y habilita cada cuenta antes de que el cliente pueda comprar.
- **Catálogo de productos**: listado paginado con imagen, nombre, descripción resumida y precio. Filtro por categoría y búsqueda por nombre.
- **Página individual de producto**: detalle completo con nombre, descripción, modo de uso, precio, compra mínima y productos relacionados de la misma categoría.
- **Carrito de compras**: agregar productos con la cantidad deseada. Cada producto tiene una cantidad mínima de compra configurable.
- **Direcciones de envío**: el usuario puede guardar múltiples direcciones (provincia, ciudad, dirección, teléfono, detalles) y seleccionar una al momento de comprar.
- **Pago con Mercado Pago**: al confirmar la compra, se genera un link de pago. Una vez aprobado el pago, el sistema registra el pedido automáticamente vía webhook, vaciando el carrito.
- **Pedido completado**: página de confirmación después de completar la compra.
- **Dónde encontrarnos**: página con el listado de revendedores, filtrable por provincia, ciudad y nombre, con mapa embebido de Google Maps (iframe) para cada revendedor.
- **Formulario de contacto**: formulario con nombre, email, teléfono, asunto y mensaje. Los mensajes se envían por email a la empresa y se almacenan en el sistema.
- **Sobre nosotros**: página con secciones dinámicas (título, descripción e imágenes), administrables desde el panel.
- **Políticas, garantías y términos**: páginas con contenido editable con formato enriquecido.
- **Ser revendedor**: página informativa para quienes quieran convertirse en revendedores.

### Panel de administración

- **Dashboard**: vista general del estado del negocio.
- **Gestión de productos**: crear, editar y eliminar productos con nombre, precio, descripción, descripción resumida, modo de uso, imagen, categoría y cantidad mínima de compra.
- **Gestión de categorías**: crear, editar y eliminar categorías de productos.
- **Gestión de pedidos**: ver todos los pedidos con datos del cliente, productos, cantidades, monto total, monto neto recibido, dirección de envío y estado. Cambiar el estado de un pedido con notificación automática por email al cliente.
- **Gestión de usuarios**: ver todos los usuarios registrados. Habilitar o deshabilitar cuentas para permitir o bloquear el acceso a la tienda.
- **Gestión de revendedores**: crear, editar y eliminar revendedores con nombre, descripción, provincia, ciudad y mapa embebido (iframe de Google Maps).
- **Gestión de mensajes**: ver todos los mensajes de contacto recibidos, filtrar por email y nombre, y responder directamente desde el panel (la respuesta se envía por email al cliente).
- **Gestión de moderadores**: crear cuentas con rol de moderador para ayudar en la administración.
- **Sobre nosotros (secciones)**: crear, editar y eliminar las secciones de la página "Sobre nosotros" con título, descripción e imágenes.
- **Contenido editable**: modificar todos los textos e imágenes de la web (hero, sobre nosotros, trabajá con nosotros, productos, dónde encontrarnos, contacto, login, registro, privacidad, garantías, términos) usando Lodash para actualización dinámica de propiedades anidadas.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Mercado Pago** | Procesamiento de pagos del carrito con webhooks para registro automático de pedidos (ARS) |
| **Nodemailer** | Envío de mensajes de contacto al email de la empresa, respuestas al cliente y notificaciones de cambio de estado de pedidos |
| **Google Maps (iframe)** | Mapa embebido en cada revendedor para mostrar su ubicación |
| **Lodash** | Actualización dinámica de propiedades anidadas en los textos editables de la web |
| **Redux** | Estado global de la aplicación (carrito, usuario, textos de la web) |
| **React Quill** | Editor de texto enriquecido para contenido con formato (políticas, garantías, términos, secciones) |
| **AOS** | Animaciones de aparición al hacer scroll |
| **Google Analytics** | Seguimiento de visitas y comportamiento de usuarios |

---

## Tecnologías utilizadas

### Tienda web (Frontend)
- **Next.js 13 (App Router)** — Framework React con rutas basadas en carpetas
- **React 18** — Interfaz de usuario dinámica e interactiva
- **Redux** — Manejo del estado global (carrito, usuario, textos)
- **SASS** — Estilos avanzados con módulos CSS
- **React Quill** — Editor de texto enriquecido para edición de contenido
- **React Select** — Selectores avanzados con búsqueda
- **React Scroll** — Navegación suave entre secciones
- **React HTML Parser** — Renderizado de contenido HTML enriquecido
- **AOS** — Animaciones al hacer scroll
- **React Spinners** — Indicadores de carga
- **Axios** — Comunicación con el servidor
- **Notistack** — Notificaciones visuales
- **Font Awesome** — Iconografía

### Servidor (Backend)
- **Node.js + Express** — Servidor web robusto
- **MongoDB + Mongoose** — Base de datos flexible con relaciones entre entidades
- **JWT** — Autenticación segura con tokens
- **Bcrypt** — Encriptación de contraseñas
- **Mercado Pago SDK** — Procesamiento de pagos con webhooks automáticos
- **Nodemailer** — Envío de correos electrónicos (contacto, respuestas, notificaciones)
- **Multer** — Subida de imágenes (productos, secciones)
- **Lodash** — Actualización dinámica de propiedades anidadas
- **UUID** — Generación de identificadores únicos

---

## Arquitectura del sistema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│                         │         │                         │
│   Tienda Web            │◄───────►│   Servidor API          │
│   (Next.js 13)          │  REST   │   (Node + Express)      │
│                         │         │                         │
│  - Catálogo + Filtros   │         │  - Autenticación        │
│  - Carrito de compras   │         │  - CRUD Productos       │
│  - Revendedores         │         │  - Categorías           │
│  - Sobre nosotros       │         │  - Pedidos + Estados    │
│  - Contacto             │         │  - Usuarios + Cuentas   │
│  - Login / Registro     │         │  - Revendedores         │
│  - Panel admin          │         │  - Mensajes + Respuesta │
│  - Contenido editable   │         │  - Pagos (Mercado Pago) │
│                         │         │  - Textos editables     │
└─────────────────────────┘         └────────┬────────────────┘
                                             │
         ┌───────────────────┐      ┌────────▼────────────────┐
         │                   │      │                         │
         │  Mercado Pago     │◄─────│   Base de datos         │
         │  (Pagos + Webhook)│      │   (MongoDB)             │
         │                   │      │                         │
         └───────────────────┘      │  - Usuarios + Roles     │
                                    │  - Productos            │
         ┌───────────────────┐      │  - Categorías           │
         │                   │      │  - Pedidos              │
         │  Email (SMTP)     │◄─────│  - Revendedores         │
         │  (Nodemailer)     │      │  - Mensajes             │
         │                   │      │  - Secciones About Us   │
         │  - Contacto       │      │  - Textos web           │
         │  - Respuestas     │      │                         │
         │  - Notificaciones │      └─────────────────────────┘
         │                   │
         └───────────────────┘
```

---

## Flujo de compra

```
El cliente se registra con CUIT → El admin aprueba la cuenta
        ↓
Navega el catálogo → Filtra por categoría o busca por nombre
        ↓
Selecciona producto → Elige cantidad (mínimo configurable)
        ↓
Agrega al carrito → Selecciona dirección de envío
        ↓
Paga con Mercado Pago → Webhook registra el pedido automáticamente
        ↓
El admin actualiza el estado → El cliente recibe email de notificación
```

---

## Aspectos destacados del desarrollo

- **Aprobación manual de cuentas**: el administrador controla quién puede comprar, habilitando o deshabilitando cuentas de usuarios registrados.
- **Compra mínima por producto**: cada producto tiene una cantidad mínima de compra configurable, ideal para venta al por mayor de productos de limpieza.
- **Mapa de revendedores**: cada revendedor tiene su mapa de Google Maps embebido, filtrable por provincia y ciudad para que el cliente encuentre el punto de venta más cercano.
- **Mensajes con respuesta desde el panel**: los mensajes de contacto se almacenan y el administrador puede responder directamente desde el panel, enviando la respuesta por email al cliente.
- **Seguimiento de pedidos con email**: al cambiar el estado de un pedido, el cliente recibe automáticamente un email con la actualización.
- **Contenido 100% editable**: todos los textos, imágenes y secciones de la web se modifican desde el panel de administración usando Lodash para actualización dinámica.
- **Secciones dinámicas de About Us**: el administrador puede crear y eliminar secciones con título, descripción e imágenes para personalizar la página.
- **Webhooks de Mercado Pago**: el sistema procesa automáticamente los pagos, registra el pedido con el monto total y neto recibido, y vacía el carrito del cliente.
- **Roles diferenciados**: tres roles (usuario, moderador, administrador) con permisos diferenciados.
- **Diseño responsive**: toda la tienda se adapta a celulares, tablets y escritorio.
- **Seguridad**: autenticación JWT, contraseñas encriptadas con Bcrypt y control de acceso por roles.
