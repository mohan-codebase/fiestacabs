import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
            <Image
                src="/images/services-offered/hero.jpeg"
                alt="Services Offered"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 px-4 text-center">
                <h1 className="text-white text-4xl md:text-5xl font-bold">Services Offered</h1>
            </div>
        </section>
    );
};

export default Hero;
