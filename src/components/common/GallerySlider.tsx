"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useId } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./Button";

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
        <div className="relative group w-full">
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
                className="gallery-swiper !pb-10"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100">
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

            <Button type="button" className={`${prevClass} absolute right-14 bottom-2 z-20 w-10 h-10 rounded-full bg-red text-slate-800 shadow-lg border border-slate-200`} aria-label={`Previous image in ${title}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </Button>
            <Button type="button" className={`${nextClass} absolute right-2 bottom-2 z-20 w-10 h-10 rounded-full bg-red text-slate-800 shadow-lg border border-slate-200`} aria-label={`Next image in ${title}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </Button>

            <style jsx global>{`
                .gallery-swiper .swiper-pagination-bullet {
                    background: #0f172a;
                    opacity: 0.25;
                    width: 10px;
                    height: 10px;
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
