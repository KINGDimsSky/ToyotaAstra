import Image from "next/image";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { DataNavbar } from "@/data/dataNavbar";

export default function Navbar () {
    return (
        <MaxWidthWrapper className="md:right-0.5 md:left-0.5 z-50">
            <div className="flex justify-between items-center py-4">
                <Image src={'/logo/ToyotaIconBlack.png'} width={150} height={150} alt="logo"/>
                <div className="hidden md:flex  gap-8 uppercase tracking-wider font-semibold">
                   {DataNavbar.map((data) => (
                    <a key={data.id} href="" className="hover:text-pink-600 cursor-pointer">{data.name}</a>
                   ))}
                </div>
                <h2 className="md:hidden flex">Hamburger</h2>
            </div>
        </MaxWidthWrapper>
    )
}