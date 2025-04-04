import React from 'react'

const Mouse = () => {
    function handleMouseLeave(){
        console.log("Its a MOuse Enterevent");
        
    }
  return (
    <div>
        <h1>Mouse Events</h1>
        <button onMouseLeave={handleMouseLeave}>Click me</button>
    </div>
  )
}

export default Mouse