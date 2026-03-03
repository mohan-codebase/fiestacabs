import Image from "next/image";

const OperatingInGurgaon = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
                        <Image
                            src="/images/shuttle-service-in-gurgaon/unnamed-2-9.jpg"
                            alt="Fiesta's Shuttle Services Now Operating in Gurgaon"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Fiesta's Shuttle Services Now Operating in Gurgaon
                            </h2>
                            <p className="text-gray-600">
                                Our routes cover all the major office locations and business parks across Gurgaon:
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-600">
                            {[
                                {
                                    title: "Cyber City & Cyber Hub",
                                    desc: "Fiesta connects major pick up points in residential areas like DLF Phase 1–5 with offices in Cyber Hub and surrounding towers. No long walks. No long queues."
                                },
                                {
                                    title: "Udyog Vihar",
                                    desc: "For teams working in this bustling industrial area, we offer fixed time slots with seamless access to nearby metro stations and bus stops."
                                },
                                {
                                    title: "Golf Course Road & Sohna Road",
                                    desc: "As these zones continue to grow, Fiesta's rapidly expanding network ensures that commutes remain smooth, regardless of how far the office is."
                                },
                                {
                                    title: "Stay Connected",
                                    desc: "We keep things interactive. Whether it's service alerts, route updates, holiday schedules, or exciting offers, we share all essential updates through our:\n- Website\n- Email notifications\n- In-app banners\n- Social media pages"
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 rounded-full border-2 border-[#EC2028] flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 bg-[#EC2028] rounded-full" />
                                        </div>
                                    </div>
                                    <div>
                                        {item.title && <p className="font-bold text-gray-900 mb-1">{item.title}</p>}
                                        <p className="text-sm whitespace-pre-line leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OperatingInGurgaon;
