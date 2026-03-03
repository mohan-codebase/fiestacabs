import React from 'react';
import Image from 'next/image';

const CommuteMadeSimple = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[50%] relative h-[400px] md:h-[500px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-services-in-hyderabad/unnamed-2-6.jpg"
                            alt="Hyderabad Commutes Made Simple"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[50%] md:pl-8">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-6 leading-tight">
                            Hyderabad Commutes Made Simple
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Fiesta&apos;s corporate shuttle network offers dependable transport that connects key office zones with accessible pick up points located near metro stations, business hubs, and high-density residential areas.
                        </p>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-10">
                            If your team is working in HITEC City, Gachibowli, or Financial District, our routes are carefully planned to reduce delays, minimize walking, and maintain punctuality across daily basis operations.
                        </p>

                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-6 leading-tight">
                            Gate-to-Gate Shuttle Service in Hyderabad: Direct and Dependable
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Our shuttle services in Hyderabad are built for corporate productivity. With point-to-point routes between major office locations and designated pickup areas, Fiesta eliminates last-mile confusion and long walks from bus stops or metro stations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommuteMadeSimple;
