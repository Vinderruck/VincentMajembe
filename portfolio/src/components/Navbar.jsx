import React,{useState} from 'react'
import {motion} from 'framer-motion'
import { vin,vin2} from '../assets';
import { navLinks } from '../constatnst/const';
import { SlideIn,fadeIn } from '../utility/motion';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {


  const [IsMenu, setIsMenu] = useState(false)
    return  (
<nav className="flex justify-between items-center">
<motion.div  classNamae="logo"    variants={SlideIn("left", "tween", 0.2, 1)}>
 <img src={vin2} alt="vinlogo"/>
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
        <a href={`#${link.id}`} className="m-4 border-l-2 font-bold text-[18px] text-2xl text-white hover:text-blue cursor-pointer regular">{link.title}</a>
    </li>
  ))}
</ul>
    </motion.div>
<div className="absolute sm:hidden mx-0.5 mt-5 mr-5 w-[25px] h-[25px] menu">
  <TiThMenu className="bg-white rounded:2xl w-full h-full"/>
</div>
     </nav>
  )
}

export default Navbar