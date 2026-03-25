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
    <div className="bg-white p-7 rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.06)] border border-slate-100 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(15,23,42,0.1)] transition">
        <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-slate-900">{office.title}</h3>
            <span className="px-3 py-1 text-xs font-semibold  btn-animated/10 text-[#EC2028] rounded-full border border-[#EC2028]/20">
                On map
            </span>
        </div>
        <p className="text-slate-600 text-sm mb-5 leading-relaxed">
            {office.description}
        </p>
        <div className="space-y-2 mb-5">
            {office.calls.map((call, idx) => (
                <p key={idx} className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <span className="text-[#EC2028] font-bold">Call:</span>
                    <Link href={`tel:${call.replace(/[^0-9+]/g, '')}`} className="hover:text-[#EC2028] transition-colors">
                        {call}
                    </Link>
                </p>
            ))}
            {office.mail && (
                <p className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <span className="text-[#EC2028] font-bold">Mail:</span>
                    <Link href={`mailto:${office.mail}`} className="hover:text-[#EC2028] transition-colors">
                        {office.mail}
                    </Link>
                </p>
            )}
        </div>
        <div className="mt-4 rounded-lg overflow-hidden h-40 border border-slate-200">
            <iframe
                title={`Map of ${office.title}`}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(office.description)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
            ></iframe>
        </div>
    </div>
);

const OfficeLocations = () => {
    const mainOffices: OfficeInfo[] = [
        {
            title: "Head Office",
            description: "523, Vinayagapuram Main Road,Viduthalai Nagar 1st St, S. Kolathur, Chennai 600 129.",
            calls: ["044 - 2220 0095", "+91 96004 37002"],
            mail: "info@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/iJzEyJBuqw5gPGdi6"
        },
        {
            title: "Registered Office",
            description: "No. 99, L D G Road, Little Mount, Saidapet, Chennai - 600 015.",
            calls: ["044 - 223 - 00995", "+91 88070 10095"],
            mail: "rac@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/JgYNwC3fE6eeZjLM7"
        }
    ];

    const branchOffices: OfficeInfo[] = [
        {
            title: "Bangalore",
            description: "No. 45/A, 2nd Floor, RJ Elite, Ramamurthy Nagar Main Road, Bengaluru - 560 016.",
            calls: ["080 - 4124 8273", "+91 99164 54848"],
            mail: "racblr@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/GPb8QGLZcnGrUpsS7"
        },
        {
            title: "Mumbai",
            description: "# 109, 1st Floor, ACME Industrial Park, Goregaon East, Mumbai - 400 063.",
            calls: ["+91 74188 85492"],
            mail: "sales_mumbai@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/hRzXwzYehaateDti7"
        },
        {
            title: "Hyderabad",
            description: "8-1-43/1/B, 1st Floor Satya Colony, Opp: Hanuman Temple, Shaikpet, Golconda, Hyderabad- 500008.",
            calls: ["+91 91001 09864"],
            mail: "sales_hyd@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/XE5QtytQx78EJCjs7"
        },
        {
            title: "Mahindra World City",
            description: "58, Bharathiyar Street, near Mcity, Mahindra World City, Veerapuram, Tamil Nadu - 603002",
            calls: ["+91 73059 80807"],
            mail: "m_city@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/7sreBh2Y777LipL46"
        },
        {
            title: "Hosur (Tamil nadu)",
            description: "No.3/36/1, Gandhi Nagar, Thorapalli Agraharam, Hosur-635 109.",
            calls: ["+91 733 877 7076"],
            mail: "bts_hosur@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/xMG8HDRK2Ux2Y9vz9"
        },
        {
            title: "Gurgaon",
            description: "H-103 GF, Sushant Shopping Arcade, Sushant Lok-1, Gurgaon-122009",
            calls: ["+91 81488 22633"],
            mail: "sales_gurgaon@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/Cz8fyv8PDHfdUUiM6"
        },
        {
            title: "Pune",
            description: "Niche Facade, Office No. 204, 2nd Floor 232 Road, Plot Number: 26 & 27 Survey Number, Sakore Nagar, Pune - 411014.",
            calls: ["+91 82913 82323"],
            mail: "sales_pune@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/S439Q7RD5yHzxxQN7"
        },
        {
            title: "Kolkata",
            description: "34/1Q, Ballygunge Circular Road, Kolkata, West Bengal - 700 019.",
            calls: ["+91 63850 50605"],
            mail: "sales_kolkata@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/8syBrMdSTp4fERnr7"
        },
        {
            title: "Oragadam (Kanchipuram)",
            description: "No. 44, Vandalur - Walajabad Road, Oragadam Junction, Opp. to Apollo Tyres, Oragadam, Kanchipuram - 602 105.",
            calls: ["+91 98840 13783"],
            mail: "rac_ord@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/AXH4hubFwTsP7kL46"
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 space-y-14">
                <div className="space-y-3 text-center">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Our offices</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Find us near your routes</h2>
                    <p className="text-slate-600 text-sm md:text-base max-w-3xl mx-auto">
                        Pan-India presence with local ops teams who know the roads, shifts, and compliance for each city.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mainOffices.map((office, idx) => (
                        <OfficeCard key={idx} office={office} />
                    ))}
                </div>

                <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">Branch offices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
