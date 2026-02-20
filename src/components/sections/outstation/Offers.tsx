"use client";

import React from "react";
import Image from "next/image";
import { FaRegCircleDot } from "react-icons/fa6"; // Using circle dot as placeholder for wheel icon

const Offers = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image - Left */}
                    <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] order-2 lg:order-1">
                        <div className="absolute inset-0 overflow-hidden">
                            <Image
                                src="/images/services-offered/premium-car-rentals/outstation-rides/exciting-offers.jpg"
                                alt="Exciting Offers and Discounts"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content - Right */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Exciting Offers and Discounts on Outstation Trips
                        </h2>

                        <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                            We don&apos;t confuse you with app codes and promo games. If you&apos;re a business account with regular travel needs, you get support for any queries related to your bookings.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Flat trip discounts for monthly rides",
                                "Special rates for round-trip cab services",
                                "Free upgrade to SUV or premium sedan (for long rides)",
                                "Referral bonus when you onboard partner vendors",
                                "No charges if cancelled before 2 hours"
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 items-center">
                                    <div className="shrink-0 w-8 h-8 rounded-full border-2 border-[#EC2028] flex items-center justify-center text-[#EC2028] bg-white">
                                        <FaRegCircleDot className="text-sm" />
                                    </div>
                                    <p className="text-gray-800 text-lg">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offers;
