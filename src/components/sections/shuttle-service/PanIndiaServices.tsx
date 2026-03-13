import Image from "next/image";
import Link from "next/link";

type CityCard = {
    city: string;
    description: string;
    icon: string;
    href?: string;
};

const cityCards: CityCard[] = [
    {
        city: "Shuttle Service in Chennai",
        description:
            "Fiesta's shuttle buses in Chennai serve key corporate zones like OMR, Guindy, and Taramani with reliable gate-to-gate connectivity.",
        icon: "/images/shuttle-service/city-chennai.png",
        href: "/employee-transportation-services-in-chennai",
    },
    {
        city: "Shuttle Service in Hyderabad",
        description:
            "Fiesta's shuttle buses in Hyderabad connect offices across HITEC City and Gachibowli with fixed-time pickups.",
        icon: "/images/shuttle-service/city-hyderabad.png",
        href: "/shuttle-services-in-hyderabad",
    },
    {
        city: "Shuttle Service in Bangalore",
        description:
            "Navigate Whitefield, Electronic City, and more with Fiesta's dependable schedules and gate-to-gate rides.",
        icon: "/images/shuttle-service/city-bangalore.png",
        href: "/shuttle-service-in-bangalore",
    },
    {
        city: "Shuttle Service in Delhi",
        description:
            "Fiesta bridges office and metro hubs in Delhi with structured shuttle routes for dense corporate zones.",
        icon: "/images/shuttle-service/city-delhi.png",
        href: "/shuttle-service-in-delhi",
    },
    {
        city: "Shuttle Service in Gurgaon",
        description:
            "From Cyber City to Udyog Vihar, Fiesta offers easy inter-campus transfers and last-mile pickups.",
        icon: "/images/shuttle-service/city-gurgaon.png",
        href: "/shuttle-service-in-gurgaon",
    },
];

const PanIndiaServices = () => {
    return (
        <section className="w-full py-14 bg-[#fafafa]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">Pan-India Employee Shuttle Services</h3>
                    <p className="text-gray-700">
                        Fiesta provides corporate and employee shuttle services across India&apos;s leading business
                        hubs with a focus on safety, punctuality, and convenience.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {cityCards.map((city) => (
                        <Link
                            key={city.city}
                            href={city.href || "#"}
                            className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] rounded-2xl border-b-4 border-[#f6b7b7] bg-[#FFEDED] p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-[#EC2028]"
                        >
                            <div className="w-16 h-16 rounded-full bg-white mb-4 flex items-center justify-center shadow-sm">
                                <Image src={city.icon} alt={city.city} width={42} height={42} />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">{city.city}</h4>
                            <p className="text-gray-700 text-sm flex-1 mb-4">{city.description}</p>
                            <span className="text-[#EC2028] font-bold text-sm inline-flex items-center gap-1">
                                Explore
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PanIndiaServices;
