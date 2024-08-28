import React from 'react'
import {motion} from 'framer-motion';
import { staggerContainer, staggertext } from '../utility/motion';

const Hero = () => {
  return (
    <div className="flex flex-col">

<motion.div className="sm:block flex items-center bg-orange-600 opacity-80 mt-3 rounded w-2/4 justfy-center"
 animate={{x:-40, x:20}} transition={{duration:7}}>
    <h1 className="flex flex-1 font-bold text-2xl text-center text-white regular">
        <motion.span variants={staggertext()} initial="hidden" whileInView="show">Hi Am &nbsp; <span>Majembe<span className="sm:flex hidden">| Vincent</span></span></motion.span></h1>
</motion.div>

    </div>
  )
}

export default Hero