import type { SkillCategory } from '../types/portfolio'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    description: 'Aplicações web, APIs e regras de negócio.',
    items: ['Java', 'Spring Boot', 'C#', '.NET', 'PHP', 'Laravel', 'Node.js'],
  },
  {
    title: 'Frontend',
    description: 'Interfaces web responsivas e integração com APIs.',
    items: ['React', 'TypeScript', 'JavaScript', 'Vue.js'],
  },
  {
    title: 'Bancos de dados',
    description: 'Modelagem, consultas e persistência de dados.',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'SQLite', 'SQL'],
  },
  {
    title: 'DevOps & ferramentas',
    description: 'Versionamento, ambientes e fluxo de entrega.',
    items: ['Docker', 'Linux', 'Git', 'GitHub', 'GitHub Actions', 'REST APIs', 'POO'],
  },
]
