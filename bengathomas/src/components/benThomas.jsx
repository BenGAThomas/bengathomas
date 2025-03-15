import { LuImport } from "react-icons/lu";

const BenT = () => {
    return (
        <section>
            <div className='flex flex-col items-center justify-center' >
                    <h1 className="mt-12 overflow-hidden text-[5vw] font-semibold uppercase leading-none">
                        Benjamin <br /> Thomas
                    </h1>
                <div className="mt-8">
                    <a href="../public/assests/Benjamin Thomas Resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        download
                        className="flex items-center rounded-xl bg-green-500 p-3 px-3 font-sans font-medium text-black ">
                            <span>Benjamin Thomas Resume.pdf</span>
                            <LuImport className="ml-2" />
                        </a>
                </div>          
            </div>
        </section>
)
}

export default BenT