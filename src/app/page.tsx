import Carousel from "@/components/ClientComponents/Carousel";
import FixedWhatsapp from "@/components/ClientComponents/FixedWhatsapp";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import PersonalSection from "@/components/PersonalSection";
import { Fragment } from "react";

export default function Home () {
  return (
    <Fragment>
      <FixedWhatsapp/>
      <Carousel/>
      <div className="bg-gray-100 pb-24">
        <PersonalSection/>
      </div>
      <MaxWidthWrapper className="mt-24">
        <h2>Cari Toyota Pilihan Anda</h2>
        <p>Jelajahi Seluruh Rangkaian Model </p>
      </MaxWidthWrapper>
    </Fragment>
  )
}