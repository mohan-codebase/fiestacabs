import React from "react";
import Image from "next/image";

const WeddingHero = () => {
    return (
        <section className="relative w-full min-h-[600px] flex items-center justify-center pt-20 pb-16 lg:py-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/wedding/wedding-live-bg.jpeg"
                    alt="Luxury Wedding Cars Rentals"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Dark Overlay to make text pop like the live site */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">

                    {/* Left Text Content */}
                    <div className="text-white text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Luxury & Wedding Cars Rentals
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Make your special day unforgettable with Fiesta’s luxury wedding car rentals.
                        </p>
                        <button className="bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded text-lg transition-colors">
                            Book Now
                        </button>
                    </div>

                    {/* Right Form Content */}
                    <div id="booking-form" className="bg-[#F8F9FA] rounded-[20px] shadow-2xl p-6 md:p-8 w-full max-w-md mx-auto lg:ml-auto">
                        <form className="space-y-5">
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
                            <div className="flex justify-between items-center border border-gray-200 bg-gray-50 rounded p-2 md:p-3 w-full mb-2 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" required id="robot-wedding" className="w-5 h-5 rounded border-gray-300 text-[#EC2028] focus:ring-[#EC2028] cursor-pointer" />
                                    <label htmlFor="robot-wedding" className="text-sm text-gray-700 cursor-pointer">I'm not a robot</label>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img src="/images/reCAPTCHA_icon.png" alt="reCAPTCHA" className="w-6 h-6 object-contain" />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-bold py-3.5 rounded transition-colors text-lg mt-2 flex justify-center items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                                Contact Now
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WeddingHero;
