"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CareerCTA = () => {

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl overflow-hidden bg-gray-900 min-h-[500px] flex items-center">
                    {/* Background Image */}
                    <Image
                        src="/images/careers/Cta.jpeg"
                        alt="Join Fiesta"
                        fill
                        className="object-cover opacity-50"
                    />

                    {/* Content Overlay */}
                    <div className="relative z-10 w-full max-w-2xl px-8 py-16 md:px-16 text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Start Your Journey with Fiesta Today
                        </h2>
                        <p className="text-lg text-gray-200 mb-10 leading-relaxed">
                            Ready to build a stable and rewarding career in employee transport services? Join a trusted company with 28+ years of excellence and opportunities across India. Apply now and our team will get in touch with you shortly.
                        </p>

                        <Link
                            href="/reach-us"
                            className="bg-[#EC2028] text-white px-8 py-4 rounded-full font-bold hover:bg-[#c51c24] transition-all transform hover:-translate-y-1 shadow-xl inline-flex items-center gap-2"
                        >
                            Fill out a quick application form
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerCTA;
