import React from "react";
import Image from "next/image";
import Button from "../../components/common/Button";
import PageHero from "../../components/common/PageHero";

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
            image: "/images/about/team/leader-1.jpg",
        },
        {
            id: "2",
            name: "Jane Smith",
            position: "Chief Operating Officer",
            image: "/images/about/team/leader-2.jpg",
        },
        {
            id: "3",
            name: "Michael Brown",
            position: "Chief Technology Officer",
            image: "/images/about/team/leader-3.jpg",
        },
        {
            id: "4",
            name: "Sarah Johnson",
            position: "Head of Operations",
            image: "/images/about/team/leader-4.jpg",
        },
        {
            id: "5",
            name: "David Wilson",
            position: "Head of Sales",
            image: "/images/about/team/leader-5.jpg",
        },
        {
            id: "6",
            name: "Emily Davis",
            position: "Head of Customer Success",
            image: "/images/about/team/leader-6.jpg",
        },
    ];

    const benefits = [
        {
            id: "1",
            title: "Favorite Delivery Service",
            description:
                "Our commitment to excellence and customer satisfaction has made us the preferred choice for businesses across industries.",
            image: "/images/about/benefits/delivery-service.jpg",
        },
        {
            id: "2",
            title: "24/7 Customer Support",
            description:
                "Round-the-clock support ensures your transportation needs are met anytime, anywhere with immediate assistance.",
            image: "/images/about/benefits/customer-support.jpg",
        },
        {
            id: "3",
            title: "100% Secure & Eco-Friendly",
            description:
                "Our eco-friendly fleet and secure transportation protocols ensure safe, sustainable journeys for all passengers.",
            image: "/images/about/benefits/eco-friendly.jpg",
        },
        {
            id: "4",
            title: "Fast & Reliable Service",
            description:
                "Punctuality is our priority. We ensure timely pickups and drop-offs with our efficient fleet management.",
            image: "/images/about/benefits/fast-service.jpg",
        },
        {
            id: "5",
            title: "Flexible Payment Options",
            description:
                "Multiple payment methods including digital wallets, cards, and corporate billing for your convenience.",
            image: "/images/about/benefits/payment-options.jpg",
        },
        {
            id: "6",
            title: "Experienced Drivers",
            description:
                "Our professional, verified drivers undergo rigorous training and background checks for your safety.",
            image: "/images/about/benefits/experienced-drivers.jpg",
        },
    ];

    return (
        <div className="w-full">
            {/* Hero Banner */}
            <PageHero
                title="About Us"
                subtitle="Your trusted partner in smart mobility solutions"
                backgroundImage="/images/about/hero-banner.jpg"
                height="md"
            />

            {/* Company Information */}
            <section className="w-full py-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Image */}
                        <div className="relative h-[400px] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/about/company-info.jpg"
                                alt="Fiesta Smart Mobility"
                                fill
                                style={{ objectFit: "cover" }}
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
            <section className="w-full py-20 bg-gray-50">
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
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="relative h-80">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        style={{ objectFit: "cover" }}
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
            <section className="w-full py-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Customers Choose Us
                        </h2>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                            Discover what makes us the preferred choice for
                            transportation services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={benefit.image}
                                        alt={benefit.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
