import type { Metadata } from "next";
import "./globals.css";

// Metadata global (bisa di-override di halaman lain)
export const metadata: Metadata = {
  title: "Event Exposure Media",
  description: "Professional Event Organizer & Creative Agency",
  icons: {
    icon: '/icon.png', // Pastikan icon sudah ada sesuai instruksi sebelumnya
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}