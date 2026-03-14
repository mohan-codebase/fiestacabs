import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full h-[80vh] lg:h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
            <Image
                src="/images/services-offered/hero.jpeg"
                alt="Services Offered"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/50" />
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16">
                <div className="text-center space-y-4">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
                        Services Offered
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
