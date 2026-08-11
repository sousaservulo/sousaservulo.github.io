import Brand from '../components/Brand'
import { profile } from '../data/profile'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Brand compact />
        <p>
          Portfólio desenvolvido com React e TypeScript, com foco em código organizado,
          acessibilidade e performance.
        </p>
        <div className="site-footer__links">
          <a href={`mailto:${profile.email}`}>E-mail</a>
          <a href={profile.github.href} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin.href} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#inicio">Voltar ao topo</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
