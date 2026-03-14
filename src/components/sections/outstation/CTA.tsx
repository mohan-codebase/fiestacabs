"use client";

import React from "react";
import BookNowButton from "../../common/BookNowButton";
import { FaStar, FaChevronRight } from "react-icons/fa";

const CTA = () => {
    return (
        <section
            className="py-24 relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/services-offered/premium-car-rentals/outstation-rides/outstation-ride-starts-here.jpg")' }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10 md:bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                <div className="w-full md:w-2/3 lg:w-1/2">

                    {/* Star Rating */}
                    <div className="flex items-center gap-2 mb-4 text-white/90 font-medium">
                        <span>4.8 (729 Reviews)</span>
                        <div className="flex text-yellow-400 text-sm">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Your Outstation Ride Starts Here
                    </h2>

                    <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                        Need a ride beyond city limits? Fiesta makes outstation travel easy, safe, and affordable. Whether you&apos;re planning a weekend getaway or traveling for work, go where you want—with comfort and peace of mind.
                    </p>

                    <div className="space-y-4 mb-10">
                        {[
                            "Trusted by thousands across Bangalore, Delhi, Chennai, Mumbai, and more.",
                            "Flexible options—one-time rides, guest travel, or multi-day road trips.",
                            "Sit back and relax—we handle everything: route planning, safety, and reliable vehicles."
                        ].map((item, index) => (
                            <div key={index} className="flex gap-3 items-start">
                                <FaChevronRight className="text-[#EC2028] mt-1 shrink-0" />
                                <p className="text-gray-200 text-lg leading-snug">{item}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-white mb-8 text-lg font-medium">
                        Ready to hit the road? Fiesta will take care of the ride. You focus on the journey
                    </p>

                    <BookNowButton
                        className="inline-block bg-[#EC2028] btn-animated hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full transition-all text-lg shadow-xl hover:scale-105 active:scale-95"
                    >
                        Book Now
                    </BookNowButton>

                </div>
            </div>
        </section>
    );
};

export default CTA;
