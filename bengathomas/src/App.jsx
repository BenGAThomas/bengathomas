import './index.css';
import NavBar from './components/navbar';
import BenT from './components/benThomas';
import Projects from './components/projects';
import Contact from './components/contact';
import About from './components/About';
import Skills from './components/skills';



function App() {


  return (
    <main className='bg-gradient-to-b from-lime-600 to-purple-600'>
      <NavBar />

      <BenT />

      <About />

      <Skills />
      
      <Projects />

      <Contact />


    </main>
  )
}

export default App
