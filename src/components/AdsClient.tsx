import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export default function AdsClient () {
    return (
        <div className="flex w-full bg-pink-700 py-3 px-4 sm:px-0">
            <MaxWidthWrapper className="flex sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <h2 className="text-white text-xs sm:text-lg font-semibold text-center sm:text-left"> Ingin Konsultasi? Jangan Ragu Hubungi Raymond! dan Dapatkan Penawaran Terbaik! </h2>
            <a href="https://wa.me/6282233681022?text=Halo Raymond!, Saya Tertarik pada Salah Satu Produk Mobil Toyota" className="bg-white hover:bg-pink-700 border border-pink-700 hover:border-white hover:text-white transition-all duration-300 py-1 sm:py-3 px-2 sm:px-4 flex gap-2 items-center font-semibold text-xs sm:text-base" >
            <MdOutlineKeyboardDoubleArrowRight className="text-sm sm:text-base"/>
            <span>Dapatkan Penawaran</span>
            </a>
            </MaxWidthWrapper>
        </div>
    )
}