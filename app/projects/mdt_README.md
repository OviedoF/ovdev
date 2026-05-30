# MDT Ingenieros - Plataforma de Control de Horas y Gestión de Proyectos de Topografía

Plataforma web para el registro y control de horas trabajadas, gestión de proyectos y generación de reportes para una empresa de topografía e ingeniería. Los colaboradores registran sus jornadas diarias con actividades, horarios y firmas digitales. Los topógrafos supervisan las entradas y firman los partes. El administrador gestiona proyectos con cronogramas y costos, aprueba solicitudes de horas extras, genera reportes de nómina en PDF, calcula costos por proyecto con facturación mensual (IVA y percepciones), envía resúmenes diarios por email al supervisor, controla la rotación de personal y monitorea las horas no registradas. Incluye calendario visual con estados diarios, notificaciones internas, gestión de feriados y tres roles diferenciados (colaborador, topógrafo, administrador). Moneda: dólares (USD).

---

## Sobre el proyecto

MDT Ingenieros es una empresa de topografía que necesitaba digitalizar el control de horas trabajadas de sus cuadrillas en campo. Antes, los partes de trabajo se registraban manualmente, lo que dificultaba el cálculo de horas extras, la facturación a clientes y la generación de nóminas. La plataforma permite que cada colaborador registre su jornada diaria con las actividades realizadas, los horarios de inicio y fin, y las firmas digitales del topógrafo y el supervisor. El administrador gestiona los proyectos con tarifas y cronogramas, aprueba las solicitudes de horas extras, genera los reportes de nómina, calcula los costos por proyecto con facturación mensual incluyendo IVA y percepciones, y envía los resúmenes diarios en PDF al supervisor del proyecto por email.

---

## Funcionalidades principales

### Para el colaborador

- **Registro de jornada diaria**: crear entradas de trabajo con fecha, hora de inicio, hora de fin, proyecto asignado, comentarios y colaboradores presentes.
- **Actividades por entrada**: cada entrada puede tener múltiples actividades con nombre, descripción, hora de inicio, hora de fin y marcador de horas extras.
- **Firmas digitales**: el parte de trabajo incluye firma digital del topógrafo y firma del supervisor con su nombre.
- **Historial de entradas**: acceso al historial completo de entradas de trabajo registradas.
- **Solicitud de horas extras**: el colaborador puede solicitar horas extras indicando el horario solicitado y el motivo, que se envía al supervisor para su aprobación.
- **Estado de solicitudes**: seguimiento del estado de las solicitudes de horas extras (pendiente, aprobada, rechazada).
- **Panel de control**: vista del día actual con las entradas registradas y el estado de cada proyecto.
- **Notificaciones**: sistema de notificaciones internas con avisos de aprobación de horas extras, asignaciones y novedades.
- **Datos personales**: vista y edición de los datos del perfil del usuario.

### Para el topógrafo

- **Supervisión de entradas**: ver las entradas de trabajo de los colaboradores asignados a sus proyectos.
- **Firma de partes**: firmar digitalmente los partes de trabajo como topógrafo responsable.
- **Vista previa de reportes**: previsualización de los resúmenes diarios en PDF antes de enviarlos.

### Panel de administración

- **Dashboard**: vista general con estadísticas del sistema.
- **Gestión de proyectos**: crear, editar y eliminar proyectos con nombre, alias, descripción, supervisor, email del supervisor, topógrafos asignados, colaboradores, costo total, tarifa por hora, tarifa de procesamiento de información, tarifa de cuadrilla, fecha de facturación, fecha de inicio, fecha de fin y cronograma semanal (horarios de trabajo por día de la semana).
- **Asignación de personal**: asignar colaboradores y topógrafos a los proyectos, con control de horas disponibles por persona.
- **Colaboradores libres**: ver qué colaboradores están disponibles (no asignados) para asignarlos a nuevos proyectos.
- **Calendario visual**: vista mensual con el estado de cada día por proyecto (completo, incompleto, pendiente, enviado, faltan firmas), total de horas y horas extras.
- **Enviar resumen diario**: generar un PDF con el resumen del día (horas, actividades, colaboradores, firmas) y enviarlo por email al supervisor del proyecto.
- **Descargar resumen en PDF**: descargar el resumen diario como archivo PDF sin enviarlo por email.
- **Aprobar horas extras**: revisar y aprobar las solicitudes de horas extras de los colaboradores. Al aprobar, se actualizan automáticamente los horarios de la entrada de trabajo.
- **Costo de proyectos**: cálculo automático del costo mensual de cada proyecto con desglose de horas regulares, horas extras, costo total, costo extra y promedio diario.
- **Facturación mensual por proyecto**: generación y envío de la factura mensual al cliente con desglose de cobros (cuadrilla, horas extras, procesamiento), cálculo de IVA (13%), percepción (1%) y total líquido.
- **Reporte de nómina**: generación del reporte mensual de nómina con horas regulares, horas extras y pago total por cada colaborador, con desglose por proyecto. Descargable en PDF.
- **Reporte de salarios por usuario**: detalle individual del salario mensual de cada colaborador con horas regulares, extras y desglose por proyecto.
- **Rotación de personal**: vista mensual de la rotación de cada colaborador entre proyectos, con horas totales, promedio diario y horas extras por proyecto.
- **Horas no registradas**: monitoreo de los últimos 7 días para identificar colaboradores que no registraron su jornada en los días que les correspondía según el cronograma del proyecto.
- **Gestión de feriados**: crear y eliminar feriados, que afectan el cálculo de horas extras (en feriados todas las horas son extras).
- **Gestión de usuarios**: crear, editar y eliminar usuarios con nombre, email, contraseña, rol, costo por hora y horas disponibles. Eliminación lógica.
- **Gestión de notificaciones**: enviar notificaciones a los usuarios del sistema.
- **Entradas llenadas**: ver todas las entradas de trabajo registradas con filtros.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Nodemailer** | Envío de resúmenes diarios en PDF al supervisor, notificaciones de horas extras al supervisor y facturas mensuales al cliente |
| **Puppeteer (pdf-puppeteer)** | Generación de PDFs profesionales para resúmenes diarios, reportes de nómina, facturas mensuales y calendarios de horas extras |
| **html-pdf-node** | Generación alternativa de PDFs desde plantillas HTML |
| **Day.js + date-fns** | Cálculo preciso de horas trabajadas, horas extras, diferencias horarias y formateo de fechas en español |
| **Multer** | Subida de imágenes de firmas digitales |

