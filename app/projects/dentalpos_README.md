# Sunchales POS - Sistema de Gestión Comercial y Punto de Venta

Plataforma web completa de gestión comercial diseñada para negocios y comercios. Permite administrar productos con código de barras, registrar ventas y compras, gestionar clientes y proveedores, emitir facturas electrónicas con ARCA/AFIP, generar presupuestos, controlar stock y materias primas, gestionar garantías y devoluciones (RMA), y visualizar estadísticas del negocio con gráficos interactivos. Incluye sistema de suscripciones con Mercado Pago, notificaciones por email y generación de PDFs.

---

## Sobre el proyecto

Sunchales POS es un sistema integral de punto de venta pensado para comercios en Argentina. El usuario se registra, elige un plan de suscripción y accede a un panel donde puede gestionar todo su negocio: cargar productos con código de barras, registrar ventas y compras con cálculo automático de IVA, emitir facturas electrónicas validadas por ARCA (AFIP), generar presupuestos, llevar el control de stock y materias primas, administrar clientes y proveedores, y gestionar garantías y devoluciones. El sistema también ofrece reportes y estadísticas visuales para analizar el rendimiento del negocio.

---

## Funcionalidades principales

### Gestión de productos

- **Catálogo de productos**: cada producto tiene nombre, precio, stock, descripción, imagen y código de barras.
- **Tipos de producto**: se puede definir si el producto es una unidad física o un servicio.
- **Código de barras**: cada producto puede tener su código de barras asignado para lectura rápida.
- **Productos privados**: opción para marcar productos como privados (no visibles en ciertas vistas).
- **Control de stock**: stock actualizado en tiempo real con cada venta y compra registrada.

### Gestión de ventas

- **Registro de ventas**: cada venta incluye los productos vendidos con cantidad y precio, el cliente asociado, las fechas, el monto neto, el porcentaje de IVA y el total calculado automáticamente.
- **Venta rápida**: opción de registrar ventas sin tener un cliente cargado, ingresando los datos básicos del comprador (nombre, CUIT, DNI, dirección, condición de IVA).
- **Envío y seguimiento**: las ventas pueden tener envío asociado con código de seguimiento y email de notificación.
- **Vinculación con factura**: cada venta puede estar asociada a una factura electrónica emitida por ARCA/AFIP, con número de documento, enlace y PDF adjunto.
- **Conversión desde presupuesto**: un presupuesto aprobado se puede convertir directamente en una venta.

### Gestión de compras

- **Registro de compras**: cada compra incluye los productos adquiridos con cantidad, el proveedor, las fechas, el monto neto, el porcentaje de IVA y el total.
- **Datos de envío**: las compras pueden incluir información de envío con ciudad, dirección, código de seguimiento y enlace de rastreo.
- **Factura de compra**: se puede adjuntar la factura del proveedor a cada compra.

### Gestión de clientes

- **Ficha completa del cliente**: nombre, apellido, empresa, email, teléfono, DNI, CUIT, condición de IVA, condición de venta, dirección y razón social.
- **Historial de compras**: se registra la fecha de la última compra de cada cliente.
- **Búsqueda y filtrado**: listado de clientes con acceso rápido a su información.

### Gestión de proveedores

- **Ficha del proveedor**: nombre, apellido, empresa, email, teléfono, DNI, CUIT y fecha de última compra.
- **Vinculación con compras**: cada compra se asocia a un proveedor registrado.

### Presupuestos

- **Creación de presupuestos**: generar presupuestos detallados con múltiples productos (nombre, precio y cantidad), asociados a un cliente registrado o a un cliente rápido (nombre, CUIT, DNI, dirección, condición de IVA).
- **Concepto y notas**: cada presupuesto puede tener un concepto descriptivo y notas adicionales.
- **Estados de presupuesto**: cada presupuesto tiene un estado (pendiente, aprobado, rechazado).
- **Conversión a venta**: un presupuesto aprobado se puede convertir directamente en una venta.
- **Generación de PDF**: cada presupuesto genera un documento PDF descargable con los datos del negocio y del cliente.
- **Tiempo de validez configurable**: se puede definir cuántos días es válido un presupuesto desde la configuración del sistema.

### Facturación electrónica (ARCA/AFIP)

