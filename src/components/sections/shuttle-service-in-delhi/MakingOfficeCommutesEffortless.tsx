import React from 'react';
import Image from 'next/image';

const MakingOfficeCommutesEffortless = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative h-[450px] md:h-[550px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-delhi/unnamed-1-8.jpg"
                            alt="Making Office Commutes Effortless"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%] md:pl-4">
                        <h4 className="text-[#fd6454] font-semibold text-[13px] tracking-[0.15em] uppercase mb-4">
                            FIESTA SHUTTLE SERVICE IN DELHI
                        </h4>
                        <h2 className="text-3xl lg:text-[42px] font-bold text-[#2A2A2A] mb-8 leading-[1.15] tracking-tight">
                            Fiesta Shuttle Service in<br className="hidden lg:block" />Delhi - Making Office<br className="hidden lg:block" />Commutes Effortless
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            In a metro like Delhi, where traffic jams and long queues turn every commute into a challenging chore, the right transport solution can make or break your workday.
                        </p>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            For many teams, most public transportation options add stress before the work even begins.
                        </p>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Fiesta is changing that. With our shuttle service in Delhi, daily commuting becomes a power-packed part of your employee experience, not a struggle.
                        </p>
                        <p className="text-[#555555] text-[16px] leading-relaxed">
                            Designed with Delhi&apos;s corporate landscape in mind, our service is ideal for professionals traveling between busy corridors and major hubs near home and office locations, helping your team save money, time, and energy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakingOfficeCommutesEffortless;
