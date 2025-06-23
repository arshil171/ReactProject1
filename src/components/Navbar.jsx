import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";


const Navbar = () => {
  return (
    <div  className='flex relative border h-[70px] items-center bg-black text-white'>
      <div><img src="" alt="" /></div>
      <div className='flex absolute  h-[70px] left-[25%] w-[45%]  items-center justify-between '>
        <ul className='flex  w-[100%] justify-between'>
          <li>Home</li>
          <li>Products</li>
          <li>Features</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className=' absolute right-[15%] '>
          <input type="text" placeholder='Search' className='border rounded-[20px] pl-[20px] h-[35px] bg-white text-black' />
         <div className='absolute top-[10px] right-[20px]  text-black'><FaSearch /></div>
      </div>

      <button className='absolute right-[10%] text-[25px] cursor-pointer'><FaMoon /></button>
    </div>
  )
}

export default Navbar