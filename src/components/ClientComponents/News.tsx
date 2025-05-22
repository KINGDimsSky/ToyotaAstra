'use client'

import { NavNews } from "@/lib/data"
import { useState, useRef, useEffect } from "react"
import CardNews from "./CardNews"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { GetByCategoryNews } from "@/services/index.service"

export default function News() {
    const [NewsNav, SetNewsNav] = useState<string>('All');
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [News, SetNews] = useState<any[]>([]);
    const [IsLoading, SetIsLoading] = useState<boolean>(true)

  
    const HandleClicker = (Nav: string) => {
        SetNewsNav(Nav)
    }

    const getData = async (category : string) => {
      const news = await GetByCategoryNews(category);
      SetNews(news.data)
      console.log (news)
      SetIsLoading(false)
    }

    useEffect(() => {
      getData(NewsNav)
    }, [NewsNav])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="flex flex-col mt-24 mb-24 px-4 sm:px-12">
            <h2 className="font-bold text-4xl self-center">Discover The Latest</h2>
            <div className="flex gap-2 sm:gap-4 self-center mt-6 flex-wrap justify-center">
              {NavNews.map((data) => (
                <button key={data.id} onClick={() => HandleClicker(data.name)} className={`py-2 px-3 sm:px-4 text-sm ${NewsNav === data.name ? "bg-pink-600 text-white" : "text-black hover:bg-pink-600 hover:text-white"} cursor-pointer rounded-lg transition-all duration-300`}>
                  {data.name}
                </button>
              ))}
            </div>
            <div className="relative mt-12 w-full group">
              {News.length > 0 ? (
                <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide gap-6 px-2 py-4 snap-x snap-mandatory">
                  {News.map((data) => (
                    <div key={data.id} className="flex-shrink-0 snap-start">
                      <CardNews title={data.title} category={data.category} calendarDate={data.calendarDate} heroImage={data.HeroImage} slug={data.slug} className="w-[22rem] md:w-[28rem]"/>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                 {IsLoading ? (
                  <div className="flex gap-6">
                     {[...Array(4)].map((_, i) => (
                       <div key={i} className="w-[22rem] md:w-[28rem] h-[28rem] bg-gray-200 animate-pulse rounded-lg" />
                     ))}
                  </div>
              ): (
                <h2 className="text-center w-full font-semibold">Oops Cant Find Data!</h2>
              )}
                </div>
              )}
                <button onClick={() => scroll('left')} className="absolute left-2 top-1/2 -translate-y-1/2 bg-pink-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg hover:bg-pink-700" aria-label="Scroll left">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={() => scroll('right')} className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg hover:bg-pink-700"  aria-label="Scroll right">
                  <ChevronRight size={24} />
                </button>
            </div>
            <div className="self-center mt-12">
              <a href="/berita" className="py-2 px-8 text-center border border-black rounded-2xl font-semibold hover:bg-black hover:text-white transition-colors">
                More Articles
              </a>
            </div>
        </div>
    )
}