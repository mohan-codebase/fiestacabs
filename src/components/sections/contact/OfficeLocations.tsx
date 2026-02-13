import React from "react";
import Link from "next/link";

interface OfficeInfo {
    title: string;
    description: string;
    calls: string[];
    mail?: string;
    mapLink: string;
}

const OfficeCard = ({ office }: { office: OfficeInfo }) => (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{office.title}</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            {office.description}
        </p>
        <div className="space-y-2 mb-6">
            {office.calls.map((call, idx) => (
                <p key={idx} className="text-sm font-medium text-gray-800 flex items-center gap-2">
                    <span className="text-red-500 font-bold">Call:</span>
                    <Link href={`tel:${call.replace(/[^0-9+]/g, '')}`} className="hover:text-red-500 transition-colors">
                        {call}
                    </Link>
                </p>
            ))}
            {office.mail && (
                <p className="text-sm font-medium text-gray-800 flex items-center gap-2">
                    <span className="text-red-500 font-bold">Mail:</span>
                    <Link href={`mailto:${office.mail}`} className="hover:text-red-500 transition-colors">
                        {office.mail}
                    </Link>
                </p>
            )}
        </div>
        <Link
            href={office.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 font-bold text-sm hover:underline"
        >
            Google Map Link
        </Link>
    </div>
);

const OfficeLocations = () => {
    const mainOffices: OfficeInfo[] = [
        {
            title: "Head Office",
            description: "523, Vinayagapuram Main Road, MMDA-II Nagar, Velachery, Kolathur, Chennai-600 123.",
            calls: ["044 - 23 73 8089", "+91 80560 20000"],
            mail: "info@fiestacabs.com",
            mapLink: "https://maps.app.goo.gl/iJzEyJBuqw5gPGdi6"
        },
        {
            title: "Registered Office",
            description: "No. 05, L.D.G. Road, Little Mount, Saidapet, Chennai - 600 015.",
            calls: ["044 - 2235 0000", "+91 80560 30000"],
            mail: "regd-office@fiestacabs.com",
            mapLink: "https://maps.app.goo.gl/JgYNwC3fE6eeZjLM7"
        }
    ];

    const branchOffices: OfficeInfo[] = [
        {
            title: "Bangalore",
            description: "No. 15/A, 2nd Floor, RJ Silks, Ramamurthy Nagar Main Road, Bangalore - 560 013.",
            calls: ["080 - 4124 5555", "+91 95133 33642"],
            mail: "bangalore@fiestacabs.com",
            mapLink: "https://maps.app.goo.gl/GPb8QGLZcnGrUpsS7"
        },
        {
            title: "Mumbai",
            description: "115/1st Floor, ACME Industrial Park, Goregaon East, Mumbai - 400 063.",
            calls: ["+91 76780 16252"],
            mail: "mumbai@fiestacabs.com",
            mapLink: "https://maps.app.goo.gl/hRzXwzYehaateDti7"
        },
        {
            title: "Hyderabad",
            description: "G-1/12102, 1st Floor, Sri Sai Colony, Kanakadurga Temple, Shaikpet, Hyderabad, Telangana 500008",
            calls: ["+91 91520 12020"],
            mail: "hyderabad@fiestacabs.com",
            mapLink: "https://maps.app.goo.gl/XE5QtytQx78EJCjs7"
        },
        {
            title: "Mahindra World City",
            description: "26, Shanthivedu Street, Near Mahindra World City, Anjur, Tamil Nadu - 603002",
            calls: ["+91 7338876007"],
            mail: "mwc@fiestacabs.com",
            mapLink: "https://maps.app.goo.gl/7sreBh2Y777LipL46"
        },
        {
            title: "Hosur (Tamil nadu)",
            description: "No 232/1, Goundar Thottam, Thorapalli Agraharam, Hosur-635109",
            calls: ["+91 91235 37330"],
            mail: "hosur@fiestacabs.com",
            mapLink: "https://maps.app.goo.gl/xMG8HDRK2Ux2Y9vz9"
        },
        {
            title: "Gurgaon",
            description: "H-16/3 127, Gautam Bhavan Arcade, Graham Lab-1, Gurgaon 122022",
            calls: ["+91 11444 04443"],
            mail: "north-region@fiestacabs.com",
            mapLink: "https://maps.app.goo.gl/Cz8fyv8PDHfdUUiM6"
        },
        {
            title: "Pune",
            description: "Nicho Facade, Office No. 204, 2nd Floor 682 Road, Plot Number 26 & 27, Sanewadi Aundh, Gaon, Pune - 411007",
            calls: ["+91 80560 97010"],
            mail: "pune@fiestacabs.com",
            mapLink: "https://maps.app.goo.gl/S439Q7RD5yHzxxQN7"
        },
        {
            title: "Kolkata",
            description: "84/H/2, Dumarao Draster Road, Kolkata, West Bengal - 700 015",
            calls: ["+91 80560 30000"],
            mail: "east-region@fiestacabs.com",
            mapLink: "https://maps.app.goo.gl/8syBrMdSTp4fERnr7"
        },
        {
            title: "Oragadam (Kanchipuram)",
            description: "No. 44, Venkatapuram - Vallam Road, Oragadam Junction, Opp to Apollo Tyres, Chengalpattu, Kanchipuram - 602 105",
            calls: ["+91 73388 76010"],
            mail: "oragadam@fiestacabs.com",
            mapLink: "https://maps.app.goo.gl/AXH4hubFwTsP7kL46"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-standard mx-auto px-4">
                {/* Main Offices Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Main Offices</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {mainOffices.map((office, idx) => (
                            <OfficeCard key={idx} office={office} />
                        ))}
                    </div>
                </div>

                {/* Branch Offices Section */}
                <div>
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Branch Offices</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {branchOffices.map((office, idx) => (
                            <OfficeCard key={idx} office={office} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeLocations;
