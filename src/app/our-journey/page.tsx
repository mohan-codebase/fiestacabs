import Hero from "../../components/sections/our-journey/Hero";
import Timeline from "../../components/sections/our-journey/Timeline";

export const metadata = {
    title: "Our Journey | Fiesta Smart Mobility",
    description:
        "Explore Fiesta Smart Mobility's journey, milestones, and growth in employee transport and mobility solutions.",
};

const OurJourneyPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <Hero />
            <Timeline />
        </div>
    );
};

export default OurJourneyPage;
