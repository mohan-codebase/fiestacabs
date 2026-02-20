"use client";

import React from "react";
import Image from "next/image";
import { FaShieldAlt } from "react-icons/fa";

const WeddingReliability = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image - Left */}
                    <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
                        <div className="absolute inset-0 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/wedding/reliable-couple.jpg"
                                alt="Reliable Wedding Service"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content - Right */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Our Reliable Wedding Car Rental Solution
                        </h2>

                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            Your wedding day requires perfect timing and flawless execution. We ensure your transportation is one less thing to worry about with our dependable luxury service:
                        </p>

                        <div className="space-y-6">
                            {[
                                "Professional, uniformed chauffeurs",
                                "Guaranteed availability once booked",
                                "Punctual arrivals, every time",
                                "Impeccably maintained luxury fleet",
                                "Dedicated support for your itinerary"
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 items-center">
                                    <div className="shrink-0 text-[#EC2028] text-2xl">
                                        <FaShieldAlt />
                                    </div>
                                    <p className="text-gray-800 text-lg font-medium">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <p className="text-gray-600 mb-4">
                                Flexible Rental Plans:
                            </p>
                            <p className="text-gray-600">
                                Whether you need the car for a few hours for the entry/exit or for the entire day for multiple events, we have customizable packages to suit your needs.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WeddingReliability;
