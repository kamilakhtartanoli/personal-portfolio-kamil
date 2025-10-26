import React, { useEffect } from 'react'
import './App.css'
import './index.css'
import Navbar from './pages/Navbar.jsx'
import Hero from './pages/Hero.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  return<>
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
  </>
}

export default App
