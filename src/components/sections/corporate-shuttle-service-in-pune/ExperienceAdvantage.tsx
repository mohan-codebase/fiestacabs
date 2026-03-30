import React from 'react';
import Image from 'next/image';
import BookNowButton from '../../common/BookNowButton';

const ExperienceAdvantage = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/shuttle-service-in-bangalore/unnamed-12.jpg"
                    alt="Experience the Fiesta Advantage in Pune"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 text-white">
                <div className="max-w-3xl space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Experience the <span className="text-[#fd6454]">Fiesta Advantage</span>
                    </h2>

                    <p className="text-white/90 text-lg leading-relaxed">
                        Fiesta Smart Mobility Services offers a reliable, secure, and comfortable corporate commuting solution Pune'sne’s growing transportation demands. Improve employee satisfaction, streamline daily travel, and reduce congestion with our shuttle services, suitable for businesses of all sizes.                    </p>

                    <div className="pt-6">
                        <BookNowButton className="inline-block bg-[#fd6454] btn-animated hover:bg-red-600 text-white font-bold py-4 px-10 rounded-full transition-colors duration-300 text-lg">
                            Get Your Corporate Plan
                        </BookNowButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceAdvantage;
