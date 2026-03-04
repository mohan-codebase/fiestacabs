import Image from "next/image";

const MeasurableBenefits = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            Business Travel: Measurable Benefits for Companies
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                Opting for a structured corporate car hire has immense advantages over relying on ad hoc transportation arrangements. Firstly, it offers financial predictability. Our corporate car rental rates are transparent and billing is simplified, which means your finance team spends less time auditing travel expenses.
                            </p>
                            <p>
                                Secondly, it reflects a genuine concern for employee welfare. By providing comfortable, reliable transportation, you boost morale and productivity. Our rent car corporate options are designed to ensure that your staff reaches the workplace refreshed and leaves safely after a long day. Overall, our solutions provide a seamless blend of cost effectiveness, luxury, and reliability. By addressing the multifaceted challenges of corporate mobility, Fiesta sets a benchmark for rent corporate cars services making us the ideal travel partner for your business in Bangalore.
                            </p>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2">
                        <Image
                            src="/images/corporate-car-rental-in-bangalore/unnamed-8.jpg"
                            alt="Measurable Benefits for Companies"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeasurableBenefits;
