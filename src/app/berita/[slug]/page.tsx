import React from "react";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { GetNews } from "@/services/index.service";
import Image from "next/image";
import { FaArrowRight, FaClock, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

export async function generateStaticParams() {
  const slugs = ['berita-1', 'berita-2'];
  return slugs.map(slug => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function DetailedNews({ params }: Props) {
  const { slug } = await params;
  const news = await GetNews(slug);

  if (!news || !news.data) {
    return <div className="text-center text-red-600">Berita tidak ditemukan</div>;
  }

  const data = news.data;

  return (
    <MaxWidthWrapper className="mt-6 md:mt-12">
      {/* ... JSX sama seperti kode kamu ... */}
      <div className="flex flex-col min-h-screen">
        <div className="flex gap-2 items-center">
          <a href="/" className="text-gray-700 text-sm hover:text-gray-950">Beranda</a>
          <FaArrowRight className="w-2" />
          <a href="/berita" className="text-gray-700 text-sm hover:text-gray-950">Berita</a>
          <FaArrowRight className="w-2" />
          <p className="text-gray-700 text-xs md:text-sm">{data.title}</p>
        </div>
        <div className="flex mt-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight w-full md:w-2/3">{data.title}</h2>
        </div>
        <div className="w-full md:w-4/5 border-t border-gray-600 mt-4"></div>
        <div className="flex flex-col">
          <div className="flex gap-2 mt-4 items-center">
            <FaClock className="text-pink-500" />
            <p className="text-sm text-gray-700">{data.date}</p>
            <p> | </p>
            <p className="text-sm text-gray-700">
              PostedBy: <span className="text-gray-950">{data.author}</span>
            </p>
          </div>
          <div className="relative w-full md:w-4/5 h-96 bg-cyan-400 mt-6">
            <Image src={'/News/GazooRacing.jpg'} alt="News Image" fill className="object-cover" />
          </div>
          <p className="mt-4 text-gray-800">Sumber: toyota.astra.co.id</p>
          <h2 className="text-3xl text-center font-semibold mt-6 w-full md:w-3/4">{data.subtitle}</h2>
          <div className="mt-10 text-sm w-full md:w-4/5 tracking-wider mb-12">
            <h2>{data.content}</h2>
          </div>
          <div className="flex gap-2 mt-12 mb-6 items-center">
            <p className="text-sm text-gray-600">SHARE NEWS: </p>
            <div className="flex gap-3">
              <FaSquareWhatsapp className="text-green-400 w-6 h-6 cursor-pointer" />
              <FaTwitter className="text-blue-500 w-6 h-6 cursor-pointer" />
              <FaFacebook className="text-blue-600 w-6 h-6 cursor-pointer" />
              <FaLinkedin className="text-blue-700 w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <div className="flex py-4 px-12 mb-24 bg-gray-100 w-full md:w-4/5 gap-4">
            <div className="relative w-24 h-24">
              <Image src={'/icons/Users.jpg'} alt="Users" fill />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xs uppercase text-gray-700 font-semibold">Author</h2>
              <h2 className="text-lg font-semibold tracking-wide">{data.author}</h2>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
