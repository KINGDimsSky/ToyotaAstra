import CardNews from "@/components/ClientComponents/CardNews";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { GetNews } from "@/services/index.service";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  author: string;
  date: string;
  calendarDate: string;
  slug: string;
  HeroImage: string;
  content: string;
}

export default async function Berita () {
    const news = await GetNews();

    if (!news || news.error){
      return (
        <MaxWidthWrapper className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600">
            {news?.error || 'Gagal memuat berita'}
          </h2>
          <p className="mt-4">Silakan coba lagi nanti</p>
        </div>
      </MaxWidthWrapper>
      )
    }

    return (
        <MaxWidthWrapper className="mt-4 md:mt-8 mb-8 md:mb-12">
          <div className="flex flex-col min-h-screen">
            <div className="flex gap-4 items-center">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Beranda</Link>
              <FaArrowRight className="w-3"/>
              <p className="text-gray-700">Berita</p>
            </div>
            <div className="self-center mt-6">
              <h2 className="text-4xl font-bold tracking-wide">Latest News</h2>
            </div>
            <div className="flex justify-center w-full flex-wrap gap-4 mt-6">
              {news.data?.length >  0 ? (
                <div>
                  {news.data.map((data: NewsItem) => (
                    <CardNews key={data.id} title={data.title} category={data.category} calendarDate={data.calendarDate} heroImage={data.HeroImage} slug={data.slug} className=""/>
                  ))}
                </div>
              ) : (
                <h2 className="h-96 flex items-center justify-center text-2xl font-semibold">Oops No News Data Found!</h2>
              )}
            </div>
          </div>
        </MaxWidthWrapper>
        
    )
}