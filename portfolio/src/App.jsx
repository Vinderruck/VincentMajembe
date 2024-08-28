import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Navbar,About,Contact} from './components'
 

function App() {
 

  return (
    
       <div>
        <Navbar/>
        <About/>
        <Contact/>
       </div>
       
    
  )
}

export default App
