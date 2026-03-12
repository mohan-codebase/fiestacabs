import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Benefits = () => {
    const listItems = [
        {
            title: "Dependable Commutes",
            desc: "Ensure employees reach their office on time, every time."
        },
        {
            title: "Hassle Free Operations",
            desc: "With professional drivers and well maintained fleet, organizations minimize risks and delays."
        },
        {
            title: "Support Operations Team",
            desc: "We customize solutions based on workforce size, locations, and schedules."
        },
        {
            title: "Ensured Productivity",
            desc: "A refreshed workforce results in a more productive day for businesses."
        },
        {
            title: "Commitment to Quality",
            desc: "Our services are built on efficiency, reliability, and the highest safety standards."
        }
    ];

    const Icon = () => (
        <Image src="/images/icon/tyre-icon.svg" alt="bullet icon" width={24} height={24} className="shrink-0 mt-1" />
    );

    return (
        <section className="relative w-full py-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/employee-transportation-services-in-pune/unnamed-4-2.jpg"
                    alt="Benefits of Choosing Fiesta"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="brightness-[0.3]"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 justify-end">

                    {/* Right: Content Section */}
                    <div className="w-full md:w-[50%] lg:w-[45%] text-white">
                        <h2 className="text-3xl md:text-[36px] font-bold mb-4 leading-tight">
                            Benefits of Choosing Fiesta
                        </h2>
                        <div className="w-24 h-1 bg-[#E31E24] mb-6"></div>
                        <p className="text-gray-200 text-[16px] leading-relaxed mb-8">
                            Choosing Fiesta&apos;s employee transportation services in Pune means gaining a partner committed to quality and reliability.
                        </p>

                        <div className="space-y-6 mb-10">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Icon />
                                    <div>
                                        <h3 className="text-[17px] font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-gray-300 leading-relaxed text-[14px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/reach-us"
                            className="inline-block bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded transition-colors text-[15px]"
                        >
                            Get a Cost Effective Plan Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
