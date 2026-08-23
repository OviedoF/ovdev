import { Navigation } from '@/components/navigation'
import PatternBg from '@/components/home/pattern-bg'
import HomeHero from '@/components/home/hero'
import HomeStory from '@/components/home/story'
import HomeDialog from '@/components/home/dialog'
import HomeFaqTrio from '@/components/home/faq-trio'
import HomeProjectsShowcase from '@/components/home/projects-showcase'
import { Testimonials } from '@/components/testimonials'
import HomeOutro from '@/components/home/outro'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PatternBg />
      <HomeHero />
      <HomeStory />
      <HomeDialog />
      <HomeFaqTrio />
      <HomeProjectsShowcase />
      <Testimonials />
      <HomeOutro />
      <Footer />
    </main>
  )
}
