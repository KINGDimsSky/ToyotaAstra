'use client'

import { useState } from 'react';
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaCar, FaWhatsapp } from "react-icons/fa";
import { FaInstagram, } from "react-icons/fa";

export default function HubungiKami() {
  const [formData, setFormData] = useState({
    nama: '',
    telepon: '',
    email: '',
    pesan: '',
    produk: 'New Hellfire HEV',
    lokasi: 'Jakarta'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Halo Plaza Toyota Gading Serpong,\n\nSaya ${formData.nama} ingin mendapatkan informasi lebih lanjut tentang:\n\n*Produk/Minat:* ${formData.produk}\n*Lokasi:* ${formData.lokasi}\n\nDetail kontak saya:\n- Telepon: ${formData.telepon}\n- Email: ${formData.email}\n\nPesan:\n${formData.pesan}\n\nTerima kasih.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '6281247029273'; 

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <MaxWidthWrapper className="py-12">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hubungi Kami</h1>
          <p className="text-gray-600 mb-8">
            Silakan isi formulir di bawah ini dan tim kami akan segera menghubungi Anda via WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telepon"
                  name="telepon"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  onChange={handleChange}
                  placeholder="Contoh: 081234567890"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="produk" className="block text-sm font-medium text-gray-700 mb-1">
                Produk/Minat
              </label>
              <input
                id="produk"
                name="produk"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                onChange={handleChange}
              >
              </input>
            </div>

            <div>
              <label htmlFor="lokasi" className="block text-sm font-medium text-gray-700 mb-1">
                Lokasi Anda
              </label>
              <select
                id="lokasi"
                name="lokasi"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                onChange={handleChange}
                value={formData.lokasi}
              >
                <option value="Jakarta">Jakarta</option>
                <option value="Bogor">Bogor</option>
                <option value="Depok">Depok</option>
                <option value="Tangerang">Tangerang</option>
                <option value="Bekasi">Bekasi</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-1">
                Pesan Anda
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                onChange={handleChange}
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  required
                  className="rounded border-gray-300 text-red-600 focus:ring-red-600 mr-2"
                />
                <span className="text-sm text-gray-600">
                  Saya setuju dengan kebijakan privasi *
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Kirim via WhatsApp
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaPhone className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Telepon</h3>
                <p className="text-gray-600">(62) 81247029273</p>
                <p className="text-gray-600">081247029273 (WhatsApp) </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Lokasi</h3>
                <p className="text-gray-600">
                  JL Raya Boulevard, Kav. 5-11, Gading Serpong, Summarecon, Tangerang, Curug Sangereng, Kelapa Dua, Tangerang Regency, Banten 15810
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">raymond.santosa@plazatoyota.co.id</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaClock className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Jam Operasional</h3>
                <p className="text-gray-600">Setiap Hari 08.30 - 19.30 WIB</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaCar className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Test Drive</h3>
                <p className="text-gray-600">
                  Jadwalkan test drive kendaraan Toyota pilihan Anda
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-medium text-gray-900 mb-2">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors duration-300">
                <FaInstagram className="text-gray-700 text-xl" />
              </a>
              <a href="" className='bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors duration-300'>
                 <FaWhatsapp className="text-gray-700 text-xl"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}