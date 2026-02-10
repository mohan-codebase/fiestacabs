import Image from "next/image";
import Banner from "../components/sections/home/Banner";
import Milestones from "../components/sections/home/Milestones";
import Partners from "../components/sections/home/Partners";
import About from "../components/sections/home/About";
import CarCategories from "../components/sections/home/CarCategories";
import Services from "../components/sections/home/Services";
import Experience from "../components/sections/home/Experience";
import Testimonials from "../components/sections/home/Testimonials";
import FAQ from "../components/sections/home/FAQ";

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
