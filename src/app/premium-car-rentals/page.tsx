"use client";

import React from "react";
import FAQ from "../../components/sections/home/FAQ";
import Testimonials from "../../components/sections/home/Testimonials";
import Hero from "../../components/sections/premium/Hero";
import Services from "../../components/sections/premium/Services";
import Technology from "../../components/sections/premium/Technology";
import CTA from "../../components/sections/premium/CTA";

const PremiumCarRentalsPage = () => {
    return (
        <main className="w-full pt-20">
            <Hero />
            <Services />
            <Technology />
            <CTA />
            <Testimonials eyebrow="WHAT CLIENTS SAY" title="What our customer says" />
            <FAQ />
        </main>
    );
};

export default PremiumCarRentalsPage;
