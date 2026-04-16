import { getMetadata } from "../data/metadata";
import GalleryHero from "../../components/sections/gallery/GalleryHero";
import GalleryEvents from "../../components/sections/gallery/GalleryEvents";

export const metadata = getMetadata("/gallery");

const GalleryPage = () => {
    return (
        <main className="w-full bg-white">
            <GalleryHero />
            <GalleryEvents />
        </main>
    );
};

export default GalleryPage;
