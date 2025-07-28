import React from 'react'
import rasm29 from '../img/img-logo/rasm21.jpg'
import rasm30 from '../img/img-logo/rasm22.jpg'
import rasm31 from '../img/img-logo/rasm23.jpg'
import { Link } from 'react-router'
import { Elements } from '../Elements'

const New = () => {
  return (
    <section className={`${Elements.Container}`}>
      <div>
        <h2 className='text-3xl py-4'>
          News
        </h2>

        {/* 1 */}

        <div>
          <div className='flex items-center'>
            <span className='text-3xl font-semibold mr-12'>
              01
            </span>
            <span className='border border-[#4b4949] w-full my-12'></span>
          </div>
          <div className='flex items-center gap-14'>
            <div className='w-full max-w-[750px] px-5 mx-auto  ml-12'>
              <h3 className='text-green-500 text-2xl my-7'>
                Hot promotion on glass products 10 mm with <br /> tempering
              </h3>
              <p className='my-6'>Hurry up to purchase 10 mm tempered glass products at a super price - 145,000 sum/sq.m. The promotion is valid for any volume. Production time - up to 7 <br /> working days. Hurry! The promotion period is limited.
              </p>
              <Link className='text-[#6e6b6b]' to='/NewOne'>Learn more</Link>
            </div>
            <div>
              <img src={rasm29} alt="" />
            </div>
          </div>
        </div>

        {/* 2 */}

        <div>
          <div className='flex items-center'>
            <span className='text-3xl font-semibold mr-12'>
              02
            </span>
            <span className='border border-[#4b4949] w-full  my-12'></span>
          </div>
          <div className='flex items-center gap-14'>
            <div className='w-full max-w-[750px] px-5 mx-auto  ml-12'>
              <h3 className='text-green-500 text-2xl my-7'>
                Promotion on double-glazed windows!
              </h3>
              <p className='my-6'>
                Dear friends! We hasten to please you with amazing news. Do you want to save money when ordering double-glazed windows?
                IP LLC “TEXNOINVEST-ST” announces the start of a Super Promotion!
              </p>
              <Link className='text-[#6e6b6b] '>Learn more</Link>
            </div>
            <div>
              <img src={rasm30} alt="" />
            </div>
          </div>
        </div>

        {/* 3 */}

        <div>
          <div className='flex items-center'>
            <span className='text-3xl font-semibold mr-12'>
              03
            </span>
            <span className='border border-[#4b4949] w-full  my-12'></span>
          </div>
          <div className='flex items-center gap-14'>
            <div className='w-full max-w-[750px] px-5 mx-auto  ml-12'>
              <h3 className='text-green-500 text-2xl my-7'>
                New printer
              </h3>
              <p className='my-6'>
                The latest digital printing technologies have long gone beyond conventional printing. Today, one of the increasingly popular areas of digital printing is glass printing. Our company is in a hurry to share great news with you!
              </p>
              <Link className='text-[#6e6b6b] '>Learn more</Link>
            </div>
            <div>
              <img src={rasm31} alt="" />
            </div>
          </div>
        </div>

      </div>

      <hr className='my-12 border-[#4b4949]' />
    </section>
  )
}

export default New