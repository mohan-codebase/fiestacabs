const Benefits = () => {
    const benefits = [
        {
            title: "Smooth Journey",
            desc: "With experienced chauffeurs, your ride remains stress-free from start to finish.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 36V20L12 8H36L42 20V36" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 28H42" stroke="#EC2028" strokeWidth="2" />
                    <rect x="10" y="32" width="8" height="4" rx="1" stroke="#EC2028" strokeWidth="2" />
                    <rect x="30" y="32" width="8" height="4" rx="1" stroke="#EC2028" strokeWidth="2" />
                    <path d="M18 16H30" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 20H32" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Affordable Prices",
            desc: "Our packages are designed to suit every budget without compromising on style or quality.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="18" stroke="#EC2028" strokeWidth="2" />
                    <path d="M24 12V36" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18 20C18 17.2 20.7 15 24 15C27.3 15 30 17.2 30 20C30 22.8 27.3 25 24 25C20.7 25 18 27.2 18 30C18 32.8 20.7 35 24 35C27.3 35 30 32.8 30 30" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Memorable Experience",
            desc: "Every special day deserves a memorable entry and exit, and our wedding cars help you create exactly that.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 36V20L12 8H36L42 20V36" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 28H42" stroke="#EC2028" strokeWidth="2" />
                    <circle cx="14" cy="32" r="3" stroke="#EC2028" strokeWidth="2" />
                    <circle cx="34" cy="32" r="3" stroke="#EC2028" strokeWidth="2" />
                    <path d="M20 14L24 10L28 14" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 10V20" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18 18L14 14" stroke="#EC2028" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M30 18L34 14" stroke="#EC2028" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Reliable Service",
            desc: "We pride ourselves on punctuality and professionalism.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="12" width="36" height="28" rx="3" stroke="#EC2028" strokeWidth="2" />
                    <path d="M6 20H42" stroke="#EC2028" strokeWidth="2" />
                    <path d="M16 8V14" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <path d="M32 8V14" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18 28L22 32L30 24" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Custom Booking",
            desc: "Reliable and cost effective transportation services reduce absenteeism and late arrivals.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="6" width="24" height="36" rx="3" stroke="#EC2028" strokeWidth="2" />
                    <path d="M14 14H26" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <path d="M14 20H26" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <path d="M14 26H20" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="36" cy="34" r="8" stroke="#EC2028" strokeWidth="2" />
                    <path d="M36 30V34H40" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Enhanced Comfort",
            desc: "Our cars are maintained for maximum comfort so you can enjoy every moment.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 34V18C14 14 18 10 24 10C30 10 34 14 34 18V34" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10 34H38" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 38H40" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 22L24 18L28 22" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Perfect Suit for Every Couple",
            desc: "From classic class to modern luxury, we have the best car to suit your personality.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 36V22L12 10H36L42 22V36" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 28H42" stroke="#EC2028" strokeWidth="2" />
                    <path d="M14 32H20" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <path d="M28 32H34" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 18H28" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-[#f8f9fa]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 leading-tight text-center mb-12">
                    Benefits of Choosing Fiesta&apos;s Wedding Car Rental
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.slice(0, 6).map((item, index) => (
                        <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                            <p className="text-[#555555] text-[14px] leading-[1.7]">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center w-full sm:w-1/2 lg:w-1/3">
                        <div className="flex justify-center mb-4">{benefits[6].icon}</div>
                        <h3 className="font-bold text-gray-900 text-lg mb-3">{benefits[6].title}</h3>
                        <p className="text-[#555555] text-[14px] leading-[1.7]">{benefits[6].desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
