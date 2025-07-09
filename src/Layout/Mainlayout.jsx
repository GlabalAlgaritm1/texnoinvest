import React from 'react'
import { Outlet } from 'react-router'
import Xeader from '../Components/Xeader'
import Footer from '../Components/Footer'
import { Elements } from '../Elements'

const Mainlayout = () => {
  return (
    <>
      <div className='bg-[#181818] text-white'>
        <div className={`${Elements.Container}`}>
          <Xeader />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Mainlayout