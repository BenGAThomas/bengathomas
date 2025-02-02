import { LuImport } from "react-icons/lu";

const BenT = () => {
    return (
        <section>
            <div className='flex flex-col items-center justify-center' >
                <h1 className="mt-12 overflow-hidden text-[3vw] font-semibold uppercase leading-none">
                    Benjamin <br /> Thomas
                </h1>
            {/* <img src='./pictures/atlutd_logo.png' alt='photo of Ben'></img> */}
            <div className="mt-8">
                <a href="./assets/Benjamin Thomas Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    download
                    className="flex items-center rounded-xl bg-green-500 p-3 px-3 font-sans font-medium text-black ">
                        <span>Benjamin Thomas Resume.pdf</span>
                        <LuImport className="ml-2" />
                    </a>
            </div>
            <div className="w-50">
                {/*<img src="./assets/atlutd_logo.png" alt="Benjamin Thomas" className="mt-8 h-100 w-50 object-cover"/>*/ }
            </div>
            {/*<p className='about'>My name is Benjamin Thomas. I am a software engineer living in Atlanta, GA. I have experience working with JavaScript, TypeScript, React, NextJS, MongoDB and MYSQL. I have a desire to learn new languages and growing my knowledge of web development and web design. Below you can see some of the projects I have worked on.</p>*/}
            </div>
        </section>
)
}

export default BenT