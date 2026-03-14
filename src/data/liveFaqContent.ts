export interface RouteFAQItem {
    question: string;
    answer: string;
}

export const LIVE_ROUTE_FAQS: Record<string, RouteFAQItem[]> = {
    "/": [
        {
            "question": "Do you offer electric vehicle (EV) transportation?",
            "answer": "Yes, our EV fleet ensures eco-friendly, comfortable, and quiet rides, contributing to a sustainable future while delivering top-notch service."
        },
        {
            "question": "How do you ensure employee safety during transit?",
            "answer": "We prioritize safety through GPS-enabled vehicles, real-time tracking, verified drivers, and 24/7 customer support for a secure commuting experience."
        },
        {
            "question": "What makes your service stand out from competitors?",
            "answer": "With over 25 years of industry experience, a diverse vehicle fleet, professional drivers, and a strong focus on safety and punctuality, we offer unmatched reliability and comfort."
        },
        {
            "question": "How do you handle last-minute transport requests or schedule changes?",
            "answer": "We offer flexible scheduling and responsive customer support to accommodate last-minute transport requests or changes, ensuring uninterrupted service."
        },
        {
            "question": "How do you ensure vehicle maintenance and cleanliness?",
            "answer": "Some services offer on-demand backups or rescheduling options depending on location and availability."
        },
        {
            "question": "What types of businesses can use your transport services?",
            "answer": "We cater to businesses of all sizes, including IT firms, BPOs, manufacturing companies, and other organizations requiring dependable employee transportation solutions."
        }
    ],
    "/corporate-car-rental-service": [
        {
            "question": "Why do companies prefer a dedicated corporate car rental service instead of using random city taxis?",
            "answer": "Companies prefer a structured corporate car rental service because it ensures safe vehicles, trained chauffeurs, timely arrivals, clear pricing and reliable support. This stability reduces stress for managers and improves overall employee travel experience."
        },
        {
            "question": "How does Fiesta Smart Mobility support airport transfers for corporate clients across different cities?",
            "answer": "Fiesta uses a strong fleet present in multiple cities, trained chauffeurs and a tracking system to manage every airport transfer. Corporate clients get smooth pickups, fixed pricing and punctual service without delays or confusion."
        },
        {
            "question": "What should businesses check before choosing corporate car rentals for long-term corporate travel?",
            "answer": "Businesses should check vehicle quality, pricing transparency, chauffeur training, back-up support, outstation readiness and technology adoption. These factors help companies stay safe from last-minute problems, hidden charges and unreliable service."
        },
        {
            "question": "Can Fiesta handle large corporate events that require many rental cars at the same time?",
            "answer": "Yes, Fiesta manages large events by deploying additional vehicles, planning routes early, assigning a dedicated team and maintaining support during the entire event. This helps companies reduce stress during peak travel hours and heavy gatherings."
        },
        {
            "question": "Why are flexible rental plans important for companies with frequent schedule changes?",
            "answer": "Flexible rental plans allow teams to adjust routes, timings and car types without major interruption. Fiesta understands this and builds schedules that support travel patterns, urgent meetings and sudden changes that come with daily corporate travel."
        }
    ],
    "/employee-transport-services": [
        {
            "question": "What is the most cost-effective employee transportation option?",
            "answer": "Shared shuttle or bus services with fixed routes are often the most economical for larger teams."
        },
        {
            "question": "Can transport services handle night shift schedules?",
            "answer": "Yes, many providers offer shift-based scheduling and even have dedicated night shift vehicles for all trips ."
        },
        {
            "question": "How do I track employee vehicles in real-time?",
            "answer": "Most services now offer real-time tracking via mobile apps for both employees and admins."
        },
        {
            "question": "Are there safety features for female employees?",
            "answer": "Yes, many providers offer OTP-based boardings, driver verification, and panic buttons for added employee safety."
        },
        {
            "question": "What if an employee misses their pickup?",
            "answer": "Some services offer on-demand backups or rescheduling options depending on location and availability."
        },
        {
            "question": "Can transport services be customized for different employee locations?",
            "answer": "Yes, many providers offer route optimization and flexible pickup/drop points based on employee addresses to ensure convenience and efficiency."
        }
    ],
    "/outstation-rides": [
        {
            "question": "Can we book cabs with a fixed pickup from airport?",
            "answer": "Yes. Share your guest's flight time, and we’ll track arrival. Our drivers wait at the airport gate and assist with luggage and the drop-off location."
        },
        {
            "question": "What happens if the driver is late?",
            "answer": "We send alerts if there’s any delay. Plus, we have a backup vehicle ready at a moment’s notice if there's an issue. No last-minute stress."
        },
        {
            "question": "How do I track the ride?",
            "answer": "Once booking is confirmed, you’ll get SMS/email with a live tracking link. You can monitor ride status in real-time."
        },
        {
            "question": "Is GST invoice available?",
            "answer": "Yes. All business rides come with a GST invoice. You can also set it to auto-email post every ride."
        },
        {
            "question": "Do we need to pay in cash?",
            "answer": "You can pay via bank transfer, UPI, wallet or link account to your corporate profile. Cash is also accepted if preferred."
        }
    ],
    "/shuttle-service": [
        {
            "question": "What is shuttle service?",
            "answer": "A shuttle service is a transportation option where a vehicle operates on a fixed route, usually between two or more locations, to pick up and drop off passengers at scheduled times."
        },
        {
            "question": "What is shuttle service in a job?",
            "answer": "In a job or workplace setting, shuttle service refers to company-arranged transportation that helps employees commute conveniently between their homes, offices, or nearby transit points."
        },
        {
            "question": "How do I become a good shuttle driver?",
            "answer": "To be a good shuttle driver, you need safe driving skills, punctuality, good communication, customer service etiquette, and knowledge of routes. Maintaining professionalism and ensuring passenger comfort are key."
        },
        {
            "question": "What is a shuttle service car?",
            "answer": "A shuttle service car is a vehicle—such as a van, SUV, or luxury car—used to transport individuals or groups between designated locations. These cars are comfortable, reliable, and often chauffeur-driven."
        },
        {
            "question": "What is airport shuttle service?",
            "answer": "An airport shuttle service is a transportation option that takes passengers to and from the airport. It helps travelers avoid parking hassles, ensures timely drop-offs/pickups, and offers a stress-free travel experience."
        },
        {
            "question": "Gate to Gate Connectivity",
            "answer": "Fiesta’s Gate to Gate employee transport service ensures end-to-end commuting coverage—from office main entries to outer gate pick-up points and vice versa. Our shuttle service routes are strategically planned to minimize walking distance within campuses and industrial parks, offering seamless shuttle bus connectivity even in large facilities. With fixed-time slots and convenient pick-up zones, employees enjoy a smoother, quicker, and more reliable journey every day."
        },
        {
            "question": "Customizable Routes and Time Slots",
            "answer": "No two organizations operate the same way. Fiesta works with your HR or operations team to design custom routes and designated points that align with employee work hours, shift patterns, and commute needs. Whether you need early morning pick-ups or late-night drops, we offer flexibility that suits your workflow."
        },
        {
            "question": "Comfortable, Reliable Commute",
            "answer": "Our fleet of well-maintained shuttle buses offers spacious seating, air conditioning, and a calm, clean environment—ideal for relaxing before or after a long day at work. Employees can ride to and from the office comfortably , making daily travel something to look forward to, rather than dread."
        },
        {
            "question": "Smart Tech, Seamless Booking",
            "answer": "Thanks to our smart mobility app , employees can book their ride with a few taps, track shuttle arrivals in real-time, and receive ride details on the go. Key booking features like route selection, live tracking, and cancellation options give users complete control over their commute."
        },
        {
            "question": "Advanced Safety Features",
            "answer": "Every Fiesta ride includes built-in security features such as real-time GPS tracking, SOS alerts , verified drivers, and ride details sharing with family or colleagues. Your team’s safety is never left to chance."
        },
        {
            "question": "Easy Payments and Corporate Integrations",
            "answer": "Integrate payments seamlessly with internet banking , Amazon Pay , and other digital wallets. We also offer enterprise billing for businesses looking for monthly invoicing options."
        }
    ],
    "/wedding-cars": [
        {
            "question": "Can we book multiple luxury car rentals for guests??",
            "answer": "Yes. You can rent different cars for each day based on your function or theme. Our long-duration plans are flexible and allow you to hire multiple vehicles for your event . You can book luxury vehicles for haldi, sangeet, wedding, and reception. If needed, we assign different models for different days. This allows for variety and cost control. You can opt for an executive-class sedan on Day 1, followed by a premium ultra-luxury vehicle for the main ceremony. Once booked, our backend stays connected with your team to provide a range of options . Even if plans change, we adjust with no stress to ensure you get the best deals ."
        },
        {
            "question": "What if the car breaks down midway?",
            "answer": "We plan for the unexpected. For every major city, we maintain backup vehicles. If a vehicle faces a mechanical issue, our team immediately dispatches a standby unit for you to hire. Guests are transferred quickly without long wait times. Our luxury fleet goes through pre-dispatch inspection to reduce such cases. Still, if anything happens, our coordination team acts fast. No matter if it's a premium MUV or a high-end sedan, we respond within minutes so your event continues smoothly."
        },
        {
            "question": "Are your drivers trained for VIP events?",
            "answer": "Yes. Each driver assigned to weddings or corporate functions receives specific training. They are briefed on guest etiquette, venue protocols, and silent driving expectations. This attention to detail matters for premium weddings or high-profile clients. Our drivers dress professionally, arrive early, and follow instructions from your coordination team. They're prepared to help with luggage, handle traffic, or simply hold an umbrella."
        },
        {
            "question": "Do you operate in small cities?",
            "answer": "Yes, we do. While our main fleet runs from major metros, we’ve handled bookings in tier-2 cities like Bhopal, Madurai, and Vijayawada. For weddings in remote destinations, we plan logistics early. Premium sedans or vintage vehicles may be relocated from nearby hubs. Our regional contacts help us effectively manage routes, permissions, and last-mile planning for any outstation tour ."
        },
        {
            "question": "How soon should we book?",
            "answer": "We recommend booking early, especially during peak wedding season. High-demand models like convertible cars or heritage-style sedans get reserved quickly , so we offer the best deals for early bookings . A 3 to 4 weeks lead gives better pricing, vehicle availability, and time for decoration planning. Even if dates are tentative, you can block your preferred models now and confirm later. Early booking keeps things flexible and stress-free."
        }
    ],
    "/premium-car-rentals": [
        {
            "question": "Do you offer electric vehicle (EV) transportation?",
            "answer": "Yes, our EV fleet ensures eco-friendly, comfortable, and quiet rides, contributing to a sustainable future while delivering top-notch service."
        },
        {
            "question": "How do you ensure employee safety during transit?",
            "answer": "We prioritize safety through GPS-enabled vehicles, real-time tracking, verified drivers, and 24/7 customer support for a secure commuting experience."
        },
        {
            "question": "What makes your service stand out from competitors?",
            "answer": "With over 25 years of industry experience, a diverse vehicle fleet, professional drivers, and a strong focus on safety and punctuality, we offer unmatched reliability and comfort."
        },
        {
            "question": "How do you handle last-minute transport requests or schedule changes?",
            "answer": "We offer flexible scheduling and responsive customer support to accommodate last-minute transport requests or changes, ensuring uninterrupted service."
        },
        {
            "question": "How do you ensure vehicle maintenance and cleanliness?",
            "answer": "Some services offer on-demand backups or rescheduling options depending on location and availability."
        },
        {
            "question": "What types of businesses can use your transport services?",
            "answer": "We cater to businesses of all sizes, including IT firms, BPOs, manufacturing companies, and other organizations requiring dependable employee transportation solutions."
        }
    ],
    "/employee-transportation-services-in-bangalore": [
        {
            "question": "What makes Fiesta’s employee transportation services in Bangalore reliable?",
            "answer": "Structured planning, well maintained vehicles, and real time GPS tracking ensure safe and timely commutes daily."
        },
        {
            "question": "Do you provide transportation services in multiple locations across Bangalore?",
            "answer": "Yes, our routes cover multiple pick ups and drops across the city and corporate hubs."
        },
        {
            "question": "How do employee transportation services improve productivity?",
            "answer": "A hassle free commute ensures employees arrive on time, refreshed, and ready for a productive day."
        },
        {
            "question": "Are trained drivers provided for all routes?",
            "answer": "Yes, we deploy only trained drivers and trained chauffeurs who prioritize punctuality and employee safety."
        },
        {
            "question": "Can companies request customized employee transportation solutions?",
            "answer": "Absolutely, we adapt routes and transportation services to meet the specific requirements of each organization."
        }
    ],
    "/wedding-cars-in-bangalore": [
        {
            "question": "How early should I book a wedding car in Bangalore?",
            "answer": "Booking 3-6 months in advance is recommended, especially during peak months from November to February."
        },
        {
            "question": "Are chauffeurs included with the wedding car rental?",
            "answer": "Yes. All vehicles come with professional drivers, trained and background-checked for safety and reliability."
        },
        {
            "question": "Are there hidden charges?",
            "answer": "No. Fiesta provides transparent pricing, covering fuel, driver allowances, and other costs."
        },
        {
            "question": "Which cars are popular for weddings in Bangalore?",
            "answer": "Luxury cars, SUVs, and vintage cars like Mercedes-Benz, Audi, and Rolls-Royce are widely chosen."
        },
        {
            "question": "Does Fiesta operate in other cities?",
            "answer": "Yes. Fiesta serves metro cities across India, providing luxury car rentals for weddings, special days, and destinations, ensuring every journey is safe, enjoyable, and leaves couples with pride."
        }
    ],
    "/employee-transport-services-in-hyderabad": [
        {
            "question": "What are the common issues staff face with shared cabs in peak hours?",
            "answer": "Staff may face traffic delays and crowded rides, but Fiesta’s well-maintained fleet and route planning help reduce waiting and stress."
        },
        {
            "question": "How does the cab deal with breakdowns during shift hours?",
            "answer": "Fiesta keeps backup vehicles ready and maintains all cabs regularly to handle any breakdown quickly."
        },
        {
            "question": "How could the transportation service handle last-minute ride changes from staff?",
            "answer": "Staff can request changes anytime, and Fiesta’s 24/7 support and shift-based scheduling ensure quick adjustments."
        },
        {
            "question": "How do staff check cab timing when shifts change?",
            "answer": "Staff can track their rides in real time using live GPS links provided after booking."
        },
        {
            "question": "How are emergencies managed during transport?",
            "answer": "Fiesta has a dedicated team available 24/7 to respond immediately to any emergency or safety concern."
        }
    ],
    "/wedding-car-rental-mumbai": [
        {
            "question": "Why should companies invest in structured employee transport services?",
            "answer": "Companies invest because it improves attendance, reduces delays, supports smoother workflow, and helps staff avoid travel stress that usually affects productivity every day."
        },
        {
            "question": "How do employee shuttle services help reduce commute time?",
            "answer": "Shuttle routes run on fixed schedules with planned pickup points. With smart routing and real-time updates, travel time becomes predictable even during heavy traffic."
        },
        {
            "question": "What features improve employee safety in transportation services?",
            "answer": "Safety increases with trained drivers, emergency support, monitoring tools, background checks, clear travel protocols, and round-the-clock support from operations teams."
        },
        {
            "question": "How do transportation solutions reduce company expenses?",
            "answer": "Cost reduces through shared rides, fuel savings, lower parking usage, route optimisation, professional management, and decreased personal vehicle reimbursements across teams."
        },
        {
            "question": "How does real time monitoring help transport operations?",
            "answer": "Monitoring tools track movement, measure delay patterns, improve control, and support better decision-making. This helps companies maintain steady service daily."
        }
    ],
    "/employee-transportation-services-in-mumbai": [
        {
            "question": "What makes employee transportation services in Mumbai essential?",
            "answer": "They reduce stress, ensure safety, and allow employees to arrive refreshed and ready for work."
        },
        {
            "question": "Do you provide staff transportation service across multiple locations?",
            "answer": "Yes, our extensive fleet supports multiple locations in Mumbai, Navi Mumbai, and other corporate complexes."
        },
        {
            "question": "How do you ensure employee safety during commutes?",
            "answer": "We conduct thorough background checks on drivers and enable GPS tracking for every assigned journey."
        },
        {
            "question": "Are the vehicles well maintained for daily commutes?",
            "answer": "Yes, all our vehicles undergo regular maintenance, ensuring a smooth ride and hassle free experience daily."
        },
        {
            "question": "Can Fiesta handle outstation travel or business trips?",
            "answer": "Yes, along with daily commutes, we also support businesses with outstation travel and corporate travel services."
        }
    ],
    "/shuttle-service-in-gurgaon": [
        {
            "question": "How are pick-up points decided near major landmarks?",
            "answer": "Pick-up points are strategically chosen near metro stations, petrol pumps, malls, and key landmarks like AIIMS and IGI Airport for easy access."
        },
        {
            "question": "Can companies request extra shuttles during peak days or corporate events in Gurgaon?",
            "answer": "Yes- companies can request extra shuttles in busy periods or for big events. Fiesta’s employee-transport team will scale up the fleet and run additional buses or vans to match the demand."
        },
        {
            "question": "Are there options for long-distance routes?",
            "answer": "Fiesta shuttles can run for longer routes, like Gurgaon to Delhi offices, with planned pick-up points and timing for comfort and punctuality."
        },
        {
            "question": "Can shuttles carry bags or office equipment along with employees?",
            "answer": "Employees can carry personal bags and light office equipment on board; shuttles are spacious and air-conditioned for convenience."
        },
        {
            "question": "Are there shuttle options for employees living outside of metro areas?",
            "answer": "Fiesta serves employees in distant zones like Sohna or Manesar with dedicated routes and fixed pick-up points for minimal waiting."
        }
    ],
    "/employee-transportation-services-in-pune": [
        {
            "question": "What are employee transportation services in Pune?",
            "answer": "They are structured transport solutions ensuring daily commutes remain safe, reliable, cost effective, and well coordinated."
        },
        {
            "question": "How do you ensure employee safety during travel?",
            "answer": "We enforce strict safety protocols, GPS tracking, and thorough driver verification for secure and dependable commutes."
        },
        {
            "question": "Are the vehicles well maintained for regular use?",
            "answer": "Yes, we operate a well maintained fleet of vehicles to ensure safe and smooth rides daily."
        },
        {
            "question": "Do you provide real time monitoring for routes?",
            "answer": "Yes, real time monitoring and tracking systems ensure accurate schedules and safe travel for all employees."
        },
        {
            "question": "Why should companies choose Fiesta in Pune?",
            "answer": "We combine cost effective solutions, reliable drivers, and efficient operations, supporting productivity and hassle free commutes."
        }
    ],
    "/shuttle-service-in-bangalore": [
        {
            "question": "How do companies pay for the shuttle - monthly or per trip?",
            "answer": "Companies pay monthly for the fiesta shuttle services, based on the number of employees and trips."
        },
        {
            "question": "How do they adjust routes to avoid Bangalore’s peak traffic?",
            "answer": "Fiesta’s system dynamically re‑routes shuttles in real time. They use live traffic data and known congestion spots to pick the fastest path."
        },
        {
            "question": "Can time slots be set for early morning or late evening office shifts?",
            "answer": "Fiesta allows shuttles to be scheduled according to exact office shift timings, such as 7:30 AM - 9:30 AM for morning shifts and 6:00 PM - 9:00 PM for evening shifts. The schedule ensures staff are picked up and dropped off on time."
        },
        {
            "question": "How are pick-up points decided near malls, petrol pumps, and metro stations in Bangalore?",
            "answer": "Fiesta’s pick‑up points are gate-to-gate, near office entrances, tech parks, metro stations, malls, petrol pumps, and residential clusters, making access easy and safe for employees."
        },
        {
            "question": "Can companies link shuttle billing with their HR or attendance system?",
            "answer": "Companies can link Fiesta’s shuttle billing with their HR attendance systems to get monthly invoices and sync transport cost data with employee attendance."
        }
    ],
    "/corporate-car-rental-in-mumbai": [
        {
            "question": "Why should companies invest in structured employee transport services?",
            "answer": "Companies invest because it improves attendance, reduces delays, supports smoother workflow, and helps staff avoid travel stress that usually affects productivity every day."
        },
        {
            "question": "How do employee shuttle services help reduce commute time?",
            "answer": "Shuttle routes run on fixed schedules with planned pickup points. With smart routing and real-time updates, travel time becomes predictable even during heavy traffic."
        },
        {
            "question": "What features improve employee safety in transportation services?",
            "answer": "Safety increases with trained drivers, emergency support, monitoring tools, background checks, clear travel protocols, and round-the-clock support from operations teams."
        },
        {
            "question": "How do transportation solutions reduce company expenses?",
            "answer": "Cost reduces through shared rides, fuel savings, lower parking usage, route optimisation, professional management, and decreased personal vehicle reimbursements across teams."
        },
        {
            "question": "How does real time monitoring help transport operations?",
            "answer": "Monitoring tools track movement, measure delay patterns, improve control, and support better decision-making. This helps companies maintain steady service daily."
        }
    ],
    "/shuttle-service-in-delhi": [
        {
            "question": "What safety features are available on Delhi shuttles?",
            "answer": "Each fiesta shuttle has SOS alerts and live tracking so employees feel secure during the ride."
        },
        {
            "question": "How does Fiesta handle shuttle pick-ups in busy areas?",
            "answer": "Fiesta uses gate-to-gate pick-up points near major offices, residential clusters, and landmarks like Saket, Rohini, and Nehru Place to avoid long waits and traffic hassles."
        },
        {
            "question": "Can shuttles be booked for short routes within Delhi NCR, like office to metro stations?",
            "answer": "Fiesta Shuttles can be booked for short connections, like the office to the nearest metro station or nearby hubs."
        },
        {
            "question": "Can employees track shuttle location in real time via an app or SMS?",
            "answer": "Once booking is confirmed, you’ll get an SMS or email with a live‑tracking app facility, so employees can see where their shuttle is in real time."
        },
        {
            "question": "How does Fiesta manage shuttle schedules during heavy rain or Delhi NCR fog?",
            "answer": "Shuttle schedules are managed proactively, with route adjustments and fleet support to ensure timely and safe transport in Delhi NCR, rain or fog."
        }
    ],
    "/car-rent-for-marriage-in-delhi": [
        {
            "question": "How much does it cost to rent a car for a day or a few hours?",
            "answer": "Fiesta offers packages to fit different budgets. Prices depend on the car type and duration."
        },
        {
            "question": "How early should I book a car to avoid last-minute issues?",
            "answer": "Popular wedding dates fill fast. Contact Fiesta well in advance to secure your car."
        },
        {
            "question": "Can the car be decorated for the bride and groom?",
            "answer": "Fiesta cars can be arranged for wedding decorations to match your theme."
        },
        {
            "question": "Can cars be rented for multiple days or just one day?",
            "answer": "You can hire Fiesta cars for a single day or multiple wedding events, like mehendi, sangeet, and reception."
        },
        {
            "question": "Can family members or guests also rent cars from the same service?",
            "answer": "Fiesta also provides cars for guest transport, so your family and friends can book rides easily."
        }
    ],
    "/best-car-rental-in-chennai": [
        {
            "question": "Do you offer outstation trips from Chennai to nearby cities?",
            "answer": "Yes, Fiesta offers trips from Chennai to nearby cities like Pondicherry, Mahabalipuram and Kanchipuram for leisure or business."
        },
        {
            "question": "Can I change my pick‑up or drop‑off point after booking?",
            "answer": "You can adjust pick-up or drop-off points by contacting Fiesta’s support team before your ride."
        },
        {
            "question": "How does Fiesta handle cancellations or rescheduling in Chennai?",
            "answer": "Fiesta allows rescheduling or cancellations through their booking team, keeping it flexible and hassle-free."
        },
        {
            "question": "Are there extra charges for tolls in Chennai?",
            "answer": "Any tolls or fees are extra, and charges are communicated upfront when you book Fiesta cars."
        },
        {
            "question": "Are there child seat options or safety features for family travel in Chennai?",
            "answer": "Fiesta Cars are well-maintained, and drivers are trained for safety; you can request child seats for family travel."
        }
    ],
    "/wedding-car-rental-in-chennai": [
        {
            "question": "What does a wedding car rental package include?",
            "answer": "Wedding car rental packages include a professional chauffeur, vehicle usage for the selected rental period, and optional decoration support based on customer preference."
        },
        {
            "question": "Does Fiesta provide self-drive cars for weddings?",
            "answer": "Fiesta provides only chauffeur-driven luxury car rental services in Chennai to maintain service quality and coordinated transportation."
        },
        {
            "question": "Are monthly rental options available for wedding events?",
            "answer": "Monthly basis and extended rental options are available for customers managing multi-day wedding functions or repeated transportation needs."
        },
        {
            "question": "Are the cars suitable for premium wedding photography?",
            "answer": "All our cars are maintained for visual appeal, interior presentation, and exterior finish suitable for wedding photography."
        },
        {
            "question": "When should wedding car rental bookings be made?",
            "answer": "Early booking supports better vehicle availability and smoother coordination for wedding day transportation."
        }
    ],
    "/corporate-car-rental-in-bangalore": [
        {
            "question": "Do you offer electric vehicle (EV) transportation?",
            "answer": "Yes, our EV fleet ensures eco-friendly, comfortable, and quiet rides, contributing to a sustainable future while delivering top-notch service."
        },
        {
            "question": "How do you ensure employee safety during transit?",
            "answer": "We prioritize safety through GPS-enabled vehicles, real-time tracking, verified drivers, and 24/7 customer support for a secure commuting experience."
        },
        {
            "question": "What makes your service stand out from competitors?",
            "answer": "With over 25 years of industry experience, a diverse vehicle fleet, professional drivers, and a strong focus on safety and punctuality, we offer unmatched reliability and comfort."
        },
        {
            "question": "How do you handle last-minute transport requests or schedule changes?",
            "answer": "We offer flexible scheduling and responsive customer support to accommodate last-minute transport requests or changes, ensuring uninterrupted service."
        },
        {
            "question": "How do you ensure vehicle maintenance and cleanliness?",
            "answer": "Some services offer on-demand backups or rescheduling options depending on location and availability."
        },
        {
            "question": "What types of businesses can use your transport services?",
            "answer": "We cater to businesses of all sizes, including IT firms, BPOs, manufacturing companies, and other organizations requiring dependable employee transportation solutions."
        }
    ],
    "/shuttle-services-in-hyderabad": [
        {
            "question": "What areas in Hyderabad are covered by shuttle services?",
            "answer": "Fiesta shuttles run in main business hubs, metros and residential areas, including HITEC City (Madhapur), Gachibowli, and the Financial District, connecting offices and key locations."
        },
        {
            "question": "How many passengers can each shuttle carry at a time?",
            "answer": "Each shuttle can carry around 10- 20 employees, depending on vehicle size."
        },
        {
            "question": "Can shuttles pick up employees from multiple locations?",
            "answer": "Fiesta’s shuttles use fixed, gate-to-gate pick‑up points near metro stations, residential clusters, and busy areas. The well-planned pick-up points let staff from different locations board easily without long walks or extra waiting."
        },
        {
            "question": "How is the fare or cost of shuttle service calculated?",
            "answer": "Fiesta offers monthly billing, and the cost depends on the number of employees, trips, and route length."
        },
        {
            "question": "Can companies get a shuttle for just a few employees instead of full capacity?",
            "answer": "Companies can book a shuttle even for a small group; Fiesta adjusts capacity as needed."
        }
    ],
    "/employee-transportation-services-in-chennai": [
        {
            "question": "What are employee transportation services in Chennai?",
            "answer": "Structured commute solutions ensuring safety, reliability, and convenience for employees traveling daily to office."
        },
        {
            "question": "How do companies benefit from employee transportation services?",
            "answer": "Companies save costs, improve employee satisfaction, and ensure punctual workforce with dependable transport solutions."
        },
        {
            "question": "Are professional drivers provided with these services?",
            "answer": "Yes, all vehicles are driven by professional drivers ensuring safety, punctuality, and smooth daily commutes."
        },
        {
            "question": "Why choose Fiesta for employee transportation services in Chennai?",
            "answer": "Fiesta offers reliable, cost effective, and well maintained fleet with real time tracking for employees."
        }
    ]
};

export const normalizeFaqPath = (path: string) => {
    if (!path || path === "/") return "/";
    return path.endsWith("/") ? path.slice(0, -1) : path;
};

export const getLiveFaqsByPath = (path: string): RouteFAQItem[] => {
    return LIVE_ROUTE_FAQS[normalizeFaqPath(path)] ?? [];
};
