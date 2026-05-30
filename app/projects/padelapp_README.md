# PADEL - Plataforma de Gestión de Torneos de Pádel

Plataforma web para la organización y seguimiento de torneos de pádel. Permite gestionar torneos con categorías, registrar jugadores con sus clubes y puntos, cargar partidos con resultados por sets, consultar el calendario de eventos, ver el circuito de torneos por categoría, seguir el ranking de jugadores filtrado por género y categoría, y buscar jugadores por nombre para ver su posición. Incluye panel de administración para crear torneos, jugadores y partidos, y panel de moderador para la carga operativa de resultados.

---

## Sobre el proyecto

PADEL es una plataforma pensada para una organización o federación de pádel que necesita gestionar su circuito de torneos. El administrador crea las categorías, clubes, torneos y jugadores. Los moderadores cargan los partidos con los resultados (sets). El público accede a la web para consultar el calendario de torneos, ver los resultados de cada fecha, seguir el circuito completo por categoría y consultar el ranking de jugadores. Cada jugador acumula puntos y pertenece a un club y una categoría, con soporte para torneos masculinos y femeninos.

---

## Funcionalidades principales

### Para el público

- **Calendario de torneos**: listado de todos los torneos ordenados por fecha con nombre, ubicación, categoría, género y datos de contacto (WhatsApp y email).
- **Circuito por categoría**: vista organizada por categoría con todos los torneos de cada una, incluyendo fecha, ubicación, género y descripción.
- **Resultados de torneos**: detalle de cada torneo con los partidos jugados, equipos enfrentados, resultados por sets y estado del torneo (pendiente, en curso, completado).
- **Ranking de jugadores**: tabla de posiciones por categoría con nombre, puntos y club. Filtro por género (masculino/femenino) y búsqueda por nombre de jugador.
- **Búsqueda de jugador**: al buscar un jugador por nombre, se muestra su posición en el ranking de su categoría junto con el top 5 de la misma.
- **Contacto**: página de contacto para consultas.

### Panel de administración

- **Gestión de torneos**: crear, editar y eliminar torneos con nombre, fecha, género (masculino/femenino), ubicación, categoría, horario de inicio, WhatsApp, email y descripción.
- **Gestión de jugadores**: crear, editar y eliminar jugadores con nombre, edad, género, club, categoría y puntos.
- **Gestión de categorías**: crear, editar y eliminar categorías con nombre y descripción. Las categorías usan eliminación lógica.
- **Gestión de clubes**: crear y administrar los clubes donde juegan los jugadores.
- **Gestión de administradores**: administrar los usuarios con roles de acceso.

### Panel de moderador

- **Carga de partidos**: registrar partidos con jugadores/equipos enfrentados, resultados por sets, torneo asociado, duración y tipo de partido (individual o por equipos).
- **Edición de partidos**: modificar resultados y datos de partidos existentes.
- **Gestión de jugadores**: crear y editar jugadores desde el panel del moderador.
- **Gestión de torneos**: crear y editar torneos desde el panel del moderador.

---

## Tecnologías utilizadas

### Sitio web (Frontend)
- **Next.js 15** — Framework React con App Router
- **React 19** — Interfaz de usuario dinámica e interactiva
- **Tailwind CSS** — Estilos utilitarios para diseño responsive
- **Axios** — Comunicación con el servidor
- **Notistack** — Notificaciones visuales
- **React Icons** — Iconografía

### Servidor (Backend)
- **Node.js + Express** — Servidor web robusto
- **MongoDB + Mongoose** — Base de datos flexible con relaciones entre entidades
- **JWT** — Autenticación segura con tokens
- **Bcrypt** — Encriptación de contraseñas

---

## Arquitectura del sistema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│                         │         │                         │
│   Sitio Web             │◄───────►│   Servidor API          │
│   (Next.js 15)          │  REST   │   (Node + Express)      │
│                         │         │                         │
│  - Calendario           │         │  - Autenticación        │
│  - Circuito             │         │  - CRUD Torneos         │
│  - Resultados           │         │  - CRUD Jugadores       │
│  - Ranking              │         │  - CRUD Partidos        │
│  - Contacto             │         │  - CRUD Categorías      │
│  - Panel admin          │         │  - CRUD Clubes          │
│  - Panel moderador      │         │  - Ranking + Búsqueda   │
│                         │         │  - Calendario + Circuito│
└─────────────────────────┘         └────────┬────────────────┘
                                             │
                                    ┌────────▼────────────────┐
                                    │                         │
                                    │   Base de datos         │
                                    │   (MongoDB)             │
                                    │                         │
                                    │  - Torneos              │
                                    │  - Jugadores            │
                                    │  - Partidos             │
                                    │  - Categorías           │
                                    │  - Clubes               │
                                    │  - Usuarios + Roles     │
                                    │                         │
                                    └─────────────────────────┘
```

---

## Flujo de un torneo

```
El admin crea categorías y clubes → Crea un torneo con fecha, lugar y categoría
        ↓
Registra a los jugadores con su club, categoría y puntos
        ↓
El moderador carga los partidos con los equipos y resultados por sets
        ↓
El público consulta el calendario → Ve los resultados de cada torneo
        ↓
El ranking se actualiza por puntos → Los jugadores se ordenan por categoría y género
```

---

## Aspectos destacados del desarrollo

- **Circuito de torneos por categoría**: la plataforma organiza automáticamente todos los torneos por categoría, mostrando el circuito completo con fechas, ubicaciones y géneros.
- **Ranking dinámico**: el ranking de jugadores se calcula en tiempo real por categoría y género, mostrando el top 5 de cada categoría y permitiendo buscar la posición exacta de cualquier jugador.
- **Partidos individuales y por equipos**: el sistema soporta partidos 1v1 y por equipos, con múltiples jugadores por lado y resultados detallados por sets.
- **Estado automático del torneo**: el sistema calcula automáticamente si un torneo está pendiente, en curso o completado según los partidos cargados y sus resultados.
- **Resultados con banderas**: cada resultado muestra los equipos enfrentados con sus nombres, país de origen y resultados set a set.
- **Eliminación lógica**: las categorías usan soft delete para poder restaurarlas si es necesario.
- **Tres niveles de acceso**: usuarios públicos (consulta), moderadores (carga de partidos y jugadores) y administradores (gestión completa del sistema).
- **Seguridad**: autenticación JWT, contraseñas encriptadas con Bcrypt y control de acceso por roles.
