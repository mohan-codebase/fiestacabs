import React from 'react';
import Image from 'next/image';

const OperatingAcross = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative h-[400px] md:h-[500px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-bangalore/unnamed-5-4.jpg"
                            alt="Green and White Shuttle Bus"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%] md:pl-8">
                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-6 leading-tight">
                            Fiesta&apos;s Shuttle Services Now Operating Across Bangalore
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-10">
                            We&apos;ve mapped our services across all key office locations:
                        </p>

                        <h3 className="text-[24px] font-bold text-gray-900 mb-4">
                            Whitefield & Outer Ring Road
                        </h3>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Home to some of Bangalore&apos;s biggest tech parks, Whitefield and Outer Ring Road see heavy daily traffic. Fiesta&apos;s shuttle service in Bangalore connects these high-demand zones with nearby residential pockets using optimised routes and well-timed pickups.
                        </p>
                        <p className="text-[#555555] text-[16px] leading-relaxed">
                            Employees can board from convenient pick up points and enjoy minimal wait times, making commutes predictable and punctual. With fewer delays and smarter scheduling, your team reaches office locations fresh, focused, and ready to start their workday on time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OperatingAcross;
