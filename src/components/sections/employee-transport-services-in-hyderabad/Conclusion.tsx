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
                            Considering all these components, there&apos;s no denying the paramount role of a reliable employee transport service in the corporate framework of a city like Hyderabad.
                        </p>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            Fiesta Cabs is a distinguished leader providing effective and dependable employee transport services in Hyderabad.
                        </p>
                        <p className="text-gray-900 font-semibold text-lg leading-relaxed">
                            Contact Fiesta Cabs today and assure your employees the commute they truly deserve!
                        </p>
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
