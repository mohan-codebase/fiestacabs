import Image from "next/image";

const StartToday = () => {
    return (
        <section className="w-full py-14 md:py-16">
            <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="text-[#EC2028] uppercase tracking-wider font-semibold mb-2">Start Today</p>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Smarter Commutes Are Just a Call Away</h3>
                    <div className="space-y-3 text-gray-700 leading-relaxed mb-6">
                        <p>
                            Your employees deserve better than stressful daily travel. Fiesta&apos;s shuttle service
                            helps improve attendance and reduce commute friction.
                        </p>
                        <p>
                            Set up a consultation and explore a custom commuting plan for your organization.
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 mb-5">
                        <span className="font-semibold text-gray-800">Call Us For Your Next Ride</span>
                        <span className="text-[#EC2028] font-bold">+91 78458 67512</span>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
                <div className="relative h-[420px] md:h-[600px] rounded-md overflow-hidden">
                    <Image
                        src="/images/shuttle-service/start-today.jpg"
                        alt="Start shuttle service today"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default StartToday;
