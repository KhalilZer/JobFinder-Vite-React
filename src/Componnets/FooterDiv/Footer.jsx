import React from 'react'

import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter} from "react-icons/ai"
const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-xl gap-8 grid gap-y-8 md:gap-y-0 md:grid-cols-5  m-auto items-center justify-center'>
      <div>
          <div className="logoDiv">
              <h1 className='logo text-xl text-white pb-2'>
                <strong>Job</strong>Finder 
              </h1>
          </div>
          <p className='text-white pb-2  opacity-70 leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt delectus laudantium fugit libero .
          </p>
      </div> 

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-2 text-white'>
          Company
        </span>
        <div className='grid gap-3'>
           <li className='text-white opacity-60 hover:opacity-90'>About us</li>
           <li className='text-white opacity-60 hover:opacity-90'>Features</li>
           <li className='text-white opacity-60 hover:opacity-90'>News</li>
           <li className='text-white opacity-60 hover:opacity-90'>Faq</li>
        </div>
      </div>
       <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-2 text-white'>
          Support
        </span>
        <div className='grid gap-3'>
           <li className='text-white opacity-60 hover:opacity-90'>Account </li>
           <li className='text-white opacity-60 hover:opacity-90'>Support cnter</li>
           <li className='text-white opacity-60 hover:opacity-90'>Feedback</li>
           <li className='text-white opacity-60 hover:opacity-90'>Contact Us</li>
        </div>
      </div>
       <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-2 text-white'>
          Hello
        </span>
        <div className='grid gap-3'>
           <li className='text-white opacity-60 hover:opacity-90'>Events</li>
           <li className='text-white opacity-60 hover:opacity-90'>Promotions</li>
           <li className='text-white opacity-60 hover:opacity-90'>Req Demo</li>
           <li className='text-white opacity-60 hover:opacity-90'>Career</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-2 text-white'>
          Contact info
        </span>
        <div className=''>
          <small className='text-sm text-white opacity-50'>Khalilzerzour100@gmail.com</small>
        </div>
        <div className='icons flex gap-4 py-2'>
          <AiOutlineInstagram className='bg-white text-blueColor h-10 w-10 rounded-full p-2 hover:bg-slate-100 cursor-pointer'/>
          <AiOutlineFacebook className='bg-white text-blueColor h-10 w-10 rounded-full p-2 hover:bg-slate-100 cursor-pointer'/>
          <AiOutlineTwitter className='bg-white text-blueColor h-10 w-10 rounded-full p-2 hover:bg-slate-100 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Footer