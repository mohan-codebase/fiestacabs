"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaCarSide, FaShieldAlt, FaRegThumbsUp, } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6"; // Or use any alternative for the star car
import Button from "../../../components/common/Button";

const FleetShowcase = () => {
    const features = [
        {
            icon: <FaCarRear className="text-xl text-white" />, // Placeholder for courteous drivers (car wash style)
            title: "Courteous drivers",
        },
        {
            icon: <FaRegClock className="text-xl text-white" />,
            title: "On-time arrival",
        },
        {
            icon: <FaCarSide className="text-xl text-white" />,
            title: "Smooth ride, especially in city traffic",
        },
        {
            icon: <FaShieldAlt className="text-xl text-white" />, // Placeholder for safe journey
            title: "Safe journey, always",
        },
        {
            icon: <FaRegThumbsUp className="text-xl text-white" />,
            title: "Clean interiors and exteriors",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Image - Left */}
                    <div className="w-full lg:w-1/2 relative h-[600px] lg:h-[700px]">
                        <div className="absolute inset-0 overflow-hidden p-2 bg-white">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/services-offered/premium-car-rentals/wedding-cars/why-couple-choose-us.jpg"
                                    alt="Why Couples Choose Us"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content - Right */}
                    <div className="w-full lg:w-1/2 pt-4 lg:pt-8">
                        <div className="text-[#EC2028] font-semibold text-sm tracking-widest uppercase mb-4">
                            WHY CHOOSE US
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Couples Choose Us
                        </h2>

                        <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed mb-8">
                            <p>
                                Event companies who have worked with us often tell us how their clients mention the cars in reviews. Couples remember the great experience of sitting in a luxury car driven with dignity, which makes them want to hire our services again for their customers. , which makes them want to hire our services again.
                            </p>
                            <p>
                                Here's why we get repeat bookings:
                            </p>
                        </div>

                        {/* List */}
                        <div className="space-y-5 mb-10">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-5 items-center">
                                    <div className="shrink-0 w-12 h-12 bg-[#EC2028] btn-animated rounded-full flex items-center justify-center shadow-md">
                                        {feature.icon}
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-900 leading-tight">
                                        {feature.title}
                                    </h4>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <Button href="/reach-us" className=" bg-[#EC2028] btn-animated rounded ">
                            To Know More
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FleetShowcase;
