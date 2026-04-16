import { getMetadata } from "../data/metadata";
import Timeline from "../../components/sections/our-journey/Timeline";
import PageHero from "../../components/common/PageHero";

export const metadata = getMetadata("/our-journey");

const OurJourneyPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHero 
                title="Our Journey" 
                backgroundImage="/images/our-journey/live/hero.jpg" 
                height="lg"
            />
            <Timeline />
        </div>
    );
};

export default OurJourneyPage;
