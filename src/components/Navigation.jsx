import { useState } from 'react'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav>
        <div className="nav-logo">
          SHERPA<span style={{ color: '#ff5e5e' }}>.CODES</span>
        </div>
        <div className="nav-links">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#resume" className="nav-link">Resume</a>
        </div>
        <button className="mobile-menu-btn brutal-box" onClick={toggleMenu}>
          MENU
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? '' : 'hidden'}`}>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#resume" onClick={closeMenu}>Resume</a>
      </div>
    </>
  )
}

export default Navigation