# BlackPhone - Sistema de Gestión de Reparaciones de Dispositivos Móviles

Plataforma web completa para un servicio técnico de reparación de celulares, tablets y otros dispositivos electrónicos en España. Incluye cotizador automático, sistema de órdenes con seguimiento, notificaciones por email y WhatsApp, gestión de mayoristas y un panel de administración integral.

---

## Sobre el proyecto

BlackPhone es un sistema que digitaliza todo el flujo de trabajo de un servicio técnico de reparación: desde que el cliente entra a la web y pide un presupuesto, hasta que recibe su dispositivo reparado. El cliente selecciona su dispositivo, elige las averías, obtiene un precio automático, deja sus datos y recibe un código de seguimiento. Todo el proceso es rastreado y el cliente recibe actualizaciones por email y WhatsApp. Además, cuenta con un sistema de mayoristas para empresas que envían reparaciones en volumen.

---

## Funcionalidades principales

### Para el cliente

- **Cotizador automático de reparaciones**: el cliente selecciona la categoría de dispositivo (celular, tablet, etc.), la marca, el modelo y las averías. El sistema calcula el precio total en tiempo real basándose en la tabla de precios del negocio.
- **Buscador de modelos**: filtro por nombre para encontrar rápidamente el modelo dentro de cada marca.
- **Selección múltiple de averías**: se pueden seleccionar varias averías a la vez y el precio se va sumando automáticamente.
- **Formulario con datos de contacto**: nombre, email, teléfono (con prefijo internacional), provincia y población (con datos reales de todas las provincias y poblaciones de España).
- **Opción "Mi modelo no está en la lista"**: si el dispositivo no aparece, el cliente puede enviar una solicitud personalizada para que el negocio lo contacte con un presupuesto.
- **Opción "Mi avería no está en la lista"**: si la avería no se encuentra entre las listadas, el cliente puede coordinar una cita directamente.
- **Seguimiento de reparación**: con el código de 5 dígitos que recibe por email y WhatsApp, el cliente puede consultar en cualquier momento el estado de su reparación, ver los detalles del pedido, el presupuesto, las fotos de las averías y el historial de estados.
- **Notificaciones automáticas**: cuando se crea un pedido o cambia de estado, el cliente recibe una notificación por email y un mensaje de WhatsApp.

### Blog

- **Artículos con contenido enriquecido**: publicaciones con título, descripción, imagen, etiquetas (tags) y contenido con formato avanzado.
- **Artículos relacionados**: cada publicación puede tener artículos similares vinculados.
- **Página individual por artículo**: URL amigable con el título del artículo.

### Página de inicio

- **Hero principal**: sección de bienvenida con título, subtítulo y llamada a la acción.
- **Cómo funciona**: explicación visual paso a paso del servicio.
- **Reseñas de Google**: sección con opiniones reales de clientes.
- **Ubicación**: mapa e información del local.
- **Marcas y tecnologías**: logos de las marcas con las que trabajan.
- **Sección de redes sociales**: enlaces para seguir al negocio.
- **Formulario de contacto**: para consultas generales.
- **Botón flotante de WhatsApp**: contacto rápido con un clic.

### Páginas adicionales

- **Sobre nosotros**: sección editable con información del negocio, equipo y valores.
- **Garantías**: información sobre las garantías del servicio, editable desde el admin.
- **Inicio de sesión**: acceso al panel de administración.

---

## Sistema de mayoristas

- **Registro de mayoristas**: empresas que reparan dispositivos en volumen pueden solicitar acceso como mayoristas, indicando sus datos, dirección, provincia, municipio y un código de autenticación.
- **Aprobación manual**: el administrador revisa y aprueba o rechaza cada solicitud de mayorista.
- **Solicitudes de reparación mayorista**: los mayoristas aprobados pueden enviar pedidos de reparación indicando los detalles, la dirección de recogida, fecha, hora y si llevan el dispositivo al local o solicitan retiro.
- **Seguimiento con código**: cada solicitud mayorista tiene su propio código de seguimiento con historial de estados.
- **Notificaciones por email**: tanto el mayorista como el administrador reciben emails al crear o actualizar una solicitud.

---

## Panel de administración (Back-office)

