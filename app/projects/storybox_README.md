# StoryBox - Editor Interactivo de Historias y Presentaciones con Programación Visual

Aplicación web interactiva para crear historias y presentaciones multimedia con programación visual. El usuario crea escenas con fondos personalizados, agrega objetos e imágenes que puede arrastrar, redimensionar y rotar libremente, escribe textos con múltiples fuentes y estilos, agrega música de fondo por escena, configura transiciones animadas entre escenas, y programa el comportamiento de los objetos usando bloques visuales de código (movimiento, apariencia y control). Las historias se reproducen en modo presentación a pantalla completa, se exportan como PDF, se guardan en el servidor y se pueden retomar en cualquier momento. Incluye soporte para subir objetos, fondos y audios personalizados, sistema de deshacer/rehacer, copiar y pegar elementos, interfaz bilingüe (español/inglés) y diseño responsive para escritorio, tablet y móvil con soporte táctil.

---

## Sobre el proyecto

StoryBox es una herramienta de creación multimedia pensada para educación y entretenimiento. Funciona como un editor visual donde el usuario construye historias escena por escena, como si armara una presentación interactiva. Cada escena es un lienzo donde se posicionan objetos, textos y fondos, y se les puede agregar comportamientos mediante bloques de programación visual (similar a Scratch). Los objetos pueden moverse, crecer, encogerse, rotar, seguir a otros objetos, mostrar comentarios, reproducir sonidos, ocultarse y reaparecer, todo programado visualmente arrastrando bloques. Las escenas se conectan con transiciones animadas y música de fondo, y la historia completa se reproduce en modo presentación a pantalla completa. Además, cada historia se guarda en el servidor con una miniatura generada automáticamente, y se puede exportar como PDF o imprimir directamente desde el navegador.

---

## Funcionalidades principales

### Editor de escenas

- **Escenas ilimitadas**: crear todas las escenas necesarias para la historia, organizadas en un panel lateral con miniaturas.
- **Escena de portada**: la primera escena (escena 0) funciona como portada de la historia con un selector especial de fondo y textos de título y autor generados automáticamente.
- **Reordenar escenas**: arrastrar y soltar para cambiar el orden de las escenas en el panel lateral.
- **Eliminar escenas**: eliminar cualquier escena excepto la portada.
- **Selector de escena activa**: clic en la miniatura para cambiar de escena y editarla.

### Objetos

- **Biblioteca de objetos**: catálogo organizado por categorías con imágenes predefinidas (personajes, animales, elementos, decoraciones) descargadas desde el servidor.
- **Subir objetos personalizados**: importar imágenes propias para usar como objetos en las escenas.
- **Arrastrar y soltar**: posicionar los objetos libremente dentro de la escena arrastrándolos con el mouse o el dedo en dispositivos táctiles.
- **Redimensionar**: cambiar el tamaño de los objetos desde 8 puntos de agarre (esquinas y bordes), con tamaño mínimo de 50x50 píxeles.
- **Rotar**: girar los objetos libremente arrastrando el control de rotación.
- **Orden de capas (z-index)**: controlar qué objetos aparecen delante y cuáles detrás con botones de ordenamiento.
- **Eliminar objetos**: eliminar cualquier objeto de la escena.
- **Escalado responsive**: los objetos se reescalan proporcionalmente cuando cambia el tamaño de la ventana.

### Textos

- **Textos personalizados**: agregar textos con contenido libre dentro de las escenas.
- **Fuentes tipográficas**: elegir entre 5 fuentes disponibles (Roboto, Oswald, Alfa Slab One, Dancing Script, Space Mono).
- **Tamaños de texto**: 6 tamaños predefinidos (16, 18, 22, 30, 40 y 60 píxeles).
- **Estilos de formato**: negrita, cursiva y subrayado.
- **Color personalizado**: selector de color con control de tono (HSL), brillo, saturación, colores predefinidos y selector hexadecimal.
- **Texto de narración**: modo especial de texto que se posiciona fijo en la parte inferior de la escena con fondo semitransparente, ideal para narraciones o diálogos.
- **Arrastrar, redimensionar y rotar**: los textos se manipulan igual que los objetos (excepto los textos de narración que son fijos).
- **Edición en tiempo real**: al seleccionar un texto, se abre el panel de edición con todas las opciones del texto seleccionado.

