import React from 'react'
import logo1 from "../../../public/assets/logo1.png"
import work from "../../../public/assets/work.png"
import confidence from "../../../public/assets/confidence.png"
import idea from "../../../public/assets/idea.png"

const Value = () => {
  return (
    <div className='mb-10 mt-[6rem]'>
      <div className='flex justify-center'>
        <h1 className='text-gray-700 txt-[25px] py-4 pb-4 font-bold w-[400px] block '>The value that holds us true and to connect </h1>
      </div>
      <div className='md:grid gap-10 md:grid-cols-3 items-center my-4'>

        <div className='singleGrid rounded-xl p-4 hover:bg-slate-200'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-2 rounded-2xl bg-inherit h-10 w-10 flex items-center justify-center bg-green-50'>
              <img src={logo1} alt="" className='' />
            </div>
            <span className='font-semibold text-gray-700 text-sm'>Simplicity</span>
          </div>
          <p className='text-[12px] text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita aut facere eligendi </p>
        </div>

        

         <div className='singleGrid rounded-xl p-4 hover:bg-slate-200'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-2 rounded-2xl bg-inherit h-10 w-10 flex items-center justify-center bg-blue-100'>
              <img src={confidence} alt="" className='' />
            </div>
            <span className='font-semibold text-gray-700 text-sm'>Confidence</span>
          </div>
          <p className='text-[12px] text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita aut facere eligendi </p>
        </div>
         <div className='singleGrid rounded-xl p-4 hover:bg-slate-200'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-2 rounded-2xl bg-inherit h-10 w-10 flex items-center justify-center bg-yellow-100'>
              <img src={idea} alt="" className='' />
            </div>
            <span className='font-semibold text-gray-700 text-sm'>Smart Idea</span>
          </div>
          <p className='text-[12px] text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita aut facere eligendi </p>
        </div>
      </div>

      <div className='card mt-16 md:flex  grid place-items-center justify-between bg-slate-100 p-14  rounded-2xl '>
        <div>
          <h1 className='text-blueColor text-center md:text-left  text-[30px] font-bold'>
            Ready ! to swetch your career
          </h1>
          <h2 className='text-gray-700 text-center md:text-left text-[20px] font-bold '>
            Let's geet started
          </h2>
        </div>
         <button className='border-2 my-4 rounded-lg py-2 px-8 text-sm text-blueColor font-semibold border-blueColor hover:bg-white'>
            Get started
          </button>
      </div>
    </div>
  )
}

export default Value