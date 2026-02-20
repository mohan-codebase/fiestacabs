"use client";

import React from "react";
import Image from "next/image";

const Milestones = () => {
    return (
        <section className="py-12 bg-gray-50 border-b border-gray-100">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">

                    <div className="p-4">
                        <h3 className="text-5xl font-bold text-[#EC2028] mb-2">100+</h3>
                        <p className="text-gray-600 font-medium uppercase tracking-wide">Weddings Served</p>
                    </div>

                    <div className="p-4">
                        <h3 className="text-5xl font-bold text-[#EC2028] mb-2">50+</h3>
                        <p className="text-gray-600 font-medium uppercase tracking-wide">Luxury Cars Fleet</p>
                    </div>

                    <div className="p-4 text-[#EC2028] font-bold text-5xl flex items-center justify-center">
                        PAN India
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Milestones;
