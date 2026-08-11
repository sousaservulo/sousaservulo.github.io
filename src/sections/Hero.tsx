import { profile } from '../data/profile'

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Desenvolvimento de software · {profile.location}</p>
          <h1 id="hero-title">
            {profile.name}
            <span>{profile.role}</span>
          </h1>
          <p className="hero__description">
            Desenvolvedor com experiência em aplicações web, APIs e sistemas corporativos,
            trabalhando entre backend e frontend com tecnologias como Java, Spring Boot,
            .NET, Laravel, React e TypeScript.
          </p>

          <div className="hero__actions" aria-label="Ações principais">
            <a className="button button--primary" href="#projetos">
              Ver projetos
              <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button--secondary"
              href={profile.github.href}
              target="_blank"
              rel="noreferrer"
            >
              {profile.github.label}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button--secondary"
              href={profile.linkedin.href}
              target="_blank"
              rel="noreferrer"
            >
              {profile.linkedin.label}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button--secondary"
              href={profile.resume.href}
              download={profile.resume.filename}
            >
              Currículo
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className="hero__note">
            Este portfólio também é um projeto: a estrutura, interface e publicação fazem
            parte da demonstração técnica.
          </p>
        </div>

        <aside className="hero-card" aria-label="Resumo técnico do portfólio">
          <div className="hero-card__topline">
            <span className="status-dot" aria-hidden="true" />
            <span>Portfólio em evolução</span>
          </div>
          <div className="hero-card__code" aria-hidden="true">
            <span className="code-line-number">01</span>
            <span>
              <i>const</i> developer = {'{'}
            </span>
            <span className="code-line-number">02</span>
            <span className="code-indent">
              name: <strong>'Sérvulo Sousa'</strong>,
            </span>
            <span className="code-line-number">03</span>
            <span className="code-indent">
              focus: <strong>'Software Development'</strong>,
            </span>
            <span className="code-line-number">04</span>
            <span className="code-indent">
              builds: [<strong>'Web'</strong>, <strong>'APIs'</strong>, <strong>'SaaS'</strong>]
            </span>
            <span className="code-line-number">05</span>
            <span>{'}'}</span>
          </div>
          <div className="hero-card__footer">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero
