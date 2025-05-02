import Image from "next/image";

export default function Navbar () {
    return (
        <div className="fixed flex bg-white w-full items-center justify-between p-3 mb-6">
            <div className="">
                <Image src={'/logo/ToyotaIconBlack.png'} className="cursor-pointer" alt="Toyota Logo Image" width={120} height={120}></Image>
            </div>
            <div className="flex gap-6 font-semibold tracking-tight">
                <a href="">Toyota Electrified</a>
                <a href="">Gazoo Racing</a>
                <a href="">Models</a>
                <a href="">Shop Now</a>
                <a href="">Ownership</a>
                <a href="">More</a>
            </div>
            <div className="">
                <Image src={'/icons/Maps.png'} className="cursor-pointer" alt="Maps" width={40} height={40}/>
            </div>
        </div>
    )
}