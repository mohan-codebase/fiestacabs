import HeroForm from "../../components/common/HeroForm";
import Testimonials from "../../components/sections/home/Testimonials";
import FAQ from "../../components/sections/home/FAQ";

export const metadata = {
    title: "Corporate Car Rental Service | Fiesta Smart Mobility",
    description:
        "Reliable and professional corporate car rental solutions for business meetings, airport transfers, and client visits.",
};

const CorporateCarRentalPage = () => {
    return (
        <div className="w-full bg-white">
            <HeroForm
                title="Corporate Car Rental Service"
                subtitle="Reliable and professional car rental solutions for your business needs. Premium fleet for executives and clients."
                imageSrc="/images/premium-car-rentals/corporate-events.avif"
                ctaText="Get a Corporate Quote"
            />

            <section className="py-16 px-4 max-w-[1440px] mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Professional Corporate Mobility</h2>
                <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
                    Fiesta Smart Mobility offers top-tier corporate car rental services designed for modern businesses.
                    Whether it&apos;s airport transfers, client meetings, or daily commutes for executives,
                    our fleet ensures comfort, punctuality, and professionalism.
                </p>
            </section>

            <Testimonials eyebrow="Testimonials" title="Corporate Clients Love Us" showEyebrow />
            <FAQ />
        </div>
    );
};

export default CorporateCarRentalPage;
