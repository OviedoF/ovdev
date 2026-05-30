# Julian Winners - Plataforma de Rifas Online con Tickets Digitales

Plataforma web completa para la venta de tickets de rifas online. Los usuarios se registran, eligen una rifa, compran packs de tickets mediante Mercado Pago y reciben sus números asignados al azar con factura por email. Incluye sistema de referidos con puntos, carrito de compras, panel de administración con gestión de rifas, asignación manual de tickets, selección de ganador, moderadores, historial de transacciones con exportación a Excel, generación de facturas PDF, y contenido de la web 100% editable. Moneda: pesos colombianos (COP).

---

## Sobre el proyecto

Julian Winners es una plataforma de rifas digitales. El cliente se registra, navega las rifas disponibles, selecciona un pack de tickets (con cantidad y precio), lo agrega al carrito y paga mediante Mercado Pago. Una vez confirmado el pago, el sistema genera automáticamente los números de ticket al azar (sin repeticiones), los asigna al usuario, genera una factura PDF y la envía por email. Cada rifa tiene una cantidad máxima de tickets a vender, y cuando se completan, ya no se pueden comprar más. El administrador puede también asignar tickets manualmente, elegir al ganador buscando un número de ticket, y exportar toda la información a Excel.

---

## Funcionalidades principales

### Para el usuario

- **Registro y login**: el usuario se registra con nombre de usuario, email, teléfono, ciudad, dirección y contraseña.
- **Catálogo de rifas**: listado de todas las rifas activas con nombre, descripción, imágenes y packs de tickets disponibles.
- **Rifas destacadas**: sección con las rifas marcadas como destacadas.
- **Packs de tickets**: cada rifa ofrece packs con diferente cantidad de tickets y precio. También se puede comprar tickets individuales.
- **Carrito de compras**: el usuario agrega packs de diferentes rifas al carrito y realiza una sola compra.
- **Pago con Mercado Pago**: al confirmar la compra, se genera un link de pago de Mercado Pago. Una vez aprobado el pago, los tickets se asignan automáticamente.
- **Números al azar**: los números de ticket se generan aleatoriamente dentro del rango de la rifa, sin repeticiones, con la cantidad de dígitos correspondiente.
- **Factura por email**: al completar la compra, el usuario recibe un email con los detalles del pedido, los números de tickets asignados y un enlace para descargar la factura en PDF.
- **Mis tickets**: página donde el usuario puede ver todos los tickets que compró, organizados por rifa.
- **Sistema de referidos**: cada usuario tiene un enlace de referido. Cuando una persona compra tickets usando ese enlace, el referidor acumula puntos de referido. Los referidos se registran por rifa.
- **Página de referidos**: el usuario puede ver su enlace de referido, cuántos puntos tiene y las instrucciones del programa.
- **Página de pago exitoso**: confirmación visual después de completar una compra.
- **Recuperación de contraseña**: flujo con envío de código de verificación por email para restablecer la contraseña.

### Página de inicio

- **Hero principal**: sección de bienvenida con título, subtítulo y botón de acción.
- **Sección informativa**: dos secciones con imagen y texto sobre cómo funciona el servicio.
- **Sección de tickets**: listado de las rifas disponibles con sus packs.
- **Cómo funciona**: explicación paso a paso del proceso de compra.
- **Contacto**: sección de contacto con datos del negocio (WhatsApp, email, teléfono).
- **Términos y condiciones**: página con el contenido legal.

### Panel de administración

