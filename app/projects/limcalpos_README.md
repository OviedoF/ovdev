# LIMCAL POS - Aplicación de Escritorio de Gestión Comercial y Punto de Venta

Aplicación de escritorio desarrollada con Electron para la gestión comercial completa de LIMCAL. Permite administrar productos con categorías e importación masiva desde Excel, registrar ventas y compras, gestionar clientes y proveedores, emitir facturas electrónicas con ARCA/AFIP (Factura A y B, Notas de Crédito), generar remitos, controlar stock y materias primas, administrar revendedores con comisiones y descuentos, gestionar usuarios con permisos, ver estadísticas por producto y cliente, generar el libro IVA de ventas y compras, y realizar backup y restauración de datos. Toda la información se almacena localmente usando IndexedDB.

---

## Sobre el proyecto

LIMCAL POS es una aplicación de escritorio que reemplaza al sistema anterior basado en FoxPro (Husky POS). La empresa necesitaba un sistema moderno, fácil de usar y con facturación electrónica integrada con AFIP. La aplicación se instala en la computadora del negocio, funciona con base de datos local (IndexedDB) y se conecta a AFIP para emitir comprobantes electrónicos con CAE válido. Soporta múltiples usuarios con roles y permisos, revendedores con comisiones y descuentos, y generación de PDFs para facturas, notas de crédito y remitos.

---

## Funcionalidades principales

### Gestión de productos

- **Catálogo de productos**: crear, editar y eliminar productos con nombre, precio, descripción, descripción resumida, modo de uso, imagen, categoría y compra mínima.
- **Categorías**: organizar los productos en categorías editables.
- **Importación desde Excel**: importar productos masivamente desde un archivo Excel (XLS/XLSX).
- **Cambio masivo de precios**: actualizar los precios de múltiples productos de forma masiva.
- **Gestión de stock**: control de inventario con vista de stock actual.
- **Reposición de stock**: registro de reposiciones de inventario.

### Gestión de ventas

- **Nueva venta**: registrar ventas seleccionando cliente, productos y cantidades.
- **Listado de ventas**: ver todas las ventas registradas con detalle.
- **Detalle de venta**: ver la información completa de cada venta.
- **Historial de ventas**: acceso al historial completo de operaciones.
- **Facturación electrónica con AFIP**: emitir Factura A y Factura B directamente desde la venta, con conexión al servidor de AFIP, cálculo de IVA y obtención de CAE.
- **Notas de Crédito**: emitir Notas de Crédito tipo A y B asociadas a una factura original.
- **Generación de remitos**: crear remitos descargables en PDF para las ventas.
- **Descuentos por revendedor**: al facturar, si la venta es de un revendedor, se aplica automáticamente el descuento o comisión configurados.
- **Descuentos por cliente**: los clientes pueden tener un descuento individual que se aplica sobre el precio.
- **Libro IVA de ventas**: generación del libro IVA con todos los comprobantes de ventas.

### Gestión de compras

- **Nueva compra**: registrar compras a proveedores con productos y cantidades.
- **Listado de compras**: ver todas las compras registradas.
- **Detalle de compra**: información completa de cada compra.
- **Gestión de proveedores**: crear, editar y eliminar proveedores.
- **Facturas de compra**: registrar las facturas recibidas de los proveedores.
- **Libro IVA de compras**: generación del libro IVA con todos los comprobantes de compras.

### Gestión de clientes

- **Ficha del cliente**: crear, editar y eliminar clientes con todos sus datos.
- **Descuento individual**: cada cliente puede tener un porcentaje de descuento que se aplica automáticamente al facturar.

### Gestión de revendedores

- **Ficha del revendedor**: crear, editar y eliminar revendedores con nombre, provincia, ciudad, y porcentaje de descuento o comisión.
- **Descuento o comisión**: cada revendedor puede tener un descuento (reduce el precio) o una comisión (aumenta el precio) que se aplica al facturar sus ventas.

### Materias primas

- **Control de insumos**: registrar materias primas con nombre, stock, descripción, imagen y precio.
- **Gestión de stock**: control del inventario de insumos.

### Usuarios y permisos

- **Gestión de usuarios**: crear, editar y eliminar usuarios del sistema.
- **Roles y permisos**: cada usuario tiene permisos configurables para acceder a las diferentes secciones.
- **Login con contraseña encriptada**: acceso seguro al sistema.

### Estadísticas

- **Diario de ventas**: resumen de las ventas del día.
- **Ventas por cliente**: estadísticas de ventas filtradas por cliente.
- **Ventas por producto**: estadísticas de ventas filtradas por producto.
- **Ventas por cliente y producto**: cruce de datos entre clientes y productos.

### Configuración

