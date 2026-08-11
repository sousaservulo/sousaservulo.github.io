export type SkillCategory = {
  title: string
  description: string
  items: string[]
}

export type ExperienceItem = {
  period: string
  role: string
  context: string
  description: string
  highlights: string[]
}

export type ProjectStatus = 'Produção' | 'Em desenvolvimento' | 'Em homologação' | 'Projeto de estudo' | 'Pausado'

export type ProjectLink = {
  label: string
  href: string
  kind: 'website' | 'github'
}

export type Project = {
  id: string
  name: string
  subtitle?: string
  description: string
  status: ProjectStatus
  stack: string[]
  overview: string
  problem: string
  features: string[]
  challenges: string[]
  architecture: string[]
  links: ProjectLink[]
  note?: string
}
