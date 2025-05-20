import DescCar from "@/components/DescCar";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { FaCar, FaDownload, FaShoppingCart } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { dataCar } from "@/lib/data";

export default function DetailedCar () {
    const getDataCar = async () => {  
      
    }

    return (
        <div className="">
           <div className="h-[45vh] md:h-[90vh] w-full flex items-center justify-center relative overflow-hidden bg-yellow-200">
           <Image src={'/assets/BmwM2.jpg'} alt="Image" fill className="object-cover"/>
           </div>
           <div className="flex w-full bg-gray-950 py-3 px-4 sm:px-0">
              <MaxWidthWrapper className="flex  sm:flex-row justify-between items-center gap-2 sm:gap-0">
                <h2 className="text-white text-xs sm:text-lg font-semibold text-center sm:text-left uppercase">BMW M3 COUPE</h2>
                <a href="https://wa.me/6282233681022?text=Halo Raymond!, Saya Tertarik pada Salah Satu Produk Mobil Toyota" className="bg-white hover:bg-pink-700 border border-pink-700 hover:border-white hover:text-white transition-all duration-300 py-1 sm:py-3 px-2 sm:px-4 flex gap-2 items-center font-semibold text-xs sm:text-base" >
                <MdOutlineKeyboardDoubleArrowRight className="text-sm sm:text-base"/>
                 <span>Dapatkan Penawaran</span>
                 </a>
              </MaxWidthWrapper>
            </div>
            <MaxWidthWrapper className="flex flex-col">
              <div className="flex gap-4 mt-4 self-center">
                <h2 className="p-4 bg-gray-950 text-white font-semibold flex gap-2 items-center hover:bg-gray-800 transition-all duration-300 cursor-pointer"><span><FaShoppingCart/></span> Pesan Sekarang</h2>
                <h2 className="p-4 bg-gray-950 text-white font-semibold flex gap-2 items-center hover:bg-gray-800 transition-all duration-300 cursor-pointer"><span><FaCar /></span>Test Drive</h2>
                <h2 className="p-4 bg-gray-950 text-white font-semibold flex gap-2 items-center hover:bg-gray-800 transition-all duration-300 cursor-pointer"><span><FaDownload /></span>Unduh Brosur</h2>
              </div>
              {dataCar.map((data) => (
                <DescCar key={data.id}>
                  <DescCar.BeyondExterior subtitle={data.BeyondExterior.subtitle} contentTitle={data.BeyondExterior.contentTitle}
                  contentSubtitle={data.BeyondExterior.contentSubtitle} image={data.BeyondExterior.HeroImage} AnotherImage={data.BeyondExterior.anotherImage}/>
                  <DescCar.BeyondInterior anotherImage={data.BeyondExterior.anotherImage}/>
                  <DescCar.BeyondSafety AnotherImage={data.BeyondExterior.anotherImage}/>
                  <DescCar.BeyondPerformance AnotherImage={data.beyondPerformance.AnotherImage}/>
                  <DescCar.beyondConnected heroImage={data.heroImage} AnotherImage={data.BeyondExterior.anotherImage}/>
                  <DescCar.Accessoris AnotherImage={data.beyondAccessoris.AnotherImage}/>
                  <DescCar.ColorCar AnotherImage={data.ColorCar.AnotherImage}/>
                </DescCar>
              ))}
            </MaxWidthWrapper>
        </div>
    )
}