import Navigation from '@/components/navigation'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'
import PatternBg from '@/components/home/pattern-bg'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PatternBg />
      <ContactForm />
      <Footer />
    </main>
  )
}
