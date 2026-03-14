import React from "react";
import Image from "next/image";

const MissionVisible = () => {
    return (
        <section id="mission-vision" className="w-full py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section label */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 bg-red-50 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-[#EC2028] btn-animated" />
                        <span className="text-[#EC2028] font-semibold text-sm tracking-wide uppercase">Our Purpose</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Vision & <span className="text-[#EC2028]">Mission</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                        {/* Top accent bar */}
                        <div className="h-1.5 bg-gradient-to-r from-[#EC2028] to-rose-400 w-full" />
                        <div className="p-8 md:p-12">
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1.5 12s4-7.5 10.5-7.5S22.5 12 22.5 12s-4 7.5-10.5 7.5S1.5 12 1.5 12Z" />
                                    <circle cx="12" cy="12" r="3.5" />
                                </svg>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h3>
                            </div>
                            <div className="w-10 h-0.5 bg-[#EC2028] btn-animated mb-5" />
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To become a fully automated best-in-class, end-to-end travel and transport
                                solutions organization with pan India presence.
                            </p>
                        </div>
                        {/* Decorative circle */}
                        <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-red-50 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Mission Card */}
                    <div className="relative bg-[#EC2028] btn-animated rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                        <div className="p-8 md:p-12">
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="8" />
                                    <circle cx="12" cy="12" r="3.5" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
                            <div className="w-10 h-0.5 bg-white/60 mb-5" />
                            <p className="text-red-100 leading-relaxed text-lg">
                                We strive to provide end-to-end travel and transport solutions to our customers
                                with true value and sincerity, using professionalism and up-to-date technology —
                                extending our services PAN INDIA while being responsible to all stakeholders.
                            </p>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/10" />
                        <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-white/10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisible;
