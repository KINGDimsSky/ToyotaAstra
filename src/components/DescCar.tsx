import Image from "next/image";


interface imageItem {
    id: number;
    img: string;
    title: string;
    subtitle: string;
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
                  <div key={data.id} className="flex flex-col w-[425px]">
                    <div key={data.id}  className="relative bg-yellow-200 w-[425px] h-72 rounded overflow-hidden">
                      <Image src={data.img} alt={`Image ${data.id}`} fill className="object-cover"/>
                    </div>
                    <div className="flex flex-col w-full px-4 mt-2">
                      <h2 className="text-xl text-gray-800 mb-2">{data.title}</h2>
                      <p className="text-base text-gray-800">{data.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>    
            )}
        </>        
    )
}

const BeyondInterior = ({subtitle, contentTitle, contentSubtitle, heroImage, anotherImage} : {subtitle ?: string, contentTitle?: string, contentSubtitle?: string, heroImage: string | '', anotherImage: imageItem[]}) => {

    return (
        <>
          <h2 className="self-center text-4xl font-bold mt-24">Beyond Interior</h2>
          <p className="text-sm text-gray-600 mt-4">{subtitle}</p>
          <div className="relative w-5/6 h-[34rem] bg-yellow-400 mt-6">
              <Image src={heroImage} alt="Beyond Image" fill className="object-cover"/>
          </div>
          <div className="flex flex-col w-full px-24 mt-2">
            <h2 className="text-xl text-gray-800">{contentTitle}</h2>
            <p className="text-base text-gray-800">{contentSubtitle}</p> 
          </div>
         {anotherImage.length > 0 && (
            <div className="flex flex-wrap gap-8 w-full px-28 mt-8">
              {anotherImage.map((data) => (
                <div key={data.id} className="flex flex-col w-[425px]">
                  <div key={data.id} className="relative bg-yellow-200 w-[425px] h-72 rounded overflow-hidden">
                    <Image src={data.img} alt={`Image ${data.id}`} fill className="object-cover"/>
                  </div>
                  <div className="flex flex-col w-full px-4 mt-2">
                    <h2 className="text-xl text-gray-800 mb-2">{data.title}</h2>
                    <p className="text-base text-gray-800">{data.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
         )}
        </>
    )
} 

const BeyondSafety = ({heroImage, subtitle, contentTitle, contentSubtitle, AnotherImage} : {heroImage : string, subtitle?: string, contentTitle ?: string, contentSubtitle?: string, AnotherImage: imageItem[]}) => {
    return (
        <>
          <h2 className="self-center text-4xl font-bold mt-24">Beyond Safety</h2>
          <p className="text-sm text-gray-600 mt-4">{subtitle}</p>
          <div className="relative w-5/6 h-[34rem] bg-yellow-400 mt-6">
            <Image src={heroImage} alt="Beyond Image" fill className="object-cover"/>
          </div>
          <div className="flex flex-col w-full px-24 mt-2">
            <h2 className="text-xl text-gray-800">{contentTitle}</h2>
            <p className="text-base text-gray-800">{contentSubtitle}</p> 
          </div>
          {AnotherImage.length > 0 && (
            <div className="flex flex-wrap gap-8 w-full px-28 mt-8">
              {AnotherImage.map((data) => (
                <div key={data.id} className="flex flex-col w-[425px]">
                  <div key={data.id} className="relative bg-yellow-200 w-[425px] h-72 rounded overflow-hidden">
                    <Image src={data.img} alt={`Image ${data.id}`} fill className="object-cover"/>
                  </div>
                  <div className="flex flex-col w-full px-4 mt-2">
                    <h2 className="text-xl text-gray-800 mb-2">{data.title}</h2>
                    <p className="text-base text-gray-800">{data.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
    )
}

const BeyondPerformance = ({heroImage, subtitle, contentTitle, contentSubtitle, AnotherImage} : {heroImage : string | '', subtitle?: string, contentTitle ?: string, contentSubtitle?: string, AnotherImage: imageItem[]}) => {
    return (
        <>
          <h2 className="self-center text-4xl font-bold mt-24">Beyond Perfomance</h2>
          <p className="text-sm text-gray-600 mt-4">{subtitle}</p>
          <div className="relative w-5/6 h-[34rem] bg-yellow-400 mt-6">
            <Image src={heroImage} alt="Beyond Image" fill className="object-cover"/>
          </div>
          <div className="flex flex-col w-full px-24 mt-2">
            <h2 className="text-xl text-gray-800">{contentTitle}</h2>
            <p className="text-base text-gray-800">{contentSubtitle}</p> 
          </div>
          {AnotherImage ? (
             <div className="flex flex-wrap gap-8 w-full px-28 mt-8">
              {AnotherImage.map((data) => (
                <div key={data.id} className="flex flex-col w-[425px]">
                  <div key={data.id} className="relative bg-yellow-200 w-[425px] h-72 rounded overflow-hidden">
                    <Image src={data.img} alt={`Image ${data.id}`} fill className="object-cover"/>
                  </div>
                  <div className="flex flex-col w-full px-4 mt-2">
                    <h2 className="text-xl text-gray-800 mb-2">{data.title}</h2>
                    <p className="text-base text-gray-800">{data.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="">
                <h2>None</h2>
            </div>
          ) }
        </>
    )
}

const BeyondConnected = ({heroImage, subtitle, contentTitle, contentSubtitle, AnotherImage} : {heroImage : string | '', subtitle?: string, contentTitle ?: string, contentSubtitle?: string, AnotherImage: imageItem[]}) => {
    return (
        <>
          <h2 className="self-center text-4xl font-bold mt-12">Beyond Connected</h2>
            <p className="text-sm text-gray-600 mt-4">{subtitle}</p>
            <div className="relative w-5/6 h-[34rem] bg-yellow-400 mt-6">
              <Image src={heroImage} alt="Beyond Image" fill className="object-cover"/>
            </div>
            <div className="flex flex-col w-full px-24 mt-2">
              <h2 className="text-xl text-gray-800">{contentTitle}</h2>
              <p className="text-base text-gray-800">{contentSubtitle}</p> 
            </div>
            {AnotherImage.length > 0 && (
              <div className="flex  flex-wrap gap-8 w-full px-28 mt-8">
                {AnotherImage.map((data) => (
                  <div key={data.id} className="flex flex-col w-[425px]">
                    <div key={data.id}  className="relative bg-yellow-200 w-[425px] h-72 rounded overflow-hidden">
                      <Image src={data.img} alt={`Image ${data.id}`} fill className="object-cover"/>
                    </div>
                    <div className="flex flex-col w-full px-4 mt-2">
                      <h2 className="text-xl text-gray-800 mb-2">{data.title}</h2>
                      <p className="text-base text-gray-800">{data.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>    
            )}
        </>
    )
}

const BeyondAccessoris = ({heroImage, subtitle, contentTitle, contentSubtitle, AnotherImage} : {heroImage : string | '', subtitle?: string, contentTitle ?: string, contentSubtitle?: string, AnotherImage: imageItem[]}) => {
    return (
        <>
          <h2 className="self-center text-4xl font-bold mt-24">Beyond Accessoris</h2>
          <p className="text-sm text-gray-600 mt-4">{subtitle}</p>
          <div className="relative w-5/6 h-[34rem] bg-yellow-400 mt-6">
            <Image src={heroImage} alt="Beyond Image" fill className="object-cover"/>
          </div>
          <div className="flex flex-col w-full px-24 mt-2">
            <h2 className="text-xl text-gray-800">{contentTitle}</h2>
            <p className="text-base text-gray-800">{contentSubtitle}</p> 
          </div>
          {AnotherImage ? (
             <div className="flex flex-wrap gap-8 w-full px-28 mt-8">
              {AnotherImage.map((data) => (
                <div key={data.id} className="flex flex-col w-[425px]">
                  <div key={data.id} className="relative bg-yellow-200 w-[425px] h-72 rounded overflow-hidden">
                    <Image src={data.img} alt={`Image ${data.id}`} fill className="object-cover"/>
                  </div>
                  <div className="flex flex-col w-full px-4 mt-2">
                    <h2 className="text-xl text-gray-800 mb-2">{data.title}</h2>
                    <p className="text-base text-gray-800">{data.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="">
                <h2>None</h2>
            </div>
          ) }
        </>
    )
}

const ColorCar = ({heroImage, subtitle, contentTitle, contentSubtitle, AnotherImage} : {heroImage : string | '', subtitle?: string, contentTitle ?: string, contentSubtitle?: string, AnotherImage: imageItem[]}) => {
    return (
       <>
          <h2 className="self-center text-4xl font-bold mt-24">Color Car</h2>
          <p className="text-sm text-gray-600 mt-4">{subtitle}</p>
          <div className="relative w-5/6 h-[34rem] bg-yellow-400 mt-6">
            <Image src={heroImage} alt="Beyond Image" fill className="object-cover"/>
          </div>
          <div className="flex flex-col w-full px-24 mt-2">
            <h2 className="text-xl text-gray-800">{contentTitle}</h2>
            <p className="text-base text-gray-800">{contentSubtitle}</p> 
          </div>
          {AnotherImage ? (
             <div className="flex flex-wrap gap-8 w-full px-28 mt-8">
              {AnotherImage.map((data) => (
                <div key={data.id} className="flex flex-col w-[425px]">
                  <div key={data.id} className="relative bg-yellow-200 w-[425px] h-72 rounded overflow-hidden">
                    <Image src={data.img} alt={`Image ${data.id}`} fill className="object-cover"/>
                  </div>
                  <div className="flex flex-col w-full px-4 mt-2">
                    <h2 className="text-xl text-gray-800 mb-2">{data.title}</h2>
                    <p className="text-base text-gray-800">{data.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="">
                <h2>None</h2>
            </div>
          ) }
        </>
    )
}

DescCar.BeyondExterior = BeyondExterior;
DescCar.BeyondInterior = BeyondInterior;
DescCar.BeyondSafety = BeyondSafety;
DescCar.BeyondPerformance = BeyondPerformance;
DescCar.beyondConnected = BeyondConnected;
DescCar.Accessoris = BeyondAccessoris;
DescCar.ColorCar = ColorCar;