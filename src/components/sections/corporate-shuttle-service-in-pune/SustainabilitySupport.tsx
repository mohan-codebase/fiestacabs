import React from 'react';
import Image from 'next/image';

const SustainabilitySupport = () => {


    const Icon = () => (
        <div className="shrink-0 mt-1">
            <Image
                src="/images/icon/tyre-icon.svg"
                alt="Tyre Icon"
                width={24}
                height={24}
                className="w-6 h-6"
            />
        </div>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-stretch">
                    <div className="w-full md:w-[50%] md:pr-4 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Sustainable and Efficient Corporate Transportation
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            Our shuttle services support sustainability by reducing traffic congestion and lowering carbon emissions through shared transportation. With real-time route optimisation, Fiesta helps companies achieve sustainability goals while maintaining cost-effective employee transport.                        </p>

                    </div>

                    <div className="w-full md:w-[50%] relative min-h-[250px] md:min-h-[250px] md:min-h-[500px] lg:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/corporate-shuttle-service-in-pune/WhatsApp Image 2026-03-30 at 13.16.24 (1).jpeg"
                            alt="Sustainability and Dedicated Support in Pune"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySupport;
