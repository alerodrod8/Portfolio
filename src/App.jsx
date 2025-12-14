import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import UpcomingProjects from './UpcomingProjects.jsx'
import Gallery from './Gallery.jsx'
import Contact from './Contact.jsx'

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const container = document.querySelector('.sections-container');
    if (container) {
      container.style.transform = `translateY(-${currentSection * 100}vh)`;
    }
  }, [currentSection])

  const sections = [
    { id: 'home', component: <Home /> },
    { id: 'about', component: <About /> },
    { id: 'upcoming-projects', component: <UpcomingProjects /> },
    { id: 'gallery', component: <Gallery /> },
    { id: 'contact', component: <Contact /> }
  ]

  const handleSectionChange = (newIndex) => {
    if (newIndex !== currentSection) {
      setCurrentSection(newIndex)
    }
  }

  // Function to pass to Header
  const changeSection = (sectionId) => {
    const index = sections.findIndex(s => s.id === sectionId)
    if (index !== -1) {
      handleSectionChange(index)
    }
  }

  return (
    <>
      <Header onSectionChange={changeSection} />
      <main className="main-content">
        <div className="sections-container">
          {sections.map((section, index) => (
            <section
              key={section.id}
              className="portfolio-section"
            >
              {section.component}
            </section>
          ))}
        </div>
      </main>
    </>
  )
}

export default App
