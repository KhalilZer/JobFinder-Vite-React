import React from 'react'
import {BiTimeFive} from "react-icons/bi"

import logo1 from "../../../public/assets/logo1.png"
import logo2 from "../../../public/assets/logo2.png"
import logo3 from "../../../public/assets/logo3.png"
import logo4 from "../../../public/assets/logo4.png"

const Jobs = () => {
  const Data=[
    {
      id:1,
      image:logo1,
      title:"Web developer",
      location :"Morocco",
      time:"Remote",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique excepturi nemo veritatis",
      company:"Company 1 campoany"
    },
    {
      id:2,
      image:logo2,
      title:"Designer",
      location :"Morocco",
      time:"Contract CDI",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique excepturi nemo veritatis",
      company:"Company 1 campoany"
    },
    {
      id:3,
      image:logo3,
      title:"Front End deev",
      location :"Morocco",
      time:"Full-time",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique excepturi nemo veritatis",
      company:"Company 1 campoany"
    },
    {
      id:4,
      image:logo4,
      title:"Full-Stack dev",
      location :"Morocco",
      time:"Part-time",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique excepturi nemo veritatis",
      company:"Company 1 campoany"
    }

  ]
  return (
    <div>
      <div className='jobContainer md:flex gap-4 grid gap-y-10 justify-center flex-wrap py-10'>

        {
          Data.map(({id,image,title,location,time,desc,company})=>{
            return(
              <div key={id} className="group  singleJob md:w-1/5  w-full  p-[20px] bg-white rounded-2xl hover:bg-blueColor shadow-xl
            shadow-gray-200 hover:shadow-lg">
              <span className='flex justify-between items-center gap-2'>
                <h1 className=' font-semibold text-gray-700 group-hover:text-white'>{title}</h1>
                <span className='flex gap-2 text-sm items-center text-gray-300'>
                  <BiTimeFive/> {time}
                </span>
                </span>
                <h1 className='text-gray-300'>{location}</h1>
                <p className='text-gray-500  pt-4 border-t-[2px] mt-4 group-hover:text-white'>
                 {desc}
                </p>
                <div className='company flex items-center gap-2 my-2'>
                  <img src={image} alt="company alt" className='w-10 p-2 bg-slate-50 rounded-lg' />
                  <span className='text-sm py-[1rem] block text-gray-800 group-hover:text-gray-100'>{company}</span>
                </div>
                <button className='border-gray-200 border px-4 p-2 rounded-xl  hover:bg-slate-100 hover:shadow-md hover:shadow-slate-400 w-full group-hover:text-gray-800 bg-white '>
                  Apply Now
                </button>
            </div> 
            )
          })
        }
      </div>
    </div>
  )
}

export default Jobs