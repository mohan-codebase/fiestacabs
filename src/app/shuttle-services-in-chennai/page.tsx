import React from 'react';
import HeroForm from '../../components/common/HeroForm';
import Intro from '../../components/sections/shuttle-services-in-chennai/Intro';
import CorporateSolutions from '../../components/sections/shuttle-services-in-chennai/CorporateSolutions';
import TechEnabledRides from '../../components/sections/shuttle-services-in-chennai/TechEnabledRides';
import RouteCoverage from '../../components/sections/shuttle-services-in-chennai/RouteCoverage';
import DiverseFleet from '../../components/sections/shuttle-services-in-chennai/DiverseFleet';
import SafetyDriverExcellence from '../../components/sections/shuttle-services-in-chennai/SafetyDriverExcellence';
import WhyChooseFiesta from '../../components/sections/shuttle-services-in-chennai/WhyChooseFiesta';
import ClosingMessage from '../../components/sections/shuttle-services-in-chennai/ClosingMessage';
import Testimonials from '../../components/common/Testimonials';
import FAQ from '../../components/sections/shuttle-services-in-chennai/FAQ';

export const metadata = {
    title: "Corporate Shuttle Services in Chennai | Fiesta Smart Mobility",
    description: "Fiesta Smart Mobility delivers professional, technology-driven, and reliable shuttle services in Chennai, designed for corporate organizations and IT corridors.",
};

export default function ShuttleServicesChennai() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Your Trusted Partner for Corporate Shuttle Services in Chennai"
                subtitle="Professional, technology-driven, and reliable commutes for Chennai's IT hubs and industrial zones."
                imageSrc="/images/services-offered/employee-transport-service/employee-transport-in-chennai/unnamed-2.jpg"
                ctaText="Book Chennai Shuttle"
                imageClassName="brightness-[0.4]"
            />

            <Intro />
            <CorporateSolutions />
            <TechEnabledRides />
            <RouteCoverage />
            <DiverseFleet />
            <SafetyDriverExcellence />
            <WhyChooseFiesta />
            <ClosingMessage />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />
        </div>
    );
}
