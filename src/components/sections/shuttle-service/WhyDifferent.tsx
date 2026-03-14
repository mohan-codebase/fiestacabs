import Image from "next/image";
import Link from "next/link";
import Button from "../../../components/common/Button";

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
                        Worried about parking hassles near transit hubs?

                        We offer affordable parking spaces and optional affordable parking spaces add-ons near high-demand pick up points, allowing a true door-to-hub solution that eliminates friction from the daily routine.

                        With Fiesta, there’s no need to juggle between public transportation options or navigate through mind-boggling traffic—all while trying to get to or from work on time.
                    </p>
                    <Button href="/reach-us" className=" bg-[#EC2028] btn-animated ">
                        Talk to Our Team
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default WhyDifferent;
