import React from 'react';
import Image from 'next/image';

const TrustedBy = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/employee-transport-services-in-hyderabad/unnamed-2-4.jpg"
                            alt="Trusted by Leading Companies"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Trusted by Leading Companies Across Hyderabad
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
With 9+ years of experience, 300+ vehicles, and 40+ employees in Telangana, Fiesta has built strong partnerships with top corporates and IT parks. Our focus on reliability, transparency, and efficiency makes us the go-to choice for organizations seeking premium employee mobility solutions.                        </p>
                   
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
