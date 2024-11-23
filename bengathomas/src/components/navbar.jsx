import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { LINKS } from "../App";


const NavBar = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen)
        }

        useEffect(() => {
            if (isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        }, [isOpen])
    return (
        <>
            <nav className="fixed right-0 top-0 z-30 p-4">
                <button onClick={toggleMenu} className="rounded-md p-2">
                    {isOpen ? (
                        <FaTimes className="h-6 w-6" color="purple" />
                    ) : (
                        <FaBars className="h-6 w-6" /> 
                    )}
                </button>
            </nav>
            {isOpen && (
                <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black text-white">
                    <ul className="space -y-6 text-3xl">
                        {LINKS.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} onClick={toggleMenu}
                                className="text-2xl font-semibold uppercase tracking-wide hover:text-blue-600 lg:text-9xl">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default NavBar;