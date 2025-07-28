import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Xeader from '../Components/Xeader'
import Footer from '../Components/Footer'

const Mainlayout = () => {
  return (
    <div className='bg-[#181818] text-white'>
      <Xeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Mainlayout
