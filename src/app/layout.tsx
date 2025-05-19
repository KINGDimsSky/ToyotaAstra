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
  title: "Home | Toyota Astra Mobil | Mobil Terbaik Keluarga",
  description: "Toyota Industries Corporation develops and manufactures automobiles and automobile-related products.",
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
