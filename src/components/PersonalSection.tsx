import { MdMail, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaCar, FaHandsHelping, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function PersonalSection () {
    return (
      <div>
        <div className="flex w-full bg-pink-700 py-3">
          <MaxWidthWrapper className="flex justify-between items-center">
            <h2 className="text-white text-xs md:text-lg font-semibold">Ingin Konsultasi? Jangan Ragu Hubungi Raymond! dan Dapatkan Penawaran Terbaik!</h2>
            <a href="https://wa.me/6282233681022?text=Halo Raymond!, Saya Tertarik pada Salah Satu Produk Mobil Toyota" className="bg-white hover:bg-pink-700 border border-pink-700 hover:border-white hover:text-white transition-all duration-300 py-1 md:py-3 px-2 md:px-4 flex gap-2 items-center font-semibold md:text-base text-xs"><span><MdOutlineKeyboardDoubleArrowRight size={20}/></span>Dapatkan Penawaran</a>
          </MaxWidthWrapper>
        </div>
        <MaxWidthWrapper className=" mt-12 py-2">
           <div className="flex gap-12">
              <div className="flex flex-col">
                <div className="relative h-96 bg-yellow-400 w-96 rounded-xl overflow-hidden bg-center border border-gray-400">
                  <Image src={'/personal/Raysan1.jpg'} alt="Personal Image" fill className="object-cover"/>
                </div>
                <div className="mt-12">
                  <h2 className="text-4xl font-bold tracking-wider uppercase">Raymond Sentosa</h2>
                  <p className="mt-6 text-gray-700 w-96">Pelajari lebih lanjut tentang teknologi pengisian daya modern dalam infrastruktur pengisian yang praktis.</p>
                </div>
                <div className="flex gap-4 mt-8">
                  <a href="" className="font-semibold p-4 bg-pink-700 hover:bg-pink-500 transition-all duration-200 text-white flex items-center gap-2"><span><FaWhatsapp/></span>08211231932</a>
                  <a href="" className="font-semibold p-4 bg-pink-700 hover:bg-pink-500 transition-all duration-200 text-white flex items-center gap-2"><span><MdMail/></span>Raysan@gmail.com</a>
                </div>
              </div>

              <div className="flex flex-col">
                <p className="text-4xl font-bold uppercase">Plaza Toyota Gading Serpong</p>
                <p className="mt-4">JL Raya Boulevard, Kav. 5-11, Gading Serpong, Summarecon, Tangerang, Curug Sangereng, Kelapa Dua, Tangerang Regency, Banten 15810</p>
                <div className="relative w-2xl h-80 rounded-2xl bg-amber-300 mt-4 overflow-hidden">
                  <Image src={'/personal/Raysanyellowcar.jpg'} alt="Raysan" fill className="object-cover object-left-top"/>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col max-w-52 gap-2 mt-6 border-r border-r-gray-600 pr-4">
                    <RiCustomerService2Fill size={55}/>
                    <h2 className="text-lg font-semibold">Layanan Setiap Saat</h2>
                    <p className="text-gray-700">Dengan Raymond Sentosa dapatkan Layanan Setiap Saat!</p>
                  </div>
                  <div className="flex flex-col max-w-52 gap-2 mt-6 border-r border-r-gray-600 pr-4">
                    <FaHandsHelping size={55}/>
                    <h2 className="text-lg font-semibold">Konsultasi Cepat</h2>
                    <p className="text-gray-700">Dengan Raymond Sentosa Konsultasi kan Produk Toyota Astra pilihan Anda!</p>
                  </div>
                  <div className="flex flex-col max-w-52 gap-2 mt-6">
                    <FaCar size={55}/>
                    <h2 className="text-lg font-semibold">Dapatkan Produk Terbaik</h2>
                    <p className="text-gray-700">Dengan Raymond Sentosa Dapatkan Produk Keinginan Anda!</p>
                  </div>
                </div>
              </div>
           </div>
        </MaxWidthWrapper>
      </div>
        
    )
}