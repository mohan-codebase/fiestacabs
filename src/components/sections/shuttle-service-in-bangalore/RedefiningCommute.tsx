import React from 'react';
import Image from 'next/image';

const RedefiningCommute = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative h-[450px] md:h-[550px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-bangalore/unnamed-1-7.jpg"
                            alt="Redefining the Corporate Commute"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%] md:pl-8">
                        <h4 className="text-[#fd6454] font-semibold text-[13px] tracking-[0.15em] uppercase mb-4">
                            FIESTA SHUTTLE SERVICE IN BANGALORE
                        </h4>
                        <h2 className="text-3xl lg:text-[42px] font-bold text-[#2A2A2A] mb-8 leading-[1.15] tracking-tight">
                            Fiesta Shuttle Service in<br />Bangalore: Redefining the<br />Corporate Commute
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            In India&apos;s Silicon Valley, where work culture meets mind-numbing traffic, the daily commute often becomes a challenging chore.
                        </p>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Be it long queues, unpredictable weather, or traffic jams, most public transportation options in Bangalore test both patience and productivity. That&apos;s why Fiesta is here to help turn commuting into a smooth, reliable experience.
                        </p>
                        <p className="text-[#555555] text-[16px] leading-relaxed">
                            Our shuttle service in Bangalore is designed to offer dependable, timely, and cost effective employee transportation services, connecting professionals with key office locations across the city.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RedefiningCommute;
