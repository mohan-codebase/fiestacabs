"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CareerCTA = () => {

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl overflow-hidden bg-gray-900 min-h-[400px] flex items-center">
                    {/* Background Image */}
                    <Image
                        src="/images/careers/Cta.jpeg"
                        alt="Join Fiesta"
                        fill
                        className="object-cover opacity-40"
                    />

                    {/* Content Overlay */}
                    <div className="relative z-10 w-full max-w-4xl mx-auto px-8 py-16 md:px-16 text-center text-white">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Fiesta Cabs does more than move people.  
                            {/* <br className="hidden md:block" /> */}
                            We help businesses operate smoothly every day.
                        </h2>
                        <p className="text-xl text-gray-200 mb-10 leading-relaxed font-medium">
                            Be part of that journey.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/reach-us"
                                className="bg-[#EC2028] text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-xl inline-flex items-center gap-2"
                            >
                                Apply Now
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerCTA;
