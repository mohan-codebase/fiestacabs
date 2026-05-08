import { getMetadata } from "@/src/data/metadata";
import React from "react";
import CareerHero from "../../components/sections/careers/CareerHero";
import WhoWeAre from "../../components/sections/careers/WhoWeAre";
import WhyJoin from "../../components/sections/careers/WhyJoin";
import WorkLife from "../../components/sections/careers/WorkLife";
import EmployeeBenefits from "../../components/sections/careers/EmployeeBenefits";
import OpenPositions from "../../components/sections/careers/OpenPositions";
import HiringProcess from "../../components/sections/careers/HiringProcess";
import CareerCTA from "../../components/sections/careers/CareerCTA";

export const metadata = getMetadata("/careers");

export default function Careers() {
    return (
        <div className="w-full bg-white">
            <CareerHero
                title="Build the Future of Employee Transportation"
                subtitle="At Fiesta Cabs, we provide a tech-enabled, reliable employee transportation network for businesses. If you are seeking growth in a dynamic, operations-driven environment and want to help businesses thrive, you are in the right place."
                imageSrc="/images/careers/hero-career.jpeg"
            />

            <WhoWeAre />

            <WhyJoin />

            <WorkLife />

            <EmployeeBenefits />

            <div id="open-positions">
                <OpenPositions />
            </div>

            <HiringProcess />

            <CareerCTA />
        </div>
    );
}
