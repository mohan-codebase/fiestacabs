import React from "react";
import Image from "next/image";

const ReachUsHero = () => {
    return (
        <section className="relative w-full min-h-[80vh]  text-white overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/reach-us/at-a-car-dealership-buying-a-car-1.jpg"
                    alt="Reach Us"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/55" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-8 text-center flex items-center justify-center pt-24 lg:pt-32">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
                    Reach Us
                </h1>
            </div>
        </section>
    );
};

export default ReachUsHero;
