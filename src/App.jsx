import { useState } from 'react'
import Nabvar from './components/Nabvar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black-100 min-h-screen">
      <Nabvar />
      <Hero />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
