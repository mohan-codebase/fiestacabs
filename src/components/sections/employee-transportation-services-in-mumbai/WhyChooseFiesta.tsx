import React from 'react';
import Link from 'next/link';

const WhyChooseFiesta = () => {
    const features = [
        {
            title: "Well Maintained Vehicles",
            description: "All our vehicles are serviced regularly and designed to provide a comfortable ride.",
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
            description: "Thorough background checks on drivers, along with GPS tracking, give employees and businesses peace of mind.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12V8a3 3 0 0 1 6 0v4" />
                    <path d="M7 14c-1.5 0-3 1.5-3 3v2h16v-2c0-1.5-1.5-3-3-3m-10 0l2 4 3-4 3 4M12 14v4" />
                </svg>
            )
        },
        {
            title: "Dedicated Team",
            description: "We actively support businesses with transport coordination, planning, and on time solutions for every journey.",
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
            title: "Extensive Fleet",
            description: "From mini buses to chauffeur driven cars, we provide flexibility to meet different employee travel needs.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="3" width="16" height="18" rx="2" ry="2" />
                    <path d="M4 8h16M4 16h16" />
                    <circle cx="8" cy="19" r="1" />
                    <circle cx="16" cy="19" r="1" />
                    <path d="M8 3v5M16 3v5" />
                </svg>
            )
        },
        {
            title: "Cost Effective Options",
            description: "Save more while enjoying a hassle free experience that enhances convenience for both employees and companies.",
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
            title: "On Time, Every Day",
            description: "Fixed routes and schedules ensure employees arrive punctually, ready to focus on a productive day.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
                </svg>
            )
        }
    ];

    return (
        <section className="w-full py-16 md:py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-[40px] font-bold text-[#333333] mb-6 leading-tight">
                        Why Choose Fiesta for Employee Transportation Services in Mumbai?
                    </h2>
                    <p className="text-[#333333] text-base md:text-[17px] leading-relaxed">
                        We are committed to delivering services that support both employees and businesses. Our approach combines experience, advanced planning, and real time monitoring, ensuring safe and efficient daily commutes across the city.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                            <div className="mb-6 flex justify-center w-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl md:text-[22px] font-bold text-[#333333] mb-4">{feature.title}</h3>
                            <p className="text-[#555555] text-[15px] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center w-full">
                    <Link
                        href="/reach-us"
                        className="inline-block bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded transition-colors text-[17px]"
                    >
                        Book Your Employee Transport Today
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseFiesta;
