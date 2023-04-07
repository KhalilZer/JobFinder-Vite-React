import React from 'react'
import Navbar from './Componnets/Navbar/Navbar';
import Search from './Componnets/SearchDiv/Search';
import Jobs from './Componnets/JobDiv/Jobs';
import Value from './Componnets/ValueDiv/Value';
import Footer from './Componnets/FooterDiv/Footer';

const App = () => {
  return (
    <div className='w-[90%] m-auto bg-white'>
      <Navbar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App