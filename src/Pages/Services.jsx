import React from 'react'
import rasm3 from '../img/img-logo/uch.svg'
import rasm6 from '../img/img-logo/olti.svg'
import rasm9 from '../img/img-logo/toqiz.svg'
import rasm13 from '../img/img-logo/onuch.svg'
import rasm10 from '../img/img-logo/on.svg'
import rasm4 from '../img/img-logo/tort.svg'
import rasm7 from '../img/img-logo/yetti.svg'
import rasm11 from '../img/img-logo/onbir.svg'
import rasm5 from '../img/img-logo/besh.svg'
import { Link } from 'react-router'

const Services = () => {
  return (
    <section>
         {/* 5 */}

      <div>
        <h2 className='text-3xl py-8'>
          Production
        </h2>

        <div className="grid grid-cols-3 gap-7">
          <Link className='flex items-start gap-2'>
            <img src={rasm3} alt="" />
            <p className='text-xl'>
              Construction glass
            </p>
          </Link>

          <Link className='flex items-start gap-2'>
            <img src={rasm6} alt="" />
            <p className='text-xl'>
              Bent glass
            </p>
          </Link>
          <Link className='flex items-start gap-2'>
            <img src={rasm10} alt="" />
            <p className='text-xl'>
              Construction glass
            </p>
          </Link>
          <Link className='flex items-start gap-2'>
            <img src={rasm4} alt="" />
            <p className='text-xl'>
              Construction glass
            </p>
          </Link>

          <Link className='flex items-start gap-2'>
            <img src={rasm7} alt="" />
            <p className='text-xl'>
              Construction glass
            </p>
          </Link>
          <Link className='flex items-start gap-2'>
            <img src={rasm11} alt="" />
            <p className='text-xl'>
              Construction glass
            </p>
          </Link>
          <Link className='flex items-start gap-2'>
            <img src={rasm5} alt="" />
            <p className='text-xl'>
              Construction glass
            </p>
          </Link>
          <Link className='flex items-start gap-2'>
            <img src={rasm9} alt="" />
            <p className='text-xl'>
              Construction glass
            </p>
          </Link>
          <Link className='flex items-start gap-2'>
            <img src={rasm13} alt="" />
            <p className='text-xl'>
              Construction glass
            </p>
          </Link>
        </div>
      </div>
      <hr className='mt-10'/>
    </section>
  )
}

export default Services