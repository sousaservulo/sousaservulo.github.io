function About() {
  return (
    <section className="content-section" id="sobre" aria-labelledby="about-title">
      <div className="container section-heading-grid">
        <div>
          <p className="eyebrow">Sobre mim</p>
          <h2 id="about-title">Uma trajetória construída entre suporte e  desenvolvimento.</h2>
        </div>

        <div className="about-copy">
          <p className="about-copy__lead">
            Minha trajetória em Tecnologia da Informação foi construída ao longo de muitos anos,
            passando por diferentes áreas e responsabilidades.
          </p>
          <p>
            Trabalhei por cerca de 19 anos na UNP/Ânima, sendo aproximadamente 7 anos com Service
            Desk e suporte de TI, atuando no atendimento aos usuários, análise e resolução de
            problemas e suporte a sistemas.
          </p>
          <p>
            Posteriormente, fiz a transição para o desenvolvimento de software, acumulando cerca de
            4 anos de experiência profissional, principalmente com C# e .NET, além de SQL, APIs,
            manutenção de sistemas, correção de bugs e implementação de novas funcionalidades.
          </p>
          <p>
            Após meu desligamento da empresa, decidi transformar minha experiência em projetos
            próprios e produtos reais. Desenvolvi de ponta a ponta o <strong>MassagemHub</strong>,
            uma plataforma web que já está em produção e conta com clientes em diferentes estados
            do Brasil. No projeto, sou responsável por toda a estrutura técnica, utilizando
            Laravel/PHP, MySQL, Redis, integração com Mercado Pago, envio de e-mails, SEO, regras de
            negócio, área administrativa e infraestrutura em VPS Linux com Nginx.
          </p>
          <p>
            Além do MassagemHub, também desenvolvo o <strong>ConectoPsi</strong>, uma plataforma
            voltada para profissionais da psicologia que atualmente se encontra em fase de
            homologação, com atenção especial à segurança e ao tratamento de dados sensíveis.
          </p>
          <p>
            Meu projeto mais recente é o <strong>HorarioLivre.com.br</strong>, uma plataforma SaaS
            de agendamentos multiempresa que já está em desenvolvimento, construída com foco em
            arquitetura profissional, escalabilidade e utilização por negócios reais.
          </p>
          <p>
            Atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong> e continuo
            ampliando meus conhecimentos por meio do desenvolvimento de soluções completas, desde a
            concepção e regras de negócio até a publicação e manutenção em ambiente de produção.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
