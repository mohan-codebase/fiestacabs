import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyBusinessesTrust = () => {
    const listItems = [
        {
            title: "Substantial Cost Savings",
            desc: "Reduced reliance on luxury cars or self drive cars while still offering convenience."
        },
        {
            title: "Hassle Free Travel",
            desc: "A seamless experience that minimizes stress for both employees and businesses."
        },
        {
            title: "Optimized Routes",
            desc: "Carefully planned fixed routes to reduce time spent in traffic."
        },
        {
            title: "Convenience for Businesses",
            desc: "We handle logistics, planning, and support so businesses can focus on their core priorities."
        }
    ];

    const Icon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" fill="#E31E24" stroke="none" />
            <path d="M12 3v2M12 19v2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M3 12h2M19 12h2M5.64 18.36l1.41-1.41M16.95 7.05l1.41-1.41" strokeWidth="1.5" />
        </svg>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left: Image */}
                    <div className="w-full md:w-[50%] relative h-[500px] md:h-[650px] overflow-hidden">
                        <Image
                            src="/images/employee-transportation-services-in-mumbai/unnamed-3-1.jpg"
                            alt="Cost Effective and Hassle Free Travel"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[50%] md:pl-8 pt-8 md:pt-20">
                        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            Cost Effective and Hassle Free<br />Travel
                        </h2>
                        <div className="w-24 h-1 bg-[#E31E24] mb-6"></div>
                        <p className="text-gray-700 text-[15px] leading-relaxed mb-10">
                            With rising transportation challenges in Mumbai, companies seek cost effective services that balance affordability and reliability. Fiesta delivers exactly that:
                        </p>

                        <div className="space-y-6 mb-12">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Icon />
                                    <div>
                                        <h3 className="text-[17px] font-bold text-[#333333] mb-1">{item.title}</h3>
                                        <p className="text-[#555555] leading-relaxed text-[14px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/reach-us"
                            className="inline-block bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded transition-colors text-[15px]"
                        >
                            Get A Custom Transport Plan Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyBusinessesTrust;
