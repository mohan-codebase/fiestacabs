import React from "react";
import HeroForm from "../../components/common/HeroForm";
import WhyChooseUs from "../../components/sections/employee-transportation-services-in-bangalore/WhyChooseUs";
import HowWeOperate from "../../components/sections/employee-transportation-services-in-bangalore/HowWeOperate";
import Benefits from "../../components/sections/employee-transportation-services-in-bangalore/Benefits";
import Commitment from "../../components/sections/employee-transportation-services-in-bangalore/Commitment";
import DesignedForNeeds from "../../components/sections/employee-transportation-services-in-bangalore/DesignedForNeeds";
import SimpleReliable from "../../components/sections/employee-transportation-services-in-bangalore/SimpleReliable";
import FAQ from "../../components/sections/employee-transportation-services-in-bangalore/FAQ";
import Testimonials from "../../components/sections/home/Testimonials";

export const metadata = {
    title: "Employee Transportation Services in Bangalore | Fiesta Cabs",
    description: "Looking for dependable employee transportation services in Bangalore? Fiesta Cabs provides secure, prompt, and comfortable employee transportation.",
};

export default function EmployeeTransportationServicesBangalore() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Employee Transportation Services in Bangalore"
                subtitle="Book the ultimate employee transport services in Bangalore for a hassle-free boarding process at no extra costs down to reservations."
                imageSrc="/images/employee-transportation-services-in-bangalore/unnamed-7-e1762835828914.jpg"
                ctaText="Book Employee Transport in Bangalore"
            />

            <WhyChooseUs />

            <HowWeOperate />

            <Benefits />

            <Commitment />

            <DesignedForNeeds />

            <SimpleReliable />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />

        </div>
    );
}
