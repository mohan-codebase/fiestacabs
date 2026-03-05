import Image from "next/image";

const SmarterWay = () => {
    return (
        <section className="w-full py-14 md:py-16 bg-[#fafafa]">
            <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="relative h-[360px] md:h-[520px] rounded-md overflow-hidden">
                    <Image
                        src="/images/shuttle-service/smarter-way.jpg"
                        alt="Smarter way to commute with Fiesta"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div>
                    <p className="text-[#EC2028] uppercase tracking-wider font-semibold mb-2">The First</p>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Fiesta Smart Mobility&apos;s Shuttle Service: The Smarter Way to Commute
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        n today’s work culture, employee satisfaction and productivity begin well before they step into the office and continue long after they leave.

                        The daily commute is one of the most overlooked yet impactful aspects of your workforce’s experience.

                        If your team is still navigating long queues, mind-numbing traffic, unpredictable public transportation options, or stressful last-mile transit, it’s time for a better solution.

                        Enter Fiesta Smart Mobility—your reliable partner for a smarter, safer, and more efficient shuttle service tailored for modern businesses.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default SmarterWay;
