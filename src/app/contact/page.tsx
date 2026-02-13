import ReachUsHero from "../../components/sections/contact/ReachUsHero";
import ContactFormSection from "../../components/sections/contact/ContactFormSection";
import OfficeLocations from "../../components/sections/contact/OfficeLocations";

export const metadata = {
    title: "Reach Us | Fiesta Smart Mobility",
    description: "Get in touch with Fiesta Smart Mobility for corporate travel, car rentals, and employee transport solutions. We are present across major cities in India.",
};

const ContactPage = () => {
    return (
        <div className="flex flex-col w-full">
            <ReachUsHero />
            <ContactFormSection />
            <OfficeLocations />
        </div>
    );
};

export default ContactPage;
