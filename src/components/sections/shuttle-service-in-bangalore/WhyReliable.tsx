import React from 'react';
import Image from 'next/image';

const WhyReliable = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[50%] relative h-[450px] md:h-[550px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-bangalore/unnamed-2-7.jpg"
                            alt="Reliable Shuttle Bus Service in Bangalore"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[50%] md:pl-8">
                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-6 leading-tight">
                            Why Fiesta? Reliable Shuttle Bus Service in Bangalore
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            With Bangalore&apos;s spread-out tech parks and residential pockets, employees often spend too much time navigating adhoc requests, inconsistent carpools, or waiting for a shuttle bus that may never come. Fiesta brings structure, comfort, and efficiency to that daily experience.
                        </p>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-10">
                            Designed with Bangalore&apos;s corporate environment in mind, our service supports professionals travelling between high-traffic areas and tech clusters near home and office locations, helping your team save money, reduce stress, and travel smarter.
                        </p>

                        <h3 className="text-[22px] font-bold text-gray-900 mb-4">
                            Gate-to-Gate Shuttle Service: Reliable, Direct, No Detours
                        </h3>
                        <p className="text-[#555555] text-[16px] leading-relaxed">
                            Fiesta&apos;s gate-to-gate model ensures direct employee transportation services between curated pick up points and strategic drop off points. The result? Less walking, zero last-mile delays, and maximum convenience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyReliable;
