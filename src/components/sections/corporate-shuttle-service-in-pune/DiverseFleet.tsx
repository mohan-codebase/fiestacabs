import React from 'react';
import Image from 'next/image';

const DiverseFleet = () => {
    const listItems = [
        "17-seater minibuses for smaller teams or residential pickups",
        "30 to 50-seater buses for larger employee groups",
        "Spacious seating and modern amenities for a comfortable ride",
        "GPS tracking and real-time monitoring for enhanced security and punctuality"
    ];
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
                            Diverse Fleet for Corporate Transportation
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            We operate a diverse fleet of vehicles maintained to high safety and reliability standards to meet different corporate commuting requirements in Pune.
                        </p>

                        <div className="space-y-6">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Icon />
                                    <p className="text-[#555555] text-[15px] leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="text-[#555555] text-[16px] leading-relaxed mt-8 font-medium">
                            All vehicles are maintained to high safety and reliability standards, ensuring accessibility and comfort for every passenger.                        </p>
                    </div>

                    <div className="w-full md:w-[50%] relative min-h-[300px] md:min-h-[500px] lg:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/corporate-shuttle-service-in-pune/WhatsApp Image 2026-03-30 at 13.16.25.jpeg"
                            alt="Diverse Fleet for Pune Corporate Transport"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiverseFleet;
