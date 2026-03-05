import React from "react";
import HeroForm from "../../components/common/HeroForm";
import RedefiningCommute from "../../components/sections/shuttle-services-in-hyderabad/RedefiningCommute";
import WhyReliable from "../../components/sections/shuttle-services-in-hyderabad/WhyReliable";
import CommuteMadeSimple from "../../components/sections/shuttle-services-in-hyderabad/CommuteMadeSimple";
import GateWorks from "../../components/sections/shuttle-services-in-hyderabad/GateWorks";
import SmartIntegration from "../../components/sections/shuttle-services-in-hyderabad/SmartIntegration";
import RunningRoutes from "../../components/sections/shuttle-services-in-hyderabad/RunningRoutes";
import StayConnected from "../../components/sections/shuttle-services-in-hyderabad/StayConnected";
import WhyStruggle from "../../components/sections/shuttle-services-in-hyderabad/WhyStruggle";
import BuildPlan from "../../components/sections/shuttle-services-in-hyderabad/BuildPlan";
import FAQ from "../../components/sections/shuttle-services-in-hyderabad/FAQ";
import Testimonials from "../../components/sections/home/Testimonials";

export const metadata = {
    title: "Fiesta Shuttle Services in Hyderabad | Simplifying the City Commute",
    description: "Fiesta Shuttle Service in Hyderabad: Redefining the Corporate Commute. Reliable, gate-to-gate corporate shuttle services designed for productivity and punctuality.",
};

export default function ShuttleServicesHyderabad() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Fiesta Shuttle Services in Hyderabad Simplifying the City Commute "
                subtitle=""
                imageSrc="/images/shuttle-services-in-hyderabad/unnamed-11.jpg"
                ctaText="Book Corporate Shuttle in Hyderabad"
                imageClassName="brightness-[0.4]"
            />

            <RedefiningCommute />

            <WhyReliable />

            <CommuteMadeSimple />

            <GateWorks />

            <SmartIntegration />

            <RunningRoutes />

            <StayConnected />

            <WhyStruggle />

            <BuildPlan />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />

        </div>
    );
}
