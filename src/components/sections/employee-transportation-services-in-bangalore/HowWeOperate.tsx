import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from "../../../components/common/Button";

const HowWeOperate = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            How We Operate
                        </h2>
                        <div className="space-y-6 mb-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our services in Bangalore are structured for efficiency, reliability, and convenience. From multiple pick ups across residential clusters to fixed drops at corporate hubs like Electronic City or Whitefield, our transportation services cover all major routes.                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                With trained chauffeurs and experienced drivers, every journey is managed professionally. Routes are designed to ensure smooth rides, reduced delays, and punctual schedule adherence. For visiting clients or nearby cities, our system supports round trip planning with the same focus on safety and comfort.                            </p>
                        </div>

                        <Button href="/reach-us" className=" bg-[#E31E24] ">
                            Book Employee Transportation in Bangalore
                        </Button>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-1/2 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/employee-transportation-services-in-bangalore/unnamed-4.jpg"
                            alt="How We Operate"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeOperate;
