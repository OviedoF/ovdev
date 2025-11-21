import Navigation from '@/components/navigation'
import ContactHero from '@/components/contact-hero'
import FAQ from '@/components/faq'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <ContactForm />
      <Footer />
    </main>
  )
}