### Gestión de precios
- **Tabla de precios completa**: cada modelo tiene un precio por avería, diferenciado por zona (local, fuera de Granada, mayorista).
- **Creación y edición de modelos**: agregar nuevos modelos con imagen, marca, categoría y precios por avería.
- **Orden de posición**: los modelos se pueden reordenar manualmente con drag & drop.
- **Exportación a PDF**: generar un PDF descargable con la tabla de precios filtrado por marca y averías seleccionadas.
- **Actualización masiva**: editar precios de múltiples modelos a la vez.

### Gestión de categorías
- **Categorías de dispositivos**: crear y editar las categorías disponibles (Celulares, Tablets, Smartwatch, etc.) con nombre e imagen representativa.

### Gestión de marcas
- **Marcas por categoría**: cada marca pertenece a una categoría y tiene nombre, imagen y orden de aparición configurable.

### Gestión de modelos
- **Modelos por marca**: listado de todos los modelos disponibles por marca con imagen y precios.

### Gestión de averías
- **Tipos de avería configurables**: crear averías con nombre, nombre público, identificador, icono, descripción y zona (local, fuera, mayorista). Las averías se convierten en columnas de la tabla de precios.

### Gestión de estados de reparación
- **Estados personalizados**: crear estados con nombre y mensaje. Se puede configurar cuál es el estado inicial y cuáles envían notificación automática al cliente al ser asignados.

### Gestión de órdenes de reparación
- **Vista de todas las órdenes**: tabla paginada con ID, fecha, cliente, modelo, estado y acciones.
- **Detalle completo del pedido**: ver toda la información (datos del cliente, dispositivo, averías, fotos, accesorios, monto, método de recolección, dirección, fecha y hora).
- **Cambio de estado con notificación**: al cambiar el estado de una orden, se envía automáticamente un email y un WhatsApp al cliente.
- **Vista de presupuestos**: sección separada para ver las solicitudes de clientes cuyo modelo o avería no estaba en el sistema.
- **Eliminación de órdenes**: posibilidad de eliminar pedidos.

### Gestión de costos adicionales
- **Accesorios y extras**: crear costos adicionales con nombre, precio, imagen y descripción (fundas, protectores, etc.) que se pueden agregar a las órdenes.

### Gestión del blog
- **Crear artículos**: editor de texto enriquecido con soporte para imágenes, formato y contenido avanzado.
- **Editar y eliminar**: gestión completa del contenido del blog.
- **Tags y artículos relacionados**: organización del contenido por etiquetas y referencias cruzadas.

### Gestión de textos de la web
- **Contenido editable**: todos los textos de la página (hero, ubicación, sobre nosotros, garantías, cómo funciona, mayoristas, por qué elegirnos) se pueden modificar sin tocar código.

### Reglas de precios
- **Recargos por zona**: configurar el sobrecosto para envíos fuera de Granada y para mayoristas.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **WhatsApp Web.js** | Envío automático de mensajes de WhatsApp al cliente cuando se crea un pedido o cambia de estado. El servidor se conecta a WhatsApp escaneando un QR |
| **Nodemailer** | Envío de emails con plantillas HTML al cliente y al administrador (confirmación de pedido, cambio de estado, solicitudes mayoristas) |
| **PDFMake** | Generación de PDFs descargables con la tabla de precios |
| **Google Reviews** | Sección con reseñas de Google en la página de inicio |
| **AOS (Animate On Scroll)** | Animaciones de aparición al hacer scroll |

---

## Tecnologías utilizadas

### Sitio web (Frontend)
- **Next.js 14 (App Router)** — Framework React con renderizado del lado del servidor y rutas basadas en carpetas
- **React 18** — Interfaz de usuario dinámica e interactiva
- **SASS** — Estilos avanzados con módulos CSS
- **Material UI (MUI)** — Componentes de interfaz y selectores de fecha
- **Framer Motion** — Animaciones fluidas
- **DND Kit** — Drag & drop para reordenar elementos en el panel de administración
- **React Quill** — Editor de texto enriquecido para el blog
- **React Select** — Selectores avanzados con búsqueda (marcas, provincias, poblaciones)
- **React Scroll** — Navegación suave entre secciones
- **AOS** — Animaciones al hacer scroll
- **Auto Animate** — Animaciones automáticas en listas
- **Axios** — Comunicación con el servidor
- **Notistack** — Notificaciones visuales
- **Font Awesome** — Iconografía
- **Day.js + Date-fns** — Manejo de fechas

