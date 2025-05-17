import { LiaMedalSolid } from "react-icons/lia";

export default function Badge ({key, title} : {key : number, title?: string}) {
    return (
        <div key={key} className="flex gap-4 w-full md:w-fit">
          <div className="flex items-center justify-center p-1 rounded-full bg-gray-800 w-16 h-16">
            <LiaMedalSolid className="w-full h-full text-white"/>
          </div>
          <h2 className="font-bold text-base text-gray-800 tracking-wide w-64">{title}</h2>
        </div>
    )
}