- **Emisión de facturas electrónicas**: el sistema se conecta directamente con ARCA (AFIP) para emitir comprobantes electrónicos válidos.
- **Cálculo automático de IVA**: cada venta calcula el IVA según el porcentaje configurado.
- **CAE automático**: cada factura obtiene su Código de Autorización Electrónica directamente de AFIP.
- **Generación de certificados**: el sistema permite configurar las credenciales y certificados necesarios para la conexión con ARCA/AFIP.
- **PDF de factura**: cada comprobante genera un PDF profesional con todos los datos fiscales.
- **Texto de garantía**: texto personalizable que se incluye en las facturas, configurable desde el panel.

### Garantías y devoluciones (RMA)

- **Gestión de RMA**: sistema completo para administrar devoluciones y garantías de productos.
- **Datos del reclamo**: cada RMA registra el cliente, el código de barras del producto, el nombre, las notas del caso, el estado, la fecha de inicio, la fecha de resolución, el monto total y el número de factura original.
- **Envío de devolución**: opción de gestionar el envío de la devolución con código de seguimiento y email de notificación.
- **Estados de seguimiento**: cada caso de RMA tiene un estado que se puede actualizar a medida que se resuelve.

### Materias primas

- **Control de insumos**: registro de materias primas con nombre, stock, descripción, imagen y precio.
- **Gestión de inventario**: seguimiento del stock de insumos necesarios para la operación del negocio.

### Dashboard con estadísticas

- **Gráficos interactivos**: visualización de ventas, compras y rendimiento del negocio con gráficos de líneas y barras.
- **Reportes**: sección dedicada a reportes y análisis del negocio.

### Gestión de archivos y notas

- **Archivos**: sección para almacenar y organizar documentos del negocio.
- **Notas**: sistema de notas internas para el usuario.

### Configuración

- **Suscripción**: gestión del plan contratado con pago mediante Mercado Pago.
- **Configuración de ARCA**: datos de facturación (CUIT, razón social, punto de venta, condición de IVA, dirección comercial, ingresos brutos), carga de certificados y claves de AFIP.
- **Configuración de email**: servidor SMTP configurable por usuario (puerto, host, usuario, contraseña) para envío de facturas y notificaciones.
- **Porcentaje de IVA**: porcentaje de IVA predeterminado configurable para todas las operaciones.
- **Texto de garantía**: texto personalizable que se incluye en las facturas.
- **Validez de presupuestos**: tiempo de validez configurable para los presupuestos emitidos.

### Usuarios

- **Gestión de usuarios**: administración de cuentas con acceso al sistema.
- **Controles de acceso**: sección de controles para definir permisos y accesos.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **ARCA / AFIP** | Emisión de facturas electrónicas con CAE validadas fiscalmente |
| **Mercado Pago** | Suscripciones con pagos recurrentes para el acceso al sistema |
| **Nodemailer** | Envío de emails con facturas PDF, notificaciones de envío y comunicaciones |
| **Chart.js** | Gráficos interactivos de estadísticas del negocio (ventas, compras, reportes) |
| **React Barcode** | Generación y visualización de códigos de barras para productos |
| **React to Print** | Impresión directa de documentos, facturas y etiquetas desde el navegador |
| **PDF Puppeteer** | Generación de PDFs de facturas y presupuestos en el servidor |

---

## Tecnologías utilizadas

### Aplicación web (Frontend)
- **Next.js 14 (App Router)** — Framework React con rutas basadas en carpetas
- **React 18** — Interfaz de usuario interactiva
- **SASS** — Estilos avanzados con módulos
- **Chart.js + React Chartjs 2** — Gráficos y visualización de estadísticas
- **React Barcode** — Generación de códigos de barras
- **React to Print** — Impresión directa de componentes
- **Framer Motion** — Animaciones y transiciones fluidas
- **React Select** — Selectores avanzados con búsqueda
- **React Icons** — Iconografía
- **AOS** — Animaciones al hacer scroll
- **Axios** — Comunicación con el servidor
- **Notistack** — Notificaciones visuales
- **Day.js** — Manejo de fechas
- **Sharp** — Optimización de imágenes

### Servidor (Backend)
- **Node.js + Express** — Servidor web (ES Modules)
- **MongoDB + Mongoose** — Base de datos con relaciones entre entidades
- **Afip.ts + @afipsdk/afip.js** — Integración directa con ARCA/AFIP para facturación electrónica
- **Mercado Pago SDK** — Suscripciones recurrentes con procesamiento de pagos
- **JWT** — Autenticación segura con tokens
- **Bcrypt** — Encriptación de contraseñas
- **Nodemailer** — Envío de correos electrónicos con plantillas HTML
- **PDF Puppeteer + Puppeteer** — Generación de PDFs de facturas y presupuestos en el servidor
- **Multer** — Subida de archivos (imágenes de productos, facturas, documentos)
- **UUID** — Generación de identificadores únicos

