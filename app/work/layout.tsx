import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Trabajos', template: '%s | Federico Oviedo' },
  description: 'Sitios web, apps móviles, tiendas online y sistemas a medida que hoy están en uso. Proyectos entregados en Argentina, Chile, Uruguay y México.',
  alternates: { canonical: '/work' },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