### Fondos

- **Fondos de color**: selector de color con control de tono, brillo, saturación, 14 colores predefinidos y selección rápida de blanco y negro.
- **Fondos de imagen**: biblioteca de imágenes organizadas por categorías, descargadas desde el servidor.
- **Fondos personalizados**: subir imágenes propias para usar como fondo de escena.
- **Un fondo por escena**: cada escena puede tener un fondo de color o de imagen.
- **Selector de portada**: al crear la historia, se muestra un carrusel especial para elegir el fondo de la portada.

### Música y audio

- **Música de fondo por escena**: cada escena puede tener su propia pista de audio.
- **Biblioteca de audios**: catálogo de audios organizados por categorías, descargados desde el servidor.
- **Subir audios personalizados**: importar archivos MP3 propios para usar como música de fondo.
- **Previsualización**: reproducir y detener los audios antes de asignarlos a la escena.
- **Reproducción automática**: en modo presentación, la música se reproduce automáticamente en bucle al mostrar la escena y se pausa al cambiar de escena.
- **Volumen**: la música se reproduce al 50% de volumen.
- **Eliminar audio**: quitar la música de fondo de cualquier escena.

### Transiciones

- **8 direcciones de transición**: derecha, izquierda, arriba, abajo, derecha-arriba, izquierda-arriba, derecha-abajo, izquierda-abajo.
- **3 velocidades**: lento (2 segundos), medio (1 segundo), rápido (0.5 segundos).
- **Transición por escena**: cada escena puede tener su propia transición y velocidad.
- **Animación CSS**: las transiciones se ejecutan como animaciones CSS al cambiar de escena en modo presentación.
- **Sin transición**: opción de desactivar la transición para una escena.

### Programación visual con bloques

- **Editor de bloques por objeto**: cada objeto de la escena puede tener su propio programa de bloques que define su comportamiento durante la presentación.
- **Arrastrar bloques**: los bloques se agregan al programa del objeto arrastrándolos desde la paleta de bloques.
- **Reordenar bloques**: cambiar el orden de ejecución arrastrando los bloques dentro del programa.
- **Eliminar bloques**: arrastrar un bloque fuera de la zona del programa para eliminarlo.
- **Integración con Blockly**: el editor usa la librería Blockly de Google para la interfaz de programación visual.

#### Bloques de Movimiento (verde)

- **Derecha**: mover el objeto a la derecha una cantidad de píxeles, con velocidad configurable (lento, medio, rápido).
- **Izquierda**: mover el objeto a la izquierda una cantidad de píxeles, con velocidad configurable.
- **Arriba**: mover el objeto hacia arriba una cantidad de píxeles, con velocidad configurable.
- **Abajo**: mover el objeto hacia abajo una cantidad de píxeles, con velocidad configurable.
- **Seguir**: hacer que el objeto siga a otro objeto de la escena (seleccionable desde un desplegable).

#### Bloques de Apariencia (violeta)

- **Aumentar**: aumentar el tamaño del objeto una cantidad de píxeles.
- **Disminuir**: reducir el tamaño del objeto una cantidad de píxeles.
- **Rotar**: girar el objeto una cantidad de grados.
- **Comentario**: mostrar un texto encima del objeto (como un globo de diálogo).
- **Sonido**: reproducir un efecto de sonido (seleccionable desde la biblioteca de audios).
- **Mostrar**: hacer visible el objeto.
- **Ocultar**: hacer invisible el objeto.

#### Bloques de Control (amarillo)

- **Repetir**: ejecutar un bloque una cantidad determinada de veces (1 a 100).
- **Detener**: pausar la ejecución durante una cantidad de segundos.

#### Ejecución de bloques

- Los bloques se ejecutan automáticamente cuando la escena se muestra en modo presentación.
- Se ejecutan en orden secuencial, de arriba hacia abajo.
- Cada bloque espera a que el anterior termine antes de ejecutarse.
- Los valores de velocidad se convierten en duraciones de animación CSS.

