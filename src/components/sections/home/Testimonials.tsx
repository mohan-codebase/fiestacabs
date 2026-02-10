"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

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

const Testimonials = () => {
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
                    <p className="text-[#D32F2F] uppercase tracking-wider text-sm font-semibold mb-3">
                        TESTIMONIALS
                    </p>
                    <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
                        What our customer says
                    </h2>
                </div>

                {/* Testimonials Carousel */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
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
                            <div className="bg-secondary rounded-2xl p-8 md:p-12 shadow-sm mb-12">
                                {/* Quote Icon */}
                                <div className="flex justify-center mb-6">
                                    <FaQuoteLeft className="text-gray-300" size={48} />
                                </div>

                                {/* Quote Text */}
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto">
                                    {testimonial.quote}
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center justify-center gap-4 flex-wrap">
                                    {/* Avatar */}
                                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-semibold text-lg">
                                            {testimonial.person.charAt(0)}
                                        </span>
                                    </div>

                                    {/* Name and Company */}
                                    <div className="text-center md:text-left">
                                        <h4 className="font-bold text-gray-900 text-lg">
                                            {testimonial.company}
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            {testimonial.person}
                                        </p>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex-shrink-0">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
