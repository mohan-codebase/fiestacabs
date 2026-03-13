import React from "react";
import HeroForm from "../../components/common/HeroForm";
import MakingOfficeCommutesEffortless from "../../components/sections/shuttle-service-in-delhi/MakingOfficeCommutesEffortless";
import WhatMakesDelhiStandOut from "../../components/sections/shuttle-service-in-delhi/WhatMakesDelhiStandOut";
import RideSmart from "../../components/sections/shuttle-service-in-delhi/RideSmart";
import WhyGateToGate from "../../components/sections/shuttle-service-in-delhi/WhyGateToGate";
import CorporateSolution from "../../components/sections/shuttle-service-in-delhi/CorporateSolution";
import StayUpToDate from "../../components/sections/shuttle-service-in-delhi/StayUpToDate";
import BookingKeyFeatures from "../../components/sections/shuttle-service-in-delhi/BookingKeyFeatures";
import WhyStruggleCTA from "../../components/sections/shuttle-service-in-delhi/WhyStruggleCTA";
import FAQ from "../../components/sections/shuttle-service-in-delhi/FAQ";
import Testimonials from "../../components/common/Testimonials";

export const metadata = {
    title: "Fiesta Shuttle Service in Delhi | Making Office Commutes Effortless",
    description: "Fiesta Shuttle Service in Delhi: Making Office Commutes Effortless. Reliable, gate-to-gate corporate shuttle services across Connaught Place, Nehru Place, and more.",
};

export default function ShuttleServiceDelhi() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Fiesta Shuttle Service in Delhi: Making Office Commutes Effortless"
                subtitle=""
                imageSrc="/images/shuttle-service-in-delhi/unnamed-13.jpg"
                ctaText="Book Corporate Shuttle in Delhi"
                imageClassName=""
            />

            <MakingOfficeCommutesEffortless />
            <WhatMakesDelhiStandOut />
            <RideSmart />
            <WhyGateToGate />
            <CorporateSolution />
            <StayUpToDate />
            <BookingKeyFeatures />
            <WhyStruggleCTA />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />

        </div>
    );
}
