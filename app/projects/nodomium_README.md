# Casa de Nodominium - Sitio Web de Centro Cultural y Educativo

Sitio web para Casa de Nodominium, un centro independiente de educación y cultura ubicado en Playa Las Tunas, La Unión, El Salvador. El sitio presenta los eventos del centro (meetups de Bitcoin, talleres de arte, asociaciones comunitarias), información sobre la organización y su misión, ubicación con mapa interactivo de Google Maps, formulario de contacto, y una sección de donaciones en Bitcoin con código QR. Diseño responsive con navegación fija, animaciones CSS, slider de eventos con soporte táctil y lightboxes con detalles de cada evento.

---

## Sobre el proyecto

Casa de Nodominium es un espacio cultural y educativo sin fines de lucro en El Salvador, gestionado por NODOMINIUM S.A.S. de C.V. (fundado en mayo de 2025). Su misión es promover el aprendizaje, el pensamiento crítico y la expresión creativa en la comunidad. El sitio web funciona como la presencia digital del centro: muestra los próximos eventos con sus detalles y patrocinadores, explica la visión y las actividades del espacio (talleres de arte, tecnología, soberanía digital, agricultura regenerativa), permite a los visitantes encontrar el centro en el mapa y enviar consultas, y facilita donaciones en Bitcoin para financiar los eventos educativos y culturales.

---

## Páginas del sitio

### Inicio (index.html)

- **Slider de eventos**: carrusel interactivo con los próximos eventos del centro, con navegación por flechas y soporte para gestos táctiles (swipe) en dispositivos móviles.
- **Lightboxes de eventos**: al hacer clic en un evento, se abre una ventana modal con toda la información: nombre del evento, descripción detallada, características principales, patrocinadores y logos.
- **Eventos destacados**: Bitcoin Meetup (encuentro comunitario sobre Bitcoin), eventos de la asociación ASADI (diabetes), talleres de arte.
- **Animaciones de entrada**: efectos CSS de aparición gradual (fadeInUp, zoomIn) al cargar la página.

### Sobre (sobre.html)

- **Presentación del centro**: descripción de Casa de Nodominium como espacio independiente de desarrollo cultural y educativo.
- **Visión y actividades**: tarjetas informativas con la visión del proyecto ("crear un modelo replicable de espacio cultural descentralizado") y las actividades que se realizan (talleres de arte, tecnología, soberanía digital, agricultura regenerativa).
- **Información institucional**: fecha de fundación, tipo de organización (sin fines de lucro) y entidad gestora.
- **Imagen del edificio**: foto del espacio físico del centro.
- **Mapa de ubicación**: mapa de Google Maps integrado.

### Ubicación (ubicacion.html)

- **Mapa interactivo**: mapa de Google Maps embebido con la ubicación exacta del centro.
- **Formulario de contacto**: formulario funcional con nombre, email, asunto y mensaje, procesado con FormSubmit. Incluye validación, estados de carga y mensaje de éxito.
- **Datos de contacto**: dirección completa (Playa Las Tunas, La Unión, El Salvador, a 100m de Agroferretería Las Tunas), teléfonos, email (info@casadenodominium.com) y horarios de atención (lunes a viernes 9:00-18:00, sábados 9:00-16:00).

### Donaciones (donaciones.html)

- **Donaciones en Bitcoin**: sección dedicada a recibir donaciones en Bitcoin para financiar los eventos del centro.
- **Código QR**: código QR escaneable para realizar donaciones directamente desde el celular.
- **Información sobre Bitcoin**: explicación de por qué se aceptan donaciones en Bitcoin (seguro, rápido, transparente) y cómo se utilizan los fondos.
- **Referencia a eventos**: vinculación con el Bitcoin Meetup "Mi Primer Bitcoin" como ejemplo del uso de las donaciones.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Google Maps** | Mapa interactivo embebido para mostrar la ubicación del centro en las páginas "Sobre" y "Ubicación" |
| **FormSubmit** | Procesamiento del formulario de contacto sin necesidad de backend, con redirección y mensaje de éxito |
| **Bitcoin (QR)** | Recepción de donaciones en Bitcoin mediante código QR escaneable |
| **Font Awesome** | Iconografía en toda la interfaz (menú, redes sociales, contacto, eventos) |

