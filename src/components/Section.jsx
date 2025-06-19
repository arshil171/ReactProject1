import React, { useEffect, useState } from 'react'

const Section = () => {
  const [data , setData] = useState(null)
   const [count , setCount] = useState(0)
 
   async function getData(){
       try{
         let response = await fetch("https://fakestoreapi.com/products");
         let result = await response.json()
         console.log(result)
         setData(result)
       }catch(error){
          console.log(error)
       }
     }
 
     useEffect(()=>{
       getData()
     },[count])
   return (
    
    
    <div>
         <button onClick={()=>{
           setCount(count + 1)
         }}>count</button>
 
        {data && data.map((item)=>{
           return(
             <div key = {item.id}>
             <p ></p>
             <p>Title : {item.title}</p>
             <p>Description : {item.description}</p>
             <img src={item.image} alt="" width={"100px"} />
             <p>Price : ${item.price}</p>
             </div>
 
           )
        })}
    </div>
   )
}

export default Section