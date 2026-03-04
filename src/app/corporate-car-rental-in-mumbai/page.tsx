import type { Metadata } from 'next';
import HeroForm from '../../components/common/HeroForm';
import Introduction from '../../components/sections/corporate-car-rental-in-mumbai/Introduction';
import CarRentalServices from '../../components/sections/corporate-car-rental-in-mumbai/CarRentalServices';
import FlexiblePlans from '../../components/sections/corporate-car-rental-in-mumbai/FlexiblePlans';
import RentalService from '../../components/sections/corporate-car-rental-in-mumbai/RentalService';
import ProfessionalExperience from '../../components/sections/corporate-car-rental-in-mumbai/ProfessionalExperience';
import OutstationTravel from '../../components/sections/corporate-car-rental-in-mumbai/OutstationTravel';
import ContactCTA from '../../components/sections/corporate-car-rental-in-mumbai/ContactCTA';
import FAQ from '../../components/sections/corporate-car-rental-in-mumbai/FAQ';

export const metadata: Metadata = {
    title: 'Corporate Car Rental in Mumbai | Corporate Cabs Mumbai',
    description: 'Looking for reliable corporate car rental in Mumbai? Fiesta Cabs offers premium cars, minivans & buses for business travel & corporate events. Book now!',
};

export default function CorporateCarRentalMumbaiPage() {
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
            <FAQ />
        </main>
    );
}
