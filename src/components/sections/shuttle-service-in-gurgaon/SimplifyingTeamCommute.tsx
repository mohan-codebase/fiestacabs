import Image from "next/image";

const SimplifyingTeamCommute = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden">
                        <Image
                            src="/images/shuttle-service-in-gurgaon/unnamed-15.jpg"
                            alt="Fiesta Shuttle Service in Gurgaon"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Fiesta Shuttle Service in Gurgaon <span className="text-gray-500">- Simplifying Your Team's Daily Commute</span>
                            </h2>
                        </div>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                In a corporate hub like Gurgaon, where productivity begins the moment employees step out of their homes, the daily commute can either empower or exhaust your workforce.
                            </p>
                            <p>
                                Whether it's mind-numbing traffic, long queues, or missed connections, most public transportation options in the Delhi NCR region add stress to the workday before it even begins.
                            </p>
                            <p>
                                At Fiesta, we believe that a smooth ride to work shouldn't be a luxury, it should be a given.
                            </p>
                            <p>
                                That's why we've designed our shuttle service in Gurgaon to transform commuting from a challenging chore into a daily convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimplifyingTeamCommute;
