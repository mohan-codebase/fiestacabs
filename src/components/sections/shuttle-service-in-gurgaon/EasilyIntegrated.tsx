import Image from "next/image";

const EasilyIntegrated = () => {
    const Icon = () => (
        <div className="shrink-0 mt-1">
            <Image
                src="/images/icon/tyre-icon.svg"
                alt="Tyre Icon"
                width={20}
                height={20}
                className="w-5 h-5"
            />
        </div>
    );

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="space-y-6 flex flex-col justify-center py-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                                Easily Integrated Corporate Transport
                            </h2>
                        </div>

                        <div className="space-y-6 text-[#555555] text-[15px]">
                            <p className="leading-[1.7]">
                                Our shuttle service in Gurgaon isn't a one-size-fits-all product. It's a flexible corporate solution that scales with your business.
                            </p>
                            <p className="leading-[1.7]">
                                Some of our corporate features include:
                            </p>

                            <ul className="space-y-4 pt-2">
                                {[
                                    "Monthly consolidated billing",
                                    "Integration with HR attendance systems",
                                    "Custom onboarding plans for new hires",
                                    "Real-time usage reports for admin teams"
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <Icon />
                                        <span className="text-[#555555] leading-[1.7] pt-0.5">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="pt-4 leading-[1.7]">
                                All this makes it easier for companies to manage transport costs while improving employee satisfaction.
                            </p>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden">
                        <Image
                            src="/images/shuttle-service-in-gurgaon/unnamed-5-6.jpg"
                            alt="Easily Integrated Corporate Transport"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EasilyIntegrated;
