import React from "react";
import Image from "next/image";

const ReachUsHero = () => {
    return (
        <section className="relative w-full min-h-[340px] md:min-h-[660px] text-white overflow-hidden">
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

            <div className="relative z-10 flex items-center justify-center min-h-[420px] md:min-h-[520px] text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
                    Reach Us
                </h1>
            </div>
        </section>
    );
};

export default ReachUsHero;