### Modo presentación

- **Pantalla completa**: la historia se reproduce en modo inmersivo a pantalla completa.
- **Navegación entre escenas**: flechas para avanzar y retroceder entre escenas.
- **Contador de escenas**: indicador de la escena actual en la parte inferior.
- **Ejecución de programas**: los bloques de cada objeto se ejecutan automáticamente al mostrar la escena.
- **Reproducción de audio**: la música de fondo de cada escena se reproduce automáticamente en bucle.
- **Transiciones animadas**: las escenas se muestran con la transición configurada.
- **Textos de narración**: los textos de tipo narración aparecen en la parte inferior de la pantalla.
- **Botón de salida**: botón para volver al editor en la esquina superior izquierda.

### Exportar y imprimir

- **Exportar como PDF**: todas las escenas se renderizan y se exportan como un documento PDF con una escena por página en orientación horizontal.
- **Captura de alta calidad**: cada escena se captura como imagen usando html2canvas con ajuste de resolución según el dispositivo.
- **Descarga automática**: el PDF se descarga automáticamente con el nombre de la historia.
- **Impresión directa**: opción de imprimir las escenas directamente desde el navegador.

### Guardar y cargar historias

- **Guardar en el servidor**: la historia completa (escenas, objetos, textos, fondos, música, transiciones, programas de bloques) se guarda en el servidor con una miniatura generada automáticamente.
- **Actualizar historia**: guardar los cambios sobre una historia existente sin crear una nueva.
- **Abrir historias guardadas**: panel con todas las historias guardadas del usuario, con miniaturas para identificarlas.
- **Crear nueva historia**: iniciar una historia en blanco descartando la actual (con confirmación).
- **Miniatura automática**: al guardar, se captura la escena actual como imagen PNG para usar como vista previa.

### Deshacer y rehacer

- **Deshacer (Undo)**: revertir el último cambio realizado (agregar, mover, eliminar, redimensionar, rotar objetos o textos).
- **Rehacer (Redo)**: volver a aplicar un cambio revertido.
- **Historial de cambios**: sistema basado en pilas (pasado/futuro) que registra cada modificación de las escenas.

### Copiar y pegar

- **Copiar elementos**: copiar el objeto o texto seleccionado al portapapeles.
- **Pegar elementos**: pegar el elemento copiado en el centro de la escena con un nuevo identificador único.
- **Mantiene propiedades**: el elemento pegado conserva todas las propiedades del original (tamaño, rotación, estilo, bloques de programación).

### Interfaz bilingüe

- **Español e inglés**: toda la interfaz está disponible en español e inglés.
- **Textos dinámicos**: tooltips, mensajes, etiquetas y notificaciones cambian según el idioma seleccionado.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **Blockly (Google)** | Motor de programación visual por bloques para definir el comportamiento de los objetos en las escenas |
| **react-blockly** | Integración de Blockly con React para el editor de bloques |
| **html2canvas** | Captura de cada escena como imagen para la generación de PDFs y miniaturas |
| **jsPDF** | Generación de documentos PDF con todas las escenas de la historia |
| **react-beautiful-dnd** | Arrastrar y soltar para reordenar escenas en el panel lateral y bloques en el editor de programación |
| **react-draggable** | Arrastrar objetos y textos libremente dentro de la escena |
| **react-resizable** | Redimensionar objetos y textos con puntos de agarre |
| **react-colorful** | Selector de color HSL para fondos y textos |
| **Framer Motion** | Animaciones de aparición y desaparición de paneles y elementos |
| **react-slick** | Carrusel para el selector de fondo de portada |
| **react-to-print** | Impresión directa de escenas desde el navegador |
| **iScroll** | Scroll suave en los paneles de objetos y audios |
| **Notistack** | Notificaciones visuales de acciones (guardado, error, copiado) |
| **Servidor API** | Almacenamiento de historias, objetos, fondos y audios en el servidor |

---

## Tecnologías utilizadas

