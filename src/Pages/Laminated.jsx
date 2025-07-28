import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { useRef, useEffect, useState } from 'react';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import rasm30 from '../img/img-logo/laminated.jpg'
import salom1 from '../img/img-logo/salom1.svg'
import salom2 from '../img/img-logo/salom2.svg'
import salom3 from '../img/img-logo/salom3.svg'
import salom4 from '../img/img-logo/salom4.svg'

import salom7 from '../img/img-logo/salom11.jpg'
import salom8 from '../img/img-logo/salom12.jpg'
import salom9 from '../img/img-logo/salom13.jpg'
import salom10 from '../img/img-logo/salom14.jpg'
import { Elements } from '../Elements'

import '../../Style/Style.css'

// swiper image
import swiperbir from '../img/img-logo/swiperolti.jpg'
import swiperikki from '../img/img-logo/swiperyetti.jpg'
import swiperuch from '../img/img-logo/swipersakkiz.jpg'
import swipertort from '../img/img-logo/swipertoqqiz.jpg'
import swiperbesh from '../img/img-logo/swiperon.jpg'
import swiperonbir from '../img/img-logo/swiperonbir.jpg'


const Laminated = () => {
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
                        Laminated glass (triplex)
                    </h2>
                    <p>One of the most popular types of glass in modern construction.</p>
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
                        <h2 className='text-2xl font-semibold text-green-500 py-3'>What is triplex?</h2>
                        <p className='w-full max-w-xl'>Laminated glass is resistant to mechanical stress; if its integrity is damaged, it retains its shape, remaining in the frame, and the binding polymer film prevents the appearance of sharp cutting edges and the shedding of fragments. Thanks to its unique properties, constructional triplex is an excellent material for glazing windows, storefronts, and safe decorations of residential and public premises.</p>
                    </div>
                </div>
                <hr />
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold text-green-500 py-3'>Safety</h2>
                        <p className='w-full max-w-xl'>
                            PVB film holds shards of broken glass and maintains the shape of the product.  </p>
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
                        <h2 className='text-2xl font-semibold text-green-500 py-3'>Application                        </h2>
                        <p className='w-full max-w-xl'>-in the glazing of buildings (including double-glazed windows), the production of transparent roofs and canopies
                            - when creating doors and partitions, stained glass windows, showcases, glass furniture
                            - steps and railings of stairs, floors, and ceilings are made from it
                            - in the production of car glass</p>
                    </div>
                </div>
                <hr />
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold text-green-500 py-3'>Order triplex from us!
                        </h2>
                        <p className='w-full max-w-xl'>Technoinvest-ST offers the production of triplex, including using armored polyvinyl film.
                            Maximum configuration: 4 glasses of 10mm each
                            or 6 glasses of 6 mm, dimensions: 3200x2200 mm.</p>
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
                    {[swiperbir, swiperikki, swiperuch, swipertort, swiperbesh,swiperonbir, swipertort, swiperbesh,swiperonbir].map((img, i) => (
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

export default Laminated