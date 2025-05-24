'use client'

import { FaArrowRight } from "react-icons/fa";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { useState } from "react";

export default function QuickForm() {
  const [formData, setFormData] = useState({
    nama: '',
    mobil: '',
    telepon: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Halo, saya ${formData.nama} ingin informasi tentang mobil ${formData.mobil}. Nomor telepon saya: ${formData.telepon} Apakah Anda bisa Menghubungi Saya?`;
  
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '6281247029273'; // 
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <MaxWidthWrapper className="flex flex-col md:flex-row gap-12">
      <div className="flex flex-col">
        <h2 className="text-4xl w-56 text-white font-bold tracking-tight">Anda Ingin Dihubungi?</h2>
        <p className="text-white text-sm w-96 mt-4 tracking-tight">Apakah Anda ingin berbicara dengan Raymond melalui telepon? Silahkan kirim data Anda dan Raymond akan segera menghubungi Anda. Anda juga dapat mengirim email kepada Raymond jika Anda mau.</p>
      </div>
      <div>
        <h2 className="text-white font-bold">Tinggalkan data Anda Disini, Kami akan segera menghubungi Anda</h2>
        <form onSubmit={handleSubmit} className="mt-4 flex gap-6 flex-wrap">
          <input name="nama" value={formData.nama} onChange={handleChange} className="p-4 bg-gray-300 w-80 placeholder:text-black placeholder:font-semibold" type="text" placeholder="Nama Lengkap *" required/>
          <input name="mobil" value={formData.mobil} onChange={handleChange} className="p-4 bg-gray-300 w-80 placeholder:text-black placeholder:font-semibold" type="text" placeholder="Mobil yang Diminati *" required/>
          <input name="telepon" value={formData.telepon} onChange={handleChange} className="p-4 bg-gray-300 w-80 placeholder:text-black placeholder:font-semibold" type="tel" placeholder="No HP *" required/>
          <button type="submit" className="p-4 bg-pink-700 text-white cursor-pointer hover:bg-pink-400 hover:text-black hover:border-pink-600 duration-300 transition-all flex items-center gap-3"> Kirim <FaArrowRight /> </button>
        </form>
      </div>
    </MaxWidthWrapper>
  );
}