import Image from "next/image";

type FeatureItem = {
    title: string;
    description: string;
};

const keyFeatures: FeatureItem[] = [
    {
        title: "Gate to Gate Connectivity",
        description:
            "End-to-end commuting coverage from office main entries to outer gate pick-up points with planned shuttle routes.",
    },
    {
        title: "Customizable Routes and Time Slots",
        description:
            "Routes and designated points are tailored to shift patterns, employee work hours, and operational needs.",
    },
    {
        title: "Comfortable, Reliable Commute",
        description:
            "Well-maintained shuttle buses with spacious seating and air conditioning for daily comfort.",
    },
    {
        title: "Smart Tech, Seamless Booking",
        description:
            "Book rides, track shuttle arrivals in real time, and manage route updates with a smart mobility workflow.",
    },
    {
        title: "Advanced Safety Features",
        description:
            "Real-time GPS tracking, SOS alerts, verified drivers, and ride detail sharing for safer travel.",
    },
    {
        title: "Easy Payments and Corporate Integrations",
        description:
            "Support for internet banking, digital wallets, and enterprise billing for monthly invoicing.",
    },
];

const KeyFeatures = () => {
    return (
        <section className="w-full py-14 md:py-16">
            <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                    <p className="text-[#EC2028] uppercase tracking-wider font-semibold mb-2">Key</p>
                    <h3 className="text-3xl md:text-4xl font-bold mb-5">Features That Make Fiesta Stand Out</h3>
                    <p className="text-gray-700 mb-6">
                        Fiesta&apos;s shuttle service comes with practical features built for corporate commuting.
                    </p>
                    <div className="space-y-3">
                        {keyFeatures.map((item) => (
                            <div key={item.title} className="rounded-xl border border-gray-200 p-4 bg-white">
                                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-[420px] md:h-[620px] rounded-md overflow-hidden">
                    <Image
                        src="/images/shuttle-service/key-features.png"
                        alt="Key shuttle service features"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
