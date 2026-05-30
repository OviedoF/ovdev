# MóvilPrint - Plataforma de Diseño e Impresión Personalizada

Plataforma web para crear diseños personalizados de impresión. El usuario elige una plantilla, accede al editor visual donde puede agregar textos con diferentes fuentes, tamaños, colores y estilos, insertar imágenes y elementos decorativos, y posicionar cada elemento con arrastrar y soltar. Los diseños se guardan y pueden enviarse para impresión. Incluye login con Google y Facebook, sistema de puntos, notificaciones, recuperación de contraseña por email, y un panel de administración para gestionar plantillas, diseños recibidos y moderadores.

---

## Sobre el proyecto

MóvilPrint es una herramienta de diseño online pensada para un negocio de impresión personalizada. El cliente entra a la plataforma, se registra (con email o con su cuenta de Google o Facebook), elige una plantilla de diseño entre las disponibles y accede al editor visual. En el editor, puede agregar textos personalizados eligiendo entre múltiples fuentes tipográficas, ajustar el tamaño, color, negrita, cursiva y subrayado, insertar imágenes y elementos decorativos propios de la plantilla, y mover cada elemento libremente arrastrándolo por el lienzo. También puede copiar, pegar y eliminar elementos. Una vez terminado el diseño, lo envía con un nombre y queda registrado en el sistema para su impresión. El administrador gestiona las plantillas disponibles y los moderadores revisan los diseños recibidos.

---

## Funcionalidades principales

### Para el usuario

- **Registro y login**: registro con email y contraseña, o acceso rápido con cuenta de Google o Facebook.
- **Selección de plantilla**: al ingresar, el usuario ve todas las plantillas disponibles con su imagen de fondo y elige la que quiere personalizar.
- **Editor visual de diseño**: editor interactivo donde el usuario crea su diseño sobre la plantilla elegida.
- **Textos personalizados**: agregar textos con control completo de fuente tipográfica (más de 15 fuentes disponibles), tamaño, color, negrita, cursiva y subrayado.
- **Imágenes y elementos decorativos**: insertar imágenes y formas decorativas que vienen incluidas en cada plantilla.
- **Arrastrar y soltar**: todos los elementos (textos, imágenes, formas) se posicionan libremente arrastrándolos por el lienzo del diseño.
- **Redimensionar y rotar**: cada elemento puede cambiar de tamaño y rotarse para ajustarlo al diseño.
- **Copiar y pegar elementos**: duplicar cualquier elemento del diseño con un clic.
- **Capas (z-index)**: los elementos se organizan en capas, controlando cuál aparece delante y cuál detrás.
- **Vista previa del diseño**: ver el diseño terminado tal como quedará impreso.
- **Impresión directa**: opción de imprimir el diseño directamente desde el navegador.
- **Envío del diseño**: al finalizar, el usuario le pone un nombre al diseño y lo envía para que el negocio lo reciba.
- **Mis diseños**: listado de todos los diseños creados por el usuario.
- **Recuperación de contraseña**: flujo de recuperación con envío de código de verificación por email.
- **Sistema de puntos**: los usuarios acumulan puntos dentro de la plataforma.
- **Notificaciones**: sistema de notificaciones internas con título y descripción.

### Panel de administración

- **Gestión de plantillas**: crear, editar y eliminar plantillas de diseño con nombre, dimensiones (ancho y alto en centímetros), imagen de fondo, elementos decorativos e imágenes adicionales.
- **Plantillas con recursos**: cada plantilla incluye su propia colección de elementos (formas decorativas e imágenes) que el usuario puede usar en el editor.
- **Gestión de diseños recibidos**: ver todos los diseños enviados por los usuarios con su detalle completo.
- **Eliminación masiva de diseños**: opción de eliminar todos los diseños de una vez.
- **Gestión de moderadores**: crear cuentas de moderador para ayudar en la revisión de diseños.
- **Roles diferenciados**: tres roles (usuario, moderador, administrador) con acceso a diferentes secciones.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Google OAuth** | Inicio de sesión con cuenta de Google mediante Google Auth Library y Google APIs |
| **Facebook Login** | Inicio de sesión con cuenta de Facebook mediante Graph API |
| **Mercado Pago** | Procesamiento de pagos dentro de la plataforma |
| **Nodemailer** | Envío de códigos de verificación por email para recuperación de contraseña |
| **React Draggable** | Arrastrar y soltar elementos dentro del editor de diseño |
| **Framer Motion** | Animaciones fluidas en la interfaz de usuario |
| **Notistack** | Notificaciones visuales de acciones (elemento copiado, diseño enviado, etc.) |

---

## Tecnologías utilizadas

### Aplicación web (Frontend)
- **React 18** — Interfaz de usuario dinámica e interactiva
- **Vite** — Empaquetador rápido para desarrollo y producción
- **React Router** — Navegación entre páginas (selección de plantilla, editor, mis diseños, login)
- **React Draggable** — Sistema de arrastrar y soltar para posicionar elementos en el editor
- **Framer Motion** — Animaciones fluidas
- **SASS** — Estilos avanzados con módulos CSS
- **React Icons** — Iconografía (controles del editor, acciones)
- **React Spinners** — Indicadores de carga
- **Axios** — Comunicación con el servidor
- **Notistack** — Notificaciones visuales
- **UUID** — Identificadores únicos para cada elemento del diseño

