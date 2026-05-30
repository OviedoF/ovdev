# Biznes - Plataforma de Tarjetas Digitales de Presentación

Aplicación web completa tipo SaaS (Software como Servicio) donde cualquier persona puede crear su propia tarjeta de presentación digital, personalizable y compartible mediante un link o código QR.

---

## Sobre el proyecto

Biznes es una plataforma que reemplaza las tarjetas de presentación físicas por tarjetas digitales interactivas. Cada usuario puede registrarse, diseñar su tarjeta con su información profesional, redes sociales y datos de contacto, y compartirla con un simple enlace o QR. Además, incluye un sistema de membresías con pagos integrados, una tienda de productos, un panel de administración completo y estadísticas de uso en tiempo real.

---

## Funcionalidades principales

### Para el usuario

- **Creación de tarjetas digitales**: el usuario arma su tarjeta paso a paso eligiendo foto de perfil, foto de portada, logo, biografía, puesto de trabajo, empresa, email, teléfono y ubicación.
- **Redes sociales integradas**: se pueden agregar enlaces a todas las redes sociales (Instagram, LinkedIn, TikTok, WhatsApp, Facebook, YouTube, Twitter, Spotify, y muchas más), con la opción de marcar favoritas que se muestran de forma destacada.
- **Botones adicionales personalizados**: el usuario puede agregar botones extra con enlaces a su web, catálogo, portafolio o cualquier recurso.
- **Diseño personalizable**: cada tarjeta se puede personalizar visualmente: colores, tipografías, tamaños, bordes, alineación, espaciado, fondo, estilos de botones, forma de la foto de perfil, y más.
- **Vista previa en tiempo real**: mientras se edita la tarjeta, se muestra una vista previa en formato de celular para ver exactamente cómo quedará.
- **Código QR automático**: cada tarjeta genera automáticamente un código QR único que se puede descargar e imprimir.
- **vCard descargable**: los visitantes de la tarjeta pueden descargar el contacto directo a su teléfono con un solo toque.
- **Formulario de contacto integrado**: opcionalmente, la tarjeta puede incluir un formulario para que los visitantes dejen sus datos.
- **Link personalizado**: cada tarjeta tiene su propia URL única y personalizable.
- **Sistema de tickets**: posibilidad de vincular la tarjeta a un código de ticket físico.

### Sistema de membresías

- **Planes con diferentes niveles**: cada plan habilita distintas funcionalidades (cantidad de redes sociales, personalización del diseño, QR avanzado, etc.).
- **Pagos con Mercado Pago**: integración completa para suscripciones y pagos online.
- **Descuentos por membresía**: los miembros obtienen descuentos en la tienda de productos.
- **Cupones de descuento**: sistema de cupones aplicables a compras.

### Tienda de productos

- **Catálogo de productos**: navegación por categorías con imágenes, precios y ofertas.
- **Carrito de compras**: agregar productos, modificar cantidades y finalizar la compra.
- **Checkout con Mercado Pago**: proceso de pago completo con notificaciones automáticas.
- **Historial de compras**: cada usuario puede ver sus compras anteriores.
- **Variaciones de color y talle**: los productos soportan múltiples variantes.

### Panel de administración

- **Gestión de productos**: crear, editar y eliminar productos con múltiples imágenes, categorías, colores y precios con oferta.
- **Gestión de categorías**: organizar los productos en categorías.
- **Gestión de membresías**: crear y configurar planes con permisos granulares (qué puede y qué no puede hacer cada plan).
- **Gestión de usuarios**: ver, crear y administrar usuarios de la plataforma.
- **Gestión de pedidos**: ver y actualizar el estado de los pedidos realizados.
- **Gestión del blog**: crear y publicar noticias y artículos.
- **Gestión de cupones y tickets**: crear códigos de descuento y tickets físicos vinculables a tarjetas.
- **Gestión de marcas**: administrar las marcas que aparecen en la página principal.
- **Gestión de FAQs**: preguntas frecuentes editables.
- **Gestión de Hero Cards**: tarjetas destacadas en la página de inicio.
- **Configuración de anuncios**: banner de anuncios configurable.
- **Edición de la info de Biznes**: textos e información general del sitio.

### Página de inicio (Landing)

- **Slider principal**: carrusel de imágenes destacadas.
- **Tarjetas hero**: sección de tarjetas destacadas para mostrar ejemplos.
- **Sección "Cómo funciona"**: explicación paso a paso del servicio.
- **Sección de marcas**: logos de empresas o clientes que usan la plataforma.
- **Sección de comentarios**: testimonios de usuarios.
- **Formulario de contacto**: para consultas generales.
- **FAQs**: preguntas frecuentes.

### Estadísticas y analíticas

