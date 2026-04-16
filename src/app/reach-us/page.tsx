import { getMetadata } from "@/src/data/metadata";
import ReachUsHero from "../../components/sections/reach-us/ReachUsHero";
import ContactFormSection from "../../components/sections/reach-us/ContactFormSection";
import OfficeLocations from "../../components/sections/reach-us/OfficeLocations";

export const metadata = getMetadata("/reach-us");

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
