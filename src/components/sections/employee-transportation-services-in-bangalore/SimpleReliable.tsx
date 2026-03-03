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
                            At Fiesta Smart Mobility, our solutions are centered around bringing maximum value to your organization. By adopting best practices, we consistently optimize fleet utilization, maintaining the highest standard for everyday commutes.
                        </p>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            Navigating Bangalore&apos;s traffic landscape requires experience. We have a solid mechanism linking our transport hubs securely. Efficient execution allows you to run uninterrupted operations.
                        </p>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            The technology interface offers custom reporting and insights to your team for financial analysis and route planning. Maximize business efficiency quickly.
                        </p>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            Discover the peace of mind knowing your employees are traveling safely, consistently, and comfortably.
                        </p>
                        <p className="text-gray-100 font-medium text-lg leading-relaxed">
                            Take a step ahead in redefining the employee commute experience with Fiesta Smart Mobility.
                        </p>
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
