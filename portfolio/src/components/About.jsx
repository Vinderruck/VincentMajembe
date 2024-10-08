import React from 'react'
import {motion} from 'framer-motion'
import { SlideIn,fadeIn } from '../utility/motion';
import {Skills} from '../Canvas';
import { Skillicons } from '../constatnst/const';
 


const About = () => {
  return (
  <div>
    <motion.div variants={fadeIn('right',"linear",0.2,3)}>
      <h1 className="text-[40px] text-center regular">About Me</h1>
      <motion.p animate={{x:3,x:-3}} transition={{duration:2}}className="text-center">Through continuous problem-solving, I strive for ideal improvement,
         enabling me to deliver exceptional service to you.<br/>I'm excited to bring this dedication to
         excellence to your team and contribute to your success - let's work together!</motion.p>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {Skillicons.map((skillicon)=>{
        return(
        <div   className='w-28 h-28' key={skillicon.title}>
  <Skills icon={skillicon.icon}/>
        </div>)
      })}</div>

  </div>
  )
}

export default About