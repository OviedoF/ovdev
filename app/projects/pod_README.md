# 4ME - Plataforma de Podología con Escaneo 3D y Calzado Ortopédico a Medida

Sistema integral para la gestión de podología con tecnología de escaneo 3D de pies. Los podólogos registran pacientes, escanean sus pies desde la app móvil (capturando múltiples fotos que se procesan en modelos 3D), crean proyectos de calzado ortopédico a medida eligiendo modelo, color, tipo de suela y plantilla, y gestionan el seguimiento del pedido completo hasta la entrega. Incluye pagos con Stripe, almacenamiento de imágenes en Google Drive, procesamiento 3D con Metashape, notificaciones por email en cada cambio de estado, app móvil con cámara integrada, panel web de administración con visualización de modelos 3D, y comunicación en tiempo real. Moneda: dólares (USD).

---

## Sobre el proyecto

4ME es una plataforma de podología que digitaliza todo el proceso de creación de calzado ortopédico personalizado. El podólogo se registra, da de alta a sus pacientes y les escanea los pies usando la cámara del celular desde la app móvil. Las fotos se suben automáticamente a Google Drive y se procesan con Metashape para generar un modelo 3D del pie. Con ese escaneo, el podólogo crea un proyecto de calzado seleccionando el modelo de zapato, color, tipo de suela, tipo de plantilla y altura de plantilla. Al crear el proyecto, se genera automáticamente un link de pago de Stripe que se envía por email. Una vez confirmado el pago, el equipo de producción avanza con el diseño y fabricación. El administrador gestiona todo el ecosistema desde un panel web: clínicas, podólogos, pacientes, modelos de calzado, proyectos y visualización de los modelos 3D.

---

## Funcionalidades principales

### App móvil (para el podólogo)

- **Registro y login**: el podólogo se registra con nombre, apellido, matrícula, teléfono, email, dirección y datos de asistente.
- **Gestión de pacientes**: crear, editar y ver pacientes con nombre, apellido y obra social.
- **Escaneo de pies con cámara**: desde la app, el podólogo captura múltiples fotos del pie del paciente (izquierdo, derecho, izquierdo en el aire, derecho en el aire) usando la cámara del celular.
- **Subida masiva de imágenes**: las fotos se suben en lote a Google Drive, con seguimiento en tiempo real del progreso de cada imagen (subida, procesando, completada, fallida).
- **Visualización de modelo 3D**: una vez procesado, el podólogo puede ver el modelo 3D del pie del paciente directamente en la app.
- **Crear proyecto de calzado**: seleccionar modelo de zapato, color, tipo de suela, tipo de plantilla, altura de plantilla y agregar comentarios.
- **Seguimiento de proyectos**: ver el estado actual de cada proyecto (recibido, en revisión de diseño, diseñando, en producción, control de calidad, enviado, entregado).
- **Historial de proyectos**: acceso a todos los proyectos del podólogo con sus pacientes y estados.
- **Recuperación de contraseña**: flujo con código de verificación por email.

### Panel de administración (web)

- **Dashboard**: vista general del estado del sistema.
- **Gestión de clínicas**: crear, editar y eliminar clínicas con nombre, email, teléfono de recepción, dirección y tipo de práctica (independiente o clínica).
- **Gestión de podólogos**: ver todos los podólogos registrados con sus datos, clínicas asociadas, datos de asistente y matrícula.
- **Gestión de pacientes**: ver todos los pacientes con su podólogo asignado y obra social. Visualización del modelo 3D de cada paciente.
- **Gestión de proyectos**: ver todos los proyectos con detalle completo (paciente, podólogo, clínica, modelo, color, suela, plantilla, estado, link de pago). Actualizar el estado del proyecto con notificación automática por email al podólogo.
- **Gestión de modelos de calzado**: crear, editar y eliminar modelos de zapato con nombre y colores disponibles (rojo, azul, menta, avena, negro, blanco, lavanda, nude, naranja).
- **Visualización 3D**: ver los modelos 3D generados directamente en el navegador, descargando el archivo GLB desde Google Drive.
- **Gestión de usuarios**: administrar usuarios del sistema (moderadores, vendedores, administradores).

### Procesamiento 3D

