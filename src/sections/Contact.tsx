import { profile } from '../data/profile'

function Contact() {
  return (
    <section className="content-section contact-section" id="contato" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div className="section-intro contact-intro">
          <p className="eyebrow">Contato</p>
          <h2 id="contact-title">Entre em contato</h2>
          <p>
            Para oportunidades profissionais e projetos, entre em contato por e-mail
            ou acesse meus perfis profissionais.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-card__item">
            <span>E-mail</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>

          <div className="contact-card__links" aria-label="Links de contato e currículo">
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              Enviar e-mail
              <span aria-hidden="true">↗</span>
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
              Baixar currículo
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className="contact-card__note">
            O currículo em PDF pode ser baixado diretamente pelo site.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
