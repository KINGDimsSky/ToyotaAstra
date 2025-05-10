import Carousel from "@/components/ClientComponents/Carousel";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import PersonalSection from "@/components/PersonalSection";
import { Fragment } from "react";

export default function Home () {
  return (
    <Fragment>
      <Carousel/>
      <div className="bg-gray-100 py-24">
        <PersonalSection/>
      </div>
      <MaxWidthWrapper className="mt-24">
        <h2>Cari Toyota Pilihan Anda</h2>
        <p>Jelajahi Seluruh Rangkaian Model </p>
      </MaxWidthWrapper>
    </Fragment>
  )
}