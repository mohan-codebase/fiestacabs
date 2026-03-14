import Link from "next/link";
import FAQ from "../../components/sections/home/FAQ";
import Hero from "../../components/sections/shuttle-service/Hero";
import Milestones from "../../components/sections/shuttle-service/Milestones";
import WhatIsService from "../../components/sections/shuttle-service/WhatIsService";
import PanIndiaServices from "../../components/sections/shuttle-service/PanIndiaServices";
import KeyFeatures from "../../components/sections/shuttle-service/KeyFeatures";
import SmarterWay from "../../components/sections/shuttle-service/SmarterWay";
import StartToday from "../../components/sections/shuttle-service/StartToday";
import WhyDifferent from "../../components/sections/shuttle-service/WhyDifferent";
import CTA from "../../components/sections/shuttle-service/CTA";

export const metadata = {
    title: "Shuttle Service | Fiesta Smart Mobility",
    description:
        "Corporate shuttle and employee transport service with gate-to-gate commuting, fixed schedules, and safe daily rides.",
    openGraph: {
        title: "Shuttle Service | Fiesta Smart Mobility",
        description: "Corporate shuttle and employee transport service with gate-to-gate commuting, fixed schedules, and safe daily rides.",
        images: ["/images/logo/logo.png"],
    },
};

const ShuttleServicePage = () => {
    return (
        <div className="w-full bg-white">
            <Hero />
            <Milestones />
            <WhatIsService />
            <PanIndiaServices />
            <KeyFeatures />
            <SmarterWay />
            <StartToday />
            <WhyDifferent />
            <CTA />
            <FAQ />
        </div>
    );
};

export default ShuttleServicePage;
