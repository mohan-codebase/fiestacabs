"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
    return (
        <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Your Outstation Ride Starts Here</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Need a ride beyond city limits? Fiesta makes outstation travel easy, safe, and affordable. Go where you want—with comfort and peace of mind.
                </p>
                <Link href="#booking-form" className="inline-flex items-center gap-3 bg-[#EC2028] hover:bg-red-700 text-white font-bold px-10 py-4 rounded-lg transition-all text-xl shadow-xl hover:scale-105 active:scale-95">
                    Book Now <FaArrowRight />
                </Link>
            </div>
        </section>
    );
};

export default CTA;
