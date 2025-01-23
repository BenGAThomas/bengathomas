import './index.css';
import NavBar from './components/navbar';
import BenT from './components/benThomas';
import Projects from './components/projects';
import Contact from './components/contact';
import Marquee from './components/Marquee';
import About from './components/About';



function App() {


  return (
    <main className='bg-gradient-to-b from-lime-600 to-purple-600'>
      <NavBar />

      <BenT />

      <About />

      <Marquee />
      
      <Projects />



      <Contact />


    </main>
  )
}

export default App
