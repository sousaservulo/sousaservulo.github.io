function About() {
  return (
    <section className="content-section" id="sobre" aria-labelledby="about-title">
      <div className="container section-heading-grid">
        <div>
          <p className="eyebrow">Sobre mim</p>
          <h2 id="about-title">Quem sou e com o que trabalho</h2>
        </div>

        <div className="about-copy">
          <p className="about-copy__lead">
            Sou desenvolvedor de software, com experiência em sistemas corporativos,
            APIs REST, integrações e manutenção de aplicações em produção.
          </p>
          <p>
            Atuei por cerca de 19 anos na UNP/Ânima, incluindo aproximadamente 7 anos
            com Service Desk e suporte N1/N2, atendendo usuários, analisando incidentes
            e solucionando problemas em sistemas e infraestrutura.
          </p>
          <p>
            Nos últimos 5 anos, concentrei minha atuação em desenvolvimento de software,
            com C#/.NET, PHP, SQL, APIs REST e Vue.js. Trabalhei com correção de falhas,
            evolução de regras de negócio, integrações e modernização de sistemas legados.
          </p>
          <p>
            Também desenvolvo produtos próprios. O <strong>MassagemHub</strong> é um marketplace
            em produção, com planos, pagamentos e área administrativa. Sou responsável
            pelo desenvolvimento e operação da aplicação, utilizando Laravel, MySQL,
            Redis e infraestrutura Linux com Nginx.
          </p>
          <p>
            O <strong>ConectoPsi</strong> também está em produção: é uma plataforma SaaS
            para profissionais da psicologia, com recursos de gestão de pacientes,
            agenda, financeiro e documentos, além de atenção à segurança de dados.
          </p>
          <p>
            Desenvolvo ainda o <strong>HorárioLivre</strong>, um SaaS de agendamentos
            multiempresa com backend Java/Spring Boot e frontend React/TypeScript.
          </p>
          <p>
            Curso <strong>Análise e Desenvolvimento de Sistemas</strong> e mantenho
            meus conhecimentos atualizados com estudos, certificações e projetos práticos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
