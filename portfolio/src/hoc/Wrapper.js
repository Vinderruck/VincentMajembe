import React from 'react';
import {motion} from 'framer-motion';
 

const Wrapper = (Component,IdName) =>
    function HOC() {
  return (
    <motion.div variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.25 }}
    className= " max-w-7xl mx-auto relative z-0"
  >
        <span className='hash-span' id={idName}>&nbsp</span>

        <Component/>
        </motion.div>
    
  )
}

export default Wrapper