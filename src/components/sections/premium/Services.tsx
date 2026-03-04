"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
    return (
        <>
            {/* Local and Outstation trips */}
            <section className="py-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[350px] md:h-[450px]  overflow-hidden ">
                        <Image src="/images/premium-car-rentals/local-outstation.jpeg" alt="Local and Outstation Trips" fill className="object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Local and Outstation Trips</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Fiesta provides top-notch transportation services for both outstation and local trips, catering to diverse travel needs with unmatched reliability. Whether you're planning a weekend getaway, a family vacation, or need daily rides within the city, Fiesta ensures a smooth, hassle-free experience.
                            </p>
                            <p>
                                Our versatile fleet includes luxury, premium, standard, and MUV vehicles, giving you the flexibility to choose a ride that matches your preferences and budget. With well-maintained cars, spacious interiors, and professional drivers, we prioritize your comfort and safety every step of the way.
                            </p>
                        </div>
                        <Link href="/services-offered" className="inline-block mt-8 bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded transition-colors">
                            To Know More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Weddings Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Weddings</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Make your wedding entry truly unforgettable with our premium vehicle services. We offer a fleet of luxurious cars, including high-end sedans, SUVs, and classic vehicles, perfect for your grand entrance.
                            </p>
                            <p>
                                Our professional chauffeurs are dedicated to providing an elegant, stress-free experience, ensuring you arrive on time and in style. From the moment you step into our vehicles, comfort and luxury are our priorities.
                            </p>
                        </div>
                        <Link href="/services-offered" className="inline-block mt-8 bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded transition-colors">
                            To Know More
                        </Link>
                    </div>
                    <div className="relative h-[350px] md:h-[450px]  overflow-hidden  order-1 md:order-2">
                        <Image src="/images/premium-car-rentals/weddings.jpg" alt="Weddings" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Corporate Events */}
            <section className="py-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[350px] md:h-[450px]  overflow-hidden ">
                        <Image src="/images/premium-car-rentals/corporate-events.avif" alt="Corporate Events" fill className="object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Corporate Events</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Ensure your corporate event runs smoothly with our expert logistics solutions. We specialize in providing reliable, efficient transportation for guests, speakers, and staff, tailored to your event’s unique needs.
                            </p>
                            <p>
                                Our fleet of luxury vehicles, including sedans, SUVs, and buses, ensures that everyone arrives on time and in style. From airport transfers to seamless venue transportation, we handle all the logistics to keep your event on track.
                            </p>
                        </div>
                        <Link href="/services-offered" className="inline-block mt-8 bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded transition-colors">
                            To Know More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Airport Transfers */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Airport Transfers</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Experience seamless, stress-free airport transfers with our premium vehicle fleet. Whether you're traveling for business or leisure, we ensure a smooth and timely journey from your home or office to the airport.
                            </p>
                            <p>
                                Professional chauffeurs are dedicated to providing an efficient and relaxing experience, handling all your luggage and ensuring punctuality. We keep track of your departure time to guarantee you're picked up and dropped off promptly.
                            </p>
                        </div>
                        <Link href="/services-offered" className="inline-block mt-8 bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded transition-colors">
                            To Know More
                        </Link>
                    </div>
                    <div className="relative h-[350px] md:h-[450px] overflow-hidden order-1 md:order-2">
                        <Image src="/images/premium-car-rentals/airport-transfers.avif" alt="Airport Transfers" fill className="object-cover" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
