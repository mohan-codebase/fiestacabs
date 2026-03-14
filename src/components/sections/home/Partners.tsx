"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const Partners = () => {
    const partners = [
        {
            id: 1,
            name: "Mahindra",
            logo: "/images/home/partners/mahindra.png",
        },
        {
            id: 2,
            name: "SSN",
            logo: "/images/home/partners/ssn.png",
        },
        {
            id: 3,
            name: "Saint-Gobain",
            logo: "/images/home/partners/saint-gobain.jpg",
        },
        {
            id: 4,
            name: "TATA",
            logo: "/images/home/partners/tata.jpg",
        },
        {
            id: 5,
            name: "Wells Fargo",
            logo: "/images/home/partners/wells-fargo.png",
        },
        {
            id: 6,
            name: "Citi",
            logo: "/images/home/partners/citi.png",
        },
        {
            id: 7,
            name: "Cognizant",
            logo: "/images/home/partners/cognizant.png",
        },
        {
            id: 8,
            name: "Comcast",
            logo: "/images/home/partners/comcast.png",
        },
        {
            id: 9,
            name: "Fiserv",
            logo: "/images/home/partners/fiserv.png",
        },
        {
            id: 10,
            name: "Walmart Global Tech",
            logo: "/images/home/partners/walmart-global.png",
        },
    ];

    return (
        <section className="w-full py-5 md:py-5 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50/50">
                        Clients
                    </p>
                    <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
                        Our Partners and Supports
                    </h2>
                </div>
            </div>

            {/* Partners Swiper - Continuous Scroll */}
            <div className=" max-w-standard">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={2.5}
                    loop={true}
                    speed={6000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 80,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 100,
                        },
                    }}
                    className="partners-swiper"
                >
                    {partners.map((partner) => (
                        <SwiperSlide key={partner.id}>
                            <div className="flex items-center justify-center py-4">
                                <div className="relative w-full h-50 md:h-54 max-w-[180px] md:max-w-[220px]">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        style={{ objectFit: "contain" }}
                                        className="transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* Duplicate set for smoother loop */}
                    {partners.map((partner) => (
                        <SwiperSlide key={`extra-${partner.id}`}>
                            <div className="flex items-center justify-center py-4">
                                <div className="relative w-full h-50 md:h-54 max-w-[180px] md:max-w-[220px]">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        style={{ objectFit: "contain" }}
                                        className="transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Global CSS to ensure linear motion for continuous scroll */}
            <style jsx global>{`
                .partners-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </section>
    );
};

export default Partners;

