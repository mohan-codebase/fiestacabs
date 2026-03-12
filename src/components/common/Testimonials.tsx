"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export interface Testimonial {
    id: string;
    quote: string;
    company: string;
    person?: string;
    role: string;
    rating: number;
}

interface TestimonialsProps {
    eyebrow?: string;
    title?: string;
    showEyebrow?: boolean;
    testimonials?: Testimonial[];
    className?: string;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
    {
        id: "1",
        quote: "During the CFC senior leadership visit, Akram provided excellent support in arranging cabs, managing deployments, and ensuring smooth coordination throughout the visit.",
        company: "Atos",
        person: "Atos Team",
        role: "Admin Team",
        rating: 5,
    },
    {
        id: "2",
        quote: "Thanks for your wonderful support on arranging vehicles for BCP in CBE office due to heavy rainfall in Chennai city. Appreciate all your efforts and hard work.",
        company: "Walmart",
        person: "Walmart Admin Team",
        role: "Admin Team",
        rating: 5,
    },
    {
        id: "3",
        quote: "I would like to extend my thanks to you and the entire team for the support, and timely scheduling of our travel requirements. You and your team are prompt.",
        company: "meyn",
        person: "meyn",
        role: "Corporate Client",
        rating: 5,
    },
    {
        id: "4",
        quote: "We would like to extend sincere appreciation to you, your team and drivers for the exceptional support provided during the challenges posed by heavy traffic.",
        company: "Wellsfargo",
        person: "Wellsfargo Bangalore",
        role: "Transport Desk",
        rating: 5,
    },
    {
        id: "5",
        quote: "This is to appreciate your team in all aspects as Brand Systems has been using Fiesta Smart Mobility from last 6-7 months and we have been more than satisfied.",
        company: "Brand Systems",
        person: "Brand Systems",
        role: "Event Management",
        rating: 5,
    },
    {
        id: "6",
        quote: "We would like to thank you and your team member for excellent service to our organization. Your timely cab support was greatly appreciated.",
        company: "Mahindra Research Valley",
        person: "Admin Team",
        role: "Admin Team",
        rating: 5,
    }
];

const Testimonials = ({
    eyebrow = "TESTIMONIALS",
    title = "What our customer says",
    showEyebrow = true,
    testimonials = DEFAULT_TESTIMONIALS,
    className = "",
}: TestimonialsProps) => {
    
    const renderStars = (rating: number) => {
        return (
            <div className="flex gap-0.5">
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={`${index < rating ? "text-yellow-400" : "text-gray-200"
                            }`}
                        size={12}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className={`w-full py-12 md:py-16 bg-white ${className}`}>
            <div className="max-w-5xl mx-auto px-4">
                {/* Minimal Header */}
                <div className="text-center mb-10 md:mb-12">
                    {showEyebrow && (
                        <span className="text-[#D32F2F] uppercase tracking-[0.2em] text-[10px] font-bold mb-2 block">
                            {eyebrow}
                        </span>
                    )}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                        {title}
                    </h2>
                </div>

                <div className="relative group">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.testimonial-prev',
                            nextEl: '.testimonial-next',
                        }}
                        pagination={{ 
                            clickable: true,
                            el: '.testimonial-pagination',
                            bulletClass: 'swiper-pagination-bullet !w-1 !h-1 !bg-gray-300 transition-all duration-300',
                            bulletActiveClass: 'swiper-pagination-bullet-active !w-4 !rounded-full !bg-[#D32F2F]'
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        className="testimonials-swiper !pb-12"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-[#FAFAFA] rounded-2xl p-6 md:p-10 border border-gray-100 flex flex-col items-center text-center max-w-3xl mx-auto">
                                    <FaQuoteLeft className="text-[#D32F2F]/20 text-2xl mb-6" />
                                    
                                    <blockquote className="text-gray-700 text-base md:text-lg font-medium leading-relaxed mb-8 italic">
                                        "{testimonial.quote}"
                                    </blockquote>

                                    <div className="flex flex-col items-center">
                                        <h4 className="font-bold text-gray-900 text-sm md:text-base">
                                            {testimonial.company}
                                        </h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-gray-500 text-[12px]">
                                                {testimonial.role}
                                            </span>
                                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                            {renderStars(testimonial.rating)}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Compact Navigation Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-10 pointer-events-none md:-mx-8">
                        <button className="testimonial-prev pointer-events-auto w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-50 text-gray-400 hover:text-[#D32F2F] transition-all group/btn">
                            <FaChevronLeft className="text-xs md:text-sm group-hover/btn:-translate-x-0.5 transition-transform" />
                        </button>
                        <button className="testimonial-next pointer-events-auto w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-50 text-gray-400 hover:text-[#D32F2F] transition-all group/btn">
                            <FaChevronRight className="text-xs md:text-sm group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                    </div>

                    {/* Pagination */}
                    <div className="testimonial-pagination absolute bottom-0 left-0 right-0 flex justify-center !pb-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
