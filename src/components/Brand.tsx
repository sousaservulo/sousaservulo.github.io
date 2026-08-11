type BrandProps = {
  compact?: boolean
}

function Brand({ compact = false }: BrandProps) {
  return (
    <a className={`brand${compact ? ' brand--compact' : ''}`} href="#inicio" aria-label="Ir para o início">
      <span className="brand__mark" aria-hidden="true">
        SS
      </span>
      {!compact && (
        <span className="brand__text">
          <strong>Sérvulo Sousa</strong>
          <small>Desenvolvedor de Software</small>
        </span>
      )}
    </a>
  )
}

export default Brand
