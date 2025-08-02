import React from 'react'
import rasm29 from '../img/img-logo/rasm21.jpg'
import rasm30 from '../img/img-logo/rasm22.jpg'
import rasm31 from '../img/img-logo/rasm23.jpg'
import { Link } from 'react-router'
import { Elements } from '../Elements'
import { useTranslation } from 'react-i18next'
import useTitle from '../Components/Usetitle'

const New = () => {
  useTitle('newb')
  const { t } = useTranslation();

  return (
    <section className={`${Elements.Container}`}>   
      <div>
        <h2 className='text-2xl sm:text-3xl pb-10 sm:pb-14 pt-10 sm:pt-16 text-center sm:text-left'>
          {t('news.title')}
        </h2>

        {/* 1 */}
        <div>
          <div className='flex items-center'>
            <span className='text-xl sm:text-3xl font-semibold mr-6 sm:mr-12'>
              01
            </span>
            <span className='border border-[#4b4949] w-full my-8 sm:my-12'></span>
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-14 px-3'>
            <div className='w-full max-w-[750px] md:px-6 px-3 mx-auto md:ml-8 lg:ml-12'>
              <h3 className='text-green-500 text-xl sm:text-2xl my-5 sm:my-7'>
                {t('news.1.title')}
              </h3>
              <p className='my-5 sm:my-6'>
                {t('news.1.desc')}
              </p>
              <Link to='/New/MoreOne' className='text-[#6e6b6b] '>{t('news.learnMore')}</Link>
            </div>
            <div>
              <img src={rasm29} alt="" className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full" />
            </div>
          </div>
        </div>

        {/* 2 */}
        <div>
          <div className='flex items-center'>
            <span className='text-xl sm:text-3xl font-semibold mr-6 sm:mr-12'>
              02
            </span>
            <span className='border border-[#4b4949] w-full my-8 sm:my-12'></span>
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-14 px-3'>
            <div className='w-full max-w-[750px] md:px-6 px-3 mx-auto md:ml-8 lg:ml-12'>
              <h3 className='text-green-500 text-xl sm:text-2xl my-5 sm:my-7'>
                {t('news.2.title')}
              </h3>
              <p className='my-5 sm:my-6 text-wrap'>
                {t('news.2.desc')}
              </p>
              <Link to='/New/MoreTwo' className='text-[#6e6b6b] '>{t('news.learnMore')}</Link>
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
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-14 px-3'>
            <div className='w-full max-w-[750px] md:px-6 px-3 mx-auto md:ml-8 lg:ml-12'>
              <h3 className='text-green-500 text-xl sm:text-2xl my-5 sm:my-7'>
                {t('news.3.title')}
              </h3>
              <p className='my-5 sm:my-6'>
                {t('news.3.desc')}
              </p>
              <Link to='/New/MoreThree' className='text-[#6e6b6b] '>{t('news.learnMore')}</Link>
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

export default New