- **React 18** — Interfaz de usuario dinámica e interactiva
- **Vite** — Empaquetador rápido para desarrollo y producción
- **React Router** — Navegación entre el editor y la pantalla de inicio
- **Blockly + react-blockly** — Programación visual con bloques para el comportamiento de objetos
- **react-beautiful-dnd** — Arrastrar y soltar para reordenar escenas y bloques
- **react-draggable** — Posicionamiento libre de objetos y textos en la escena
- **react-resizable** — Redimensionado de elementos con puntos de agarre
- **react-colorful** — Selector de color HSL para fondos y textos
- **html2canvas** — Captura de escenas como imágenes para PDFs y miniaturas
- **jsPDF** — Generación de documentos PDF exportables
- **Framer Motion** — Animaciones fluidas de interfaz
- **react-slick** — Carrusel interactivo para selección de fondos
- **react-to-print** — Impresión directa desde el navegador
- **iScroll** — Scroll táctil optimizado para paneles
- **SASS** — Estilos avanzados con módulos CSS
- **Axios** — Comunicación con el servidor API
- **UUID** — Identificadores únicos para objetos, textos y escenas
- **Notistack** — Notificaciones visuales
- **React Spinners** — Indicadores de carga
- **Context API** — Estado global de la aplicación (escenas, selección, historial, idioma)

---

## Arquitectura del sistema

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   Aplicación Web (React 18 + Vite)                                       │
│                                                                          │
│  ┌──────────────┐  ┌──────────────────────────────────┐  ┌────────────┐  │
│  │              │  │                                  │  │            │  │
│  │   Sidebar    │  │   Editor Principal (Main)        │  │   Nav      │  │
│  │              │  │                                  │  │            │  │
│  │  - Lista de  │  │  ┌────────────────────────────┐  │  │  - Fondos  │  │
│  │    escenas   │  │  │                            │  │  │  - Objetos │  │
│  │  - Miniaturas│  │  │   Lienzo de la escena      │  │  │  - Textos  │  │
│  │  - Reordenar │  │  │                            │  │  │  - Música  │  │
│  │  - Agregar   │  │  │  - Fondo (color/imagen)    │  │  │  - Trans.  │  │
│  │  - Eliminar  │  │  │  - Objetos (arrastrables)  │  │  │  - Código  │  │
│  │              │  │  │  - Textos (editables)       │  │  │            │  │
│  │              │  │  │  - Rotación + Redimensión   │  │  │  - Guardar │  │
│  │              │  │  │                            │  │  │  - Abrir   │  │
│  │              │  │  └────────────────────────────┘  │  │  - Exportar│  │
│  │              │  │                                  │  │  - Deshacer│  │
│  │              │  │                                  │  │  - Copiar  │  │
│  └──────────────┘  └──────────────────────────────────┘  └────────────┘  │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │   Paneles de edición (según opción seleccionada)                  │   │
│  │                                                                   │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐  │   │
│  │  │ Fondos   │ │ Objetos  │ │ Textos   │ │ Música   │ │ Trans. │  │   │
│  │  │          │ │          │ │          │ │          │ │        │  │   │
│  │  │- Color   │ │- Catego- │ │- Fuente  │ │- Catego- │ │- Direc-│  │   │
│  │  │  HSL     │ │  rías    │ │- Tamaño  │ │  rías    │ │  ción  │  │   │
│  │  │- Imagen  │ │- Galería │ │- Color   │ │- Preview │ │- Veloc-│  │   │
│  │  │- Subir   │ │- Subir   │ │- Estilos │ │- Subir   │ │  idad  │  │   │
│  │  │          │ │          │ │- Narrac. │ │          │ │        │  │   │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └────────┘  │   │
│  │                                                                   │   │
│  │  ┌─────────────────────────────────────────────────────────────┐  │   │
│  │  │ Programación Visual (Blockly)                               │  │   │
│  │  │                                                             │  │   │
│  │  │  ┌─────────────────┐    ┌────────────────────────────────┐  │  │   │
│  │  │  │ Paleta bloques  │    │ Programa del objeto            │  │  │   │
│  │  │  │                 │    │                                │  │  │   │
│  │  │  │ ● Movimiento    │    │ [Derecha 10px - Medio]         │  │  │   │
│  │  │  │   - Derecha     │───►│ [Repetir 3 veces]              │  │  │   │
│  │  │  │   - Izquierda   │    │ [Aumentar 5px]                 │  │  │   │
│  │  │  │   - Arriba      │    │ [Comentario "¡Hola!"]          │  │  │   │
│  │  │  │   - Abajo       │    │ [Sonido - Aplausos]            │  │  │   │
│  │  │  │   - Seguir      │    │ [Detener 2 segundos]           │  │  │   │
│  │  │  │                 │    │ [Izquierda 10px - Rápido]      │  │  │   │
│  │  │  │ ● Apariencia    │    │                                │  │  │   │
│  │  │  │   - Aumentar    │    └────────────────────────────────┘  │  │   │
│  │  │  │   - Disminuir   │                                       │  │   │
│  │  │  │   - Rotar       │                                       │  │   │
│  │  │  │   - Comentario  │                                       │  │   │
│  │  │  │   - Sonido      │                                       │  │   │
│  │  │  │   - Mostrar     │                                       │  │   │
│  │  │  │   - Ocultar     │                                       │  │   │
│  │  │  │                 │                                       │  │   │
│  │  │  │ ● Control       │                                       │  │   │
│  │  │  │   - Repetir     │                                       │  │   │
│  │  │  │   - Detener     │                                       │  │   │
│  │  │  └─────────────────┘                                       │  │   │
│  │  └─────────────────────────────────────────────────────────────┘  │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │   Modo Presentación (pantalla completa)                           │   │
│  │                                                                   │   │
│  │   [◄]  Escena con fondo + objetos animados + textos + música  [►] │   │
│  │                        Escena 3 de 8                              │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└──────────────────────────────┬───────────────────────────────────────────┘
                               │
                      REST API │
                               │
                  ┌────────────▼────────────────┐
                  │                             │
                  │   Servidor API              │
                  │                             │
                  │  - Historias (CRUD)          │
                  │  - Objetos por categoría     │
                  │  - Fondos por categoría      │
                  │  - Audios por categoría      │
                  │  - Subida de archivos        │
                  │    (objetos, fondos, audios) │
                  │  - Usuarios y proyectos      │
                  │                             │
                  └─────────────────────────────┘
