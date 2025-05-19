import Carousel from "@/components/ClientComponents/Carousel";
import CatalogCar from "@/components/ClientComponents/CatalogCar";
import ClientRating from "@/components/ClientComponents/ClientRating";
import News from "@/components/ClientComponents/News";
import FaQ from "@/components/FaQ";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import PersonalSection from "@/components/PersonalSection";
import { Fragment } from "react";

export default function Home () {
  return (
    <Fragment>
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
    </Fragment>
  )
}