import FAQ from "../../components/sections/home/FAQ";
import Hero from "../../components/sections/premium/Hero";
import Services from "../../components/sections/premium/Services";
import Technology from "../../components/sections/premium/Technology";
import CTA from "../../components/sections/premium/CTA";

export const metadata = {
    title: "Premium Car Rentals | Fiesta Smart Mobility",
    description:
        "Book premium car rentals for business travel, events, and special occasions with Fiesta Smart Mobility.",
};

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
