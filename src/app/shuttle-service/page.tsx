import Image from "next/image";
import Link from "next/link";
import FAQ from "../../components/sections/home/FAQ";

export const metadata = {
    title: "Shuttle Service | Fiesta Smart Mobility",
    description:
        "Corporate shuttle and employee transport service with gate-to-gate commuting, fixed schedules, and safe daily rides.",
};

type CityCard = {
    city: string;
    description: string;
    icon: string;
    href?: string;
};

type FeatureItem = {
    title: string;
    description: string;
};

const milestones = [
    { value: "27+", label: "Years of experience" },
    { value: "10,000+", label: "Trips per day" },
    { value: "2,000+", label: "Fleet Size" },
    { value: "40,000+", label: "Employees travelling per day" },
    { value: "PAN", label: "India Presence" },
];

const cityCards: CityCard[] = [
    {
        city: "Shuttle Service in Chennai",
        description:
            "Fiesta's shuttle buses in Chennai serve key corporate zones like OMR, Guindy, and Taramani with reliable gate-to-gate connectivity.",
        icon: "/images/shuttle-service/city-chennai.png",
    },
    {
        city: "Shuttle Service in Hyderabad",
        description:
            "Fiesta's shuttle buses in Hyderabad connect offices across HITEC City and Gachibowli with fixed-time pickups.",
        icon: "/images/shuttle-service/city-hyderabad.png",
        href: "/shuttle-service",
    },
    {
        city: "Shuttle Service in Bangalore",
        description:
            "Navigate Whitefield, Electronic City, and more with Fiesta's dependable schedules and gate-to-gate rides.",
        icon: "/images/shuttle-service/city-bangalore.png",
        href: "/shuttle-service",
    },
    {
        city: "Shuttle Service in Delhi",
        description:
            "Fiesta bridges office and metro hubs in Delhi with structured shuttle routes for dense corporate zones.",
        icon: "/images/shuttle-service/city-delhi.png",
        href: "/shuttle-service",
    },
    {
        city: "Shuttle Service in Gurgaon",
        description:
            "From Cyber City to Udyog Vihar, Fiesta offers easy inter-campus transfers and last-mile pickups.",
        icon: "/images/shuttle-service/city-gurgaon.png",
        href: "/shuttle-service",
    },
];

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

const ShuttleServicePage = () => {
    return (
        <div className="w-full bg-white">
            <section className="relative w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/shuttle-service/hero.jpg"
                        alt="Corporate shuttle and employee transport service"
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
                        <div className="text-white">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                Corporate Shuttle &amp; Employee Transport Service
                            </h1>
                            <p className="text-lg text-white/90 mb-8">
                                Reliable, comfortable, gate-to-gate commuting solution for your workforce.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow"
                            >
                                Book a Shuttle for Your Team
                            </a>
                        </div>

                        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        First Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Email Address <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Phone Number <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Company <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                    <div className="text-xs text-gray-500 text-right mb-1">0 / 180</div>
                                    <textarea
                                        rows={4}
                                        maxLength={180}
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-semibold py-3 rounded-md"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

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

            <section className="w-full py-14 bg-[#fafafa]">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">Pan-India Employee Shuttle Services</h3>
                        <p className="text-gray-700">
                            Fiesta provides corporate and employee shuttle services across India&apos;s leading business
                            hubs with a focus on safety, punctuality, and convenience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {cityCards.map((city) => (
                            <div
                                key={city.city}
                                className="rounded-2xl border-b-4 border-[#f6b7b7] bg-[#FFEDED] p-6 flex flex-col h-full"
                            >
                                <div className="w-16 h-16 rounded-full bg-white mb-4 flex items-center justify-center">
                                    <Image src={city.icon} alt={city.city} width={42} height={42} />
                                </div>
                                <h4 className="text-xl font-semibold mb-2">{city.city}</h4>
                                <p className="text-gray-700 text-sm flex-1">{city.description}</p>
                                {city.href && (
                                    <a
                                        href={city.href}
                                        className="inline-flex mt-4 text-[#EC2028] font-semibold hover:underline"
                                    >
                                        Explore
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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

            <section className="w-full py-14 md:py-16 bg-[#fafafa]">
                <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="relative h-[360px] md:h-[520px] rounded-md overflow-hidden">
                        <Image
                            src="/images/shuttle-service/smarter-way.jpg"
                            alt="Smarter way to commute with Fiesta"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div>
                        <p className="text-[#EC2028] uppercase tracking-wider font-semibold mb-2">The First</p>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Fiesta Smart Mobility&apos;s Shuttle Service: The Smarter Way to Commute
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Employee satisfaction and productivity begin long before work starts. Daily commute quality
                            is one of the most impactful but often ignored factors in workforce experience.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            If your teams still face long queues, traffic, and unpredictable public transport, Fiesta
                            offers a safer and more efficient alternative built for modern businesses.
                        </p>
                    </div>
                </div>
            </section>

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

            <section className="w-full py-14 md:py-16 bg-[#fafafa]">
                <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="relative h-[320px] md:h-[520px] rounded-md overflow-hidden">
                        <Image
                            src="/images/shuttle-service/why-different.jpg"
                            alt="Why Fiesta shuttle service is different"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div>
                        <p className="text-[#EC2028] uppercase tracking-wider font-semibold mb-2">Why</p>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">We&apos;re Different</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our approach is deeply customized, local, and enterprise-ready with flexible integrations
                            and personalized support.
                        </p>
                        <h4 className="text-2xl font-semibold mb-2">Affordability Meets Convenience</h4>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer affordable parking add-ons near high-demand pick-up points, helping remove
                            friction from daily commuting and reducing dependence on unreliable public transport.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md"
                        >
                            Talk to Our Team
                        </Link>
                    </div>
                </div>
            </section>

            <FAQ />
        </div>
    );
};

export default ShuttleServicePage;
