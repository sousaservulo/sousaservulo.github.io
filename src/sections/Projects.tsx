import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/projects'
import type { Project } from '../types/portfolio'

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section className="content-section content-section--projects" id="projetos" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-intro section-intro--projects">
          <div>
            <p className="eyebrow">Projetos</p>
            <h2 id="projects-title">Produtos reais e projetos que mostram a evolução do meu trabalho.</h2>
          </div>
          <p>
            Cada projeto está descrito de acordo com o que já foi efetivamente desenvolvido ou
            planejado. Informações ainda não confirmadas permanecem sinalizadas como pendentes.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects
