import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { useRef, useEffect, useState } from 'react';
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
import { Elements } from '../Elements'

import '../../Style/Style.css'

// swiper image
import swiperbir from '../img/img-logo/swiperbir.jpg'
import swiperikki from '../img/img-logo/swiperikki.jpg'
import swiperuch from '../img/img-logo/swiperuch.jpg'
import swipertort from '../img/img-logo/swipertort.jpg'
import swiperbesh from '../img/img-logo/swiperbesh.jpg'
import { useTranslation } from 'react-i18next';

const Production = () => {
    const { t } = useTranslation();
    const advantages = t("production.advantages", { returnObjects: true });
    const paginationTopRef = useRef(null)
    const paginationBottomRef = useRef(null)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);

    return (
        <section>
            {/* 1 */}
            <div className={`${Elements.Container} flex lg:flex-row md:flex-col max-sm:flex-col items-center justify-between mx-auto max-md:gap-5 gap-10 md:mb-0 mb-28 px-4`}>
                <div className="w-full max-w-[400px] max-md:max-w-[500px] text-center max-md:text-left">
                    <h2 className="text-3xl max-sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight md:mb-1">
                        {t("production.title")}
                    </h2>
                    <p className='text-sm sm:text-base md:w-full max-sm:mb-80'>{t("production.description")}</p>
                </div>

                <div className="relative w-full max-w-[525px] h-auto max-md:h-0">
                    <div className="absolute -left-3 md:-left-6 top-3 bottom-10 w-full h-full  lg:bg-[#039355] lg:shadow-2xl lg:shadow-green-600 max-md:bg-transparent max-md:shadow-none rotate-[7deg] z-0 rounded-sm max-md:h-0 max-sm:h-0"></div>
                    <img
                        src={rasm30}
                        alt="faq visual"
                        className="relative z-10 w-full h-auto left-2 md:left-3 max-sm:left-0 top-8 md:top-14  max-sm:-top-64 object-cover rounded-sm shadow-2xl shadow-green-600 md:bg-transparent md:mb-20 sm:bg-transparent   mb-24"

                    />
                </div>
            </div>
          
            {/* 2 */}
            <div className="bg-[#039355]">
                <div className={`${Elements.Container} w-full h-auto pt-4 pb-5 mx-auto px-4`}>
                    <h2 className='ml-4 text-2xl sm:text-3xl text-white font-semibold py-4 '>
                        {t('production.advantagesTitle')}
                    </h2>
                    <div className='flex lg:flex-row md:flex-col max-sm:flex-col max-sm:gap-y-10 justify-center gap-x-16 md:gap-x-14 md:gap-y-5 md:py-10 px-2 py-4'>
                        {[
                            { img: salom1, text: 'production.advantages.0' },
                            { img: salom2, text: 'production.advantages.1' },
                            { img: salom3, text: 'production.advantages.2' },
                            { img: salom4, text: 'production.advantages.3' }
                        ].map((item, i) => (
                            <div key={i} className='flex items-center lg:gap-2 w-[calc(50%-1rem)] md:gap-24 max-sm:gap-x-5 max-sm:w-full  md:w-auto text-white'>
                                <img src={item.img} alt={t(item.text)} />
                                <p className='text-base sm:text-lg font-semibold'>{t(item.text)}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* 3 */}
            <div className={`${Elements.Container} px-4`}>
                <hr className='mt-14' />
                <div className='flex flex-col lg:flex-row items-center gap-8 py-6'>
                    <img className='w-full max-w-[522px] h-auto' src={salom7} alt="" />
                    <div>
                        <h2 className='text-xl md:text-2xl font-semibold text-green-500 py-3'>{t('production.glazingTitle')}</h2>
                        <p className='text-sm sm:text-base max-w-xl'>{t('production.glazingText')}</p>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col-reverse lg:flex-row items-center gap-8 py-6'>
                    <div>
                        <h2 className='text-xl md:text-2xl font-semibold text-green-500 py-3'>{t('production.doubleGlazedTitle')}</h2>
                        <p className='text-sm sm:text-base max-w-xl'>
                            {t('production.doubleGlazedText')}
                        </p>
                    </div>
                    <img className='w-full max-w-[522px] h-auto' src={salom8} alt="" />
                </div>
                <hr />
                <div className='flex flex-col lg:flex-row items-center gap-8 py-6'>
                    <img className='w-full max-w-[522px] h-auto' src={salom9} alt="" />
                    <div>
                        <h2 className='text-xl md:text-2xl font-semibold text-green-500 py-3'>{t('production.equipmentTitle')}</h2>
                        <p className='text-sm sm:text-base max-w-xl'>
                            {t('production.equipmentText')}
                        </p>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col-reverse lg:flex-row items-center gap-8 py-6'>
                    <div>
                        <h2 className='text-xl md:text-2xl font-semibold text-green-500 py-3'>{t('production.trustTitle')}</h2>
                        <p className='text-sm sm:text-base max-w-xl'>
                            {t('production.trustText')}
                        </p>
                    </div>
                    <img className='w-full max-w-[522px] h-auto' src={salom10} alt="" />
                </div>
                <hr />
            </div>

            {/* 4 - SWIPER SLIDER */}
            <div className={`${Elements.Container} my-16 px-4`}>
                <div ref={paginationTopRef} className="swiper-pagination mt-10 pt-10 flex justify-center" />

                <Swiper
                    modules={[EffectCoverflow, Pagination]}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    spaceBetween={30}
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
                    pagination={{
                        el: [paginationTopRef.current, paginationBottomRef.current],
                        clickable: true,
                    }}
                    onSwiper={(swiper) => {
                        swiper.params.pagination.el = [paginationTopRef.current, paginationBottomRef.current];
                        swiper.pagination.init();
                        swiper.pagination.render();
                        swiper.pagination.update();
                    }}
                    className="w-full mx-auto"
                >
                    {[swiperbir, swiperikki, swiperuch, swipertort, swiperbesh].map((img, i) => (
                        <SwiperSlide key={i} className="flex justify-center">
                            <img
                                src={img}
                                alt={`Slide ${i + 1}`}
                                onClick={() => {
                                    setSelectedImage(img);
                                    setIsModalOpen(true);
                                }}
                                className="cursor-pointer rounded-md w-full max-w-[525px] h-[325px] object-cover shadow-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {isModalOpen && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div
                            className="relative rounded-lg max-w-[95vw]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute bottom-2 right-2 text-white text-6xl font-bold z-50"
                            >
                                &times;
                            </button>
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="w-full max-w-[90vw] h-auto max-h-[80vh] border-4 border-white object-contain"
                            />
                        </div>
                    </div>
                )}

                <div ref={paginationBottomRef} className="swiper-pagination mb-10 flex justify-center" />
            </div>
        </section>
    )
}

export default Production
