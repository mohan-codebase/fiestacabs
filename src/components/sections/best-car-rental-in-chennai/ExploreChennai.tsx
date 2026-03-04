import Image from "next/image";

const ExploreChennai = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                Explore Chennai at Your Own Pace
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7] space-y-4">
                                <span className="block mb-4">With our car rental in Chennai, you can explore the city and nearby regions without rushing for buses or dealing with unpredictable public transport. Visit Marina Beach for its rhythmic waves, shop at local markets, enjoy a drive along the picturesque beaches, or take a cultural trip to Kapaleeshwarar Temple, all at your own pace.</span>
                                <span className="block">Our rental in Chennai options also let you plan weekend getaways to destinations like Mahabalipuram&apos;s Shore Temple or Kanchipuram&apos;s Kailasanathar Temple for a serene embrace of history and architecture.</span>
                            </p>
                        </div>

                        <div className="pt-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                Serving Various Cities Across South India
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                While our car rental Chennai operations are based in the city, Fiesta also offers transport solutions across various cities in South India. Whether you need car hire for business meetings, tourism, or corporate commutes, we bring our well maintained fleet and expert drivers to meet your transportation needs.
                            </p>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg order-1 md:order-2 shadow-lg">
                        <Image
                            src="/images/best-car-rental-in-chennai/unnamed-9-2.jpg"
                            alt="Explore Chennai at Your Own Pace"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreChennai;
