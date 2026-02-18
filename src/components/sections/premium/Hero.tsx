"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/premium-car-rentals/hero.jpeg"
                    alt="Premium Car Rentals Hero"
                    fill
                    className="object-cover brightness-[0.4]"
                    priority
                />
            </div>
            <div className="max-w-[1440px] mx-auto px-4 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Premium Car rentals
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                        Ride in style and comfort with Fiesta’s Premium Car Rentals — luxury vehicles, professional chauffeurs and seamless booking for airport transfers, road trips or special occasions.
                    </p>
                    <Link
                        href="#booking-form"
                        className="inline-block bg-[#EC2028] hover:bg-red-700 text-white font-bold px-8 py-3 rounded text-lg transition-all"
                    >
                        Book a Ride Today
                    </Link>
                </div>

                {/* Quick Booking Form */}
                <div id="booking-form" className="bg-white p-8 rounded-lg shadow-2xl max-w-md ml-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Your Ride</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 outline-none" placeholder="Enter your name" required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 outline-none" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                            <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 outline-none" placeholder="Enter phone number" required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Pick-up Location</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 outline-none" placeholder="Enter location" required />
                        </div>
                        <div className="p-3 bg-gray-50 rounded border border-gray-200 flex items-center gap-3">
                            <input type="checkbox" id="captcha" className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                            <label htmlFor="captcha" className="text-xs text-gray-600">I am not a robot</label>
                            <div className="ml-auto">
                                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" width={20} height={20} className="grayscale opacity-50" />
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-bold py-3 rounded shadow-md transition-colors">
                            BOOK NOW
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;
