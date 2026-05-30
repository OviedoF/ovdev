# Grupo SDG - Sistema de Gestión Empresarial con Facturación Electrónica CFDI 4.0 (México)

Sistema de gestión empresarial completo con facturación electrónica CFDI 4.0 para el mercado mexicano. Incluye pipeline de ventas completo (cotización → pedido → factura → pago → cobranza), emisión de comprobantes fiscales digitales con certificados CSD, validación de RFC contra la lista negra del SAT, integración con PAC para timbrado, módulo de tesorería, políticas de contraseña con expiración, y 4 tablas de auditoría. Backend con 40+ modelos y 80+ endpoints, documentado con Swagger/OpenAPI.

---

## Sobre el proyecto

Grupo SDG es una plataforma de gestión empresarial diseñada para empresas mexicanas que necesitan emitir facturas electrónicas cumpliendo con la normativa del SAT (Servicio de Administración Tributaria). El sistema cubre todo el ciclo comercial: desde la cotización inicial hasta la cobranza final, pasando por pedidos, facturas CFDI 4.0 con timbrado fiscal, y registro de pagos. Incluye un módulo de tesorería para control financiero, políticas de seguridad con expiración de contraseñas, y auditoría completa de todas las operaciones.

---

## Funcionalidades principales

### Pipeline de ventas

- **Cotizaciones**: creación de cotizaciones con productos, cantidades, precios y condiciones comerciales.
- **Pedidos**: conversión de cotizaciones aprobadas en pedidos de venta.
- **Facturas**: generación de facturas CFDI 4.0 a partir de pedidos confirmados.
- **Pagos**: registro de pagos recibidos con complemento de pago.
- **Cobranzas**: seguimiento de cuentas por cobrar con estados y vencimientos.
- **Conversión automática**: flujo cotización → pedido → factura con arrastre de datos.

### Facturación electrónica CFDI 4.0

- **Comprobantes fiscales digitales**: emisión de facturas, notas de crédito y complementos de pago según normativa SAT.
- **Certificados CSD**: encriptación de comprobantes con Certificado de Sello Digital.
- **Timbrado fiscal**: integración con PAC (Proveedor Autorizado de Certificación) para timbrado.
- **Validación de RFC**: verificación de RFC del receptor contra la lista negra del SAT.
- **Catálogos del SAT**: catálogos oficiales de uso de CFDI, régimen fiscal, forma de pago, método de pago y clave de producto/servicio.
- **XML y PDF**: generación del XML fiscal y representación impresa en PDF.
- **Cancelación de CFDI**: proceso de cancelación con motivo según normativa.

### Gestión de clientes y productos

- **Directorio de clientes**: datos fiscales completos (RFC, razón social, régimen fiscal, domicilio fiscal, uso de CFDI).
- **Catálogo de productos**: productos y servicios con clave SAT, unidad de medida, precio e impuestos.
- **Impuestos configurables**: IVA, ISR, IEPS con tasas y retenciones configurables por producto.

### Tesorería

- **Cuentas bancarias**: registro de cuentas bancarias de la empresa.
- **Movimientos**: registro de ingresos y egresos.
- **Conciliación**: conciliación de pagos registrados con movimientos bancarios.
- **Flujo de caja**: proyección de ingresos y egresos.

### Seguridad y auditoría

- **Políticas de contraseña**: requisitos de complejidad, expiración periódica y bloqueo por intentos fallidos.
- **4 tablas de auditoría**: registro de accesos, cambios en datos, operaciones fiscales y acciones administrativas.
- **Control de acceso**: roles y permisos por funcionalidad.
- **Sesiones**: control de sesiones activas con cierre automático por inactividad.

### Panel de administración

- **Dashboard**: métricas de ventas, facturación y cobranza con gráficos.
- **Configuración fiscal**: datos del emisor, certificados CSD y configuración del PAC.
- **Gestión de usuarios**: alta, baja y modificación de usuarios con roles.
- **Catálogos del sistema**: administración de catálogos internos y del SAT.
- **Reportes**: informes de ventas, facturación, cobranza y auditoría.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **PAC (Proveedor Autorizado de Certificación)** | Timbrado fiscal de comprobantes CFDI 4.0 |
| **SAT (Servicio de Administración Tributaria)** | Catálogos oficiales, validación de RFC y lista negra |
| **Certificados CSD** | Encriptación y firma digital de comprobantes fiscales |
| **DomPDF** | Generación de representaciones impresas de CFDI en PDF |
| **Swagger/OpenAPI** | Documentación interactiva de los 80+ endpoints de la API |
| **Laravel Sanctum** | Autenticación segura por tokens |

---

## Tecnologías utilizadas

### Sitio web (Frontend)
- **React 19** — Interfaz de usuario
- **TypeScript** — Tipado estático completo
- **Vite** — Bundler y servidor de desarrollo
- **React Router DOM 7** — Navegación SPA
- **React Hook Form + Zod** — Formularios y validación
- **Tailwind CSS** — Estilos utilitarios
- **Axios** — Comunicación con el servidor API
- **React Toastify** — Notificaciones visuales

