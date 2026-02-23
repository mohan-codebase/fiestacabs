import React from "react";

const tableData = [
    {
        category: "Premium Sedans",
        purpose: "Airport transfers, client meetings",
        features: "Clean interiors, trained chauffeurs, real time tracking"
    },
    {
        category: "Luxury Sedans",
        purpose: "VIP guests, corporate events",
        features: "Professional drivers, comfortable seating, elegant experience"
    },
    {
        category: "SUVs & MUVs",
        purpose: "Outstation trips, team movement",
        features: "Strong performance, more space, well maintained vehicles"
    },
    {
        category: "Compact Cars",
        purpose: "Short rides, employee travel",
        features: "Budget friendly, fuel efficient, hassle free rides"
    },
    {
        category: "Chauffeur Driven Cabs",
        purpose: "Business purposes",
        features: "Professional conduct, smooth travel, smart scheduling"
    }
];

const CorporateFleetTable = () => {
    return (
        <section className="py-16 bg-white shrink">
            <div className="max-w-[1000px] mx-auto px-4 md:px-8">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
                    Fleet Options at Fiesta: A Quick Comparison
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-left">
                        <thead>
                            <tr className="bg-white">
                                <th className="border border-gray-300 px-6 py-4 text-center font-bold text-gray-900 w-[25%] text-[15px]">Category</th>
                                <th className="border border-gray-300 px-6 py-4 text-center font-bold text-gray-900 w-[30%] text-[15px]">Purpose</th>
                                <th className="border border-gray-300 px-6 py-4 text-center font-bold text-gray-900 w-[45%] text-[15px]">Fiesta Features</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, idx) => (
                                <tr key={idx} className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-300 px-6 py-4 text-gray-800 text-[14px] font-medium">{row.category}</td>
                                    <td className="border border-gray-300 px-6 py-4 text-gray-700 text-[14px]">{row.purpose}</td>
                                    <td className="border border-gray-300 px-6 py-4 text-gray-700 text-[14px]">{row.features}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
};

export default CorporateFleetTable;
