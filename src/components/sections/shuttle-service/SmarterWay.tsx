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
                        Employee satisfaction and productivity begin long before work starts. Daily commute quality
                        is one of the most impactful but often ignored factors in workforce experience.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        If your teams still face long queues, traffic, and unpredictable public transport, Fiesta
                        offers a safer and more efficient alternative built for modern businesses.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SmarterWay;
