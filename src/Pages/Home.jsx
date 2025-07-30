import React, { useState } from 'react';
import rasm1 from '../img/img-logo/bir.png';
import rasm2 from '../img/img-logo/ikki.png'
import rasm3 from '../img/img-logo/uch.svg'
import rasm4 from '../img/img-logo/tort.svg'
import rasm5 from '../img/img-logo/besh.svg'
import rasm6 from '../img/img-logo/olti.svg'
import rasm7 from '../img/img-logo/yetti.svg'
import rasm9 from '../img/img-logo/toqiz.svg'
import rasm10 from '../img/img-logo/on.svg'
import rasm11 from '../img/img-logo/onbir.svg'
import rasm13 from '../img/img-logo/onuch.svg'
import rasm14 from '../img/img-logo/rasm14.svg'
import rasm15 from '../img/img-logo/rasm15.svg'
import rasm16 from '../img/img-logo/rasm16.svg'
import rasm17 from '../img/img-logo/rasm17.svg'
import rasm18 from '../img/img-logo/rasm18.svg'
import rasm19 from '../img/img-logo/rasm20.svg'
import rasm21 from '../img/img-logo/Untitled-1.jpg'
import rasm22 from '../img/img-logo/Untitled-2.jpg'
import rasm23 from '../img/img-logo/Untitled-3.jpg'
import rasm24 from '../img/img-logo/Untitled-4.jpg'
import rasm25 from '../img/img-logo/Untitled-5.jpg'
import rasm26 from '../img/img-logo/Untitled-6.jpg'
import rasm27 from '../img/img-logo/Untitled-7.jpg'
import rasm28 from '../img/img-logo/Untitled-8.jpg'
import rasm29 from '../img/img-logo/rasm21.jpg'
import rasm30 from '../img/img-logo/rasm22.jpg'
import rasm31 from '../img/img-logo/rasm23.jpg'




