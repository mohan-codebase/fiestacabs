import { getMetadata } from "../data/metadata";
import React from "react";
import HeroForm from "../../components/common/HeroForm";
import RedefiningCommute from "../../components/sections/shuttle-service-in-bangalore/RedefiningCommute";
import StandOutFeatures from "../../components/sections/shuttle-service-in-bangalore/StandOutFeatures";
import WhyReliable from "../../components/sections/shuttle-service-in-bangalore/WhyReliable";
import SeamlessIntegration from "../../components/sections/shuttle-service-in-bangalore/SeamlessIntegration";
import OperatingAcross from "../../components/sections/shuttle-service-in-bangalore/OperatingAcross";
import ElectronicCity from "../../components/sections/shuttle-service-in-bangalore/ElectronicCity";
import HebbalNorth from "../../components/sections/shuttle-service-in-bangalore/HebbalNorth";
import BellandurHSR from "../../components/sections/shuttle-service-in-bangalore/BellandurHSR";
import BuildPlan from "../../components/sections/shuttle-service-in-bangalore/BuildPlan";
import FAQ from "../../components/sections/shuttle-service-in-bangalore/FAQ";
import Testimonials from "../../components/common/Testimonials";

export const metadata = getMetadata("/shuttle-service-in-bangalore");

export default function ShuttleServiceBangalore() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Fiesta Shuttle Service in Bangalore: Redefining the Corporate Commute"
                subtitle=""
                imageSrc="/images/shuttle-service-in-bangalore/unnamed-12.jpg"
                ctaText="Book Corporate Shuttle in Bangalore"
                imageClassName="brightness-[0.4]"
            />

            <RedefiningCommute />
            <StandOutFeatures />
            <WhyReliable />
            <SeamlessIntegration />
            <OperatingAcross />
            <ElectronicCity />
            <HebbalNorth />
            <BellandurHSR />
            <BuildPlan />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />

        </div>
    );
}
