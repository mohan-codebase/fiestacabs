import React from 'react';
import Image from 'next/image';

const StandOutFeatures = () => {
    const listItems = [
        {
            title: "Fixed Time Slots & Nearest Pick",
            desc: "Whether it's near a mall, gas station, or metro, every employee knows their nearest pick and expected arrival time."
        },
        {
            title: "Ride in Comfort",
            desc: "Our buses are spacious, never overcrowded. That means every team member can travel to the office comfortably, without fatigue or chaos."
        },
        {
            title: "Fastest Route, Always",
            desc: "Our system dynamically adjusts for the fastest route, avoiding peak-time congestion and known bottlenecks."
        },
        {
            title: "Security Features",
            desc: "Our rides include trusted security features, such as real-time tracking and SOS alert functionality for peace of mind."
        }
    ];

    const Icon = () => (
        <div className="shrink-0 mt-0.5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    {/* Left: Content */}
                    <div className="w-full md:w-[50%] md:pr-4">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            What Makes Our Shuttle Service in<br className="hidden lg:block" />Bangalore Stand Out?
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            Fiesta&apos;s strength lies in simplicity and precision. With routes and timings based on real demand, not guesswork, we deliver consistent value for your business and your people
                        </p>

                        <div className="space-y-6">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Icon />
                                    <div>
                                        <h3 className="text-xl font-bold text-[#2A2A2A] mb-2 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#555555] text-[15px] leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[50%] relative min-h-[500px] md:min-h-full overflow-hidden">
                        <Image
                            src="/images/shuttle-service-in-bangalore/unnamed-3-7.jpg"
                            alt="Bus Interior"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StandOutFeatures;
