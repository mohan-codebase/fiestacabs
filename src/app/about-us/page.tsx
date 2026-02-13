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
            name: "John Doe",
            position: "CEO & Founder",
            image: "/images/about-us/meet-our-leaders/Agnello G Fernandes.jpg",
        },
        {
            id: "2",
            name: "Jane Smith",
            position: "Chief Operating Officer",
            image: "/images/about-us/meet-our-leaders/Avasarala Sriniva Rao.jpg",
        },
        {
            id: "3",
            name: "Michael Brown",
            position: "Chief Technology Officer",
            image: "/images/about-us/meet-our-leaders/G.Panchatcharam.jpg",
        },
        {
            id: "4",
            name: "Sarah Johnson",
            position: "Head of Operations",
            image: "/images/about-us/meet-our-leaders/G.Suresh Kumar.jpg",
        },
        {
            id: "5",
            name: "David Wilson",
            position: "Head of Sales",
            image: "/images/about-us/meet-our-leaders/M.Pandimanian.jpg",
        },
        {
            id: "6",
            name: "Emily Davis",
            position: "Head of Customer Success",
            image: "/images/about-us/meet-our-leaders/V.Sajju Kumar.jpg",
        },


    ];

    return (
        <div className="w-full">
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

                            <Button href="/contact" variant="primary">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="w-full py-20 ">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Leaders
                        </h2>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                            Our experienced leadership team drives innovation and
                            excellence in everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leaders.map((leader) => (
                            <div
                                key={leader.id}
                                className=" rounded-2xl overflow-hidden  "
                            >
                                <div className="relative h-80 w-full">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {leader.name}
                                    </h3>
                                    <p className="text-gray-600">{leader.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Customers Choose Us */}
            <WhyChooseUs />

            {/* CTA Section */}
            <section className="w-full py-20 bg-[#D32F2F]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">
                        Ready to Experience Safe and Reliable Transportation?
                    </h2>
                    <p className="text-white/90 text-lg mb-8">
                        Join hundreds of satisfied customers who trust us for their
                        daily commute and special occasions
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button href="/contact" variant="secondary" size="lg">
                            Get Started
                        </Button>
                        <Button
                            href="/services"
                            variant="outline"
                            size="lg"
                            className="!border-white !text-white hover:!bg-white hover:!text-[#D32F2F]"
                        >
                            View Services
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
