import { cn } from "@/lib";
import Image from "next/image";

export default function CardNews ({className, title, slug, category, calendarDate, heroImage,} : {className ?: string, title: string, slug: string, category: string, calendarDate: string, heroImage: string }) {
    return (
        <div className={cn('border border-gray-400 rounded-xl overflow-hidden', className)}>
            <div className="relative h-52 md:h-72 bg-cyan-300">
              <Image src={heroImage} alt="News Image" fill className="object-cover"/>
            </div>
            <div className="flex flex-col px-6 py-4">
              <h2 className="font-light text-lg">{category}</h2>
              <h2 className="text-sm font-light">{calendarDate}</h2>
              <h2 className="mt-2 font-semibold tracking-wide">{title}</h2>
            </div>
            <div className="flex px-4 cursor-pointer mb-4">
              <a href={`/berita/${slug}`} className="p-2 w-full text-center border border-black rounded-xl font-semibold hover:bg-black hover:text-white">Find Out More</a>
            </div>
        </div>
    )
}