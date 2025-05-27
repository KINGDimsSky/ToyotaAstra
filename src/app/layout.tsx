import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import FixedWhatsapp from "@/components/ClientComponents/FixedWhatsapp";
import QuickForm from "@/components/ClientComponents/QuickForm";
import AdsClient from "@/components/AdsClient";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Toyota Mobil | Mobil Terbaik Keluarga ",
  description: "Raymond Santosa Plaza Toyota Gading Serpong JL Raya Boulevard, Kav. 5-11, Gading Serpong, Summarecon, Tangerang, Curug Sangereng, Kelapa Dua, Tangerang Regency, Banten 15810",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar/>
        <FixedWhatsapp/>
        {children}
        <div className="bg-gray-950 py-12 mt-24">
          <QuickForm/>
        </div>
        <AdsClient/>
        <Footer/>
      </body>
    </html>
  );
}
