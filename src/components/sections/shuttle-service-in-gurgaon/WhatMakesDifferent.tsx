import Image from "next/image";

const WhatMakesDifferent = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-8 order-2 md:order-1">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 leading-tight">
                                What Makes Our Shuttle Service in Gurgaon Different?
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-relaxed">
                                We design our service around your team's real needs, not assumptions. That's why we've developed several key features that make commuting with Fiesta reliable, efficient, and employee-friendly:
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <h3 className="text-xl md:text-[22px] font-bold text-gray-900">Fixed Pick Up Points and Time Slots</h3>
                            <p className="text-[#555555] text-[15px] leading-relaxed">
                                Every day, your team knows exactly where to board and when the shuttle will arrive. Our buses follow well-planned time slots and pick up schedules to minimize wait times.
                            </p>
                            <p className="text-[#555555] text-[15px] leading-relaxed">
                                Whether the pick up point is near a metro station, housing complex, or commercial area, we make sure it's easy to access and close to where employees live.
                            </p>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden order-1 md:order-2">
                        <Image
                            src="/images/shuttle-service-in-gurgaon/unnamed-3-9.jpg"
                            alt="What Makes Our Shuttle Service in Gurgaon Different"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatMakesDifferent;
