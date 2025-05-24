'use client'

import Image from "next/image";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaTimes, FaBars, FaChevronDown } from "react-icons/fa";
import { DataNavbar } from "@/lib/data";
import { dataCar } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (id: number) => setActiveSubmenu(activeSubmenu === id ? null : id);

  const mobilSubmenu = dataCar.map(car => ({
    id: car.id,
    name: car.name,
    href: `/mobil/${car.slug}`
  }));

  return (
    <div className="sticky top-0 bg-white z-50 shadow-sm">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center py-4 relative">
          <Link href="/" className="z-50">
            <Image src={'/logo/ToyotaIconBlack.png'} width={150} height={50} alt="Toyota Logo" className="cursor-pointer hover:opacity-90 transition-opacity" priority/>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {DataNavbar.map((item) => (
              <div key={item.id} className="relative group">
                {item.id === 2 ? ( 
                  <>
                    <button onClick={() => toggleSubmenu(item.id)} className="px-3 py-2 uppercase tracking-wider font-medium text-gray-800 hover:text-pink-600 transition-colors flex items-center gap-1">
                      {item.name}
                      <FaChevronDown className={`text-xs mt-0.5 transition-transform ${activeSubmenu === item.id ? 'rotate-180' : ''}`} />
                    </button>  
                    {activeSubmenu === item.id && (
                      <div className="absolute left-0 top-full bg-white shadow-lg rounded-md min-w-[220px] py-2">
                        {mobilSubmenu.map((car) => (
                          <Link key={car.id} href={car.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors">
                            {car.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href || '#'} className="px-3 py-2 uppercase tracking-wider font-medium text-gray-800 hover:text-pink-600 transition-colors">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <button onClick={toggleMenu} className="md:hidden flex items-center justify-center w-10 h-10 z-50 focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? (
              <FaTimes className="text-2xl text-gray-800" />
            ) : (
              <FaBars className="text-2xl text-gray-800" />
            )}
          </button>

          <div ref={menuRef} className={`fixed inset-0 bg-white pt-24 px-6 pb-8 z-40 md:hidden overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className="space-y-4">
              {DataNavbar.map((item) => (
                <li key={item.id} className="border-b border-gray-100">
                  {item.id === 2 ? (
                    <>
                      <button onClick={() => toggleSubmenu(item.id)} className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-800 uppercase tracking-wide">
                        <span>{item.name}</span>
                        <FaChevronDown className={`text-sm transition-transform ${activeSubmenu === item.id ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeSubmenu === item.id && (
                        <div className="pl-4 pb-2">
                          {mobilSubmenu.map((car) => (
                            <Link key={car.id} href={car.href} className="block py-2 text-gray-600 hover:text-pink-600" onClick={() => setIsOpen(false)}>
                              {car.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href || '#'} className="block py-3 text-lg font-medium text-gray-800 uppercase tracking-wide hover:text-pink-600" onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}