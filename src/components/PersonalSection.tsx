import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export default function PersonalSection () {
    return (
      <div>
        <div className="flex w-full bg-pink-700 py-3">
          <MaxWidthWrapper className="flex justify-between items-center">
            <h2 className="text-white text-lg font-semibold">Ingin Konsultasi? Jangan Ragu Hubungi Raymond! dan Dapatkan Penawaran Terbaik!</h2>
            <a href="https://wa.me/6282233681022?text=Halo Raymond!, Saya Tertarik pada Salah Satu Produk Mobil Toyota" className="bg-white hover:bg-pink-700 border border-pink-700 hover:border-white hover:text-white transition-all duration-300 py-3 px-4 flex gap-2 items-center font-semibold"><span><MdOutlineKeyboardDoubleArrowRight size={20}/></span>Dapatkan Penawaran</a>
          </MaxWidthWrapper>
        </div>
        <MaxWidthWrapper className="bg-pink-400 mt-12 py-2">
           <div className="flex gap-12">
              <div className="flex flex-col">
                <div className="relative h-96 bg-yellow-400 w-96 rounded-xl">
                  {/* Konten Ntar */}
                </div>
                <div className="mt-12">
                  <h2 className="text-4xl font-semibold tracking-wider uppercase">Raymond Sentosa</h2>
                  <p className="mt-6 text-gray-300 w-96">Pelajari lebih lanjut tentang teknologi pengisian daya modern dalam infrastruktur pengisian yang praktis.</p>
                </div>
              </div>
              
              <div className="flex flex-col">
                <p className="text-2xl text-white">Fuck With Em!</p>
              </div>
           </div>
        </MaxWidthWrapper>
      </div>
        
    )
}