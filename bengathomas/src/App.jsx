import './index.css'

function App() {


  return (
    <>
    {/*NAVBAR */}
  <div className='navbar'></div>


  <div className='header' >
  <img src='./pictures/atlutd_logo.png' alt='photo of Ben'></img>

  <p className='about'>My name is Benjamin Thomas. I am a software engineer living in Atlanta, GA. I have experience working with JavaScript, TypeScript, React, NextJS, MongoDB and MYSQL. I have a desire to learn new languages and growing my knowledge of web development and web design. Below you can see some of the projects I have worked on.</p>
  </div>


{/*Section 2  SKILLS */}
  <div className='skills'>
    <h1>Skills</h1>
    <li>
      <ul>JavaScript</ul>
      <ul>TypeScript</ul>
      <ul>React</ul>
      <ul>HTML/CSS</ul>
      <ul>MongoDB</ul>
      <ul>MYSQL</ul>
    </li>

    <h2>Soft Skills</h2>
    <li>
      <ul>Communication</ul>
      <ul>Problem Solving</ul>
      <ul>Customer Service</ul>
      <ul>Time Management</ul>
      <ul>Critical Thinking</ul>
      <ul>Adaptability</ul>
    </li>
  </div>


{/*Section 3 PROJECTS */}
  <div className='apps'>
    <h1 className='dragons'>Dungeons and Dragons Stat builder.</h1>

    <p>This is a Dungeons and Dragons stat builder built using React. In the project useEffect and useState are used to change the state of the ability score modifiers. The builder also uses a Dungeons and Dragons API to get all race, spells, classes and other relevant information when making a character. </p>
  </div>


  <div className='apps'>
    <h1>Iprep Meal Delivery</h1>

    <p>This is a full stack meal delivery application that my peers and I made as our capstone project to graduate from DigitalCrafts Boot camp. We used Tailwind CSS, ReactJS, for the Front-End. We used Postman for the Back-End database.</p>
  </div>


  <div className='apps'>
    <h1>MLS Search</h1>
    <p>In this application you can search for any player or team currently playing in the MLS and get up to date information about them. This uses the football API to get the information</p>
  </div>

  {/*Section 4 Contact Info*/}
  <div className='contactInfo'>
    <h1>Contact Me</h1>
    <h3>Benjamingathomas@gmail.com</h3>
    <a href='https://www.linkedin.com/in/benjamingathomas/'><h3>LinkedIn</h3></a> 
    <a href='https://github.com/BenGAThomas'><h3>Github</h3></a> 
  </div>


    </>
  )
}

export default App
