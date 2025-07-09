import React from 'react'
import logofooter from '../img/img-logo/logo-footer.svg'
import { Link } from 'react-router'
const Footer = () => {
  return (
    <footer className='py-10 flex items-center gap-x-32'>
      <div className="flex items-center gap-x-20 pt-2">
        <Link to='/'>
          <img className='w-[271px] h-20' src={logofooter} alt="Site Logo" />
        </Link>
        <div className="flex flex-col">
          <h2 className='text-2xl'>
            Navigation
            <hr className='w-7 h-1 bg-green-700 mt-2' />
          </h2>
          <nav className='flex flex-col items-start gap-y-2 mt-2'>
            <Link to='/' className='text-sm font-semibold '>Home</Link>
            <Link to='/services' className='text-sm font-semibold'>Services</Link>
            <Link to='/faq' className='text-sm font-semibold'>FAQ</Link>
            <Link to='/news' className='text-sm font-semibold'>News</Link>
            <Link to='/career' className='text-sm font-semibold'>Career</Link>
            <Link to='/contact' className='text-sm font-semibold'>Get in touch</Link>
          </nav>
        </div>
      </div>
      <div>
      <div className="flex flex-col">
          <h2 className='text-2xl'>
            Navigation
            <hr className='w-7 h-1 bg-green-700 mt-2' />
          </h2>
          <nav className='flex flex-col items-start gap-y-2 mt-2'>
            <Link to='/' className='text-sm font-semibold '>Production of double-glazed windows</Link>
            <Link to='/services' className='text-sm font-semibold'>Laminated glass(Triplex)</Link>
            <Link to='/faq' className='text-sm font-semibold'>Float glass processing</Link>
            <Link to='/news' className='text-sm font-semibold'>Bend glass</Link>
          </nav>
        </div>
      </div>
      <div>
      <nav className='flex flex-col items-start gap-y-2 mt-2'>
            <Link to='/' className='text-sm font-semibold '>Production of double-glazed windows</Link>
            <Link to='/services' className='text-sm font-semibold'>Laminated glass(Triplex)</Link>
            <Link to='/faq' className='text-sm font-semibold'>Float glass processing</Link>
            <Link to='/news' className='text-sm font-semibold'>Bend glass</Link>
          </nav>
      </div>
      <hr className='my-12 border-[#4b4949]' />
    </footer>
  )
}

export default Footer