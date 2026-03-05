import Image from "next/image";
import { ReactNode } from "react";
import { FaRegClock } from "react-icons/fa";

interface Milestone {
    year: string;
    description: ReactNode;
    image: string;
}

const milestones: Milestone[] = [
    {
        year: "1998",
        description: "Started Premium Car Rental Services as a Partnership company",
        image: "/images/our-journey/live/timeline-1998.jpg",
    },
    {
        year: "2001",
        description:
            "Launched Employee Transportation Solutions for convenient and efficient commuting services for corporate employees.",
        image: "/images/our-journey/live/timeline-2001.jpg",
    },
    {
        year: "2006",
        description:
            "Transformed into a private limited company and renamed as Fiesta Car Rentals & Logistics Pvt Ltd.",
        image: "/images/our-journey/live/timeline-2006.jpg",
    },
    {
        year: "2011",
        description:
            "Fiesta expanded its branch to Bangalore and opened multiple branches in Chennai.",
        image: "/images/our-journey/live/timeline-2011.jpg",
    },
    {
        year: "2012",
        description: "Launched Staff Bus Transportation services",
        image: "/images/our-journey/live/timeline-2012.jpg",
    },
    {
        year: "2016",
        description: "Fiesta expanded its branches to Hyderabad and Pune.",
        image: "/images/our-journey/live/timeline-2016.jpg",
    },
    {
        year: "2022",
        description: "Launched Student Bus Transportation",
        image: "/images/our-journey/live/timeline-2022.jpg",
    },
    {
        year: "2023",
        description: "25th Anniversary",
        image: "/images/our-journey/live/timeline-2023.jpg",
    },
    {
        year: "2025",
        description: (
            <>
                Expanded branch in Hosur, Mumbai, Gurgaon.
                <br />
                Fleet size: 200 own vehicles and 2000+ partner vehicles.
            </>
        ),
        image: "/images/our-journey/live/timeline-2025.jpg",
    },
];

const YearLabel = ({ year, align }: { year: string; align: "left" | "right" }) => (
    <div
        className={`hidden md:flex flex-col pt-1 ${align === "left" ? "items-end pr-10 text-right" : "items-start pl-10 text-left"
            }`}
    >
        <span className="text-[42px] font-bold leading-none text-[#111111]">{year}</span>
        <span className="text-[34px] leading-none text-[#1f1f1f]">Year</span>
    </div>
);

const Card = ({ milestone, side }: { milestone: Milestone; side: "left" | "right" }) => (
    <div className={`relative ${side === "left" ? "md:pr-8" : "md:pl-8"}`}>
        <div
            className={`hidden md:block absolute top-3 h-8 w-5 border-red-600 ${
                side === "left"
                    ? "right-1 border-r-[3px] border-t-[3px] border-b-[3px] rounded-r-[10px]"
                    : "left-1 border-l-[3px] border-t-[3px] border-b-[3px] rounded-l-[10px]"
            }`}
        ></div>

        <article
            className={`mx-auto max-w-[560px] overflow-hidden rounded-[8px] bg-[#f7f7f7] shadow-[0_3px_12px_rgba(0,0,0,0.15)] ${
                side === "left" ? "md:border-r-[4px]" : "md:border-l-[4px]"
            } border-red-600`}
        >
            <div className="p-3">
                <div className="relative aspect-[5/3] w-full overflow-hidden border border-[#1a1a1a30] bg-white">
                    <Image
                        src={milestone.image}
                        alt={`${milestone.year} Milestone`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 46vw"
                    />
                </div>
            </div>
            <div className="px-4 pb-5 pt-1 text-center">
                <p className="text-lg leading-[1.45] text-[#2a2a2a]">{milestone.description}</p>
            </div>
        </article>
    </div>
);

const Marker = () => (
    <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#ef2a31] shadow-[0_0_0_2px_#bdbdbd] md:mb-0">
        <FaRegClock className="text-2xl text-white" />
    </div>
);

const Timeline = () => {
    return (
        <section className="bg-[#ececec] px-4 pb-24 pt-14 md:pt-20">
            <div className="mx-auto max-w-[1460px]">
                <div className="relative hidden md:block">
                    <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-[#c8c8c8] md:block"></div>
                    <div className="absolute left-1/2 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-[#c8c8c8] md:block"></div>

                    <div className="space-y-16 md:space-y-20 md:pt-8">
                        {milestones.map((milestone, index) => {
                            const isCardRight = index % 2 === 0;

                            return (
                                <div key={milestone.year} className="relative">
                                    <div className="md:grid md:grid-cols-[minmax(0,1fr)_84px_minmax(0,1fr)] md:items-start">
                                        {isCardRight ? (
                                            <>
                                                <YearLabel year={milestone.year} align="left" />
                                                <Marker />
                                                <Card milestone={milestone} side="right" />
                                            </>
                                        ) : (
                                            <>
                                                <Card milestone={milestone} side="left" />
                                                <Marker />
                                                <YearLabel year={milestone.year} align="right" />
                                            </>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="relative space-y-10 md:hidden">
                    <div className="absolute left-5 top-0 h-full w-[3px] bg-[#c8c8c8]"></div>

                    {milestones.map((milestone) => (
                        <div key={`mobile-${milestone.year}`} className="relative pl-14">
                            <div className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#ef2a31] shadow-[0_0_0_1px_#bdbdbd]">
                                <FaRegClock className="text-base text-white" />
                            </div>
                            <div className="mb-3">
                                <span className="block text-2xl font-bold leading-none text-[#111111]">{milestone.year}</span>
                                <span className="text-sm text-[#2d2d2d]">Year</span>
                            </div>

                            <article className="overflow-hidden rounded-[8px] bg-[#f7f7f7] shadow-[0_3px_12px_rgba(0,0,0,0.15)] border-l-[4px] border-red-600">
                                <div className="p-3">
                                    <div className="relative aspect-[5/3] w-full overflow-hidden border border-[#1a1a1a30] bg-white">
                                        <Image
                                            src={milestone.image}
                                            alt={`${milestone.year} Milestone`}
                                            fill
                                            className="object-cover"
                                            sizes="100vw"
                                        />
                                    </div>
                                </div>
                                <div className="px-4 pb-4 pt-1 text-center">
                                    <p className="text-base leading-[1.45] text-[#2a2a2a]">{milestone.description}</p>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