---

## Arquitectura del sistema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│                         │         │                         │
│   Aplicación Web        │◄───────►│   Servidor API          │
│   (Next.js 14)          │  REST   │   (Node + Express)      │
│                         │         │                         │
│  - Dashboard + Stats    │         │  - Autenticación        │
│  - Productos + Stock    │         │  - CRUD Productos       │
│  - Ventas               │         │  - Ventas + Facturación │
│  - Compras              │         │  - Compras              │
│  - Clientes             │         │  - Clientes/Proveedores │
│  - Proveedores          │         │  - Presupuestos         │
│  - Presupuestos         │         │  - RMA/Garantías        │
│  - RMA / Garantías      │         │  - Materias primas      │
│  - Materias primas      │         │  - Facturación + ARCA   │
│  - Reportes             │         │  - Suscripciones MP     │
│  - Configuración        │         │  - Emails               │
│                         │         │  - Generación PDF       │
└─────────────────────────┘         └────────┬────────────────┘
                                             │
┌─────────────────────────┐         ┌────────▼────────────────┐
│                         │         │                         │
│  Mercado Pago           │◄────────│   Base de datos         │
│  (Suscripciones)        │         │   (MongoDB)             │
│                         │         │                         │
└─────────────────────────┘         │  - Usuarios             │
                                    │  - Productos            │
┌─────────────────────────┐         │  - Ventas               │
│                         │         │  - Compras              │
│  ARCA / AFIP            │◄────────│  - Clientes             │
│  (Facturación electr.)  │         │  - Proveedores          │
│                         │         │  - Presupuestos         │
└─────────────────────────┘         │  - RMA                  │
                                    │  - Materias primas      │
┌─────────────────────────┐         │  - Configuración        │
│                         │         │                         │
│  Email (SMTP)           │◄────────└─────────────────────────┘
│  (Nodemailer)           │
│                         │
│  - Facturas PDF         │
│  - Notificaciones       │
│  - Seguimiento envíos   │
│                         │
└─────────────────────────┘
```

---

## Flujo de una venta

```
Selecciona productos del catálogo → Define cantidades y precios
        ↓
Asocia un cliente registrado o ingresa datos rápidos
        ↓
El sistema calcula automáticamente neto + IVA = total
        ↓
Emite factura electrónica con ARCA/AFIP → Obtiene CAE
        ↓
Genera PDF de la factura → Envía por email al cliente
        ↓
Actualiza stock de los productos vendidos
        ↓
La venta queda registrada con su factura, PDF y datos de envío
```

---

## Aspectos destacados del desarrollo

- **Punto de venta completo**: sistema integral que cubre todo el ciclo comercial: compras a proveedores, gestión de stock, ventas a clientes, facturación y reportes.
- **Facturación electrónica real con AFIP**: integración completa con ARCA/AFIP para emitir comprobantes electrónicos con CAE válido, directamente desde el sistema.
- **Código de barras**: soporte para códigos de barras en productos, con generación visual y lectura para identificación rápida.
- **Sistema de RMA**: gestión completa de garantías y devoluciones con seguimiento de estado, datos de envío y vinculación con la factura original.
- **Presupuestos con conversión a venta**: los presupuestos aprobados se convierten directamente en ventas, evitando duplicar el trabajo de carga.
- **Materias primas**: control separado de insumos y materias primas con su propio inventario, independiente de los productos de venta.
- **Cálculo automático de IVA**: todas las operaciones (ventas y compras) calculan automáticamente el IVA según el porcentaje configurado.
- **Generación de PDFs**: facturas y presupuestos generan documentos PDF profesionales desde el servidor con Puppeteer.
- **Impresión directa**: opción de imprimir documentos, etiquetas y comprobantes directamente desde el navegador.
- **SaaS con suscripciones**: acceso al sistema mediante planes de pago recurrentes con Mercado Pago.
- **Configuración SMTP personalizada**: cada usuario puede configurar su propio servidor de email para el envío de facturas y notificaciones.
- **Estadísticas visuales**: dashboard con gráficos de Chart.js para analizar ventas, compras y rendimiento del negocio.
- **Diseño responsive**: toda la plataforma se adapta a celulares, tablets y escritorio.
- **Seguridad**: autenticación JWT, contraseñas encriptadas con Bcrypt y acceso protegido a todas las operaciones.
