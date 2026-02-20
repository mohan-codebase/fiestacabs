"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const LuxuryBrands = () => {
    const brands = [
        { name: "Benz", src: "/images/services-offered/premium-car-rentals/outstation-rides/benz.png" },
        { name: "BMW", src: "/images/services-offered/premium-car-rentals/outstation-rides/bmw.png" },
        { name: "Toyota", src: "/images/services-offered/premium-car-rentals/outstation-rides/toyota.png" },
        { name: "Volvo", src: "/images/services-offered/premium-car-rentals/outstation-rides/volvo.png" },
        { name: "Audi", src: "/images/services-offered/premium-car-rentals/outstation-rides/audi.png" },
        { name: "Jaguar", src: "/images/services-offered/premium-car-rentals/outstation-rides/jaguar.png" },
        { name: "Kia", src: "/images/services-offered/premium-car-rentals/outstation-rides/kia.png" },
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
                            <div className="flex flex-col items-center gap-4 transition-all duration-300 transform hover:scale-110">
                                <Image src={brand.src} alt={brand.name} width={120} height={80} className="object-contain" />
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
