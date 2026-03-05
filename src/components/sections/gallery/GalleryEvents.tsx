"use client";

import GallerySlider from "../../common/GallerySlider";

const events = [
    {
        title: "Grand Unveiling: Introducing Our All-New Electric Vehicle\nThe Future of Smart Mobility Begins Now!",
        description: "Fiesta has unlocked another milestone in smart mobility with the launch of our new fleet of electric cars! Designed to drive a cleaner, greener future, this launch underscores our commitment to innovation and sustainability. Here’s to embracing electric rides and a brighter, more sustainable tomorrow!",
        images: [
            "/images/gallery/live/optimized-img-1.avif",
            "/images/gallery/live/optimized-img-2.avif",
            "/images/gallery/live/optimized-img-3.avif",
            "/images/gallery/live/optimized-img-4.avif",
            "/images/gallery/live/optimized-img-5.avif",
            "/images/gallery/live/optimized-img-6.avif",
            "/images/gallery/live/optimized-img-7.avif",
            "/images/gallery/live/optimized-img-9.avif",
            "/images/gallery/live/optimized-img-10.avif",
            "/images/gallery/live/optimized-img-11.avif",
            "/images/gallery/live/optimized-img-12.avif",
            "/images/gallery/live/optimized-img-13.avif",
        ],
        showDots: true,
        pauseOnHover: false,
        bgColor: "bg-[#FFEEEE]",
    },
    {
        title: "25th Anniversary Client Meet at Westin",
        description: "Fiesta proudly celebrated its 25th anniversary at The Westin Hotel, bringing together all our valued stakeholders. With a legacy of excellence, we continue to lead the way in employee transportation solutions. Our commitment to safety, reliability, and innovation drives us to serve clients across India. Here's to 25 years of trusted journeys and many more to come!",
        images: [
            "/images/gallery/live/6.jpg",
            "/images/gallery/live/1.jpg",
            "/images/gallery/live/3-1.jpg",
            "/images/gallery/live/4.jpg",
            "/images/gallery/live/5.jpg",
            "/images/gallery/live/8.jpg",
            "/images/gallery/live/9-1.jpg",
            "/images/gallery/live/20.jpg",
        ],
        showDots: true,
        pauseOnHover: false,
        bgColor: "bg-[#FFEEEE]",
    },
    {
        title: "Training Program at Land Mark Pallava - Beach Resort",
        description: "The Fiesta Family kicked off the New Year with a two-day residential training program at Land Mark Pallava Beach Resort on \"Managing Performance in the 21st Century,\" led by renowned trainer Shri S.G. Apte of Gapset Consultancy, Pune. Around 20 participants from the Executive and Middle Management teams attended, gaining insights to enhance their performance and expand Fiesta's horizons.",
        images: [
            "/images/gallery/live/08-2.jpg",
            "/images/gallery/live/06-2.jpg",
            "/images/gallery/live/03-2.jpg",
        ],
        showDots: false,
        pauseOnHover: false,
        bgColor: "bg-[#FFEEEE]",
    },
    {
        title: "Mahindra & Mahindra XUV 700 Launching Event - Rewards and Recognition held on Chennai",
        description: "",
        images: [
            "https://fiestacabs.com/wp-content/uploads/2024/11/01.jpg",
            "https://fiestacabs.com/wp-content/uploads/2024/11/02.jpg",
            "https://fiestacabs.com/wp-content/uploads/2024/11/03.jpg",
            "https://fiestacabs.com/wp-content/uploads/2024/11/04-1024x640.jpg",
            "https://fiestacabs.com/wp-content/uploads/2024/11/05.jpg",
            "https://fiestacabs.com/wp-content/uploads/2024/11/08.jpg",
            "https://fiestacabs.com/wp-content/uploads/2024/11/09.jpg",
            "https://fiestacabs.com/wp-content/uploads/2024/11/11-1-1024x640.jpg",
        ],
        showDots: true,
        pauseOnHover: false,
        bgColor: "bg-[#FFEEEE]",
    },
    {
        title: "Pongal Celebration at Fiesta Chennai Branch",
        description: "",
        images: [
            "https://fiestacabs.com/wp-content/uploads/2024/11/07-1.jpg",
            "https://fiestacabs.com/wp-content/uploads/2024/11/05-1.jpg",
            "https://fiestacabs.com/wp-content/uploads/2024/11/06-1.jpg",
            "https://fiestacabs.com/wp-content/uploads/2024/11/03-1.jpg",
            "https://fiestacabs.com/wp-content/uploads/2024/11/04-1.jpg",
            "https://fiestacabs.com/wp-content/uploads/2024/11/02-1.jpg",
        ],
        showDots: true,
        pauseOnHover: false,
        bgColor: "bg-[#FFEEEE]",
    },
];

const GalleryEvents = () => {
    return (
        <div className="w-full">
            {events.map((event, index) => (
                <section key={index} className={`py-16 md:py-24 ${event.bgColor} relative`}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        {/* Header */}
                        <div className="text-center max-w-4xl mx-auto mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight whitespace-pre-line">
                                {event.title}
                            </h2>
                            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                                {event.description}
                            </p>
                        </div>

                        {/* Image Slider */}
                        <GallerySlider
                            images={event.images}
                            title={event.title}
                            showDots={event.showDots}
                            pauseOnHover={event.pauseOnHover}
                        />
                    </div>
                </section>
            ))}
        </div>
    );
};

export default GalleryEvents;
