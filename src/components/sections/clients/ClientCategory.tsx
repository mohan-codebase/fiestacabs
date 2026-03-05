import Image from "next/image";

interface Client {
    name: string;
    image: string;
}

interface ClientCategoryProps {
    id: string;
    title: string;
    clients: Client[];
}

const ClientCategory = ({ id, title, clients }: ClientCategoryProps) => {
    return (
        <section id={id} className="border-t border-[#dddddd] py-16">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="relative mb-12 pb-4 text-center text-3xl font-bold text-[#222222] after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-16 after:-translate-x-1/2 after:bg-red-600">
                    {title}
                </h2>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-5 xl:grid-cols-6">
                    {clients.map((client) => (
                        <div
                            key={`${id}-${client.name}`}
                            className="flex h-40 items-center justify-center bg-white p-4 shadow-[0_10px_18px_rgba(0,0,0,0.08)]"
                        >
                            <div className="relative h-full w-full">
                                <Image
                                    src={client.image}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 20vw, 16vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientCategory;
