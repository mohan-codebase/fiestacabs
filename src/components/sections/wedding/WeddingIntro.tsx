"use client";

import React from "react";
import Image from "next/image";
import Button from "../../../components/common/Button";

const WeddingIntro = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

                    {/* Text Content - Left */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <p className="text-[#EC2028] tracking-[0.2em] font-medium text-sm md:text-base mb-4 uppercase">
                            The First
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Ride of Forever Starts Here
                        </h2>

                        <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed mb-8">
                            <p>
                                Have you ever thought about how the luxury car rental that brings the groom and bride sets the tone for the entire wedding, especially when using a luxury wedding car with class chauffeur services and a classy chauffeur service? Now imagine that car being from one of our premium luxury car rentals or a full-size premium vehicle, shining clean, driven by a classy chauffeur, arriving exactly when needed.
                            </p>
                            <p>
                                That's what we offer. We help companies deliver lasting first impressions to their customers. If you're a wedding planner, event company, or hospitality business, our car rental services are built to support your work.
                            </p>
                            <p>
                                We understand weddings. We understand timelines, big crowds, special guests, and those emotional family moments that happen in between during your outstation tour. Our wedding cars, which include a variety of luxury car rental options, come with courteous drivers who drive with care, style, and discipline, guaranteeing that courteous drivers drive in a manner that enhances the occasion. Every wedding day, or big day, matters, and with a decade-long experience, we've made sure our fleet arrives on time, looks stunning, and adds style to every scene.
                            </p>
                            <p>
                                When you partner with us, you don't just hire a vehicle. When you partner with us, you don't just hire a luxury car; you sign up for a support system. We make sure you don't worry about wedding car breakdowns, confused drivers, or missing guests. Our wedding cars are well-maintained and handpicked for performance and class. We keep your clients happy and your operations smooth.
                            </p>
                        </div>

                        <div>
                            <Button className="bg-[#EC2028] rounded ">
                                Book Now
                            </Button>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px]">
                        <div className="absolute inset-0 overflow-hidden shadow-lg h-full">
                            <Image
                                src="/images/services-offered/premium-car-rentals/wedding-cars/ride-forever.jpeg"
                                alt="Wedding Couple with Classic Car"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WeddingIntro;
