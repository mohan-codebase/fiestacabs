import { getMetadata } from "@/src/data/metadata";
import React from "react";
import HeroForm from "../../components/common/HeroForm";
import SimplifyingTeamCommute from "../../components/sections/shuttle-service-in-gurgaon/SimplifyingTeamCommute";
import GateToGateEffective from "../../components/sections/shuttle-service-in-gurgaon/GateToGateEffective";
import GurgaonCommutesMadeEasy from "../../components/sections/shuttle-service-in-gurgaon/GurgaonCommutesMadeEasy";
import WhatMakesDifferent from "../../components/sections/shuttle-service-in-gurgaon/WhatMakesDifferent";
import CommutesMadeEasy from "../../components/sections/shuttle-service-in-gurgaon/CommutesMadeEasy";
import EasilyIntegrated from "../../components/sections/shuttle-service-in-gurgaon/EasilyIntegrated";
import OperatingInGurgaon from "../../components/sections/shuttle-service-in-gurgaon/OperatingInGurgaon";
import NewEmployeeOnboarding from "../../components/sections/shuttle-service-in-gurgaon/NewEmployeeOnboarding";
import WhyStruggleCTA from "../../components/sections/shuttle-service-in-gurgaon/WhyStruggleCTA";
import FAQ from "../../components/sections/shuttle-service-in-gurgaon/FAQ";
import Testimonials from "../../components/common/Testimonials";

export const metadata = getMetadata("/shuttle-service-in-gurgaon");

export default function ShuttleServiceGurgaon() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Fiesta Shuttle Service in Gurgaon Simplifying Your Team's Daily Commute"
                subtitle=""
                imageSrc="/images/shuttle-service-in-gurgaon/unnamed-14-e1763536998410.jpg"
                ctaText="Book Your Employee Transport Today"
                imageClassName="brightness-[0.5]"
            />

            <SimplifyingTeamCommute />
            <GateToGateEffective />
            <GurgaonCommutesMadeEasy />
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
