import HeroForm from "../../components/common/HeroForm";
import Introduction from "../../components/sections/wedding-car-rental-mumbai/Introduction";
import PopularOptions from "../../components/sections/wedding-car-rental-mumbai/PopularOptions";
import LuxuryAvailable from "../../components/sections/wedding-car-rental-mumbai/LuxuryAvailable";
import WhyChooseMumbai from "../../components/sections/wedding-car-rental-mumbai/WhyChooseMumbai";
import MakingMemorable from "../../components/sections/wedding-car-rental-mumbai/MakingMemorable";
import HowToBookCTA from "../../components/sections/wedding-car-rental-mumbai/HowToBookCTA";
import FAQ from "../../components/sections/home/FAQ";
import Testimonials from "../../components/common/Testimonials";

export const metadata = {
    title: "Wedding Car Rental Mumbai | Premium Wedding Cars | Fiesta",
    description: "Book luxury and premium wedding cars in Mumbai. Reliable, professional chauffeur-driven car rental for your special day.",
};

export default function WeddingCarRentalMumbai() {
    return (
        <main>
            <HeroForm
                title="Wedding Car Rental Mumbai"
                subtitle="A wedding day represents a once-in-a-lifetime event, and every detail contributes to a seamless and memorable experience. Choosing the perfect wedding car rental in Mumbai adds elegance, comfort, and style to the celebration. From vintage cars to luxury cars, Fiesta’s curated fleet ensures a smooth journey for the bride, groom, family, and guests, creating an unforgettable experience for the wedding party."
                imageSrc="/images/wedding-car-rental-mumbai/unnamed-9.jpg"
                ctaText="Book Your Wedding Car Now"
            />
            <Introduction />
            <PopularOptions />
            <LuxuryAvailable />
            <WhyChooseMumbai />
            <MakingMemorable />
            <HowToBookCTA />
            <Testimonials eyebrow="TESTIMONIALS" title="What our customer says" />
            <FAQ 
                badge="FAQs"
                title="Frequently Asked"
                darkTitle="Questions"
                description="Find answers to common questions about our wedding car rental services in Mumbai. We ensure every detail is handled professionally to make your day special."
            />
        </main>
    );
}
