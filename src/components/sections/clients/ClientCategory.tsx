"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

interface Client {
    name: string;
    image: string;
}

interface ClientCategoryProps {
    id: string;
    title: string;
    clients: Client[];
    enableSlider?: boolean;
    sliderSpeed?: number;
    reverseDirection?: boolean;
}

const ClientCategory = ({
    id,
    title,
    clients,
    enableSlider = false,
    sliderSpeed = 3000,
    reverseDirection = false,
}: ClientCategoryProps) => {
    return (
        <section id={id} className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-red-600">
                    {title}
                </h2>

                {enableSlider ? (
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        speed={sliderSpeed}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: reverseDirection,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                        className="w-full"
                    >
                        {clients.map((client, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-48 relative transition-all duration-300 flex items-center justify-center p-2 border border-gray-100 rounded-lg hover:shadow-lg bg-white">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={client.image}
                                            alt={client.name}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="w-full h-48 relative transition-all duration-300 flex items-center justify-center p-2 border border-gray-100 rounded-lg hover:shadow-lg bg-white"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={client.image}
                                        alt={client.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ClientCategory;
