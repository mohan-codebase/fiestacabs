import HeroForm from "../../components/common/HeroForm";
import Testimonials from "../../components/sections/home/Testimonials";
import FAQ from "../../components/sections/home/FAQ";

export const metadata = {
    title: "Luxury Wedding Car Rentals | Fiesta Smart Mobility",
    description:
        "Make your special day unforgettable with our premium fleet of luxury cars for weddings. Professional chauffeurs and pristine vehicles.",
};

const WeddingCarsPage = () => {
    return (
        <div className="w-full bg-white">
            <HeroForm
                title="Luxury Wedding Car Rentals"
                subtitle="Make your special day unforgettable with our premium fleet of luxury cars for weddings. Arrive in style and elegance."
                imageSrc="/images/premium-car-rentals/weddings.jpg"
                ctaText="Book Your Dream Car"
            />

            <section className="py-16 px-4 max-w-[1440px] mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Make Your Wedding Day Perfect</h2>
                <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
                    At Fiesta Smart Mobility, we understand that your wedding day is one of the most important days of your life.
                    That&apos;s why we offer a stunning collection of luxury wedding cars to ensure you arrive in style.
                    From classic elegance to modern luxury, our fleet is maintained to the highest standards.
                </p>
            </section>

            <Testimonials eyebrow="Testimonials" title="Happy Couples" showEyebrow />
            <FAQ />
        </div>
    );
};

export default WeddingCarsPage;
