import DescCar from "@/components/DescCar";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { FaCar, FaDownload, FaShoppingCart } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { dataCar } from "@/lib/data";
import { GetDetailedCar } from "@/services/index.service";

interface URLParams{
  params: {
    slug: string;
  }
}

export default async function DetailedCar ({params} : URLParams) {
    const slug = params.slug;
    const car = await GetDetailedCar(slug)
    console.log (car)

    return (
        <div className="">
           <div className="h-[45vh] md:h-[90vh] w-full flex items-center justify-center relative overflow-hidden bg-yellow-200">
           <Image src={car.data.heroImage} alt="Image" fill className="object-cover"/>
           </div>
           <div className="flex w-full bg-gray-950 py-3 px-4 sm:px-0">
              <MaxWidthWrapper className="flex  sm:flex-row justify-between items-center gap-2 sm:gap-0">
                <h2 className="text-white text-xs sm:text-lg font-semibold text-center sm:text-left uppercase">{car.data.name}</h2>
                <a href="https://wa.me/6282233681022?text=Halo Raymond!, Saya Tertarik pada Salah Satu Produk Mobil Toyota" className="bg-white hover:bg-pink-700 border border-pink-700 hover:border-white hover:text-white transition-all duration-300 py-1 sm:py-3 px-2 sm:px-4 flex gap-2 items-center font-semibold text-xs sm:text-base" >
                <MdOutlineKeyboardDoubleArrowRight className="text-sm sm:text-base"/>
                 <span>Dapatkan Penawaran</span>
                 </a>
              </MaxWidthWrapper>
            </div>
            <MaxWidthWrapper className="flex flex-col">
              <div className="flex gap-4 mt-4 self-center">
                <a href='/hubungi-kami' className="p-4 bg-gray-950 text-white font-semibold flex gap-2 items-center hover:bg-gray-800 transition-all duration-300 cursor-pointer"><span><FaShoppingCart/></span> Pesan Sekarang</a>
                <a href="/hubungi-kami" className="p-4 bg-gray-950 text-white font-semibold flex gap-2 items-center hover:bg-gray-800 transition-all duration-300 cursor-pointer"><span><FaCar /></span>Test Drive</a>
                <a href={car.data.pdf} className="p-4 bg-gray-950 text-white font-semibold flex gap-2 items-center hover:bg-gray-800 transition-all duration-300 cursor-pointer"><span><FaDownload /></span>Unduh Brosur</a>
              </div>
                <DescCar key={car.data.id}>
                  <DescCar.BeyondExterior subtitle={car.data.BeyondExterior.subtitle} contentTitle={car.data.BeyondExterior.contentTitle}
                  contentSubtitle={car.data.BeyondExterior.contentSubtitle} image={car.data.BeyondExterior.HeroImage} AnotherImage={car.data.BeyondExterior.anotherImage}/>
                  <DescCar.BeyondInterior anotherImage={car.data.BeyondExterior.anotherImage}/>
                  <DescCar.BeyondSafety AnotherImage={car.data.BeyondExterior.anotherImage}/>
                  <DescCar.BeyondPerformance AnotherImage={car.data.beyondPerformance.AnotherImage}/>
                  <DescCar.beyondConnected heroImage={car.data.heroImage} AnotherImage={car.data.BeyondExterior.anotherImage}/>
                  <DescCar.Accessoris AnotherImage={car.data.beyondAccessoris.AnotherImage}/>
                  <DescCar.ColorCar AnotherImage={car.data.ColorCar.AnotherImage}/>
                </DescCar>
            </MaxWidthWrapper>
        </div>
    )
}