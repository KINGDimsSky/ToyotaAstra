import Carousel from "@/components/ClientComponents/Carousel";
import CatalogCar from "@/components/ClientComponents/CatalogCar";
import ClientRating from "@/components/ClientComponents/ClientRating";
import FixedWhatsapp from "@/components/ClientComponents/FixedWhatsapp";
import News from "@/components/ClientComponents/News";
import FaQ from "@/components/FaQ";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import PersonalSection from "@/components/PersonalSection";
import { Fragment } from "react";
import QuickForm from "@/components/ClientComponents/QuickForm";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Home () {
  return (
    <Fragment>
      <FixedWhatsapp/>
      <Carousel/>
      <div className="bg-gray-100 pb-12 md:pb-24">
        <PersonalSection/>
      </div>
      <CatalogCar/>
      <News/>
      <div className="w-full bg-gray-100 py-8">
        <FaQ/>
      </div>
      <div className="flex p-8 md:p-14 justify-center bg-pink-700 mb-12">
        <div className="flex flex-col gap-2 text-white">
          <h2 className="font-bold text-2xl md:text-5xl tracking-tight text-center">Jangan Ragu Pilih Mobil Toyota!</h2>
          <p className="font-semibold text-sm md:text-xl text-center tracking-tight mt-1">Pilihan Tepat Keluarga Indonesia. </p>
        </div>
      </div>
      <MaxWidthWrapper>
       <div className="flex flex-col items-center mb-12">
         <h2 className="text-4xl font-bold mb-4">Apa Kata Mereka?</h2>
         <div className="w-12 h-1 bg-pink-700"></div>
         <ClientRating/>
       </div>
      </MaxWidthWrapper>
      <div className="bg-gray-950 py-12">
        <QuickForm/>
      </div>
      <div className="flex w-full bg-pink-700 py-3 px-4 sm:px-0">
        <MaxWidthWrapper className="flex sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <h2 className="text-white text-xs sm:text-lg font-semibold text-center sm:text-left"> Ingin Konsultasi? Jangan Ragu Hubungi Raymond! dan Dapatkan Penawaran Terbaik! </h2>
          <a href="https://wa.me/6282233681022?text=Halo Raymond!, Saya Tertarik pada Salah Satu Produk Mobil Toyota" className="bg-white hover:bg-pink-700 border border-pink-700 hover:border-white hover:text-white transition-all duration-300 py-1 sm:py-3 px-2 sm:px-4 flex gap-2 items-center font-semibold text-xs sm:text-base" >
          <MdOutlineKeyboardDoubleArrowRight className="text-sm sm:text-base"/>
          <span>Dapatkan Penawaran</span>
          </a>
        </MaxWidthWrapper>
      </div>
    </Fragment>
  )
}