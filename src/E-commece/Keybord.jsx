import React from 'react'

const Keybord = () => {
  function handleKeydown(event){
    console.log("Key entered",event.key);
    
}
  return (
    <div>
      <input type="text" placeholder='Please Enter Some Text' onKeyDown={handleKeydown}/>
    </div>
  )
}

export default Keybord