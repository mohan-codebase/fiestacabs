"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import FAQ from "../../components/sections/home/FAQ";
import Testimonials from "../../components/sections/home/Testimonials";
import Partners from "../../components/sections/home/Partners";
import Hero from "../../components/sections/outstation/Hero";
import VehicleSelection from "../../components/sections/outstation/VehicleSelection";
import VehicleShowcase from "../../components/sections/outstation/VehicleShowcase";
import PopularRoutes from "../../components/sections/outstation/PopularRoutes";
import WhyChooseUs from "../../components/sections/outstation/WhyChooseUs";
import Cities from "../../components/sections/outstation/Cities";
import LuxuryBrands from "../../components/sections/outstation/LuxuryBrands";
import GroupTravel from "../../components/sections/outstation/GroupTravel";
import BookingProcess from "../../components/sections/outstation/BookingProcess";
import CTA from "../../components/sections/outstation/CTA";

const OutstationRidesPage = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <main className="w-full relative">
            <Hero />
            <VehicleSelection />
            <VehicleShowcase />
            <PopularRoutes />
            <BookingProcess />
            <WhyChooseUs />
            <Cities />
            <LuxuryBrands />
            <GroupTravel />

            {/* Floating Buttons */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
                <Link href="#booking-form" className="bg-[#EC2028] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 animate-bounce-slow">
                    <FaArrowRight /> Contact Now
                </Link>
                <button
                    onClick={scrollToTop}
                    className="bg-[#EC2028] hover:bg-red-700 text-white w-10 h-10 rounded flex items-center justify-center shadow-lg transition-all hover:-translate-y-1"
                    aria-label="Scroll to top"
                >
                    <FaArrowRight className="-rotate-90" />
                </button>
            </div>


            <CTA />
            <Partners />
            <Testimonials eyebrow="TESTIMONIALS" title="What our customer says" />
            <FAQ />
        </main>
    );
};

export default OutstationRidesPage;
