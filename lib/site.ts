/** Datos de contacto y URL del sitio, compartidos entre páginas, metadata y sitemap. */

export const EMAIL = 'oviedofederico39@gmail.com'
export const WHATSAPP = '543492621665'

/** URL pública. Se puede pisar con NEXT_PUBLIC_SITE_URL (p. ej. cuando haya dominio propio). */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://ovidev.vercel.app'

export const SITE_NAME = 'Federico Oviedo'
export const TAGLINE = 'Vos la idea, yo el resto'

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
}
