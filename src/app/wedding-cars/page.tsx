import React from "react";
import WeddingHero from "../../components/sections/wedding/WeddingHero";
import Milestones from "../../components/sections/home/Milestones";
import WeddingIntro from "../../components/sections/wedding/WeddingIntro";
import WeddingCities from "../../components/sections/wedding/WeddingCities";
import WeddingFeatures from "../../components/sections/wedding/WeddingFeatures";
import WeddingFleetGrid from "../../components/sections/wedding/WeddingFleetGrid";
import FleetShowcase from "../../components/sections/wedding/FleetShowcase";
import WeddingReliability from "../../components/sections/wedding/WeddingReliability";
import FAQ from "../../components/sections/home/FAQ";

export const metadata = {
    title: "Luxury Wedding Car Rentals | Fiesta Smart Mobility",
    description:
        "Make your special day unforgettable with our premium fleet of luxury cars for weddings. Professional chauffeurs and pristine vehicles.",
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
           
            <FAQ />
        </main>
    );
};

export default WeddingCarsPage;
