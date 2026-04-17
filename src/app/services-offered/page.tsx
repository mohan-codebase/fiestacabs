import { getMetadata } from "@/src/data/metadata";
import Testimonials from "../../components/common/Testimonials";
import PageHero from "../../components/common/PageHero";
import OurServices from "../../components/sections/services-offered/OurServices";

export const metadata = getMetadata("/services-offered");

const ServicesOfferedPage = () => {
    return (
        <div className="w-full bg-white">
            <PageHero 
                title="Services Offered" 
                backgroundImage="/images/services-offered/hero.jpeg" 
                height="lg"
            />
            <OurServices />
            <Testimonials eyebrow="Testimonials" title="What our customer says" showEyebrow />
        </div>
    );
};

export default ServicesOfferedPage;
