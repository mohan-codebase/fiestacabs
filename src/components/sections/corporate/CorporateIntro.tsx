import React from "react";
import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";

const CorporateIntro = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

                    {/* Image - Left */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[520px] order-1">
                        <div className="absolute inset-0 overflow-hidden h-full">
                            <Image
                                src="/images/services-offered/premium-car-rentals/corporate-car-rental-services/how-corporate-car-rental-improve.jpg"
                                alt="How Corporate Car Rentals Improve Business Productivity"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Text Content - Right */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            How Corporate Car Rentals Improve Business Productivity
                        </h2>

                        <div className="space-y-6 text-gray-800 text-[15px] leading-relaxed mb-8">
                            <p>
                                Have you ever booked a work trip and felt unsure if the car will arrive on time or if the entire process will run smoothly? Many corporate teams face this headache every day. When travel matters for client meetings, corporate events, airport transfers and business purposes, the quality of your corporate car rental service makes or breaks the whole plan.
                            </p>
                            <p>
                                That&apos;s why companies across India look at Fiesta Smart Mobility when they need professional drivers, well maintained vehicles and dependable support for corporate travel.
                            </p>
                            <p>
                                This guide explains how Fiesta helps corporate clients choose the right car rental services, why flexible rental plans matter, and how trained chauffeurs and professional conduct add ease to employee travel.
                            </p>
                        </div>

                        <div>
                            <BookNowButton className="bg-[#EC2028] hover:bg-red-700 text-white font-medium py-3 px-8 rounded transition-colors">
                                Get A Free Quote
                            </BookNowButton>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CorporateIntro;
