"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFileInvoiceDollar, FaTools, FaMapMarkedAlt, FaRegFileAlt, FaHeadset } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import Button from "../../../components/common/Button";

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <FaFileInvoiceDollar className="text-2xl text-white" />,
            title: "Flexible trip",
            description: "Book same-day or planned rides"
        },
        {
            icon: <FaTools className="text-2xl text-white" />,
            title: "Verified driver details",
            description: "are shared before every trip"
        },
        {
            icon: <FaMapMarkedAlt className="text-2xl text-white" />,
            title: "Door-to-door pickup",
            description: "from office, airport or residence"
        },
        {
            icon: <FaStopwatch className="text-2xl text-white" />,
            title: "No hidden charges",
            description: "Arcu odio nulla vestibulum consequat enim velit turpis habitasse nostra."
        },
        {
            icon: <FaRegFileAlt className="text-2xl text-white" />,
            title: "Custom billing",
            description: "GST invoices, direct bank transfers, UPI or company account"
        },
        {
            icon: <FaHeadset className="text-2xl text-white" />,
            title: "24/7 ride support",
            description: "We don't close when your shift ends"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    {/* Image - Left */}
                    <div className="w-full lg:w-5/12 relative h-[600px] lg:h-[750px]">
                        <div className="absolute inset-0 overflow-hidden">
                            <Image
                                src="/images/services-offered/premium-car-rentals/outstation-rides/why-choose-us.jpg"
                                alt="Why Choose Us"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Content - Right */}
                    <div className="w-full lg:w-7/12 pt-4">
                        <div className="text-[#EC2028] font-semibold text-sm tracking-widest uppercase mb-4">
                            WHY CHOOSE US
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Top Reasons to Choose Our Intercity Service
                        </h2>

                        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-10">
                            <p>
                                Choosing our intercity service ensures a travel experience that is seamless, reliable, and comfortable. We prioritize punctuality and safety, offering well-maintained vehicles and professional drivers who are trained to deliver exceptional service.
                            </p>
                            <p>
                                Our routes are designed for convenience, connecting major cities with minimal hassle and maximum efficiency.
                            </p>
                            <p>
                                Our team tracks every ride. No guesswork. Just a comfortable ride with zero stress.
                            </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-10">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="shrink-0 w-12 h-12 bg-[#EC2028] rounded-full shadow-md flex items-center justify-center">
                                        {reason.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-1 leading-tight">
                                            {reason.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <Button href="/reach-us" className=" bg-[#EC2028] rounded ">
                            To Know More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
