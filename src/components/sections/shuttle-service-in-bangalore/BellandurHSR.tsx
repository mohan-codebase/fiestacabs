import React from 'react';
import Image from 'next/image';

const BellandurHSR = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-[#Eef2f6]">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-[60%] md:pr-12">
                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-6 leading-tight">
                            Bellandur & HSR Layout
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Fiesta&apos;s shuttle service in Bangalore helps your team navigate through Bellandur and HSR Layout, two of the city&apos;s most densely packed office corridors. Our shuttle routes are built for direct access, avoiding unnecessary turns and backroads that often slow down travel.
                        </p>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-10">
                            Strategically placed pick up points and time slots ensure minimal disruption and quick rides. Whether it&apos;s early shift staff or late returnees, Fiesta keeps the commute efficient and comfortable through these high-demand and high-traffic office regions.
                        </p>

                        <h3 className="text-[24px] font-bold text-gray-900 mb-4">
                            Stay Up to Date
                        </h3>
                        <p className="text-[#555555] text-[16px] leading-relaxed">
                            Staying informed about commutes shouldn&apos;t require manual effort. Today&apos;s workforce relies on website updates, email alerts, in-app banners, and social media pages to keep track of exciting offers, ride details, or route changes.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[40%] relative h-[450px] md:h-[550px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-bangalore/unnamed-8-1.jpg"
                            alt="Residential High Rises"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BellandurHSR;
