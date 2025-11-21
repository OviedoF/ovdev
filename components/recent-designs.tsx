import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function RecentDesigns() {
  return (
    <section className="py-24 px-6" id="work">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-start justify-between mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-block w-2 h-2 rounded-full bg-foreground" />
              Recent Projects
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              Recent <span className="text-muted-foreground">Designs</span>
              <ArrowUpRight className="inline-block ml-2 w-10 h-10" />
            </h2>
            <p className="text-muted-foreground text-lg">
              Showcase of some of my recent sleek websites
            </p>
          </div>
          
          <div className="hidden md:flex gap-3">
            <Button variant="outline" size="lg" className="rounded-full">
              See All Projects
            </Button>
            <Button size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Contact Now
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-2xl bg-card border border-border aspect-[4/3]">
            <Image
              src="/modern-website-mockup-building-brands.jpg"
              alt="Building brands website mockup"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold mb-2">Building brands to drive Results</h3>
              <p className="text-muted-foreground">Modern agency website</p>
            </div>
            <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-2xl bg-card border border-border aspect-square">
              <Image
                src="/abstract-design-pattern.png"
                alt="Abstract design"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl bg-card border border-border aspect-square">
              <Image
                src="/one-day-we-met-typography.jpg"
                alt="One Day We Met"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl bg-card border border-border aspect-square">
            <Image
              src="/blurred-motion-photography.jpg"
              alt="Motion design"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl bg-card border border-border aspect-video">
            <Image
              src="/atomai-automation-platform.jpg"
              alt="AtomAI Platform"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold mb-2">Scale Business with Automation</h3>
              <p className="text-muted-foreground">AI-powered automation platform</p>
            </div>
            <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative group overflow-hidden rounded-2xl bg-card border border-border aspect-square">
            <Image
              src="/minimalist-portrait-black-and-white.jpg"
              alt="Portrait photography"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-3 mt-8">
          <Button variant="outline" size="lg" className="rounded-full">
            See All Projects
          </Button>
          <Button size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Contact Now
          </Button>
        </div>
      </div>
    </section>
  )
}