- **Visitas a la tarjeta**: cuántas personas vieron la tarjeta, en qué fecha y desde qué dispositivo.
- **Tiempo de visualización**: cuánto tiempo pasó cada visitante en la tarjeta.
- **Clics en redes sociales**: qué redes sociales clickearon los visitantes.
- **Clics en email**: cuántas veces tocaron el email de contacto.
- **Descargas de vCard**: cuántos contactos se guardaron.
- **Contactos agregados**: cuántas personas enviaron el formulario de contacto.
- **Clics en botones**: seguimiento de cada botón adicional.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Mercado Pago** | Pagos de membresías, suscripciones y compras en la tienda |
| **Google Login** | Inicio de sesión rápido con cuenta de Google |
| **Nodemailer** | Envío de emails transaccionales (confirmación de compra, login, membresías) |
| **QR Code** | Generación automática de códigos QR para cada tarjeta |
| **vCards.js** | Generación de archivos de contacto (.vcf) descargables |
| **Socket.IO** | Comunicación en tiempo real entre cliente y servidor |
| **Sharp** | Optimización y conversión de imágenes a formato WebP |
| **Swagger** | Documentación interactiva de la API |

---

## Tecnologías utilizadas

### Aplicación web (Frontend)
- **React 18** — Interfaz de usuario interactiva y dinámica
- **Redux** — Manejo del estado global (usuario, carrito, tarjetas, membresías)
- **React Router v6** — Navegación entre páginas sin recargar
- **Framer Motion** — Animaciones fluidas y transiciones
- **SASS** — Estilos avanzados y organizados
- **Axios** — Comunicación con el servidor
- **Notistack** — Notificaciones visuales
- **React Slick** — Carruseles y sliders
- **Font Awesome** — Iconografía profesional
- **React Device Preview** — Vista previa de tarjeta en formato celular

### Servidor (Backend)
- **Node.js + Express** — Servidor web escalable
- **MongoDB + Mongoose** — Base de datos flexible
- **JWT** — Autenticación segura con tokens
- **Bcrypt** — Encriptación de contraseñas
- **Mercado Pago SDK** — Procesamiento de pagos
- **Multer + Sharp** — Subida y optimización de imágenes (conversión a WebP)
- **QRCode** — Generación de códigos QR
- **vCards.js** — Generación de archivos de contacto
- **Socket.IO** — Comunicación en tiempo real
- **Agenda.js** — Tareas programadas (vencimiento de membresías, recordatorios)
- **Nodemailer** — Envío de correos electrónicos con plantillas HTML
- **Swagger** — Documentación de la API
- **XLSX** — Lectura de archivos Excel para importación masiva

---

## Arquitectura del sistema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│                         │         │                         │
│   Aplicación Web        │◄───────►│   Servidor API          │
│   (React)               │         │   (Node + Express)      │
│                         │  REST   │                         │
│  - Landing page         │  + WS   │  - Autenticación        │
│  - Dashboard usuario    │         │  - CRUD Tarjetas        │
│  - Editor de tarjetas   │         │  - Pagos MercadoPago    │
│  - Tienda + Carrito     │         │  - Estadísticas         │
│  - Panel admin          │         │  - Membresías           │
│  - Estadísticas         │         │  - Productos + Pedidos  │
│                         │         │  - QR + vCard           │
└─────────────────────────┘         │  - Emails               │
                                    │  - Tareas programadas   │
┌─────────────────────────┐         └────────┬────────────────┘
│                         │                  │
│   Mercado Pago          │◄─────────────────┤
│   (Pagos y suscripciones)                  │
│                         │         ┌────────▼────────────────┐
└─────────────────────────┘         │                         │
                                    │   Base de datos         │
                                    │   (MongoDB)             │
                                    │                         │
                                    │  - Usuarios + Roles     │
                                    │  - Tarjetas + Estilos   │
                                    │  - Membresías           │
                                    │  - Productos            │
                                    │  - Pedidos + Cupones    │
                                    │  - Blog + FAQs          │
                                    │  - Estadísticas         │
                                    │                         │
                                    └─────────────────────────┘
```

---

## Aspectos destacados del desarrollo

- **SaaS completo**: sistema de suscripciones con diferentes planes, cada uno con permisos configurables a nivel granular.
- **Editor visual avanzado**: el creador de tarjetas permite personalizar cada detalle del diseño con vista previa en tiempo real.
- **Estadísticas detalladas**: seguimiento completo de interacciones (visitas, clics, descargas, tiempo en pantalla, dispositivo).
- **Pagos integrados**: flujo completo de compra con Mercado Pago, incluyendo notificaciones automáticas de pago y verificación.
- **Optimización de imágenes**: todas las imágenes subidas se convierten automáticamente a formato WebP para mejor rendimiento.
- **Tareas programadas**: el sistema controla automáticamente el vencimiento de membresías y envía recordatorios.
- **Importación masiva**: posibilidad de crear usuarios/tarjetas en lote desde archivos Excel.
- **QR + vCard automáticos**: cada tarjeta genera su código QR y archivo de contacto descargable.
- **Comunicación en tiempo real**: uso de WebSockets para actualizaciones instantáneas.
- **API documentada**: documentación Swagger disponible para todos los endpoints.
- **Seguridad**: autenticación JWT, contraseñas encriptadas, validación de roles y permisos.
- **Diseño responsive**: la aplicación y las tarjetas se adaptan a cualquier dispositivo.
