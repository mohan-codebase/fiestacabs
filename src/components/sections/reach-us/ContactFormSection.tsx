import ReachUsHero from "./ReachUsHero";
import ContactForm from "../../../components/common/ContactForm";
import Image from "next/image";

const ContactFormSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-[0_16px_36px_rgba(15,23,42,0.08)] border border-slate-100 p-6 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                        {/* Map/visual */}
                        <div className="w-full">
                            <div className="relative w-full h-full min-h-[520px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                                <Image
                                    src="/images/reach-us/WhatsApp-Image-2026-01-27-at-11.09.32-AM.jpeg"
                                    alt="Pan India presence map"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Form */}
                        <ContactForm 
                            formSource="Reach Us Contact Form"
                            title="We Love to Hear From You"
                            buttonText="Submit"
                            containerClassName="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-2xl flex flex-col h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
