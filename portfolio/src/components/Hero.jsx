import React from 'react'
import {motion} from 'framer-motion';
import { staggerContainer, staggertext } from '../utility/motion';
import Wrapper from '../hoc/Wrapper';
import { ComputerCanvas } from '../Canvas';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-centeter">

<motion.div className="sm:block flex items-center bg-orange-600 opacity-80 mt-3 p-0 rounded w-2/4 justfy-center"
 animate={{ x:20}} transition={{duration:7}}>
    <h1 className="flex flex-1 items-center m-3 p-3 font-bold text-2xl text-white regular">
        <motion.span variants={staggertext()} initial="hidden" whileInView="show"  transition={{duration:5,delay:0.7}}>Hi Am &nbsp; 
         <span>Majembe <span className="sm:flex hidden">| Vincent</span></span></motion.span></h1>
</motion.div>
 &nbsp;
<ComputerCanvas/>
    </div>
  )
}

export default Hero