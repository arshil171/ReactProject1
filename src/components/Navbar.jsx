import React from 'react'
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
    <div  className='flex relative'>
      <div><img src="" alt="" /></div>
      <div className='flex absolute  top-[20px] right-[170px] '>
        <ul className='flex border'>
          <li>Home</li>
          <li>Products</li>
          <li>Features</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className=' absolute right-[130px] top-[20px]'>
          <input type="text" placeholder='Search' className='border rounded-[20px] pl-[20px] h-[35px] bg-white text-black' />
         <div className='absolute top-[10px] right-[30px]'><FaSearch /></div>
      </div>

      <button>Dark</button>
    </div>
  )
}

export default Navbar