"use client";

import React from "react";

const BookingProcess = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Easy 3-Step Booking Process</h2>
                    <p className="text-gray-600 text-lg">Booking with us won’t need 10 clicks or a follow-up call.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { step: "01", title: "Select your route", desc: "Choose pickup, destination, and multiple stops if needed" },
                        { step: "02", title: "Pick your car", desc: "Hatchback, sedan, SUV, tempo or minibus" },
                        { step: "03", title: "Confirm trip details", desc: "Get fare breakdown, see driver details, and confirm" }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm relative pt-12">
                            <span className="absolute top-0 left-8 -translate-y-1/2 w-16 h-16 bg-[#EC2028] text-white flex items-center justify-center font-bold rounded-xl text-3xl shadow-lg border-4 border-white leading-none">{item.step}</span>
                            <h4 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h4>
                            <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookingProcess;
