import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import './PageNaction.css'


const PageNaction = () => {
 const [products,setProducts]=useState([])
 const [page,setPage]=useState(1);
 let totalproducts=10;

 useEffect(()=>{
  async function fetchData(){
    let {data}=await axios.get('https://dummyjson.com/products');
    setProducts(data.products);
  
  }
   fetchData();
   
   
   
 },[])

 let output=products.slice((page-1)*totalproducts,page*totalproducts)
 console.log(products);
 
  return (
    <div>
      <div style={{display:'flex' }}>
      <div >
    {output.map((item)=>(
      <div>
      <h1>{item.title}</h1>
      </div>
    ))}
    </div>
    </div>
    <div>
      {
      [1,2,3,4,5,6,7,8,9,10].map((btn)=>(
        <button onClick={()=>setPage(btn)}>{btn}</button>
      ))
      }
    </div>
    </div>
  )
}

export default PageNaction;
