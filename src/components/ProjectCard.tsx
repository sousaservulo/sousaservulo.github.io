import type { Project } from '../types/portfolio'

type ProjectCardProps = {
  project: Project
  onOpen: (project: Project) => void
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__topline">
        <span className={`project-status project-status--${project.status.toLowerCase().replaceAll(' ', '-')}`}>
          {project.status}
        </span>
        <span className="project-card__index" aria-hidden="true">
          {project.id.slice(0, 2).toUpperCase()}
        </span>
      </div>

      <div className="project-card__content">
        <div>
          <h3>{project.name}</h3>
          {project.subtitle && <p className="project-card__subtitle">{project.subtitle}</p>}
        </div>
        <p>{project.description}</p>
      </div>

      {project.stack.length > 0 ? (
        <ul className="project-stack" aria-label={`Tecnologias de ${project.name}`}>
          {project.stack.slice(0, 6).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
          {project.stack.length > 6 && <li>+{project.stack.length - 6}</li>}
        </ul>
      ) : (
        <p className="project-card__pending">Stack pendente de análise do código.</p>
      )}

      <div className="project-card__actions">
        <button className="project-detail-button" type="button" onClick={() => onOpen(project)}>
          Ver detalhes
          <span aria-hidden="true">→</span>
        </button>

        {project.links[0] && (
          <a href={project.links[0].href} target="_blank" rel="noreferrer">
            {project.links[0].label}
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
