import React from 'react';
import Image from 'next/image';

const BookingKeyFeatures = () => {
    const listItems = [
        "Smooth app-based booking with internet banking and wallets like Amazon Pay",
        "Share ride details with ease (great for safety and coordination)",
        "Referral code integration for effortless team expansion",
        "Participation in referrals contest and special campaigns"
    ];

    const Icon = () => (
        <div className="shrink-0 mt-0.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#E31E24" strokeWidth="2" fill="transparent" />
                <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93" stroke="#E31E24" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="#E31E24" strokeWidth="1.5" fill="transparent" />
            </svg>
        </div>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative min-h-[500px] md:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-delhi/unnamed-5-5.jpg"
                            alt="Smiling Passengers"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%] md:pl-4">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-8 leading-[1.2] tracking-tight">
                            Booking Key Features That<br className="hidden lg:block" />Work for You
                        </h2>

                        <div className="space-y-6 mb-12">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Icon />
                                    <p className="text-[#555555] text-[14px] leading-relaxed font-semibold">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Why Struggle With Old-School<br className="hidden lg:block" />Commutes?
                        </h2>
                        <p className="text-[#555555] text-[14px] leading-relaxed">
                            In a city where most public transportation options are unpredictable and unreliable, choosing a shuttle service in Delhi built for your business just makes sense
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingKeyFeatures;
