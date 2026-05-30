# Konecta - Aplicación Móvil de Control de Asistencia y Permisos Laborales

Aplicación móvil multiplataforma para el control de asistencia de empleados en empresas. Los trabajadores registran su entrada y salida mediante código QR o geolocalización GPS, consultan su historial de asistencia con vista de mapa, solicitan permisos e incidencias con adjuntos, y gestionan su perfil personal. Incluye autenticación por empresa con código de verificación, soporte para múltiples empresas, selfie para foto de perfil, roles diferenciados (empleado y supervisor/administrador), y navegación con barra inferior adaptable según el rol del usuario. La app se conecta a un servidor API externo para sincronizar toda la información.

---

## Sobre el proyecto

Konecta (nombre interno: ASSISKEY) es una herramienta de gestión de asistencia laboral diseñada para empresas que necesitan registrar y controlar las entradas y salidas de sus empleados desde el celular. El trabajador se identifica con su documento y un código de verificación de la empresa, inicia sesión y puede registrar su asistencia de dos formas: escaneando un código QR en el lugar de trabajo o utilizando la geolocalización GPS del celular. Cada registro queda almacenado con la ubicación exacta y se puede consultar en un historial con vista de lista o mapa. Además, el empleado puede solicitar permisos e incidencias seleccionando el motivo, las fechas y adjuntando documentación. El supervisor tiene acceso a funciones adicionales de gestión y aprobación.

---

## Funcionalidades principales

### Para el empleado

- **Registro de asistencia por QR**: escanear un código QR en el lugar de trabajo para registrar la entrada o salida, con generación de QR de confirmación.
- **Registro de asistencia por geolocalización**: registrar la entrada o salida utilizando la ubicación GPS del celular, con coordenadas exactas.
- **Estado en tiempo real**: ver el estado actual de asistencia (pendiente, entrada registrada, salida registrada) en la pantalla principal.
- **Historial de asistencia**: listado paginado de todos los registros de asistencia con fecha, día, hora de entrada, hora de salida y estado. Búsqueda y filtro integrados.
- **Vista de mapa**: ver todas las ubicaciones de los registros de asistencia en un mapa de Google Maps con marcadores que muestran fecha, hora y estado.
- **Solicitud de permisos e incidencias**: crear solicitudes de permiso seleccionando el horario de trabajo, las fechas de inicio y fin, el motivo (seleccionable desde un listado), observaciones opcionales y archivos adjuntos.
- **Historial de permisos**: listado paginado de todas las solicitudes de permisos con fecha de inicio, fecha de fin, motivo y estado.
- **Perfil personal**: ver y editar datos personales (dirección, teléfono). Visualización del DNI, nombre completo y foto de perfil.
- **Selfie para foto de perfil**: tomar una foto con la cámara frontal del celular para usar como foto de perfil.
- **Cambio de contraseña**: formulario de cambio de contraseña con verificación de la contraseña actual.
- **Recuperación de contraseña**: recuperación por email.
- **Soporte para múltiples empresas**: si el usuario tiene acceso a más de una empresa, puede seleccionar a cuál ingresar.

### Para el supervisor / administrador

- **Panel de operaciones**: acceso a funciones de gestión de permisos e incidencias.
- **Aprobación de solicitudes**: revisar y aprobar o rechazar las solicitudes de permisos de los empleados.
- **Configuración avanzada**: cambiar la asociación de empleado/documento activo en la empresa.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Google Maps** | Visualización de las ubicaciones de los registros de asistencia en un mapa interactivo con marcadores |
| **Expo Camera** | Captura de selfies para la foto de perfil del empleado |
| **Expo Barcode Scanner** | Escaneo de códigos QR para el registro de asistencia |
| **Expo Location** | Obtención de coordenadas GPS para el registro de asistencia por geolocalización |
| **Expo Document Picker** | Selección de archivos para adjuntar a las solicitudes de permisos |
| **Expo File System** | Operaciones con archivos locales |
| **QR Code SVG** | Generación de códigos QR de confirmación después del registro de asistencia |
| **API Externa (ProjectBMS)** | Servidor API para autenticación, registros de asistencia, permisos, datos de empleados y configuración |

---

## Tecnologías utilizadas

- **React Native 0.72** — Aplicación móvil multiplataforma (Android e iOS)
- **Expo ~49** — Plataforma de desarrollo y compilación
- **React 18** — Interfaz de usuario
- **React Router Native** — Navegación basada en rutas
- **React Native Paper** — Componentes de interfaz (modales, checkboxes, inputs)
- **React Native Maps** — Mapas de Google Maps integrados
- **Expo Camera** — Cámara para selfies
- **Expo Barcode Scanner** — Escaneo de códigos QR
- **Expo Location** — Geolocalización GPS
- **Expo Document Picker** — Selección de archivos
- **FontAwesome** — Iconografía (4 paquetes de iconos)
- **AsyncStorage** — Almacenamiento local persistente
- **Axios** — Comunicación con el servidor API
- **Context API** — Estado global de la aplicación
- **DateTimePicker** — Selectores de fecha y hora

