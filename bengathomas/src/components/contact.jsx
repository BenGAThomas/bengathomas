import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Contact = () => {
    return (
    <div className='contactInfo'>
    <h1>Contact Me</h1>
    <h3>Benjamingathomas@gmail.com</h3>
    <a href='https://www.linkedin.com/in/benjamingathomas/'><FaLinkedin></FaLinkedin></a> 
    <a href="http://www.github.com/BenGAThomas"><FaGithub></FaGithub></a>
  </div>
  )
}

export default Contact