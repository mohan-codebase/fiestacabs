import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactFloatingButton from "../components/common/ContactFloatingButton";
import ScrollToTop from "../components/common/ScrollToTop";





export const metadata: Metadata = {
  title: {
    default: "Expert Employee Transport Services | Fiesta Smart Mobility",
    template: "%s - Fiesta Cabs",
  },
  description: "Fiesta Smart Mobility offers secure, employee transport services and premium car rental solutions across India. Experience punctual and eco-friendly commutes",
  metadataBase: new URL("https://fiestacabs.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Expert Employee Transport Services | Fiesta Smart Mobility",
    description: "Fiesta Smart Mobility offers secure, employee transport services and premium car rental solutions across India. Experience punctual and eco-friendly commutes",
    url: "https://fiestacabs.com",
    siteName: "Fiesta Smart Mobility",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Fiesta Smart Mobility",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Employee Transport Services | Fiesta Smart Mobility",
    description: "Fiesta Smart Mobility offers secure, employee transport services and premium car rental solutions across India. Experience punctual and eco-friendly commutes",
    site: "@fiestamobility",
    images: ["/opengraph-image.png"],
  },
};

import { ModalProvider } from "../context/ModalContext";
import GlobalModal from "../components/common/GlobalModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
      >
        <ModalProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ContactFloatingButton />
          <ScrollToTop />
          <GlobalModal />
        </ModalProvider>
      </body>
    </html>
  );
}
