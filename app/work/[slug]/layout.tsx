import type { Metadata } from 'next'
import { projects } from '@/lib/projects'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Proyecto no encontrado' }
  return {
    title: `${project.title}: ${project.subtitle}`,
    description: project.description.slice(0, 160),
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: project.image ? { images: [project.image] } : undefined,
  }
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children
}
