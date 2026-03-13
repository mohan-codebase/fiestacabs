import Image from "next/image";
import { ReactNode } from "react";
import { FaRegClock } from "react-icons/fa";

interface Milestone {
    year: string;
    title: string;
    description: ReactNode;
    image: string;
}

const milestones: Milestone[] = [
    {
        year: "1998",
        title: "The Beginning",
        description: "Started Premium Car Rental Services as a Partnership company.",
        image: "/images/our-journey/live/timeline-1998.jpg",
    },
    {
        year: "2001",
        title: "Employee Transport",
        description: "Launched Employee Transportation Solutions for convenient and efficient commuting services for corporate employees.",
        image: "/images/our-journey/live/timeline-2001.jpg",
    },
    {
        year: "2006",
        title: "Going Private",
        description: "Transformed into a private limited company and renamed as Fiesta Car Rentals & Logistics Pvt Ltd.",
        image: "/images/our-journey/live/timeline-2006.jpg",
    },
    {
        year: "2011",
        title: "Expanding South",
        description: "Fiesta expanded its branch to Bangalore and opened multiple branches in Chennai.",
        image: "/images/our-journey/live/timeline-2011.jpg",
    },
    {
        year: "2012",
        title: "Staff Bus Services",
        description: "Launched Staff Bus Transportation services to serve larger corporate campuses.",
        image: "/images/our-journey/live/timeline-2012.jpg",
    },
    {
        year: "2016",
        title: "Pan-India Growth",
        description: "Fiesta expanded its branches to Hyderabad and Pune.",
        image: "/images/our-journey/live/timeline-2016.jpg",
    },
    {
        year: "2022",
        title: "Student Mobility",
        description: "Launched Student Bus Transportation for educational institutions.",
        image: "/images/our-journey/live/timeline-2022.jpg",
    },
    {
        year: "2023",
        title: "Silver Jubilee",
        description: "Celebrated our 25th Anniversary — a milestone of trust and excellence.",
        image: "/images/our-journey/live/timeline-2023.jpg",
    },
    {
        year: "2025",
        title: "Next Horizon",
        description: (
            <>
                Expanded to Hosur, Mumbai and Gurgaon.{" "}
                Fleet: 200 own vehicles + 2,000+ partner vehicles.
            </>
        ),
        image: "/images/our-journey/live/timeline-2025.jpg",
    },
];

/* ── Card ── */
const MilestoneCard = ({ milestone }: { milestone: Milestone }) => (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col max-w-[400px] w-full">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
            <Image
                src={milestone.image}
                alt={`${milestone.year} – ${milestone.title}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 42vw"
            />
            {/* Year badge */}
            <div className="absolute top-4 left-4 bg-[#EC2028] text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                {milestone.year}
            </div>
        </div>

        {/* Content */}
        <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
                <span className="h-px flex-1 bg-gray-100" />
                <span className="text-xs font-bold text-[#EC2028] uppercase tracking-widest">
                    {milestone.title}
                </span>
                <span className="h-px flex-1 bg-gray-100" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
                {milestone.description}
            </p>
        </div>
    </article>
);

/* ── Center marker ── */
const Marker = () => (
    <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#EC2028] shadow-[0_0_0_3px_#EC202840]">
        <FaRegClock className="text-xl text-white" />
    </div>
);

/* ── Year label (desktop, opposite side) ── */
const YearLabel = ({ year, title, align }: { year: string; title: string; align: "left" | "right" }) => (
    <div className={`hidden md:flex flex-col justify-center ${align === "left" ? "items-end text-right pr-6" : "items-start text-left pl-6"}`}>
        <span className="text-5xl font-extrabold text-gray-800 leading-none">{year}</span>
        <span className="text-sm font-semibold text-[#EC2028] uppercase tracking-widest mt-1">{title}</span>
    </div>
);

/* ── Timeline ── */
const Timeline = () => {
    return (
        <section className="bg-gray-50 px-4 pb-24 pt-14 md:pt-20">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-14">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-red-50 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-[#EC2028]" />
                    <span className="text-[#EC2028] font-semibold text-sm tracking-wide uppercase">Milestones</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    27 Years of <span className="text-[#EC2028]">Excellence</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                    Every milestone tells the story of our commitment to smarter, safer, and more reliable mobility.
                </p>
            </div>

            {/* ── Desktop alternating timeline ── */}
            <div className="hidden md:block max-w-6xl mx-auto">
                <div className="relative">
                    {/* Spine */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-400 -translate-x-1/2" />

                    <div className="space-y-16">
                        {milestones.map((milestone, index) => {
                            const isCardOnRight = index % 2 === 0;
                            return (
                                <div key={milestone.year} className="relative grid grid-cols-[1fr_72px_1fr] items-center">
                                    {isCardOnRight ? (
                                        <>
                                            {/* Left: year label */}
                                            <YearLabel year={milestone.year} title={milestone.title} align="left" />
                                            {/* Center: marker */}
                                            <div className="flex justify-center">
                                                <Marker />
                                            </div>
                                            {/* Right: card */}
                                            <div className="pl-6">
                                                <MilestoneCard milestone={milestone} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Left: card */}
                                            <div className="pr-6 flex justify-end">
                                                <MilestoneCard milestone={milestone} />
                                            </div>
                                            {/* Center: marker */}
                                            <div className="flex justify-center">
                                                <Marker />
                                            </div>
                                            {/* Right: year label */}
                                            <YearLabel year={milestone.year} title={milestone.title} align="right" />
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── Mobile vertical stack ── */}
            <div className="md:hidden max-w-sm mx-auto">
                <div className="relative flex flex-col items-center">
                    {/* Centered spine line */}
                    <div className="absolute top-0 bottom-0 w-px bg-gray-400" />

                    <div className="flex flex-col items-center gap-10 w-full">
                        {milestones.map((milestone) => (
                            <div key={`m-${milestone.year}`} className="relative flex flex-col items-center w-full">
                                {/* Centered dot */}
                                <div className="relative z-10 w-12 h-12 rounded-full bg-[#EC2028] border-4 border-white shadow-md flex items-center justify-center mb-4">
                                    <FaRegClock className="text-base text-white" />
                                </div>

                                <MilestoneCard milestone={milestone} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
