import React from 'react'
import {AiOutlineSearch,AiOutlineCloseCircle,AiOutlineHome} from "react-icons/ai"
import {CiLocationOn} from "react-icons/ci"
const Search = () => {
  return (
    <div className='searchDiv md:grid gap-y-6 md:gap-10 bg-gray-100 rounded-xl p-[3rem]'>
        <form action="" method="get">
          <div className='firstDiv md:flex grid grid-rows-4 gap-1  justify-between items-center rounded-xl md:gap-[10px] bg-white p-5 shadow-lg shadow-gray-300'>
            <div className='flex gap-4 items-center my-4 md:py-0'>
              <AiOutlineSearch className='text-2xl icon'/>
              <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search a job' />
              <AiOutlineCloseCircle className='text-2xl icon text-gray-300 hover:text-gray-800'/>
            </div>
            
             <div className='flex gap-4 items-center'>
              <AiOutlineHome className='text-2xl icon'/>
              <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by companie' />
              <AiOutlineCloseCircle className='text-2xl icon text-gray-300 hover:text-gray-800'/>
            </div>

             <div className='flex gap-4 items-center'>
              <CiLocationOn className='text-2xl icon'/>
              <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by location' />
              <AiOutlineCloseCircle className='text-2xl icon text-gray-300 hover:text-gray-800'/>
            </div>
            <button className='bg-blueColor h-10 p-x px-10 rounded-2xl text-white cursor-pointer hover:bg-blue-400'>Search</button>
          </div>
        </form>

        <div className='secDiv md:flex hidden items-center justify-center gap-10'>
          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor="relevance" className='text-gray-400 font-semibold'>
              Sort By : 
            </label>
            <select name="" id="relevance" className='bg-white rounded-xl px-4 py-2'>
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Start with</option>
              <option value="">Contains</option>
            </select>
          </div>

          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor="type" className='text-gray-400 font-semibold'>
              Type : 
            </label>
            <select name="" id="type" className='bg-white rounded-xl px-4 py-2'>
              <option value="">Full-time</option>
              <option value="">Part-time</option>
              <option value="">Remote</option>
              <option value="">Contract (CDI, CDD)</option>
            </select>
          </div>

          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor="level" className='text-gray-400 font-semibold'>
              Level
            </label>
            <select name="" id="level" className='bg-white rounded-xl px-4 py-2'>
              <option value="">Beginner</option>
              <option value="">Advance</option>
              <option value="">Junior</option>
              <option value="">Senior</option>
            </select>
          </div>
          <span className='text-gray-400 cursor-pointer'>Clear all</span>
        </div>
        
    </div>
  )
}

export default Search