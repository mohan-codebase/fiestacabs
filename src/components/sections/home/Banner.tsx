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
            ctaLink: "#milestones",
        },
        // Add more slides here if needed
        {
            id: 2,
            image: "/images/home/banner/banner-2.png", // Placeholder
            title: "Renting a car - Made Easy Safe and Simple",
            subtitle:
                "Just Rent, Rent is our Responsibility . Relax and Reach your Destination safe with guaranteed comfort.",
            cta: "Know More",
            ctaLink: "#milestones",
        },
        {
            id: 3,
            image: "/images/home/banner/banner-3.jpg",
            title: "Safely Connecting Work and Home!",
            subtitle:
                "With over 28 years of expertise in employee transport solutions, our company ensures safe, reliable, and comfortable travel from office to home.",
            cta: "Know More",
            ctaLink: "#milestones",
        },
    ];

    return (
        <section className="relative w-full h-[100vh] lg:h-[100vh] text-white overflow-hidden">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
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
                speed={1000}
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
                                    className="transform scale-105"
                                />
                                {/* Premium gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/70 z-10" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-24 lg:pt-32">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-xl leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
                                    {slide.subtitle}
                                </p>
                                <Link
                                    href={slide.ctaLink}
                                    onClick={(e) => {
                                        if (slide.ctaLink.startsWith("#")) {
                                            e.preventDefault();
                                            const element = document.getElementById(slide.ctaLink.substring(1));
                                            if (element) {
                                                element.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }
                                    }}
                                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-[#EC2028] btn-animated rounded-full hover:bg-[#c51c24] hover:shadow-[0_8px_25px_rgba(236,32,40,0.5)] hover:-translate-y-1 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {slide.cta}
                                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Global CSS for Swiper pagination override */}
            <style jsx global>{`
        .swiper-pagination-bullet-custom {
            width: 32px;
            height: 4px;
            background-color: white;
            opacity: 0.3;
            display: inline-block;
            border-radius: 4px;
            margin: 0 6px !important;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .swiper-pagination-bullet-custom:hover {
            opacity: 0.6;
        }
        .swiper-pagination-bullet-active.swiper-pagination-bullet-custom {
            opacity: 1;
            background-color: #EC2028;
            width: 48px;
            box-shadow: 0 0 10px rgba(236, 32, 40, 0.4);
        }
        .swiper-button-next, .swiper-button-prev {
            color: white;
        }
        .swiper-pagination {
            bottom: 40px !important;
        }
      `}</style>
        </section>
    );
};

export default Banner;
