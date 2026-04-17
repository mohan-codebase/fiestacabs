import { getMetadata } from "@/src/data/metadata";
import React from "react";
import HeroForm from "../../components/common/HeroForm";
import WhyChooseUs from "../../components/sections/employee-transportation-services-in-bangalore/WhyChooseUs";
import HowWeOperate from "../../components/sections/employee-transportation-services-in-bangalore/HowWeOperate";
import Benefits from "../../components/sections/employee-transportation-services-in-bangalore/Benefits";
import Commitment from "../../components/sections/employee-transportation-services-in-bangalore/Commitment";
import DesignedForNeeds from "../../components/sections/employee-transportation-services-in-bangalore/DesignedForNeeds";
import SimpleReliable from "../../components/sections/employee-transportation-services-in-bangalore/SimpleReliable";
import FAQ from "../../components/sections/employee-transportation-services-in-bangalore/FAQ";
import Testimonials from "../../components/common/Testimonials";

export const metadata = getMetadata("/employee-transportation-services-in-bangalore");

export default function EmployeeTransportationServicesBangalore() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Employee Transportation Services in Bangalore"
                subtitle="In a fast-moving city like Bangalore, the daily commute can greatly influence how employees begin and end their workday. From long traffic jams to crowded public transport, travel challenges often lead to stress and lower productivity. At Fiesta, we provide Employee Transportation Services in Bangalore that make corporate commutes smoother, safer, and more reliable—helping your teams travel comfortably and arrive refreshed every day."
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