### Servidor (Backend)
- **Node.js + Express** — Servidor web robusto
- **MongoDB + Mongoose** — Base de datos flexible con relaciones y paginación
- **JWT** — Autenticación segura del administrador
- **Bcrypt** — Encriptación de contraseñas
- **WhatsApp Web.js** — Bot de WhatsApp integrado para notificaciones automáticas
- **Nodemailer** — Envío de correos electrónicos con plantillas HTML
- **Multer** — Subida de imágenes (fotos de averías, modelos, marcas, blog)
- **PDFMake** — Generación de documentos PDF con tablas de precios
- **Lodash** — Utilidades para manipulación de datos

---

## Arquitectura del sistema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│                         │         │                         │
│   Sitio Web             │◄───────►│   Servidor API          │
│   (Next.js 14)          │  REST   │   (Node + Express)      │
│                         │         │                         │
│  - Cotizador            │         │  - Autenticación        │
│  - Formulario pedido    │         │  - CRUD Precios/Modelos │
│  - Seguimiento          │         │  - Órdenes + Estados    │
│  - Blog                 │         │  - Mayoristas           │
│  - Landing page         │         │  - Blog                 │
│  - Panel admin          │         │  - Textos editables     │
│                         │         │  - Generación PDF       │
└─────────────────────────┘         └────────┬────────────────┘
                                             │
         ┌───────────────────┐      ┌────────▼────────────────┐
         │                   │      │                         │
         │  WhatsApp Bot     │◄─────│   Base de datos         │
         │  (whatsapp-web.js)│      │   (MongoDB)             │
         │                   │      │                         │
         │  - Confirmación   │      │  - Órdenes              │
         │    de pedido      │      │  - Precios/Modelos      │
         │  - Cambio estado  │      │  - Marcas/Categorías    │
         │                   │      │  - Averías/Estados      │
         └───────────────────┘      │  - Mayoristas           │
                                    │  - Blog                 │
         ┌───────────────────┐      │  - Textos web           │
         │                   │      │  - Costos adicionales   │
         │  Email (SMTP)     │◄─────│                         │
         │                   │      └─────────────────────────┘
         │  - Al cliente     │
         │  - Al admin       │
         │  - Al mayorista   │
         │                   │
         └───────────────────┘
```

---

## Flujo del cliente

```
Selecciona categoría → Selecciona marca → Selecciona modelo
        ↓
Elige averías (precio automático) → Completa datos personales
        ↓
Confirma pedido → Recibe código de seguimiento
        ↓
Notificación por email + WhatsApp
        ↓
Consulta estado con su código en /seguimiento
        ↓
Recibe notificaciones automáticas con cada cambio de estado
```

---

## Aspectos destacados del desarrollo

- **Cotizador inteligente**: cálculo automático de presupuesto basado en una tabla de precios configurable por modelo, avería y zona geográfica.
- **Notificaciones multicanal**: el cliente recibe confirmaciones y actualizaciones tanto por email como por WhatsApp de forma automática.
- **Bot de WhatsApp integrado**: el servidor se conecta directamente a WhatsApp mediante whatsapp-web.js, permitiendo enviar mensajes automáticos sin servicios externos de pago.
- **Sistema de mayoristas**: flujo separado para empresas que trabajan con reparaciones en volumen, con registro, aprobación y seguimiento independiente.
- **Tabla de precios dinámica**: cada avería es una columna configurable, los modelos se pueden reordenar, y todo se puede exportar a PDF.
- **Datos reales de España**: provincias y poblaciones cargadas para selección precisa de ubicación.
- **Contenido 100% editable**: todos los textos, secciones e información de la web se modifican desde el panel sin necesidad de un desarrollador.
- **Seguimiento en tiempo real**: el cliente puede ver el estado y todo el historial de su reparación con un código de 5 dígitos.
- **Subida de fotos de averías**: el cliente puede adjuntar fotos del daño al hacer el pedido.
- **Diseño responsive**: toda la plataforma se adapta a celulares, tablets y escritorio.
- **Seguridad**: autenticación JWT, contraseñas encriptadas y acceso protegido al panel de administración.
- **Rendimiento**: Next.js 14 con App Router para carga rápida y buen posicionamiento en buscadores.
