import Image from "next/image";

const milestones = [
    { value: "27+", label: "Years of experience" },
    { value: "10,000+", label: "Trips per day" },
    { value: "2,000+", label: "Fleet Size" },
    { value: "40,000+", label: "Employees travelling per day" },
    { value: "PAN", label: "India Presence" },
];

const Milestones = () => {
    return (
        <section className="w-full pt-16">
            <div className="max-w-[1440px] mx-auto px-4 text-center">
                <p className="text-[#EC2028] uppercase tracking-wider text-sm font-semibold">milestones</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Choose Us ?</h2>
            </div>
            <div className="relative w-full mt-10">
                <div className="absolute inset-0">
                    <Image
                        src="/images/shuttle-service/milestones-bg.jpg"
                        alt="Shuttle service milestones"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-white text-center">
                        {milestones.map((item) => (
                            <div key={item.label}>
                                <div className="text-3xl md:text-4xl font-bold mb-2">{item.value}</div>
                                <div className="text-sm md:text-base text-white/80">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Milestones;
