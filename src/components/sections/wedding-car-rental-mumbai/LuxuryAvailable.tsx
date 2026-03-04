import React from "react";
import Image from "next/image";

const LuxuryAvailable = () => {
    const features = [
        "Mercedes-Benz car rental with multiple Mercedes-Benz models for royal service",
        "BMW car rental options featuring premium BMW cars for elegant wedding day arrivals",
        "Audi car rental options offering a stylish and composed wedding car presence",
        "Rolls-Royce for ultimate luxury and grand wedding entrances",
        "Toyota Innova, Innova Crysta, Innova Hycross, and Toyota Vellfire for the premium group transportation"
    ];

    const WheelIcon = () => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-1">
            {/* Outer red circle */}
            <circle cx="12" cy="12" r="11" fill="#EC2028" />
            {/* Inner white circle outline */}
            <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5" fill="none" />
            {/* Inner small white circle */}
            <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
            {/* Spokes */}
            <path d="M12 4V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 15V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 12H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

            <path d="M6.34 6.34L9.88 9.88" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14.12 14.12L17.66 17.66" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.34 17.66L9.88 14.12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14.12 9.88L17.66 6.34" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg">
                        <Image
                            src="/images/wedding-car-rental-mumbai/unnamed-3-1.jpg"
                            alt="Luxury Wedding Cars Available with Fiesta"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Luxury Wedding Cars Available with Fiesta
                        </h2>

                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Fiesta offers a refined selection of luxurious cars suitable for bridal cars, wedding guests, and premium transportation across Mumbai, including city venues and destination functions.
                        </p>

                        <p className="text-[#555555] text-[15px] leading-[1.7] mb-2">
                            Available luxury cars include:
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <WheelIcon />
                                    <span className="text-[#555555] text-[15px] leading-[1.7]">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-[#555555] text-[15px] leading-[1.7] mt-4">
                            Each vehicle undergoes routine checks to ensure smooth performance, clean interiors, and dignified presentation for wedding luxury car rental requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LuxuryAvailable;
