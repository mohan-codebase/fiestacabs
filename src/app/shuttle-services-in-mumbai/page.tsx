import React from 'react';
import HeroForm from '../../components/common/HeroForm';
import Intro from '../../components/sections/shuttle-services-in-mumbai/Intro';
import Benefits from '../../components/sections/shuttle-services-in-mumbai/Benefits';
import KeyFeatures from '../../components/sections/shuttle-services-in-mumbai/KeyFeatures';
import WhyChooseFiesta from '../../components/sections/shuttle-services-in-mumbai/WhyChooseFiesta';
import Testimonials from '../../components/common/Testimonials';
import FAQ from '../../components/sections/shuttle-services-in-mumbai/FAQ';

export const metadata = {
    title: "Shuttle Service in Mumbai for Corporate Professionals | Fiesta Smart Mobility",
    description: "Fiesta Smart Mobility delivers reliable and technology-driven shuttle services across Mumbai, designed for corporate offices, business campuses, and urban commuters.",
};

export default function ShuttleServicesMumbai() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Shuttle Service in Mumbai for Corporate Professionals"
                subtitle="Reliable, technology-driven, and structured commutes for Mumbai's bustling business districts."
                imageSrc="/images/employee-transportation-services-in-mumbai/unnamed-2-1.jpg"
                ctaText="Book Mumbai Shuttle"
                imageClassName="brightness-[0.4]"
            />

            <Intro />
            <Benefits />
            <KeyFeatures />
            <WhyChooseFiesta />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />
        </div>
    );
}
