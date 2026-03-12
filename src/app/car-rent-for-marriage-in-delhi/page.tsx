import React from "react";
import HeroForm from "../../components/common/HeroForm";
import Introduction from "../../components/sections/car-rent-for-marriage-in-delhi/Introduction";
import WhyChoose from "../../components/sections/car-rent-for-marriage-in-delhi/WhyChoose";
import WhatWeOffer from "../../components/sections/car-rent-for-marriage-in-delhi/WhatWeOffer";
import Benefits from "../../components/sections/car-rent-for-marriage-in-delhi/Benefits";
import HowItWorks from "../../components/sections/car-rent-for-marriage-in-delhi/HowItWorks";
import WhyWeStandOut from "../../components/sections/car-rent-for-marriage-in-delhi/WhyWeStandOut";
import TipsForBooking from "../../components/sections/car-rent-for-marriage-in-delhi/TipsForBooking";
import SafetyComfort from "../../components/sections/car-rent-for-marriage-in-delhi/SafetyComfort";
import MakeYourDaySpecial from "../../components/sections/car-rent-for-marriage-in-delhi/MakeYourDaySpecial";
import ContactUsCTA from "../../components/sections/car-rent-for-marriage-in-delhi/ContactUsCTA";
import Testimonials from "../../components/common/Testimonials";
import FAQ from "../../components/sections/car-rent-for-marriage-in-delhi/FAQ";

export const metadata = {
    title: "Car Rent for Marriage in Delhi – Make Your Wedding Day Memorable with Fiesta",
    description: "Celebrate your big day in style with Fiesta's chauffeur-driven car rentals in Delhi NCR. From grand entrances to guest transfers, we deliver elegance, punctuality and peace of mind.",
};

export default function CarRentForMarriageInDelhi() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Car Rent for Marriage in Delhi"
                subtitle="Celebrate your big day with Fiesta’s chauffeur-driven car rentals in Pune, offering elegant wedding entrances, smooth guest transfers, and complete peace of mind."
                imageSrc="/images/car-rent-for-marriage-in-delhi/kdsjf.jpg"
                ctaText="Book Now"
                imageClassName="brightness-[0.4]"
            />

            <Introduction />
            <WhyChoose />
            <WhatWeOffer />
            <Benefits />
            <HowItWorks />
            <WhyWeStandOut />
            <TipsForBooking />
            <SafetyComfort />
            <MakeYourDaySpecial />
            <ContactUsCTA />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />
        </div>
    );
}
