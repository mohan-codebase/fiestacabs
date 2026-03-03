import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
                                Our sophisticated technology solutions and proactive monitoring make it effortless for human resources and admin teams to manage transportation. We combine innovative digital tools with experienced ground staff for optimal efficiency.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our vehicles are equipped with GPS tracking, panic buttons, and other modern safety features. Live reporting on vehicle location, boarding status, and timely arrival ensures maximum transparency. Through our customized solutions, we adapt to your organization&apos;s specific shift schedules.
                            </p>
                        </div>

                        <Link
                            href="/reach-us"
                            className="inline-block bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-md transition-colors shadow-md text-lg"
                        >
                            Book Employee Transportation in Bangalore
                        </Link>
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
