import { cn } from "@/lib";
import Image from "next/image";

export default function CardNews ({className} : {className ?: string}) {
    return (
        <div  className={cn('border border-gray-400 rounded-xl overflow-hidden', className)}>
            <div className="relative h-52 md:h-72 bg-cyan-300">
              <Image src={'/News/GazooRacing.jpg'} alt="News Image" fill className="object-cover"/>
            </div>
            <div className="flex flex-col px-6 py-4">
              <h2 className="font-light text-lg">News & Event, Gazoo Racing</h2>
              <h2 className="text-sm font-light">07/02/2025</h2>
              <h2 className="mt-2 font-semibold tracking-wide">Rally Monte-Carlo 2025: TOYOTA GAZOO Racing Memulai Musim WRC dengan Raihan Podium 1-2 Yang Dramatis </h2>
            </div>
            <div className="px-4 cursor-pointer mb-4">
              <h2 className="p-2 text-center border border-black rounded-xl font-semibold hover:bg-black hover:text-white">Find Out More</h2>
            </div>
        </div>
    )
}