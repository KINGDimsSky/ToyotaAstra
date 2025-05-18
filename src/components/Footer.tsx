import { ArrowUp } from "lucide-react";
import { DataFooter } from "@/lib/data";

export default function Footer () {
    return (
        <div className="flex flex-col items-center h-72">
            <div className="flex gap-2 justify-center items-center border-y border-gray-300 h-12 w-full">
              <div className="flex gap-1 items-center hover:text-red-500 hover:cursor-pointer">
                <a href="#" className="py-2">Back to Top</a>
                <ArrowUp className="w-4 h-4"/>
              </div>
            </div>
            <div className="flex justify-between px-4 min-w-full md:min-w-6xl">
              <div className="flex gap-10 mt-5">
                {DataFooter.map((data) => (
                  <div key={data.id}>
                    <h2 className="font-semibold text-gray-900 text-sm ">{data.title}</h2>
                    <div className="flex flex-col justify-center">
                      {data.content.map((e, index) => (
                        <a key={index} href="" className="text-xs mt-1 text-gray-500 hover:text-red-500">{e.title}</a>
                      ))}
                   </div>
                 </div>
               ))}
              </div>
              <div className="w-24 mt-5">
                <h2>Social Media</h2>
              </div>
            </div>
            <div className="mt-8 pb-6">
              <div className="min-w-full md:min-w-6xl border-t border-gray-300 mb-4"></div>
              <h2 className="text-xs text-gray-500 text-center mb-2">© 2025 Toyota. All Rights reserved.  Developed By. DimsSky</h2>
              <h2 className="text-[11px] text-gray-500 text-center">All Information Applies to Indonesia Vehicles Only</h2>
              <h2 className="text-center text-[11px] text-gray-600 mt-1">Privacy Policy  | Legal Cookies | Contact Us </h2>
            </div>
        </div>
    )
}