---

## Tecnologías utilizadas

- **HTML5** — Estructura semántica de las páginas
- **CSS3** — Estilos avanzados con gradientes, animaciones, flexbox y CSS Grid
- **JavaScript** — Interactividad del slider, menú móvil, lightboxes y formularios
- **Diseño responsive** — Media queries para adaptación a dispositivos móviles (480px, 768px, 1024px)
- **Font Awesome** — Iconografía vectorial
- **Google Maps Embed** — Mapas interactivos integrados
- **FormSubmit** — Procesamiento de formularios de contacto sin backend

---

## Arquitectura del sitio

```
┌─────────────────────────────────────────────────┐
│                                                 │
│   Sitio Web Estático (HTML + CSS + JS)          │
│                                                 │
│  ┌──────────────┐  ┌────────────────────────┐   │
│  │  index.html   │  │  sobre.html            │   │
│  │               │  │                        │   │
│  │  - Slider     │  │  - Presentación        │   │
│  │    de eventos │  │  - Visión y actividades│   │
│  │  - Lightboxes │  │  - Info institucional  │   │
│  │  - Animaciones│  │  - Mapa               │   │
│  └──────────────┘  └────────────────────────┘   │
│                                                 │
│  ┌──────────────┐  ┌────────────────────────┐   │
│  │ ubicacion.html│  │  donaciones.html       │   │
│  │               │  │                        │   │
│  │  - Mapa       │  │  - QR Bitcoin          │   │
│  │  - Formulario │  │  - Info donaciones     │   │
│  │    de contacto│  │  - Cómo se usan       │   │
│  │  - Datos      │  │    los fondos          │   │
│  └──────┬───────┘  └────────────────────────┘   │
│         │                                       │
│  ┌──────▼───────────────────────────────────┐   │
│  │  Navegación fija inferior (todas las pág)│   │
│  │  Inicio | Sobre | Ubicación | Donaciones │   │
│  └──────────────────────────────────────────┘   │
│                                                 │
└─────────────────┬───────────────────────────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
┌───▼────────┐ ┌─▼──────────┐ ┌▼─────────────┐
│            │ │            │ │              │
│ Google Maps│ │ FormSubmit │ │ Bitcoin (QR) │
│ (Ubicación)│ │ (Contacto) │ │ (Donaciones) │
│            │ │            │ │              │
└────────────┘ └────────────┘ └──────────────┘
```

---

## Aspectos destacados del desarrollo

- **Slider de eventos con soporte táctil**: el carrusel de eventos en la página de inicio soporta navegación por flechas y gestos táctiles (swipe) en dispositivos móviles, con transiciones suaves entre eventos.
- **Lightboxes con información completa**: cada evento se abre en una ventana modal con descripción detallada, características principales, patrocinadores y logos, ofreciendo toda la información sin salir de la página.
- **Diseño responsive completo**: todas las páginas se adaptan a diferentes tamaños de pantalla con breakpoints específicos para móvil (480px), tablet (768px) y escritorio (1024px).
- **Animaciones CSS**: efectos de aparición gradual (fadeInUp, zoomIn, float, slide-in) que le dan dinamismo al sitio sin necesidad de librerías externas.
- **Navegación fija inferior**: barra de navegación anclada en la parte inferior de la pantalla en todas las páginas, con menú hamburguesa para dispositivos móviles.
- **Formulario de contacto funcional**: formulario procesado con FormSubmit que funciona sin necesidad de backend propio, con validación de campos, estados de carga y mensaje de confirmación.
- **Donaciones en Bitcoin**: sección dedicada con código QR escaneable para facilitar las donaciones en criptomoneda, alineado con la temática de soberanía digital del centro.
- **Sitio completamente estático**: no requiere servidor backend ni base de datos, lo que facilita el alojamiento y reduce los costos de mantenimiento.
- **Todo el código embebido**: CSS y JavaScript integrados directamente en cada página HTML, sin dependencias externas más allá de Font Awesome y Google Maps.
- **Gradientes y diseño visual**: esquema de colores consistente con gradientes oscuros y acentos en naranja/dorado que reflejan la identidad visual del centro.
