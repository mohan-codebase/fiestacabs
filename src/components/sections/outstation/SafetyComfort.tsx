"use client";

import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaShieldAlt, FaClock, FaClipboardList } from "react-icons/fa";

const SafetyComfort = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image - Left */}
                    <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
                        <div className="absolute inset-0 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/services-offered/premium-car-rentals/outstation-rides/travel-safely.jpg"
                                alt="Travel Safely and Comfortably"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content - Right */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Travel Safely and Comfortably with Us
                        </h2>

                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            We understand that companies want more than just a working car. They need secure and convenient transport, especially for employees and business guests. Here’s what makes us different:
                        </p>

                        <div className="space-y-6">
                            {[
                                "Every driver is background verified",
                                "Vehicles are cleaned and sanitised after every trip",
                                "Customer support checks every ride status",
                                "Tracking links shared for every trip",
                                "Corporate dashboard for billing, invoices and history"
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
                                We also support airport pickups, late-night drops, and same-day outstation cab booking for visits to tourist places.
                            </p>
                            <p className="text-gray-600">
                                Need shuttle service for employees or inter-office movement? We’ve set up regular routes for daily and weekly schedules. You choose the time. We take care of the travel requirements.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SafetyComfort;
