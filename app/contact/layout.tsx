import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contame tu idea en dos líneas. Te respondo en menos de 24 horas con cómo lo haría, cuánto sale y cuánto tarda.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
