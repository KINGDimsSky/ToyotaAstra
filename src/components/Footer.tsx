import { ArrowUp } from "lucide-react";

export default function Footer () {
    return (
        <div className="flex flex-col items-center h-fit">
            <div className="flex gap-2 justify-center items-center border-y border-gray-300 h-12 w-full">
              <div className="flex gap-1 items-center hover:text-red-500 hover:cursor-pointer">
                <a href="#" className="py-2">Back to Top</a>
                <ArrowUp className="w-4 h-4"/>
              </div>
            </div>
            <div className="mt-8 pb-6">
              <h2 className="text-xs text-gray-500 text-center mb-2">© 2025 Toyota. All Rights reserved.  Developed By. DimsSky</h2>
              <h2 className="text-[11px] text-gray-500 text-center">All Information Applies to Indonesia Vehicles Only</h2>
              <h2 className="text-center text-[11px] text-gray-600 mt-1">Privacy Policy  | Legal Cookies | Contact Us </h2>
            </div>
        </div>
    )
}