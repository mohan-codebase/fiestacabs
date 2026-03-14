import HeroForm from "../../common/HeroForm";

interface HeroProps {
    title?: string;
    subtitle?: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
    return (
        <HeroForm
            title={title || "Outstation Cab & Intercity Rides Across India"}
            subtitle={subtitle || "Outstation Cab from Chennai / Delhi / Bangalore…"}
            imageSrc="/images/services-offered/premium-car-rentals/outstation-rides/banner.jpg"
            ctaText="Book Your Outstation Ride Now"
            ctaLink="#booking-form"
        />
    );
};

export default Hero;
