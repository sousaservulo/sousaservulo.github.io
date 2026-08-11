import { useEffect, useState } from 'react'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import About from './sections/About'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import { applyTheme, getInitialTheme, type Theme } from './utils/theme'

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="conteudo">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