### Servidor (Backend)
- **Node.js + Express** — Servidor web con módulos ES
- **MongoDB + Mongoose** — Base de datos flexible para diseños, plantillas y usuarios
- **JWT** — Autenticación segura con tokens
- **Bcrypt** — Encriptación de contraseñas
- **Google Auth Library + Google APIs** — Login social con Google
- **Facebook Graph API** — Login social con Facebook
- **Mercado Pago SDK** — Procesamiento de pagos
- **Multer** — Subida de imágenes (fondos de plantillas, elementos, formas)
- **Nodemailer** — Envío de correos electrónicos (recuperación de contraseña)
- **Crypto** — Generación de códigos de verificación seguros
- **UUID** — Identificadores únicos

---

## Arquitectura del sistema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│                         │         │                         │
│   Aplicación Web        │◄───────►│   Servidor API          │
│   (React 18 + Vite)     │  REST   │   (Node + Express)      │
│                         │         │                         │
│  - Selección plantilla  │         │  - Autenticación        │
│  - Editor de diseño     │         │  - Login social         │
│  - Textos + Imágenes    │         │    (Google + Facebook)  │
│  - Arrastrar y soltar   │         │  - CRUD Plantillas      │
│  - Vista previa         │         │  - CRUD Diseños         │
│  - Mis diseños          │         │  - Usuarios + Roles     │
│  - Login / Registro     │         │  - Notificaciones       │
│  - Panel admin          │         │  - Pagos (Mercado Pago) │
│                         │         │  - Emails               │
└─────────────────────────┘         └────────┬────────────────┘
                                             │
         ┌───────────────────┐      ┌────────▼────────────────┐
         │                   │      │                         │
         │  Google + Facebook│      │   Base de datos         │
         │  (Login social)   │      │   (MongoDB)             │
         │                   │      │                         │
         └───────────────────┘      │  - Usuarios + Roles     │
                                    │  - Plantillas           │
         ┌───────────────────┐      │  - Diseños              │
         │                   │      │    (textos + imágenes   │
         │  Mercado Pago     │◄─────│     + elementos)        │
         │  (Pagos)          │      │  - Notificaciones       │
         │                   │      │                         │
         └───────────────────┘      └─────────────────────────┘

         ┌───────────────────┐
         │                   │
         │  Email (SMTP)     │
         │  (Nodemailer)     │
         │                   │
         │  - Recuperación   │
         │    de contraseña  │
         │                   │
         └───────────────────┘
```

---

## Flujo de diseño

```
El usuario se registra o inicia sesión (email, Google o Facebook)
        ↓
Selecciona una plantilla de diseño → Ve la imagen de fondo y el nombre
        ↓
Accede al editor visual → Agrega textos, imágenes y elementos decorativos
        ↓
Personaliza cada elemento → Fuente, tamaño, color, posición, rotación
        ↓
Arrastra y posiciona los elementos sobre el lienzo de la plantilla
        ↓
Le pone un nombre al diseño → Envía el diseño terminado
        ↓
El moderador o administrador recibe el diseño para su impresión
```

---

## Flujo del editor

```
Elige plantilla → Se carga el lienzo con las dimensiones y fondo de la plantilla
        ↓
Panel de herramientas con tres secciones:
  - Elementos: formas decorativas de la plantilla
  - Imágenes: imágenes adicionales de la plantilla
  - Texto: editor de texto con fuente, tamaño, color y estilos
        ↓
Agrega elementos al lienzo → Los arrastra y posiciona libremente
        ↓
Puede copiar, pegar o eliminar cualquier elemento
        ↓
Puede redimensionar y rotar cada elemento
        ↓
Al terminar, envía el diseño con un nombre
```

---

## Aspectos destacados del desarrollo

- **Editor visual completo**: sistema de edición con lienzo interactivo donde cada elemento (texto, imagen, forma) se posiciona libremente con arrastrar y soltar, redimensionado y rotación.
- **Plantillas dinámicas**: cada plantilla define sus propias dimensiones en centímetros, imagen de fondo y colección de recursos (elementos decorativos e imágenes) que el usuario puede usar en su diseño.
- **Textos con tipografías personalizadas**: más de 15 fuentes tipográficas disponibles con control completo de tamaño, color, negrita, cursiva y subrayado, con vista previa en tiempo real.
- **Sistema de capas**: los elementos se organizan por orden de profundidad (z-index), permitiendo controlar cuál aparece delante y cuál detrás.
- **Copiar y pegar elementos**: duplicación rápida de cualquier elemento del diseño con posicionamiento automático desplazado para evitar superposición.
- **Login social con Google y Facebook**: el usuario puede ingresar con su cuenta de Google (mediante Google Auth Library y Google APIs) o Facebook (mediante Graph API). Si es la primera vez, se crea automáticamente la cuenta.
- **Diseños persistentes**: cada diseño se guarda en la base de datos con todos sus elementos (textos con posición, tamaño, fuente, color; imágenes con posición y dimensiones), junto con la plantilla utilizada, permitiendo verlo y reimprimirlo en cualquier momento.
- **Impresión directa desde el navegador**: la vista de diseño incluye estilos de impresión optimizados que ocultan los controles y ajustan el lienzo a las dimensiones reales de la plantilla.
- **Recuperación de contraseña segura**: flujo de tres pasos con envío de código de verificación de 6 caracteres por email, validación del código y restablecimiento de la nueva contraseña.
- **Sistema de puntos**: los usuarios acumulan puntos dentro de la plataforma como parte del programa de fidelización.
- **Roles diferenciados**: tres roles (usuario, moderador, administrador) con acceso diferenciado. El admin gestiona plantillas y moderadores, el moderador revisa diseños, y el usuario crea diseños.
- **Context API para estado global**: la aplicación usa React Context para compartir las plantillas, el formulario de texto y los modales de confirmación entre todos los componentes.
- **Seguridad**: autenticación JWT, contraseñas encriptadas con Bcrypt, verificación de token en operaciones protegidas y control de acceso por roles.
