import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fiestacabs.com";

  // Define your static routes here
  const staticRoutes = [
    "",
    "/about-us",
    "/services-offered",
    "/our-journey",
    "/gallery",
    "/blog",
    "/reach-us",
    "/employee-transport-services",
    "/shuttle-service",
    "/wedding-cars",
    "/outstation-rides",
    "/premium-car-rentals",
    "/best-car-rental-in-chennai",
    "/wedding-car-rental-in-chennai",
    "/outstation-cabs-in-chennai",
    "/employee-transportation-services-in-chennai",
    "/wedding-car-rental-mumbai",
    "/employee-transportation-services-in-mumbai",
    "/corporate-car-rental-in-mumbai",
    "/outstation-cabs-in-bangalore",
    "/corporate-car-rental-in-bangalore",
    "/employee-transportation-services-in-bangalore",
    "/shuttle-service-in-bangalore",
    "/wedding-cars-in-bangalore",
    "/outstation-cabs-in-hyderabad",
    "/shuttle-services-in-hyderabad",
    "/employee-transport-services-in-hyderabad",
    "/outstation-cabs-in-delhi",
    "/shuttle-service-in-delhi",
    "/car-rent-for-marriage-in-delhi",
    "/outstation-cabs-in-gurgaon",
    "/shuttle-service-in-gurgaon",
    "/employee-transportation-services-in-pune",
    "/corporate-car-rental-service",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
