export type Certification = {
  id: string
  title: string
  issuer: string
  category: string
  year: string
  description?: string
  url?: string
}

export const certifications: Certification[] = [
  {
    id: 'responsible-ai',
    title: 'Responsible AI',
    issuer: 'DPCERT',
    category: 'Inteligência Artificial',
    year: '2026',
    description: 'Princípios e práticas de uso responsável da inteligência artificial.',
    url: 'https://www.dpcert.org/en/verify/RAIFSGBGDSVA',
  },
  {
    id: 'oci-foundations',
    title: 'Oracle Cloud Infrastructure 2024 Foundations Associate',
    issuer: 'Oracle',
    category: 'Cloud Computing',
    year: '2026',
    description: 'Fundamentos de infraestrutura e serviços de nuvem da Oracle.',
  },
  {
    id: 'itsm-support',
    title: 'IT Service Management and Support',
    issuer: 'iCompetent Solutions',
    category: 'Gestão de Serviços de TI',
    year: '2026',
    description: 'Conceitos e boas práticas de gestão de serviços e suporte de TI.',
  },
]
