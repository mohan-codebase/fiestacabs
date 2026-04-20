import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/careers/who-we-are.png"
                            alt="Who We Are - Fiesta Cabs"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Fiesta Cabs is a professional transportation company focused on:
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#EC2028] mt-2.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Employee transportation services for corporates</h4>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#EC2028] mt-2.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Rent-a-car solutions for business and personal needs</h4>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#EC2028] mt-2.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Reliable, compliant, and scalable fleet operations</h4>
                                </div>
                            </div>
                            <p className="text-gray-600">We prioritise safety, punctuality, and efficiency through structured processes and ongoing monitoring.</p>
                        </div>

                        <div className="mt-10 p-6 bg-red-50 rounded-2xl border-l-4 border-[#EC2028]">
                            <p className="text-gray-800 font-medium italic">
                                "Our goal is simple: Deliver dependable mobility solutions that businesses can trust."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
