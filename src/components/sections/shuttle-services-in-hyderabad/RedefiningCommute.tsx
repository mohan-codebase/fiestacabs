import React from 'react';
import Image from 'next/image';

const RedefiningCommute = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative h-[400px] md:h-[500px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-services-in-hyderabad/unnamed.png"
                            alt="Redefining the Corporate Commute"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%] md:pl-8">
                        <h4 className="text-[#E31E24] font-bold text-sm tracking-widest uppercase mb-3">
                            Fiesta Shuttle Service in Hydrabad:
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Redefining the Corporate<br />Commute
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            In a fast-growing tech and business hub like Hyderabad, productivity often starts on the road. But daily commuting in the city can feel like a race against traffic, long wait times, or unreliable cab and taxis. For most professionals, it&apos;s more than just a journey; it&apos;s a daily challenge.
                        </p>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            At Fiesta, we believe commuting should be smooth, efficient, and stress-free. That&apos;s why our shuttle services in Hyderabad are designed to turn your team&apos;s commute from a daily struggle into a reliable routine.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RedefiningCommute;
