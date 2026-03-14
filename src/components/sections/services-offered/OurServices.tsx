import Image from "next/image";
import Link from "next/link";
import Button from "../../../components/common/Button";

type ServiceItem = {
    title: string;
    description: string;
    image: string;
    href: string;
    external?: boolean;
};

const services: ServiceItem[] = [
    {
        title: "Employee Transport Solutions",
        description:
            "Fiesta Smart Mobility ventured into this highly competitive business domain in the year 2001 by providing..",
        image: "/images/services-offered/employee-transport.jpg",
        href: "/employee-transport-services",
    },
    {
        title: "Premium Car rentals",
        description:
            "Our vehicles are equipped with plush interiors, creating the perfect atmosphere for your special day.",
        image: "/images/services-offered/premium-rentals.jpg",
        href: "/premium-car-rentals",
    },
];

const OurServices = () => {
    return (
        <section id="our-services" className="max-w-6xl mx-auto px-4 py-12 md:py-18">
            <div className="text-center mb-10 md:mb-12 space-y-2">
                <p className="text-[#EC2028] text-sm md:text-base font-semibold tracking-[0.22em] uppercase">Services</p>
                <h2 className="text-[#020101] text-3xl md:text-4xl font-semibold">Our Services</h2>
            </div>

            <div className="space-y-8">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-0 overflow-hidden rounded-3xl border border-slate-200 shadow-[0_12px_28px_rgba(15,23,42,0.08)] bg-white"
                    >
                        <div className="relative min-h-[260px] md:min-h-[320px]">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent" />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col gap-4 justify-center">
                            <h3 className="text-xl md:text-2xl font-semibold text-black">{service.title}</h3>
                            <p className="text-gray-700 text-base leading-relaxed">{service.description}</p>
                            <div>
                                <Button href={service.href} className="bg-[#EC2028] btn-animated rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap">
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
