import React from 'react';
import Image from 'next/image';

const RideSmart = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative h-[400px] md:h-[500px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-delhi/unnamed-3-8.jpg"
                            alt="Ride Smart, Ride Fiesta"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%] md:pl-8">
                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-6 leading-tight">
                            Ride Smart, Ride Fiesta: Shuttle Service in Delhi
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-10">
                            Fiesta&apos;s shuttle routes are mapped across major office locations in Delhi, from Connaught Place and Nehru Place to Okhla, Saket, and beyond. With nearest pick up point options near metro stations, petrol pumps, and gas stations, getting on board is always convenient.
                        </p>

                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-6 leading-tight">
                            Gate-to-Gate Transport: Direct and Reliable
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed">
                            Our gate-to-gate model offers ride services from defined pick up points directly to office campuses, no wandering through lanes or wasting time looking for alternate transport.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RideSmart;
