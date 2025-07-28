import React from 'react'
import { Link, NavLink } from 'react-router'
import Logo from '../img/img-logo/Logo-header.svg'
import { Elements } from '../Elements'

const Xeader = () => {
  return (
    <>
<header className={`${Elements.Container}`}>
      <section>
        <div className="flex items-center justify-between pt-[13px] pb-5">
          <Link to='/' className='flex'>
            <i className="bi bi-pin-map-fill"></i>
            <p className='ml-1'>
              Tashkent city, Bektemir district, Akhangaran highway street
            </p>
          </Link>
          <Link to='tel:+998712957771' className='flex items-center'>
            <i className="bi bi-telephone-fill"></i>
            <p className='ml-1'>
              +998 71 295 77 71
            </p>
          </Link>
          <Link to='mailto:info@texnoinvest.uz' className='flex items-center'>
            <i className="bi bi-envelope-open"></i>
            <p className='ml-1'>
              info@texnoinvest.uz
            </p>
          </Link>
          <ul className='flex items-center font-sans'>
            <li>
              <Link to='/ru'>
                <p>Puccкий</p>
              </Link>
            </li>
            <i className="bi bi-slash ps-2"></i>
            <li className='ml-1'>
              <Link to='/en'>
                <p>English</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </header>
    <div className={`${Elements.Container} sticky top-0 overflow-hidden z-50 bg-[#181818]`}>
       <div className="flex items-center justify-between pt-2">
          <Link to='/'>
            <img src={Logo} alt="Site Logo" />
          </Link>
          <nav className='flex items-center gap-8'>
            <NavLink to='/' className='text-lg font-semibold text-gray-400'>Home</NavLink>
            <NavLink to='/Services' className='text-lg font-semibold text-gray-400'>Services</NavLink>
            <NavLink to='/Faq' className='text-lg font-semibold text-gray-400'>FAQ</NavLink>
            <NavLink to='/New' className='text-lg font-semibold text-gray-400'>News</NavLink>
            <NavLink to='/Career' className='text-lg font-semibold text-gray-400'>Career</NavLink>
            <NavLink to='/Get' className='text-lg font-semibold text-gray-400'>Get in touch</NavLink>
          </nav>
        </div>
       </div>
    </>
    
  )
}

export default Xeader