- **Dashboard**: vista general del estado de la plataforma.
- **Gestión de rifas**: crear, editar y eliminar rifas con nombre, descripción, imágenes, packs de tickets (cantidad y precio), precio individual, cantidad total de tickets a vender, opción de destacada y opción de desactivar.
- **Asignación manual de tickets**: el administrador o moderador puede asignar tickets a un usuario buscándolo por nombre de usuario o email, indicando la rifa, la cantidad de tickets y el monto. Los tickets se generan al azar y se envía la factura por email.
- **Elegir ganador**: buscar un número de ticket en una rifa específica para identificar al usuario ganador con todos sus datos.
- **Usuarios por rifa**: ver todos los usuarios que participan en una rifa, con opción de descargar la lista completa en un archivo Excel con nombre, email, ciudad, dirección, teléfono y cantidad de referidos.
- **Historial de transacciones y compras**: listado paginado de todas las compras realizadas con datos del usuario, tickets, monto, rifa, vendedor/moderador y enlace a la factura. Opción de descargar todo el historial como archivo Excel.
- **Gestión de moderadores**: crear cuentas de moderador que pueden asignar tickets manualmente (ventas presenciales).
- **Usuarios con referidos**: ver los usuarios que tienen referidos y sus puntos acumulados.
- **Editar datos de la página**: modificar todos los textos de la web (hero, secciones informativas, sección de tickets, contacto, términos y condiciones, referidos), las imágenes de cada sección, y los datos del negocio (nombre, descripción, logo, redes sociales, configuración de Mercado Pago, configuración de email SMTP).

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Mercado Pago** | Procesamiento de pagos para la compra de tickets, con webhooks para asignación automática al confirmar el pago |
| **Nodemailer** | Envío de facturas de compra por email con plantilla HTML, incluyendo detalle de tickets y enlace de descarga de PDF |
| **PDFMake** | Generación de facturas en PDF descargables en el servidor |
| **ExcelJS** | Exportación de usuarios por rifa y del historial de compras a archivos Excel descargables |
| **Lodash** | Actualización dinámica de propiedades anidadas en los textos editables de la web |
| **Redux** | Estado global de la aplicación (usuario, carrito, rifas, datos de la web) |

---

## Tecnologías utilizadas

### Sitio web (Frontend)
- **Next.js 13** — Framework React con rutas basadas en páginas
- **React 18** — Interfaz de usuario dinámica e interactiva
- **Redux** — Manejo del estado global (carrito, usuario, rifas, textos de la web)
- **SASS** — Estilos avanzados con módulos CSS
- **React Scroll** — Navegación suave entre secciones
- **React Spinners** — Indicadores de carga visuales
- **Axios** — Comunicación con el servidor
- **Notistack** — Notificaciones visuales
- **Font Awesome** — Iconografía

### Servidor (Backend)
- **Node.js + Express** — Servidor web robusto
- **MongoDB + Mongoose** — Base de datos flexible con relaciones profundas (deep populate)
- **JWT** — Autenticación segura con tokens
- **Bcrypt** — Encriptación de contraseñas
- **Mercado Pago SDK** — Procesamiento de pagos con webhooks automáticos
- **Nodemailer** — Envío de correos electrónicos con plantillas HTML
- **PDFMake** — Generación de facturas en PDF
- **ExcelJS** — Generación de archivos Excel para exportación de datos
- **Multer** — Subida de imágenes (rifas, logo)
- **Lodash** — Actualización dinámica de propiedades anidadas
- **UUID** — Generación de identificadores únicos para facturas
- **FS Extra** — Manejo avanzado de archivos

---

## Arquitectura del sistema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│                         │         │                         │
│   Sitio Web             │◄───────►│   Servidor API          │
│   (Next.js 13)          │  REST   │   (Node + Express)      │
│                         │         │                         │
│  - Catálogo de rifas    │         │  - Autenticación        │
│  - Compra de tickets    │         │  - CRUD Rifas           │
│  - Carrito de compras   │         │  - Tickets + Asignación │
│  - Mis tickets          │         │  - Pagos (Mercado Pago) │
│  - Referidos            │         │  - Compras + Facturas   │
│  - Login / Registro     │         │  - Referidos            │
│  - Panel admin          │         │  - Moderadores          │
│  - Contenido editable   │         │  - Textos editables     │
│                         │         │  - Excel + PDF          │
│                         │         │  - Emails               │
└─────────────────────────┘         └────────┬────────────────┘
                                             │
         ┌───────────────────┐      ┌────────▼────────────────┐
         │                   │      │                         │
         │  Mercado Pago     │◄─────│   Base de datos         │
         │  (Pagos + Webhook)│      │   (MongoDB)             │
         │                   │      │                         │
         └───────────────────┘      │  - Usuarios + Roles     │
                                    │  - Rifas                │
         ┌───────────────────┐      │  - Tickets              │
         │                   │      │  - Compras              │
         │  Email (SMTP)     │◄─────│  - Textos web           │
         │  (Nodemailer)     │      │  - Datos web            │
         │                   │      │  - Verificadores MP     │
         │  - Facturas       │      │                         │
         │  - Recuperación   │      └─────────────────────────┘
         │    de contraseña  │
         │                   │
         └───────────────────┘
