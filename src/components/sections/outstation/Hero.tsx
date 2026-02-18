"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    const [message, setMessage] = useState("");

    return (
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/services-offered/hero.jpeg"
                    alt="Outstation Rides Hero"
                    fill
                    className="object-cover brightness-[0.4]"
                    priority
                />
            </div>
            <div className="max-w-[1440px] mx-auto px-4 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Outstation Cab & Intercity Rides Across India
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                        Outstation Cab from Chennai / Delhi / Bangalore… Reliable, safe, and comfortable intercity travel solutions tailored for your needs.
                    </p>
                    <Link
                        href="#booking-form"
                        className="inline-block bg-[#EC2028] hover:bg-red-700 text-white font-bold px-8 py-3 rounded text-lg transition-all"
                    >
                        Book Your Outstation Ride Now
                    </Link>
                </div>

                {/* Refined Booking Form */}
                <div id="booking-form" className="bg-white p-8 rounded-xl shadow-2xl max-w-md ml-auto border border-gray-100">
                    <form className="space-y-4 text-gray-800">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">First Name *</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-1 focus:ring-red-500 outline-none transition-all" required />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-1 focus:ring-red-500 outline-none transition-all" required />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                            <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-1 focus:ring-red-500 outline-none transition-all" required />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Company *</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-1 focus:ring-red-500 outline-none transition-all" required />
                        </div>
                        <div className="relative">
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-xs font-bold text-gray-700">Message</label>
                                <span className="text-[10px] text-gray-400">{message.length} / 180</span>
                            </div>
                            <textarea
                                className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-1 focus:ring-red-500 outline-none h-24 resize-none transition-all"
                                maxLength={180}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        {/* reCAPTCHA Styled */}
                        <div className="p-4 bg-[#f9f9f9] rounded border border-gray-200 flex items-center justify-between shadow-inner">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 border-2 border-gray-300 bg-white rounded flex items-center justify-center cursor-pointer">
                                    <div className="w-4 h-4 rounded-sm"></div>
                                </div>
                                <span className="text-xs text-gray-600 font-medium">I'm not a robot</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" width={28} height={28} className="mb-0.5" />
                                <span className="text-[8px] text-gray-400 leading-none">reCAPTCHA</span>
                                <span className="text-[6px] text-gray-400 mt-0.5">Privacy - Terms</span>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-bold py-3.5 rounded shadow-lg transition-all active:scale-[0.98] uppercase text-sm tracking-wider">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;
