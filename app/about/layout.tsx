import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'Soy Federico Oviedo. Hace más de cuatro años hago apps móviles, sitios y sistemas web para emprendedores, clínicas, comercios y empresas. Hablás con una sola persona, de principio a fin.',
  alternates: { canonical: '/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
