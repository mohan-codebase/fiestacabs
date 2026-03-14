import FAQ from "../../components/sections/home/FAQ";
import Hero from "../../components/sections/outstation/Hero";
import VehicleSelection from "../../components/sections/outstation/VehicleSelection";
import WhyChooseUs from "../../components/sections/outstation/WhyChooseUs";
import PopularRoutes from "../../components/sections/outstation/PopularRoutes";
import InteriorGallery from "../../components/sections/outstation/InteriorGallery";
import Cities from "../../components/sections/outstation/Cities";
import LuxuryBrands from "../../components/sections/outstation/LuxuryBrands";
import GroupTravel from "../../components/sections/outstation/GroupTravel";
import BookingProcess from "../../components/sections/outstation/BookingProcess";
import SafetyComfort from "../../components/sections/outstation/SafetyComfort";
import Offers from "../../components/sections/outstation/Offers";
import CTA from "../../components/sections/outstation/CTA";

export const metadata = {
    title: "Outstation Cabs in Chennai | Fiesta Smart Mobility",
    description: "Book reliable outstation cabs in Chennai for intercity travel. Professional chauffeurs, safe vehicles, and transparent fares to Pondicherry, Bangalore, and more.",
};

const ChennaiOutstationPage = () => {
    return (
        <main className="w-full relative">
            <Hero 
                title="Outstation Cabs in Chennai"
                subtitle="Reliable intercity rides from Chennai to Pondicherry, Bangalore, and beyond."
            />
            <VehicleSelection />
            <WhyChooseUs />
            <Cities />
            <InteriorGallery />
            <PopularRoutes />
            <BookingProcess />
            <SafetyComfort />
            <CTA />
            <LuxuryBrands />
            <GroupTravel />
            <Offers />
            <FAQ />
        </main>
    );
};

export default ChennaiOutstationPage;
