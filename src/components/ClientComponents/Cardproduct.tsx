import Image from "next/image";
import Link from "next/link";
import { FaCloudDownloadAlt, FaFileContract } from "react-icons/fa";

export default function CardProduct ({name, category, price, carImage, slug, pdf} : {name: string, category: string, price: number, carImage: string, slug: string, pdf:string}) {
    return (
        <div className="flex flex-col w-full sm:w-80 md:w-[20.5rem] lg:w-[22.5rem] rounded-2xl overflow-hidden border border-gray-300">
           <div className="relative w-full h-40 sm:h-48 cursor-pointer">
               <div className="relative w-full h-full">
                  <Link href={`/mobil/${slug}`}>
                    <Image src={carImage} alt={name} fill className="object-cover"/>
                    <div className="absolute inset-0 bg-black/35"></div>
                  </Link>
               </div>
              <div className="absolute flex flex-col left-3 sm:left-4.5 bottom-2 sm:bottom-3.5 text-white">
                <h2 className="text-xs sm:text-xs">Mulai dari</h2>
               <h2 className="text-xl sm:text-xl md:text-2xl tracking-wide font-semibold">
                {price === 0 ? (
                  <div>
                    <h2 className="text-md">Call Dealer</h2>
                  </div>
                ) : (
                   <div>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(price)}
                </div>
                )}  
               </h2>
              </div>
           </div>
           <div className="flex flex-col p-3 sm:p-4">
              <Link href={`/mobil/${slug}`} className="font-semibold text-xl sm:text-2xl mb-2 sm:mb-4 cursor-pointer hover:text-pink-600">{name}</Link>
              <div className="w-full h-[1px] bg-gray-200"></div>
              <div className="flex justify-between items-center mt-2 sm:mt-4">
                <h2 className="text-gray-600 tracking-tight text-xs sm:text-sm">{category}</h2>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1 items-center hover:text-pink-600 cursor-pointer">
                    <Link href={'/hubungi-kami'} className="font-semibold text-xs sm:text-sm">Get Your Offer</Link>
                    <FaFileContract size={20} className="sm:w-4 sm:h-4 group-[]:"/>
                  </div>
                  <div className="flex gap-1 items-center hover:text-pink-600 cursor-pointer">
                    <Link href={pdf} className="font-semibold text-xs sm:text-sm">Brosur</Link>
                    <FaCloudDownloadAlt size={20} className="sm:w-5 sm:h-5"/>
                  </div>
                </div>
              </div>
           </div>
        </div>
    )
}