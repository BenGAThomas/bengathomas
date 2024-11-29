import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Contact = () => {
    return (
    <section id='contact'>
      <div className="mx-auto max-w-6xl">
        <h1 className="my-10 text-center text-2xl lg:text-4xl">Contact Me</h1>
        <p className="my-4 text-center text-xl">I am continuously looking for the opportunity to freelance or contract work on building your website or creating projects. Feel free to reach out to me regarding work so we can build your website.</p>
      </div>
    
    <h3>Benjamingathomas@gmail.com</h3>
    <a href='https://www.linkedin.com/in/benjamingathomas/'><FaLinkedin></FaLinkedin></a> 
    <a href="http://www.github.com/BenGAThomas"><FaGithub></FaGithub></a>
  </section>
  )
}

export default Contact