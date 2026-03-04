import Image from "next/image";

const MakingMemorable = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Making Your Wedding Day Memorable
                        </h2>

                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                A wedding is a lifelong commitment between partners. Your travel on this memorable day should reflect your elegance, class and character. Book your wedding cars with Fiesta to make your special day memorable in every way.
                            </p>
                            <p>
                                Start your new journey of life driving in an elegant chauffeur-driven luxury car designed around your preferences. Ensure maximum comfort alongside maximum style, making a stunning entrance effortlessly. Let us handle the details while you cherish your wedding day!
                            </p>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg">
                        <Image
                            src="/images/wedding-car-rental-mumbai/unnamed-4-1.jpg"
                            alt="Making Your Wedding Day Memorable in Mumbai"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakingMemorable;
