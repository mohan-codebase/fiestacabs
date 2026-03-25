import React from "react";
import Image from "next/image";
import Button from "../../common/Button";

interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

const Services = () => {
    const services: Service[] = [
        {
            id: "premium-car-rentals",
            title: "Premium Car Rental Services",
            description:
                "Our vehicles are equipped with plush interiors, creating the perfect atmosphere for your special day. Sub-services: Airport Transport Service.",
            image: "/images/home/our-services/premium-car-rentals.jpg",
            link: "/premium-car-rentals",
        },
        {
            id: "employee-transport",
            title: "Employee Transport Services",
            description:
                "Fiesta Smart Mobility ventured into this highly competitive business domain in the year 2001 by providing. Sub-services: Cab Service, Bus Service, Shuttle Service.",
            image: "/images/home/our-services/employee-transport-solutions.jpg",
            link: "/employee-transport-services",
        },
    ];

    return (
        <section className="w-full py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50/50">
                        Services
                    </p>
                    <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
                        Our Services
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="relative rounded-3xl overflow-hidden shadow-lg group h-[400px] md:h-[500px]"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                                <div className="bg-white rounded-2xl p-6 md:p-8 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Button href={service.link} variant="primary">
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
