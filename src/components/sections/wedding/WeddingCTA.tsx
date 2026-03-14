"use client";

import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Button from "../../../components/common/Button";
import BookNowButton from "../../common/BookNowButton";

const WeddingCTA = () => {
    return (
        <section
            className="relative py-24 min-h-[500px] flex items-center"
            style={{
                backgroundImage: `url('/images/services-offered/premium-car-rentals/wedding-cars/cta.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 md:px-8">
                <div className="flex justify-end">
                    <div className="w-full lg:w-1/2 text-white">

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm font-semibold">4.8 (729 Reviews)</span>
                            <div className="flex text-[#F5B546] text-sm gap-0.5">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold mb-6 leading-tight">
                            Reserve Your Wedding<br />Ride Today
                        </h2>

                        {/* Content */}
                        <div className="space-y-4 text-gray-200 text-[15px] leading-relaxed mb-8 max-w-xl">
                            <p>
                                Your events need reliable partners. Not every car rental service understands the demands of Indian weddings. We do and we show up every time with the right cars, well-dressed drivers, and a clear plan.
                            </p>
                            <p>
                                Choose your luxury car now before premium models are fully booked
                            </p>
                            <p>
                                Book early. Avoid last-minute panic. Call us today and let&apos;s plan your fleet.
                            </p>
                        </div>

                        {/* Button */}
                        <BookNowButton className="bg-[#EC2028] btn-animated hover:bg-[#D11820] rounded duration-300">
                            Book Now
                        </BookNowButton>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingCTA;
