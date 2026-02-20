"use client";

import React from "react";
import Image from "next/image";
import { FaCompactDisc } from "react-icons/fa";

const WeddingStories = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8 space-y-24">

                {/* Block 1: Real Love Stories */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Content - Left */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#2A2A2A] mb-8 leading-tight">
                            Real Love Stories
                        </h2>

                        <div className="space-y-5 text-[#5A5A5A] text-[15px] leading-relaxed mb-8">
                            <p>
                                We&apos;ve worked with over 3,000+ weddings in India. Some of our favourite ones:
                            </p>
                        </div>

                        <div className="space-y-6 mb-8">
                            {[
                                "A corporate client arranged a fleet of 12 high-end vehicles for a palace wedding in Jaipur",
                                "A wedding planner in Chennai booked an ultra-luxury sedan for the groom and an executive sedan for the bride",
                                "A destination wedding in Goa required eight airport transfers daily using our premium MUVs and spacious SUVs",
                                "One bride booked a red luxury car for her temple entry, and the crowd paused to admire"
                            ].map((item, index) => (
                                <div key={index} className="flex gap-3 items-start">
                                    <div className="shrink-0 mt-0.5">
                                        <FaCompactDisc className="text-[#EC2028] text-2xl" />
                                    </div>
                                    <p className="text-[#2A2A2A] text-[15px] leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-5 text-[#5A5A5A] text-[15px] leading-relaxed">
                            <p>
                                We didn&apos;t just send cars. We stayed on call, solved last-minute issues, and kept the events running smoothly. From mandap to reception, we made sure every entry, every exit, and every ride was on time and well-executed.
                            </p>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px]">
                        <Image
                            src="/images/services-offered/premium-car-rentals/wedding-cars/real-love-stories.jpg"
                            alt="Bride in elegant wedding dress"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Block 2: Proudly, Your Favourite Wedding Destinations */}
                <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Image - Left */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[600px]">
                        <Image
                            src="/images/services-offered/premium-car-rentals/wedding-cars/prouldly-favourite.jpg"
                            alt="Couple getting ready for destination wedding"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content - Right */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#2A2A2A] mb-8 leading-tight">
                            Proudly, Your Favourite<br />Wedding Destinations
                        </h2>

                        <div className="space-y-5 text-[#5A5A5A] text-[15px] leading-relaxed mb-8">
                            <p>
                                From Delhi to Coimbatore, from Hyderabad to Indore, we&apos;ve helped companies plan memorable weddings. Every car, every booking, and every kilometre has been delivered with discipline.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                "We at Fiesta bring decades of car rental experience with a focus on safety, luxury, and smooth coordination.",
                                "Apart from wedding cars, Fiesta also runs a secure employee shuttle service and corporate car hire. We help businesses move better.",
                                "Our clients include hospitality groups, MNCs, wedding planners, and event managers. With the right fleet, skilled chauffeurs, and fair cost, we&apos;re ready to drive your clients toward forever."
                            ].map((item, index) => (
                                <div key={index} className="flex gap-3 items-start">
                                    <div className="shrink-0 mt-0.5">
                                        <FaCompactDisc className="text-[#EC2028] text-2xl" />
                                    </div>
                                    <p className="text-[#2A2A2A] text-[15px] leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WeddingStories;
