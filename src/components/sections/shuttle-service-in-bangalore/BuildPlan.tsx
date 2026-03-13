import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from "../../../components/common/Button";

const BuildPlan = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/shuttle-service-in-bangalore/unnamed-9-1.jpg"
                    alt="Let's Get Started"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="brightness-[0.25]"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 relative z-10">
                <div className="w-full md:w-[60%] lg:w-[50%] text-white">
                    <h2 className="text-3xl md:text-[40px] font-bold mb-6 leading-tight text-white">
                        Let&apos;s Get Started
                    </h2>

                    <p className="text-gray-200 text-[16px] leading-relaxed mb-6">
                        If you&apos;re a business leader, operations head, or HR partner, now is the time to explore commuting as a strategic advantage.
                    </p>

                    <ul className="text-gray-200 space-y-2 mb-6 text-[16px]">
                        <li>Call: <a href="tel:+917845867512" className="text-white font-bold hover:text-[#E31E24]">+91 78458 67512</a></li>
                        <li>Book a quick consultation</li>
                        <li>Set up your first ride and experience the Fiesta difference</li>
                    </ul>

                    <p className="text-gray-200 text-[16px] leading-relaxed mb-6">
                        Whether you&apos;re operating in Bangalore or other cities, one shuttle, one pick up point, and one powerful solution is all it takes.
                    </p>

                    <p className="text-white font-bold text-[16px] leading-relaxed mb-10 italic">
                        Fiesta Smart Mobility – Where Bangalore&apos;s workforce rides smarter.
                    </p>

                    <Button href="/reach-us" className=" bg-[#E31E24] rounded text-[16px]">
                        Book Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BuildPlan;
