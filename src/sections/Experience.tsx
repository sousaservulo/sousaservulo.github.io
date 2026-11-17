import { experience } from '../data/experience'

function Experience() {
  return (
    <section className="content-section" id="experiencia" aria-labelledby="experience-title">
      <div className="container experience-layout">
        <div className="section-intro section-intro--sticky">
          <p className="eyebrow">Experiência</p>
          <h2 id="experience-title">Experiência profissional</h2>
          <p>
            Atuação em desenvolvimento de sistemas, integrações e suporte técnico,
            incluindo sustentação, modernização de aplicações e resolução de incidentes.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item" key={item.role}>
              <div className="experience-item__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <p className="experience-item__period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="experience-item__context">{item.context}</p>
                <p className="experience-item__description">{item.description}</p>
                <ul className="experience-tags" aria-label={`Pontos de ${item.role}`}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
