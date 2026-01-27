import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Gunakan Google Font
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Event Exposure Media | Professional EO & WO",
  description: "Strategic Event Organizer, Wedding Organizer, and Creative Agency focused on client acquisition and value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-brand-light text-brand-dark antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-20"> {/* pt-20 untuk kompensasi fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}