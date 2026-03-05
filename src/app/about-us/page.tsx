import React from "react";
import Image from "next/image";
import Button from "../../components/common/Button";
import PageHero from "../../components/common/PageHero";
import WhyChooseUs from "../../components/sections/aboutus/WhyChooseUs";
import MissionVisible from "../../components/sections/aboutus/MissionVisible";
import Cta from "../../components/sections/aboutus/Cta";

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
                subtitle=""
                backgroundImage="/images/about-us/banner/WhatsApp-Image-2025-02-17-at-11.22.49-PM.jpeg"
                height="md"
            />



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
                                Fiesta, A Name to Remember in Employee Transport Services                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">


                                Fiesta Smart Mobility Private Limited

                                With 27 years of excellence, Fiesta Smart Mobility Private Limited is a leading provider of integrated employee transport services for the corporate sector.

                                Established in 1998 in Chennai, we have expanded to achieve a pan-India presence and a dedicated team of 300+ employees nationwide.

                                Our core services include Employee Transport Solutions and Premium Car Rentals, designed to meet the unique needs of businesses.



                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Recognized as one of the Best employee transport servicesBest employee transport servicesBest employee transport services, Fiesta has achieved a 1.2 billion rupee turnover, a testament to our commitment to quality and customer satisfaction.

                                To align with sustainability goals, we are actively investing in Electric Vehicles (EVs) to cater to the evolving transportation needs of organizations.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <MissionVisible />

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


            {/* Call to Action */}
            <Cta />

            {/* Why Customers Choose Us */}
            <section id="why-fiesta" className="w-full py-20 ">
                <WhyChooseUs />
            </section>


        </div>
    );
}
