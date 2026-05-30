# CASEPE - Sitio Web Institucional de la Cámara de Empresas de Operaciones Petroleras Especiales

Sitio web institucional desarrollado para CASEPE (Cámara de Empresas de Operaciones Petroleras Especiales), una asociación civil que nuclea a empresas que brindan servicios petroleros en Argentina. El sitio presenta toda la información de la cámara, sus operaciones, historia, compromiso ambiental, localidades, noticias y un formulario de contacto, con todo el contenido administrable desde el propio sitio.

---

## Sobre el proyecto

CASEPE necesitaba un sitio web institucional que transmitiera profesionalismo y permitiera mantener actualizado su contenido sin depender de un desarrollador. La solución fue una plataforma con contenido 100% editable: cuando el administrador inicia sesión, cada texto e imagen de la web se vuelve editable directamente desde la misma página, sin necesidad de entrar a un panel separado. Además, incluye un blog de noticias y un formulario de contacto con envío de emails automáticos.

---

## Funcionalidades principales

### Para el visitante

- **Página de inicio**: sección hero con imagen de fondo, subtítulo y texto de presentación. Sección institucional con galería de imágenes. Imagen de fondo con efecto parallax. Sección de servicios y áreas de trabajo con navegación interactiva (se selecciona un ítem y se muestra su contenido e imagen). Sección de noticias recientes del blog.
- **Nuestra visión e historia**: página con secciones dinámicas que muestran la trayectoria de la cámara, cada una con título, subtítulo, imagen y contenido con formato enriquecido. Las secciones se alternan visualmente (imagen a la izquierda/derecha).
- **Quiénes somos (Operaciones)**: listado interactivo de los tipos de operaciones y servicios que ofrecen las empresas de la cámara. Se selecciona una operación de la lista y se despliega su descripción con formato enriquecido.
- **Compromiso ambiental**: página dedicada a las iniciativas ambientales de la cámara, con imagen central y secciones distribuidas a ambos lados mostrando las acciones y compromisos medioambientales.
- **Localidades**: sección que muestra las diferentes localidades donde opera la cámara, cada una con imagen, título y descripción con contenido enriquecido.
- **Nuestra gente**: perfiles del equipo y las personas detrás de la cámara, cada uno con foto, nombre, cargo y biografía.
- **Blog de noticias**: listado de artículos con imagen, fecha, título, descripción y acceso a la nota completa. Los artículos pueden tener etiquetas (tags) y artículos relacionados.
- **Formulario de contacto**: formulario integrado en el footer con campos de nombre, apellido, email, asunto y mensaje. Los mensajes se envían directamente al correo de la cámara.
- **Términos y condiciones**: página con contenido legal editable con formato enriquecido.
- **Navegación responsive**: menú de navegación adaptable con versión de escritorio y versión móvil desplegable.
- **Animaciones al hacer scroll**: efectos visuales de aparición y transición en todas las secciones del sitio.

### Sistema de edición en vivo (para el administrador)

La característica más destacada del sitio es que **todo el contenido se edita directamente desde la web**:

- **Textos editables en línea**: cuando el administrador está conectado, cada texto de la web muestra un ícono de edición. Al hacer clic, se abre un editor donde se puede modificar el contenido. Para textos simples se edita directamente, y para contenido con formato se abre un editor de texto enriquecido.
- **Imágenes editables en línea**: cada imagen del sitio muestra un botón "Editar Imagen" que permite reemplazarla por una nueva sin salir de la página.
- **Secciones dinámicas**: el administrador puede agregar y eliminar ítems en cualquier sección (historia, operaciones, compromiso ambiental, localidades, nuestra gente, servicios del inicio). Cada sección tiene un botón "Agregar Item" que abre un formulario con los campos necesarios.
- **Sin panel separado para contenido**: no hace falta ir a otro lugar para actualizar textos, imágenes o secciones. Todo se hace desde la misma página que ve el visitante.

### Panel de administración

- **Gestión del blog**: crear, editar y eliminar artículos con editor de texto enriquecido, imágenes, etiquetas y artículos relacionados. Confirmación antes de eliminar.
- **Inicio de sesión seguro**: acceso protegido con usuario y contraseña.
- **Cierre de sesión**: opción para desconectarse desde el panel.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Nodemailer** | Envío de mensajes de contacto por email con plantilla HTML profesional al correo de la cámara |
| **AOS (Animate On Scroll)** | Animaciones de aparición y transición al hacer scroll en todas las secciones |
| **React Scroll** | Navegación suave hacia la sección de contacto desde cualquier lugar del sitio |
| **React Quill** | Editor de texto enriquecido para modificar contenido con formato desde la web |

---

## Tecnologías utilizadas

