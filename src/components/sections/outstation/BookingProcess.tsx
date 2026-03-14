
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6"; // Using circle dot as placeholder for wheel icon
import Button from "../../../components/common/Button";
import BookNowButton from "../../common/BookNowButton";

const BookingProcess = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content - Left */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Easy 3-Step Booking Process for Your Ride
                        </h2>
                        <div className="w-24 h-1 bg-[#EC2028] btn-animated mb-8"></div>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Booking with us won’t need 10 clicks or a follow-up call. Companies can use our platform or contact our support to book outstation cabs easily.
                        </p>

                        <p className="text-gray-900 font-medium mb-8 text-lg">Here’s how it works:</p>

                        <div className="space-y-8 mb-10">
                            {[
                                {
                                    step: "1",
                                    text: "Select your route – Choose pickup, destination, and multiple stops if needed"
                                },
                                {
                                    step: "2",
                                    text: "Pick your car – Hatchback, sedan, SUV, tempo or minibus"
                                },
                                {
                                    step: "3",
                                    text: "Confirm trip details – Get fare breakdown, see driver details, and confirm"
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-6 items-start">
                                    <div className="shrink-0 w-10 h-10 rounded-full border-2 border-[#EC2028] flex items-center justify-center text-[#EC2028] font-bold text-lg bg-red-50">
                                        <FaRegCircleDot /> {/* Icon placeholder for the wheel/gear */}
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed pt-1">
                                        <span className="font-bold text-gray-900">{item.step}.</span> {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#EC2028] mb-10">
                            <p className="text-gray-600">
                                <span className="font-bold text-gray-900 block mb-2">Trip Updates:</span>
                                You’ll get SMS and email updates for every ride. You don’t need to wait or check again. Our team will share driver contact and vehicle number in advance, all information is also available on our website.
                            </p>
                        </div>

                        <BookNowButton className=" bg-[#EC2028] btn-animated hover: transform hover:-translate-y-1">
                            Book Now
                        </BookNowButton>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative h-[600px] lg:h-[700px]">
                        <div className="absolute inset-0   overflow-hidden">
                            <Image
                                src="/images/services-offered/premium-car-rentals/outstation-rides/easy-3-step-booking.jpg"
                                alt="Easy 3-Step Booking Process"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookingProcess;

