import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CommitmentSafety = () => {
    const listItems = [
        {
            title: "Strict Safety Protocols",
            desc: " Each vehicle follows company’s transportation standards, ensuring adherence to best practices. "
        },
        {
            title: "Adherent Driver Conduct",
            desc: " Background checks and training programs ensure that employees can trust the people driving them. "
        },
        {
            title: "Real Time Monitoring",
            desc: " GPS tracking and real time tracking allow organizations to track routes and ensure employee safety. "
        },
        {
            title: "Secure Commutes",
            desc: "Dependable commutes with safe drop-offs at every destination ensure complete reliability."
        }
    ];

    const Icon = () => (
        <div className="shrink-0 mt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="4" fill="#E31E24" />
                <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left: Content */}
                    <div className="w-full md:w-[50%] md:pr-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            Commitment to Employee Safety
                        </h2>

                        <div className="space-y-8 mb-10">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Icon />
                                    <div>
                                        <h3 className="text-[18px] font-bold text-[#333333] mb-1">{item.title}</h3>
                                        <p className="text-[#555555] leading-relaxed text-[15px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/reach-us"
                            className="inline-block bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded transition-colors text-[16px]"
                        >
                            Contact Our Team for Support
                        </Link>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[50%] relative h-[500px] md:h-[650px] overflow-hidden rounded-md">
                        <Image
                            src="/images/employee-transportation-services-in-pune/unnamed-2-2.jpg"
                            alt="Commitment to Employee Safety"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommitmentSafety;
