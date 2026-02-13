import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
    const features = [
        {
            id: "01",
            title: "Two decades of experience in innovative customer services",
            description:
                "Since 1998, we have consistently understood and adapted to the evolving needs of our customers, leveraging their feedback to enhance our services and deliver a consistently positive experience. This strong customer-centric approach has established Fiesta as one of the leading providers of employee transport services in the country.",
            image: "/images/about-us/why-choose-us/01.avif",
        },
        {
            id: "02",
            title: "Customized End to End Transport Solutions for every customer need",
            description:
                "Fiesta can address all your transport related needs. We are happy to understand what outcomes you are looking for and design a solution for your unique requirements. Whatever your needs may be related to car renting or any other transport related logistics, we have you covered.",
            image: "/images/about-us/why-choose-us/02.avif",
        },
        {
            id: "03",
            title: "Proactive Management team closely working with customers",
            description:
                "Our management team brings a unique blend of rich experience and a passion for excellence. By going the extra mile and constantly innovating, we maintain our reputation as one of the leading employee transport services in the nation.",
            image: "/images/about-us/why-choose-us/03.avif",
        },
        {
            id: "04",
            title: "Digitalized Solutions for Real-time Tracking & Safety",
            description:
                "We leverage cutting-edge technology to provide real-time tracking, automated billing, and enhanced safety features. Our digital ecosystem ensures complete transparency and efficiency in every journey we manage.",
            image: "/images/about-us/why-choose-us/04.avif",
        },
        {
            id: "05",
            title: "Sustainable & Eco-friendly Fleet Options",
            description:
                "Fiesta is committed to environmental responsibility. We offer a growing fleet of electric and low-emission vehicles, helping our corporate clients achieve their sustainability goals while maintaining premium transport quality.",
            image: "/images/about-us/why-choose-us/05.avif",
        },
        {
            id: "06",
            title: "Unmatched Reliability with 24/7 Operations",
            description:
                "Our operations never sleep. With a dedicated control room and round-the-clock support, we ensure that your transportation needs are met with absolute reliability, regardless of the time or location.",
            image: "/images/about-us/why-choose-us/06.avif",
        },
    ];

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
                        Why Customers Choose Us
                    </h2>
                    <div className="w-24 h-1 bg-red-600"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white rounded-lg overflow-hidden border border-gray-100 flex flex-col h-full"
                        >
                            <div className="relative h-64 w-full">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-0 left-0 bg-[#E31E24] text-white text-xs font-bold px-2 py-1 z-10">
                                    {feature.id}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-[15px]">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
