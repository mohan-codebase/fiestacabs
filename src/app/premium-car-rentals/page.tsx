import { getMetadata } from "@/src/data/metadata";
import FAQ from "../../components/sections/home/FAQ";
import Hero from "../../components/sections/premium/Hero";
import Services from "../../components/sections/premium/Services";
import Technology from "../../components/sections/premium/Technology";
import CTA from "../../components/sections/premium/CTA";

export const metadata = getMetadata("/premium-car-rentals");

const PremiumCarRentalsPage = () => {
    return (
        <main className="w-full">
            <Hero />
            <Services />
            <Technology />
            <CTA />
            <FAQ />
        </main>
    );
};

export default PremiumCarRentalsPage;
