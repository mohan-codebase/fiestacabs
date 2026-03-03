import React from "react";
import HeroForm from "../../components/common/HeroForm";
import Introduction from "../../components/sections/employee-transportation-services-in-pune/Introduction";
import WhyChooseFiesta from "../../components/sections/employee-transportation-services-in-pune/WhyChooseFiesta";
import CommitmentSafety from "../../components/sections/employee-transportation-services-in-pune/CommitmentSafety";
import CostEffective from "../../components/sections/employee-transportation-services-in-pune/CostEffective";
import TrustedBusiness from "../../components/sections/employee-transportation-services-in-pune/TrustedBusiness";
import Benefits from "../../components/sections/employee-transportation-services-in-pune/Benefits";
import FAQ from "../../components/sections/employee-transportation-services-in-pune/FAQ";
import Testimonials from "../../components/sections/home/Testimonials";

export const metadata = {
    title: "Employee Transportation Services in Pune | Fiesta Cabs",
    description: "Employee Transportation Services in Pune. Discover Fiesta's safe, reliable, and comfortable travel solutions for the modern workforce.",
};

export default function EmployeeTransportationServicesPune() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Employee Transportation Services in Pune"
                subtitle="In a fast-growing city like Pune, where traffic and long commutes challenge daily productivity, Fiesta's Employee Transportation Services in Pune provide safe, reliable, and comfortable travel solutions for the modern workforce. With a well-maintained fleet, experienced drivers, and strict safety standards, we ensure smooth, on-time commutes that enhance employee convenience and help businesses maintain efficiency and reliability every day."
                imageSrc="/images/employee-transportation-services-in-pune/unnamed-6.jpg"
                ctaText="Book Your Employee Transport Today"
            />

            <Introduction />

            <WhyChooseFiesta />

            <CommitmentSafety />

            <CostEffective />

            <TrustedBusiness />

            <Benefits />

            <FAQ />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

        </div>
    );
}
