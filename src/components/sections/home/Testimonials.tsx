"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonial {
    id: string;
    quote: string;
    company: string;
    person: string;
    role: string;
    rating: number;
}

interface TestimonialsProps {
    eyebrow?: string;
    title?: string;
    showEyebrow?: boolean;
}

const Testimonials = ({
    eyebrow = "TESTIMONIALS",
    title = "What our customer says",
    showEyebrow = true,
}: TestimonialsProps) => {
    const testimonials: Testimonial[] = [
        {
            id: "1",
            quote: "Hi Akram, During the CFC senior leadership visit, Akram provided excellent support in arranging cabs, managing deployments, and ensuring smooth coordination throughout the visit. He was efficiently handled last-minute changes and ensured that all vehicles were clean and well-maintained. Thanks for your efforts contributed to the successful execution of transportation arrangements during the visit.",
            company: "Atos",
            person: "Atos Team",
            role: "Admin Team",
            rating: 5,
        },
        {
            id: "2",
            quote: "Thanks for your wonderful support on arranging vehicles for BCP in CBE office due to heavy rainfall in Chennai city. Appreciate all your efforts and hard work for helping us to run transport operation successfully in critical times. Please share our sincere thanks to all the team members.",
            company: "Walmart",
            person: "Walmart Admin Team",
            role: "Admin Team",
            rating: 5,
        },
        {
            id: "3",
            quote: "Dear Yusuf & Amol, I would like to extend my thanks to you and the entire team for the support, and timely scheduling of our travel requirements. You and your team are prompt and addresses last minute requests efficiently. It's been around 7 months of association with you and I am pretty much happy. Thank you for your support and let us work together in future as well.",
            company: "meyn",
            person: "meyn",
            role: "Corporate Client",
            rating: 5,
        },
        {
            id: "4",
            quote: "We would like to extend sincere appreciation to you, your team and drivers for the exceptional support provided on Monday during the challenges posed by heavy traffic and rains in the city. Your team's commitment to ensuring the turnaround of the cabs for the logouts played a crucial role in managing the situation to ensure employees are safely transported. This is the level of service and commitment that makes a real difference, and we truly value the partnership we share with your team.",
            company: "Wellsfargo",
            person: "Wellsfargo Bangalore",
            role: "Transport Desk",
            rating: 5,
        },
        {
            id: "5",
            quote: "This is to appreciate your team in all aspects as Brand Systems has been using Fiesta Smart Mobility from last 6-7 months and we have been more than satisfied with the services provided till date. Yusuf Khan has always been supported and providing cars even during the night and on very short notice as well. We wish the very best to Fiesta Smart Mobility and look forward to long Business relations.",
            company: "Brand Systems",
            person: "Brand Systems",
            role: "Event Management",
            rating: 5,
        },
        {
            id: "6",
            quote: "We would like to thank you and your team member for excellent service to our organization. We are grateful to your team member by timely cab support to our employees for the CEO/Suppliers connect held at MSPT from 14th to 16th Dec 2023. This has been greatly helping us to meet our employee's requirement on time and supporting last minute request by responding/answering which has achieving customer satisfaction. We look forward the same level of commitment and standards in all our future projects/events, daily operations etc., Once again thanks to everyone.",
            company: "Mahindra Research Valley",
            person: "Admin Team",
            role: "Admin Team",
            rating: 5,
        },
    ];

    const renderStars = (rating: number) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={`${index < rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                        size={16}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="w-full py-8 md:py-20 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {showEyebrow && (
                        <p className="text-[#D32F2F] uppercase tracking-wider text-sm font-semibold mb-3">
                            {eyebrow}
                        </p>
                    )}
                    <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
                        {title}
                    </h2>
                </div>

                <div className="relative group overflow-x-hidden">
                    {/* Custom Navigation Arrows */}
                    <button className="swiper-prev absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-xl flex items-center justify-center shadow-lg hover:bg-white transition-all text-gray-400 hover:text-gray-900 border border-gray-100">
                        <FaChevronLeft size={16} />
                    </button>
                    <button className="swiper-next absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-xl flex items-center justify-center shadow-lg hover:bg-white transition-all text-gray-400 hover:text-gray-900 border border-gray-100">
                        <FaChevronRight size={16} />
                    </button>

                    {/* Testimonials Carousel */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.swiper-prev',
                            nextEl: '.swiper-next',
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-[#FFF5F5] rounded-[40px] p-8 md:p-12 shadow-sm mb-12 border border-pink-50 max-w-6xl mx-auto">
                                    {/* Quote Icon */}
                                    <div className="flex justify-center mb-10">
                                        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-800">
                                            <path d="M11.4286 0C5.11429 0 0 5.11429 0 11.4286V32H16V16H8V11.4286C8 9.54286 9.54286 8 11.4286 8V0ZM35.4286 0C29.1143 0 24 5.11429 24 11.4286V32H40V16H32V11.4286C32 9.54286 33.5429 8 35.4286 8V0Z" fill="currentColor" />
                                        </svg>
                                    </div>

                                    {/* Quote Text */}
                                    <p className="text-gray-800 text-sm md:text-[15px] font-medium leading-relaxed mb-10 text-center max-w-5xl mx-auto">
                                        {testimonial.quote}
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-start gap-5 max-w-2xl mx-auto pl-4">
                                        {/* Avatar */}
                                        <div className="flex-shrink-0">
                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="30" cy="30" r="30" fill="black" />
                                                <circle cx="30" cy="22" r="8" fill="white" fillOpacity="0.2" />
                                                <path d="M15 45C15 38.3726 21.7157 33 30 33C38.2843 33 45 38.3726 45 45" stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.3" />
                                            </svg>
                                        </div>

                                        {/* Name, Role and Stars */}
                                        <div className="flex flex-col gap-1">
                                            <h4 className="font-bold text-gray-900 text-base">
                                                {testimonial.company}
                                            </h4>
                                            <p className="text-gray-600 text-[13px] font-semibold mb-1">
                                                {testimonial.role}
                                            </p>
                                            <div className="flex-shrink-0">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
