import React from 'react';
import type { Metadata } from 'next';
import HeroForm from "../../components/common/HeroForm";

import Introduction from "../../components/sections/corporate-car-rental-in-bangalore/Introduction";
import EfficientSolutions from "../../components/sections/corporate-car-rental-in-bangalore/EfficientSolutions";
import CorporateEvents from "../../components/sections/corporate-car-rental-in-bangalore/CorporateEvents";
import PremiumOptions from "../../components/sections/corporate-car-rental-in-bangalore/PremiumOptions";
import LongTermSolutions from "../../components/sections/corporate-car-rental-in-bangalore/LongTermSolutions";
import MeasurableBenefits from "../../components/sections/corporate-car-rental-in-bangalore/MeasurableBenefits";
import SafetyProfessionalism from "../../components/sections/corporate-car-rental-in-bangalore/SafetyProfessionalism";
import ContactCTA from "../../components/sections/corporate-car-rental-in-bangalore/ContactCTA";
import FAQ from "../../components/sections/corporate-car-rental-in-bangalore/FAQ";

export const metadata: Metadata = {
    title: 'Corporate Car Rental in Bangalore: Business Essentials | Fiesta Cabs',
    description: 'Looking for reliable corporate car rental in Bangalore? Fiesta offers tailored mobility solutions, premium fleets, and long-term transport contracts for modern enterprises.',
};

export default function CorporateCarRentalBangalorePage() {
    return (
        <main className="min-h-screen">
            <HeroForm
                title="Corporate Car Rental in Bangalore: Business Essentials"
                subtitle=""
                imageSrc="/images/corporate-car-rental-in-bangalore/unnamed-1-2.jpg"
                ctaText="Get A Free Quote"
            />
            <Introduction />
            <EfficientSolutions />
            <CorporateEvents />
            <PremiumOptions />
            <LongTermSolutions />
            <MeasurableBenefits />
            <SafetyProfessionalism />
            <ContactCTA />
            <FAQ />
        </main>
    );
}
