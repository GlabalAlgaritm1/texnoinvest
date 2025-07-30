import React from 'react'
import { Elements } from '../Elements'
import Breadcrumb from '../Components/Breadcrumb'
import rasm1 from '../img/img-logo/rasm22.jpg'
import rasm30 from '../img/img-logo/rasm21.jpg'
import rasm31 from '../img/img-logo/rasm23.jpg'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

const MoreTwo = () => {
  const { t } = useTranslation()

  return (
    <section className={`${Elements.Container}`}>
      <h2 className='text-4xl font-sans py-3'>
        {t('moreTwo.title')}
      </h2>
      <Breadcrumb />
      <div>
        <div>
          <img className='w-full py-5' src={rasm1} alt="" />
        </div>
        <p className='text-lg font-semibold my-6'>
          {t('moreTwo.description')}
        </p>
        <span className='text-base font-semibold mb-8'>
          {t('moreTwo.goal')}
        </span>

        <h2 className='text-2xl my-5'>
          {t('moreTwo.seeAlso')}
        </h2>

        {/* 1 */}
        <div>
          <div className='flex items-center'>
            <span className='text-xl sm:text-3xl font-semibold mr-6 sm:mr-12'>
              01
            </span>
            <span className='border border-[#4b4949] w-full my-8 sm:my-12'></span>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-14 px-3'>
            <div className='w-full max-w-[750px] md:px-6 px-3 mx-auto lg:ml-12'>
              <h3 className='text-green-500 text-xl sm:text-2xl my-5 sm:my-7'>
                {t('moreOne.title')}
              </h3>
              <p className='my-5 sm:my-6'>
                {t('moreOne.description')}
              </p>
              <Link to='/New/MoreOne' className='text-[#6e6b6b]'>
                {t('newsA.learnMore')}
              </Link>
            </div>
            <div>
              <img src={rasm30} alt="" className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full" />
            </div>
          </div>
        </div>

        {/* 3 */}
        <div>
          <div className='flex items-center'>
            <span className='text-xl sm:text-3xl font-semibold mr-6 sm:mr-12'>
              03
            </span>
            <span className='border border-[#4b4949] w-full my-8 sm:my-12'></span>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-14 px-3'>
            <div className='w-full max-w-[750px] md:px-6 px-3 mx-auto lg:ml-12'>
              <h3 className='text-green-500 text-xl sm:text-2xl my-5 sm:my-7'>
                {t('newsA.3.title')}
              </h3>
              <p className='my-5 sm:my-6'>
                {t('newsA.3.desc')}
              </p>
              <Link to='/New/MoreThree' className='text-[#6e6b6b]'>
                {t('newsA.learnMore')}
              </Link>
            </div>
            <div>
              <img src={rasm31} alt="" className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreTwo
