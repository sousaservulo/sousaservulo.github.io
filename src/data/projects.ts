import type { Project } from '../types/portfolio'

export const projects: Project[] = [
  {
    id: 'massagemhub',
    name: 'MassagemHub',
    subtitle: 'Marketplace para terapeutas e clínicas',
    description:
      'Plataforma real para divulgação de terapeutas e clínicas, com perfis públicos, planos, integrações e infraestrutura própria em VPS.',
    status: 'Produção',
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Tailwind', 'Linux', 'Nginx', 'Redis'],
    overview:
      'Projeto desenvolvido como uma aplicação real publicada em produção, reunindo cadastro, gestão de perfis, busca, planos e integrações necessárias para operação da plataforma.',
    problem:
      'Centralizar a divulgação de profissionais e clínicas em uma experiência própria, organizada e administrável, em vez de depender apenas de redes sociais ou anúncios dispersos.',
    features: [
      'Perfis públicos de terapeutas e clínicas',
      'Área de gestão para anunciantes',
      'Busca e organização de anúncios',
      'Planos e fluxo de pagamentos',
      'Integrações por API e automações da aplicação',
      'Publicação e operação em VPS Linux',
    ],
    challenges: [
      'Evoluir um produto real sem interromper funcionalidades já utilizadas',
      'Gerenciar imagens, regras de publicação e diferentes tipos de anunciantes',
      'Integrar pagamentos e processos administrativos',
      'Configurar e manter ambiente de produção com Nginx, Redis e Linux',
    ],
    architecture: [
      'Aplicação web em Laravel com persistência em MySQL',
      'Frontend renderizado pela própria aplicação com JavaScript e Tailwind',
      'Infraestrutura em VPS Linux com Nginx e Redis',
      'Integrações externas realizadas pela aplicação conforme a necessidade do produto',
    ],
    links: [{ label: 'Acessar sistema', href: 'https://www.massagemhub.com.br', kind: 'website' }],
    note: 'O link do GitHub será adicionado somente se o repositório for publicado.',
  },
  {
    id: 'conectopsi',
    name: 'ConectoPsi',
    subtitle: 'SaaS de gestão para psicólogos e clínicas',
    description:
      'Plataforma SaaS em produção para gestão de atendimentos psicológicos, reunindo pacientes, agenda, prontuários, lembretes e rotinas administrativas.',
    status: 'Produção',
    stack: ['Laravel', 'PHP', 'Vue.js', 'Inertia.js', 'MySQL', 'Redis', 'Vite', 'Tailwind'],
    overview:
      'Produto SaaS publicado em produção, desenvolvido para centralizar o fluxo de trabalho de psicólogos e clínicas, com módulos de gestão clínica e estrutura preparada para expansão.',
    problem:
      'Reduzir a fragmentação de informações clínicas e administrativas, reunindo em uma única aplicação dados de pacientes, agendamentos, documentos e rotinas de atendimento.',
    features: [
      'Cadastro de pacientes, anamnese, evoluções e documentos',
      'Agenda com visualizações semanal e mensal e agendamentos recorrentes',
      'Visão consolidada dos atendimentos e acompanhamento de consultas',
      'Lembretes por WhatsApp e e-mail',
      'Gestão financeira simplificada e assinaturas SaaS',
      'Estrutura modular para recursos de ABA e neuropsicologia',
      'Autenticação, verificação de e-mail e controles de sessão',
    ],
    challenges: [
      'Projetar controles de acesso e proteção para dados pessoais sensíveis',
      'Organizar regras de negócio de agenda, recorrências e atendimento',
      'Estruturar arquitetura SaaS para múltiplos profissionais e organizações',
      'Preparar operação e evolução contínua do produto em produção',
    ],
    architecture: [
      'Backend PHP/Laravel com banco MySQL',
      'Frontend Vue.js e Inertia.js, empacotado com Vite e estilizado com Tailwind CSS',
      'Redis para infraestrutura de cache e filas',
      'Estrutura de organizações, perfis profissionais, assinaturas e módulos',
    ],
    links: [{ label: 'Acessar sistema', href: 'https://www.conectopsi.com.br', kind: 'website' }],
    note: 'Sistema em produção e em evolução contínua. Funcionalidades específicas podem variar conforme o plano e estágio de liberação.',
  },
  {
    id: 'horariolivre',
    name: 'HorárioLivre',
    subtitle: 'Nome temporário · SaaS multiempresa de agendamentos',
    description:
      'Plataforma de agendamentos multiempresa em desenvolvimento, planejada para atender negócios e profissionais que trabalham com reservas de horários.',
    status: 'Em desenvolvimento',
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Docker',
      'JUnit',
    ],
    overview:
      'Novo SaaS de agendamentos concebido desde o início como aplicação multiempresa, com API backend em Java/Spring Boot e frontend em React/TypeScript.',
    problem:
      'Oferecer uma base reutilizável de agendamentos para diferentes tipos de negócio, evitando criar uma solução específica para apenas um segmento.',
    features: [
      'Arquitetura multiempresa desde a base',
      'Gestão de usuários, organizações, clientes e profissionais',
      'Serviços, disponibilidades, bloqueios e agendamentos',
      'Autenticação e autorização com Spring Security e JWT',
      'API REST documentada para integração com outros sistemas',
    ],
    challenges: [
      'Garantir isolamento de dados entre organizações',
      'Definir permissões considerando usuário e organização',
      'Preparar uma arquitetura que possa evoluir para clientes reais',
      'Cobrir isolamento de tenant e persistência com testes automatizados',
    ],
    architecture: [
      'Backend Java 21 + Spring Boot',
      'Spring Data JPA/Hibernate + PostgreSQL + Flyway',
      'Frontend React + TypeScript',
      'Docker para padronização de ambientes',
      'JUnit, Mockito e Testcontainers para testes',
    ],
    links: [{ label: 'Acessar site', href: 'https://www.horariolivre.com.br', kind: 'website' }],
    note: 'Nome temporário do projeto. A aplicação ainda está em desenvolvimento.',
  },
]
