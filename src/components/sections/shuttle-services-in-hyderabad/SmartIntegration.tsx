import React from 'react';
import Image from 'next/image';

const SmartIntegration = () => {
    const listItems = [
        "Monthly consolidated billing",
        "Integration with HR attendance systems",
        "Custom onboarding support for new hires",
        "Real-time location reports and trip records"
    ];

    const Icon = () => (
        <div className="shrink-0 mt-1">
            <Image
                src="/images/icon/tyre-icon.svg"
                alt="Tyre Icon"
                width={20}
                height={20}
                className="w-5 h-5"
            />
        </div>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[50%] relative h-[400px] md:h-[500px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-services-in-hyderabad/unnamed-4-6.jpg"
                            alt="Smart Integration for Modern Businesses"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[50%] md:pl-8">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-6 leading-tight">
                            Smart Integration for Modern Businesses
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            Fiesta&apos;s shuttle services in Hyderabad are flexible, easy to manage, and scalable. Our services fit seamlessly into your business operations, allowing your admin or HR team to focus on what matters.
                        </p>

                        <p className="text-[#333333] font-bold text-[16px] mb-4">
                            Our corporate transport features include:
                        </p>

                        <div className="space-y-4">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Icon />
                                    <span className="text-[#555555] text-[16px]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartIntegration;
