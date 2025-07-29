import React from 'react'
import logofooter from '../img/img-logo/logo-footer.svg'
import { Link } from 'react-router'
import { Elements } from '../Elements'

const Footer = () => {
  return (
    <footer className={`${Elements.Container} text-white pt-5 `}>
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-col md:gap-0 justify-between gap-10 border-t border-gray-700 pt-10 pb-8 md:pb-4">
        
        {/* Logo Block */}
        <div className="flex flex-col mt-20 md:mt-0 ">
          <Link to="/">
            <img className="h-20 md:hidden" src={logofooter} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Block */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-medium">Navigation</h2>
          <hr className="w-8 h-1 bg-green-600 mt-2 mb-3" />
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-lg hover:text-green-500">Home</Link>
            <Link to="/services" className="text-lg hover:text-green-500">Services</Link>
            <Link to="/faq" className="text-lg hover:text-green-500">FAQ</Link>
            <Link to="/news" className="text-lg hover:text-green-500">News</Link>
            <Link to="/career" className="text-lg hover:text-green-500">Career</Link>
            <Link to="/contact" className="text-lg hover:text-green-500">Get in touch</Link>
          </nav>
        </div>

        {/* Production Columns */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left part */}
          <div>
            <h2 className="text-2xl font-medium">Production</h2>
            <hr className="w-8 h-1 bg-green-600 mt-2 mb-3" />
            <nav className="flex flex-col gap-2">
              <Link to="/production" className="text-lg hover:text-green-500">Production of double-glazed windows</Link>
              <Link to="/Laminated" className="text-lg hover:text-green-500">Laminated glass (Triplex)</Link>
              <Link to="/Float" className="text-lg hover:text-green-500">Float glass processing</Link>
              <Link to="/Bend" className="text-lg hover:text-green-500">Bent glass</Link>
            </nav>
          </div>

          {/* Right part */}
          <div className="mt-10 md:mt-12">
            <nav className="flex flex-col gap-2">
              <Link to="/Fasade" className="text-lg hover:text-green-500">Facade glazing</Link>
              <Link to="/Artistic" className="text-lg hover:text-green-500">Artistic stained glass</Link>
              <Link to="/ArtisticM" className="text-lg hover:text-green-500">Artistic metal forging</Link>
              <Link to="/Furniture" className="text-lg hover:text-green-500">Furniture making</Link>
              <Link to="/Plastic" className="text-lg hover:text-green-500">Plastic and aluminum windows</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Lower Bar */}
      <div className="border-t border-gray-700 mt-4">
       <div className={`${Elements.Container} py-4 px-6 flex flex-col md:flex-col md:items-start justify-between items-center text-sm`}>
       <p className='text-base'>© 2004 - 2025 «TECHNOINVEST-ST» LLC</p>
       <Link target='_blank' to='https://velvet.uz/' className='text-base hover:text-green-600'>Website development – Velvet Solutions</Link>
       </div>
      </div>
    </footer>
  )
}

export default Footer
