import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full h-[80vh] lg:h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/our-journey/live/hero.jpg"
                    alt="Our Journey Hero"
                    fill
                    className="object-cover object-[center_30%]"
                    priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16 text-left">
                <div className="max-w-2xl">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-[3px] w-10 bg-[#EC2028] btn-animated rounded-full" />
                        <span className="text-[#EC2028] font-semibold text-sm uppercase tracking-widest">
                            Since 1998
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5 leading-tight">
                        Our Journey
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        From a single car rental venture to a pan-India smart mobility leader —
                        28 years of growth, trust, and innovation.
                    </p>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
};

export default Hero;
