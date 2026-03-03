import React from 'react';
import Image from 'next/image';

const RunningRoutes = () => {
    const listItems = [
        {
            title: "Extensive Network",
            desc: "We've mapped key routes to serve every major business hub in the city."
        },
        {
            title: "Connected Zones",
            desc: "Our shuttle network connects popular pick up points in nearby residential clusters to this thriving IT zone. Fewer delays, more productivity."
        },
        {
            title: "Accessible Hubs",
            desc: "Whether your employees are coming from Kondapur, Madhapur, or beyond, our scheduled rides offer a dependable way to reach work with ease."
        },
        {
            title: "Scalable Operations",
            desc: "As more teams move into Hyderabad's expanding business parks, Fiesta continues to scale its routes, ensuring maximum coverage and consistent service."
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
                <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
                    {/* Left: Content */}
                    <div className="w-full md:w-[50%] md:pr-8">
                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-8 leading-tight">
                            Fiesta Now Running Routes Across Hyderabad
                        </h2>

                        <div className="space-y-6">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Icon />
                                    <div>
                                        <h3 className="text-[17px] font-bold text-[#333333] mb-1">{item.title}</h3>
                                        <p className="text-[#555555] leading-relaxed text-[15px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[50%] relative h-[450px] md:h-[550px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-services-in-hyderabad/unnamed-5-3.jpg"
                            alt="Fiesta Now Running Routes Across Hyderabad"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RunningRoutes;
