import Image from "next/image";
import Link from "next/link";

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
        <section id="our-services" className="max-w-[1600px] mx-auto px-4 py-12 md:py-20">
            <div className="text-center mb-8 md:mb-12">
                <p className="text-[#EC2028] text-lg md:text-xl font-semibold">Services</p>
                <h2 className="text-[#020101] text-3xl md:text-[37px] font-semibold">Our Services</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="relative rounded-[25px] min-h-[520px] p-4 md:p-8 flex items-end overflow-hidden"
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />

                        <div className="relative z-10 w-full rounded-xl bg-white/95 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div className="md:max-w-[70%]">
                                <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">{service.title}</h3>
                                <p className="text-gray-700 text-base">{service.description}</p>
                            </div>

                            {service.external ? (
                                <a
                                    href={service.href}
                                    className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded whitespace-nowrap"
                                >
                                    Read More
                                </a>
                            ) : (
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded whitespace-nowrap"
                                >
                                    Read More
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
