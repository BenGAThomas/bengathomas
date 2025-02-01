import BenPhoto from '../assets/BenPhoto.jpg';

const About = () => {
  return (
    <section id="about">
        <h2 className="my-7 text-center text-3xl lg:text-4xl">About Me</h2>
        <div className="flex items-center justify-center">
          <img src={BenPhoto} alt="Ben Photo" className='max-w-xs max-h-xs object-contain' ></img>
            <p className="m-1 max-w-6xl text-3xl lg:text-2xl">I am a Software Engineer located in Atlanta, GA. I specialize in creating responsive website and providing exceptional user experiences. I have a strong comprehension of front-end technologies. My skill set is in frameworks such as Javascript, React, and NextJS. I also have proficiency in SQL databases such as MongoDB, and Postgres. I am enthusiastic about learning new frameworks, libraries, and technology to help keep me up to date on the latest trends in building scalable, and great user friendly websites.</p>
        </div>
    </section>
  )
}

export default About
