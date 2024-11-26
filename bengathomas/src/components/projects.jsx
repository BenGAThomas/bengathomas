import { PROJECTS} from "./exports"

const Projects = () => {
    return (
      <section className="p-8" id="projects">
        <h2 className="my-10 text-center text-3xl lg:text-8x1">My Projects</h2> 
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {PROJECTS.map((project) => (
            <a key={project.id} href={project.link} target="_blank"
            rel="noopener noreferrer" className="block">
              <div className="relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg">
                <img src={project.imgSource} />
              </div>
            </a>
          ))}

        </div>

      </section>

  //   <div className='apps'>
  //   <h1 className='dragons'>Dungeons and Dragons Stat builder.</h1>

  //   <p>This is a Dungeons and Dragons stat builder built using React. In the project useEffect and useState are used to change the state of the ability score modifiers. The builder also uses a Dungeons and Dragons API to get all race, spells, classes and other relevant information when making a character. </p>

  //   <h1>Iprep Meal Delivery</h1>

  //   <p>This is a full stack meal delivery application that my peers and I made as our capstone project to graduate from DigitalCrafts Boot camp. We used Tailwind CSS, ReactJS, for the Front-End. We used Postman for the Back-End database.</p>


  //   <h1>MLS Search</h1>
  //   <p>In this application you can search for any player or team currently playing in the MLS and get up to date information about them. This uses the football API to get the information</p>
  // </div>
)
}

export default Projects