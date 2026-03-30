import React from 'react';
import Image from 'next/image';

const WhyChooseFiesta = () => {
    const listItems = [
        {
            title: "Hyper-Local Expertise",
            desc: "Understanding Chennai's pulse, from monsoon challenges on OMR to peak-hour bottlenecks in Guindy, keeping your workforce moving efficiently."
        },
        {
            title: "Scalability on Demand",
            desc: "From single minivans to a fleet of 50-seater buses, we scale operations seamlessly to match your growing headcount."
        },
        {
            title: "Uncompromising Compliance",
            desc: "All services adhere to statutory transport regulations, ensuring your corporate social responsibility and safety standards are always met."
        },
        {
            title: "Comfort and Productivity",
            desc: "Air-conditioned, well-maintained vehicles ensure employees arrive refreshed, reducing stress and enhancing daily productivity."
        },
        {
            title: "Data-Driven Cost Savings",
            desc: "Continuous performance analysis to identify redundant paths and re-optimize routes, significantly reducing transportation overhead."
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

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            We bring local expertise and scalable solutions to the Chennai corporate transport landscape, focusing on compliance, comfort, and cost-efficiency.
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

                    <div className="w-full md:w-[45%] relative min-h-[500px] md:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/employee-transport/difference.png"
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
