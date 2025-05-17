import { LiaMedalSolid } from "react-icons/lia";

export default function Badge ({key, title} : {key : number, title?: string}) {
    return (
        <div key={key} className="flex gap-4">
          <div className="flex items-center justify-center p-1 rounded-full bg-pink-800 w-16 h-16">
            <LiaMedalSolid className="w-full h-full text-white"/>
          </div>
          <h2 className="font-bold text-base text-pink-700 tracking-wide w-64">{title}</h2>
        </div>
    )
}