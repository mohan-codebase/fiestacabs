import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden py-20 md:min-h-[480px] md:py-28">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/our-journey/live/hero.jpg"
                    alt="Our Journey Hero"
                    fill
                    className="object-cover object-[center_30%]"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-0">
                    Our Journey
                </h1>
            </div>
        </section>
    );
};

export default Hero;
