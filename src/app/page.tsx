import Banner from "../components/sections/home/Banner";
import About from "../components/sections/home/About";
import Milestones from "../components/sections/home/Milestones";
import Partners from "../components/sections/home/Partners";
import CarCategories from "../components/sections/home/CarCategories";
import Services from "../components/sections/home/Services";
import Experience from "../components/sections/home/Experience";
import Testimonials from "../components/common/Testimonials";
import FAQ from "../components/sections/home/FAQ";

export const metadata = {
  title: "Fiesta Smart Mobility | Employee Transport & Premium Car Rentals",
  description:
    "Fiesta Smart Mobility offers secure, employee transport services and premium car rental solutions across India. Experience punctual and eco-friendly commutes",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <Milestones />
      <Partners />
      <About />
      <CarCategories />
      <Services />
      <Experience />
      <Testimonials />
      <FAQ />
    </div>
  );
}
