import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SimpleReliable = () => {
    return (
        <section className="relative w-full py-20 md:py-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/employee-transportation-services-in-bangalore/unnamed-4-3.jpg"
                    alt="Simple and Reliable Transport Every Day"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    className="brightness-[0.3]"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 relative z-10">
                <div className="max-w-3xl lg:ml-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Simple and Reliable Transport Every Day
                    </h2>

                    <div className="space-y-6 mb-10">
                        <p className="text-gray-200 text-lg leading-relaxed">
                            At Fiesta, we believe that office travel should never feel difficult. That is why our employee transportation services in Bangalore are designed with simple systems that work every day. We make sure your employees have a smooth ride to the office and back home without stress.                        </p>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            Our focus is on safety, timely travel, and a comfortable journey for every person who boards. With well maintained vehicles and trained drivers, we bring peace of mind to both employees and companies. Each trip follows efficient routes with real time GPS tracking so that you know exactly where the vehicle is.                        </p>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            If your company is planning to improve corporate commutes, Fiesta provides the right mix of quality service, reliable transport, and cost effective solutions.                        </p>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            Are you ready to give your employees a dependable and hassle free commute every day?                        </p>
                        <p className="text-gray-100 font-medium text-lg leading-relaxed">
                            Let’s plan your employee transportation services in Bangalore together, contact us now to get started.                        </p>
                    </div>

                    <Link
                        href="/reach-us"
                        className="inline-block bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md shadow-lg transition-colors text-lg"
                    >
                        Set Up An Employee Transport Program
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SimpleReliable;
