import Image from "next/image";
import { FaHistory } from "react-icons/fa";

const milestones = [
    {
        year: "1998",
        title: "",
        description: "Started Premium Car Rental Services as a Partnership company",
        image: "/images/our-journey/timeline-1998.jpg",
    },
    {
        year: "2001",
        title: "",
        description:
            "Launched Employee Transportation Solutions for convenient and efficient commuting services for corporate employees.",
        image: "/images/our-journey/timeline-2001.jpg",
    },
    {
        year: "2006",
        title: "",
        description:
            "Transformed into a private limited company and renamed as Fiesta Car Rentals & Logistics Pvt Ltd.",
        image: "/images/our-journey/timeline-2006.jpg",
    },
    {
        year: "2011",
        title: "",
        description:
            "Fiesta expanded its branch to Bangalore and opened multiple branches in Chennai.",
        image: "/images/our-journey/timeline-2011.jpg",
    },
    {
        year: "2012",
        title: "",
        description: "Launched Staff Bus Transportation services",
        image: "/images/our-journey/timeline-2012.jpg",
    },
    {
        year: "2016",
        title: "",
        description: "Fiesta expanded its branches to Hyderabad and Pune.",
        image: "/images/our-journey/timeline-2016.jpg",
    },
    {
        year: "2022",
        title: "",
        description: "Launched Student Bus Transportation",
        image: "/images/our-journey/timeline-2022.jpg",
    },
    {
        year: "2023",
        title: "",
        description: "25th Anniversary",
        image: "/images/our-journey/timeline-2023.jpg",
    },
    {
        year: "2025",
        title: "",
        description:
            "Expanded branch in Hosur, Mumbai, Gurgaon. Fleet size: 200 own vehicles and 2000+ partner vehicles.",
        image: "/images/our-journey/timeline-2025.jpg",
    },
];

const Timeline = () => {
    return (
        <div className="py-16 max-w-7xl mx-auto px-4 bg-white">
            <div className="relative">
                {/* Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

                {milestones.map((milestone, index) => (
                    <div
                        key={milestone.year}
                        className={`mb-12 flex flex-col md:flex-row items-center w-full relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Year Display (Opposite Side) */}
                        <div className={`w-full md:w-5/12 hidden md:flex flex-col justify-center ${index % 2 === 0 ? "text-right pr-8 items-end" : "text-left pl-8 items-start"
                            }`}>
                            <span className="text-4xl font-bold text-black">{milestone.year}</span>
                            <span className="text-lg text-gray-500">Year</span>
                        </div>

                        {/* Center Icon */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 border-4 border-white z-10 shadow-md md:mb-0 mb-6">
                            <FaHistory className="text-white w-5 h-5" />
                        </div>

                        {/* Mobile Year Display (Visible only on mobile) */}
                        <div className="md:hidden flex flex-col items-center mb-4">
                            <span className="text-3xl font-bold text-black">{milestone.year}</span>
                            <span className="text-sm text-gray-500">Year</span>
                        </div>

                        {/* Content Card */}
                        <div className="w-full md:w-5/12 px-4 md:px-0">
                            <div className={`bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg overflow-hidden relative
                                ${index % 2 !== 0 ? "md:mr-8 md:border-r-4 md:border-red-600" : "md:ml-8 md:border-l-4 md:border-red-600"}
                                border-t-4 border-red-600 md:border-t-0
                            `}>
                                {/* Triangle Connector */}
                                <div className={`hidden md:block absolute top-[20px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent
                                    ${index % 2 !== 0
                                        ? "right-[-14px] border-l-[15px] border-l-red-600"
                                        : "left-[-14px] border-r-[15px] border-r-red-600"}
                                `}></div>

                                <div className="relative h-64 w-full bg-gray-100">
                                    <Image
                                        src={milestone.image}
                                        alt={`${milestone.year} Milestone`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
