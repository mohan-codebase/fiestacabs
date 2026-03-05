import React from "react";

const WhyChooseMumbai = () => {
    const reasons = [
        {
            title: "Wide Fleet Selection",
            desc: "From vintage classics to modern luxury sedans, Fiesta provides a broad fleet that suits every wedding theme and guest requirement.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 6V12L16 14" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Competitive Rates",
            desc: "Transparent pricing and flexible packages help you choose premium wedding cars without hidden costs.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 10L12 14L8 10" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Professional Drivers",
            desc: "Experienced chauffeurs ensure punctual arrivals, courteous service, and smooth movement between wedding venues.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22S4 18 4 11V5L12 2L20 5V11C20 18 12 22 12 22Z" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Event Expertise",
            desc: "Fiesta coordinates wedding-day transport schedules for the couple, family, and guests with dependable support.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C14.4214 16.9217 1 17.9391 1 19V21" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.5 11C10.1569 11 11.5 9.65685 11.5 8C11.5 6.34315 10.1569 5 8.5 5C6.84315 5 5.5 6.34315 5.5 8C5.5 9.65685 6.84315 11 8.5 11Z" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 5.13C17.3585 5.35154 18.1192 5.85189 18.6624 6.55243C19.2057 7.25298 19.5008 8.1141 19.5 9.00004C19.5 9.88599 19.2054 10.7468 18.662 11.447C18.1186 12.1473 17.3578 12.6474 16.5 12.87" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Safety and Comfort",
            desc: "Every wedding car is maintained for clean interiors, smooth performance, and secure travel throughout the event schedule.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22S4 18 4 11V5L12 2L20 5V11C20 18 12 22 12 22Z" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-[#f8f9fa]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                        Why Mumbai Chooses Fiesta for Wedding Car Rental?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-[#EC2028]">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                {reason.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMumbai;
