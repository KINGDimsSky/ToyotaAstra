import { dataBadge } from "@/lib/data";
import Badge from "./Badge";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export default function FaQ () {
    return (
        <MaxWidthWrapper>
        <div className="flex flex-col mt-12">
            <h2 className="uppercase text-gray-400 text-sm tracking-tight mb-1">taking care of every client</h2>
            <h2 className="font-bold text-6xl tracking-tight mb-8">Mengapa Dealer Kita?</h2> 
            <p className="font-semibold text-base tracking-wide w-[22rem] md:w-[28rem] text-gray-900">Kami mengutamakan kenyamanan dan keselamatan klien kami. Itulah sebabnya kami memberikan layanan terbaik yang dapat Anda bayangkan.</p>
            <div className="flex flex-col gap-2 w-full mt-16">
              <h2 className="text-center w-full text-3xl font-bold">Alasan Mengapa Harus Beli Mobil di Dealer Kami?</h2>
              <div className="flex justify-center gap-6 mt-8 flex-wrap">
                {dataBadge.map((data) => (
                  <Badge key={data.id} title={data.title} icon={data.icon}/>
                ))}
              </div>
            </div>
        </div>
        </MaxWidthWrapper>
    )
}