# Biznes Empresa - Plataforma de Gestión de Tarjetas Digitales para Empresas

Aplicación web diseñada para que las empresas gestionen de forma centralizada las tarjetas digitales de presentación de todos sus empleados, con control de roles, permisos, plantillas corporativas y estadísticas de uso.

---

## Sobre el proyecto

Biznes Empresa es la versión corporativa de la plataforma Biznes. Mientras que Biznes está pensado para usuarios individuales, esta aplicación permite a una empresa registrarse, invitar a sus empleados, asignarles roles y permisos, crear plantillas de tarjeta con el branding corporativo, y monitorear el rendimiento de todas las tarjetas desde un solo lugar. Es un producto complementario que funciona con su propio backend y base de datos.

---

## Funcionalidades principales

### Gestión de la empresa

- **Registro y perfil de empresa**: la empresa se registra con su nombre, descripción, logo e imagen de portada. Puede editar toda su información en cualquier momento.
- **Membresías empresariales**: la empresa puede contratar un plan que define cuántos empleados puede tener y qué funcionalidades están disponibles.
- **Notificaciones internas**: sistema de notificaciones para comunicar novedades a los miembros.

### Gestión de empleados

- **Invitación por email**: la empresa invita a sus empleados enviándoles un correo con un enlace de registro. El empleado se une directamente a la empresa.
- **Invitación masiva por Excel**: se puede subir un archivo Excel con los correos de los empleados para enviar invitaciones en lote. Opcionalmente se puede asignar un link personalizado a cada empleado desde el mismo Excel.
- **Perfiles de empleado**: cada empleado invitado tiene su cuenta con foto, nombre y datos personales.
- **Permisos individuales**: la empresa puede definir qué puede editar cada empleado en su propia tarjeta (nombre, foto, redes sociales, biografía, etc.).
- **Eliminación de miembros**: la empresa puede remover empleados y sus datos asociados.

### Sistema de roles

- **Roles personalizados**: la empresa puede crear roles con nombre, color identificativo y permisos específicos.
- **Asignación flexible**: cada empleado puede tener uno o varios roles. Los roles determinan qué puede hacer y ver dentro de la plataforma.
- **Edición y eliminación de roles**: los roles se pueden modificar o eliminar en cualquier momento, actualizando automáticamente los permisos de todos los usuarios afectados.

### Tarjetas digitales

- **Creación de tarjetas por empleado**: cada miembro de la empresa puede tener su tarjeta digital personalizada con toda su información profesional.
- **Plantillas corporativas**: la empresa puede crear plantillas de tarjeta con el diseño corporativo (logo, colores, redes de la empresa, estilo visual). Cuando se invita un empleado, su tarjeta se crea automáticamente basada en la plantilla del rol asignado.
- **Editor de diseño completo**: personalización visual de cada elemento: foto de perfil, portada, logo, tipografías, colores, bordes, botones, redes sociales, botones adicionales.
- **Vista previa en tiempo real**: mientras se edita, se muestra cómo quedará la tarjeta en formato celular.
- **Código QR automático**: cada tarjeta genera su propio QR descargable.
- **vCard descargable**: archivo de contacto para guardar directo en el teléfono.
- **Link personalizado**: cada tarjeta tiene una URL única y personalizable.

### Agenda de contactos (Biznes Agenda)

- **Directorio de empleados**: vista de todos los miembros de la empresa con sus tarjetas y datos.
- **Perfiles de contacto**: se puede ver el detalle de cada empleado y su información de contacto.

### Estadísticas y analíticas

- **Visitas por tarjeta**: cuántas personas vieron cada tarjeta y desde qué dispositivo.
- **Tiempo de visualización**: cuánto tiempo permanecieron los visitantes en cada tarjeta.
- **Clics en redes sociales**: seguimiento de qué redes sociales se clickearon y cuáles son las más populares.
- **Clics en email**: cuántas veces tocaron el email de contacto.
- **Descargas de vCard**: cuántos contactos se guardaron.
- **Contactos agregados**: cuántas personas enviaron el formulario de contacto.
- **Clics en botones**: seguimiento individual de cada botón adicional.
- **Gráficos visuales**: toda la información se presenta en gráficos interactivos (barras, líneas, tortas).

### Recuperación de contraseña

- **Flujo completo en 3 pasos**: el usuario ingresa su email, recibe un código de verificación, y puede establecer una nueva contraseña.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Nodemailer** | Envío de invitaciones por email, recuperación de contraseña y notificaciones |
| **QR Code** | Generación automática de códigos QR para cada tarjeta |
| **vCards.js** | Generación de archivos de contacto (.vcf) descargables |
| **Socket.IO** | Comunicación en tiempo real |
| **Sharp** | Optimización y conversión de imágenes a WebP |
| **Chart.js** | Gráficos interactivos para las estadísticas |
| **Read Excel File** | Lectura de archivos Excel para invitaciones masivas |

