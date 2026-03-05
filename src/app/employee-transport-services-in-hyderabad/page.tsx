import React from "react";
import HeroForm from "../../components/common/HeroForm";
import Introduction from "../../components/sections/employee-transport-services-in-hyderabad/Introduction";
import WhyChooseFiesta from "../../components/sections/employee-transport-services-in-hyderabad/WhyChooseFiesta";
import Benefits from "../../components/sections/employee-transport-services-in-hyderabad/Benefits";
import TrustedBy from "../../components/sections/employee-transport-services-in-hyderabad/TrustedBy";
import SeamlessPartner from "../../components/sections/employee-transport-services-in-hyderabad/SeamlessPartner";
import WhyReliable from "../../components/sections/employee-transport-services-in-hyderabad/WhyReliable";
import Conclusion from "../../components/sections/employee-transport-services-in-hyderabad/Conclusion";
import GetStarted from "../../components/sections/employee-transport-services-in-hyderabad/GetStarted";
import Testimonials from "../../components/sections/home/Testimonials";
import FAQ from "../../components/sections/employee-transport-services-in-hyderabad/FAQ";

export const metadata = {
    title: "Employee Transport Services in Hyderabad | Fiesta Cabs",
    description: "Looking for dependable employee transport services in Hyderabad? Fiesta Cabs provides secure, prompt, and comfortable employee transportation with 24/7 support.",
};

export default function EmployeeTransportServices() {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <HeroForm
                title="Employee Transport Services in Hyderabad"
                subtitle="BEnsure reliable, safe and punctual travel for your workforce with Fiesta’s Employee Transportation Services in Hyderabad—making daily commutes efficient, comfortable and stress-free."
                imageSrc="/images/employee-transport-services-in-hyderabad/unnamed-9-e1763104171192.jpg"
                ctaText="Book Your Employee Transport Today"
            />

            <Introduction />

            <WhyChooseFiesta />

            <Benefits />

            <TrustedBy />

            <SeamlessPartner />

            <WhyReliable />

            <Conclusion />

            <GetStarted />

            <Testimonials
                eyebrow="TESTIMONIALS"
                title="What our customer says"
            />

            <FAQ />

        </div>
    );
}
