"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import BookNowButton from "../../common/BookNowButton";

const CTA = () => {
    return (
        <section className="relative py-24 overflow-hidden md:mb-20">
            <div className="absolute inset-0 z-0">
                <Image src="/images/premium-car-rentals/unnamed-8.jpg" alt="Experience Background" fill className="object-cover brightness-[0.3]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Experience the Difference of Premium Travel</h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                    Turn every trip into a statement of comfort and class. With Fiesta’s premium car rentals, you get more than just a ride — you get luxury, safety, and a seamless travel experience.
                    <br></br><br></br>
                    Whether it’s a business meeting, airport transfer, or special occasion, our top-tier fleet and professional chauffeurs ensure you always arrive in style.                </p>
                <BookNowButton className="bg-[#EC2028] hover:bg-red-700 text-white font-bold px-12 py-4 rounded-full text-lg transition-all shadow-xl">
                    Book your luxury ride today and travel the Fiesta way.
                </BookNowButton>
            </div>
        </section>
    );
};

export default CTA;
