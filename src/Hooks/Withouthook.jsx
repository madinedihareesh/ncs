import React, { use, useState } from 'react'

const Withouthook = () => {
 
   const [count,setCount]=useState(0)
   const [data,setData]=useState('')
   const [isVisible,setIsVisible]=useState(true)
   const [color,setColor]=useState('')
   const [name,setName]=useState('')
    
    
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count<=0?0:count-1)}>Dec</button>
        <input type="text" onChange={(e)=>setData(e.target.value)}/>
        <p>{data}</p>
        <input type={isVisible?'password':'text'} />
        <button onClick={()=>setIsVisible(!isVisible)}>Show Password</button>
        <p style={{backgroundColor:color}}>This is the color changing paragraph</p>
        <button onClick={()=>setColor('red')}>Red</button>
        <button onClick={()=>setColor('green')}>Green</button>
        <button onClick={()=>setColor('yellow')}>Yellow</button>
        <br/>
        
        
    </div>
  )
}

export default Withouthook