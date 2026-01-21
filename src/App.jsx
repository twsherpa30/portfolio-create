import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Resume />
      <Footer />
    </div>
  )
}

export default App