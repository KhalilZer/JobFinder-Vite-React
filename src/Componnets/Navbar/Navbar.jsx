import React from 'react'

const Navbar = () => {
  return (
    <div className='navBar flex justify-between p-[3rem] items-center'> 
        <div className="logoDiv">
            <h1 className='logo text-xl text-blueColor'>
              <strong>Job</strong>Finder 
            </h1>
        </div>
        <div className="hidden menu md:flex gap-8">
          <li className="menuList text-gray-600 hover:text-blueColor">Jobs</li>
          <li className="menuList text-gray-600 hover:text-blueColor">Companies</li>
          <li className="menuList text-gray-600 hover:text-blueColor">About</li>
          <li className="menuList text-gray-600 hover:text-blueColor">Login</li>
          <li className="menuList text-gray-600 hover:text-blueColor">Register</li>
        </div> 
    </div>
  )
}

export default Navbar