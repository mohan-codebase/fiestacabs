import React from 'react';

const ClosingMessage = () => {
    return (
        <section className="relative w-full py-24 md:py-32 bg-[url('/images/shuttle-services-in-chennai/image.webp')] bg-cover bg-center bg-no-repeat overflow-hidden group">
            {/* Soft overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90"></div>
            
            <div className="relative max-w-standard mx-auto px-4 text-center">
                <div className="max-w-[1000px] mx-auto">
                    {/* Decorative Top Quote */}
                    <span className="text-[#fd6454] font-serif text-7xl md:text-8xl mb-2 block italic opacity-40 leading-none select-none">
                        &ldquo;
                    </span>
                    
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#2A2A2A] leading-[1.2] mb-8 tracking-tight">
                        Hello! At Fiesta, we believe that when you have a smooth commute, you have the peace of mind to focus on what matters most.
                    </h2>
                    
                    <p className="text-lg md:text-2xl text-[#555555] italic font-medium leading-relaxed max-w-[850px] mx-auto">
                        As the saying goes, &ldquo;He who has health, has hope; and he who has hope, has everything&rdquo;&mdash;and a stress-free journey to work is a great way to protect your well-being!
                    </p>
                    
                    {/* Decorative Bottom Quote */}
                    <span className="text-[#fd6454] font-serif text-7xl md:text-8xl mt-6 block italic opacity-40 leading-none select-none">
                        &rdquo;
                    </span>
                </div>
            </div>
            
            {/* Subtle decorative element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fd6454]/30 to-transparent"></div>
        </section>
    );
};

export default ClosingMessage;
