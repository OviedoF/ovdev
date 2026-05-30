# Fuku Shop - Tienda Online de Ropa Urbana y Anime

Tienda online completa para la venta de ropa con estilo anime, asiático y de videojuegos. Incluye catálogo de productos con variantes por color y talle, sistema de filtros avanzados, galería de imágenes con zoom, tabla de talles, carrito de compras, historial de compras, notificaciones, formulario de contacto con envío de emails, generación automática de sitemap para SEO, y un panel de administración para gestionar todo el catálogo. Originaria de Rafaela, Santa Fe, Argentina.

---

## Sobre el proyecto

Fuku Shop es una tienda online pensada para un emprendimiento de ropa urbana con temática anime y asiática. El cliente entra a la web, navega el catálogo de productos, filtra por categoría, tipo de prenda, color, talle o rango de precio, elige su producto, selecciona el color y talle, y lo agrega al carrito. Cada producto tiene múltiples variantes con imágenes propias (frente, reverso, cuerpo completo y galería). El administrador gestiona todo el catálogo desde un panel interno: productos, colores, talles, categorías, subcategorías, tipos de prenda y subtipos.

---

## Funcionalidades principales

### Para el cliente

- **Catálogo de productos**: listado de todos los productos disponibles con imagen, nombre, precio y precio con descuento.
- **Filtros avanzados**: filtrar productos por categoría, tipo de prenda, color, talle y rango de precio. Los filtros se combinan entre sí para búsquedas precisas.
- **Filtro por categoría desde el inicio**: al seleccionar una categoría en la página principal, se redirige al catálogo ya filtrado por esa categoría.
- **Página individual de producto**: cada producto tiene su propia página con nombre, descripción, precio, descuento, selección de color y talle, galería de imágenes y zoom sobre la imagen.
- **Variantes por color**: cada color del producto tiene su propia imagen principal, imagen trasera, imagen completa y galería de fotos adicionales, con el código hexadecimal del color para identificación visual.
- **Zoom de imagen**: al pasar el cursor sobre la imagen del producto, se activa un zoom para ver los detalles de la prenda.
- **Productos destacados**: sección en la página de inicio con los productos marcados como destacados.
- **Tabla de talles**: página dedicada con la tabla de medidas (alto, ancho, mangas, hombros) para cada talle disponible, para que el cliente pueda elegir el talle correcto.
- **Carrito de compras**: agregar productos al carrito con la variante de color y talle seleccionada.
- **Historial de compras**: cada usuario tiene su historial de compras anteriores.
- **Notificaciones**: sistema de notificaciones internas con asunto, mensaje y enlace de redirección.
- **Direcciones de envío**: el usuario puede guardar múltiples direcciones (país, ciudad, dirección) para sus envíos.
- **Reseñas y calificaciones**: los productos tienen sistema de reseñas con calificación promedio y cantidad de valoraciones.
- **Formulario de contacto**: formulario con nombre, email, asunto y mensaje que se envía directamente al correo del negocio.
- **Sobre nosotros**: página con la historia y descripción del emprendimiento.
- **Políticas**: página con las políticas de la tienda.
- **Registro y login**: sistema de autenticación con email y contraseña, con opción de Google.

### Panel de administración

- **Gestión de productos**: crear, editar y eliminar productos con nombre, descripción, precio, precio con oferta, descuento, tipo de prenda, categoría, subcategoría, colores con imágenes (frente, reverso, cuerpo completo), stock por color y opción de destacado.
- **Gestión de colores**: crear y administrar los colores disponibles, cada uno con nombre, código hexadecimal y clave de imagen.
- **Gestión de talles**: crear y administrar talles con nombre y medidas (alto, ancho, mangas, hombros).
- **Gestión de categorías**: crear categorías con nombre, imagen y descripción.
- **Gestión de subcategorías**: crear subcategorías asociadas a una categoría, con nombre, descripción e imágenes.
- **Gestión de tipos de prenda**: crear tipos de prenda (remera, buzo, pantalón, etc.) con nombre, descripción e imágenes.
- **Gestión de subtipos**: crear subtipos dentro de cada tipo de prenda, con nombre, descripción e imágenes.
- **Listados completos**: vista de listado para cada entidad (productos, colores, talles, categorías, subcategorías, tipos, subtipos) con opciones de edición y eliminación.

### SEO

- **Generación automática de sitemap**: script que genera el sitemap XML con todas las URLs del sitio, incluyendo prioridades configuradas por sección.
- **Limpieza de URLs inválidas**: script adicional que elimina URLs problemáticas del sitemap generado.
- **Meta tags**: cada página tiene título y meta viewport configurados.
- **Generación estática (SSG)**: las páginas de productos y catálogo se generan de forma estática con revalidación automática para mejor rendimiento y SEO.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Nodemailer** | Envío de mensajes de contacto por email al correo del negocio |
| **Mercado Pago** | Procesamiento de pagos para las compras |
| **Cloudinary** | Almacenamiento y optimización de imágenes en la nube |
| **Socket.IO** | Comunicación en tiempo real |
| **React Query** | Manejo eficiente de datos del servidor con caché y revalidación |
| **Redux** | Estado global de la aplicación (carrito, autenticación, productos) |
| **Sitemap Generator** | Generación automática de sitemap XML para SEO |

---

## Tecnologías utilizadas