### Servidor (Backend)
- **Laravel 12** — Framework PHP para API REST
- **MySQL** — Base de datos relacional
- **Laravel Sanctum** — Autenticación por tokens
- **Eloquent ORM** — 40+ modelos con relaciones
- **80+ endpoints** — API REST completa
- **DomPDF** — Generación de PDFs
- **Swagger/OpenAPI** — Documentación de la API
- **XML Builder** — Generación de XML para CFDI

---

## Arquitectura del sistema

```
┌─────────────────────────────────┐         ┌─────────────────────────────────┐
│                                 │         │                                 │
│   Sitio Web                     │◄───────►│   Servidor API                  │
│   (React 19 + TypeScript)       │  REST   │   (Laravel 12)                  │
│                                 │         │                                 │
│  - Pipeline de ventas           │         │  - Autenticación Sanctum        │
│    · Cotizaciones               │         │  - 40+ Modelos Eloquent         │
│    · Pedidos                    │         │  - 80+ Endpoints REST           │
│    · Facturas CFDI 4.0          │         │  - Facturación CFDI 4.0         │
│    · Pagos + Complementos       │         │    · Generación XML             │
│    · Cobranzas                  │         │    · Timbrado con PAC           │
│  - Clientes (datos fiscales)    │         │    · Certificados CSD           │
│  - Productos + Impuestos        │         │    · Validación RFC SAT         │
│  - Tesorería                    │         │  - Tesorería                    │
│  - Administración               │         │  - Auditoría (4 tablas)         │
│                                 │         │  - Políticas de contraseña      │
│                                 │         │  - Swagger/OpenAPI              │
│                                 │         │  - Generación PDF (DomPDF)      │
└─────────────────────────────────┘         └────────┬────────────────────────┘
                                                     │
                                  ┌──────────────────┼──────────────────┐
                                  │                  │                  │
                         ┌────────▼───────┐ ┌───────▼────────┐ ┌──────▼───────┐
                         │  MySQL         │ │  PAC           │ │  SAT         │
                         │                │ │  (Timbrado     │ │  (Catálogos  │
                         │  - Clientes    │ │  fiscal)       │ │  + Lista     │
                         │  - Productos   │ │                │ │  negra RFC)  │
                         │  - Cotizaciones│ └────────────────┘ └──────────────┘
                         │  - Pedidos     │
                         │  - Facturas    │
                         │  - Pagos       │
                         │  - Cobranzas   │
                         │  - Tesorería   │
                         │  - Auditoría   │
                         │  - Usuarios    │
                         └────────────────┘
```

---

## Flujo de facturación CFDI 4.0

```
Se crea una cotización con productos, cantidades y precios
        ↓
El cliente aprueba → Se convierte en pedido de venta
        ↓
Se confirma el pedido → Se genera la factura CFDI 4.0
        ↓
El sistema valida el RFC del receptor contra la lista negra del SAT
        ↓
Se genera el XML con los datos fiscales del CFDI
        ↓
Se firma digitalmente con el Certificado de Sello Digital (CSD)
        ↓
Se envía al PAC para timbrado fiscal
        ↓
El PAC retorna el XML timbrado con UUID y sello del SAT
        ↓
Se genera la representación impresa en PDF
        ↓
Se registra el pago → Se emite complemento de pago si aplica
        ↓
Se da seguimiento a la cobranza hasta el cobro efectivo
```

---

## Aspectos destacados del desarrollo

- **Facturación CFDI 4.0 completa**: emisión de comprobantes fiscales digitales cumpliendo toda la normativa del SAT mexicano, incluyendo timbrado con PAC, certificados CSD y catálogos oficiales.
- **Pipeline de ventas end-to-end**: flujo completo desde cotización hasta cobranza con conversión automática entre etapas y arrastre de datos.
- **Validación RFC con lista negra del SAT**: verificación automática del RFC del receptor contra la lista de contribuyentes no localizados o con operaciones presuntas.
- **4 tablas de auditoría**: trazabilidad completa de accesos, cambios de datos, operaciones fiscales y acciones administrativas.
- **Políticas de contraseña empresariales**: requisitos de complejidad, expiración periódica, historial de contraseñas y bloqueo por intentos fallidos.
- **40+ modelos con 80+ endpoints**: backend robusto con API REST completa documentada con Swagger/OpenAPI.
- **React 19 + TypeScript**: frontend moderno con tipado estático completo para mayor robustez.
- **Laravel 12**: última versión del framework para máximo rendimiento y características actuales.
- **Generación de XML y PDF**: comprobantes fiscales en formato XML para el SAT y representación impresa en PDF para el cliente.
- **Módulo de tesorería**: control financiero con cuentas bancarias, movimientos y conciliación.
