# Alhambra Guide Granada - Sitio Web de Turismo

Sitio web profesional desarrollado para una empresa de guías turísticos en Granada, España, especializada en visitas guiadas a la Alhambra y sus alrededores.

---

## Sobre el proyecto

Se trata de una plataforma web completa que permite a los visitantes explorar los distintos circuitos turísticos disponibles, realizar reservas de servicios, leer artículos del blog y contactar directamente con la empresa. Además, cuenta con un panel de administración privado para que el cliente pueda gestionar todo el contenido de forma autónoma, sin necesidad de un desarrollador.

---

## Funcionalidades principales

### Para el visitante

- **Exploración de circuitos turísticos**: los usuarios pueden navegar entre los distintos recorridos disponibles (Albaicín, Sacromonte, Alpujarras, Alhambra, entre otros) y ver toda la información de cada uno en su página dedicada.
- **Sistema de reservas**: formulario integrado en la página principal y en cada circuito, donde el visitante ingresa su nombre, email, teléfono, fecha de visita, cantidad de personas y el circuito elegido. Las reservas llegan directamente al correo del cliente.
- **Blog de noticias**: sección con artículos sobre la Alhambra, historia, novedades y consejos para los visitantes, con imágenes y contenido enriquecido.
- **Contacto directo por WhatsApp**: botón flotante siempre visible que abre una conversación de WhatsApp con la empresa para consultas rápidas.
- **Traducción automática a 7 idiomas**: el sitio puede traducirse a español, inglés, árabe, francés, bengalí, catalán y alemán, pensado para el público internacional que visita Granada.
- **Página de contacto**: formulario para enviar mensajes directamente a la empresa.
- **Página "Sobre nosotros"**: sección con información de la empresa, galería de imágenes y descripción del equipo.
- **Diseño adaptable**: toda la web se adapta correctamente a celulares, tablets y computadoras de escritorio.

### Para el administrador (Panel privado)

- **Gestión de circuitos**: crear, editar y eliminar circuitos turísticos con contenido enriquecido (textos con formato, imágenes, enlaces).
- **Gestión del blog**: crear, editar y eliminar artículos del blog con imágenes y editor de texto avanzado.
- **Edición de textos en vivo**: los textos de la web (títulos, descripciones, botones) se pueden modificar directamente haciendo clic sobre ellos cuando el administrador está conectado, sin entrar al panel.
- **Sistema de acceso seguro**: inicio de sesión con usuario y contraseña protegido.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **WhatsApp Business** | Contacto directo con un clic desde la web |
| **FormSubmit** | Recepción de reservas por correo electrónico |
| **Google Translate** | Traducción automática del sitio a múltiples idiomas |
| **TripAdvisor** | Enlace y banner hacia el perfil de la empresa |
| **Instagram** | Integración con el perfil del guía |
| **TikTok, Snapchat, Facebook** | Enlaces directos a todas las redes sociales |

---

## Tecnologías utilizadas

### Sitio web (Frontend)
- **Next.js 13** — Framework de React para sitios web rápidos y optimizados para buscadores (SEO)
- **React 18** — Biblioteca para construir interfaces de usuario interactivas
- **Redux** — Manejo del estado global de la aplicación (sesión del usuario, textos de la web)
- **SASS** — Estilos avanzados y organizados
- **Axios** — Comunicación con el servidor
- **React Quill** — Editor de texto enriquecido para el panel de administración
- **Notistack** — Notificaciones visuales de acciones (creación, edición, errores)
- **RSuite** — Componentes de interfaz complementarios
- **Font Awesome** — Iconografía profesional

### Servidor (Backend)
- **Node.js + Express** — Servidor web robusto y escalable
- **MongoDB + Mongoose** — Base de datos flexible para almacenar circuitos, blogs, textos y usuarios
- **JWT (JSON Web Tokens)** — Autenticación segura del administrador
- **Bcrypt** — Encriptación de contraseñas
- **Multer** — Subida y gestión de imágenes
- **Nodemailer** — Envío de correos electrónicos desde el servidor
- **PDFMake** — Generación de documentos PDF

---

## Arquitectura del sistema

```
┌─────────────────────┐       ┌─────────────────────┐
│                     │       │                     │
│   Sitio Web         │◄─────►│   Servidor API      │
│   (Next.js)         │       │   (Node + Express)  │
│                     │       │                     │
│  - Páginas públicas │       │  - Autenticación    │
│  - Panel admin      │       │  - CRUD Circuitos   │
│  - Blog             │       │  - CRUD Blog        │
│  - Reservas         │       │  - Gestión textos   │
│  - Traducción       │       │  - Subida imágenes  │
│                     │       │                     │
└─────────────────────┘       └────────┬────────────┘
                                       │
                              ┌────────▼────────────┐
                              │                     │
                              │   Base de datos     │
                              │   (MongoDB)         │
                              │                     │
                              │  - Usuarios         │
                              │  - Circuitos        │
                              │  - Blog posts       │
                              │  - Textos web       │
                              │                     │
                              └─────────────────────┘
```

---

## Secciones del sitio

| Página | Descripción |
|---|---|
| **Inicio** | Hero principal con imagen, formulario de reserva, circuitos disponibles, información general, banners de TripAdvisor e Instagram |
| **Sobre nosotros** | Historia de la empresa, galería de fotos, llamada a la acción para contratar un guía |
| **Blog** | Listado de artículos con imágenes, cada uno con su página individual |
| **Contacto** | Formulario de contacto con imagen decorativa |
| **Circuito (detalle)** | Página individual por circuito con contenido completo y formulario de reserva |
| **Panel Admin** | Gestión de blog y circuitos, con editor de texto avanzado |

---

## Aspectos destacados del desarrollo

- **Contenido 100% administrable**: el cliente puede modificar textos, crear circuitos y publicar artículos sin ayuda técnica.
- **Edición en línea**: los textos de la web se pueden editar directamente desde la página, sin necesidad de entrar a un panel separado.
- **Renderizado del lado del servidor (SSR)**: las páginas se generan en el servidor para mejor velocidad de carga y posicionamiento en Google.
- **Multilingüe**: soporte para 7 idiomas orientado al turismo internacional.
- **Comunicación directa**: integración con WhatsApp y correo electrónico para maximizar las conversiones de reserva.
- **Diseño responsive**: experiencia optimizada en cualquier dispositivo.
- **Seguridad**: autenticación con tokens, contraseñas encriptadas y roles de usuario.
