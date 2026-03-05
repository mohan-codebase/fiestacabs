import Image from "next/image";

type FeatureItem = {
    title: string;
    description: string;
};

const keyFeatures: FeatureItem[] = [
    {
        title: "Gate to Gate Connectivity",
        description: "Fiesta’s Gate to Gate employee transport service ensures end-to-end commuting coverage—from office main entries to outer gate pick-up points and vice versa. Our shuttle service routes are strategically planned to minimize walking distance within campuses and industrial parks, offering seamless shuttle bus connectivity even in large facilities.With fixed-time slots and convenient pick-up zones, employees enjoy a smoother, quicker, and more reliable journey every day.",
    },
    {
        title: "Customizable Routes and Time Slots",
        description:
            " No two organizations operate the same way. Fiesta works with your HR or operations team to design custom routes and designated points that align with employee work hours, shift patterns, and commute needs. Whether you need early morning pick-ups or late-night drops, we offer flexibility that suits your workflow.",
    },
    {
        title: "Comfortable, Reliable Commute",
        description:
            "Our fleet of well-maintained shuttle buses offers spacious seating, air conditioning, and a calm, clean environment—ideal for relaxing before or after a long day at work. Employees can ride to and from the office comfortably, making daily travel something to look forward to, rather than dread.",
    },
    {
        title: "Smart Tech, Seamless Booking",
        description:
            " Thanks to our smart mobility app, employees can book their ride with a few taps, track shuttle arrivals in real-time, and receive ride details on the go. Key booking features like route selection, live tracking, and cancellation options give users complete control over their commute.",
    },
    {
        title: "Advanced Safety Features",
        description:
            " Every Fiesta ride includes built-in security features such as real-time GPS tracking, SOS alerts, verified drivers, and ride details sharing with family or colleagues. Your team’s safety is never left to chance.",
    },
    {
        title: "Easy Payments and Corporate Integrations",
        description:
            " Integrate payments seamlessly with internet banking, Amazon Pay, and other digital wallets. We also offer enterprise billing for businesses looking for monthly invoicing options.",
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
                        We understand that corporate commutes aren’t one-size-fits-all. That’s why Fiesta’s shuttle service comes packed with powerful features that adapt to your needs:                    </p>
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
