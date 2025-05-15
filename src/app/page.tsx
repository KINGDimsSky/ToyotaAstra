import Carousel from "@/components/ClientComponents/Carousel";
import CatalogCar from "@/components/ClientComponents/CatalogCar";
import FixedWhatsapp from "@/components/ClientComponents/FixedWhatsapp";
import News from "@/components/ClientComponents/News";
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
        <CatalogCar/>
        <News/>
      </MaxWidthWrapper>
    </Fragment>
  )
}