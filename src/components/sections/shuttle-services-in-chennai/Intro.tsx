import React from 'react';
import Image from 'next/image';

const Intro = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-[45%] relative h-[450px] md:h-[550px] overflow-hidden rounded-md">
                        <Image
                            src="/images/services-offered/employee-transport-service/employee-transport-in-chennai/unnamed-2.jpg"
                            alt="Your Trusted Partner for Corporate Shuttle Services in Chennai"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    <div className="w-full md:w-[55%] md:pl-8">
                        <h4 className="text-[#fd6454] font-semibold text-[13px] tracking-[0.15em] uppercase mb-4">
                            FIESTA SHUTTLE SERVICE IN CHENNAI
                        </h4>
                        <h2 className="text-3xl lg:text-[42px] font-bold text-[#2A2A2A] mb-8 leading-[1.15] tracking-tight">
                            Your Trusted Partner for Corporate<br />Shuttle Services in Chennai
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
Fiesta Smart Mobility Services delivers professional, technology-driven, and reliable shuttle services in Chennai, explicitly designed to meet the employee transportation needs of corporate organizations. As Chennai's IT corridors, industrial hubs, and commercial zones continue to expand, dependable workforce mobility has become essential for maintaining productivity and operational continuity. With the city's traffic congestion and unpredictable travel times, providing smooth, stress-free commutes directly enhances employee satisfaction and retention.                        </p>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                           Corporate Employee Transportation
                        </p>

                        <p className="text-[#555555] text-[16px] leading-relaxed">
                         We provide end-to-end corporate shuttle solutions, expertly handling complex routes, variable shift schedules, and high employee volumes. Our services cover major business hubs, including TIDEL Park, OMR, Guindy, Ambattur, and Porur. Each commute is planned to ensure punctuality, safety, and optimal travel time, supporting corporate operations seamlessly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
