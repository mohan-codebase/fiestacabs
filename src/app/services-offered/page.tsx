import Testimonials from "../../components/common/Testimonials";
import Hero from "../../components/sections/services-offered/Hero";
import OurServices from "../../components/sections/services-offered/OurServices";

export const metadata = {
    title: "Services Offered | Fiesta Smart Mobility",
    description:
        "Explore Fiesta Smart Mobility services including employee transport solutions and premium car rentals.",
};

const ServicesOfferedPage = () => {
    return (
        <div className="w-full bg-white">
            <Hero />
            <OurServices />
            <Testimonials eyebrow="Testimonials" title="What our customer says" showEyebrow />
        </div>
    );
};

export default ServicesOfferedPage;
