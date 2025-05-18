'use client'

import { FaArrowRight } from "react-icons/fa";
import { MaxWidthWrapper } from "../MaxWidthWrapper";

export default function QuickForm () {
    

    return (
        <MaxWidthWrapper className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col">
            <h2 className="text-4xl w-56 text-white font-bold tracking-tight">Anda Ingin Dihubungi?</h2>
            <p className="text-white text-sm w-96 mt-4 tracking-tight">Apakah Anda ingin berbicara dengan Raymond melalui telepon? Silahkan kirim data Anda dan Raymond akan segera menghubungi Anda. Anda juga dapat mengirim email kepada Raymond jika Anda mau.</p>
          </div>
          <div>
            <h2 className="text-white font-bold">Tinggalkan data Anda Disini, Kami akan segera menghubungi Anda</h2>
            <form action="" className="mt-4 flex gap-6 flex-wrap">
              <input className="p-4 bg-gray-300 w-80 placeholder:text-black placeholder:font-semibold" type="text" placeholder="Nama Lengkap *"/>
              <input className="p-4 bg-gray-300 w-80 placeholder:text-black placeholder:font-semibold" type="text" placeholder="Nama Lengkap *"/>
              <input className="p-4 bg-gray-300 w-80 placeholder:text-black placeholder:font-semibold" type="text" placeholder="No HP *"/>
              <button className="p-4 bg-pink-700 text-white cursor-pointer hover:bg-pink-400 hover:text-black  hover:border-pink-600 duration-300 transition-all flex items-center gap-3">Kirim <span><FaArrowRight /></span></button>
            </form>
          </div>
        </MaxWidthWrapper>
    )
}