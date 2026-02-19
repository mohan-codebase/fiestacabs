import Image from "next/image";
import Link from "next/link";

const WhyDifferent = () => {
    return (
        <section className="w-full py-14 md:py-16 bg-[#fafafa]">
            <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="relative h-[320px] md:h-[520px] rounded-md overflow-hidden">
                    <Image
                        src="/images/shuttle-service/why-different.jpg"
                        alt="Why Fiesta shuttle service is different"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div>
                    <p className="text-[#EC2028] uppercase tracking-wider font-semibold mb-2">Why</p>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">We&apos;re Different</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our approach is deeply customized, local, and enterprise-ready with flexible integrations
                        and personalized support.
                    </p>
                    <h4 className="text-2xl font-semibold mb-2">Affordability Meets Convenience</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        We offer affordable parking add-ons near high-demand pick-up points, helping remove
                        friction from daily commuting and reducing dependence on unreliable public transport.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md"
                    >
                        Talk to Our Team
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyDifferent;