### Tienda web (Frontend)
- **Next.js 13** — Framework React con generación estática (SSG) y revalidación incremental
- **React 18** — Interfaz de usuario dinámica e interactiva
- **Redux** — Manejo del estado global (carrito, autenticación, filtros)
- **React Query** — Caché y sincronización de datos del servidor
- **SASS** — Estilos avanzados con módulos CSS
- **React Scroll** — Navegación suave entre secciones
- **React Spinners** — Indicadores de carga visuales
- **Axios** — Comunicación con el servidor
- **Notistack** — Notificaciones visuales
- **Font Awesome** — Iconografía
- **Sharp** — Optimización de imágenes
- **Nextjs Sitemap Generator** — Generación automática de sitemap XML

### Servidor (Backend)
- **Node.js + Express** — Servidor web robusto
- **MongoDB + Mongoose** — Base de datos flexible con relaciones profundas (deep populate)
- **JWT** — Autenticación segura con tokens
- **Bcrypt** — Encriptación de contraseñas
- **Mercado Pago SDK** — Procesamiento de pagos
- **Cloudinary** — Almacenamiento de imágenes en la nube
- **Socket.IO** — Comunicación en tiempo real
- **Nodemailer** — Envío de correos electrónicos
- **Multer + Sharp** — Subida y optimización de imágenes
- **QRCode** — Generación de códigos QR
- **Agenda.js** — Tareas programadas
- **UUID** — Generación de identificadores únicos

---

## Arquitectura del sistema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│                         │         │                         │
│   Tienda Web            │◄───────►│   Servidor API          │
│   (Next.js 13)          │  REST   │   (Node + Express)      │
│                         │  + WS   │                         │
│  - Catálogo + Filtros   │         │  - Autenticación        │
│  - Página de producto   │         │  - CRUD Productos       │
│  - Carrito de compras   │         │  - Variantes + Colores  │
│  - Tabla de talles      │         │  - Categorías + Tipos   │
│  - Contacto             │         │  - Talles               │
│  - Login / Registro     │         │  - Emails               │
│  - Panel admin          │         │  - Pagos (Mercado Pago) │
│  - SEO + Sitemap        │         │  - Imágenes (Cloudinary)│
│                         │         │                         │
└─────────────────────────┘         └────────┬────────────────┘
                                             │
         ┌───────────────────┐      ┌────────▼────────────────┐
         │                   │      │                         │
         │  Cloudinary       │◄─────│   Base de datos         │
         │  (Imágenes)       │      │   (MongoDB)             │
         │                   │      │                         │
         └───────────────────┘      │  - Productos            │
                                    │  - Variantes            │
         ┌───────────────────┐      │  - Colores              │
         │                   │      │  - Talles               │
         │  Mercado Pago     │◄─────│  - Categorías           │
         │  (Pagos)          │      │  - Subcategorías        │
         │                   │      │  - Tipos de prenda      │
         └───────────────────┘      │  - Subtipos             │
                                    │  - Usuarios + Roles     │
         ┌───────────────────┐      │  - Reseñas              │
         │                   │      │                         │
         │  Email (SMTP)     │◄─────└─────────────────────────┘
         │  (Nodemailer)     │
         │                   │
         └───────────────────┘
```

---

## Flujo del cliente

```
Entra a la tienda → Ve productos destacados y categorías
        ↓
Navega el catálogo → Filtra por categoría, tipo, color, talle o precio
        ↓
Selecciona un producto → Elige color y talle → Ve galería con zoom
        ↓
Agrega al carrito → Completa la compra con Mercado Pago
        ↓
Recibe confirmación → La compra queda en su historial
```

---

## Aspectos destacados del desarrollo

- **Variantes de producto completas**: cada producto puede tener múltiples colores, y cada color tiene sus propias imágenes (frente, reverso, cuerpo completo, galería), stock independiente y código hexadecimal para la muestra visual.
- **Filtros combinados**: el catálogo permite filtrar por múltiples criterios a la vez (categoría + tipo + color + talle + precio), combinándolos para resultados precisos.
- **Zoom de imagen**: al pasar el cursor sobre la imagen del producto, se activa un zoom para inspeccionar los detalles de la prenda.
- **Generación estática con revalidación**: las páginas del catálogo se generan de forma estática (SSG) con revalidación incremental cada segundo, logrando velocidad de carga óptima sin sacrificar datos actualizados.
- **SEO optimizado**: generación automática de sitemap XML con prioridades por sección, meta tags configurados y URLs amigables por nombre de producto.
- **Tabla de talles dinámica**: los talles se administran desde el panel y se muestran al cliente con medidas reales (alto, ancho, mangas, hombros) para facilitar la elección.
- **Imágenes en la nube**: las imágenes de productos se almacenan en Cloudinary para optimización automática y carga rápida.
- **Categorías jerárquicas**: sistema de categorías con subcategorías, y tipos de prenda con subtipos, para organizar el catálogo de forma flexible.
- **Panel de administración completo**: gestión de todo el catálogo (productos, colores, talles, categorías, subcategorías, tipos, subtipos) desde un panel dedicado.
- **Estado global con Redux**: carrito de compras, autenticación y datos del catálogo manejados con Redux para una experiencia fluida.
- **React Query**: caché inteligente de datos del servidor para evitar solicitudes innecesarias y mejorar la velocidad de navegación.
- **Diseño responsive**: toda la tienda se adapta a celulares, tablets y escritorio.
- **Seguridad**: autenticación JWT, contraseñas encriptadas con Bcrypt, roles de usuario y acceso protegido al panel de administración.
