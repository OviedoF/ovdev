# TalentHunt - Chatbot de Reclutamiento con Inteligencia Artificial y Parsing de CVs

Plataforma de reclutamiento automatizado con chatbot conversacional impulsado por inteligencia artificial. El sistema recibe candidatos a través de un chatbot configurable que realiza preguntas dinámicas, parsea currículums vitae con GPT-4 (extracción automática de datos personales, experiencia y educación desde PDFs), gestiona postulaciones con flujo de estados, se integra con TalentTalent API para publicación de ofertas, incluye constructor de flujos de chatbot con pasos configurables, dashboard de analítica (funnel de conversión, rendimiento por reclutador, time-to-hire), y 3 roles (administrador, reclutador y visor). Panel de administración con Filament.

---

## Sobre el proyecto

TalentHunt es una herramienta de recursos humanos que automatiza las primeras etapas del proceso de reclutamiento. En lugar de revisar cientos de CVs manualmente, el sistema usa un chatbot que conversa con los candidatos, les hace preguntas relevantes para el puesto, recibe su CV y automáticamente extrae la información usando GPT-4. Los reclutadores ven un panel con todos los candidatos organizados por estado, con los datos ya extraídos y listos para evaluar. El sistema se integra con TalentTalent para publicar ofertas laborales en múltiples portales desde un solo lugar.

---

## Funcionalidades principales

### Chatbot conversacional

- **Flujo de conversación configurable**: cada oferta laboral tiene su propio flujo de chatbot con preguntas personalizadas.
- **Constructor de flujos**: interfaz para diseñar los pasos del chatbot (preguntas abiertas, opción múltiple, subida de archivo, datos de contacto).
- **Pasos configurables**: cada paso tiene tipo, texto, opciones de respuesta, validaciones y orden de aparición.
- **Respuestas dinámicas**: el chatbot adapta las preguntas siguientes según las respuestas del candidato.
- **Subida de CV**: el candidato sube su CV directamente en la conversación del chatbot.
- **Interfaz conversacional**: diseño tipo chat que hace el proceso amigable para el candidato.

### Parsing de CVs con IA (GPT-4)

- **Lectura de PDFs**: extracción de texto desde archivos PDF de currículum.
- **Procesamiento con GPT-4**: envío del texto extraído a GPT-4 para análisis semántico.
- **Extracción de datos personales**: nombre, email, teléfono, ubicación y redes sociales.
- **Extracción de experiencia laboral**: empresas, cargos, fechas y descripción de funciones.
- **Extracción de educación**: instituciones, títulos, fechas y especializaciones.
- **Extracción de habilidades**: competencias técnicas y blandas identificadas por la IA.
- **Campos automáticos**: los datos extraídos se guardan automáticamente en el perfil del candidato.

### Gestión de postulaciones

- **Flujo de estados**: nuevo → en revisión → entrevista → prueba técnica → oferta → contratado / rechazado.
- **Kanban de candidatos**: vista de tablero con columnas por estado para gestión visual.
- **Detalle del candidato**: datos personales, CV parseado, respuestas del chatbot, notas del reclutador y timeline.
- **Notas internas**: los reclutadores agregan notas privadas sobre cada candidato.
- **Asignación a reclutador**: cada postulación se asigna a un reclutador responsable.

### Ofertas laborales

- **Creación de ofertas**: título, descripción, requisitos, ubicación, salario y tipo de contrato.
- **Flujo de chatbot por oferta**: cada oferta tiene su propio flujo de preguntas para el chatbot.
- **Publicación en portales**: integración con TalentTalent API para publicar en múltiples portales de empleo.
- **Estado de la oferta**: activa, pausada, cerrada.
- **Candidatos por oferta**: listado de todos los postulantes con su estado actual.

### Dashboard de analítica

- **Funnel de conversión**: visualización del embudo de reclutamiento (visitas → postulaciones → entrevistas → contrataciones).
- **Rendimiento por reclutador**: métricas de candidatos procesados, tiempo de respuesta y contrataciones por reclutador.
- **Time-to-hire**: tiempo promedio desde la postulación hasta la contratación.
- **Métricas por oferta**: postulantes, tasa de conversión y estado de cada oferta.
- **Gráficos temporales**: evolución de postulaciones y contrataciones en el tiempo.

### Panel de administración (Filament)

- **Dashboard administrativo**: métricas generales del sistema de reclutamiento.
- **Gestión de ofertas**: crear, editar y cerrar ofertas laborales.
- **Gestión de usuarios**: 3 roles (administrador, reclutador, visor) con permisos diferenciados.
- **Configuración del chatbot**: diseñar flujos de conversación para cada oferta.
- **Configuración de IA**: parámetros de conexión con GPT-4 y reglas de extracción.
- **Cuestionarios dinámicos**: sistema de preguntas configurables para el chatbot.

---

## Integraciones y conexiones

| Servicio | Uso |
|---|---|
| **OpenAI GPT-4** | Parsing inteligente de CVs: extracción de datos personales, experiencia, educación y habilidades desde PDFs |
| **TalentTalent API** | Publicación de ofertas laborales en múltiples portales de empleo |
| **Filament v3.3** | Panel de administración con dashboard, recursos y formularios |
| **Alpine.js** | Interactividad del chatbot y componentes dinámicos |
| **DomPDF** | Generación de reportes en PDF |

