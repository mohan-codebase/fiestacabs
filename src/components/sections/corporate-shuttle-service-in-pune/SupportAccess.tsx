import React from 'react';
import Image from 'next/image';

const SupportAccess = () => {
    const listItems: string[] = [
        "Employees can access schedules, routes, and ride status through live tracking",
        "Dedicated customer support ensures smooth operations, timely pickups, and quick issue resolution"
    ];

    const Icon = () => (
        <div className="shrink-0 mt-1">
            <Image
                src="/images/icon/tyre-icon.svg"
                alt="Icon"
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

                    {/* LEFT IMAGE */}

                     <div className="w-full md:w-[45%] relative min-h-[700px] md:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/employee-transportation-services-in-pune/unnamed-1-2.jpg"
                            alt="Dedicated Support and Easy Access"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    
                    {/* RIGHT CONTENT */}
                   <div className="w-full md:w-[55%] md:pr-8 flex flex-col justify-center">
                        
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Dedicated Support and Easy Access
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Booking and managing a Fiesta shuttle service is quick and convenient:
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

                        <p className="text-[#555555] text-[16px] leading-relaxed mt-8">
                            Fiesta combines technology, professional drivers, and a modern fleet to deliver top-tier corporate shuttle services in Pune.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SupportAccess;