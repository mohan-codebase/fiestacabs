import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const WhyStruggleCTA = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/shuttle-service-in-delhi/unnamed-6-4.jpg"
                    alt="Let's Get Started"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="brightness-[0.4]"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 relative z-10 flex justify-end">
                <div className="w-full md:w-[60%] lg:w-[50%] text-white">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-white font-bold text-[14px]">4.8 (729 Reviews)</span>
                        <div className="flex text-[#ffb400] text-[12px] gap-0.5">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-[36px] font-bold mb-6 leading-[1.2] text-white tracking-tight">
                        Fiesta Smart Mobility &ndash; Where Delhi&apos;s<br className="hidden md:block" />workforce rides smarter
                    </h2>

                    <p className="text-gray-200 text-[15px] leading-relaxed mb-6">
                        If you&apos;re an HR head, admin officer, or business leader, it&apos;s time to transform the<br className="hidden md:block" />daily grind.
                    </p>

                    <div className="text-gray-200 mb-6 text-[15px] flex flex-col space-y-1">
                        <span>Call: <a href="tel:+917845867512" className="text-white hover:text-[#E31E24]">+91 78458 67512</a></span>
                        <span>Book a quick consult</span>
                        <span>Schedule your first ride with Fiesta and feel the change</span>
                    </div>

                    <p className="text-gray-200 text-[15px] leading-relaxed mb-10">
                        Other cities may catch up, but Delhi is moving forward, one ride, one pick up point,<br className="hidden md:block" />one shuttle at a time.
                    </p>

                    <Link
                        href="/reach-us"
                        className="inline-block bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded transition-colors text-[16px]"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyStruggleCTA;
