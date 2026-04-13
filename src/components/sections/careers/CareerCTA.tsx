"use client";

import React, { useState } from "react";
import Image from "next/image";

const CareerCTA = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

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

                        {!isFormOpen ? (
                            <button
                                onClick={() => setIsFormOpen(true)}
                                className="bg-[#EC2028] text-white px-8 py-4 rounded-full font-bold hover:bg-[#c51c24] transition-all transform hover:-translate-y-1 shadow-xl inline-flex items-center gap-2"
                            >
                                Fill out a quick application form
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        ) : (
                            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold">Apply Now</h3>
                                    <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-gray-600">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" />
                                        </svg>
                                    </button>
                                </div>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#EC2028] outline-none" required />
                                        <input type="email" placeholder="Mail ID" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#EC2028] outline-none" required />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Location" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#EC2028] outline-none" required />
                                        <input type="text" placeholder="Job role" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#EC2028] outline-none" required />
                                    </div>
                                    <input type="tel" placeholder="Mobile No" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#EC2028] outline-none" required />
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Upload Resume (PDF/DOC)</label>
                                        <input type="file" className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-[#EC2028] hover:file:bg-red-100" />
                                    </div>
                                    <button type="submit" className="w-full bg-[#EC2028] text-white py-4 rounded-lg font-bold hover:bg-[#c51c24] transition-all">
                                        Submit Application
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerCTA;
