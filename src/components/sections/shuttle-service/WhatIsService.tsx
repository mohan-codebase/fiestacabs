import Image from "next/image";

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
                            Fiesta&apos;s shuttle bus service is a corporate commuting solution designed to
                            transport employees between office locations and nearby transit hubs.
                        </p>
                        <p>
                            It ensures seamless last-mile connectivity with convenient pick-up points and fixed
                            time slots for predictable everyday travel.
                        </p>
                        <p>
                            With gate-to-gate coverage, Fiesta supports the full journey from office entry points
                            to outer gate pickups, improving punctuality and reducing commute stress.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center mt-6 bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhatIsService;
