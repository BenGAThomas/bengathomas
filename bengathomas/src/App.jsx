import './index.css';
import NavBar from './components/navbar';
import BenT from './components/benThomas';
import Projects from './components/projects';
import Contact from './components/contact';
import Marquee from './components/Marquee';

// export const LINKS = [
//   {id: "projects", name: "projects"},
//   {id: "about", name: "about"},
//   {id: "experience", name: "experience"},
//   {id: "contact", name: "contact"}
// ]

// export const SKILLS =
//   "React, Node, Tailwind, Javascript, HTML/CSS, MYSQL, Angular, Postgres, MongoDB, AWS"

function App() {


  return (
    <main>
      <NavBar />

      <BenT />

      <Marquee />
      
      <Projects />



      <Contact />


    </main>
  )
}

export default App
