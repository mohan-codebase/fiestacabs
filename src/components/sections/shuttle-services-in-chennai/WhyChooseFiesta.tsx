import React from 'react';
import Image from 'next/image';

const WhyChooseFiesta = () => {
    const listItems = [
        {
            title: "Hyper-Local Expertise",
            desc: "We don't just drive in Chennai; we understand its pulse. From monsoon challenges on OMR to peak-hour bottlenecks in Guindy, our routing intelligence is built on years of local experience to keep your workforce moving efficiently."
        },
        {
            title: "Scalability on Demand",
            desc: "Whether you are a startup requiring a single minivan or a multinational corporation needing a fleet of 50-seater buses, Fiesta scales its operations seamlessly to match your growing headcount. Every company has distinct travel needs, and we provide customised solutions aligned to workforce requirements."
        },
        {
            title: "Uncompromising Compliance",
            desc: "We take the burden of risk off your shoulders. All our services adhere to statutory transport regulations, ensuring your corporate social responsibility and safety standards are always met."
        },
        {
            title: "Comfort and Productivity",
            desc: "By providing air-conditioned, well-maintained vehicles, we ensure employees arrive refreshed, reducing stress and enhancing productivity. Shuttle services enhance work-life balance by shortening commute times, improving employee comfort, and helping them stay sharper throughout the day."
        },
        {
            title: "Data-Driven Cost Savings",
            desc: "Through continuous performance analysis, we identify redundant paths and underutilized seats, allowing us to re-optimize routes and reduce transportation overhead. Shared mobility solutions further help lower environmental impact and traffic congestion."
        }
    ];

    const Icon = () => (
        <div className="shrink-0 mt-1">
            <Image
                src="/images/icon/tyre-icon.svg"
                alt="Tyre Icon"
                width={24}
                height={24}
                className="w-6 h-6"
            />
        </div>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-stretch">
                    <div className="w-full md:w-[55%] md:pr-4 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Why Choose Fiesta?
                        </h2>
{/* 
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            We bring local expertise and scalable solutions to the Chennai corporate transport landscape, focusing on compliance, comfort, and cost-efficiency.
                        </p> */}

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

                    <div className="w-full md:w-[45%] relative min-h-[300px] md:min-h-[500px] lg:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-services-in-chennai/WhatsApp Image 2026-04-01 at 18.42.46.jpeg"
                            alt="Why Choose Fiesta for Chennai Shuttle"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseFiesta;
