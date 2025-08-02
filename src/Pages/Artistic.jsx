import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import rasm30 from '../img/img-logo/salom5.jpg'
import salom1 from '../img/img-logo/salom1.svg'
import salom2 from '../img/img-logo/salom2.svg'
import salom3 from '../img/img-logo/salom3.svg'
import salom4 from '../img/img-logo/salom4.svg'
import salom7 from '../img/img-logo/salom7.jpeg'
import salom8 from '../img/img-logo/salom8.jpg'
import salom9 from '../img/img-logo/salom9.jpg'
import salom10 from '../img/img-logo/salom10.jpg'
import swiperbir from '../img/img-logo/swiperbir.jpg'
import swiperikki from '../img/img-logo/swiperikki.jpg'
import swiperuch from '../img/img-logo/swiperuch.jpg'
import swipertort from '../img/img-logo/swipertort.jpg'
import swiperbesh from '../img/img-logo/swiperbesh.jpg'

import { Elements } from '../Elements'
import { useTranslation } from 'react-i18next'
import useTitle from '../Components/Usetitle'
import '../../Style/Style.css'

const Artistic = () => {
  useTitle("artistica")
  const { t } = useTranslation();
  const advantages = t("artistic.advantages", { returnObjects: true });

  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

  return (
    <section>
      {/* Title Section */}
      <div className={`${Elements.Container} flex lg:flex-row md:flex-col max-sm:flex-col items-center justify-between mx-auto max-md:gap-5 gap-10 md:mb-0 mb-28 px-4`}>
        <div className="w-full max-w-[400px] max-md:max-w-[500px] text-center max-md:text-left">
          <h2 className="text-3xl max-sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight md:mb-1">
            {t("artistic.title")}
          </h2>
          <p className='text-sm sm:text-base md:w-full max-sm:mb-52'>{t("artistic.description")}</p>
        </div>

        <div className="relative w-full max-w-[525px] h-auto max-md:h-0 sm:bottom-0 sm:mb-[200px] max-sm:bottom-[100px] max-sm:mb-[300px]">
          <div className="absolute -left-3 md:-left-6 top-3 bottom-10 w-full h-full max-h-[500px] lg:bg-[#039355] lg:shadow-2xl lg:shadow-green-600 max-md:bg-transparent rotate-[7deg] z-0 rounded-sm"></div>
          <img src={rasm30} alt="faq visual" className="relative z-10 w-full h-auto left-2 md:left-3 max-sm:left-0 top-8 md:top-14 max-sm:top-0 object-cover rounded-sm shadow-2xl shadow-green-600 mb-24" />
        </div>
      </div>

      {/* Advantages Section */}
      <div className="bg-[#039355]">
        <div className={`${Elements.Container} w-full h-auto pt-4 pb-5 mx-auto px-4`}>
          <h2 className='ml-4 text-2xl sm:text-3xl text-white font-semibold py-4 '>
            {t('artistic.advantagesTitle')}
          </h2>
          <div className='flex lg:flex-row md:flex-col max-sm:flex-col max-sm:gap-y-10 justify-center gap-x-16 md:gap-x-14 md:gap-y-5 md:py-10 px-2 py-4'>
            {[salom1, salom2, salom3, salom4].map((img, i) => (
              <div key={i} className='flex items-center gap-2 w-full sm:w-[45%] md:w-auto text-white'>
                <img src={img} alt={t(`artistic.advantages.${i}`)} />
                <p className='text-base sm:text-lg font-semibold'>{t(`artistic.advantages.${i}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`${Elements.Container} px-4`}>
        <hr className='mt-14' />
        {[
          { title: 'glazingTitle', text: 'glazingText', img: salom7, reverse: false },
          { title: 'doubleGlazedTitle', text: 'doubleGlazedText', img: salom8, reverse: true },
          { title: 'equipmentTitle', text: 'equipmentText', img: salom9, reverse: false },
          { title: 'trustTitle', text: 'trustText', img: salom10, reverse: true },
        ].map(({ title, text, img, reverse }, i) => (
          <React.Fragment key={i}>
            <div className={`flex flex-col lg:flex-row items-center gap-8 py-6`}>
              <div className={`order-1 ${reverse ? 'lg:order-2' : 'lg:order-1'} w-full lg:w-1/2`}>
                <h2 className="text-xl md:text-2xl font-semibold text-green-500 py-3 max-md:text-end max-sm:text-end">{t(`artistic.${title}`)}</h2>
                <p className="text-sm sm:text-base max-w-xl max-md:text-end max-sm:text-end">{t(`artistic.${text}`)}</p>
              </div>
              <img className={`order-2 ${reverse ? 'lg:order-1' : 'lg:order-2'} w-full max-w-[522px] h-auto lg:w-1/2`} src={img} alt="" />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>

      {/* Swiper Slider */}
      <div className={`${Elements.Container} my-16 px-4`}>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop={false}
          grabCursor={true}
          centeredSlides={false}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
        >
          {[swiperbir, swiperikki, swiperuch, swipertort, swiperbesh].map((img, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                onClick={() => {
                  setSelectedImage(img);
                  setIsModalOpen(true);
                  setIsImageLoading(true);
                }}
                className="cursor-pointer rounded-md w-full max-w-[525px] h-[325px] max-sm:h-auto object-cover shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center" onClick={() => setIsModalOpen(false)}>
            <div className="relative rounded-lg max-w-[95vw]" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setIsModalOpen(false)} className="absolute -bottom-12 right-2 text-white text-6xl font-bold z-50">
                &times;
              </button>

              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-40">
                  <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-w-[90vw] h-auto max-h-[80vh] border-4 border-white object-contain rounded-md relative z-50"
                onLoad={() => setIsImageLoading(false)}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Artistic
