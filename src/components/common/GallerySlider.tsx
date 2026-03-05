"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useId } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface GallerySliderProps {
    images: string[];
    title: string;
    showDots?: boolean;
    pauseOnHover?: boolean;
}

const GallerySlider = ({
    images,
    title,
    showDots = true,
    pauseOnHover = false,
}: GallerySliderProps) => {
    const sliderId = useId().replace(/:/g, "");
    const prevClass = `gallery-prev-${sliderId}`;
    const nextClass = `gallery-next-${sliderId}`;

    return (
        <div className="relative group w-full max-w-5xl mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
                navigation={{
                    prevEl: `.${prevClass}`,
                    nextEl: `.${nextClass}`,
                }}
                pagination={showDots ? { clickable: true } : false}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: pauseOnHover,
                }}
                loop={images.length > 2}
                className="gallery-swiper !pb-12"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src={img}
                                alt={`${title} ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                type="button"
                className={`${prevClass} absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-12 bg-[#EC2028] text-white rounded-md shadow flex items-center justify-center transition-colors`}
                aria-label={`Previous image in ${title}`}
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <button
                type="button"
                className={`${nextClass} absolute right-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-12 bg-[#EC2028] text-white rounded-md shadow flex items-center justify-center transition-colors`}
                aria-label={`Next image in ${title}`}
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>

            <style jsx global>{`
                .gallery-swiper .swiper-pagination-bullet {
                    background: #ec2028;
                    opacity: 0.35;
                    width: 8px;
                    height: 8px;
                    border-radius: 9999px;
                }
                .gallery-swiper .swiper-pagination-bullet-active {
                    background: #ec2028;
                    opacity: 1;
                    width: 24px;
                }
            `}</style>
        </div>
    );
};

export default GallerySlider;
