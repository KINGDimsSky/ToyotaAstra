import DescCar from "@/components/DescCar";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { FaCar, FaDownload, FaShoppingCart } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { GetDetailedCar } from "@/services/index.service";

interface PageProps{
  params: Promise<{slug: string;}>;
}

export default async function DetailedCar ({params} : PageProps) {
    const {slug} = await params;
    const car = await GetDetailedCar(slug)

    if (!car || !car.data) {
      return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold text-red-600">Mobil Tidak Ditemukan</h1>
        <p className="text-gray-600 mt-2">Maaf, data mobil <strong>{slug}</strong> tidak tersedia.</p>
        <a href="/" className="mt-4 text-blue-500 hover:underline">Kembali ke Beranda</a>
      </div>
      )
    }

    return (
        <div className="">
           <div className="h-[45vh] md:h-[90vh] w-full flex items-center justify-center relative overflow-hidden bg-yellow-200">
           <Image src={car.data.heroImage} alt={car.data.name} fill className="object-cover"/>
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
                  <DescCar.BeyondInterior heroImage={car.data.beyondInterior.HeroImage} anotherImage={car.data.BeyondExterior.anotherImage}/>
                  <DescCar.BeyondSafety heroImage={car.data.beyondSafety.HeroImage} AnotherImage={car.data.BeyondExterior.anotherImage}/>
                  <DescCar.BeyondPerformance heroImage={car.data.beyondPerformance.HeroImage} AnotherImage={car.data.beyondPerformance.AnotherImage}/>
                  <DescCar.beyondConnected heroImage={car.data.beyondConnected.HeroImage} AnotherImage={car.data.BeyondExterior.anotherImage}/>
                  <DescCar.Accessoris heroImage={car.data.beyondAccessoris.HeroImage} AnotherImage={car.data.beyondAccessoris.AnotherImage}/>
                  <DescCar.ColorCar heroImage={car.data.ColorCar.Heroimage} AnotherImage={car.data.ColorCar.AnotherImage}/>
                </DescCar>
            </MaxWidthWrapper>
        </div>
    )
}