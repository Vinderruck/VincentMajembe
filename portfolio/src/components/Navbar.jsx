import React,{useState} from 'react'
import {motion} from 'framer-motion'
import { vin,vin2} from '../assets';
import { navLinks } from '../constatnst/const';
import { SlideIn,fadeIn } from '../utility/motion';
import { TiThMenu } from "react-icons/ti";
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';
import Work from './Work';
 
const Navbar = () => {


  const [IsMenu, setIsMenu] = useState(false)
    return  (
      <>
<nav className="z-10 flex justify-between items-center bg-white opacity-100 h-40">
<motion.div  classNamae="logo"    variants={SlideIn("left", "tween", 0.2, 1)}>
 <img src={vin2} alt="vinlogo" className="mt-1 h-32 object-cover"/>
 <div className="flex">
<motion.div   animate={{ rotate:240, x: -100, x:100 }}
  transition={{ repeat: Infinity, duration: 1,repeatType: "loop" }}
className="bg-white rounded-full w-2 h-2 dott"/>
<br/>
<motion.div   animate={{ rotate:240, x: -100, x:100 }}
  transition={{ repeat: Infinity, duration: 1,repeatType: "loop" }}
className="bg-orange-600 rounded-full w-2 h-2 dott"/>
<motion.div   animate={{ rotate:240, x: -100, x:100 }}
transition={{ repeat: Infinity, duration: 1,repeatType: "loop" }}
className="bg-sky-600 rounded-full w-2 h-2 dott"/>
<br/><motion.div   animate={{ rotate:240, x: -100, x:100 }}
transition={{ repeat: Infinity, duration: 1,repeatType: "loop" }}
className="bg-white rounded-full w-2 h-2 dott"/>
<motion.div   animate={{ rotate:240, x: -100, x:100 }}
transition={{ repeat: Infinity, duration: 1,repeatType: "loop" }}
className="bg-orange-600 rounded-full w-2 h-2 -full dott"/>
<motion.div   animate={{ rotate:240, x: -100, x:100 }}
  transition={{ repeat: Infinity, duration: 1,repeatType: "loop" }}
className="bg-sky-600 rounded-full w-2 h-2 dott"/><br/>




</div>
    </motion.div>
    <motion.div className="justify-end" animate={{x:-50}}
    transition={{duration:5}}
    >
    <ul className="sm:flex flex-row gap-10 hidden list-none">
  {navLinks.map((link)=>(
    <li key={link.id}>
        <a href={`#${link.id}`} className="m-3 border-l-2 font-extrabold text-[18px] text-2xl text-sky-600 hover:text-blue cursor-pointer regular">{link.title}</a>
    </li>
  ))}
</ul>
    </motion.div>
<div className="relative sm:hidden bg-white w-[30px] h-[30px] menu">
  <TiThMenu className="p-0 w-full h-full" onClick={()=>setIsMenu(!IsMenu)}/>
    {IsMenu &&(
      <motion.div animate={{x:-200}}
      transition={{duration:4}}
     className="z-10 fixed border-sky-600 bg-white rounded-md w-full h-1/4" >
        <ul className="sm:flex flex-row gap-10 mb-1 list-none">
      {navLinks.map((link)=>(
        <li key={link.id}>
            <a href={`#${link.id}`} onClick={()=>[setIsMenu(false)]} className="m-7 p-1 font-extrabold text-[18px] text-2xl text-sky-600 hover:text-blue cursor-pointer regular">{link.title}</a>
        </li>
      ))}
    </ul></motion.div>
    )}
</div>
     </nav>
     <Hero/>
     <About/>
 <Projects/>
 <Work/>
     <Contact/>
     </>
  )
}

export default Navbar