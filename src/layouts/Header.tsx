import { useState } from 'react'
import Brand from '../components/Brand'
import { profile } from '../data/profile'
import ThemeToggle from '../components/ThemeToggle'

type HeaderProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand />

        <nav className="site-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <div className="header-socials" aria-label="Links profissionais">
            <a href={profile.github.href} target="_blank" rel="noreferrer">
              {profile.github.label}
            </a>
            <a href={profile.linkedin.href} target="_blank" rel="noreferrer">
              {profile.linkedin.label}
            </a>
          </div>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`}
        aria-label="Navegação móvel"
      >
        <div className="container mobile-nav__inner">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
              <span aria-hidden="true">↘</span>
            </a>
          ))}
          <a href={profile.github.href} target="_blank" rel="noreferrer" onClick={closeMenu}>
            {profile.github.label}
            <span aria-hidden="true">↗</span>
          </a>
          <a href={profile.linkedin.href} target="_blank" rel="noreferrer" onClick={closeMenu}>
            {profile.linkedin.label}
            <span aria-hidden="true">↗</span>
          </a>
          <a href={profile.resume.href} download={profile.resume.filename} onClick={closeMenu}>
            Currículo
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
