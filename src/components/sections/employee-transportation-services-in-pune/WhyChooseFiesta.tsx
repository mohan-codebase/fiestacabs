import React from 'react';
import Link from 'next/link';

const WhyChooseFiesta = () => {
    const features = [
        {
            title: "Well Maintained Vehicles",
            description: "All our vehicles are regularly serviced to ensure secure and smooth journeys.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 16h14M3 10l1.5-4h11L17 10" />
                    <rect x="3" y="10" width="14" height="6" rx="1" />
                    <circle cx="6" cy="16" r="1.5" />
                    <circle cx="14" cy="16" r="1.5" />
                    <path d="M6 12h2M12 12h2" />
                    <path d="M10 2l1 1-1 1" />
                    <path d="M14 4l1 1-1 1" />
                </svg>
            )
        },
        {
            title: "Employee Safety as Top Priority",
            description: "We follow strict safety protocols, including GPS tracking, background verification, and real time monitoring.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12V8a3 3 0 0 1 6 0v4" />
                    <path d="M7 14c-1.5 0-3 1.5-3 3v2h16v-2c0-1.5-1.5-3-3-3m-10 0l2 4 3-4 3 4M12 14v4" />
                </svg>
            )
        },
        {
            title: "Experienced Drivers",
            description: "All our drivers are trained to operate efficiently while prioritizing passenger security.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="7" r="3" />
                    <path d="M12 10c-3.3 0-6 2.7-6 6v1h12v-1c0-3.3-2.7-6-6-6z" />
                    <circle cx="6" cy="9" r="2" />
                    <path d="M6 11c-2.2 0-4 1.8-4 4v1h3" />
                    <circle cx="18" cy="9" r="2" />
                    <path d="M18 11c2.2 0 4 1.8 4 4v1h-3" />
                </svg>
            )
        },
        {
            title: "Intelligent Route Planning",
            description: "Routes are optimized to cut down travel time and provide hassle free daily commutes.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10h16M4 14h16M4 6h16M4 18h16" />
                    <path d="M12 6L14 4M10 20l-2 2" />
                    <circle cx="12" cy="12" r="2" fill="#E31E24" stroke="none" />
                </svg>
            )
        },
        {
            title: "Reliable and Cost Effective",
            description: "Businesses benefit from substantial cost savings while offering employees dependable commutes.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M12 6v4M10 8h4" />
                    <path d="M6 14h12l1 4H5l1-4z" />
                    <path d="M8 18v2h8v-2" />
                </svg>
            )
        },
        {
            title: "Well Maintained Fleet",
            description: "A diverse range of vehicles equipped for daily commutes and corporate operations.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7M15 22v-4a2 2 0 0 1 2-2h4M19 16l3 3-3 3" />
                </svg>
            )
        }
    ];

    return (
        <section className="w-full py-16 md:py-20 bg-[#F9FAFB]">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-[36px] font-bold text-[#333333] mb-6 leading-tight">
                        Why Choose Fiesta for Employee Transportation Services in Pune?
                    </h2>
                    <p className="text-[#555555] text-[17px] leading-relaxed max-w-4xl mx-auto">
                        We take great pride in offering transportation services that enhance employee satisfaction, reduce stress, and ensure on time arrivals every day. Our solutions combine quality, advanced systems, and a dedicated team that focuses on safety and productivity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
                            <div className="mb-6 flex justify-center w-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-[20px] font-bold text-[#333333] mb-4">{feature.title}</h3>
                            <p className="text-[#666666] text-[15px] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center w-full">
                    <Link
                        href="/reach-us"
                        className="inline-block bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded transition-colors text-[16px]"
                    >
                        Book Employee Transport in Pune Today
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseFiesta;
