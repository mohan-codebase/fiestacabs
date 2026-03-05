import React from 'react';
import Image from 'next/image';

const SeamlessPartner = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Your Partner for Seamless Corporate Commutes
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            Choosing Fiesta means choosing more than a transport provider — it’s about partnering with a team that values safety, comfort, and consistency.                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Let us handle your employee transportation needs so your workforce can focus on what truly matters — performance and productivity.                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-1/2 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/employee-transport-services-in-hyderabad/unnamed-4-1.jpg"
                            alt="Seamless Corporate Commutes"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeamlessPartner;
