'use client'

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const phoneNumber = '6281247029273';
    const message = 'Halo, saya tertarik dengan Salah Satu Mobil Toyota!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`fixed left-5 bottom-5 transition-all duration-300 ease-in-out z-50 ${isHovered ? 'scale-110' : 'scale-100'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="bg-[#25D366] text-white p-3 rounded-full shadow-lg cursor-pointer flex items-center justify-center" onClick={handleClick}>
        <FaWhatsapp size={32} />
        {isHovered && (
          <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-white text-gray-800 rounded-lg shadow-md">
            <p>Butuh bantuan? Chat Raymond Sentosa via WhatsApp!</p>
          </div>
        )}
        {isHovered && (
          <span className="ml-2 mr-2 font-semibold animate-pulse">Hubungi Whatsapp</span>
        )}
      </div>
    </div>
  );
}