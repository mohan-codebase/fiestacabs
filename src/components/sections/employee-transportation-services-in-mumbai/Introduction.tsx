import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from "../../../components/common/Button";

const Introduction = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative h-[400px] md:h-[600px] overflow-hidden shadow-lg">
                        <Image
                            src="/images/employee-transportation-services-in-mumbai/unnamed-1-1.jpg"
                            alt="Employee Transportation Services in Mumbai"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%] pt-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Supporting Corporate Offices Across Mumbai
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            Our transportation services cover multiple locations in Mumbai and Navi Mumbai, including popular business hubs such as:
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 shrink-0">
                                    <Image
                                        src="/images/icon/tyre-icon.svg"
                                        alt="Check"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">Bandra Kurla Complex</h3>
                                    <p className="text-gray-600">A prime location with thousands of professionals requiring daily commutes.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 shrink-0">
                                    <Image
                                        src="/images/icon/tyre-icon.svg"
                                        alt="Check"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">Lower Parel</h3>
                                    <p className="text-gray-600">One of the busiest corporate clusters where reliable transport is essential.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 shrink-0">
                                    <Image
                                        src="/images/icon/tyre-icon.svg"
                                        alt="Check"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">Other Corporate Complexes</h3>
                                    <p className="text-gray-600">We design services that suit various cities, ensuring dependable commutes for businesses of all sizes.</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 text-base leading-relaxed mb-8">
                            Whether employees need daily commutes, travel seamless routes to corporate offices, or pick up and drop convenience, Fiesta ensures a smooth transition from home to office.
                        </p>

                        <Button href="/reach-us" className=" bg-[#E31E24] ">
                            Get A Custom Transport Plan Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
