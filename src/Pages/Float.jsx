import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { useRef, useEffect, useState } from 'react';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import rasm30 from '../img/img-logo/rasm50.jpg'
import salom1 from '../img/img-logo/salom1.svg'
import salom2 from '../img/img-logo/salom2.svg'
import salom3 from '../img/img-logo/salom3.svg'
import salom4 from '../img/img-logo/salom4.svg'

import salom7 from '../img/img-logo/rasm58.jpg'
import salom8 from '../img/img-logo/rasm56.png'
import salom9 from '../img/img-logo/rasm55.jpg'
import salom10 from '../img/img-logo/rasm54.png'
import { Elements } from '../Elements'

import '../../Style/Style.css'

// swiper image
import swiper12 from '../img/img-logo/swiper12.jpg'
import swiper13 from '../img/img-logo/swiper13.jpg'
import swiper14 from '../img/img-logo/swiper14.jpg'
import swiper15 from '../img/img-logo/swiper15.jpg'
import swiper16 from '../img/img-logo/swiper16.jpg'
import swiper17 from '../img/img-logo/swiper17.jpg'
import swiper18 from '../img/img-logo/swiper18.jpg'
import swiper19 from '../img/img-logo/swiper19.jpg'




const Float = () => {
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
                        Flat glass processing
                    </h2>
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
                        <h2 className='text-2xl font-semibold text-green-500 py-3'>Glass cutting
                        </h2>
                        <p className='w-full max-w-xl'>The primary technological cycle in the processing of glass and mirrors is cutting. A product of the required size is cut out of a large glass sheet and then sent for a mandatory processing procedure - edge processing.</p>
                    </div>
                </div>
                <hr />
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold text-green-500 py-3'>Edge processing
                        </h2>
                        <p className='w-full max-w-xl'>
                            Mandatory procedure for handling dangerous sharp edges. The procedure takes place in several stages:
                            1 Grinding – smoothing out all irregularities and giving a matte effect.
                            2 Polishing - processing the edge of glass or mirror with soft fibers. After processing the edge looks transparent and bright.
                            There is also a bevelling operation when a chamfer (bevel) of 5 to 45 mm is removed along the perimeter of the entire glass or mirror, which gives the product a more elegant, finished look. The procedure is optional and is of an artistic nature.</p>
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
                        <h2 className='text-2xl font-semibold text-green-500 py-3'>Glass tempering
                        </h2>
                        <p className='w-full max-w-xl'>Tempered glass is a glass that has been subjected to special heat treatment. In a tempering furnace, glass is heated to temperatures of 680-720°C and then cooled sharply. As a result, the impact and bending strength of glass increases significantly. The main quality of tempered glass is its safety. When destroyed, it crumbles into many small smooth fragments that are safe for humans.</p>
                    </div>
                </div>
                <hr />
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold text-green-500 py-3'>Glass frosting
                        </h2>
                        <p className='w-full max-w-xl'>Glass decoration technology is based on treating the glass surface with an air jet and abrasive. The resulting matte pattern transmits light well, but the image cannot be seen through it.</p>
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
                    {[swiper12,swiper13,swiper14,swiper15,swiper16,swiper17,swiper18,swiper19].map((img, i) => (
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

export default Float