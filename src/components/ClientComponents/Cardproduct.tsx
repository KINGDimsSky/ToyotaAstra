import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function CardProduct () {
    return (
        <div className="flex flex-col w-[22.5rem] rounded-2xl overflow-hidden border border-gray-300">
           <div className="relative w-full h-48 cursor-pointer">
               <div className="relative w-full h-full">
                  <Image src={'/Cars/Testing.jpg'} alt="BMW The I7" fill className="object-cover"/>
                  <div className="absolute inset-0 bg-black/35"></div>
               </div>
              <div className="absolute flex flex-col left-4.5 bottom-3.5 text-white">
                <h2 className="text-sm">Mulai Dari</h2>
                <h2 className="text-3xl tracking-wide font-semibold">Rp.3.387.000.000</h2>
              </div>
           </div>
           <div className="flex flex-col p-4">
              <h2 className="font-semibold text-2xl mb-4 cursor-pointer hover:text-pink-600">BMW The I7</h2>
              <div className="w-full h-0.5 bg-gray-200"></div>
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-gray-600 tracking-tight">MPV</h2>
                <div className="flex items-center hover:text-pink-600 cursor-pointer">
                  <h2 className="font-semibold">Get Your Offer</h2>
                  <MdKeyboardArrowRight size={25}/>
                </div>
              </div>

           </div>
        </div>
    )
}