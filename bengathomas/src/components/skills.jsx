import jsLogo from '../assets/logo-javascript.svg'
import awsLogo from '../assets/aws-2.svg';
import htmlLogo from '../assets/html-1.svg';
import cssLogo from '../assets/css-3.svg';
import mongodbLogo from '../assets/mongodb-icon-2.svg';
import mysqlLogo from '../assets/mysql-logo-pure.svg';
import nodejsLogo from '../assets/nodejs-3.svg';
import postgresLogo from '../assets/postgresql.svg';
import postmanLogo from '../assets/postman.svg';
import pythonLogo from '../assets/python-4.svg';
import reactLogo from '../assets/react-2.svg';
import tailwindLogo from '../assets/tailwind-css-2.svg';
import vercelLogo from '../assets/vercel.svg';

const Skills = () => {
    return (

    
    <div>

    <div>
    <h1 className="text-center mb-8 mt-20 text-[5vw] font-bold">Skills</h1>
      <div className='w-150 h-1500 grid grid-cols-3 gap-8 m-8 justify-items-center'>

        <div>
          <img className='"h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={jsLogo} alt='Javascript Logo'/>
        </div>
        <div>
          <img className='h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={awsLogo} alt='AWS Logo' />
        </div>
        <div>
          <img className='h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={htmlLogo} alt='HTML Logo' />
        </div>
        <div>
          <img className='h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={cssLogo} alt='CSS Logo' />
        </div>
        <div>
          <img className='h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={mongodbLogo} alt='MongoDB logo' />
        </div>
        <div>
          <img className='h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={mysqlLogo} alt='MySQL Logo'/>
        </div>
        <div>
          <img className='h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={nodejsLogo} alt='NodeJS Logo'/>
        </div>
        <div>
          <img className='h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={postgresLogo} alt='Postgres Logo' />
        </div>
        <div>
          <img className='h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={pythonLogo} alt='Python Logo' />
        </div>
        <div>
          <img className='h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={reactLogo} alt='React Logo' />
        </div>
        <div>
          <img className='h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={tailwindLogo} alt='Tailwind Logo' />
        </div>
        <div>
          <img className='h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={vercelLogo} alt='Vercel Logo' />
        </div>
        <div>
          <img className='h-20 w-20 transition-transform duration-300 transform hover:scale-150' src={postmanLogo} alt='Postman Logo' />
        </div>
      </div>
    </div>

    
    <h2 className="text-center m-4">Soft Skills</h2>
    <div className="grid grid-cols-3 gap 4 text-center">
      <div>Communication</div>
      <div>Problem Solving</div>
      <div>Customer Service</div>
      <div>Time Management</div>
      <div>Critical Thinking</div>
      <div>Adaptability</div>
    </div>

  </div>
)

}

export default Skills