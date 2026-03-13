import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Button from "../../../components/common/Button";

const WhyStruggleCTA = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/shuttle-service-in-gurgaon/unnamed-8-2-e1763611486774.jpg"
                    alt="Get started with Fiesta shuttle service in Gurgaon"
                    fill
                    style={{ objectFit: "cover", objectPosition: "top right" }}
                    className="brightness-[0.35]"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 relative z-10 flex justify-end">
                <div className="w-full md:w-[60%] lg:w-[52%] text-white">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-white font-bold text-[14px]">4.8 (729 Reviews)</span>
                        <div className="flex text-[#ffb400] text-[12px] gap-0.5">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-[36px] font-bold mb-6 leading-[1.2] tracking-tight">
                        Get Started Today
                    </h2>

                    <div className="text-gray-200 mb-6 text-[15px] flex flex-col space-y-1">
                        <span>
                            Call us at{" "}
                            <a href="tel:+917845867512" className="text-white hover:text-[#E31E24]">
                                +91 78458 67512
                            </a>
                        </span>
                        <span>Book a quick consultation with our operations team</span>
                        <span>Set up your first ride and experience the difference</span>
                    </div>

                    <p className="text-gray-200 text-[15px] leading-relaxed mb-6">
                        There&apos;s no reason to keep losing hours in mind-numbing traffic, unreliable carpools, or most public transportation options. Fiesta&apos;s shuttle service in Gurgaon is built to make commuting a productive, pleasant part of the workday.
                    </p>

                    <p className="text-white font-semibold text-[15px] leading-relaxed mb-6">
                        Fiesta Smart Mobility - Where Gurgaon&apos;s workforce rides smarter.
                    </p>

                    <p className="text-gray-200 text-[15px] leading-relaxed mb-10">
                        Let&apos;s redefine what a daily commute can feel like. One shuttle, one pick up point, one ride at a time.
                    </p>

                    <Button href="/reach-us" className=" bg-[#E31E24] rounded text-[16px]">
                        Book Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default WhyStruggleCTA;
