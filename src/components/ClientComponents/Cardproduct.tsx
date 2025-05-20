import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function CardProduct ({name, category, price, carImage, slug} : {name: string, category: string, price: number, carImage: string, slug: string}) {
    return (
        <div className="flex flex-col w-full sm:w-80 md:w-[20.5rem] lg:w-[22.5rem] rounded-2xl overflow-hidden border border-gray-300">
           <div className="relative w-full h-40 sm:h-48 cursor-pointer">
               <div className="relative w-full h-full">
                  <a href={`/mobil/${slug}`}>
                    <Image src={carImage} alt={name} fill className="object-cover"/>
                    <div className="absolute inset-0 bg-black/35"></div>
                  </a>
               </div>
              <div className="absolute flex flex-col left-3 sm:left-4.5 bottom-2 sm:bottom-3.5 text-white">
                <h2 className="text-xs sm:text-sm">Mulai Dari</h2>
               <h2 className="text-xl sm:text-2xl md:text-3xl tracking-wide font-semibold">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(price)}
               </h2>
              </div>
           </div>
           <div className="flex flex-col p-3 sm:p-4">
              <a href={`/mobil/${slug}`} className="font-semibold text-xl sm:text-2xl mb-2 sm:mb-4 cursor-pointer hover:text-pink-600">{name}</a>
              <div className="w-full h-0.5 bg-gray-200"></div>
              <div className="flex justify-between items-center mt-2 sm:mt-4">
                <h2 className="text-gray-600 tracking-tight text-xs sm:text-sm">{category}</h2>
                <div className="flex items-center hover:text-pink-600 cursor-pointer">
                  <h2 className="font-semibold text-xs sm:text-sm">Get Your Offer</h2>
                  <MdKeyboardArrowRight size={20} className="sm:w-6 sm:h-6"/>
                </div>
              </div>
           </div>
        </div>
    )
}