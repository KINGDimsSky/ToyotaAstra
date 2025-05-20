import Image from "next/image";

interface imageItem {
    id: number;
    img: string;
}

export default function DescCar ({children} : {children : React.ReactNode}) {
    return (
        <div className="flex flex-col items-center mt-12">
          {children}
        </div>
    )
}

const BeyondExterior =  ({subtitle, contentTitle, contentSubtitle, image, AnotherImage} : {subtitle ?: string, contentTitle?: string, contentSubtitle?: string, image: string, AnotherImage: imageItem[]}) => {
    return (
        <>
         <h2 className="self-center text-4xl font-bold">Beyond Exterior</h2>
            <p className="text-sm text-gray-600 mt-4">{subtitle}</p>
            <div className="relative w-5/6 h-[34rem] bg-yellow-400 mt-6">
              <Image src={image} alt="Beyond Image" fill className="object-cover"/>
            </div>
            <div className="flex flex-col w-full px-24 mt-2">
              <h2 className="text-xl text-gray-800">{contentTitle}</h2>
              <p className="text-base text-gray-800">{contentSubtitle}</p> 
            </div>
            {AnotherImage.length > 0 && (
              <div className="flex  flex-wrap gap-8 w-full px-28 mt-8">
                {AnotherImage.map((data) => (
                  <div key={data.id} className="relative bg-yellow-200 w-[425px] h-72 rounded overflow-hidden">
                    <Image src={data.img} alt={`Image ${data.id}`} fill className="object-cover"/>
                  </div>
                ))}
              </div>    
            )}
        </>        
    )
}

const BeyondInterior = ({subtitle, contentTitle, contentSubtitle, image, anotherImage} : {subtitle ?: string, contentTitle?: string, contentSubtitle?: string, image: string, anotherImage: imageItem[]}) => {

    return (
        <>
          <h2 className="self-center text-4xl font-bold mt-24">Beyond Interior</h2>
          <p className="text-sm text-gray-600 mt-4">{subtitle}</p>
          <div className="relative w-5/6 h-[34rem] bg-yellow-400 mt-6">
              <Image src={'/assets/BmwM2.jpg'} alt="Beyond Image" fill className="object-cover"/>
          </div>
          <div className="flex flex-col w-full px-24 mt-2">
            <h2 className="text-xl text-gray-800">{contentTitle}</h2>
            <p className="text-base text-gray-800">{contentSubtitle}</p> 
          </div>
         {anotherImage.length > 0 && (
            <div className="flex flex-wrap gap-8 w-full px-28 mt-8">
              {anotherImage.map((data) => (
                <div key={data.id} className="relative bg-yellow-200 w-[425px] h-72 rounded overflow-hidden">
                  <Image src={data.img} alt={`Image ${data.id}`} fill className="object-cover"/>
                </div>
              ))}
            </div>
         )}
        </>
    )
} 

const BeyondSafety = ({}) => {
    return (
        <>
          <h2 className="self-center text-4xl font-bold mt-24">Beyond Safety</h2>
          <p className="text-sm text-gray-600 mt-4"></p>
          <div className="relative w-5/6 h-[34rem] bg-yellow-400 mt-6">
              <Image src={'/assets/BmwM2.jpg'} alt="Beyond Image" fill className="object-cover"/>
          </div>
        </>
    )
}

const BeyondPerformance = ({}) => {
    return (
        <div className="">

        </div>
    )
}

const BeyondConnected = ({}) => {
    return (
        <div className="">

        </div>
    )
}

const BeyondAccessoris = ({}) => {
    return (
        <div className="">

        </div>
    )
}

const ColorCar = ({}) => {
    return (
        <div className="">

        </div>
    )
}

DescCar.BeyondExterior = BeyondExterior;
DescCar.BeyondInterior = BeyondInterior;
DescCar.BeyondSafety = BeyondSafety;
DescCar.BeyondPerformance = BeyondPerformance;
DescCar.beyondConnected = BeyondConnected;
DescCar.Accessoris = BeyondAccessoris;
DescCar.ColorCar = ColorCar;