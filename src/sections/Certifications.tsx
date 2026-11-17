import { certifications } from '../data/certifications'
import '../certifications.css'

function Certifications() {
  return (
    <section className="content-section certifications-section" id="certificacoes" aria-labelledby="certifications-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Certificações</p>
          <h2 id="certifications-title">Certificações e qualificações</h2>
          <p>Credenciais em inteligência artificial, computação em nuvem e gestão de serviços de TI. Cada certificação possui um link de verificação.</p>
        </div>
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <article className="certification-card" key={certification.id}>
              <div className="certification-card__meta">
                <span className="certification-card__category">{certification.category}</span>
                <span className="certification-card__year">{certification.year}</span>
              </div>
              <h3>{certification.title}</h3>
              <p className="certification-card__issuer">{certification.issuer}</p>
              {certification.description && <p className="certification-card__description">{certification.description}</p>}
              {certification.url ? (
                <a className="certification-card__link" href={certification.url} target="_blank" rel="noopener noreferrer" aria-label={`Verificar credencial: ${certification.title}`}>
                  Verificar credencial <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="certification-card__pending">Link de verificação a adicionar</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
