import Link from "next/link";
import ClientCategory from "../../components/sections/clients/ClientCategory";

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
        <main className="bg-white">
            <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden px-4 py-20 md:min-h-[488px] md:py-24">
                <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/clients/live/hero-bg.jpg')" }}></div>
                <div className="absolute inset-0 z-10 bg-black/60"></div>
                <div className="relative z-20 text-center">
                    <h1 className="text-4xl font-bold text-white md:text-5xl">Clients</h1>
                </div>
            </section>

            <section className="bg-[#ececec] px-4 py-12 md:py-14">
                <div className="mx-auto max-w-7xl">
                    <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-red-600">Clients</p>
                    <h2 className="mt-3 text-center text-4xl font-bold text-[#262626] md:text-[46px]">Our Partners and Supports</h2>

                    <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
                        <Link
                            href="#Mainit"
                            className="bg-red-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#cb1b22]"
                        >
                            IT Clients
                        </Link>
                        <Link
                            href="#Manu"
                            className="bg-red-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#cb1b22]"
                        >
                            Manufacturing Clients
                        </Link>
                        <Link
                            href="#education1"
                            className="bg-red-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#cb1b22]"
                        >
                            Educational Institution
                        </Link>
                        <Link
                            href="#Banking"
                            className="bg-red-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#cb1b22]"
                        >
                            Banking Clients
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-[#ececec] pb-16">
                <ClientCategory id="Mainit" title="IT Clients" clients={itClients} />
                <ClientCategory id="Manu" title="Manufacturing Clients" clients={manufacturingClients} />
                <ClientCategory id="education1" title="Educational Institution" clients={educationClients} />
                <ClientCategory id="Banking" title="Banking Clients" clients={bankingClients} />
            </section>

            <section className="relative mt-10 overflow-hidden px-4 py-14 md:py-16">
                <div className="absolute inset-0">
                    <div className="h-full w-full bg-cover bg-[position:35%_0%] md:bg-[position:0_60%]" style={{ backgroundImage: "url('/images/clients/live/cta-bg.jpg')" }}></div>
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="max-w-2xl md:ml-auto md:max-w-xl">
                        <h2 className="text-3xl font-bold text-white md:text-4xl">Reach Your Destination Safe and on Time, Every Time</h2>
                        <p className="mt-5 leading-relaxed text-gray-200">
                            Fiesta operates with the soul objective of transporting its customers to their destinations on time, every time. We maintain a fleet
                            of latest vehicles which operate with maximum efficiency due to the excellent maintenance and periodic service.
                        </p>
                        <Link
                            href="/reach-us"
                            className="mt-7 inline-block rounded-md bg-red-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                        >
                            Contact Now
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
