"use client";

import React from "react";
import Image from "next/image";
import { FaMapLocationDot, FaCarBurst, FaHandHoldingDollar, FaArrowsRotate, FaIdCardClip } from "react-icons/fa6";
import { FaCompactDisc } from "react-icons/fa"; // A stand in for the decorative wheel icon

const WeddingReliability = () => {
    const features = [
        {
            icon: <FaMapLocationDot className="text-3xl text-[#EC2028]" />,
            title: "Pan India Presence",
            desc: "Clean, high-performing luxury car rentals are available in all major cities."
        },
        {
            icon: <FaCarBurst className="text-3xl text-[#EC2028]" />,
            title: "Chauffeurs",
            desc: "Chauffeur-driven cars with etiquette and safety"
        },
        {
            icon: <FaHandHoldingDollar className="text-3xl text-[#EC2028]" />,
            title: "Affordability",
            desc: "Affordable price without cutting corners"
        },
        {
            icon: <FaArrowsRotate className="text-3xl text-[#EC2028]" />,
            title: "Replacement",
            desc: "Quick replacements in case of unexpected issues"
        },
        {
            icon: <FaIdCardClip className="text-3xl text-[#EC2028]" />,
            title: "Experience",
            desc: "Verified drivers with years of experience handling luxury car movements."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8 space-y-20">

              

                {/* Block 2: What Makes Us Reliable Text / Image */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start pb-10">
                    {/* Content - Left */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed mb-6">
                            <p>
                                When we say we&apos;re ready for your significant events, we mean it. Our car rental service doesn&apos;t stop at just handing over keys. We stay involved until the last drop-off. We promise:
                            </p>
                        </div>

                        <div className="space-y-4 mb-6">
                            {[
                                "Clean, high-performing luxury car rentals are available in all major cities.",
                                "Chauffeur-driven cars with etiquette and safety",
                                "Affordable price without cutting corners",
                                "Availability across multiple cities",
                                "Quick replacements in case of unexpected issues",
                                "Verified drivers with years of experience handling luxury car movements."
                            ].map((item, index) => (
                                <div key={index} className="flex gap-3 items-start">
                                    <div className="shrink-0 mt-1">
                                        <FaCompactDisc className="text-[#EC2028] text-xl" />
                                    </div>
                                    <p className="text-gray-700 text-[15px] leading-relaxed mt-0.5">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-5 text-gray-700 text-[15px] leading-relaxed">
                            <p>
                                Every wedding is different, especially on the big day. Some require early morning pickups, others demand midnight drop-offs after a grand reception. We remain ready. Even when last-minute changes happen, we manage. We adapt, without excuses.
                            </p>
                            <p>
                                Our team coordinates with your staff. We keep the car service efficient and easy to follow. We send drivers with the proper dress code. We keep the guests safe, the vehicles in good condition, and the experience unforgettable. Our team ensures your luxury car rentals are updated, safe, and spotless
                            </p>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[600px]">
                        <Image
                            src="/images/services-offered/premium-car-rentals/wedding-cars/what-makes-us-reliable.jpg"
                            alt="Reliable Wedding Service"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Block 3: Across Cities / Cultures */}
                <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-start pt-10 border-t border-gray-100">
                    {/* Image - Left */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[750px]">
                        <Image
                            src="/images/services-offered/premium-car-rentals/wedding-cars/real-love-stories.jpg"
                            alt="Wedding Flowers in Car"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content - Right */}
                    <div className="w-full lg:w-1/2">
                        <div className="text-[#EC2028] font-semibold text-sm tracking-widest uppercase mb-4">
                            ACROSS CITIES,
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Across Cultures – We Drive Weddings That Matter
                        </h2>

                        <div className="space-y-5 text-gray-700 text-[15px] leading-relaxed">
                            <p>
                                India&apos;s weddings change from one pin code to another. But your business doesn&apos;t have time to figure out how to manage transport in every city in India. That&apos;s where we step in. From the moment a luxury car rolls up at the gate, it sets the event tone. Whether you need wedding car rentals or luxury car rentals in Hyderabad for a Nizami-style wedding or classy wedding car rentals in Delhi for a Lutyens bungalow celebration, we&apos;re already prepared to make your dream event happen.
                            </p>
                            <p>
                                We at Fiesta don&apos;t just offer luxury vehicles. We offer services and systems that support your business from the first booking to the last drop. Our backend teams in all four major cities, Hyderabad, Delhi, Gurgaon, and Bangalore, are experienced in handling multi-day weddings, outstation tour guests, airport transfers, and tight timelines.
                            </p>
                            <p>
                                If you&apos;re planning a palace wedding in Hyderabad&apos;s old city or a farmhouse celebration outside Gurgaon, you need cars that match the vibe and teams that match the speed. Our fleet includes everything from executive sedans and business-class vehicles to premium MUVs and vintage classics. The groom makes a grand entrance. The VIP guests arrive on time. The family travels in comfort. And you, the event partner, stay stress-free.
                            </p>
                            <p>
                                We&apos;ve seen it all: Delhi&apos;s heavy traffic, Gurgaon&apos;s sudden rain, Hyderabad&apos;s narrow lanes, and Bangalore&apos;s roadblocks. Our chauffeurs know alternate routes. Our planners work with local vendors. Our vehicles are always in good condition and assigned based on location and route needs.
                            </p>
                            <p>
                                Here&apos;s how we support you in each city:
                            </p>

                            <div className="pl-4 space-y-4 pt-2">
                                <p>
                                    One contact, four cities, full control. You don&apos;t chase vendors for a luxury car arrangement. You don&apos;t repeat instructions. We assign a city lead to coordinate with you directly.
                                </p>
                                <p>
                                    You can scale up bookings as your event grows. We will update you on car availability, timings, and pricing immediately. For every city, we operate like locals but deliver like pros.
                                </p>
                                <p>
                                    Luxury car rentals are managed across state borders with single-point coordination. Let your next event be driven by experience. Let us move your weddings, city to city.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WeddingReliability;
