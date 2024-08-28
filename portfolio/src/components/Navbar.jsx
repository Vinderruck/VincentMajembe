import React from 'react'
import {motion} from 'framer-motion'
import { vin,vin2} from '../assets';
import { navLinks } from '../constatnst/const';

const Navbar = () => {
    return  (
<nav>
<motion.div  classNamae="logo">
 <img src={vin2} alt="vinlogo"/>
<motion.div  animation={{x:100}}
transition={{duration:10 }}
className="bg-black rounded-full w-3 h-3"/>
    </motion.div>
    <motion.div>
    <ul className="sm:flex flex-row gap-10 hidden list-none">
  {navLinks.map((link)=>(
    <li key={link.id}>
        <a href={`#${link.id}`}>{link.title}</a>
    </li>
  ))}
</ul>
    </motion.div>
     </nav>
  )
}

export default Navbar