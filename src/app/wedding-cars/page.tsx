import React from "react";
import WeddingHero from "../../components/sections/wedding/WeddingHero";
import Milestones from "../../components/sections/wedding/Milestones";
import WeddingIntro from "../../components/sections/wedding/WeddingIntro";
import WeddingCities from "../../components/sections/wedding/WeddingCities";
import WeddingFeatures from "../../components/sections/wedding/WeddingFeatures";
import WeddingAddOnServices from "../../components/sections/wedding/WeddingAddOnServices";
import WeddingFleetGrid from "../../components/sections/wedding/WeddingFleetGrid";
import FleetShowcase from "../../components/sections/wedding/FleetShowcase";
import WeddingReliability from "../../components/sections/wedding/WeddingReliability";
import WeddingStories from "../../components/sections/wedding/WeddingStories";
import LuxuryBrands from "../../components/sections/outstation/LuxuryBrands";
import WeddingCTA from "../../components/sections/wedding/WeddingCTA";
import FAQ from "../../components/sections/home/FAQ";

export const metadata = {
    title: "Luxury Wedding Car Rentals | Fiesta Smart Mobility",
    description:
        "Make your special day unforgettable with our premium fleet of luxury cars for weddings. Professional chauffeurs and pristine vehicles.",
    openGraph: {
        title: "Luxury Wedding Car Rentals | Fiesta Smart Mobility",
        description: "Make your special day unforgettable with our premium fleet of luxury cars for weddings. Professional chauffeurs and pristine vehicles.",
        images: ["/images/logo/logo.png"],
    },
};

const WeddingCarsPage = () => {
    return (
        <main className="w-full bg-white relative">
            <WeddingHero />
            <Milestones />
            <WeddingIntro />
            <WeddingCities />
            <FleetShowcase />
            <WeddingFleetGrid />
            <WeddingFeatures />
            <WeddingReliability />
            <WeddingAddOnServices />
            <LuxuryBrands />
            <WeddingCTA />
            <WeddingStories />

            <FAQ />
        </main>
    );
};

export default WeddingCarsPage;
