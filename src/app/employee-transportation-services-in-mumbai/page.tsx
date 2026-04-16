import { getMetadata } from "../data/metadata";
import React from "react";
import HeroForm from "../../components/common/HeroForm";
import Introduction from "../../components/sections/employee-transportation-services-in-mumbai/Introduction";
import WhyChooseFiesta from "../../components/sections/employee-transportation-services-in-mumbai/WhyChooseFiesta";
import WhyBusinessesTrust from "../../components/sections/employee-transportation-services-in-mumbai/WhyBusinessesTrust";
import HowWeDeliver from "../../components/sections/employee-transportation-services-in-mumbai/HowWeDeliver";
import CTA from "../../components/sections/employee-transportation-services-in-mumbai/CTA";
import FAQ from "../../components/sections/employee-transportation-services-in-mumbai/FAQ";

export const metadata = getMetadata("/employee-transportation-services-in-mumbai");

export default function EmployeeTransportationServicesMumbai() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Employee Transportation Services in Mumbai"
                subtitle="In a dynamic city like Mumbai, where time and efficiency drive success, daily commuting plays a major role in shaping employee morale and productivity. Fiesta’s Employee Transportation Services in Mumbai are designed to deliver safe, reliable, and comfortable travel experiences for your workforce. With expertly planned routes, a well-maintained fleet, and professional drivers, we ensure smooth, on-time commutes that reduce stress and support a more productive workday."
                imageSrc="/images/employee-transportation-services-in-mumbai/unnamed-5.jpg"
                ctaText="Book Employee Transport in Mumbai"
            />

            <Introduction />

            <WhyChooseFiesta />

            <HowWeDeliver />

            <WhyBusinessesTrust />

            <CTA />

            <FAQ />

        </div>
    );
}
