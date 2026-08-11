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
    subtitle: 'SaaS voltado para psicólogos',
    description:
      'Projeto SaaS para apoiar a rotina de psicólogos, atualmente em homologação, com a base funcional sendo validada e preparada para evolução.',
    status: 'Em homologação',
    stack: ['Laravel', 'PHP', 'Vite', 'Tailwind'],
    overview:
      'Aplicação concebida como SaaS para concentrar funcionalidades relacionadas à rotina profissional de psicólogos em uma interface web própria.',
    problem:
      'Organizar informações e fluxos recorrentes do atendimento profissional em um sistema centralizado e preparado para evoluir como produto.',
    features: [
      'Autenticação de usuários',
      'Cadastro e gestão de pacientes',
      'Estrutura inicial de agendamentos',
      'Interface web baseada em Laravel, Vite e Tailwind',
    ],
    challenges: [
      'Criar um ambiente seguro para dados sensíveis de pacientes e atendimentos, seguindo as normas e orientações aplicáveis do Conselho Federal de Psicologia',
      'Estruturar o projeto para crescer além de um CRUD demonstrativo',
      'Separar responsabilidades de interface e regras da aplicação',
    ],
    architecture: [
      'Aplicação Laravel com frontend integrado via Vite',
      'Organização orientada à evolução gradual do produto',
    ],
    links: [{ label: 'Acessar site', href: 'https://www.conectopsi.com.br', kind: 'website' }],
    note: 'Projeto em homologação. O portfólio não o apresenta como produto concluído.',
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
