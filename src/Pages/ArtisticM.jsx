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

const ArtisticM = () => {
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
            <div className={`${Elements.Container} flex flex-col md:flex-row items-center justify-between mx-auto gap-10 mb-28 px-4`}>
                {/* Text Block */}
                <div className="w-full md:max-w-[400px]">
                    <h2 className="text-5xl font-bold mb-4 leading-tight">
                        Manufacturing of double-glazed windows
                    </h2>
                    <p>A double-glazed window is a translucent structure for construction purposes made of two or more glasses, fastened (glued) together along the contour using spacer frames and sealants.</p>
                </div>

                {/* Image Block */}
                <div className="relative w-full max-w-[525px] h-auto">
                    <div className="absolute -left-6 top-3 bottom-10 w-full h-full bg-[#039355] shadow-2xl shadow-green-600 rotate-[7deg] z-0 rounded-sm"></div>
                    <img
                        src={rasm30}
                        alt="faq visual"
                        className="relative z-10 w-full h-auto left-3 top-14 object-cover rounded-sm shadow-2xl shadow-green-600"
                    />
                </div>
            </div>
            {/* 2 */}
            <div className="bg-[#039355]">
                <div className={`${Elements.Container} w-full h-auto pt-4 pb-5 mx-auto mt-[127px]`}>
                    <h2 className='ml-8 text-4xl pt-4 pb-5'>
                        Our advantages
                    </h2>
                    <div className='flex items-center justify-between px-2 py-4'>
                        <div className='flex items-center gap-2'>
                            <img src={salom1} alt="Our advantages" />
                            <p className='text-lg font-semibold'>Our advantages</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={salom2} alt="Our advantages" />
                            <p className='text-lg font-semibold'>Quality assurance</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={salom3} alt="Our advantages" />
                            <p className='text-lg font-semibold'>Extensive Experience</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={salom4} alt="Our advantages" />
                            <p className='text-lg font-semibold'>Shortest possible time</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className={`${Elements.Container}`}>
                <hr className='mt-14' />
                <div className='flex items-center justify-between py-4'>
                    <div>
                        <img className='w-[522px] h-[293px]' src={salom7} alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold text-green-500 py-3'>Glazing</h2>
                        <p className='w-full max-w-xl'>For several decades now, the word “glazing” has meant the installation of double-glazed windows. They consist of several sheets of glass and are made using a special, rather complex technology. The use of just one sheet of glass in glazing is a thing of the past; today this approach is considered ineffective and is gradually fading into oblivion.</p>
                    </div>
                </div>
                <hr />
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold text-green-500 py-3'>A double glazed window is...</h2>
                        <p className='w-full max-w-xl'>
                        In professional terms, it is a translucent structure made up of two or more glasses connected by special spacer frames or sealed compounds. The gaps between the glasses are filled with dried air or special gases. Double-glazed windows are the most optimal option for glazing window openings and even building facades.
                        </p>
                    </div>
                    <span className='border-l h-[325px]'></span>
                    <div>
                        <img className='w-[522px] h-[293px]' src={salom8} alt="" />
                    </div>
                </div>
                <hr />
                <div className='flex items-center justify-between py-4'>
                    <div>
                        <img className='w-[522px] h-[293px]' src={salom9} alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold text-green-500 py-3'>Equipment used</h2>
                        <p className='w-full max-w-xl'>Today, the «TECHNOINVEST-ST» LLC enterprise operates an automated line for the production of double-glazed windows from the Swiss company BYSTRONIC, in the production of which polished high-quality glass of various types is used. Our productivity is up to 1200 sq.m. of glass products per day.</p>
                    </div>
                </div>
                <hr />
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold text-green-500 py-3'>Why trust us?</h2>
                        <p className='w-full max-w-xl'>Let's reveal a secret - a truly high-quality double-glazed window cannot be manufactured in artisanal conditions. The complexity of the design and adherence to technology requires the use of expensive equipment and the involvement of highly qualified specialists. In addition, mass production allows you to reduce product prices. We manufacture energy-saving double-glazed windows, which means we give you the chance to save significantly in the future.</p>
                    </div>
                    <span className='border-l h-[325px]'></span>
                    <div>
                        <img className='w-[522px] h-[293px]' src={salom10} alt="" />
                    </div>
                </div>
                <hr />
            </div>
            {/* 4 - SWIPER SLIDER */}
            <div className={`${Elements.Container} my-16 px-4 relative mr-[300px]`}>
                {/* Yuqori Pagination */}
                <div ref={paginationTopRef} className="swiper-pagination mt-10 pt-20 flex justify-center" />

                <Swiper
                    modules={[EffectCoverflow, Pagination]}
                    slidesPerView={4}
                    slidesPerGroup={4}
                    spaceBetween={30}
                    loop={false}
                    grabCursor={true}
                    centeredSlides={false}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 50,
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
                    className="w-full max-w-[1300px] mx-auto"
                >
                    {[swiperbir,swiperikki,swiperuch,swipertort,swiperbesh].map((img, i) => (
                        <SwiperSlide key={i} className="flex justify-center">
                            <img
                                src={img}
                                alt={`Slide ${i + 1}`}
                                onClick={() => {
                                    setSelectedImage(img);
                                    setIsModalOpen(true);
                                }}
                                className="cursor-pointer rounded-md w-[525px] h-[325px] mb-10 object-cover shadow-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {isModalOpen && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
                        onClick={() => setIsModalOpen(false)} // tashqariga bosilganda yopiladi
                    >
                        <div
                            className="relative bg-none rounded-lg shadow-xl max-w-none w-auto"
                            onClick={(e) => e.stopPropagation()} // ichkariga bosilganda to‘xtaydi
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
                                className="max-w-none w-[547px] h-[512px] border-4 border-white object-contain"
                            />
                        </div>
                    </div>
                )}

                {/* Pastki Pagination */}
                <div ref={paginationBottomRef} className="swiper-pagination  mb-10 flex justify-center" />
                
            </div>

        </section>
    )
}

export default ArtisticM