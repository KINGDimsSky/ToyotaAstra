'use client'

import { NavNews } from "@/data/dataCategoryNews"
import { useState, useRef } from "react"
import CardNews from "./CardNews"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function News() {
    const [NewsNav, SetNewsNav] = useState<string>('All')
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const HandleClicker = (Nav: string) => {
        SetNewsNav(Nav)
    }

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400 // Adjust this value based on your card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="flex flex-col mt-24 mb-24 px-4 sm:px-12">
            <h2 className="font-semibold text-3xl self-center">Discover The Latest</h2>
            <div className="flex gap-2 sm:gap-4 self-center mt-4 flex-wrap justify-center">
              {NavNews.map((data) => (
                <button
                  key={data.id}
                  onClick={() => HandleClicker(data.name)}
                  className={`py-2 px-3 sm:px-4 text-sm ${
                    NewsNav === data.name
                      ? "bg-pink-600 text-white"
                      : "text-black hover:bg-pink-600 hover:text-white"
                  } cursor-pointer rounded-lg transition-all duration-300`}
                >
                  {data.name}
                </button>
              ))}
            </div>
            <div className="relative mt-12 w-full group">
                <div
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto scrollbar-hide gap-6 px-2 py-4 snap-x snap-mandatory"
                >
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex-shrink-0 snap-start">
                      <CardNews />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scroll('left')}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-pink-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg hover:bg-pink-700"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg hover:bg-pink-700"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={24} />
                </button>
            </div>

            <div className="self-center mt-12">
              <button className="py-2 px-8 text-center border border-black rounded-2xl font-semibold hover:bg-black hover:text-white transition-colors">
                More Articles
              </button>
            </div>
        </div>
    )
}