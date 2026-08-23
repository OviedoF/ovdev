import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { useGSAP } from '@gsap/react'

// Registro único de plugins. Importar `gsap`, `ScrollTrigger` y `Flip` siempre desde acá.
gsap.registerPlugin(ScrollTrigger, Flip, useGSAP)

// Easing "casa": rápido al inicio, asentado al final (mismo feel que el ease [0.25,1,0.5,1] de framer)
export const EASE_OUT = 'power4.out'

export { gsap, ScrollTrigger, Flip, useGSAP }
