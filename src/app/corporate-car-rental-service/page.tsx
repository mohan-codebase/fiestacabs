import React from "react";
import CorporateHero from "../../components/sections/corporate/CorporateHero";
import CorporateIntro from "../../components/sections/corporate/CorporateIntro";
import CorporateWhyMatters from "../../components/sections/corporate/CorporateWhyMatters";
import CorporateDelivers from "../../components/sections/corporate/CorporateDelivers";
import CorporateCities from "../../components/sections/corporate/CorporateCities";
import CorporateWhatMiss from "../../components/sections/corporate/CorporateWhatMiss";
import CorporateHowCreates from "../../components/sections/corporate/CorporateHowCreates";
import CorporateCTA from "../../components/sections/corporate/CorporateCTA";
import LuxuryBrands from "../../components/sections/outstation/LuxuryBrands";
import Testimonials from "../../components/common/Testimonials";
import FAQ from "../../components/sections/home/FAQ";
import CorporateAdvantages from "../../components/sections/corporate/CorporateAdvantages";
import CorporateOftenMiss from "../../components/sections/corporate/CorporateOftenMiss";
import CorporateFleetTable from "../../components/sections/corporate/CorporateFleetTable";

export const metadata = {
    title: "Best Corporate Car Rental Service | Fiesta Smart Mobility",
    description:
        "Discover how to pick a reliable, cost-efficient, and professional corporate car rental service that meets your company's travel needs.",
};

const CorporateCarRentalPage = () => {
    return (
        <main className="w-full bg-white relative">
            <CorporateHero />
            <CorporateIntro />
            <CorporateWhyMatters />
            <CorporateDelivers />
            <CorporateCities />
            <CorporateAdvantages />
            <CorporateWhatMiss />
            <CorporateOftenMiss />
            <CorporateFleetTable />
            <CorporateHowCreates />
            <CorporateCTA />
            <FAQ />
        </main>
    );
};

export default CorporateCarRentalPage;
