import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-[100%] h-[50vh] border absolute bottom-[0px] flex justify-center'> 
        <div className='border w-[30%] h-[90%] flex flex-col items-center justify-center'>
           <div className='w-[80%] mb-[40px]'><img src="https://th.bing.com/th/id/OIP.zgqxAymMmtbUFaxrM6fQ1wHaDl?w=338&h=169&c=7&r=0&o=7&pid=1.7&rm=3" alt="" className='w-[200px] ' /> </div> 
            <p className='w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sapiente blanditiis illo quas ab quod fuga?</p>
            <div className=' w-[80%] flex justify-between mt-[30px]'>
                <button className='w-[50px] h-[50px] border rounded-[50%] text-[50px] flex items-center justify-center text-blue-700' ><FaFacebook /></button>
                <button  className='w-[50px] h-[50px] border rounded-[50%] text-[50px] flex items-center justify-center text-blue-400' ><AiFillTwitterCircle /></button>
                <button  className='w-[50px] h-[50px] border rounded-[50%] text-[30px] flex items-center justify-center bg-red-400 text-white' ><FaInstagram /></button>
                <button  className='w-[50px] h-[50px] border rounded-[50%] text-[30px] flex items-center justify-center  bg-blue-800 text-white' ><FaLinkedinIn /></button>
            </div>
        </div>

        <div className='border w-[20%] h-[90%] flex flex-col justify-center '>
            <h6 className='text-[20px] mb-[30px] text-blue-900'>Quick Links</h6>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Testimotional</li>
                <li>Contact</li>
            </ul>
        </div>


        <div className='border w-[20%] h-[90%]'>
            <h6>Services</h6>

            <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Seo Optimization</li>
                <li>Blog Writing</li>
            </ul>
        </div>

        <div className='border w-[20%] h-[90%]'>
            <h6>Help & Support</h6>

            <ul>
                <li>Support Center</li>
                <li>Live Chat</li>
                <li>FAQ</li>
                <li>Terms & conditions</li>
            </ul>
        </div>

  
        <p className='flex border w-[100%] h-[10%] absolute bottom-0 justify-center items-center'>@Design and Developed by Arshil</p>
    </div>
  )
}

export default Footer