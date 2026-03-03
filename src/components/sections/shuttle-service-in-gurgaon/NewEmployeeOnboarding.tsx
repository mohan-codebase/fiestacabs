import Image from "next/image";

const NewEmployeeOnboarding = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="space-y-12 flex flex-col justify-center py-6 order-2 md:order-1">
                        <div>
                            <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 mb-6 leading-tight">
                                New Employee Onboarding?<br />We've Got You Covered.
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Hiring new staff? Our onboarding kits ensure that every employee knows how to use the shuttle from Day 1. From setting up accounts to finding the nearest pick up location, Fiesta simplifies the process. No need to explain it ten times, our tools do the talking.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 mb-8 leading-tight">
                                Why struggle when a better<br />solution is right here?
                            </h2>

                            <h3 className="text-[19px] font-bold text-gray-900 mb-4">
                                Let's Build Your Custom Plan
                            </h3>

                            <div className="space-y-6 text-[#555555] text-[15px] leading-[1.7]">
                                <p>
                                    If you're an HR manager, admin, or business leader, it's time to look at commuting not as an operational hassle, but as an opportunity. The right shuttle service saves time, saves money, and improves employee retention and attendance.
                                </p>
                                <p>
                                    We're already serving some of the top names in India's IT, BPO, pharma, and fintech sectors. Let us help your team too.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-[500px] md:min-h-[700px] w-full overflow-hidden order-1 md:order-2">
                        <Image
                            src="/images/shuttle-service-in-gurgaon/unnamed-7-4.jpg"
                            alt="Bus Interior"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewEmployeeOnboarding;
