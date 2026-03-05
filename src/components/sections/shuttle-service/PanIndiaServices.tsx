import Image from "next/image";

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
    );
};

export default PanIndiaServices;