---

## Tecnologías utilizadas

### Aplicación web (Frontend)
- **React 18** — Interfaz de usuario interactiva
- **Redux** — Manejo del estado global (empresa, usuarios, tarjetas, estadísticas)
- **React Router v6** — Navegación entre secciones
- **Material UI (MUI)** — Componentes de interfaz profesionales
- **Chart.js + React Chartjs 2** — Gráficos y visualización de estadísticas
- **Framer Motion** — Animaciones y transiciones
- **SASS** — Estilos personalizados
- **Axios** — Comunicación con el servidor
- **Notistack** — Notificaciones visuales
- **MUI Color Input** — Selector de colores para personalización
- **Moment.js** — Manejo de fechas
- **Font Awesome** — Iconografía
- **React Device Preview** — Vista previa de tarjeta en formato móvil

### Servidor (Backend)
- **Node.js + Express** — Servidor web escalable
- **MongoDB + Mongoose** — Base de datos con relaciones profundas (deep populate)
- **JWT** — Autenticación segura con tokens
- **Bcrypt** — Encriptación de contraseñas
- **Multer + Sharp** — Subida y optimización de imágenes
- **QRCode** — Generación de códigos QR
- **vCards.js** — Generación de archivos de contacto
- **Socket.IO** — Comunicación en tiempo real
- **Agenda.js** — Tareas programadas (vencimiento de membresías)
- **Nodemailer** — Envío de correos con plantillas HTML
- **Read Excel File** — Procesamiento de archivos Excel para alta masiva

---

## Arquitectura del sistema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│                         │         │                         │
│   App Empresa           │◄───────►│   Servidor API          │
│   (React + MUI)         │         │   (Node + Express)      │
│                         │  REST   │                         │
│  - Login empresa        │  + WS   │  - Auth empresa         │
│  - Gestión empleados    │         │  - CRUD Tarjetas        │
│  - Roles y permisos     │         │  - Plantillas           │
│  - Plantillas tarjeta   │         │  - Roles + Permisos     │
│  - Editor de tarjetas   │         │  - Invitaciones email   │
│  - Estadísticas         │         │  - Alta masiva Excel    │
│  - Agenda contactos     │         │  - Estadísticas         │
│                         │         │  - QR + vCard           │
└─────────────────────────┘         └────────┬────────────────┘
                                             │
                                    ┌────────▼────────────────┐
                                    │                         │
                                    │   Base de datos         │
                                    │   (MongoDB)             │
                                    │                         │
                                    │  - Empresas             │
                                    │  - Usuarios/Empleados   │
                                    │  - Roles empresariales  │
                                    │  - Tarjetas + Estilos   │
                                    │  - Plantillas           │
                                    │  - Membresías           │
                                    │  - Invitaciones         │
                                    │  - Estadísticas         │
                                    │                         │
                                    └─────────────────────────┘
```

---

## Relación con Biznes (versión individual)

Biznes Empresa es un producto independiente pero complementario:

| Característica | Biznes (Individual) | Biznes Empresa |
|---|---|---|
| **Usuarios** | Personas individuales | Empresas con empleados |
| **Tarjetas** | El usuario crea la suya | La empresa gestiona las de todos |
| **Plantillas** | No | Si, con branding corporativo |
| **Roles** | No | Si, con permisos granulares |
| **Alta masiva** | No | Si, por Excel |
| **Tienda** | Si | No |
| **Estadísticas** | Individuales | Centralizadas por empresa |
| **Membresías** | Por usuario | Por empresa (define cantidad de empleados) |

---

## Aspectos destacados del desarrollo

- **Gestión corporativa completa**: una empresa puede controlar las tarjetas de todos sus empleados desde un solo panel.
- **Plantillas con branding**: las tarjetas de los empleados heredan automáticamente el diseño corporativo, manteniendo la identidad visual de la empresa.
- **Roles y permisos granulares**: control detallado de qué puede hacer cada empleado y qué secciones de su tarjeta puede editar.
- **Alta masiva por Excel**: invitar decenas o cientos de empleados subiendo un archivo Excel con sus emails y links personalizados.
- **Estadísticas centralizadas**: la empresa puede ver el rendimiento de todas las tarjetas con gráficos interactivos.
- **Invitaciones por email**: flujo completo de invitación, registro y asignación automática a la empresa.
- **Comunicación en tiempo real**: actualizaciones instantáneas mediante WebSockets.
- **Seguridad**: autenticación JWT independiente para empresas, contraseñas encriptadas, verificación de pertenencia empresa-usuario en cada operación.
- **Diseño responsive**: funciona correctamente en escritorio, tablet y celular.
- **Optimización de imágenes**: conversión automática a WebP para mejor rendimiento.
