import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Navbar,About,Contact} from './components'
 

function App() {
 

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <About/>
        <Contact/>
        </Routes>
        </BrowserRouter>
       
    
  )
}

export default App
