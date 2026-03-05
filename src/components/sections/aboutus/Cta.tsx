"use client";

import React from "react";
import Image from "next/image";
import Button from "../../common/Button";

const Cta = () => {
    return (
        <section className="relative w-full min-h-[600px] flex items-center overflow-hidden py-20 px-4 md:px-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/about-us/banner/about-us-banner.jpg"
                    alt="Reach Your Destination Safe and on Time"
                    fill
                    style={{ objectFit: "cover" }}
                    className="brightness-75"
                />
                {/* Gradient Overlay prioritizing the right side for text readability */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent" />
            </div>

            <div className="container mx-auto relative z-10 flex justify-end">
                <div className="max-w-2xl text-left md:pr-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Reach Your Destination Safe <br className="hidden md:block" /> and on Time, Every Time
                    </h2>

                    <div className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
                        <p>
                            Fiesta operates with the soul objective of transporting its customers to their destinations on time, every time. We maintain a fleet of latest vehicles which operate with maximum efficiency due to the excellent maintenance and periodic service.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Button href="/reach-us" variant="primary">
                            Contact Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
