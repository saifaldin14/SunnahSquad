import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SunnahSquad - Serving with Purpose",
  description:
    "SunnahSquad is a Muslim volunteer group serving the homeless community at Ray of Hope soup kitchen, following the beautiful example of service and compassion in Islam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
