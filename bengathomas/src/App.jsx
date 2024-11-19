import './index.css';
import NavBar from './components/navbar';
import BenT from './components/benThomas';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

export const LINKS = [
  {id: "projects", name: "projects"},
  {id: "about", name: "about"},
  {id: "experience", name: "experience"},
  {id: "contact", name: "contact"}
]

function App() {


  return (
    <main>
      <NavBar />

      <BenT />

      <Projects />

      <Skills />

      <Contact />


    </main>
  )
}

export default App
