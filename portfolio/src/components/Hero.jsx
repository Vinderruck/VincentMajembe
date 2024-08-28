import React from 'react'
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col">

<motion.div className="sm:block flex items-center bg-orange-600 opacity-80 mt-3 rounded:2xl w-2/4 justfy-center" animate={{x:20}} transition={{duration:5}}>
    <h1 className="flex flex-1 font-bold text-2xl text-white regular"><span>Hi Am &nbsp; <span>Majembe<span className="sm:flex hidden">| Vincent</span></span></span></h1>
</motion.div>

    </div>
  )
}

export default Hero