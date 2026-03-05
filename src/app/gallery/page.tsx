import GalleryHero from "../../components/sections/gallery/GalleryHero";
import GalleryEvents from "../../components/sections/gallery/GalleryEvents";

export const metadata = {
    title: "Gallery | Fiesta Smart Mobility",
    description:
        "Explore Fiesta Smart Mobility gallery featuring our fleet, events, and transportation service highlights.",
};

const GalleryPage = () => {
    return (
        <main className="w-full bg-white">
            <GalleryHero />
            <GalleryEvents />
        </main>
    );
};

export default GalleryPage;
