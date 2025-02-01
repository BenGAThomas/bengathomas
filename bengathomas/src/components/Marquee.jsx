import {SKILLS} from "./exports.jsx"
import { motion } from "framer-motion"

const Marquee = () => {
    return (
        <div className="mt-4 w-full bg-red-600 text-black lg:py-6">
            <div className="flex overflow-hidden whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                    <motion.h1
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
                     key={i} className="py-1 text-2xl font-bold leading-none tracking-tighter lg:text-4xl">
                        {SKILLS}
                    </motion.h1>
                ))}
            </div>
        </div>
    )
}

export default Marquee