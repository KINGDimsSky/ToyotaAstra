import CardNews from "@/components/ClientComponents/CardNews";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { FaArrowRight } from "react-icons/fa";
export default function Berita () {

    return (
        <MaxWidthWrapper className="mt-4 md:mt-8 mb-8 md:mb-12">
          <div className="flex flex-col min-h-screen">
            <div className="flex gap-4 items-center">
              <a href="/" className="text-gray-600 hover:text-gray-900">Beranda</a>
              <FaArrowRight className="w-3"/>
              <p className="text-gray-700">Berita</p>
            </div>
            <div className="self-center mt-6">
              <h2 className="text-4xl font-bold tracking-wide">Latest News</h2>
            </div>
            <div className="flex justify-center w-full flex-wrap gap-4 mt-6">
              {[...Array(8)].map((_, index) => (
                <CardNews key={index} className="w-full md:w-[22.3rem]"/>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
        
    )
}