- **Escaneo con Metashape**: las imágenes del pie se procesan automáticamente con Agisoft Metashape (ejecutando un script Python desde el servidor) para generar el modelo 3D.
- **Tareas programadas**: un cron job verifica periódicamente el estado de los proyectos de Metashape en procesamiento.
- **Almacenamiento en Google Drive**: todas las imágenes se almacenan en carpetas organizadas por paciente en Google Drive usando la API de Google.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Stripe** | Generación de links de pago para cada proyecto de calzado, con cobro en USD |
| **Google Drive API** | Almacenamiento de las fotos del escaneo de pies, organizadas en carpetas por paciente |
| **Google Auth (OAuth2)** | Autenticación del servidor con Google Drive mediante cuenta de servicio |
| **Agisoft Metashape** | Procesamiento fotogramétrico de las imágenes para generar modelos 3D de los pies |
| **Socket.IO** | Comunicación en tiempo real para el progreso de subida de imágenes |
| **Nodemailer (OAuth2)** | Notificaciones por email al podólogo cuando cambia el estado del proyecto y envío de links de pago |
| **Google Model Viewer** | Visualización interactiva de modelos 3D (GLB) en el panel de administración |
| **Node Cron** | Tareas programadas para verificar el estado de los proyectos de procesamiento 3D |
| **Expo Camera** | Captura de fotos del pie desde la app móvil |
| **React Native Maps** | Mapas dentro de la app móvil |

---

## Tecnologías utilizadas

### App móvil (React Native)
- **React Native + Expo** — Aplicación móvil multiplataforma (Android e iOS)
- **Expo Router** — Navegación basada en archivos
- **Expo Camera** — Captura de fotos directamente desde la app
- **Expo Image Picker** — Selección de imágenes desde la galería
- **React Native Maps** — Mapas integrados
- **React Native Charts** — Gráficos y estadísticas
- **React Native Calendars** — Calendario visual
- **React Native QRCode** — Generación de códigos QR
- **Socket.IO Client** — Comunicación en tiempo real con el servidor
- **AsyncStorage** — Almacenamiento local de datos y sesión
- **TypeScript** — Tipado estático para mayor robustez

### Panel de administración (Web)
- **Next.js 15** — Framework React con App Router y TypeScript
- **React 19** — Interfaz de usuario dinámica
- **Tailwind CSS** — Estilos utilitarios para diseño responsive
- **Google Model Viewer** — Visualización de modelos 3D en el navegador
- **Lucide React** — Iconografía
- **React Select** — Selectores avanzados con búsqueda
- **Axios** — Comunicación con el servidor
- **Notistack** — Notificaciones visuales

### Servidor (Backend)
- **Node.js + Express** — Servidor web con módulos ES
- **MongoDB + Mongoose** — Base de datos flexible con relaciones entre entidades
- **JWT** — Autenticación segura con tokens
- **Bcrypt** — Encriptación de contraseñas
- **Stripe** — Procesamiento de pagos (USD) con links de pago
- **Google APIs** — Integración con Google Drive para almacenamiento de imágenes
- **Socket.IO** — Comunicación en tiempo real (progreso de subida)
- **Nodemailer (OAuth2)** — Envío de correos electrónicos con autenticación OAuth2 de Google
- **Multer** — Subida de imágenes desde la app móvil
- **Node Cron** — Tareas programadas para procesamiento 3D
- **Child Process** — Ejecución de scripts Python (Metashape) desde Node.js

---

## Arquitectura del sistema

```
┌─────────────────────────┐  ┌─────────────────────────┐
│                         │  │                         │
│   App Móvil             │  │   Panel Admin           │
│   (React Native + Expo) │  │   (Next.js 15)          │
│                         │  │                         │
│  - Login / Registro     │  │  - Dashboard            │
│  - Pacientes            │  │  - Clínicas             │
│  - Escaneo de pies      │  │  - Podólogos            │
│  - Cámara + Fotos       │  │  - Pacientes            │
│  - Proyectos            │  │  - Proyectos + Estados  │
│  - Modelo 3D            │  │  - Modelos de calzado   │
│  - Nuevo proyecto       │  │  - Visualización 3D     │
│                         │  │  - Usuarios             │
└────────┬────────────────┘  └────────┬────────────────┘
         │                            │
         │         REST + WebSocket   │
         └────────────┬───────────────┘
                      │
             ┌────────▼────────────────┐
             │                         │
             │   Servidor API          │
             │   (Node + Express)      │
             │                         │
             │  - Autenticación        │
             │  - CRUD Clínicas        │
             │  - CRUD Podólogos       │
             │  - CRUD Pacientes       │
             │  - CRUD Proyectos       │
             │  - Modelos de calzado   │
             │  - Subida de imágenes   │
             │  - Procesamiento 3D     │
             │  - Pagos (Stripe)       │
             │  - Emails               │
             │  - WebSocket            │
             └────────┬────────────────┘
                      │
    ┌─────────────────┼─────────────────┐
    │                 │                 │
┌───▼───────────┐ ┌──▼──────────┐ ┌───▼───────────┐
│               │ │             │ │               │
│  Google Drive │ │  Stripe     │ │  Metashape    │
│  (Imágenes)   │ │  (Pagos)    │ │  (Modelo 3D)  │
│               │ │             │ │               │
│  - Carpetas   │ │  - Links    │ │  - Python     │
│    por pacient│ │    de pago  │ │  - Fotograme- │
│  - Fotos pies │ │  - USD      │ │    tría       │
│               │ │             │ │  - GLB/OBJ    │
└───────────────┘ └─────────────┘ └───────────────┘

┌───────────────┐         ┌───────────────────────┐
│               │         │                       │
│  Email (SMTP) │         │   Base de datos       │
│  (Nodemailer) │◄────────│   (MongoDB)           │
│               │         │                       │
│  - Estado del │         │  - Clínicas           │
│    proyecto   │         │  - Podólogos          │
│  - Link pago  │         │  - Pacientes          │
│               │         │  - Proyectos          │
└───────────────┘         │  - Modelos de calzado │
                          │  - Imágenes           │
                          │  - Videos             │
                          │  - Estado de pies     │
                          │  - Usuarios + Roles   │
                          │  - Códigos verific.   │
                          │                       │
                          └───────────────────────┘
```

