import Image from "next/image";

const CommutesMadeEasy = () => {
    const listItems = [
        {
            title: "Precise Pickup and Drop Points",
            desc: "Strategically located near tech parks, metro stations, and accessible public zones, no random stops or roundabout detours."
        },
        {
            title: "Direct Access to Office Entrances",
            desc: "Our routes are designed to take your team straight to their destination, no need to navigate traffic-heavy service lanes or long building approaches."
        },
        {
            title: "Time-Saving & Shift-Friendly",
            desc: "Ideal for early or late shift workers, our consistent scheduling and efficient routing help reduce commute time while increasing daily reliability."
        },
        {
            title: "Improved Attendance & Efficiency",
            desc: "With fixed timings and no ambiguity around stops, your team shows up on time and ready to work, every day."
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
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[500px] md:min-h-[800px] w-full overflow-hidden">
                        <Image
                            src="/images/shuttle-service-in-gurgaon/unnamed-4-9.jpg"
                            alt="Ride in Comfort"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-12 flex flex-col justify-center py-6">
                        <div>
                            <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-4 leading-tight">
                                Ride in Comfort
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                No one should begin their day cramped in a crowded bus or spending 30 minutes looking for a ride. Our shuttles are air-conditioned, spacious, and designed so your team can ride to the office comfortably. With ample seating and no overcrowding, employees arrive fresh, not frazzled.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-4 leading-tight">
                                The Fastest Route, Always
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7] mb-8">
                                We don't take chances with routes. We plan every shuttle path based on traffic patterns, road conditions, and shift schedules. This ensures that we're always taking the fastest route possible, saving valuable time for your team and your business.
                            </p>

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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommutesMadeEasy;
