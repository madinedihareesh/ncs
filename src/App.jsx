
// import { useState } from 'react'
import './App.css'
// import Crender from './Crender'
// import With from './With'
// import Without from './Without'
// import Make from './styles.module.css'
// import Apple from './Apple'
// import Bananna from './Bananna'




function App() {
  let email="";
  let password="";

  function handleEmailChange(event){
     email=event.target.value;
    }

  function handlePasswordChange(event){
     password=event.target.value;

  } 
  function handleSubmit(event){
    event.preventDefault();
    const emailPatern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPatern=/^[A-Za-z0-9]{6,}$/;

    if(!emailPatern.test(email)){
      alert("Incorrect Email");
      return;
    }
    if(!passwordPatern.test(password)){
      alert("Incorrect password");
      return;
    }
    alert("Login secuss")

  } 
  return (
    <>
     <h1>Log-in Form</h1>
     <form action="#" onSubmit={handleSubmit}>
      <input type="email" 
      placeholder='Enter the eamil'
      onChange={handleEmailChange}/>
      <input type="password" 
      placeholder='Enter the password'
      onChange={handlePasswordChange}/>
      <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
