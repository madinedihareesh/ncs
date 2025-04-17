import React from 'react'
import FirstCom from './Componets/FirstCom'
import SecondCom from './Componets/SecondCom'
import ThirdCom from './Componets/ThirdCom'
import FourthCom from './Componets/FourthCom'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Componets/Navbar'
// import Keybord from './E-commece/Keybord'


function App1() {
    
  return (
    <div>
         <Navbar/>
      <Routes>
        <Route path='/index' element={<FirstCom/>}/>
        <Route path='/products' element={<SecondCom/>}/>
        <Route path='/cart' element={<ThirdCom/>}/>
        <Route path='/about' element={ <FourthCom/>}/>
      </Routes>
      
   
      
     
    </div>
  )
}

export default App1