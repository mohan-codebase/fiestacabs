import React from "react";
import Image from "next/image";

const PopularOptions = () => {
    const options = [
        {
            title: "Vintage Cars:",
            desc: "Rolls-Royce and classic models perfect for romantic entrances and photography"
        },
        {
            title: "Luxury Sedans:",
            desc: "Mercedes, BMW, and Audi for elegance, comfort, and style"
        },
        {
            title: "Family Vehicles:",
            desc: "Toyota Innova, Toyota Fortuner for guest transportation and city travel"
        }
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
        <section className="py-16 md:py-24 bg-[#f8f9fa]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Popular Wedding Car Options in<br className="hidden md:block" /> Mumbai
                        </h2>

                        <div className="space-y-6">
                            {options.map((option, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <WheelIcon />
                                    <p className="text-[#555555] text-[15px] leading-[1.7]">
                                        <span className="font-bold text-gray-900">{option.title}</span> {option.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Every car in the fleet is prepared to complement wedding themes and create a fantastic experience for guests, ensuring smooth coordination during the ceremony and destination trips.
                        </p>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg order-1 lg:order-2 shadow-lg">
                        <Image
                            src="/images/wedding-car-rental-mumbai/unnamed-2-1.jpg"
                            alt="Popular Wedding Cars Mumbai"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularOptions;
