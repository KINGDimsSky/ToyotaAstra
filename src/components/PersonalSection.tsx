import { MdMail, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaCar, FaHandsHelping, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function PersonalSection() {
  return (
    <div>
      <div className="flex w-full bg-pink-700 py-3 px-4 sm:px-0">
        <MaxWidthWrapper className="flex  sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <h2 className="text-white text-xs sm:text-lg font-semibold text-center sm:text-left"> Ingin Konsultasi? Jangan Ragu Hubungi Raymond! dan Dapatkan Penawaran Terbaik! </h2>
          <a href="https://wa.me/6282233681022?text=Halo Raymond!, Saya Tertarik pada Salah Satu Produk Mobil Toyota" className="bg-white hover:bg-pink-700 border border-pink-700 hover:border-white hover:text-white transition-all duration-300 py-1 sm:py-3 px-2 sm:px-4 flex gap-2 items-center font-semibold text-xs sm:text-base" >
            <MdOutlineKeyboardDoubleArrowRight className="text-sm sm:text-base"/>
            <span>Dapatkan Penawaran</span>
          </a>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="mt-6 md:mt-12 py-2 px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative h-72 w-full sm:h-80 sm:w-80 lg:h-[28rem] lg:w-96 rounded-xl overflow-hidden bg-gray-400 border border-gray-400">
              <Image src={'/personal/Raysanbgwhite.jpg'} alt="Personal Image" fill className="object-cover object-top"/>
            </div>
            <div className="mt-8 lg:mt-12 text-center lg:text-left">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-wide uppercase">Raymond Santosa</h2>
              <p className="mt-4 sm:mt-6 text-gray-700 w-full lg:w-96 text-sm sm:text-base">
                Hubungi Raymond Santosa Dengan Whatsapp Atau email Dan dapatkan Penawaran Khusus! Atau konsultasi bebas
              </p>
            </div>
            <div className="flex flex-col  gap-3 sm:gap-4 mt-6 sm:mt-8 w-full justify-center lg:justify-start">
              <a href="" className="font-semibold p-2 sm:p-4 bg-pink-700 hover:bg-pink-500 transition-all duration-200 text-white flex items-center justify-center gap-2 text-sm sm:text-base">
               <FaWhatsapp className="text-sm sm:text-base"/>
                <span>081936628181</span>
              </a>
              <a href="" className="font-semibold p-2 sm:p-4 max-w-full bg-pink-700 hover:bg-pink-500 transition-all duration-200 text-white flex items-center justify-center gap-2 text-sm sm:text-base">
                <MdMail className="text-sm sm:text-base"/>
                <span>raymond.santosa@plazatoyota.co.id</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl sm:text-4xl font-bold uppercase text-center lg:text-left"> Plaza Toyota Gading Serpong</p>
            <p className="mt-2 sm:mt-4 text-gray-700 text-sm sm:text-base text-center lg:text-left">JL Raya Boulevard, Kav. 5-11, Gading Serpong, Summarecon, Tangerang, Curug Sangereng, Kelapa Dua, Tangerang Regency, Banten 15810</p>
            <div className="relative w-full h-80 sm:h-52 lg:h-96 rounded-xl sm:rounded-2xl bg-gray-400 mt-4 overflow-hidden">
              <Image src={'/personal/Raysanyellowcar.jpg'} alt="Raysan" fill className="object-cover object-left-top"/>
            </div>
            <div className="hidden md:flex flex-col sm:flex-row gap-4 items-center sm:items-stretch mt-6">
              <div className="flex flex-col max-w-full sm:max-w-52 gap-2 mt-2 sm:mt-6 border-b sm:border-b-0 sm:border-r border-gray-600 sm:pr-4 pb-4 sm:pb-0 items-center sm:items-start text-center sm:text-left">
                <RiCustomerService2Fill className="text-4xl sm:text-[55px]"/>
                <h2 className="text-lg font-semibold">Layanan Setiap Saat</h2>
                <p className="text-gray-700 text-sm sm:text-base">Dengan Raymond Santosa dapatkan Layanan Setiap Saat!</p>
              </div>
              <div className="flex flex-col max-w-full sm:max-w-52 gap-2 mt-2 sm:mt-6 border-b sm:border-b-0 sm:border-r border-gray-600 sm:pr-4 pb-4 sm:pb-0 items-center sm:items-start text-center sm:text-left">
                <FaHandsHelping className="text-4xl sm:text-[55px]"/>
                <h2 className="text-lg font-semibold">Konsultasi Cepat</h2>
                <p className="text-gray-700 text-sm sm:text-base">Dengan Raymond Santosa Konsultasi kan Produk Toyota Astra pilihan Anda!</p>
              </div>
              <div className="flex flex-col max-w-full sm:max-w-52 gap-2 mt-2 sm:mt-6 items-center sm:items-start text-center sm:text-left">
                <FaCar className="text-4xl sm:text-[55px]"/>
                <h2 className="text-lg font-semibold">Dapatkan Produk Terbaik</h2>
                <p className="text-gray-700 text-sm sm:text-base">Dengan Raymond Santosa Dapatkan Produk Keinginan Anda!</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}