- **Datos globales**: configuración del negocio (CUIT, razón social, punto de venta, IVA).
- **Comisiones**: configuración de comisiones generales.
- **Backup y restauración**: descargar un respaldo completo de la base de datos (JSON) y restaurar los datos desde un archivo de backup.

---

## Tecnologías utilizadas

### Aplicación de escritorio
- **Electron** — Framework para aplicaciones de escritorio multiplataforma (Windows, Mac)
- **HTML + CSS + JavaScript** — Interfaz de usuario con vistas independientes por sección
- **IndexedDB** — Base de datos local del navegador para almacenamiento persistente
- **AFIP SDK (@afipsdk/afip.js)** — Integración directa con ARCA/AFIP para facturación electrónica
- **PDF Puppeteer + PDFMake** — Generación de PDFs de facturas, notas de crédito y remitos
- **ExcelJS + XLSX** — Importación y exportación de datos desde/hacia archivos Excel
- **Bcrypt** — Encriptación de contraseñas de usuarios
- **File Saver** — Descarga de archivos (backups, PDFs, Excel)

---

## Arquitectura del sistema

```
┌─────────────────────────────────────────────┐
│                                             │
│   Aplicación de Escritorio (Electron)       │
│                                             │
│  ┌─────────────────┐  ┌──────────────────┐  │
│  │  Proceso         │  │  Vistas (HTML)   │  │
│  │  Principal       │  │                  │  │
│  │                  │  │  - Ventas        │  │
│  │  - Menú          │◄►│  - Compras       │  │
│  │  - IPC           │  │  - Productos     │  │
│  │  - Ventanas      │  │  - Clientes      │  │
│  │                  │  │  - Proveedores   │  │
│  └─────────────────┘  │  - Revendedores  │  │
│                        │  - Materias P.   │  │
│  ┌─────────────────┐  │  - Estadísticas  │  │
│  │  IndexedDB       │  │  - Usuarios      │  │
│  │  (Base local)    │  │  - Configuración │  │
│  │                  │  │  - Facturación   │  │
│  │  - Productos     │  │  - Libro IVA     │  │
│  │  - Clientes      │  │  - Backup        │  │
│  │  - Ventas        │  │                  │  │
│  │  - Compras       │  └──────────────────┘  │
│  │  - Proveedores   │                        │
│  │  - Revendedores  │  ┌──────────────────┐  │
│  │  - Materias P.   │  │  ARCA / AFIP     │  │
│  │  - Usuarios      │  │  (Facturación)   │  │
│  │  - Configuración │  │                  │  │
│  │  - Facturas      │  │  - Factura A/B   │  │
│  │                  │  │  - NDC A/B       │  │
│  └─────────────────┘  │  - CAE            │  │
│                        │                  │  │
│                        └──────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Aspectos destacados del desarrollo

- **Aplicación de escritorio con Electron**: sistema instalable en Windows y Mac que se ejecuta como aplicación nativa, sin necesidad de navegador ni conexión a internet (excepto para facturación AFIP).
- **Base de datos local con IndexedDB**: todos los datos se almacenan localmente en el navegador de Electron, sin necesidad de un servidor de base de datos externo.
- **Facturación electrónica real con AFIP**: integración completa con ARCA/AFIP mediante el SDK oficial para emitir Facturas A y B, y Notas de Crédito A y B, con obtención de CAE válido.
- **Revendedores con descuentos y comisiones**: cada revendedor puede tener un descuento (reduce precios) o una comisión (aumenta precios) que se aplica automáticamente al facturar.
- **Descuentos por cliente**: los clientes tienen un porcentaje de descuento individual que se aplica sobre el precio final.
- **Importación masiva desde Excel**: los productos se pueden cargar masivamente importando un archivo Excel con los datos.
- **Cambio masivo de precios**: actualización rápida de precios de múltiples productos a la vez.
- **Generación de PDFs**: facturas, notas de crédito y remitos se generan como documentos PDF profesionales.
- **Libro IVA**: generación del libro IVA tanto de ventas como de compras con todos los comprobantes registrados.
- **Backup y restauración**: respaldo completo de la base de datos en formato JSON y restauración desde archivo, ideal para migración entre equipos.
- **Estadísticas detalladas**: reportes de ventas por día, por cliente, por producto y cruce cliente-producto.
- **Migración desde FoxPro**: el sistema reemplaza al antiguo Husky POS basado en Visual FoxPro, modernizando toda la operación del negocio.
- **Comunicación entre procesos**: uso del sistema IPC de Electron para comunicación entre el proceso principal y las vistas de la aplicación.
- **Usuarios con permisos**: cada usuario del sistema tiene permisos configurables para acceder a secciones específicas.
