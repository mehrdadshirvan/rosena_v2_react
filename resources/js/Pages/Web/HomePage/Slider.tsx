"use client"
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Link} from "@inertiajs/react";

export default function Slider({sliders}:any) {
    return (
        <div className="container mx-auto max-w-screen-xl  m-auto mt-6 mb-12 rounded-3xl overflow-hidden">
            <Swiper spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
            >

                {
                    Array.isArray(sliders) && sliders?.map((item: any) => {
                        return  (
                            <SwiperSlide key={item?.id}> {/* Make sure to use a key */}
                                <Link href={item?.url}>
                                    <img src={item?.show_path}
                                         alt={item?.title}
                                         className={`w-full`} />
                                </Link>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    );
};
