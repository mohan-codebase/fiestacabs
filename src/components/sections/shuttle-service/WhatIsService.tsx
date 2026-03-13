import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";

const WhatIsService = () => {
    return (
        <section className="w-full py-14 md:py-16">
            <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="relative h-[420px] md:h-[700px] rounded-md overflow-hidden">
                    <Image
                        src="/images/shuttle-service/what-is.jpg"
                        alt="What is Fiesta shuttle bus service"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div>
                    <p className="text-[#EC2028] uppercase tracking-wider font-semibold mb-2">What Is</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-5">Fiesta&apos;s Shuttle Bus Service?</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Fiesta’s shuttle bus service is a corporate commuting solution designed to transport employees smoothly between their office locations and nearby transit hubs—such as metro stations, railway stations, and major bus terminals.
                        </p>
                        <p>
                            It ensures seamless last-mile connectivity that bridges the gap between home and office locations using convenient pick-up points and fixed time slots.
                        </p>
                        <p>
                            With Gate to Gate Coverage, Fiesta covers the entire journey—from office entry points to outer gate pickups—ensuring hassle-free commuting through strategically chosen locations and consistent schedules.

                            Whether you’re managing a small team or a large corporate workforce, Fiesta offers fully customizable transport services that enhance employee convenience, boost punctuality, and reduce absenteeism—all while providing unmatched comfort and safety.
                        </p>
                    </div>
                    <BookNowButton className="inline-flex items-center justify-center mt-6 bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full">
                        Book Now
                    </BookNowButton>
                </div>
            </div>
        </section>
    );
};

export default WhatIsService;
