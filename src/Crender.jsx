import React from 'react'

const Crender = () => {
//   let isLoggedIn= true;
//   let message;
//   if(isLoggedIn){
//    return <h1>welcome User</h1>
//   }else{
//    return <h1>Please Login...</h1>
//   }
// Element variable render
//   if(isLoggedIn){
//     message=<h1>Welcome User</h1>
//   }else{
//     message=<h1>Please Log in.....</h1>
//   }
//   return message;
// terinary rendering
// return <h1>{isLoggedIn?"welcome user": null}</h1>
// switch
// let status="Server";
// switch(status){
//     case "Sucess":
//         return <p>Sucess...</p>;
//     case "error":
//         return <p>Error...</p>;
//     case "Loding":
//         return <p>loding...</p>
//     default:
//         return <p>Unsucessful...</p>        
// }
// short-Circut
let notification=true;
return notification && <p>You have a message</p>
}

export default Crender