---

## Flujo completo de un proyecto

```
El podólogo se registra → Crea un paciente con nombre y obra social
        ↓
Abre la cámara en la app → Escanea el pie (múltiples fotos: izquierdo, derecho, en el aire)
        ↓
Las fotos se suben a Google Drive → Progreso en tiempo real vía WebSocket
        ↓
Metashape procesa las fotos → Genera el modelo 3D del pie (GLB)
        ↓
El podólogo crea un proyecto → Elige modelo de zapato, color, suela, plantilla y altura
        ↓
Se genera un link de pago de Stripe → Se envía por email al podólogo
        ↓
El podólogo paga → El equipo comienza el diseño y producción
        ↓
El admin actualiza el estado del proyecto → El podólogo recibe email de notificación
        ↓
Estados: Recibido → Revisión de diseño → Diseñando → Producción → Control de calidad → Enviado → Entregado
```

---

## Aspectos destacados del desarrollo

- **Escaneo 3D desde el celular**: el podólogo captura múltiples fotos del pie del paciente directamente desde la app móvil usando la cámara de Expo, que luego se procesan en un modelo 3D.
- **Subida masiva con progreso en tiempo real**: las imágenes se suben en lote a Google Drive con seguimiento del progreso de cada foto vía Socket.IO, mostrando cuántas se subieron, cuántas fallaron y el estado final.
- **Procesamiento fotogramétrico con Metashape**: el servidor ejecuta un script de Python que usa Agisoft Metashape para convertir las fotos del pie en un modelo 3D (OBJ/GLB).
- **Visualización 3D en el navegador**: el panel de administración muestra los modelos 3D de los pies usando Google Model Viewer, descargando los archivos GLB directamente desde Google Drive.
- **Pagos con Stripe en USD**: al crear un proyecto, se genera automáticamente un link de pago de Stripe que se envía por email al podólogo, y el sistema registra el estado del pago.
- **Pipeline de estados completo**: cada proyecto pasa por 12 estados posibles (recibido, revisión de diseño, diseñando, esperando producción, producción, control de calidad, envío, enviado, entregado, devuelto, cancelado, demorado), con notificación automática por email en cada cambio clave.
- **Google Drive como almacenamiento**: las imágenes se organizan automáticamente en carpetas por paciente dentro de Google Drive, con la API de Google para crear carpetas, subir archivos y verificar duplicados.
- **Emails con OAuth2**: el envío de correos usa autenticación OAuth2 de Google en lugar de contraseñas planas, asegurando mayor seguridad y evitando bloqueos.
- **Limpieza automática de escaneos**: si un paciente ya tiene un escaneo exitoso y se vuelve a escanear, el sistema elimina automáticamente las fotos anteriores de Google Drive antes de subir las nuevas.
- **App móvil multiplataforma**: la app funciona en Android e iOS usando React Native con Expo, con cámara integrada, navegación por archivos y comunicación en tiempo real.
- **Tres sistemas coordinados**: app móvil (escaneo y proyectos), panel web (administración) y servidor (procesamiento, pagos, emails), todos conectados a la misma base de datos y comunicándose en tiempo real.
- **Roles diferenciados**: tres roles (moderador, vendedor, administrador) con diferentes niveles de acceso al sistema.
- **Seguridad**: autenticación JWT, contraseñas encriptadas con Bcrypt, códigos de verificación con expiración y control de acceso por roles.
