"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { siteTestimonials } from "../../data/testimonials";

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

const DEFAULT_TESTIMONIALS: Testimonial[] = siteTestimonials;

const Testimonials = ({
    eyebrow = "TESTIMONIALS",
    title = "What our customer says",
    showEyebrow = true,
    testimonials = DEFAULT_TESTIMONIALS,
    className = "",
}: TestimonialsProps) => {

    const renderStars = (rating: number) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={`${index < rating ? "text-yellow-400" : "text-gray-200"
                            }`}
                        size={14}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className={`relative w-full py-24 md:py-32 bg-white overflow-hidden ${className}`}>
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-50/50 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-50/30 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24">
                    {showEyebrow && (
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50/50">
                            {eyebrow}
                        </span>
                    )}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                        {title.split(' ').slice(0, -1).join(' ')} <span className="text-[#EC2028]">{title.split(' ').slice(-1)}</span>
                    </h2>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoHeight={false}
                        navigation={{
                            prevEl: '.testimonial-prev',
                            nextEl: '.testimonial-next',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.testimonial-pagination',
                            bulletClass: 'swiper-pagination-bullet !w-2 !h-2 !bg-gray-300 transition-all duration-300',
                            bulletActiveClass: 'swiper-pagination-bullet-active !w-8 !rounded-full !bg-[#EC2028] btn-animated'
                        }}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="testimonials-swiper !pb-20 !px-4"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className="h-full flex">
                                <div className="testimonials-card h-[520px] w-full bg-white/60 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/20 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group overflow-hidden">
                                    <div>
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-[#EC2028] btn-animated transition-colors duration-300">
                                                <FaQuoteLeft className="text-[#EC2028] text-xl group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            {renderStars(testimonial.rating)}
                                        </div>

                                        <blockquote className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed mb-8 font-medium">
                                            "{testimonial.quote}"
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center font-bold text-gray-400 uppercase">
                                            {testimonial.company.substring(0, 1)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-xs md:text-sm">
                                                {testimonial.person || testimonial.company}
                                            </h4>
                                            <p className="text-[#EC2028] text-[11px] md:text-xs font-semibold">
                                                {testimonial.company} • {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Controls */}
                    <div className="absolute top-1/2 -translate-y-[120%] left-0 right-0 flex justify-between z-10 pointer-events-none lg:-mx-12">
                        <button className="testimonial-prev pointer-events-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-50 text-gray-400 hover:text-[#EC2028] hover:shadow-[#EC2028]/10 transition-all group/btn">
                            <FaChevronLeft className="text-lg group-hover/btn:-translate-x-0.5 transition-transform" />
                        </button>
                        <button className="testimonial-next pointer-events-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-50 text-gray-400 hover:text-[#EC2028] hover:shadow-[#EC2028]/10 transition-all group/btn">
                            <FaChevronRight className="text-lg group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                    </div>

                    {/* Pagination */}
                    <div className="testimonial-pagination absolute bottom-0 left-0 right-0 flex justify-center mt-12"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
