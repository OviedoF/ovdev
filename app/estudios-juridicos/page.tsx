import type { Metadata } from 'next'
import { BarChart3, CalendarDays, FileSearch, FileSignature, FolderOpen, Wallet } from 'lucide-react'
import NicheLanding from '@/components/landing/niche-landing'

export const metadata: Metadata = {
  title: 'Sistema de gestión para estudios jurídicos',
  description:
    'Expedientes, plazos, cobranzas, firma electrónica y documentos con OCR en un solo sistema, hecho a medida para tu estudio. Lo armé para Saucedo Abogados.',
  alternates: { canonical: '/estudios-juridicos' },
}

export default function EstudiosJuridicosPage() {
  return (
    <NicheLanding
      ns="legal"
      caseSlug="saucedo-abogados"
      images={['/works/saucedo/1.webp', '/works/saucedo/2.webp']}
      quoteKey="testimonials.5.quote"
      featureIcons={[
        <FolderOpen key="1" className="w-5 h-5" strokeWidth={1.8} />,
        <CalendarDays key="2" className="w-5 h-5" strokeWidth={1.8} />,
        <Wallet key="3" className="w-5 h-5" strokeWidth={1.8} />,
        <FileSignature key="4" className="w-5 h-5" strokeWidth={1.8} />,
        <FileSearch key="5" className="w-5 h-5" strokeWidth={1.8} />,
        <BarChart3 key="6" className="w-5 h-5" strokeWidth={1.8} />,
      ]}
    />
  )
}
