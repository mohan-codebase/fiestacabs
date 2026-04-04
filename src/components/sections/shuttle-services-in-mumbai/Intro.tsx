import React from 'react';
import Image from 'next/image';

const Intro = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    <div className="w-full md:w-[45%] relative h-[250px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-services-in-mumbai/WhatsApp Image 2026-04-01 at 18.51.19 (2).jpeg"
                            alt="Shuttle Service in Mumbai for Corporate Professionals"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    <div className="w-full md:w-[55%] md:pl-8">
                        <h4 className="text-[#fd6454] font-semibold text-[13px] tracking-[0.15em] uppercase mb-4">
                            FIESTA SHUTTLE SERVICE IN MUMBAI
                        </h4>
                        <h2 className="text-3xl lg:text-[42px] font-bold text-[#2A2A2A] mb-8 leading-[1.15] tracking-tight">
                            Shuttle Service in Mumbai for<br />Corporate Professionals
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
Fiesta Smart Mobility Services delivers reliable and technology-driven shuttle services across Mumbai. Designed for corporate offices, business campuses, and urban commuters, our services provide structured pickup and drop-off points while reducing commute costs, improving safety, and ensuring a comfortable experience for passengers.                        </p>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6 font-medium text-[#2A2A2A]">
                            Importance of Shuttle Services in Mumbai
                        </p>
                        <p className="text-[#555555] text-[16px] leading-relaxed">
                            Mumbai stands as one of India's busiest cities, where daily travel can be unpredictable and expensive. Structured shuttle services from Fiesta Smart Mobility allow professionals to avoid this uncertainty, offering consistent schedules, comfort, and peace of mind while traveling to work, offices, or transit hubs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
