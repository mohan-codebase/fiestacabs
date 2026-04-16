import { getMetadata } from "../data/metadata";
import React from "react";
import Image from "next/image";
import Button from "../../components/common/Button";
import PageHero from "../../components/common/PageHero";
import WhyChooseUs from "../../components/sections/aboutus/WhyChooseUs";
import MissionVisible from "../../components/sections/aboutus/MissionVisible";
import Cta from "../../components/sections/aboutus/Cta";

export const metadata = getMetadata("/about-us");

const stats = [
    { value: "28+", label: "Years of Excellence" },
    { value: "300+", label: "Team Members" },
    { value: "₹1.2B", label: "Annual Turnover" },
    { value: "2000+", label: "Partner Vehicles" },
];

const leaders = [
    {
        id: "1",
        name: "G. Panchatcharam",
        position: "Co-founder & CEO",
        image: "/images/about-us/meet-our-leaders/G.Panchatcharam.jpg",
    },
    {
        id: "2",
        name: "G. Suresh Kumar",
        position: "Co-founder & President",
        image: "/images/about-us/meet-our-leaders/G.Suresh Kumar.jpg",
    },
    {
        id: "3",
        name: "Agnello G Fernandes",
        position: "COO — Employee Transport",
        image: "/images/about-us/meet-our-leaders/Agnello G Fernandes.jpg",
    },
    {
        id: "4",
        name: "Avasarala Srinivasa Rao",
        position: "COO — Premium Car Rentals",
        image: "/images/about-us/meet-our-leaders/Avasarala Sriniva Rao.jpg",
    },
    {
        id: "5",
        name: "V. Sajju Kumar",
        position: "AVP — Operations",
        image: "/images/about-us/meet-our-leaders/V.Sajju Kumar.jpg",
    },
    {
        id: "6",
        name: "M. Pandimanian",
        position: "AVP — Finance",
        image: "/images/about-us/meet-our-leaders/M.Pandimanian.jpg",
    },
];

export default function AboutUs() {
    return (
        <div className="w-full bg-white">
            {/* Hero Banner */}
            <PageHero
                title="About Us"
                subtitle=""
                backgroundImage="/images/about-us/banner/WhatsApp-Image-2025-02-17-at-11.22.49-PM.jpeg"
                height="md"
            />

            {/* ── Company Overview ── */}
            <section className="w-full py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
                        {/* Image */}
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[540px] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/about-us/about-us.png"
                                alt="Fiesta Smart Mobility"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-red-50 rounded-full">
                                <span className="w-2 h-2 rounded-full bg-[#EC2028] btn-animated" />
                                <span className="text-[#EC2028] font-semibold text-sm tracking-wide uppercase">About</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                                Fiesta, A Name to Remember in Employee Transport Services
                            </h2>
                            <div className="w-12 h-1 bg-[#EC2028] btn-animated rounded-full mb-6" />
                            <div className="space-y-4 leading-relaxed text-sm md:text-[15px] mb-8 text-gray-700">
                                <p>
                                    With <strong className="text-gray-900">28 years of excellence</strong>, Fiesta Smart Mobility Private Limited is a leading provider of integrated employee transport services for the corporate sector. Established in 1998 in Chennai, we have expanded to achieve a pan-India presence with a dedicated team of <strong className="text-gray-900">300+ employees nationwide.</strong>
                                </p>
                                <p>
                                    Our core services include <strong className="text-gray-900">Employee Transport Solutions and Premium Car Rentals</strong>, designed to meet the unique needs of modern businesses. Recognized as one of India&apos;s best employee transport services providers, Fiesta has achieved a <strong className="text-gray-900">₹1.2 billion turnover</strong>—a testament to our commitment to quality and customer satisfaction.
                                </p>
                                <p>
                                    To align with sustainability goals, we are actively investing in <strong className="text-[#EC2028]">Electric Vehicles (EVs)</strong> to cater to the evolving transportation needs of modern organizations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Bar */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="text-center bg-gray-50 rounded-2xl py-8 px-4 border border-gray-100"
                            >
                                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EC2028] mb-1">{stat.value}</div>
                                <div className="text-gray-400 text-[11px] md:text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <MissionVisible />

            {/* ── Leadership Team ── */}
            <section id="leaders" className="w-full py-16 md:py-24 bg-white ">
                <div className="max-w-9xl mx-auto px-4 ">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-red-50 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-[#EC2028] btn-animated" />
                            <span className="text-[#EC2028] font-semibold text-sm tracking-wide uppercase">Leadership</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                            Meet Our <span className="text-[#EC2028]">Leaders</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 px-2 md:px-4">
                        {leaders.map((leader) => (
                            <div
                                key={leader.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
                            >
                                {/* Photo */}
                                <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Info */}
                                <div className="px-3 py-4 text-center border-t-4 border-[#EC2028]">
                                    <h3 className="text-xs md:text-[14px] font-bold text-gray-900 leading-tight mb-1 group-hover:text-[#EC2028] transition-colors">
                                        {leader.name}
                                    </h3>
                                    <p className="text-[10px] md:text-[11px] text-gray-500 font-medium">{leader.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <Cta />

            {/* Why Choose Us */}
            <WhyChooseUs />
        </div>
    );
}
