import { skillCategories } from '../data/skills'

function Skills() {
  return (
    <section className="content-section content-section--soft" id="tecnologias" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Tecnologias</p>
          <h2 id="skills-title">Tecnologias e ferramentas</h2>
          <p>
            Tecnologias que utilizo em experiências profissionais e projetos próprios,
            agrupadas por área de atuação.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article className="skill-card" key={category.title}>
              <div className="skill-card__heading">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
              <ul className="skill-list" aria-label={`Tecnologias de ${category.title}`}>
                {category.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
