import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Highlights from './components/Highlights.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { profile, skills, projects, education, highlights } from './data.js'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar profile={profile} />
      <main id="main">
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills groups={skills} />
        <Projects projects={projects} />
        <Education edu={education} />
        <Highlights items={highlights} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}
