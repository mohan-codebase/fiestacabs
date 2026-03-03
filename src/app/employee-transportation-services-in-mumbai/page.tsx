import React from "react";
import HeroForm from "../../components/common/HeroForm";
import Introduction from "../../components/sections/employee-transportation-services-in-mumbai/Introduction";
import WhyChooseFiesta from "../../components/sections/employee-transportation-services-in-mumbai/WhyChooseFiesta";
import WhyBusinessesTrust from "../../components/sections/employee-transportation-services-in-mumbai/WhyBusinessesTrust";
import HowWeDeliver from "../../components/sections/employee-transportation-services-in-mumbai/HowWeDeliver";
import FAQ from "../../components/sections/employee-transportation-services-in-mumbai/FAQ";
import Testimonials from "../../components/sections/home/Testimonials";

export const metadata = {
    title: "Employee Transportation Services in Mumbai | Fiesta Cabs",
    description: "Looking for dependable employee transportation services in Mumbai? Fiesta Cabs provides secure, prompt, and comfortable employee transportation.",
};

export default function EmployeeTransportationServicesMumbai() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Employee Transportation Services in Mumbai"
                subtitle="Book the ultimate employee transport services in Mumbai for a hassle-free boarding process at no extra costs down to reservations."
                imageSrc="/images/employee-transportation-services-in-mumbai/unnamed-4-1.jpg"
                ctaText="Book Employee Transport in Mumbai"
            />

            <Introduction />

            <WhyChooseFiesta />

            <HowWeDeliver />

            <WhyBusinessesTrust />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />

        </div>
    );
}
