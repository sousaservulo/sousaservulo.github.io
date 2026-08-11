type SectionPreviewProps = {
  id: string
  eyebrow: string
  title: string
  description: string
  index: string
}

function SectionPreview({ id, eyebrow, title, description, index }: SectionPreviewProps) {
  return (
    <section className="section-preview" id={id} aria-labelledby={`${id}-title`}>
      <div className="container section-preview__inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        <div className="section-preview__content">
          <span className="section-preview__index" aria-hidden="true">
            {index}
          </span>
          <p>{description}</p>
        </div>
      </div>
    </section>
  )
}

export default SectionPreview
