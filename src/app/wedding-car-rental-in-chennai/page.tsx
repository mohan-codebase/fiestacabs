import React from 'react';
import HeroForm from '../../components/common/HeroForm';
import Intro from '../../components/sections/wedding-car-rental-in-chennai/Intro';
import WhyChoose from '../../components/sections/wedding-car-rental-in-chennai/WhyChoose';
import LuxuryCars from '../../components/sections/wedding-car-rental-in-chennai/LuxuryCars';
import BridalCar from '../../components/sections/wedding-car-rental-in-chennai/BridalCar';
import ChauffeurDriven from '../../components/sections/wedding-car-rental-in-chennai/ChauffeurDriven';
import FlexiblePackages from '../../components/sections/wedding-car-rental-in-chennai/FlexiblePackages';
import DecorationSupport from '../../components/sections/wedding-car-rental-in-chennai/DecorationSupport';
import DiscountCTA from '../../components/sections/wedding-car-rental-in-chennai/DiscountCTA';
import Testimonials from '../../components/common/Testimonials';
import FAQ from '../../components/sections/wedding-car-rental-in-chennai/FAQ';

export const metadata = {
    title: "Wedding Car Rental in Chennai for Style, Class and Comfort",
    description: "Make your special day memorable with our luxury wedding car rentals in Chennai.",
};

export default function WeddingCarRentalChennai() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Wedding Car Rental in Chennai for Style, Class and Comfort"
                subtitle=""
                imageSrc="/images/wedding-car-rental-in-chennai/unnamed.jpg"
                ctaText="Book Now"
                imageClassName="brightness-[0.4]"
            />

            <Intro />
            <WhyChoose />
            <LuxuryCars />
            <BridalCar />
            <ChauffeurDriven />
            <FlexiblePackages />
            <DecorationSupport />
            <DiscountCTA />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />
        </div>
    );
}