import { Link } from 'react-router';
import { Elements } from '../Elements';
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation();

  const years = [
    2004, 2005, 2006, 2007, 2008, 2009, 2010,
    2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021, 2022,
  ];

  // Faqat shu qator o'zgardi:
  const [selectedYear, setSelectedYear] = useState(years[years.length - 1]);

  // Yillar bo'yicha ma'lumotlar
  const yearData = {
    2004: "The German company 'Steinert Industries GmbH' launched large-scale construction of a glass processing plant. In October, the opening of the Plant took place under the legal name of 'Texnoinvest-ST' LLC",
    2005: "Launch of a high-tech glass cutting line of BYSTRONIC MASCHINEN AG (Switzerland) and launch of an automated line for the production of double-glazed windows. We are taking part in the glazing of the Northern Train-station in Tashkent.",
    2006: "Active development of the enterprise, and installation of glass edge processing equipment. Installation of waterjet cutting, which made it possible to begin the process of cutting complex shapes without restrictions on thickness and material. Installation of a glass tempering furnace, making glass safe to use in interiors.",
    2007: "A new direction in work, the production of glass partitions, doorways, shower stalls and glazing using safety tempered glass. Launch of a furniture workshop based entirely on automated equipment from the best German companies such as ALTENDORF and BRANDT. Launch of a metal structures workshop. We glazed the building of the Uzexportcenter and also completed many forged elements on the territory of the Uzexportcenter.",
    2008: "Expansion of production capabilities, production of laminated and curved glass. Launch of a line for the production of plastic PVC windows made from German profiles (Funke Kunststoffe GmbH).",
    2009: "In response to the demand not only for durable but also for beautiful, decorative glass, artistic glass processing is actively developing. We purchased and installed glass tempering furnaces and are developing a new direction – fusing. We installed equipment for the production of stained glass and began producing glass products under the TECHNOART brand. We purchased an automatic installation for sandblasting glass.",
    2010: "We are increasing the production volume of the double-glazed window line by 30%. The BEELINE head office in Tashkent was glazed.",
    2011: "We increased the production volume of tempered glass, producing over 250,000 sq.m. per year. The MTS head office building in Tashkent was glazed.",
    2012: "Improved the quality of products. The best specialists of the enterprise completed internships in Germany, Russia, and Kyrgyzstan.",
    2013: "The Museum of the Armed Forces in Tashkent was glazed. Active work is underway to glaze luxury real estate in new buildings in the city of Tashkent, using energy-saving double-glazed windows.",
    2014: "Global and interesting work was carried out: together with the Caravan Group company, they reconstructed the CIP airport building and VIP lounges. Completed over 3,000 private orders.",
    2015: "A contract was signed for the glazing of terminal 3 of the Tashkent airport. Glazing of the central bazaar 'Alai' in Tashkent.",
    2016: "We have increased the production volume of double-glazed windows; we produce double-glazed windows for plastic windows (over 900 packages per shift). We produced a lot of glass products for objects related to the SCO 2016 summit in Tashkent.",
    2017: "Active development of the furniture workshop. Installation of a new Italian machine ROVER A SMART for wood processing. Now the plant provides services for the production of many types of wood products (tables, chairs, display cases, sideboards, cabinets, cabinet, beds), as well as the production of ornaments and patterns of any complexity.",
    2018: "We increased the production volume of double-glazed windows (over 900 packages per shift) for plastic windows. We launched the first printer in Uzbekistan that prints on glass with ceramic inks of the DIP-Tech brand.",
    2019: "The plant of Technoinvest-ST LLC is a multi-industry complex that has become one of the leading enterprises in Uzbekistan in the industrial glass processing market. The experience of the company's employees, combined with its technical equipment, guarantees high-quality products and fulfillment of orders in the shortest possible time.",
    2020: "Despite the global pandemic, Technoinvest-ST LLC continues to actively increase production and sales volumes, guaranteeing high quality and fast order fulfillment times. For the first time in Uzbekistan, modern sun protection and multifunctional double-glazed windows with increased energy efficiency are presented.",
    2021: "The company has opened an additional glass processing workshop and installed a lot of necessary equipment. A new multifunctional machine from the Italian company Intermac was also installed. Now the plant has the ability to fulfill twice as many orders in the same time frame.",
    2022: "Technoinvest-ST LLC begins working with large construction companies. Thus, the glazing of the Infinity residential complex and the Dynasty residential complex (Golden House) was carried out, and together with Enter Engineering, the glazing of hotels and centers was carried out for the SCO summit in Samarkand. In addition, more than 1,500 orders for the production of glass products have been completed.",
  };

  return (
    <section className={`${Elements.Container} py-10 md:py-0`}>

      {/* 1 */}

      <div className="flex flex-col lg:flex-row gap-10 md:gap-0 lg:gap-10 pt-5">
        <div className="flex flex-col space-y-3">
          <h1 className="text-5xl mb-2 max-md:mb-0 max-md:text-4xl max-sm:text-4xl">{t('title')}</h1>
          <p className="w-full text-xl max-w-[680px]  md:text-base md:max-w-[480px]">{t('description')}
          </p>
          <div>
            <button className="bg-green-500 border inline-block border-black my-10 p-3 py-10 rounded-full hover:bg-green-700 hover:transition-all hover:duration-200 md:my-3">
              {t('button')}
            </button>
          </div>
        </div>
        <div className="col-lg-6 text-center md:mx-auto md:col-lg-0">
          <img
            className="w-80 border-none bg-transparent rounded-full object-contain shadow-2xl shadow-green-500"
            src={rasm1}
            alt="Glass Building"
          />
        </div>
      </div>

      {/* 2 */}

      <div>
        <h2 className='text-4xl max-sm:text-3xl mt-2'>
          {t('indicators.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5 mt-6">
          <div className='flex flex-col border-t-2 border-gray-400 space-y-5 pt-4'>
            <span className='font-semibold text-4xl text-green-500'>19</span>
            <span>  {t('indicators.years')}</span>
          </div>
          <div className='flex flex-col border-t-2 border-gray-400 space-y-5 pt-4'>
            <span className='font-semibold text-4xl text-green-500'>3000+</span>
            <span>  {t('indicators.clients')}</span>
          </div>
          <div className='flex flex-col border-t-2 border-gray-400 space-y-5 pt-4'>
            <span className='font-semibold text-4xl text-green-500'>200</span>
            <span>{t('indicators.employees')}</span>
          </div>
          <div className='flex flex-col border-t-2 border-gray-400 space-y-5 pt-4'>
            <span className='font-semibold text-4xl text-green-500'>2000</span>
            <span>{t('indicators.objects')}</span>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="pt-10">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-10 lg:grid-cols-8 xl:grid-cols-16 gap-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`rounded-full w-20 h-20 border border-black/5 ${selectedYear === year ? 'bg-green-500 text-white' : 'bg-transparent'
                }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Tanlangan yil ma'lumoti */}
        <div className="mt-6 p-4 text-center">
          <p className="text-lg w-full max-w-[450px] mx-auto">
            {t(`history.years.${selectedYear}`)}
          </p>

        </div>
      </div>

      {/* 4 */}

      <div>
        <h2 className='text-6xl font-semibold text-center pb-2 mt-3 max-sm:hidden'>{t('history.title')}</h2>
        <div
          className="w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${rasm2})` }}
        >
        </div>
      </div>

      {/* 5 */}

      <div>
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

      {/* 6 */}

      <div>
        <h2 className='text-3xl pb-14 pt-16'>
          {t('choose.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
          <div className='border border-[#222121]  flex flex-col items-center p-5'>
            <img className='pb-2' src={rasm14} alt="" />
            <p className='w-full text-center'>
              {t('choose.points.capabilities')}
            </p>
          </div>
          <div className='border border-[#222121]  flex flex-col items-center p-5'>
            <img className='pb-2' src={rasm15} alt="" />
            <p>
              {t('choose.points.quality')}
            </p>
          </div>
          <div className='border border-[#222121]  flex flex-col items-center p-5'>
            <img className='pb-2' src={rasm16} alt="" />
            <p>
              {t('choose.points.delivery')}
            </p>
          </div>
          <div className='border border-[#222121]  flex flex-col items-center p-5'>
            <img className='pb-2' src={rasm17} alt="" />
            <p>
              {t('choose.points.specialists')}
            </p>
          </div>
          <div className='border border-[#222121]  flex flex-col items-center p-5'>
            <img className='pb-2' src={rasm18} alt="" />
            <p>
              {t('choose.points.experience')}
            </p>
          </div>
          <div className='border border-[#222121]  flex flex-col items-center p-5'>
            <img className='pb-2' src={rasm19} alt="" />
            <p>
              {t('choose.points.speed')}
            </p>
          </div>

        </div>
      </div>

      {/* 7 */}

      <div>
        <h2 className='text-3xl pb-14 pt-16'>
          {t('work.title')}
        </h2>
        <div className='grid grid-cols-3 gap-5 max-sm:gap-1 max-sm:pb-4 pb-8'>
          <img className='w-full h-[347px] max-md:w-[216px] max-md:h-[253px] max-sm:w-[83px] max-sm:h-[97px]' src={rasm21} alt="" />
          <img className='w-full h-[347px] max-md:w-[216px] max-md:h-[253px] max-sm:w-[83px] max-sm:h-[97px]' src={rasm22} alt="" />
          <img className='w-full h-[347px] max-md:w-[216px] max-md:h-[253px] max-sm:w-[83px] max-sm:h-[97px] ' src={rasm23} alt="" />
        </div>
        <div className='grid grid-cols-2 gap-5 max-sm:gap-1 max-sm:pb-4 pb-8'>
          <img className='w-full h-[273px] max-md:w-[336px] max-md:h-[201px] max-sm:w-[136px] max-sm:h-[81px]' src={rasm24} alt="" />
          <img className='w-full h-[273px] max-md:w-[336px] max-md:h-[201px] max-sm:w-[136px] max-sm:h-[81px]' src={rasm25} alt="" />
        </div>
        <div className='grid grid-cols-3 gap-5 max-sm:gap-1 max-sm:pb-4 pb-8'>
          <img className='w-full h-[477px] max-md:w-[216px] max-md:h-[253px] max-sm:w-[83px] max-sm:h-[97px]' src={rasm26} alt="" />
          <img className='w-full h-[477px] max-md:w-[216px] max-md:h-[253px] max-sm:w-[83px] max-sm:h-[97px]' src={rasm27} alt="" />
          <img className='w-full h-[477px] max-md:w-[216px] max-md:h-[253px] max-sm:w-[83px] max-sm:h-[97px]' src={rasm28} alt="" />
        </div>
      </div>

      {/* 8 */}

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
                   <Link className='text-[#6e6b6b] '>{t('news.learnMore')}</Link>
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
                   <Link className='text-[#6e6b6b] '>{t('news.learnMore')}</Link>
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
                   <Link className='text-[#6e6b6b] '>{t('news.learnMore')}</Link>
                 </div>
                 <div>
                   <img src={rasm31} alt="" className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full" />
                 </div>
               </div>
             </div>
           </div>

    </section>
  );
};

export default Home;
