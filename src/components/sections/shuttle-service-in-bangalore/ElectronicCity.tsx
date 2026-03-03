import React from 'react';
import Image from 'next/image';

const ElectronicCity = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-[#Eef2f6]">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-[50%] md:pr-12">
                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-6 leading-tight">
                            Electronic City
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Electronic City continues to grow as a leading business district. Fiesta supports this growth with shuttle routes that serve key areas across the zone. Our pick up points are thoughtfully chosen to connect with metro stations, petrol pumps, and residential hubs, offering employees a seamless ride to their office.
                        </p>

                        <p className="text-[#555555] text-[16px] leading-relaxed">
                            Even with Bangalore&apos;s shifting work schedules, our fixed time slots and planned routing make commutes stress-free and reliable, helping your business maintain efficiency from the very first ride.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[50%] relative h-[400px] md:h-[500px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-bangalore/unnamed-6-3.jpg"
                            alt="Electronic City Night Interchange"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ElectronicCity;
