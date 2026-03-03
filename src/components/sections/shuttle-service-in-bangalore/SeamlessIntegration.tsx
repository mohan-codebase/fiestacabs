import React from 'react';
import Image from 'next/image';

const SeamlessIntegration = () => {
    const listItems = [
        "Each pick up point is selected to be close to tech parks, metro access, and petrol pumps, ensuring smoother boarding, every day.",
        "No back lanes or service roads. We deliver your team straight to the main entrance of their building, office, or tech park.",
        "From early morning shifts to late evening returns, our time slots are built to match the pulse of Bangalore's work culture.",
        "Predictable commutes reduce lateness, improve attendance, and set the tone for a productive day."
    ];

    const CheckIcon = () => (
        <div className="shrink-0 mt-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-[#Eef2f6]">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-[60%] md:pr-12">
                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-8 leading-tight">
                            Key Features That Drive Performance:
                        </h2>

                        <div className="space-y-6 mb-12">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <CheckIcon />
                                    <p className="text-[#555555] text-[15px] leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-6 leading-tight">
                            Seamlessly Integrated for Corporates
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Our employee transportation services are built to flex with your organisation. Whether you&apos;re onboarding new employees or scaling fast, Fiesta&apos;s corporate shuttle solution is ready:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-2 text-[#555555] font-bold text-[15px]">
                                <span className="text-[#1E3A8A]">✓</span> Monthly consolidated billing
                            </div>
                            <div className="flex items-start gap-2 text-[#555555] font-bold text-[15px]">
                                <span className="text-[#1E3A8A]">✓</span> Integration with HR attendance
                            </div>
                            <div className="flex items-start gap-2 text-[#555555] font-bold text-[15px]">
                                <span className="text-[#1E3A8A]">✓</span> Custom onboarding plans
                            </div>
                            <div className="flex items-start gap-2 text-[#555555] font-bold text-[15px]">
                                <span className="text-[#1E3A8A]">✓</span> Real-time ride details
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[40%] relative h-[500px] md:h-[650px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-bangalore/unnamed-4-7.jpg"
                            alt="Driver"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeamlessIntegration;
