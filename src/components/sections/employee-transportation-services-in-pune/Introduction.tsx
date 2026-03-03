import React from 'react';
import Image from 'next/image';

const Introduction = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative h-[450px] md:h-[600px] overflow-hidden">
                        <Image
                            src="/images/employee-transportation-services-in-pune/unnamed-1-2.jpg"
                            alt="Serving the Workforce Across Pune"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%] md:pl-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Serving the Workforce Across<br />Pune
                        </h2>

                        <div className="w-24 h-1 bg-[#E31E24] mb-8"></div>

                        <p className="text-[#555555] text-[17px] leading-relaxed mb-6">
                            Our transportation services in Pune cover major corporate clusters and multiple office hubs, helping organizations ensure stress free travel for their employees. Whether the workforce operates in IT parks, business centers, or industrial zones, we provide consistent and reliable employee transportation services.
                        </p>

                        <p className="text-[#555555] text-[17px] leading-relaxed mb-6">
                            From buses to smaller vehicles, we ensure that all employees travel comfortably and reach their destination on time. With a focus on convenience and reliability, our services are designed to support productivity and smooth operations for companies of all sizes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
