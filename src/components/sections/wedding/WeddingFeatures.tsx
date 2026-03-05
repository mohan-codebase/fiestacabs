"use client";

import React from "react";
import Image from "next/image";
import { FaSun, FaMapLocationDot, FaCarBurst, FaHandHoldingDollar, FaArrowsRotate, FaIdCardClip } from "react-icons/fa6"; // A suitable icon for the star/wheel shape

const WeddingFeatures = () => {
    const features = [
        {
            icon: <FaMapLocationDot className="text-3xl text-[#EC2028]" />,
            title: "Pan India Presence",
            desc: "Clean, high-performing luxury car rentals are available in all major cities."
        },
        {
            icon: <FaCarBurst className="text-3xl text-[#EC2028]" />,
            title: "Chauffeurs",
            desc: "Chauffeur-driven cars with etiquette and safety"
        },
        {
            icon: <FaHandHoldingDollar className="text-3xl text-[#EC2028]" />,
            title: "Affordability",
            desc: "Affordable price without cutting corners"
        },
        {
            icon: <FaArrowsRotate className="text-3xl text-[#EC2028]" />,
            title: "Replacement",
            desc: "Quick replacements in case of unexpected issues"
        },
        {
            icon: <FaIdCardClip className="text-3xl text-[#EC2028]" />,
            title: "Experience",
            desc: "Verified drivers with years of experience handling luxury car movements."
        }
    ];
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8 space-y-24">

                {/* Block 1: What Makes Us Reliable Grid */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#2A2A2A]">
                            What Makes Us Reliable
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto mb-20">
                        {/* Top Row: 3 Items */}
                        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 w-full">
                            {features.slice(0, 3).map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center w-full md:flex-1 md:min-w-0 border border-gray-100/50"
                                >
                                    <div className="mb-6 h-12 flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-[#2A2A2A]">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#5A5A5A] text-[15px] leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Row: 2 Items */}
                        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 w-full mt-2 md:mt-4">
                            {features.slice(3, 5).map((feature, index) => (
                                <div
                                    key={index + 3}
                                    className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center w-full md:flex-1 md:min-w-0 border border-gray-100/50"
                                >
                                    <div className="mb-6 h-12 flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-[#2A2A2A]">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#5A5A5A] text-[15px] leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Block 1: Entrance in Style and Grace */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Content - Left */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="text-[#EC2028] font-semibold text-sm tracking-widest uppercase mb-4">
                            MAKE YOUR GRAND
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            Entrance in Style and Grace
                        </h2>

                        <div className="space-y-5 text-gray-700 text-[15px] leading-relaxed">
                            <p>
                                Every luxury car we use reflects elegance, comfort, and prestige. A wedding day is about emotions, but it's also about impressions, especially on special occasions. Every luxury car rental in our fleet is cleaned, polished, and prepped to match your big day energy.
                            </p>
                            <p>
                                Businesses organising events, managing hospitality, or delivering wedding packages need cars that reflect excellence within your budget .
                            </p>
                            <p>
                                That's where our luxury car rentals, wedding packages, and car rental for weddings shine. From convertible cars to classic vintage cars, we have it all. Every wedding car model we offer carries the message of elegance.
                            </p>
                            <p>
                                Mid-size luxury sedans (C and E class type) are part of our popular luxury car rentals.
                            </p>
                            <p>
                                Our range includes:
                            </p>
                            <p className="pt-2">
                                Each vehicle is inspected before dispatch. The interiors are fresh, the ACs are functional, and drivers are briefed on route plans. From the time the car arrives until the moment your client steps out at the mandap, everything is timed and polished.
                            </p>
                            <p>
                                Many of our cars have made it to wedding albums across India. Not because they looked good, but because they worked perfectly. That's the kind of backup a business like yours needs to rent luxury car .
                            </p>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px]">
                        <Image
                            src="/images/services-offered/premium-car-rentals/wedding-cars/entrance-in-style.jpg"
                            alt="Wedding couple entrance in style"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Block 2: Flexible Rental Plans */}
                <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Image - Left */}
                    <div className="w-full lg:w-5/12 relative min-h-[500px] lg:min-h-[750px] border-[8px] border-white shadow-sm">
                        <Image
                            src="/images/services-offered/premium-car-rentals/wedding-cars/flexible-rental-plans.jpg"
                            alt="Flexible rental plans for wedding"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content - Right */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                            Flexible Rental Plans for Every Wedding Style
                        </h2>
                        <div className="w-16 h-1 bg-[#EC2028] mb-8"></div>

                        <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed mb-8">
                            <p>
                                Not all weddings are the same. Some need showstopping luxury, some need smooth and efficient movement across venues, and others need a mix of both. Mixing practical cars with luxury car rentals gives flexibility and elegance together. That's why our car rental service for weddings comes with flexible planning and goes the extra mile to ensure satisfaction. You choose what works for your dream event, creating a memorable experience and we make it happen.
                            </p>
                            <p>
                                We offer cars for:
                            </p>
                        </div>

                        {/* List items */}
                        <div className="space-y-5 mb-8">
                            {[
                                "Single-day wedding ceremonies",
                                "Multi-day destination weddings with rotating luxury car rentals.",
                                "Small family-only functions",
                                "Large guest transport solutions"
                            ].map((item, index) => (
                                <div key={index} className="flex gap-3 items-start">
                                    <div className="shrink-0 mt-1">
                                        <FaSun className="text-[#EC2028] text-xl" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-[15px] leading-tight mt-0.5">
                                        {item}
                                    </h4>
                                </div>
                            ))}
                        </div>

                        {/* Remaining Paragraphs */}
                        <div className="space-y-5 text-gray-700 text-[15px] leading-relaxed">
                            <p>
                                You can book hourly, full-day, or per-event. Need the car just for an entry? Done. Need the same car for multiple locations? We plan the route, calculate the budget, and keep the timing tight.
                            </p>
                            <p>
                                Our clients often ask to mix luxury cars with practical ones. An executive sedan for the couple and MUVs for relatives? Easy. A premium sedan for VIPs and a high-end vehicle for the reception? Our team suggests the best luxury car depending on the guest's profile and event mood.
                            </p>
                            <p>
                                There are no hidden costs. We send full quotes before booking for our services, ensuring you get the best deals. , ensuring you get the best deals. You also get car pictures, model year, and driver details in advance. We adjust quickly in case of last-minute add-ons or changes.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WeddingFeatures;
