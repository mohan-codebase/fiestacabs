import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import type { Metadata } from 'next';
import HeroForm from "../../components/common/HeroForm";

import Introduction from "../../components/sections/best-car-rental-in-chennai/Introduction";
import FeatureCards from "../../components/sections/best-car-rental-in-chennai/FeatureCards";
import TravelMadeEasy from "../../components/sections/best-car-rental-in-chennai/TravelMadeEasy";
import WhyChooseDriver from "../../components/sections/best-car-rental-in-chennai/WhyChooseDriver";
import WideRangeVehicles from "../../components/sections/best-car-rental-in-chennai/WideRangeVehicles";
import CityOutstation from "../../components/sections/best-car-rental-in-chennai/CityOutstation";
import SpecialOccasions from "../../components/sections/best-car-rental-in-chennai/SpecialOccasions";
import SeamlessBooking from "../../components/sections/best-car-rental-in-chennai/SeamlessBooking";
import PricingOptions from "../../components/sections/best-car-rental-in-chennai/PricingOptions";
import WellMaintainedVehicles from "../../components/sections/best-car-rental-in-chennai/WellMaintainedVehicles";
import ExploreChennai from "../../components/sections/best-car-rental-in-chennai/ExploreChennai";
import ComprehensiveService from "../../components/sections/best-car-rental-in-chennai/ComprehensiveService";
import ContactCTA from "../../components/sections/best-car-rental-in-chennai/ContactCTA";
import FAQ from "../../components/sections/best-car-rental-in-chennai/FAQ";

export const metadata = getMetadata("/best-car-rental-in-chennai");

export default function BestCarRentalChennaiPage() {
    return (
        <main className="min-h-screen">
            <HeroForm
                title="Best Car Rental in Chennai with Driver Affordable & Reliable Service"
                subtitle=""
                imageSrc="/images/best-car-rental-in-chennai/unnamed-16-e1763612106873.jpg"
                ctaText="Book Your Ride Now"
            />
            <Introduction />
            <FeatureCards />
            <TravelMadeEasy />
            <WhyChooseDriver />
            <WideRangeVehicles />
            <CityOutstation />
            <WellMaintainedVehicles />
            <SeamlessBooking />
            <PricingOptions />
            <SpecialOccasions />
            <ExploreChennai />
            <ComprehensiveService />
            <ContactCTA />
            <FAQ />
        </main>
    );
}
