import React from 'react';
import Image from 'next/image';

const Introduction = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/employee-transport-services-in-hyderabad/unnamed-1-4.jpg"
                            alt="Employee Transport Services in Hyderabad"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%]">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Looking for Best Employee Transport Services in Hyderabad For Seamless Commuting
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            Hyderabad, a busy IT hub of technology and innovation, has many corporate offices and tech parks. As companies expand their workforce, the need for a dependable employee transportation solution becomes more pressing.                         </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Finding the right transport partner is essential for organizations making employee transportation services a top priority for well-being and punctuality.

                            Transportation services in Hyderabad, especially those tailored to employees, are increasingly sought after for their efficiency, safety measures, and convenience.                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