```

---

## Flujo de compra de tickets

```
El usuario navega las rifas → Selecciona un pack de tickets
        ↓
Agrega al carrito → Puede agregar más packs de otras rifas
        ↓
Confirma la compra → Se genera el link de pago de Mercado Pago
        ↓
Paga con Mercado Pago → Webhook notifica al servidor
        ↓
El servidor genera números de ticket al azar (sin repeticiones)
        ↓
Se asignan los tickets al usuario → Se crea la factura PDF
        ↓
El usuario recibe email con los tickets y enlace a la factura
        ↓
Puede ver sus tickets en "Mis tickets" y descargar la factura
```

---

## Flujo de referidos

```
El usuario comparte su enlace de referido
        ↓
Otra persona accede a la web con ese enlace y compra tickets
        ↓
Al confirmar el pago, el sistema registra el referido
        ↓
El referidor acumula puntos por cada persona nueva que compra
        ↓
Los puntos se muestran en la página de referidos
```

---

## Aspectos destacados del desarrollo

- **Generación de tickets al azar sin repeticiones**: cada ticket se genera con un número aleatorio dentro del rango de la rifa, verificando que no exista duplicado. Los números se formatean con la cantidad de dígitos correspondiente a la cantidad total de tickets (por ejemplo, si hay 1000 tickets, los números van de 001 a 1000).
- **Webhooks de Mercado Pago**: el sistema procesa automáticamente las notificaciones de pago de Mercado Pago, verifica que no se duplique el procesamiento (con un verificador persistente) y asigna los tickets solo cuando el pago está confirmado.
- **Asignación manual por moderadores**: los moderadores pueden vender tickets de forma presencial, asignándolos a un usuario por nombre o email, con generación de factura y envío de email automático.
- **Selección de ganador**: el administrador busca un número de ticket en una rifa y el sistema devuelve todos los datos del usuario ganador.
- **Exportación a Excel**: tanto la lista de usuarios por rifa como el historial completo de compras se pueden descargar como archivos Excel, incluyendo datos de contacto, vendedor y factura.
- **Facturas PDF automáticas**: cada compra genera una factura PDF única con identificador UUID, descargable desde un enlace permanente.
- **Sistema de referidos**: enlace personalizado por usuario que registra quién trajo a cada comprador, acumulando puntos por rifa.
- **Contenido 100% editable**: todos los textos, imágenes y datos del negocio (nombre, logo, redes sociales, credenciales de Mercado Pago, configuración de email) se pueden modificar desde el panel de administración.
- **Roles diferenciados**: tres roles (usuario, moderador, administrador) con diferentes niveles de acceso y funcionalidades.
- **Verificación de pagos duplicados**: el sistema almacena un registro de cada pago procesado para evitar asignar tickets dos veces por la misma transacción.
- **Carrito de compras**: el usuario puede agregar packs de diferentes rifas al carrito antes de pagar.
- **Diseño responsive**: toda la plataforma se adapta a celulares, tablets y escritorio.
- **Seguridad**: autenticación JWT, contraseñas encriptadas con Bcrypt, verificación de token en operaciones protegidas y roles de acceso.
