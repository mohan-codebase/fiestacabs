import Image from "next/image";

const GateToGateEffective = () => {
    const listItems = [
        {
            title: "Precise Pickup and Drop Points",
            desc: "Strategically located near tech parks, metro stations, and accessible public zones, no random stops or roundabout detours.",
        },
        {
            title: "Direct Access to Office Entrances",
            desc: "Our routes are designed to take your team straight to their destination, no need to navigate traffic-heavy service lanes or long building approaches.",
        },
        {
            title: "Time-Saving & Shift-Friendly",
            desc: "Ideal for early or late shift workers, our consistent scheduling and efficient routing help reduce commute time while increasing daily reliability.",
        },
        {
            title: "Improved Attendance & Efficiency",
            desc: "With fixed timings and no ambiguity around stops, your team shows up on time and ready to work, every day.",
        },
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
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="space-y-8 flex flex-col justify-center py-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 leading-tight">
                                What Makes Gate-to-Gate Transport Effective?
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                In Gurgaon&apos;s work environment, reliable and precise transport can make all the difference. Fiesta&apos;s gate-to-gate employee shuttle delivers.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <Icon />
                                    <div>
                                        <h3 className="text-[17px] font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-[#555555] text-[15px] leading-[1.7]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden">
                        <Image
                            src="/images/shuttle-service-in-gurgaon/unnamed-1-9.jpg"
                            alt="Gate-to-gate transport in Gurgaon"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GateToGateEffective;
