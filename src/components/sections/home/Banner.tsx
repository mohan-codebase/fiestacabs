"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
    const slides = [
        {
            id: 1,
            image: "/images/home/banner/banner-1.png", // Placeholder - you might need to add a real image or use a color
            title: "Drive the Future with Electric Mobility.",
            subtitle:
                "Fiesta Smart Mobility leads the EV revolution with zero-emission, tech-enabled employee transport for a clean, connected, carbon-free future.",
            cta: "Know More",
            ctaLink: "/",
        },
        // Add more slides here if needed
        {
            id: 2,
            image: "/images/home/banner/banner-2.png", // Placeholder
            title: "Renting a car - Made Easy Safe and Simple",
            subtitle:
                "Just Rent, Rent is our Responsibility . Relax and Reach your Destination safe with guaranteed comfort.",
            cta: "Know More",
            ctaLink: "/",
        },
        {
            id: 3,
            image: "/images/home/banner/banner-3.jpg",
            title: "Safely Connecting Work and Home!",
            subtitle:
                "With over 25 years of expertise in employee transport solutions, our company ensures safe, reliable, and comfortable travel from office to home.",
            cta: "Know More",
            ctaLink: "/",
        },
    ];

    return (
        <section className="relative w-full h-[600px] md:h-[800px] lg:h-[800px] bg-gray-900 text-white overflow-hidden">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + ' swiper-pagination-bullet-custom"></span>';
                    },
                }}
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                className="mySwiper w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority={slide.id === 1}
                                />
                                {/* Overlay for better text readability */}
                                <div className="absolute inset-0 bg-black/40 z-10" />
                            </div>


                            {/* Content */}
                            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                                <h1 className="text-3xl md:text-5xl  font-bold mb-6 leading-tight drop-shadow-lg">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
                                    {slide.subtitle}
                                </p>
                                <Link
                                    href={slide.ctaLink}
                                    className="inline-block bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold py-3 px-8 rounded shadow-lg transition-transform transform "
                                >
                                    {slide.cta}
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Global CSS for Swiper pagination override if needed, embedded here for now or move to globals.css */}
            <style jsx global>{`
        .swiper-pagination-bullet-custom {
            width: 12px;
            height: 12px;
            background-color: white;
            opacity: 0.5;
            display: inline-block;
            border-radius: 50%;
            margin: 0 4px;
            cursor: pointer;
        }
        .swiper-pagination-bullet-active {
            opacity: 1;
            background-color: #D32F2F; 
        }
        .swiper-button-next, .swiper-button-prev {
            color: white;
        }
      `}</style>
        </section>
    );
};

export default Banner;
