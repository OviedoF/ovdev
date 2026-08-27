import type { Metadata } from 'next'
import { CalendarDays, ClipboardList, FileSignature, Receipt, Smile, Users } from 'lucide-react'
import NicheLanding from '@/components/landing/niche-landing'

export const metadata: Metadata = {
  title: 'Sistema de gestión para clínicas dentales',
  description:
    'Turnos, historia clínica, odontograma y factura electrónica AFIP en un solo sistema, hecho a medida para tu clínica. Ya lo armé para Dental Digital.',
  alternates: { canonical: '/odontologos' },
}

export default function OdontologosPage() {
  return (
    <NicheLanding
      ns="dental"
      caseSlug="dental-digital"
      images={['/works/dentaldigital/1.webp', '/works/dentaldigital/3.webp']}
      quoteKey="testimonials.3.quote"
      featureIcons={[
        <CalendarDays key="1" className="w-5 h-5" strokeWidth={1.8} />,
        <ClipboardList key="2" className="w-5 h-5" strokeWidth={1.8} />,
        <Smile key="3" className="w-5 h-5" strokeWidth={1.8} />,
        <Receipt key="4" className="w-5 h-5" strokeWidth={1.8} />,
        <FileSignature key="5" className="w-5 h-5" strokeWidth={1.8} />,
        <Users key="6" className="w-5 h-5" strokeWidth={1.8} />,
      ]}
    />
  )
}
