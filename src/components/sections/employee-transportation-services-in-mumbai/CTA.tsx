import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTA = () => {
    return (
        <section className="relative w-full min-h-[600px] flex items-center py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/employee-transportation-services-in-mumbai/unnamed-4-1.jpg"
                    alt="Why Businesses Trust Fiesta"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="brightness-50"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-white">
                <div className="max-w-[700px] text-left">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Employee Transportation Services Today: Why Businesses Trust Fiesta
                    </h2>

                    <div className="space-y-6 text-[15px] md:text-base leading-relaxed mb-8">
                        <p>
                            Mumbai's corporate landscape demands transportation services that deliver both efficiency and safety. Fiesta has consistently proven its ability to provide dependable commutes, making us a trusted choice for businesses across the city.
                        </p>
                        <p>
                            From daily commutes to special travel arrangements like staff transportation service for business trips or outstation travel, our solutions ensure hassle free travel for employees. With our professional drivers, well maintained vehicles, and extensive fleet, we create a memorable experience that blends safety, comfort, and efficiency.
                        </p>
                        <p>
                            Our services in Mumbai not only enhance productivity but also actively support organizations in maintaining a smooth and reliable workforce commute. By choosing Fiesta, companies gain a trusted partner who delivers transportation solutions with long term benefits.
                        </p>
                    </div>

                    <Link
                        href="/reach-us"
                        className="inline-block bg-[#E31E24] hover:bg-red-700 text-white font-bold px-8 py-3 rounded transition-colors"
                    >
                        Get A Custom Transport Plan Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
