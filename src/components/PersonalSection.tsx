import { MaxWidthWrapper } from "./MaxWidthWrapper";

export default function PersonalSection () {
    return (
        <MaxWidthWrapper className="bg-pink-400">
           <div className="flex gap-4">
              <div className="flex flex-col">
                <h2 className="mb-4">Fotone Raysan</h2>
                <h2>Bawahne Deskripsi ne</h2>
              </div>
           </div>
        </MaxWidthWrapper>
    )
}