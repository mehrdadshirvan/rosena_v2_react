"use client"
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Link} from "@inertiajs/react";

export default function ProductSlider({lists}:any) {
    return (
        <div className="container mx-auto max-w-screen-xl  m-auto mt-6 mb-6 rounded-3xl overflow-hidden">
            <Swiper spaceBetween={10}
                    slidesPerView={5}
            >

                {
                    Array.isArray(lists) && lists?.map((item: any) => {
                        return  (
                            <SwiperSlide key={item?.id}> {/* Make sure to use a key */}
                                <div className="card-v2 md:h-[300px]">
                                    <div className="min-h-[170px]">
                                        <Link href={item?.url}>
                                            <img src={item?.image}
                                                 alt={item?.title}
                                                 className={`w-full`} />
                                        </Link>
                                    </div>
                                    <Link href={item?.url}>
                                        <h3 className="text-xs text-justify text-start text-gray-600">{item?.name}</h3>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    );
};
