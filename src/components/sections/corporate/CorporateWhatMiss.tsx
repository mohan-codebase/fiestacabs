import React from "react";

const points = [
    {
        title: "Vehicle Quality and Condition",
        desc: "Well maintained cars show the company's focus on safety and comfort. Fiesta ensures all vehicles stay in top shape with regular inspections, updated fittings and strong hygiene rules. Clean seats, functioning AC, good mileage and timely servicing make corporate travel easy.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-[#EC2028]" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <path d="M5 11h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" />
                <circle cx="9" cy="15" r="1" fill="currentColor" />
                <circle cx="15" cy="15" r="1" fill="currentColor" />
                <path d="M3 13h2M19 13h2" />
            </svg>
        ),
    },
    {
        title: "Range of Cars Available",
        desc: "Different business purposes need different vehicles. Corporate clients book premium sedans for VIP guests, luxury cars for client meetings and compact cars for routine travel. Fiesta offers luxury sedans, SUVs, compact cars and MUVs so teams pick what fits the trip.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-[#EC2028]" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
                <path d="M15 15H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z" />
                <path d="M12 7v8" />
                <path d="M9 10h6" />
                <path d="M9 12h6" />
            </svg>
        ),
    },
    {
        title: "Professional Drivers",
        desc: "Professional drivers bring discipline. They know routes, traffic patterns, safety rules and corporate expectations. Fiesta's professionally trained chauffeurs drive with care and make travel smooth for employees and visitors.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-[#EC2028]" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2" />
                <path d="M16 11l2-2" />
                <path d="M16 3l2 2" />
            </svg>
        ),
    },
    {
        title: "Transparent Pricing",
        desc: "Companies hate hidden charges. Fiesta uses simple pricing. Fuel charges, tolls and parking stay clear from the start. This makes planning easier for corporate accounts teams.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-[#EC2028]" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-8" />
                <path d="M9 10h6" />
                <path d="M9 14h6" />
            </svg>
        ),
    },
    {
        title: "Support and Response",
        desc: "Round the clock support matters during sudden schedule changes. Fiesta's support team handles immediate assistance with replacements, route changes and urgent requests.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-[#EC2028]" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
    {
        title: "Technology Use",
        desc: "Real time tracking helps monitor travel progress. Managers get visibility. Employees feel safe. Fiesta uses cutting edge tools to track rides, improve routing and reduce delays.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-[#EC2028]" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <path d="M9 10l3 3 3-3" />
            </svg>
        ),
    },
];

const CorporateWhatMiss = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">

                {/* Heading */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        What to Look For When Selecting a Corporate Car Rental Partner
                    </h2>
                    <p className="text-gray-700 text-[15px] leading-relaxed">
                        Choosing a corporate car rental service needs careful thought. Below are key points companies must check before signing any agreement.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {points.map((point, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col items-center text-center">
                            <div className="mb-6 flex items-center justify-center">
                                {point.icon}
                            </div>
                            <h3 className="text-[19px] font-bold text-gray-900 mb-4 px-2">
                                {point.title}
                            </h3>
                            <p className="text-gray-600 text-[14px] leading-relaxed">
                                {point.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CorporateWhatMiss;
