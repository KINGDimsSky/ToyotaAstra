'use client'

import { useState, useEffect } from "react"
import { CategoryCar } from "@/data/dataCategoryCar";

export default function CatalogCar () {
    const [StateCategory, SetStateCategory] = useState<string>('All');

    const handleCategory = (category: string) => {
        SetStateCategory(category)
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-4xl font-semibold uppercase tracking-wide">Cari Toyota Pilihan Anda</h2>
            <p className="text-gray-600 mt-6">Jelajahi seluruh rangkaian model Toyota dan temukan yang paling cocok untuk Anda.</p>
            <div className="flex flex-col mt-12 w-full">
              <div className="flex justify-center gap-4">
                {CategoryCar.map((data) => (
                  <h2 onClick={() => handleCategory(data.name)} className={`py-2 px-4 ${StateCategory === data.name ? "bg-pink-600 text-white" : "bg-white text-black hover:bg-pink-600 hover:text-white"} cursor-pointer rounded-lg font-semibold text-sm transition-all duration-300`}>{data.name}</h2>
                ))}
              </div>
            </div>
        </div>
    )
}