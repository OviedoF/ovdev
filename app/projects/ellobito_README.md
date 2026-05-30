# El Lobito 4pe - Calculadora de Puntuaciones de Golf (4 Jugadores)

Aplicación móvil para calcular las puntuaciones de un juego de apuestas de golf entre 4 jugadores. Variante de El Lobito adaptada para partidas de 4 personas, con una grilla interactiva de 18 hoyos × 4 jugadores (A, B, C, D). El sistema calcula automáticamente los puntos según reglas condicionales ajustadas para 4 jugadores (empates previos, cantidad de marcados por hoyo) y multiplica el resultado final por un precio por unidad configurable. Muestra los resultados en pesos colombianos con formato de moneda.

---

## Sobre el proyecto

El Lobito 4pe es la versión para 4 jugadores del juego de apuestas de golf El Lobito. Funciona igual que la versión de 5 jugadores, pero con las reglas de puntuación ajustadas para partidas más reducidas. Los jugadores marcan quién ganó en cada hoyo, y el sistema calcula los puntos automáticamente considerando los empates previos como multiplicadores. Al finalizar los 18 hoyos, se multiplican los puntos por el precio por unidad y se obtiene el resultado en dinero.

---

## Funcionalidades principales

- **Grilla interactiva de 18 × 4**: tabla con 18 hoyos y 4 jugadores (A, B, C, D) donde se marcan los ganadores tocando las celdas.
- **Celdas con feedback visual**: las celdas marcadas se resaltan en verde claro y muestran los puntos calculados.
- **Cálculo automático de puntos**: reglas condicionales ajustadas para 4 jugadores, con multiplicadores por empates previos.
- **Empates acumulativos**: cuando un hoyo es empate (0 o 4 marcados), el siguiente hoyo tiene puntos multiplicados.
- **Precio por unidad configurable**: campo numérico para ingresar el valor de cada punto.
- **Resultados en pesos colombianos**: resultados formateados como moneda colombiana (COP).
- **Resultados negativos en rojo**: identificación visual rápida de jugadores que pierden.
- **Limpiar datos**: botón para reiniciar y empezar un nuevo juego.
- **Scroll horizontal**: grilla desplazable para visualización cómoda.

---

## Reglas de puntuación

```
Por cada hoyo, los puntos se asignan según cuántos jugadores están marcados:

Empate (0 o 4 marcados): todos reciben 0 puntos → el siguiente hoyo se multiplica

1 marcado:
  - Sin empate previo: marcado +3, no marcados -1 cada uno
  - Con empate previo: marcado +6, no marcados -2 cada uno

2 marcados:
  - Sin empate previo: marcados +2 cada uno, no marcados -2 cada uno
  - Con empate previo: marcados +4 cada uno, no marcados -4 cada uno

3 marcados:
  - Sin empate previo: marcados +1 cada uno, no marcado -3
  - Con empate previo: marcados +2 cada uno, no marcado -6
```

---

## Tecnologías utilizadas

- **React Native 0.74** — Aplicación móvil multiplataforma (Android e iOS)
- **Expo ~51** — Plataforma de desarrollo y compilación
- **React 18** — Interfaz de usuario
- **React Native StyleSheet** — Estilos nativos sin librerías externas

---

## Arquitectura de la aplicación

```
┌─────────────────────────────────────────┐
│                                         │
│   App Móvil (React Native + Expo)       │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  App.js (componente único)      │    │
│  │                                 │    │
│  │  - Grilla 18 × 4 jugadores     │    │
│  │  - Marcado de celdas (toggle)   │    │
│  │  - Cálculo de puntos por hoyo   │    │
│  │  - Campo precio por unidad      │    │
│  │  - Resultados finales           │    │
│  │  - Botón calcular               │    │
│  │  - Botón limpiar                │    │
│  └─────────────────────────────────┘    │
│                                         │
│  Estado local (React hooks):            │
│  - scores[18][4] (marcas booleanas)     │
│  - puntosPorHoyo[18][4] (puntos)       │
│  - resultados[4] (totales finales)      │
│  - preciounidad (multiplicador)         │
│                                         │
│  Sin backend / Sin base de datos        │
│  Todo el cálculo es local               │
│                                         │
└─────────────────────────────────────────┘
```

---

## Aspectos destacados del desarrollo

- **Variante optimizada para 4 jugadores**: las reglas de puntuación están ajustadas para partidas de 4 personas, con valores de puntos proporcionales a la cantidad de jugadores.
- **Mismo motor de cálculo**: comparte la lógica base con la versión de 5 jugadores, adaptada para las combinaciones posibles con 4 jugadores.
- **Aplicación autocontenida**: toda la lógica en un solo componente sin dependencias externas, backend ni base de datos.
- **Formato de moneda colombiana**: resultados formateados con locale es-CO para pesos colombianos.
- **Icono temático**: icono de la app con el personaje del lobo y tres ovejas.
- **APK compilado incluido**: el proyecto incluye el APK listo para instalar en Android.
