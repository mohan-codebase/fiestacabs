import { getMetadata } from "@/src/data/metadata";
import type { Metadata } from 'next';
import HeroForm from '../../components/common/HeroForm';
import Introduction from '../../components/sections/corporate-car-rental-in-mumbai/Introduction';
import CarRentalServices from '../../components/sections/corporate-car-rental-in-mumbai/CarRentalServices';
import FlexiblePlans from '../../components/sections/corporate-car-rental-in-mumbai/FlexiblePlans';
import RentalService from '../../components/sections/corporate-car-rental-in-mumbai/RentalService';
import ProfessionalExperience from '../../components/sections/corporate-car-rental-in-mumbai/ProfessionalExperience';
import OutstationTravel from '../../components/sections/corporate-car-rental-in-mumbai/OutstationTravel';
import ContactCTA from '../../components/sections/corporate-car-rental-in-mumbai/ContactCTA';
import FAQ from '../../components/sections/home/FAQ';

export const metadata = getMetadata("/corporate-car-rental-in-mumbai");

export default function CorporateCarRentalMumbaiPage() {
    const mumbaiFaqs = [
        {
            id: "1",
            question: "Why should companies invest in structured employee transport services?",
            answer: "Companies invest because it improves attendance, reduces delays, supports smoother workflow, and helps staff avoid travel stress that usually affects productivity every day.",
        },
        {
            id: "2",
            question: "How do employee shuttle services help reduce commute time?",
            answer: "Shuttle routes run on fixed schedules with planned pickup points. With smart routing and real-time updates, travel time becomes predictable even during heavy traffic.",
        },
        {
            id: "3",
            question: "What features improve employee safety in transportation services?",
            answer: "Safety increases with trained drivers, emergency support, monitoring tools, background checks, clear travel protocols, and round-the-clock support from operations teams.",
        },
        {
            id: "4",
            question: "How do transportation solutions reduce company expenses?",
            answer: "Cost reduces through shared rides, fuel savings, lower parking usage, route optimisation, professional management, and decreased personal vehicle reimbursements across teams.",
        },
        {
            id: "5",
            question: "How does real time monitoring help transport operations?",
            answer: "Monitoring tools track movement, measure delay patterns, improve control, and support better decision-making. This helps companies maintain steady service daily.",
        },
    ];

    return (
        <main>
            <HeroForm
                title="Corporate Car Rental In Mumbai- Fleet For Every Business Need"
                subtitle=""
                imageSrc="/images/corporate-car-rental-in-mumbai/unnamed-10-e1765264851729.jpg"
                ctaText="Get A Free Quote"
            />
            <Introduction />
            <CarRentalServices />
            <FlexiblePlans />
            <RentalService />
            <ProfessionalExperience />
            <OutstationTravel />
            <ContactCTA />
            <FAQ 
                items={mumbaiFaqs}
                badge="FAQs"
                title="Frequently Asked"
                darkTitle="Questions"
                description="Find answers to the most common questions about our corporate car rentals in Mumbai. To assure you of a reliable ride we are here to answer your queries right away."
            />
        </main>
    );
}
