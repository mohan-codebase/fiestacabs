import React from "react";

const cities = [
    {
        name: "Corporate Car Rental in Chennai",
        description:
            "Offering premium cars, trained chauffeurs, and timely service for client meetings, airport transfers, corporate events, and everyday business travel across Chennai's top IT and commercial zones.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Temple icon */}
                <path d="M32 8 L36 16 L28 16 Z" />
                <rect x="28" y="16" width="8" height="4" />
                <path d="M24 20 L40 20 L42 24 L22 24 Z" />
                <rect x="22" y="24" width="20" height="4" />
                <path d="M18 28 L46 28 L48 32 L16 32 Z" />
                <rect x="16" y="32" width="32" height="16" />
                <rect x="27" y="36" width="10" height="12" />
                <line x1="16" y1="48" x2="48" y2="48" />
            </svg>
        ),
    },
    {
        name: "Corporate Car Rental in Mumbai",
        description:
            "Supporting Mumbai's fast-paced corporate ecosystem with well-maintained vehicles, flexible rentals, on-time pickups, and seamless travel across major business districts.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Gateway arch icon */}
                <rect x="10" y="40" width="10" height="16" />
                <rect x="44" y="40" width="10" height="16" />
                <path d="M20 40 Q32 14 44 40" />
                <path d="M24 40 Q32 22 40 40" />
                <rect x="8" y="36" width="48" height="4" />
                <rect x="12" y="32" width="8" height="4" />
                <rect x="44" y="32" width="8" height="4" />
                <line x1="8" y1="56" x2="56" y2="56" />
            </svg>
        ),
    },
    {
        name: "Corporate Car Rental in Bangalore",
        description:
            "Ensuring smooth business travel across Whitefield, Electronic City, Outer Ring Road, and major IT hubs with premium fleets, disciplined drivers, and reliable corporate travel management.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Palace/Fort icon */}
                <rect x="8" y="36" width="48" height="20" />
                <rect x="14" y="24" width="36" height="12" />
                <path d="M20 24 Q32 10 44 24" />
                <rect x="8" y="32" width="8" height="4" />
                <rect x="24" y="32" width="8" height="4" />
                <rect x="40" y="32" width="8" height="4" />
                <rect x="28" y="44" width="8" height="12" />
                <line x1="8" y1="56" x2="56" y2="56" />
                <circle cx="32" cy="20" r="2" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
];

const CorporateCities = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                        Corporate Car Rental Services Across Major Cities
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
                        Fiesta delivers reliable and professional corporate car rental solutions across India&apos;s key business hubs. With premium fleets, trained chauffeurs, flexible rental plans, and punctual service, we ensure smooth and stress-free business travel for corporate teams nationwide.
                    </p>
                </div>

                {/* City Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cities.map((city) => (
                        <div
                            key={city.name}
                            className="bg-rose-50 rounded-2xl p-8 flex flex-col items-center text-center border-b-4 border-[#EC2028] shadow-sm"
                        >
                            {/* Icon circle */}
                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm text-gray-700">
                                {city.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{city.name}</h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">{city.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorporateCities;