### Sitio web (Frontend)
- **Next.js 14** — Framework React con renderizado optimizado y rutas basadas en carpetas
- **React 18** — Interfaz de usuario dinámica e interactiva
- **SASS** — Estilos avanzados con módulos CSS para cada componente
- **Axios** — Comunicación con el servidor
- **React Quill** — Editor de texto enriquecido para edición de contenido en línea
- **React Select** — Selectores avanzados con búsqueda
- **React Scroll** — Navegación suave entre secciones
- **AOS** — Animaciones al hacer scroll
- **Notistack** — Notificaciones visuales de acciones
- **Font Awesome** — Iconografía
- **React HTML Parser** — Renderizado de contenido HTML enriquecido
- **Sharp** — Optimización de imágenes

### Servidor (Backend)
- **Node.js + Express** — Servidor web robusto
- **MongoDB + Mongoose** — Base de datos flexible para almacenar todo el contenido del sitio
- **JWT** — Autenticación segura del administrador
- **Bcrypt** — Encriptación de contraseñas
- **Multer** — Subida de imágenes (fotos de secciones, blog, etc.)
- **Nodemailer** — Envío de correos electrónicos con plantilla HTML personalizada
- **Lodash** — Actualización dinámica de propiedades anidadas en el contenido web
- **UUID** — Generación de identificadores únicos
- **FS Extra** — Manejo avanzado de archivos del sistema

---

## Arquitectura del sistema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│                         │         │                         │
│   Sitio Web             │◄───────►│   Servidor API          │
│   (Next.js 14)          │  REST   │   (Node + Express)      │
│                         │         │                         │
│  - Página de inicio     │         │  - Autenticación        │
│  - Historia y visión    │         │  - CRUD Blog            │
│  - Operaciones          │         │  - Gestión de textos    │
│  - Compromiso ambiental │         │  - Gestión de imágenes  │
│  - Localidades          │         │  - Secciones dinámicas  │
│  - Nuestra gente        │         │  - Envío de emails      │
│  - Blog de noticias     │         │  - Subida de archivos   │
│  - Contacto             │         │                         │
│  - Edición en vivo      │         │                         │
│                         │         │                         │
└─────────────────────────┘         └────────┬────────────────┘
                                             │
         ┌───────────────────┐      ┌────────▼────────────────┐
         │                   │      │                         │
         │  Email (SMTP)     │◄─────│   Base de datos         │
         │                   │      │   (MongoDB)             │
         │  - Mensajes de    │      │                         │
         │    contacto al    │      │  - Textos web           │
         │    administrador  │      │  - Blog (noticias)      │
         │                   │      │  - Usuarios (admin)     │
         └───────────────────┘      │                         │
                                    └─────────────────────────┘
```

---

## Secciones del sitio

| Página | Descripción |
|---|---|
| **Inicio** | Hero con imagen de fondo, sección institucional con galería, imagen parallax, servicios interactivos con imagen y texto, noticias recientes del blog |
| **Nuestra visión e historia** | Secciones alternadas con imagen, título, subtítulo y contenido enriquecido sobre la trayectoria de la cámara |
| **Quiénes somos** | Lista interactiva de operaciones y servicios con descripción detallada de cada uno |
| **Compromiso ambiental** | Iniciativas ambientales con imagen central y secciones distribuidas a ambos lados |
| **Localidades** | Localidades de operación con imagen, título y descripción, alternando su disposición visual |
| **Nuestra gente** | Perfiles del equipo con foto, nombre, cargo y biografía |
| **Noticias** | Blog con artículos, imágenes, fecha, descripción y página individual por noticia |
| **Términos y condiciones** | Contenido legal editable con formato enriquecido |
| **Contacto** | Formulario en el footer con envío de email automático |
| **Panel admin** | Gestión del blog y acceso a edición en vivo de toda la web |

---

## Aspectos destacados del desarrollo

- **Edición en vivo sin panel separado**: la característica principal del sitio es que todo el contenido (textos, imágenes, secciones) se edita directamente desde la misma página que ve el visitante, simplemente iniciando sesión como administrador.
- **Contenido dinámico con propiedades anidadas**: el sistema usa Lodash para actualizar cualquier propiedad del contenido web de forma dinámica, sin importar su nivel de anidamiento (por ejemplo, `home.sectionFour.sections[0].title`).
- **Secciones expandibles**: el administrador puede agregar y eliminar ítems en cualquier sección del sitio, adaptando el contenido a sus necesidades.
- **Editor de texto enriquecido**: los textos que requieren formato (negritas, listas, enlaces, etc.) se editan con un editor visual completo integrado en la web.
- **Blog con artículos relacionados**: cada noticia puede vincularse con artículos similares para mejorar la navegación del contenido.
- **Emails con plantilla HTML**: los mensajes de contacto llegan al administrador con un diseño profesional y responsive.
- **Animaciones profesionales**: todas las secciones tienen efectos de aparición al hacer scroll para una experiencia visual atractiva.
- **Diseño responsive**: el sitio se adapta completamente a celulares, tablets y escritorio, incluyendo un menú móvil dedicado.
- **Seguridad**: autenticación JWT, contraseñas encriptadas y verificación de sesión en cada operación administrativa.
- **Rendimiento**: Next.js 14 para carga rápida y buen posicionamiento en buscadores.
