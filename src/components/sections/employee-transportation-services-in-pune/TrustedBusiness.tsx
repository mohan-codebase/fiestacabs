import React from 'react';
import Image from 'next/image';

const TrustedBusiness = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-[60%] md:pr-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Trusted Employee Transportation Services in Pune for Businesses
                        </h2>

                        <div className="space-y-6">
                            <p className="text-[#555555] text-[16px] leading-relaxed">
                                At Fiesta, we understand that effective transportation services in Pune are essential to meet business demands. Our solutions balance cost, safety, and reliability while ensuring employees travel comfortably every day. With our dedicated team, experienced drivers, and commitment to quality, we deliver services that actively support companies and their workforce.
                            </p>

                            <p className="text-[#555555] text-[16px] leading-relaxed">
                                We focus on reducing travel time, offering dependable commutes, and creating hassle free operations that benefit employees and businesses alike. Whether your company requires daily commutes, optimized routes, or reliable transportation planning, Fiesta is committed to delivering excellence.
                            </p>

                            <p className="text-[#555555] text-[16px] leading-relaxed font-medium">
                                Fiesta continues to be a trusted name for employee transportation services in Pune, helping organizations achieve efficiency, safety, and reliability in their daily operations.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[40%] relative h-[400px] md:h-[500px] overflow-hidden rounded-md">
                        <Image
                            src="/images/employee-transportation-services-in-pune/unnamed-5-1.jpg"
                            alt="Trusted Employee Transportation Services in Pune"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBusiness;
