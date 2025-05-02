import { ArrowUp } from "lucide-react";

export default function Footer () {
    return (
        <div className="flex flex-col items-center h-64">
            <div className="flex gap-2 justify-center items-center border-y border-gray-300 h-12 w-full">
              <div className="flex gap-1 items-center  hover:text-red-500 hover:cursor-pointer">
                <a href="#">Back to Top</a>
                <ArrowUp className="w-4 h-4"/>
              </div>
            </div>
            <div className="flex gap-24 mt-5">
              <div className="">
                <h2 className="font-semibold text-gray-800">Beyond Solution</h2>
                <div className="">

                </div>
              </div>
              <div className="">
                <h2>Beyond Experience</h2>
              </div>
            </div>
        </div>
    )
}