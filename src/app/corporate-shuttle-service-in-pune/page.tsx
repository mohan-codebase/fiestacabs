import React from 'react';
import HeroForm from '../../components/common/HeroForm';
import Intro from '../../components/sections/corporate-shuttle-service-in-pune/Intro';
import Solutions from '../../components/sections/corporate-shuttle-service-in-pune/Solutions';
import TechFeatures from '../../components/sections/corporate-shuttle-service-in-pune/TechFeatures';
import DiverseFleet from '../../components/sections/corporate-shuttle-service-in-pune/DiverseFleet';
import SafetyComfort from '../../components/sections/corporate-shuttle-service-in-pune/SafetyComfort';
import BusinessBenefits from '../../components/sections/corporate-shuttle-service-in-pune/BusinessBenefits';
import RouteCoverage from '../../components/sections/corporate-shuttle-service-in-pune/RouteCoverage';
import SustainabilitySupport from '../../components/sections/corporate-shuttle-service-in-pune/SustainabilitySupport';
import ExperienceAdvantage from '../../components/sections/corporate-shuttle-service-in-pune/ExperienceAdvantage';
import Testimonials from '../../components/common/Testimonials';
import FAQ from '../../components/sections/corporate-shuttle-service-in-pune/FAQ';
import SupportAccess from '@/src/components/sections/corporate-shuttle-service-in-pune/SupportAccess';

export const metadata = {
    title: "Reliable Corporate Shuttle Service in Pune | Fiesta Smart Mobility",
    description: "Fiesta Smart Mobility provides reliable and efficient corporate shuttle services in Pune, designed for businesses and employees seeking a seamless commuting experience.",
};

export default function CorporateShuttlePune() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Reliable Corporate Shuttle Service in Pune"
                subtitle="Efficient, technology-driven, and employee-friendly transport solutions for modern workplaces."
                imageSrc="/images/shuttle-service-in-bangalore/unnamed-12.jpg"
                ctaText="Book Pune Shuttle Service"
                imageClassName="brightness-[0.4]"
            />

            <Intro />
            <Solutions />
            <TechFeatures />
            <DiverseFleet />
            <SafetyComfort />
            <BusinessBenefits />
            <RouteCoverage />
            <SustainabilitySupport />
            <SupportAccess />
            <ExperienceAdvantage />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />
        </div>
    );
}
