import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from "../../../components/common/Button";

const DesignedForNeeds = () => {
    const listItems = [
        " Real time monitoring of every trip. ",
        " Maximum optimization for reduced travel delays. ",
        " Coverage for multiple pick ups and other corporate complexes in the city. ",
        " Options to scale for pan India presence and expansion into nearby cities. "
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-[55%]">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Designed for Employee and Business Needs
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Fiesta understands that no two businesses have the same transportation needs. That is why our employee transportation solutions are adaptable. Whether it’s daily commutes, round trip options, or planning for visiting clients, we create reliable systems backed by advanced technology and professional management.                        </p>

                        <ul className="space-y-4 mb-8">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Image src="/images/icon/tyre-icon.svg" alt="bullet icon" width={24} height={24} className="flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-800 font-medium text-lg leading-relaxed mb-8">
                            By choosing Fiesta, your organization not only reduces travel stress but also supports better workforce productivity. A hassle free commute helps employees arrive at work on time and start the day with focus. In the long run, this creates benefits for both your team and your business operations.

                            With Fiesta’s employee transport, both employees and clients benefit from a seamless service built on commitment, efficiency, and reliability.                        </p>

                        <Button href="/reach-us" className=" bg-[#E31E24] ">
                            Contact Our Team For A Comprehensive Transport Quote
                        </Button>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[45%] relative h-[400px] md:h-[650px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/employee-transportation-services-in-bangalore/unnamed-3-3.jpg"
                            alt="Designed for Employee and Business Needs"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignedForNeeds;
