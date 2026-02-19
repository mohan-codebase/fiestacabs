"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SiBmw, SiKia, SiToyota, SiVolvo, SiMercedes } from "react-icons/si";
import "swiper/css";

const LuxuryBrands = () => {
    const brands = [
        { name: "BMW", icon: <SiBmw /> },
        { name: "Kia", icon: <SiKia /> },
        { name: "Toyota", icon: <SiToyota /> },
        { name: "Volvo", icon: <SiVolvo /> },
        { name: "Mercedes", icon: <SiMercedes /> },
    ];

    return (
        <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                    Luxury Vehicles Brands
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={2}
                    loop={true}
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 80,
                        },
                    }}
                    className="luxury-brands-swiper items-center"
                    style={{ alignItems: "center" }}
                >
                    {[...brands, ...brands, ...brands].map((brand, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center py-4">
                            <div className="flex flex-col items-center gap-4 group opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <div className="text-6xl md:text-7xl text-gray-700 group-hover:text-black transition-colors transform group-hover:scale-110 duration-300">
                                    {brand.icon}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <style jsx global>{`
                .luxury-brands-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                    align-items: center;
                }
            `}</style>
        </section>
    );
};

export default LuxuryBrands;
