import React from "react";
import CareerHero from "../../components/sections/careers/CareerHero";
import WhyJoin from "../../components/sections/careers/WhyJoin";
import OpenPositions from "../../components/sections/careers/OpenPositions";
import HomeMilestones from "../../components/sections/home/Milestones";
import CareerCTA from "../../components/sections/careers/CareerCTA";
import Partners from "../../components/sections/home/Partners";

export const metadata = {
    title: "Careers - Join Our Team | Fiesta Smart Mobility",
    description: "Explore career opportunities at Fiesta Smart Mobility. Join 300+ professionals in shaping the future of integrated transport services in India.",
};

export default function Careers() {
    return (
        <div className="w-full bg-white">
            <CareerHero
                title="Build Your Career with Fiesta Smart Mobility"
                subtitle="Join a trusted name in employee transport services with over 28 years of excellence. At Fiesta, we offer rewarding career opportunities across India in a fast-growing, technology-driven mobility ecosystem. Be part of a team that values reliability, innovation, and people-first service."
                imageSrc="/images/careers/hero-career.jpeg"
            />

            {/* Milestones Section */}
            <HomeMilestones />

            <WhyJoin />

            <div id="open-positions">
                <OpenPositions />
            </div>


            {/* Career CTA Section */}
            <CareerCTA />

            <Partners />
        </div>
    );
}

