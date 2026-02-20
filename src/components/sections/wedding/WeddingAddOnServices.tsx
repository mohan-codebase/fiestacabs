"use client";

import React from "react";
import Image from "next/image";
import { FaLifeRing } from "react-icons/fa6";

const WeddingAddOnServices = () => {
    const addons = [
        "Custom car decoration (ribbons, silk flowers, themes)",
        "Water bottles, dry towels, and fresheners inside cars",
        "Early arrival for wedding photographers",
        "Bride entry music support (select cities)",
        "Separate cars for makeup teams and stylists"
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Left Side Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-[44px] font-bold text-[#2A2A2A] mb-6 leading-[1.15]">
                            Add-On Services to<br />Elevate Every Ride
                        </h2>

                        <p className="text-[#5A5A5A] text-[15px] leading-relaxed mb-6 pr-4">
                            Sometimes, it&apos;s the small details that turn a ride into an experience. Our wedding car rental packages can include add-ons that elevate every journey, from pre-wedding shoots to post-reception drop-offs. Available add-ons:
                        </p>

                        <div className="space-y-5 mb-8">
                            {addons.map((addon, index) => (
                                <div key={index} className="flex gap-3 items-start">
                                    <div className="shrink-0 mt-0.5">
                                        <FaLifeRing className="text-[#EC2028] text-xl" />
                                    </div>
                                    <p className="text-[#5A5A5A] text-[15px] leading-relaxed">
                                        {addon}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-[#5A5A5A] text-[15px] leading-relaxed mb-6 pr-4">
                            Need a driver who speaks a specific language? Need the car to match the wedding colour theme? Want a dummy ride for a timing test a day earlier? We&apos;re open to it.
                        </p>

                        <p className="text-[#5A5A5A] text-[15px] leading-relaxed pr-4">
                            We don&apos;t overpromise. We simply ask what your client wants, and we help you deliver. If the bride wants a convertible for a sunset shoot or the groom wants to arrive in an affordable vintage car surrounded by dhol artists, we make it happen.
                        </p>
                    </div>

                    {/* Right Side Image & Text */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-2">
                        <div className="relative w-full h-[400px] md:h-[500px] mb-8">
                            <Image
                                src="/images/services-offered/premium-car-rentals/wedding-cars/add-on-services.jpg"
                                alt="Wedding Couple Add-on Services"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-[#5A5A5A] text-[15px] leading-relaxed pl-2 md:pl-4 border-l-2 border-transparent">
                            Your client&apos;s special day should look seamless. Our entry-level luxury car options include tissue boxes, perfume, and bottled water. These small extras make it memorable. As a company managing big moments, you&apos;ll appreciate how smoothly we work behind the scenes.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WeddingAddOnServices;
