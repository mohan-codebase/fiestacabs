import React from "react";

const MissionVisible = () => {
    return (
        <section id="mission-vision" className="w-full py-10 md:py-16 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <div className="relative bg-white rounded-2xl border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                        <div className="absolute left-0 top-0 bg-[#EC2028] text-white text-xs font-semibold tracking-[0.2em] px-4 py-2 rounded-br-xl">
                            VISSION
                        </div>
                        <div className="flex flex-col items-center text-center px-6 md:px-12 py-12 md:py-16">
                            <div className="mb-6">
                                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 bg-white shadow-sm">
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#6B7280"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M1.5 12s4-7.5 10.5-7.5S22.5 12 22.5 12s-4 7.5-10.5 7.5S1.5 12 1.5 12Z" />
                                        <circle cx="12" cy="12" r="3.5" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To become a fully automated best-in-class, end-to-end travel and transport
                                solutions organization with pan India presence
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="relative bg-white rounded-2xl border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                        <div className="absolute left-0 top-0 bg-[#EC2028] text-white text-xs font-semibold tracking-[0.2em] px-4 py-2 rounded-br-xl">
                            MISSION
                        </div>
                        <div className="flex flex-col items-center text-center px-6 md:px-12 py-12 md:py-16">
                            <div className="mb-6">
                                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 bg-white shadow-sm">
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#6B7280"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="8" />
                                        <circle cx="12" cy="12" r="3.5" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We would strive to provide end-to-end travel and transport solutions to our
                                customers with true Value and sincerity using professionalism and up-to-date
                                technology. We will achieve this by extending our services PAN INDIA, while
                                being responsible to all our stakeholders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisible;