---

## Tecnologías utilizadas

- **Laravel 12** — Framework PHP para backend y API
- **Filament v3.3** — Panel de administración y dashboard
- **Alpine.js 3.14** — Interactividad frontend y chatbot
- **Tailwind CSS v4** — Estilos utilitarios
- **Livewire** — Componentes reactivos de servidor
- **MySQL** — Base de datos relacional
- **OpenAI PHP SDK** — Integración con GPT-4
- **Spatie Permission** — Roles y permisos (admin, reclutador, visor)
- **Spatie Media Library** — Gestión de archivos y CVs subidos
- **Laravel Sanctum** — Autenticación por tokens
- **DomPDF** — Generación de PDFs
- **OpenSpout** — Exportación a Excel

---

## Arquitectura del sistema

```
┌─────────────────────────────┐
│                             │
│   Chatbot (Alpine.js)       │
│                             │
│  - Interfaz conversacional  │
│  - Preguntas dinámicas      │
│  - Subida de CV             │
│  - Respuestas del candidato │
│                             │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────────────────────────────┐
│                                                     │
│   Servidor (Laravel 12 + Filament v3.3)             │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │  Panel de administración (Filament)           │  │
│  │                                               │  │
│  │  - Dashboard de analítica                     │  │
│  │  - Gestión de ofertas + Chatbot builder       │  │
│  │  - Kanban de candidatos                       │  │
│  │  - Gestión de usuarios (3 roles)              │  │
│  │  - Configuración de IA                        │  │
│  │  - Reportes PDF y Excel                       │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  - Procesamiento de CVs con GPT-4                   │
│  - Flujo de estados de postulaciones                │
│  - Integración TalentTalent API                     │
│  - Autenticación Sanctum + Spatie Permission        │
│                                                     │
└───┬──────────┬──────────┬───────────────────────────┘
    │          │          │
┌───▼───┐ ┌───▼─────┐ ┌──▼──────────┐
│MySQL  │ │OpenAI   │ │TalentTalent │
│       │ │GPT-4    │ │API          │
│- Ofer-│ │         │ │             │
│  tas  │ │- Parsing│ │- Publicación│
│- Cand.│ │  de CVs │ │  de ofertas │
│- Post.│ │- Extrac.│ │  en portales│
│- Users│ │  datos  │ │  de empleo  │
│- Flujo│ │         │ │             │
│  chat │ │         │ │             │
└───────┘ └─────────┘ └─────────────┘
```

---

## Flujo de reclutamiento automatizado

```
El reclutador crea una oferta laboral con descripción y requisitos
        ↓
Diseña el flujo del chatbot para esa oferta:
  - Preguntas sobre experiencia, disponibilidad, pretensión salarial
  - Solicitud de CV
  - Preguntas técnicas específicas del puesto
        ↓
Se publica la oferta en portales de empleo vía TalentTalent API
        ↓
El candidato accede al chatbot → Responde las preguntas → Sube su CV
        ↓
GPT-4 procesa el CV automáticamente:
  - Extrae datos personales (nombre, email, teléfono)
  - Extrae experiencia laboral (empresas, cargos, fechas)
  - Extrae educación (títulos, instituciones)
  - Identifica habilidades técnicas y blandas
        ↓
Se crea la postulación con todos los datos ya parseados
        ↓
El reclutador revisa en el Kanban → Mueve al candidato por los estados:
  Nuevo → En revisión → Entrevista → Prueba técnica → Oferta → Contratado
        ↓
El dashboard muestra métricas: funnel, time-to-hire, rendimiento por reclutador
```

---

## Aspectos destacados del desarrollo

- **Parsing de CVs con GPT-4**: el sistema lee PDFs de currículum, extrae el texto y usa GPT-4 para identificar y estructurar datos personales, experiencia laboral, educación y habilidades automáticamente.
- **Constructor de flujos de chatbot**: interfaz visual para diseñar la conversación del chatbot con pasos configurables (preguntas abiertas, opción múltiple, subida de archivos), sin necesidad de programar.
- **Dashboard de analítica avanzado**: funnel de conversión, rendimiento por reclutador, time-to-hire y métricas por oferta para optimizar el proceso de reclutamiento.
- **Integración con TalentTalent API**: publicación automática de ofertas en múltiples portales de empleo desde un solo lugar.
- **3 roles diferenciados**: administrador (configuración completa), reclutador (gestión de candidatos y ofertas) y visor (solo lectura de métricas y reportes).
- **Filament v3.3 como panel principal**: toda la gestión se realiza desde un panel de administración profesional construido con Filament, incluyendo dashboard, recursos y formularios.
- **Flujo de estados completo**: las postulaciones recorren un pipeline estructurado con vista Kanban para gestión visual.
- **Laravel 12 con stack moderno**: última versión del framework con Tailwind CSS v4, Alpine.js 3.14 y Livewire para máxima productividad.
- **Cuestionarios dinámicos**: sistema flexible de preguntas que se adapta a cada oferta laboral sin necesidad de modificar código.
- **Exportación a PDF y Excel**: generación de reportes descargables para análisis offline y presentaciones.
