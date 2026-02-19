import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/our-journey/banner.png"
                    alt="Our Journey Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Our Journey
                </h1>
            </div>
        </section>
    );
};

export default Hero;
