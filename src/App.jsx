
// import { useState } from 'react'
import './App.css'
// import Apple from './Apple'
import Bananna from './Bananna'




function App() {
  const product=[
    {
      title:"product1"
    },
    {
      title:"product2"
    },
    {
      title:"product3"
    }
  ]
  return (
    <>
    {product.map((item)=>{
     return <Bananna  item={item.title} />
    })} 
     
    </>
  )
}

export default App
