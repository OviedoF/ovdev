import type { Locale } from '@/lib/i18n'
import type { Project } from '@/lib/projects'
import type { ProjectI18n } from './types'

let translationsCache: Record<string, Record<string, ProjectI18n>> | null = null

async function loadTranslations(): Promise<Record<string, Record<string, ProjectI18n>>> {
  if (translationsCache) return translationsCache
  const [en, ja, zh, de, pt, fr, it] = await Promise.all([
    import('./projects-en').then(m => m.en),
    import('./projects-ja').then(m => m.ja),
    import('./projects-zh').then(m => m.zh),
    import('./projects-de').then(m => m.de),
    import('./projects-pt').then(m => m.pt),
    import('./projects-fr').then(m => m.fr),
    import('./projects-it').then(m => m.it),
  ])
  translationsCache = { en, ja, zh, de, pt, fr, it }
  return translationsCache
}

let syncCache: Record<string, Record<string, ProjectI18n>> | null = null

export function initProjectTranslations() {
  loadTranslations().then(t => { syncCache = t })
}

export function getTranslatedProject(project: Project, locale: Locale): Project {
  if (locale === 'es') return project

  const translations = syncCache?.[locale]
  if (!translations) return project

  const t = translations[project.slug]
  if (!t) return project

  return {
    ...project,
    subtitle: t.subtitle || project.subtitle,
    categories: t.categories || project.categories,
    description: t.description || project.description,
    features: t.features && t.features.length > 0 ? t.features : project.features,
    integrations: project.integrations.map((int, i) => ({
      ...int,
      use: t.integrationUses?.[i] || int.use,
    })),
    highlights: t.highlights && t.highlights.length > 0 ? t.highlights : project.highlights,
  }
}

export function getTranslatedProjects(projects: Project[], locale: Locale): Project[] {
  return projects.map(p => getTranslatedProject(p, locale))
}
