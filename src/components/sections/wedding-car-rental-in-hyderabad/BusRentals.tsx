import React from 'react';
import Image from 'next/image';
import BookNowButton from "../../common/BookNowButton";

const BusRentals = () => {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1 flex flex-col space-y-8">
                        <div>
                            <span className="inline-block px-4 py-2 bg-red-50 text-[#EC2028] font-bold text-sm tracking-widest uppercase mb-6 rounded-full border border-red-100">
                                Guest Transportation
                            </span>
                            <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                                Bus Rental Services for <span className="text-[#EC2028]">Wedding Guests</span>
                            </h2>
                        </div>
                        
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                            <p>
                                Fiesta also provides the <span className="text-gray-900 font-bold underline decoration-[#EC2028] decoration-2">best bus rental service in Hyderabad</span>, complementing luxury car rentals for a complete transportation solution.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 w-6 h-6 rounded-full bg-[#EC2028] btn-animated flex shrink-0 items-center justify-center text-white p-1">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <span>Large bus category options, both AC and non-AC, for wedding guests, family members, or corporate event transfers.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 w-6 h-6 rounded-full bg-[#EC2028] btn-animated flex shrink-0 items-center justify-center text-white p-1">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <span>Suitable for local movement, outstation travel, or a business trip.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 w-6 h-6 rounded-full bg-[#EC2028] btn-animated flex shrink-0 items-center justify-center text-white p-1">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <span>Enables coordinated arrivals at wedding venues, ensuring every detail receives attention.</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <BookNowButton className="inline-block bg-gray-900 hover:bg-[#EC2028] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-1 mt-4">
                                Inquire about Bus Rentals
                            </BookNowButton>
                        </div>
                    </div>
                    
                    <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 min-h-[250px] h-[300px] md:h-[500px] lg:h-[600px]">
                        <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl mt-12 group">
                            <Image
                                src="/images/wedding-car-rental-in-chennai/unnamed-6.jpg"
                                alt="Large Bus Category for Wedding Guests"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/wedding-car-rental-in-chennai/unnamed-7.jpg"
                                alt="Luxury Bus Rental in Hyderabad"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusRentals;
