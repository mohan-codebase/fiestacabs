import Link from "next/link";
import ClientCategory from "../../components/sections/clients/ClientCategory";
import Button from "../../components/common/Button";
import Image from "next/image";

export const metadata = {
    title: "Clients - Fiesta Smart Mobility",
    description:
        "Fiesta Smart Mobility is proud to serve a diverse range of clients across various industries including IT, Manufacturing, Education, and Banking.",
};

const itClients = [
    { name: "RITTAL", image: "/images/clients/it/rittal.png" },
    { name: "Merck", image: "/images/clients/it/merck.png" },
    { name: "MATHCO", image: "/images/clients/it/mathco.png" },
    { name: "Mantra", image: "/images/clients/it/mantra.png" },
    { name: "Groupon", image: "/images/clients/it/groupon.png" },
    { name: "Grant Thornton", image: "/images/clients/it/grant-thornton.png" },
    { name: "Gen", image: "/images/clients/it/gen.png" },
    { name: "Comcast", image: "/images/clients/it/comcast-1.png" },
    { name: "Cognizant", image: "/images/clients/it/cognizant.png" },
    { name: "Amazon", image: "/images/clients/it/amazon.png" },
    { name: "Walmart", image: "/images/clients/it/walmart.png" },
    { name: "Walmart Global Tech", image: "/images/clients/it/walmart-global-tech-1.png" },
    { name: "Vertex", image: "/images/clients/it/vertex-1.png" },
    { name: "Tristha", image: "/images/clients/it/tristha.png" },
    { name: "Thirdware", image: "/images/clients/it/thirdwave.png" },
    { name: "Technosoft", image: "/images/clients/it/technosoft.png" },
    { name: "TCS", image: "/images/clients/it/tcs.png" },
    { name: "Tavant", image: "/images/clients/it/tavant.png" },
    { name: "Tata", image: "/images/clients/it/tata.png" },
    { name: "Shobiz", image: "/images/clients/it/shobiz.png" },
    { name: "BIS", image: "/images/clients/it/bis.png" },
    { name: "Bindz", image: "/images/clients/it/bindz.png" },
    { name: "Omega Healthcare", image: "/images/clients/it/omega-healthcare.png" },
    { name: "Infosys", image: "/images/clients/it/infosys.png" },
    { name: "Hexaware", image: "/images/clients/it/hexaware.png" },
    { name: "Symantec", image: "/images/clients/it/symantec.png" },
    { name: "Tata Communications", image: "/images/clients/it/tata-communications.png" },
    { name: "Huawei", image: "/images/clients/it/huawei.png" },
];

const manufacturingClients = [
    { name: "Aditya Birla", image: "/images/clients/manufacturing/aditya-birla.png" },
    { name: "Shriram Properties", image: "/images/clients/manufacturing/shriram-properties.png" },
    { name: "Saint-Gobain", image: "/images/clients/manufacturing/saint-gobain-1.png" },
    { name: "Rico", image: "/images/clients/manufacturing/rico.png" },
    { name: "Resmed", image: "/images/clients/manufacturing/resmed.png" },
    { name: "Praxair", image: "/images/clients/manufacturing/praxair.png" },
    { name: "Mahindra", image: "/images/clients/manufacturing/mahindra-1.png" },
    { name: "Loreal", image: "/images/clients/manufacturing/loreal.png" },
    { name: "Gyproc", image: "/images/clients/manufacturing/gyproc.png" },
    { name: "GGS", image: "/images/clients/manufacturing/ggs.png" },
    { name: "FLSmidth", image: "/images/clients/manufacturing/flsmidth.png" },
    { name: "Cello Furniture", image: "/images/clients/manufacturing/cello-furniture.png" },
    { name: "Bharat Fih", image: "/images/clients/manufacturing/bharat-fih.png" },
    { name: "Bosch", image: "/images/clients/manufacturing/bosch.png" },
    { name: "Apollo Tyres", image: "/images/clients/manufacturing/apollo-tyres.png" },
    { name: "Zydus", image: "/images/clients/manufacturing/zydus.png" },
    { name: "Ashok Leyland", image: "/images/clients/manufacturing/ashok-leyland.png" },
    { name: "Yamaha", image: "/images/clients/manufacturing/yamaha.png" },
    { name: "Hitachi", image: "/images/clients/manufacturing/hitachi.png" },
];

const educationClients = [
    { name: "Shiv Nadar", image: "/images/clients/education/shiv-nadar.png" },
    { name: "SSN", image: "/images/clients/education/ssn-1.png" },
];

const bankingClients = [
    { name: "Wells Fargo", image: "/images/clients/banking/wells-fargo-2.png" },
    { name: "Sundaram Finance", image: "/images/clients/banking/sundaram-finance.png" },
    { name: "Fiserv", image: "/images/clients/banking/fiserv-1.png" },
    { name: "Citi", image: "/images/clients/banking/citi-1.png" },
];

export default function ClientsPage() {
    return (
        <main className="bg-[#f7f7f9]">
            {/* Hero - keep simple like current design */}
            <section className="relative overflow-hidden">
                <Image
                    src="/images/clients/live/hero-bg.jpg"
                    alt="Clients"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative z-10 flex min-h-[420px] md:min-h-[520px] items-center justify-center px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)]">
                        Clients
                    </h1>
                </div>
            </section>

            {/* Category quick links */}
            <section className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-wrap gap-3">
                    <Link href="#Mainit" className="px-4 py-2 rounded-full bg-[#EC2028] text-white text-sm font-semibold hover:bg-[#c51c24] transition-colors">
                        IT & Digital
                    </Link>
                    <Link href="#Manu" className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow-sm hover:border-[#EC2028] transition-colors">
                        Manufacturing & Industrial
                    </Link>
                    <Link href="#education1" className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow-sm hover:border-[#EC2028] transition-colors">
                        Education
                    </Link>
                    <Link href="#Banking" className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow-sm hover:border-[#EC2028] transition-colors">
                        Banking & Finance
                    </Link>
                </div>
            </section>

            {/* Client grids */}
            <section className="pb-16">
                <ClientCategory id="Mainit" title="IT & Digital" clients={itClients} />
                <ClientCategory id="Manu" title="Manufacturing & Industrial" clients={manufacturingClients} />
                <ClientCategory id="education1" title="Education" clients={educationClients} />
                <ClientCategory id="Banking" title="Banking & Finance" clients={bankingClients} />
            </section>

        </main>
    );
}
