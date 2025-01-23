import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
    return (
    <section id='contact'>
      <div className="mx-auto max-w-6xl">
        <h1 className="my-10 text-center text-2xl lg:text-4xl">Contact Me</h1>
        <p className="my-4 text-center text-xl">I am continuously looking for the opportunity to freelance or contract work on building your website or creating projects. Feel free to reach out to me regarding work so we can build your website.</p>
      </div>
    <div className="text-center">
    <button onClick={() => window.location.href = 'mailto:Benjamingathomas@gmail.com'} className="my-4 text-2xl font-medium text-red-500 lg:pt-6 lg:text-5xl" >Benjamingathomas@gmail.com</button>
    </div>

    <div className="mt-5 mb-8 flex items-center justify-center gap-8">
      <a href='https://www.linkedin.com/in/benjamingathomas/'><FaLinkedin size={'3em'}></FaLinkedin></a> 
      <a href="https://www.github.com/BenGAThomas"><FaGithub size={'3em'}></FaGithub></a>
      <a href='https://discordapp.com/users/255879370453942272'><FaDiscord size={'3em'}></FaDiscord></a>

    </div>
   
  </section>
  )
}

export default Contact