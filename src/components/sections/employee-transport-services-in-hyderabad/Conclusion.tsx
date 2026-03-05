import React from 'react';
import Image from 'next/image';

const Conclusion = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Conclusion
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            In a city like Hyderabad, where smooth and timely commutes are critical to business success, partnering with the right employee transport service can make all the difference.                        </p>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            A reliable transportation provider brings cost effectiveness and value to your organization by reducing commute-related stress and enhancing employee safety and satisfaction.                        </p>
                        <p className="text-gray-900 font-semibold text-lg leading-relaxed">
                            Fiesta sets the benchmark with its seamless operations, GPS-enabled fleet, real-time tracking, and responsive support.

                            Choose Fiesta, and make every commute count.                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-1/2 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/employee-transport-services-in-hyderabad/unnamed-2-3.jpg"
                            alt="Happy employee commuting"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Conclusion;