```

---

## Flujo de creación de una historia

```
El usuario accede a la aplicación → Se carga el editor con una escena vacía (portada)
        ↓
Elige el fondo de la portada desde el carrusel → Se genera el título y el autor automáticamente
        ↓
Agrega nuevas escenas desde el panel lateral
        ↓
Para cada escena:
  - Elige un fondo (color sólido o imagen de la biblioteca)
  - Agrega objetos desde las categorías disponibles
  - Posiciona los objetos arrastrándolos, los redimensiona y rota
  - Agrega textos con fuente, tamaño, color y estilo personalizado
  - Opcionalmente agrega un texto de narración (fijo en la parte inferior)
  - Asigna música de fondo desde la biblioteca de audios
  - Configura la transición de entrada (dirección y velocidad)
  - Programa el comportamiento de los objetos con bloques visuales
        ↓
Reordena las escenas arrastrándolas en el panel lateral
        ↓
Reproduce la historia en modo presentación a pantalla completa
        ↓
Guarda la historia en el servidor → Se genera una miniatura automática
        ↓
Opcionalmente exporta como PDF o imprime directamente
```

---

## Flujo de programación de un objeto

```
El usuario selecciona un objeto en la escena
        ↓
Abre el panel de Programación Visual (Código)
        ↓
Ve la paleta de bloques organizada en tres categorías:
  - Movimiento (verde): Derecha, Izquierda, Arriba, Abajo, Seguir
  - Apariencia (violeta): Aumentar, Disminuir, Rotar, Comentario, Sonido, Mostrar, Ocultar
  - Control (amarillo): Repetir, Detener
        ↓
Arrastra bloques desde la paleta al programa del objeto
        ↓
Configura cada bloque: cantidad de píxeles, velocidad, objeto a seguir, texto del comentario, sonido
        ↓
Reordena los bloques arrastrándolos dentro del programa
        ↓
