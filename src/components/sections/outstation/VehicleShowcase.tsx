"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Placeholder images - Replace with actual vehicle images
const vehicleImages = [
    // Interior shots
    "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop",
    // Exterior shots
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2072&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580273916550-e323be2ed532?q=80&w=1978&auto=format&fit=crop"
];

const VehicleShowcase = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Fleet Showcase</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Experience luxury and comfort with our well-maintained fleet of vehicles designed for outstation travel.</p>
                </div>

                <div className="space-y-4">
                    {/* Main Slider */}
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        } as React.CSSProperties}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="h-[400px] md:h-[600px] w-full rounded-2xl shadow-xl"
                    >
                        {vehicleImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full bg-gray-200">
                                    <Image
                                        src={img}
                                        alt={`Vehicle View ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnails Slider */}
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="h-24 md:h-32 w-full thumbs-swiper mt-4"
                        breakpoints={{
                            320: { slidesPerView: 3, spaceBetween: 8 },
                            640: { slidesPerView: 4, spaceBetween: 10 },
                            1024: { slidesPerView: 5, spaceBetween: 12 },
                        }}
                    >
                        {vehicleImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition-opacity aria-[current=true]:opacity-100 border-2 border-transparent hover:border-red-500 swiper-slide-thumb-active:border-red-500 swiper-slide-thumb-active:opacity-100">
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <style jsx global>{`
          .swiper-slide-thumb-active {
            opacity: 1 !important;
            border-color: #EC2028 !important;
          }
        `}</style>
            </div>
        </section>
    );
};

export default VehicleShowcase;
