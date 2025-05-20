'use client'

import { useState, useEffect } from "react"
import { CategoryCar } from "@/lib/data";
import CardProduct from "./Cardproduct";
import { MdFileDownload } from "react-icons/md";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { getDataCar } from "@/services/index.service";

export default function CatalogCar () {
    const [StateCategory, SetStateCategory] = useState<string>('All');
    const [CarData, SetCarData] = useState<any[]>([]);

    const getData = async (category: string) => {
      try {
        const car = await getDataCar(category);
        SetCarData(car.data);
      }catch(err){
        throw new Error('Error Getting Data!');
      }
    }

    useEffect(() => {
      getData(StateCategory);
    }, [StateCategory])

    const handleCategory = async (category: string) => {
        SetStateCategory(category);
    } 

    return (
      <MaxWidthWrapper className="mt-12 md:mt-16 px-4 sm:px-0">
        <div id="catalog" className="flex flex-col items-center">
            <h2 className="text-4xl text-center  font-bold uppercase tracking-wide">Cari Toyota Pilihan Anda</h2>
            <p className="text-gray-600 mt-6 text-sm text-center md:text-base">Jelajahi seluruh rangkaian model Toyota dan temukan yang paling cocok untuk Anda.</p>
            <div className="flex flex-col mt-12 w-full">
              <div className="flex justify-center gap-4 flex-wrap">
                {CategoryCar.map((data) => (
                  <h2 key={data.id} onClick={() => handleCategory(data.name)} className={`py-2 px-4 ${StateCategory === data.name ? "bg-pink-600 text-white" : "bg-white text-black hover:bg-pink-600 hover:text-white"} cursor-pointer rounded-lg font-semibold text-sm transition-all duration-300`}>{data.name}</h2>
                ))}
              </div>
              <div className="flex gap-2 mt-8 flex-wrap mb-12">
                {CarData.length > 0 ? (
                  <div>
                    {CarData.map((data) => (
                      <CardProduct key={data.id} slug={data.slug} name={data.name} category={data.category} 
                      carImage={data.carImage} price={data.price}/>
                    ))}
                  </div>
                ) : (
                  <h2 className="text-center w-full font-semibold">Oops No Vehicle Found!</h2>
                )}
              </div>
              <div className="flex self-center items-center w-fit bg-pink-600 hover:bg-pink-800 transition-all duration-200 py-3 px-6 gap-1 cursor-pointer">
                <h2 className="font-semibold text-white">Unduh Daftar Harga</h2>
                <MdFileDownload className="w-6 h-6 mt-1 text-white"/>
              </div>
            </div>
        </div>
      </MaxWidthWrapper>
        
    )
}