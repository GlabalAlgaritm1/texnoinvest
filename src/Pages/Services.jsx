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
import { Elements } from '../Elements'
import { useTranslation } from 'react-i18next'

const Services = () => {
    const { t } = useTranslation();
  
  return (
    <section>
    <div className={`${Elements.Container}`}>
            <h2 className='text-3xl pb-14 pt-16'>
              {t('production.title')}
            </h2>
    
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-7">
              <Link className='flex items-start gap-2'>
                <img src={rasm3} alt="" />
                <p className='text-xl'>
                  {t('production.items.glass')}
                </p>
              </Link>
    
              <Link className='flex items-start gap-2'>
                <img src={rasm6} alt="" />
                <p className='text-xl'>
                  {t('production.items.double')}
                </p>
              </Link>
              <Link className='flex items-start gap-2'>
                <img src={rasm10} alt="" />
                <p className='text-xl'>
                  {t('production.items.laminated')}
                </p>
              </Link>
              <Link className='flex items-start gap-2'>
                <img src={rasm4} alt="" />
                <p className='text-xl'>
                  {t('production.items.bent')}
                </p>
              </Link>
    
              <Link className='flex items-start gap-2'>
                <img src={rasm7} alt="" />
                <p className='text-xl'>
                  {t('production.items.plastic')}
                </p>
              </Link>
              <Link className='flex items-start gap-2'>
                <img src={rasm11} alt="" />
                <p className='text-xl'>
                  {t('production.items.processing')}
                </p>
              </Link>
              <Link className='flex items-start gap-2'>
                <img src={rasm5} alt="" />
                <p className='text-xl'>
                  {t('production.items.furniture')}
                </p>
              </Link>
              <Link className='flex items-start gap-2'>
                <img src={rasm9} alt="" />
                <p className='text-xl'>
                  {t('production.items.forging')}
                </p>
              </Link>
              <Link className='flex items-start gap-2'>
                <img src={rasm13} alt="" />
                <p className='text-xl'>
                  {t('production.items.stained')}
                </p>
              </Link>
            </div>
          </div>
    </section>
  )
}

export default Services