En modo presentación, los bloques se ejecutan automáticamente en orden secuencial
        ↓
El objeto se mueve, cambia de tamaño, rota, muestra comentarios, reproduce sonidos, se oculta o reaparece
```

---

## Flujo de exportación

```
El usuario termina de crear la historia
        ↓
Hace clic en el botón de exportar PDF
        ↓
Cada escena se renderiza como imagen de alta resolución (html2canvas)
        ↓
Se genera un PDF con una escena por página en orientación horizontal (jsPDF)
        ↓
El PDF se descarga automáticamente con el nombre de la historia
```

---

## Aspectos destacados del desarrollo

- **Programación visual con bloques**: los objetos se programan arrastrando bloques visuales de movimiento, apariencia y control, similar a Scratch pero integrado directamente en el editor de historias. Los bloques se ejecutan automáticamente durante la presentación.
- **17 tipos de bloques disponibles**: 5 de movimiento (derecha, izquierda, arriba, abajo, seguir), 7 de apariencia (aumentar, disminuir, rotar, comentario, sonido, mostrar, ocultar) y 2 de control (repetir, detener), cada uno con parámetros configurables.
- **Editor visual completo**: lienzo interactivo donde cada elemento (objeto, texto, imagen) se posiciona, redimensiona y rota libremente con 8 puntos de agarre, control de rotación radial y ordenamiento por capas.
- **Transiciones animadas entre escenas**: 8 direcciones de transición (derecha, izquierda, arriba, abajo y las 4 diagonales) con 3 velocidades configurables, implementadas como animaciones CSS.
- **Música de fondo por escena**: cada escena puede tener su propia pista de audio que se reproduce automáticamente en bucle durante la presentación, con pausa automática al cambiar de escena.
- **Sistema de deshacer/rehacer completo**: historial basado en pilas que registra cada modificación (agregar, mover, eliminar, redimensionar, rotar), permitiendo revertir y reaplicar cambios libremente.
- **Exportación a PDF de alta calidad**: cada escena se captura como imagen de alta resolución usando html2canvas con ajuste de escala según el dispositivo, y se genera un PDF profesional con jsPDF.
- **Guardado con miniatura automática**: al guardar la historia, se captura automáticamente la escena actual como imagen PNG que sirve como vista previa en el panel de historias.
- **Textos con control completo**: 5 fuentes tipográficas, 6 tamaños, negrita, cursiva, subrayado, color HSL con control de tono, brillo y saturación, colores predefinidos y selector hexadecimal. Modo narración para textos fijos en la parte inferior.
- **Subida de contenido personalizado**: el usuario puede subir sus propias imágenes como objetos, fondos y archivos de audio MP3 como música de fondo, ampliando la biblioteca disponible.
- **Diseño responsive con soporte táctil**: la aplicación funciona en escritorio, tablet y dispositivos móviles con soporte completo para gestos táctiles (arrastrar, redimensionar, rotar).
- **Interfaz bilingüe**: toda la interfaz está disponible en español e inglés, con textos dinámicos que cambian según el idioma seleccionado.
- **Copiar y pegar elementos**: cualquier objeto o texto se puede duplicar con un clic, conservando todas sus propiedades incluyendo los bloques de programación.
- **Escena de portada especial**: la primera escena funciona como portada con un carrusel de fondos disponibles y generación automática de textos de título y autor.
- **Ejecución secuencial de bloques**: durante la presentación, los bloques de cada objeto se ejecutan en orden, esperando a que cada uno termine antes de pasar al siguiente, con velocidades configurables que se convierten en duraciones de animación CSS.
- **Integración con Blockly de Google**: el motor de programación visual usa Blockly, la misma tecnología que utiliza Google para enseñar programación, adaptada para controlar el comportamiento de los objetos de la historia.
- **Context API para estado global**: toda la información de la aplicación (escenas, selección, historial, idioma, portapapeles) se gestiona con React Context, permitiendo la comunicación entre todos los componentes.
- **Selector de color HSL avanzado**: control deslizante de tono (0-360°), brillo y saturación para personalizar colores de textos y fondos, con 14 colores predefinidos y selector hexadecimal adicional.
