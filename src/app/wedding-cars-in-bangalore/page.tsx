import { getMetadata } from "@/src/data/metadata";
import React from 'react';
import HeroForm from '../../components/common/HeroForm';
import WeddingInStyle from '../../components/sections/wedding-cars-in-bangalore/WeddingInStyle';
import WhyChoose from '../../components/sections/wedding-cars-in-bangalore/WhyChoose';
import PopularCars from '../../components/sections/wedding-cars-in-bangalore/PopularCars';
import LuxuryOccasions from '../../components/sections/wedding-cars-in-bangalore/LuxuryOccasions';
import PlanningExperience from '../../components/sections/wedding-cars-in-bangalore/PlanningExperience';
import HassleFreeCTA from '../../components/sections/wedding-cars-in-bangalore/HassleFreeCTA';
import Testimonials from '../../components/common/Testimonials';
import FAQ from '../../components/sections/wedding-cars-in-bangalore/FAQ';

export const metadata = getMetadata("/wedding-cars-in-bangalore");

export default function WeddingCarsInBangalore() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Wedding Cars in Bangalore"
                subtitle="Celebrate your big day with Fiesta’s chauffeur-driven car rentals in Pune, offering elegant wedding entrances, smooth guest transfers, and complete peace of mind."
                imageSrc="/images/wedding-cars-in-bangalore/unnamed-6-1.jpg"
                ctaText="Book Your Wedding Car Now"
                imageClassName="brightness-[0.4]"
            />

            <WeddingInStyle />
            <WhyChoose />
            <PopularCars />
            <LuxuryOccasions />
            <PlanningExperience />
            <HassleFreeCTA />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />
        </div>
    );
}
