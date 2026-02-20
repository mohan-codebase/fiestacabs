"use client";

import React from "react";
import { FaTag, FaPercent, FaGift } from "react-icons/fa";

const Offers = () => {
    return (
        <section
            className="py-20 bg-cover bg-center"
            style={{
                backgroundImage: 'linear-gradient(to bottom right, rgba(254, 242, 242, 0.95), rgba(255, 255, 255, 0.95)), url("/images/services-offered/premium-car-rentals/outstation-rides/exciting-offers.jpg")'
            }}
        >
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Exciting Offers and Discounts on Outstation Trips
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Save more on your long-distance rides with our exclusive deals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Offer 1 */}
                    <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#EC2028] flex items-start gap-4 hover:shadow-xl transition-shadow">
                        <div className="bg-red-100 p-3 rounded-full text-[#EC2028] text-xl shrink-0">
                            <FaTag />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">Flat ₹500 OFF</h3>
                            <p className="text-gray-600 text-sm mb-3">On your first round trip booking over 300km.</p>
                            <div className="inline-block bg-gray-100 text-gray-800 text-xs font-mono py-1 px-2 rounded border border-gray-300">
                                FIRST500
                            </div>
                        </div>
                    </div>

                    {/* Offer 2 */}
                    <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-green-500 flex items-start gap-4 hover:shadow-xl transition-shadow">
                        <div className="bg-green-100 p-3 rounded-full text-green-600 text-xl shrink-0">
                            <FaPercent />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">10% Corporate Discount</h3>
                            <p className="text-gray-600 text-sm mb-3">For registered business partners on monthly billing.</p>
                            <div className="inline-block bg-green-50 text-green-700 text-xs font-bold py-1 px-2 rounded">
                                AUTO APPLIED
                            </div>
                        </div>
                    </div>

                    {/* Offer 3 */}
                    <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-blue-500 flex items-start gap-4 hover:shadow-xl transition-shadow">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 text-xl shrink-0">
                            <FaGift />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">Weekend Getaway Special</h3>
                            <p className="text-gray-600 text-sm mb-3">Free upgrade to SUV for bookings made 7 days in advance.</p>
                            <div className="inline-block bg-gray-100 text-gray-800 text-xs font-mono py-1 px-2 rounded border border-gray-300">
                                WEEKENDUP
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offers;
