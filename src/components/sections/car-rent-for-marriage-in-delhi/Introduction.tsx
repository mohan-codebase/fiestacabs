import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[300px] md:min-h-[400px] w-full overflow-hidden">
                        <Image
                            src="/images/car-rent-for-marriage-in-delhi/unnamed-10.jpg"
                            alt="Car Rent for Marriage in Delhi – Make Your Wedding Day Memorable with Fiesta"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Car Rent for Marriage in Delhi – Make Your Wedding Day Memorable with Fiesta
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            A wedding is more than just an event. It is a milestone, a celebration of love, and a moment where every detail matters. From the décor to the attire, and from the guests to the grand entry, everything is planned to perfection. Among these, choosing the right wedding cars is just as important.
                        </p>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Your arrival and departure on your special day will be remembered for years, not just by you, but also by your family, friends, and every guest who attends.
                        </p>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            At Fiesta, we understand this better than anyone. That&apos;s why we offer car rent for marriage in Delhi with professional chauffeurs, ensuring you never have to worry about driving or coordinating on your wedding day.
                        </p>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Whether you are looking for a wedding car rental for your grand entry, pre wedding photoshoot, or to escort your guests, we make sure your ride matches the elegance, grace, and joy of the occasion.
                        </p>
                        <div>
                            <Link href="#" className="inline-block bg-[#EC2028] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors mt-2">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
