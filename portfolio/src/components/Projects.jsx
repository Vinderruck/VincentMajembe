import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn, SlideIn } from '../utility/motion';
import { Projects } from '../constatnst/const';
import {Tilt} from 'react-tilt';



const Projectcard =({
  index,
  title,
  Description,
  image,
  github,
  giticon,
  Live,
  LiveEye,
})=>{
  return(
    <motion.div variants={fadeIn("up","spring",0.2,2)}>
    <Tilt
    options={{
      max:45,
      scale:1,
      speed:450,
    }}   className='bg-slate-100 p-5 rounded-2xl w-full sm:w-[360px] h-full'>
<div className="relative w-full h-1/2"> 

  <img src={image} alt="project" className="rounded-sm w-full h-full object-cover"/>
  </div>
    
  
  <motion.p  animate={{x:3,x:-3}} transition={[{duration:4}]} className="font-bold text-[20px] text-sky-900 paragragraph">{title}</motion.p>
<motion.p className="bg-slate-400 p-1 rounded-2xl text-[20px] paragraph">{Description}</motion.p>
&nbsp;
 <div className="flex justify-between bg-slate-600 rounded-2xl">
      <div onClick={()=>window.open(github,"_blank")}
        className="flex justify-center items-center m-2 rounded-2xl w-10 h-10 cursor-pointer black-gradient">

 <img src={giticon}  alt="github" className="w-1\2 h-1\2 object-contain"/> </div>
  
 <div onClick={()=>window.open(Live,"_blank")}
        className="flex justify-center items-center m-2 rounded-full w-10 h-10 cursor-pointer black-gradient">

 <img src={LiveEye}  alt="github" className="w-1\2 h-1\2 object-contain"/> </div>
  
 </div>
   
   
    </Tilt>
    </motion.div>
  )}
const Project = () => {
  return (
    <div> <motion.div variants={fadeIn('right',"linear",0.2,3)}>
       <motion.p animate={{x:3,x:-3}} transition={{duration:2}}className="text-center  font-bold"> MY PROJECTS</motion.p>
    <h1 className="font-bold text-[40px] text-center regular">PROJECTS</h1>
    <motion.p animate={{x:3,x:-3}} transition={{duration:2}}className="text-center  "> The following projects showcase
       my skills in delivering real-world solutions, utilizing all the listed technologies in previous section,<br/>These projects demonstrate my ability to effectively apply my technical expertise to create 
        comprehensive and efficient solutions, <br/>
      tackling real-world challenges and delivering tangible results.    </motion.p>
  </motion.div>
  &nbsp;
  <div>
    {Projects.map((project,index)=>{
      return(
    
  <Projectcard key={`project-${index}`} index={index} {...project}/>
 
      )
    })}</div></div>
  )
}

export default Project