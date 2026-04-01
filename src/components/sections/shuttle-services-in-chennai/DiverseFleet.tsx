import React from 'react';
import Image from 'next/image';

const DiverseFleet = () => {
    const listItems = [
        {
            title: "Sedans & SUVs",
            desc: "Ideal for executive travel and small employee groups."
        },
        {
            title: "Mini Vans & Tempo Travellers",
            desc: "Perfect for smaller teams needing quick transfers."
        },
        {
            title: "Standard & Spacious Buses",
            desc: "Optimized for high-volume routes in IT parks and industrial zones."
        },
        {
            title: "Luxury Vans & Premium Coaches",
            desc: "Designed for executives and senior management, featuring high-end interiors and amenities."
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
                            A Fleet Designed for Every Requirement
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
Our diversified fleet undergoes strict maintenance schedules to guarantee safety, hygiene, and reliability. We offer:                        </p>

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
                        
                        <p className="text-[#555555] text-[16px] leading-relaxed mt-8 font-medium">
These fleet options provide a cost-effective alternative to individual reimbursements, while shared transportation reduces traffic congestion, lowers environmental impact, and promotes a positive corporate culture.                        </p>
                    </div>

                    <div className="w-full md:w-[50%] relative min-h-[500px] md:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/services-offered/employee-transport-service/employee-transport-in-chennai/serving-multiple-locations.jpg"
                            alt="Diverse Fleet for Chennai Corporate Transport"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiverseFleet;
