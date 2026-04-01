import React from 'react';
import Image from 'next/image';

const Benefits = () => {
    const listItems = [
        {
            title: "Reliable Commute",
            desc: "Fixed pickup points and schedules guarantee punctual arrivals."
        },
        {
            title: "Enhanced Safety",
            desc: "GPS tracking, professional drivers, and well-maintained buses provide assurance."
        },
        {
            title: "Cost-Efficiency",
            desc: "Shuttle services remain more affordable than taxis, ride-sharing, or private rentals."
        },
        {
            title: "Improved Employee Experience",
            desc: "Comfortable rides allow passengers to relax, feel refreshed, and arrive ready to work."
        },
        {
            title: "Operational Ease",
            desc: "Route mapping, vehicle scheduling, and bookings are managed centrally."
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
                    <div className="w-full md:w-[50%] md:pr-4 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Benefits for Corporates and Employees
                        </h2>

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

                    <div className="w-full md:w-[50%] relative min-h-[500px] md:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/employee-transportation-services-in-mumbai/unnamed-1-1.jpg"
                            alt="Benefits of Mumbai Shuttle Services"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
