import React from 'react';
import Image from 'next/image';

const HebbalNorth = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[50%] relative h-[350px] md:h-[450px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-bangalore/unnamed-7-3.jpg"
                            alt="Hebbal and North Bangalore Glass Buildings"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[50%] md:pl-8">
                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-6 leading-tight">
                            Hebbal & North Bangalore
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            With its strategic location and proximity to Kempegowda International Airport, Hebbal and North Bangalore are growing fast. While Fiesta doesn&apos;t offer airport pickup or airport transfers, our rapidly expanding network connects professionals in these areas with important office zones across the city.
                        </p>
                        <p className="text-[#555555] text-[16px] leading-relaxed">
                            Employees enjoy consistent pick up points, smooth routing, and the reliability that&apos;s often missing from most public transportation options, without detours through Bangalore airport traffic. It&apos;s commuting built for busy professionals, minus the airport rush.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HebbalNorth;
