import React from 'react'
import {motion} from 'framer-motion'
import { vin,vin2} from '../assets';
import { navLinks } from '../constatnst/const';
import { SlideIn,fadeIn } from '../utility/motion';

const Navbar = () => {
    return  (
<nav>
<motion.div  classNamae="logo"   animate={{x:-10, x:10}} transition={{duration:6, repeat:Infinity}} variants={SlideIn("left", "tween", 0.2, 1)}>
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
    <motion.div className="justify-end"   animate={{x:-50}}
    transition={{duration:10}}
    >
    <ul className="sm:flex flex-row gap-10 hidden list-none">
  {navLinks.map((link)=>(
    <li key={link.id}>
        <a href={`#${link.id}`} className="m-10 text-white">{link.title}</a>
    </li>
  ))}
</ul>
    </motion.div>
     </nav>
  )
}

export default Navbar