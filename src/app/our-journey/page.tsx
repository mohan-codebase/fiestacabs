import Timeline from "../../components/sections/our-journey/Timeline";
import PageHero from "../../components/common/PageHero";

export const metadata = {
    title: "Our Journey | Fiesta Smart Mobility",
    description:
        "Explore Fiesta Smart Mobility's journey, milestones, and growth in employee transport and mobility solutions.",
};

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