---

## Tecnologías utilizadas

### Sitio web (Frontend)
- **Next.js 15** — Framework React con App Router y TypeScript
- **React 19** — Interfaz de usuario dinámica e interactiva
- **TypeScript** — Tipado estático para mayor robustez del código
- **Tailwind CSS** — Estilos utilitarios para diseño responsive
- **React Datepicker** — Selectores de fecha para entradas y reportes
- **Axios** — Comunicación con el servidor
- **Day.js** — Manejo de fechas en el frontend
- **Notistack** — Notificaciones visuales
- **React Icons** — Iconografía

### Servidor (Backend)
- **Node.js + Express** — Servidor web con módulos ES
- **MongoDB + Mongoose** — Base de datos flexible con relaciones entre entidades
- **JWT** — Autenticación segura con tokens
- **Bcryptjs** — Encriptación de contraseñas
- **Puppeteer (pdf-puppeteer)** — Generación de PDFs profesionales en formato A4
- **html-pdf-node** — Generación de PDFs desde HTML
- **Nodemailer** — Envío de correos electrónicos con adjuntos PDF
- **Day.js + date-fns** — Cálculos de fechas y horas con zona horaria
- **Multer** — Subida de archivos (firmas digitales)
- **UUID** — Generación de identificadores únicos

---

## Arquitectura del sistema

```
┌─────────────────────────────────┐         ┌─────────────────────────────────┐
│                                 │         │                                 │
│   Sitio Web                     │◄───────►│   Servidor API                  │
│   (Next.js 15 + TypeScript)     │  REST   │   (Node + Express)              │
│                                 │         │                                 │
│  - Registro de jornada          │         │  - Autenticación JWT            │
│  - Actividades + Firmas         │         │  - CRUD Entradas de trabajo     │
│  - Solicitud horas extras       │         │  - CRUD Proyectos               │
│  - Historial + Control          │         │  - CRUD Usuarios                │
│  - Calendario visual            │         │  - Horas extras + Aprobación    │
│  - Panel admin                  │         │  - Cálculo de costos            │
│  - Reportes de nómina           │         │  - Generación de PDFs           │
│  - Costos y facturación         │         │  - Facturación mensual          │
│  - Rotación de personal         │         │  - Emails con adjuntos          │
│  - Notificaciones               │         │  - Notificaciones               │
│                                 │         │  - Feriados                     │
└─────────────────────────────────┘         └────────┬────────────────────────┘
                                                     │
                                            ┌────────▼────────────────────────┐
                                            │                                 │
                                            │   Base de datos (MongoDB)       │
                                            │                                 │
                                            │  - Usuarios + Roles             │
                                            │  - Proyectos + Cronogramas      │
                                            │  - Entradas de trabajo          │
                                            │  - Actividades                  │
                                            │  - Solicitudes de horas extras  │
                                            │  - Feriados                     │
                                            │  - Notificaciones               │
                                            │  - Reportes enviados            │
                                            │                                 │
                                            └─────────────────────────────────┘

┌───────────────────┐         ┌───────────────────┐
│                   │         │                   │
│  Email (SMTP)     │         │  Puppeteer        │
│  (Nodemailer)     │         │  (PDFs)           │
│                   │         │                   │
│  - Resumen diario │         │  - Resumen diario │
│    con PDF        │         │  - Nómina mensual │
│  - Solicitud      │         │  - Factura del    │
│    horas extras   │         │    proyecto       │
│  - Factura        │         │  - Calendario de  │
│    mensual        │         │    horas extras   │
│                   │         │                   │
└───────────────────┘         └───────────────────┘
```