---

## Arquitectura del sistema

```
┌─────────────────────────────────────────┐
│                                         │
│   App Móvil (React Native + Expo)       │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  Pantallas                      │    │
│  │                                 │    │
│  │  - Login + Verificación         │    │
│  │  - Selección de empresa         │    │
│  │  - Home (estado + registro)     │    │
│  │  - Historial de asistencia      │    │
│  │  - Mapa de registros            │    │
│  │  - Permisos e incidencias       │    │
│  │  - Crear solicitud de permiso   │    │
│  │  - Cuenta + Datos personales    │    │
│  │  - Cámara (selfie)              │    │
│  │  - Escáner QR                   │    │
│  │  - Seguridad (contraseña)       │    │
│  │  - Configuración                │    │
│  │  - Operaciones (supervisor)     │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │  Cámara  │  │   GPS    │  │  QR   │ │
│  │  (Selfie)│  │ (Ubica-  │  │(Scan +│ │
│  │          │  │  ción)   │  │Genera)│ │
│  └──────────┘  └──────────┘  └───────┘ │
│                                         │
└──────────────────┬──────────────────────┘
                   │
              REST API
                   │
┌──────────────────▼──────────────────────┐
│                                         │
│   Servidor API (ProjectBMS)             │
│                                         │
│  - Autenticación + Tokens               │
│  - Registro de asistencia (QR + GPS)    │
│  - Historial de asistencia              │
│  - Permisos e incidencias               │
│  - Datos de empleados                   │
│  - Motivos y estados                    │
│  - Horarios de trabajo                  │
│  - Fotos de perfil                      │
│                                         │
└─────────────────────────────────────────┘

┌───────────────────┐
│                   │
│  Google Maps      │
│  (Mapa de         │
│   registros)      │
│                   │
└───────────────────┘
```

---

## Flujo de registro de asistencia

```
El empleado inicia sesión con documento + código de verificación
        ↓
Si tiene acceso a múltiples empresas → Selecciona la empresa
        ↓
Ve la pantalla principal con su nombre, DNI, foto y estado actual
        ↓
Registra la entrada de dos formas posibles:
  - Opción 1: Escanea el código QR del lugar de trabajo
  - Opción 2: Usa la geolocalización GPS del celular
        ↓
El sistema registra la entrada con la ubicación y la hora
        ↓
Se genera un código QR de confirmación con los datos del empleado
        ↓
Al finalizar la jornada, registra la salida de la misma forma
        ↓
Puede consultar el historial de registros en lista o en mapa
```

---

## Flujo de solicitud de permisos

```
El empleado accede a la sección de Permisos
        ↓
Crea una nueva solicitud → Selecciona su horario de trabajo
        ↓
Elige las fechas de inicio y fin con selectores de fecha y hora
        ↓
Selecciona el motivo del permiso desde un listado
        ↓
Agrega observaciones opcionales y adjunta documentación
        ↓
Confirma y envía la solicitud → Queda en estado pendiente
        ↓
El supervisor revisa y aprueba o rechaza la solicitud
        ↓
El empleado ve el estado actualizado en su historial de permisos
```

---

## Aspectos destacados del desarrollo

- **Doble método de registro de asistencia**: el empleado puede registrar su entrada y salida mediante código QR o geolocalización GPS, adaptándose a diferentes necesidades y configuraciones del lugar de trabajo.
- **Mapa interactivo de registros**: el historial de asistencia se visualiza en un mapa de Google Maps con marcadores que muestran la ubicación exacta, fecha, hora y estado de cada registro.
- **Soporte multiempresa**: un mismo usuario puede tener acceso a múltiples empresas, seleccionando a cuál ingresar en cada sesión.
- **Roles diferenciados con navegación adaptable**: la barra de navegación inferior cambia dinámicamente según el nivel del usuario, mostrando opciones adicionales de gestión para supervisores.
- **Selfie para perfil**: el empleado puede tomarse una foto con la cámara frontal del celular para actualizar su foto de perfil, que se codifica en Base64.
- **Permisos con adjuntos**: las solicitudes de permisos permiten adjuntar archivos de documentación mediante el selector de documentos del dispositivo.
- **Estado en tiempo real**: la pantalla principal muestra el estado actual de asistencia del empleado (pendiente, entrada registrada, salida registrada) y se actualiza al registrar.
- **Manejo de sesión**: el sistema detecta la expiración de sesión y redirige automáticamente al login, con almacenamiento local de credenciales para reconexión rápida.
- **Context API para estado global**: la aplicación usa React Context para compartir los datos del usuario, el estado de carga, las notificaciones y los modales de confirmación entre todos los componentes.
- **Seguridad**: autenticación basada en tokens, almacenamiento local de credenciales y comunicación por HTTPS con el servidor.
