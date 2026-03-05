import Image from "next/image";

const GurgaonCommutesMadeEasy = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[350px] md:h-[700px] w-full overflow-hidden">
                        <Image
                            src="/images/shuttle-service-in-gurgaon/unnamed-2-9.jpg"
                            alt="Gurgaon commutes made easy with Fiesta"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Gurgaon Commutes Made Easy with Fiesta
                        </h2>

                        <div className="space-y-4 text-gray-600">
                            <p>
                                Our shuttle services in Gurgaon offer dependable employee transport that connects key office locations with accessible pick up points near metro stations, housing clusters, and major roadways.
                            </p>
                            <p>
                                Our network is built to serve the heart of Gurgaon from Cyber City and Golf Course Road to Udyog Vihar and Sohna Road.
                            </p>
                        </div>

                        <h3 className="text-xl md:text-[22px] font-bold text-gray-900 leading-tight">
                            Gate-to-Gate Corporate Shuttle Service in Gurgaon: Direct, Reliable Employee Transport
                        </h3>

                        <div className="space-y-4 text-gray-600">
                            <p>
                                Fiesta&apos;s gate-to-gate shuttle service in Gurgaon offers direct, end-to-end employee transportation between office campuses and key pickup zones across the city. Designed for today&apos;s fast-paced corporate schedules, our service ensures minimal walking, maximum punctuality, and zero last-mile confusion.
                            </p>
                            <p>
                                Fiesta&apos;s Gurgaon shuttle services redefine employee commuting by delivering a smooth, predictable, and secure experience. With our gate-to-gate model, companies ensure a stress-free start and finish to every workday, boosting productivity and employee satisfaction.
                            </p>
                            <p>
                                Ready to streamline your corporate transport in Gurgaon? Choose Fiesta. Ride smart, ride direct.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GurgaonCommutesMadeEasy;
