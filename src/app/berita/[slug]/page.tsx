import React from "react";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { GetNews } from "@/services/index.service";
import Image from "next/image";
import { FaArrowRight, FaClock, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DetailedNews({ params }: PageProps) {
  const {slug} = await params
  const news = await GetNews(slug);

  if (!news?.data) {
    return (
      <MaxWidthWrapper className="mt-6 md:mt-12">
        <div className="text-center text-red-600 py-20">
          Berita tidak ditemukan atau sedang dalam pemeliharaan
        </div>
      </MaxWidthWrapper>
    );
  }

  const { title, date, author, subtitle, content } = news.data;

  return (
    <MaxWidthWrapper className="mt-6 md:mt-12">
      <div className="flex flex-col min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="flex gap-2 items-center">
          <a href="/" className="text-gray-700 text-sm hover:text-gray-950">Beranda</a>
          <FaArrowRight className="w-2" />
          <a href="/berita" className="text-gray-700 text-sm hover:text-gray-950">Berita</a>
          <FaArrowRight className="w-2" />
          <p className="text-gray-700 text-xs md:text-sm line-clamp-1">{title}</p>
        </div>

        {/* Judul Berita */}
        <h1 className="text-3xl w-full md:w-4/5 md:text-4xl font-bold tracking-tight mt-8">{title}</h1>
        <div className="w-full md:w-4/5 border-t border-gray-600 mt-4" />

        {/* Metadata Berita */}
        <div className="flex gap-2 mt-4 items-center">
          <FaClock className="text-pink-500" />
          <p className="text-sm text-gray-700">{date}</p>
          <span>|</span>
          <p className="text-sm text-gray-700">
            Penulis: <span className="text-gray-950 font-medium">{author}</span>
          </p>
        </div>

        {/* Gambar Utama */}
        <div className="relative w-full md:w-4/5 aspect-video bg-gray-200 mt-6">
          <Image
            src="/News/GazooRacing.jpg"
            alt={`Gambar Berita: ${title}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
        <p className="mt-2 text-sm text-gray-600">Sumber: toyota.astra.co.id</p>

        {/* Konten Berita */}
        <article className="prose prose-sm md:prose-base max-w-none mt-8 w-full md:w-4/5">
          <h2 className="text-center text-2xl md:text-3xl font-semibold">{subtitle}</h2>
          <div 
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>

        {/* Share Options */}
        <div className="flex flex-col gap-4 mt-12 mb-12">
          <p className="text-sm text-gray-600">BAGIKAN BERITA:</p>
          <div className="flex gap-4">
            <button aria-label="Share via WhatsApp">
              <FaSquareWhatsapp className="text-green-500 text-2xl hover:text-green-600" />
            </button>
            <button aria-label="Share via Twitter">
              <FaTwitter className="text-blue-400 text-2xl hover:text-blue-500" />
            </button>
            <button aria-label="Share via Facebook">
              <FaFacebook className="text-blue-600 text-2xl hover:text-blue-700" />
            </button>
            <button aria-label="Share via LinkedIn">
              <FaLinkedin className="text-blue-800 text-2xl hover:text-blue-900" />
            </button>
          </div>
        </div>

        {/* Author Box */}
        <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg mb-12 w-full md:w-4/5">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
            <Image
              src="/icons/Users.jpg"
              alt={`Foto ${author}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 64px, 80px"
            />
          </div>
          <div>
            <p className="text-xs uppercase text-gray-500 font-semibold">Penulis</p>
            <p className="text-lg font-medium">{author}</p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}