import React from "react";
import HeroForm from "../../components/common/HeroForm";
import SimplifyingTeamCommute from "../../components/sections/shuttle-service-in-gurgaon/SimplifyingTeamCommute";
import WhatMakesDifferent from "../../components/sections/shuttle-service-in-gurgaon/WhatMakesDifferent";
import CommutesMadeEasy from "../../components/sections/shuttle-service-in-gurgaon/CommutesMadeEasy";
import EasilyIntegrated from "../../components/sections/shuttle-service-in-gurgaon/EasilyIntegrated";
import OperatingInGurgaon from "../../components/sections/shuttle-service-in-gurgaon/OperatingInGurgaon";
import NewEmployeeOnboarding from "../../components/sections/shuttle-service-in-gurgaon/NewEmployeeOnboarding";
import WhyStruggleCTA from "../../components/sections/shuttle-service-in-gurgaon/WhyStruggleCTA";
import FAQ from "../../components/sections/shuttle-service-in-gurgaon/FAQ";
import Testimonials from "../../components/sections/home/Testimonials";

export const metadata = {
    title: "Fiesta Shuttle Service in Gurgaon | Simplifying Your Team's Daily Commute",
    description: "Fiesta Shuttle Service in Gurgaon - Simplifying Your Team's Daily Commute. Reliable, gate-to-gate corporate shuttle services across Cyber City, Udyog Vihar, and more.",
};

export default function ShuttleServiceGurgaon() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Fiesta Shuttle Service in Gurgaon Simplifying Your Team's Daily Commute"
                subtitle="Book Your Employee Transport Today"
                imageSrc="/images/shuttle-service-in-gurgaon/unnamed-15.jpg"
                ctaText="Book Now"
                imageClassName="brightness-[0.5]"
            />

            <SimplifyingTeamCommute />
            <WhatMakesDifferent />
            <CommutesMadeEasy />
            <EasilyIntegrated />
            <OperatingInGurgaon />
            <NewEmployeeOnboarding />
            <WhyStruggleCTA />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />

        </div>
    );
}
