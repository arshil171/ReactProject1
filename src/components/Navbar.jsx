import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";


const Navbar = ({dark,setDark}) => {
     
  

      console.log(dark)

  return (
    <div style={{color : dark ?"white" :"black",  
      backgroundColor : dark ?"black" : "white"
    }} className='flex h-[70px] items-center bg-black text-white  shadow-purple-700 border '>
      <div className='pl-[90px] text-[25px] '><img src="" alt="" />Logo</div>
      <div className='flex absolute  h-[70px] left-[23%] w-[45%]   items-center justify-between '>
        <ul className='flex  w-[100%] justify-between absolute  '>
          <li className=' cursor-pointer transition  duration-300 ease-in-out  flex justify-center items-center   h-[35px] w-[70px] hover:text-black hover:bg-white  hover:rounded-[7px]'>Home</li>
          <li className=' cursor-pointer transition  duration-300 ease-in-out  flex justify-center items-center   h-[35px] w-[70px] hover:text-black hover:bg-white  hover:rounded-[7px]'>Products</li>
          <li className=' cursor-pointer transition  duration-300 ease-in-out  flex justify-center items-center   h-[35px] w-[70px] hover:text-black hover:bg-white  hover:rounded-[7px]'>Features</li>
          <li className=' cursor-pointer transition  duration-300 ease-in-out  flex justify-center items-center   h-[35px] w-[70px] hover:text-black hover:bg-white  hover:rounded-[7px]'>About</li>
          <li className=' cursor-pointer transition  duration-300 ease-in-out  flex justify-center items-center   h-[35px] w-[90px]  hover:text-black hover:bg-white  hover:rounded-[7px]'>Contact Us</li>
        </ul>
      </div>

      <div className=' absolute right-[15%] '>
          <input type="text" placeholder='Search' className='border rounded-[20px] pl-[20px] h-[35px] bg-white text-black' />
         <div className='absolute top-[10px] right-[20px]  text-black'><FaSearch /></div>
      </div>

      <button className='absolute right-[10%] text-[25px] cursor-pointer' onClick={()=>{
        setDark(!dark)
      }}> { dark ?<FaSun /> :<FaMoon />}</button>
      
    </div>
  )
}

export default Navbar