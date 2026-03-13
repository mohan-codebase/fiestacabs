import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactFloatingButton from "../components/common/ContactFloatingButton";





export const metadata: Metadata = {
  title: "Expert Employee Transport Services | Fiesta Smart Mobility",
  description: "Fiesta Cabs",
  metadataBase: new URL("https://fiestacabs.com"),
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Fiesta Smart Mobility",
      },
    ],
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
          <GlobalModal />
        </ModalProvider>
      </body>
    </html>
  );
}
