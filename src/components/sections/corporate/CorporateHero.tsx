import React from "react";
import Image from "next/image";

const CorporateHero = () => {
    return (
        <section className="relative w-full min-h-[600px] flex items-center justify-center pt-20 pb-16 lg:py-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/services-offered/premium-car-rentals/corporate-car-rental-services/corporate-hero-bg.jpg"
                    alt="Corporate Car Rental Service"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">

                    {/* Left Text Content */}
                    <div className="text-white text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Best Corporate Car Rental Service
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Discover how to pick a reliable, cost-efficient, and professional car rental service that meets your company&apos;s travel needs — with confidence, safety, and convenience.
                        </p>
                        <button className="bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded text-lg transition-colors">
                            Get A Free Quote
                        </button>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md mx-auto lg:ml-auto">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                    First Name <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                    Email Address <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full rounded border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                    Phone Number <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="w-full rounded border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                    Company <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    rows={3}
                                    maxLength={180}
                                    className="w-full rounded border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-bold py-3.5 rounded transition-colors text-lg mt-2"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CorporateHero;
