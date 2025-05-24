import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaCar } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";


export default function HubungiKami() {
  return (
    <MaxWidthWrapper className="py-12">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hubungi Kami</h1>
          <p className="text-gray-600 mb-8">
            Silakan isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="nama"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="telepon"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="0812-3456-7890"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="email@contoh.com"
              />
            </div>

            <div>
              <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-1">
                Pesan Anda
              </label>
              <textarea
                id="pesan"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-red-600 focus:ring-red-600 mr-2"
                />
                <span className="text-sm text-gray-600">
                  Saya setuju dengan kebijakan privasi
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaPhone className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Telepon</h3>
                <p className="text-gray-600">(021) 1234-5678</p>
                <p className="text-gray-600">0812-3456-7890 (WhatsApp)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Lokasi</h3>
                <p className="text-gray-600">
                  Jl. Toyota No. 123, Jakarta Selatan, DKI Jakarta 12345
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">info@toyota-astra.com</p>
                <p className="text-gray-600">marketing@toyota-astra.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaClock className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Jam Operasional</h3>
                <p className="text-gray-600">Senin - Jumat: 08.00 - 17.00 WIB</p>
                <p className="text-gray-600">Sabtu: 08.00 - 15.00 WIB</p>
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

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <MdOutlineSupportAgent className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Layanan Pelanggan</h3>
                <p className="text-gray-600">0800-1-TOYOTA (869682)</p>
                <p className="text-gray-600">24/7 Emergency Service</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-medium text-gray-900 mb-2">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors duration-300">
                <FaFacebook className="text-gray-700 text-xl" />
              </a>
              <a href="#" className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors duration-300">
                <FaInstagram className="text-gray-700 text-xl" />
              </a>
              <a href="#" className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors duration-300">
                <FaTwitter className="text-gray-700 text-xl" />
              </a>
              <a href="#" className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors duration-300">
                <FaYoutube className="text-gray-700 text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}