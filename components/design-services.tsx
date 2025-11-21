import { Monitor, Pen, Frame, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const services = [
  {
    icon: Monitor,
    title: 'Website Design',
    description: 'Designing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand',
    image: '/website-design-mockups.jpg',
  },
  {
    icon: Pen,
    title: 'Logo Design',
    description: 'Crafting distinctive, scalable, and impactful logos that embody your brand\'s identity and vision',
    image: null,
  },
  {
    icon: Frame,
    title: 'Framer Design',
    description: 'Bringing ideas to life with interactive, user-centered Framer designs that simplify complexity and elevate user experience',
    image: '/framer-design-interface.jpg',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Crafting bold, engaging, and versatile graphic designs that elevate your brand and captivate your audience',
    image: null,
  },
]

const additionalServices = [
  'Framer Migration',
  'Video & Motion Graphics',
  'Copywriting',
  'Posters',
  'Framer Migration',
  'SEO',
  'Icons',
  'Social Media',
  'Landing Pages',
  'Optimization',
  'Custom Code',
]

export function DesignServices() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-start justify-between mb-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              Design <span className="text-muted-foreground">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Explore a suite of design services to elevate your brand.
            </p>
          </div>
          
          <Button size="lg" className="hidden md:flex rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Contact Now
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-foreground/20 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <service.icon className="w-8 h-8 text-foreground" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {service.image && (
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mt-6">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {additionalServices.map((service, index) => (
            <button
              key={`${service}-${index}`}
              className="px-6 py-3 rounded-full bg-muted text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              {service}
            </button>
          ))}
        </div>

        <div className="flex md:hidden justify-center mt-8">
          <Button size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Contact Now
          </Button>
        </div>
      </div>
    </section>
  )
}
