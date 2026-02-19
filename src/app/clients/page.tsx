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
    { name: "Comcast", image: "/images/clients/it/comcast.png" },
    { name: "Cognizant", image: "/images/clients/it/cognizant.png" },
    { name: "Amazon", image: "/images/clients/it/amazon.png" },
    { name: "Walmart", image: "/images/clients/it/walmart.png" },
    { name: "Walmart Global Tech", image: "/images/clients/it/walmart-global-tech.png" },
    { name: "Vertex", image: "/images/clients/it/vertex.png" },
    { name: "Tristha", image: "/images/clients/it/tristha.png" },
    { name: "Thirdware", image: "/images/clients/it/thirdware.png" },
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
    { name: "Saint-Gobain", image: "/images/clients/manufacturing/saint-gobain.png" },
    { name: "Rico", image: "/images/clients/manufacturing/rico.png" },
    { name: "Resmed", image: "/images/clients/manufacturing/resmed.png" },
    { name: "Praxair", image: "/images/clients/manufacturing/praxair.png" },
    { name: "Mahindra", image: "/images/clients/manufacturing/mahindra.png" },
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
    { name: "SSN", image: "/images/clients/education/ssn.png" },
];

const bankingClients = [
    { name: "Wells Fargo", image: "/images/clients/banking/wells-fargo.png" },
    { name: "Sundaram Finance", image: "/images/clients/banking/sundaram-finance.png" },
    { name: "Fiserv", image: "/images/clients/banking/fiserv.png" },
    { name: "Citi", image: "/images/clients/banking/citi.png" },
    { name: "TVS Sundaram", image: "/images/clients/banking/tvs-sundaram.png" },
];

const hotelClients = [
    { name: "Novotel", image: "/images/clients/hotels/novotel.png" },
    { name: "Mercure", image: "/images/clients/hotels/mercure.png" },
    { name: "Ibis", image: "/images/clients/hotels/ibis.png" },
    { name: "Holiday Inn", image: "/images/clients/hotels/holiday-inn.png" },
    { name: "Turyaa", image: "/images/clients/hotels/turyaa.png" },
];

const airlineClients = [
    { name: "Air Asia", image: "/images/clients/airlines/air-asia.png" },
    { name: "Star Air", image: "/images/clients/airlines/star-air.png" },
];

export default function ClientsPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gray-900 text-white">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/contact-banner.jpg')" }} // Using a placeholder or existing banner
                ></div>
                <div className="relative z-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Clients</h1>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base">
                        <Link href="/" className="hover:text-red-500 transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-red-500">Clients</span>
                    </div>
                </div>
            </section>

            {/* Filter/Navigation Section */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Partners and Supports</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="#it-clients"
                            className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-medium"
                        >
                            IT Clients
                        </Link>
                        <Link
                            href="#manufacturing-clients"
                            className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-medium"
                        >
                            Manufacturing Clients
                        </Link>
                        <Link
                            href="#educational-institution"
                            className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-medium"
                        >
                            Educational Institution
                        </Link>
                        <Link
                            href="#banking-clients"
                            className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-medium"
                        >
                            Banking Clients
                        </Link>
                        <Link
                            href="#hotels"
                            className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-medium"
                        >
                            Hotels
                        </Link>
                        <Link
                            href="#airlines"
                            className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-medium"
                        >
                            Airlines
                        </Link>
                    </div>
                </div>
            </section>

            {/* Client Categories */}
            <ClientCategory
                id="it-clients"
                title="IT Clients"
                clients={itClients}
                enableSlider={true}
                sliderSpeed={2500}
                reverseDirection={true}
            />
            <ClientCategory
                id="manufacturing-clients"
                title="Manufacturing Clients"
                clients={manufacturingClients}
                enableSlider={true}
                sliderSpeed={8000}
                reverseDirection={false}
            />
            <ClientCategory
                id="educational-institution"
                title="Educational Institution"
                clients={educationClients}
                enableSlider={false}
            />
            <ClientCategory
                id="banking-clients"
                title="Banking Clients"
                clients={bankingClients}
                enableSlider={true}
                sliderSpeed={2500}
                reverseDirection={true}
            />
            <ClientCategory
                id="hotels"
                title="Hotels"
                clients={hotelClients}
                enableSlider={true}
                sliderSpeed={3000}
                reverseDirection={false}
            />
            <ClientCategory
                id="airlines"
                title="Airlines"
                clients={airlineClients}
                enableSlider={false}
            />

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Reach Your Destination Safe and on Time, Every Time
                    </h2>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Fiesta operates with the soul objective of transporting its customers to their
                        destinations on time, every time. We maintain a fleet of latest vehicles which operate
                        with maximum efficiency due to the excellent maintenance and periodic service.
                    </p>
                    <Link
                        href="/reach-us"
                        className="inline-block px-8 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
                    >
                        Contact Now
                    </Link>
                </div>
            </section>
        </main>
    );
}
