import React from "react";
import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";

const CTA = () => {
    return (
        <section className="relative w-full py-20 bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/shuttle-service/start-today.jpg"
                    alt="Ready to Redefine Your Commute"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="opacity-40"
                />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full">
                {/* Empty column for layout (right-aligned content) */}
                <div className="hidden lg:block"></div>

                <div className="flex flex-col text-white max-w-xl">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-sm">
                        <span>4.8 (729 Reviews)</span>
                        <div className="flex text-[#F5A623]">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Ready to Redefine Your Commute?
                    </h2>

                    <p className="text-gray-200 text-[15px] leading-relaxed mb-8">
                        Say goodbye to traffic stress and unreliable public transport. With Fiesta&apos;s shuttle service, every ride is safe, on time, and comfortable designed to make daily travel easier for you and your team.
                    </p>

                    <ul className="space-y-3 mb-8">
                        {[
                            "Reliable gate-to-gate coverage",
                            "Custom routes & schedules",
                            "Safe, verified drivers",
                            "Smart booking & live tracking"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                                    <path d="M4 2L8 6L4 10" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <BookNowButton className="w-fit bg-[#EC2028] hover:bg-red-700 text-white font-bold px-8 py-3 rounded-md transition-colors">
                        Book Now
                    </BookNowButton>
                </div>
            </div>
        </section>
    );
};

export default CTA;
