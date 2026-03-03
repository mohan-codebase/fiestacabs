"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../common/Button";

const Experience = () => {
    return (
        <section className="relative w-full min-h-[600px] flex items-center overflow-hidden py-20 px-4 md:px-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/home/experience/reach-your-destination-bg.jpg"
                    alt="Fiesta Safe and Timely Journey"
                    fill
                    style={{ objectFit: "cover" }}
                    className="brightness-100"
                />
                {/* Gradient Overlay for even better readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                        Reach Your Destination Safe <br className="hidden md:block" /> and on Time, Every Time
                    </h2>

                    <div className="space-y-6 text-gray-200 text-lg md:text-sm leading-relaxed">
                        <p>
                            Fiesta is committed to ensuring timely and reliable transportation for every customer, every time. Our fleet comprises the latest vehicles, maintained to the highest standards through regular servicing for optimal performance and efficiency. We recruit, train, and retain skilled professionals to deliver exceptional service and prioritize customer needs.
                        </p>
                        <p>
                            As a trusted provider of employee transport services, Fiesta combines top-quality vehicles with dedicated personnel to ensure punctuality and consistency in operations. Leveraging advanced technology, our drivers remain continuously connected with customers, providing real-time updates and operational transparency.
                        </p>
                        <p>
                            Our proprietary web application equips drivers with GPS tracking, map-based navigation, and tools for managing emergency situations efficiently. By integrating a modern fleet, professional workforce, and cutting-edge technology, Fiesta delivers superior value and service.
                        </p>
                        <p className="font-semibold text-white">
                            This strategic blend of fleet, people, and technology has positioned Fiesta as a leading name in employee transport services across India.
                        </p>
                    </div>

                    <div className="mt-10">

                        <Button href="/reach-us" variant="primary">
                            Contact Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
