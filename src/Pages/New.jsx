import React from 'react'
import rasm29 from '../img/img-logo/rasm21.jpg'
import rasm30 from '../img/img-logo/rasm22.jpg'
import rasm31 from '../img/img-logo/rasm23.jpg'
import { Link } from 'react-router'
import { Elements } from '../Elements'
import { useTranslation } from 'react-i18next'

const New = () => {
    const { t } = useTranslation();
  
  return (
    <section className={`${Elements.Container}`}>   
      <div>
             <h2 className='text-3xl pb-14 pt-16'>
               {t('news.title')}
             </h2>
     
             {/* 1 */}
     
             <div>
               <div className='flex items-center'>
                 <span className='text-3xl font-semibold mr-12'>
                   01
                 </span>
                 <span className='border border-[#4b4949] w-full my-12'></span>
               </div>
               <div className='flex flex-col lg:flex-row items-center gap-14'>
                 <div className='w-full max-w-[750px] px-5 mx-auto  ml-12'>
                   <h3 className='text-green-500 text-2xl my-7'>
                     {t('news.1.title')}
                   </h3>
                   <p className='my-6'>{t('news.1.desc')}
                   </p>
                   <Link className='text-[#6e6b6b] '>{t('news.learnMore')}</Link>
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
               <div className='flex flex-col lg:flex-row items-center gap-14'>
                 <div className='w-full max-w-[750px] px-5 mx-auto  ml-12'>
                   <h3 className='text-green-500 text-2xl my-7'>
                   {t('news.2.title')}
                   </h3>
                   <p className='my-6 text-wrap'>
                   {t('news.2.desc')}
                   </p>
                   <Link className='text-[#6e6b6b] '>{t('news.learnMore')}</Link>
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
                 <span className='border border-[#4b4949] w-full my-12'></span>
               </div>
               <div className='flex flex-col lg:flex-row items-center gap-14'>
                 <div className='w-full max-w-[750px] px-5 mx-auto  ml-12'>
                   <h3 className='text-green-500 text-2xl my-7'>
                     {t('news.3.title')}
                   </h3>
                   <p className='my-6'>
                     {t('news.3.desc')}
                   </p>
                   <Link className='text-[#6e6b6b] '>{t('news.learnMore')}</Link>
                 </div>
                 <div>
                   <img src={rasm31} alt="" />
                 </div>
               </div>
             </div>
     
           </div>

    </section>
  )
}

export default New