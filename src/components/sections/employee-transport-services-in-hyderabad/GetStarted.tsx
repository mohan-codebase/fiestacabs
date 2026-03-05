import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';

const GetStarted = () => {
    return (
        <section className="relative w-full py-20 md:py-28 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/employee-transport-services-in-hyderabad/unnamed-4-4.jpg"
                    alt="Get Started Background"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    className="brightness-[0.4]"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Get Started Today
                    </h2>
                    <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
                        Experience seamless and reliable Employee Transport Services in Hyderabad with Fiesta Smart Mobility. From real-time tracking to safe, comfortable rides — we make commuting stress-free for your workforce.                    </p>

                    <div className="space-y-4 mb-10">
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-[#E31E24] rounded-full mt-2.5 flex-shrink-0"></div>
                            <p className="text-white text-lg">



                                Call us today or request a free consultation to explore how our tailored transport solutions can simplify employee commuting for your organization.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-[#E31E24] rounded-full mt-2.5 flex-shrink-0"></div>
                            <p className="text-white text-lg">Fiesta Smart Mobility — Driving Hyderabad’s Workforce, One Ride at a Time.</p>
                        </div>
                    </div>

                    <Link
                        href="/reach-us"
                        className="inline-flex items-center justify-center gap-3 bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md shadow-lg transition-colors text-lg"
                    >
                        <FaPhoneAlt />
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