---

## Flujo de registro de jornada

```
El colaborador inicia sesión → Selecciona el proyecto del día
        ↓
Registra la entrada de trabajo con hora de inicio y hora de fin
        ↓
Agrega las actividades realizadas (nombre, descripción, horarios)
        ↓
Agrega los colaboradores presentes en la jornada
        ↓
El topógrafo firma digitalmente el parte de trabajo
        ↓
El supervisor firma y agrega su nombre al parte
        ↓
El administrador revisa el calendario → Ve el estado del día (completo/incompleto/faltan firmas)
        ↓
Genera el resumen diario en PDF → Lo envía por email al supervisor del proyecto
```

---

## Flujo de horas extras

```
El colaborador detecta que trabajó horas extras
        ↓
Crea una solicitud indicando el horario extra y el motivo
        ↓
El sistema envía un email automático al supervisor con los detalles de la solicitud
        ↓
El administrador revisa la solicitud en el panel
        ↓
Aprueba la solicitud → Se actualizan automáticamente los horarios de la entrada de trabajo
        ↓
El colaborador ve el estado actualizado de su solicitud
```

---

## Flujo de facturación mensual

```
El administrador selecciona un proyecto y un mes
        ↓
El sistema calcula las horas extras del mes (lunes a viernes >8h, sábados >4h, domingos y feriados = todo extra)
        ↓
Calcula los cobros: cuadrilla mensual + horas extras × tarifa + procesamiento de información
        ↓
Aplica IVA (13%) y deduce percepción (1%) → Calcula el total líquido
        ↓
Genera la factura en PDF con el desglose completo
        ↓
Envía la factura por email al supervisor del proyecto
```

---

## Reglas de cálculo de horas extras

```
Lunes a viernes: las primeras 8 horas son regulares, el excedente es horas extras
Sábados: las primeras 4 horas son regulares, el excedente es horas extras
Domingos: todas las horas son horas extras
Feriados: todas las horas son horas extras

Deducción de almuerzo:
  - Lunes a viernes (sin horas extras): se descuenta 1 hora de almuerzo
  - Sábados (si se trabaja después de las 12:00): se descuenta 1 hora
  - Domingos y feriados: no se descuenta almuerzo
```

---

## Aspectos destacados del desarrollo

- **Cálculo inteligente de horas extras**: el sistema aplica reglas diferenciadas según el día de la semana, los feriados y el horario de trabajo, con deducción automática de almuerzo y clasificación precisa de horas regulares vs. extras.
- **Firmas digitales en los partes**: cada entrada de trabajo incluye firma digital del topógrafo y del supervisor, que se incluyen en los PDFs de resumen diario como imágenes.
- **Generación de PDFs profesionales con Puppeteer**: los resúmenes diarios, reportes de nómina, facturas mensuales y calendarios de horas extras se generan como PDFs en formato A4 con diseño profesional.
- **Facturación mensual con impuestos**: el sistema calcula automáticamente el cobro mensual por proyecto con desglose de cuadrilla, horas extras y procesamiento, aplica IVA (13%) y percepción (1%), y genera la factura en PDF.
- **Calendario visual con estados**: vista mensual donde cada día muestra su estado (completo, incompleto, pendiente, enviado, faltan firmas) con total de horas y horas extras, permitiendo identificar rápidamente los días con problemas.
- **Flujo de aprobación de horas extras**: los colaboradores solicitan horas extras con motivo, el sistema notifica al supervisor por email, y al aprobar la solicitud se actualizan automáticamente los horarios de la entrada de trabajo.
- **Monitoreo de horas no registradas**: el sistema revisa los últimos 7 días y detecta qué colaboradores no registraron su jornada en los días que les correspondía según el cronograma del proyecto.
- **Reportes de nómina con desglose**: generación del reporte mensual con horas regulares, extras y pago total por colaborador, desglosado por proyecto, con descarga en PDF.
- **Rotación de personal entre proyectos**: vista mensual que muestra cómo se distribuyó cada colaborador entre los diferentes proyectos, con horas totales, promedio diario y horas extras.
- **Envío de resúmenes por email**: los resúmenes diarios se envían automáticamente al supervisor del proyecto como PDF adjunto, con registro de qué días fueron enviados.
- **Cronograma semanal por proyecto**: cada proyecto define sus horarios de trabajo para cada día de la semana (lunes a domingo), lo que permite validar las horas esperadas y detectar ausencias.
- **Eliminación lógica de usuarios**: los usuarios se desactivan en lugar de eliminarse, preservando el historial de trabajo asociado.
- **Tres roles diferenciados**: colaborador (registra jornada y solicita horas extras), topógrafo (supervisa y firma partes) y administrador (gestión completa, reportes, facturación y aprobaciones).
- **Seguridad**: autenticación JWT, contraseñas encriptadas con Bcrypt y control de acceso por roles.
