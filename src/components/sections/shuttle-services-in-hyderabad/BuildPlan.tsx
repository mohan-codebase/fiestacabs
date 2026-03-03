import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BuildPlan = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/shuttle-services-in-hyderabad/unnamed.png"
                    alt="Build Your Company's Commute Plan"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="brightness-[0.25]"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 relative z-10">
                <div className="w-full md:w-[60%] lg:w-[50%] text-white ml-auto">
                    <h4 className="text-[#E31E24] font-bold text-sm tracking-widest uppercase mb-3">
                        Fiesta Shuttle Service in Hydrabad:
                    </h4>
                    <h2 className="text-3xl md:text-[40px] font-bold mb-6 leading-tight text-white">
                        Let&apos;s Build Your Company&apos;s Commute Plan
                    </h2>

                    <p className="text-gray-200 text-[16px] leading-relaxed mb-6">
                        If you&apos;re managing operations, HR, or administration in a fast-growing Hyderabad business, now is the time to consider shuttle services in Hyderabad that reduce cost, improve attendance, and support growth.
                    </p>

                    <ul className="text-gray-200 space-y-2 mb-6 text-[16px]">
                        <li>Call us at <a href="tel:+917845867512" className="text-white font-bold hover:text-[#E31E24]">+91 78458 67512</a></li>
                        <li>Book a quick consultation</li>
                        <li>Reserve your team&apos;s first ride and experience Fiesta firsthand</li>
                    </ul>

                    <p className="text-gray-200 text-[16px] leading-relaxed mb-6">
                        Why rely on cars, cabs, or slow public buses when you can upgrade your daily commute with a shuttle that puts your team&apos;s productivity first?
                    </p>

                    <p className="text-white font-bold text-[16px] leading-relaxed mb-10 italic">
                        Fiesta Smart Mobility – Where Hyderabad rides better. <br />
                        One pickup, one shuttle, one smart ride at a time.
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

export default BuildPlan;
