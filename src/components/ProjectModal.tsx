import { useEffect, useRef } from 'react'
import type { Project } from '../types/portfolio'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null

  return (
    <div className="project-modal__detail-group">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return

    const previousActiveElement = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )

      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousActiveElement?.focus()
    }
  }, [project, onClose])

  if (!project) return null

  const descriptionId = `project-modal-description-${project.id}`

  return (
    <div className="project-modal" role="presentation" onMouseDown={onClose}>
      <div
        ref={panelRef}
        className="project-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby={descriptionId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="project-modal__header">
          <div>
            <span className="project-status">{project.status}</span>
            <h2 id="project-modal-title">{project.name}</h2>
            {project.subtitle && <p>{project.subtitle}</p>}
          </div>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Fechar detalhes do projeto">
            ×
          </button>
        </div>

        <div className="project-modal__body">
          <section>
            <p className="project-modal__label">Visão geral</p>
            <p id={descriptionId}>{project.overview}</p>
          </section>

          <section>
            <p className="project-modal__label">Problema que resolve</p>
            <p>{project.problem}</p>
          </section>

          {project.stack.length > 0 && (
            <section>
              <p className="project-modal__label">Tecnologias</p>
              <ul className="project-stack project-stack--modal">
                {project.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>
          )}

          <div className="project-modal__grid">
            <DetailList title="Principais funcionalidades" items={project.features} />
            <DetailList title="Desafios técnicos" items={project.challenges} />
            <DetailList title="Decisões de arquitetura" items={project.architecture} />
          </div>

          {project.note && <p className="project-modal__note">{project.note}</p>}

          {project.links.length > 0 && (
            <div className="project-modal__links" aria-label={`Links de ${project.name}`}>
              {project.links.map((link) => (
                <a key={link.href} className="button button--secondary" href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
