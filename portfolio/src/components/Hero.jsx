import React from 'react'
import {motion} from 'framer-motion';
import { staggerContainer, staggertext } from '../utility/motion';
import Wrapper from '../hoc/Wrapper';
import { ComputerCanvas } from '../Canvas';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-centeter">

<motion.div className="flex items-center opacity-70 mt-3 p-0 rounded w-2/4 justfy-between"
 animate={{ x:20}} transition={{duration:7}}>
    <div className="dot">
  <motion.div  animate={{y:-20}} initial="hidden" whileInView="show" transition={{duration:2,repeat:Infinity, repeatType:"loop"}}className="bg-black mt-2 mb-0 rounded-full w-3 h-20"/>
  
  </div>
    <h1 className="flex flex-1 items-center m-3 p-3 font-bold text-[40px] text-black regular">
        <motion.span variants={staggertext()} initial="hidden" whileInView="show"  transition={{duration:5,delay:0.7}}>Hi Am &nbsp; 
         <span className="text-sky-900">Majembe </span></motion.span></h1>
</motion.div>
<motion.p className="text-white">A passionate front-end Developer</motion.p>
 &nbsp;
<ComputerCanvas/>
    </div>
  )
}

export default Hero