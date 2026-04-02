import React from 'react';
import Image from 'next/image';

const Intro = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-[45%] relative h-[250px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-md">
                        <Image
                            src="/images/corporate-shuttle-service-in-pune/WhatsApp Image 2026-03-30 at 13.16.26 (2).jpeg"
                            alt="Reliable Corporate Shuttle Service in Pune"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    <div className="w-full md:w-[55%] md:pl-8">
                        <h4 className="text-[#fd6454] font-semibold text-[13px] tracking-[0.15em] uppercase mb-4">
                            FIESTA SHUTTLE SERVICE IN PUNE
                        </h4>
                        <h2 className="text-3xl lg:text-[42px] font-bold text-[#2A2A2A] mb-8 leading-[1.15] tracking-tight">
                            Reliable Corporate Shuttle<br />Service in Pune
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Fiesta Smart Mobility Services provides reliable and efficient shuttle services in Pune, designed for businesses and employees seeking a seamless commuting experience.
                        </p>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            With a strong focus on employee transportation, safety, and comfort, our services ensure smooth daily commutes while reducing travel-related challenges for corporate clients.
                        </p>
                        <p className="text-[#555555] text-[16px] leading-relaxed">
                            Our corporate shuttle service in Pune is built to support modern workplaces with dependable, technology-driven, and employee-friendly transport solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
