import React from "react";
import Image from "next/image";
import Button from "../../components/common/Button";
import PageHero from "../../components/common/PageHero";
import WhyChooseUs from "../../components/sections/aboutus/WhyChooseUs";
import MissionVisible from "../../components/sections/aboutus/MissionVisible";

export const metadata = {
    title: "About Us - Fiesta Smart Mobility",
    description:
        "Learn about Fiesta Smart Mobility, our mission, leadership team, and why customers choose us for their transportation needs.",
};

export default function AboutUs() {
    const leaders = [
        {
            id: "1",
            name: "G.Panchatcharam",
            position: "Co-founder & CEO",
            image: "/images/about-us/meet-our-leaders/G.Panchatcharam.jpg",
        },
        {
            id: "2",
            name: "G.Suresh Kumar",
            position: "Co-founder & President",
            image: "/images/about-us/meet-our-leaders/G.Suresh Kumar.jpg",
        },
        {
            id: "3",
            name: "Agnello G Fernandes",
            position: "Chief Operating Officer - Employee Transport Service",
            image: "/images/about-us/meet-our-leaders/Agnello G Fernandes.jpg",
        },
        {
            id: "4",
            name: "Avasarala Srinivasa Rao",
            position: "Chief Operating Officer - Premium Car Rentals",
            image: "/images/about-us/meet-our-leaders/Avasarala Sriniva Rao.jpg",
        },
        {
            id: "5",
            name: "V.Sajju Kumar",
            position: "Associate Vice President - Operations",
            image: "/images/about-us/meet-our-leaders/V.Sajju Kumar.jpg",
        },
        {
            id: "6",
            name: "M.Pandimanian",
            position: "Associate Vice President - Finance",
            image: "/images/about-us/meet-our-leaders/M.Pandimanian.jpg",
        },
    ];

    return (
        <div className="w-full bg-[#f8f9fa]">
            {/* Hero Banner */}
            <PageHero
                title="About Us"
                subtitle="Your trusted partner in smart mobility solutions"
                backgroundImage="/images/about-us/banner/about-us-banner.jpg"
                height="md"
            />

            {/* Vision & Mission */}
            <MissionVisible />

            {/* Company Information */}
            <section className="w-full py-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Image */}
                        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/about-us/about-us.png"
                                alt="Fiesta Smart Mobility"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        {/* Right - Content */}
                        <div>
                            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
                                Fiesta Cabs is Innovative & Youngest Services
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Fiesta Smart Mobility ventured into the highly
                                competitive business domain in 2001 by providing
                                employee transportation services. Over the years, we
                                have grown to become one of the most trusted names in
                                the industry.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Our commitment to excellence, safety, and customer
                                satisfaction has helped us build lasting relationships
                                with businesses across various sectors. We combine
                                innovation with reliability to deliver seamless
                                transportation solutions.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-3xl font-bold text-[#D32F2F] mb-2">
                                        20+
                                    </h3>
                                    <p className="text-gray-700">Years of Excellence</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-3xl font-bold text-[#D32F2F] mb-2">
                                        500+
                                    </h3>
                                    <p className="text-gray-700">Happy Clients</p>
                                </div>
                            </div>

                            <Button href="/reach-us" variant="primary">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section id="leaders" className="w-full py-20 bg-[#f8f9fa]">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-[#2A2A2A] mb-4">
                            Meet Our Leaders
                        </h2>
                        <div className="w-16 h-1 bg-[#E31E24]"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                        {leaders.map((leader) => (
                            <div
                                key={leader.id}
                                className="bg-white rounded overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col h-full"
                            >
                                <div className="relative aspect-[3/4] w-full bg-gray-100">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        style={{ objectFit: "cover", objectPosition: "top" }}
                                    />
                                </div>
                                <div className="p-4 text-center flex-grow flex flex-col justify-start">
                                    <h3 className="text-[15px] font-bold text-[#2A2A2A] mb-1">
                                        {leader.name}
                                    </h3>
                                    <p className="text-[11px] text-[#666666] leading-tight">
                                        {leader.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Customers Choose Us */}
            <section id="why-fiesta" className="w-full py-20 ">
                <WhyChooseUs />
            </section>

        </div>
    );
}
