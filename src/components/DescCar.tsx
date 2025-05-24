import Image from "next/image";

interface imageItem {
  id: number;
  img: string;
  title: string;
  subtitle: string;
}

export default function DescCar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center mt-6 md:mt-12">
      {children}
    </div>
  );
}

const BeyondExterior = ({
  subtitle,
  contentTitle,
  contentSubtitle,
  image,
  AnotherImage,
}: {
  subtitle?: string;
  contentTitle?: string;
  contentSubtitle?: string;
  image: string;
  AnotherImage: imageItem[];
}) => {
  return (
    <>
      <h2 className="self-center text-2xl md:text-4xl font-bold">Beyond Exterior</h2>
      <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-4 text-center px-4 md:px-0">
        {subtitle}
      </p>
      <div className="relative w-full md:w-5/6 h-64 md:h-[34rem] bg-gray-200 mt-4 md:mt-6">
        <Image src={image} alt="Beyond Image" fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" />
      </div>
      <div className="flex flex-col w-full px-4 md:px-24 mt-2">
        <h2 className="text-lg md:text-xl text-gray-800">{contentTitle}</h2>
        <p className="text-sm md:text-base text-gray-800">{contentSubtitle}</p>
      </div>
      {AnotherImage.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 w-full px-4 md:px-28 mt-6 md:mt-8">
          {AnotherImage.map((data) => (
            <div key={data.id} className="flex flex-col w-full">
              <div className="relative bg-gray-100 w-full aspect-square md:h-72 rounded overflow-hidden">
                <Image
                  src={data.img}
                  alt={`Image ${data.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 425px"
                />
              </div>
              <div className="flex flex-col w-full px-2 md:px-4 mt-2">
                <h2 className="text-lg md:text-xl text-gray-800 mb-1 md:mb-2">
                  {data.title}
                </h2>
                <p className="text-sm md:text-base text-gray-800">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const BeyondInterior = ({
  subtitle,
  contentTitle,
  contentSubtitle,
  heroImage,
  anotherImage,
}: {
  subtitle?: string;
  contentTitle?: string;
  contentSubtitle?: string;
  heroImage: string | "";
  anotherImage: imageItem[];
}) => {
  return (
    <>
      <h2 className="self-center text-2xl md:text-4xl font-bold mt-12 md:mt-24">
        Beyond Interior
      </h2>
      <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-4 text-center px-4 md:px-0">
        {subtitle}
      </p>
      <div className="relative w-full md:w-5/6 h-64 md:h-[34rem] bg-gray-200 mt-4 md:mt-6">
        <Image
          src={heroImage}
          alt="Beyond Image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
      <div className="flex flex-col w-full px-4 md:px-24 mt-2">
        <h2 className="text-lg md:text-xl text-gray-800">{contentTitle}</h2>
        <p className="text-sm md:text-base text-gray-800">{contentSubtitle}</p>
      </div>
      {anotherImage.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 w-full px-4 md:px-28 mt-6 md:mt-8">
          {anotherImage.map((data) => (
            <div key={data.id} className="flex flex-col w-full">
              <div className="relative bg-gray-100 w-full aspect-square md:h-72 rounded overflow-hidden">
                <Image
                  src={data.img}
                  alt={`Image ${data.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 425px"
                />
              </div>
              <div className="flex flex-col w-full px-2 md:px-4 mt-2">
                <h2 className="text-lg md:text-xl text-gray-800 mb-1 md:mb-2">
                  {data.title}
                </h2>
                <p className="text-sm md:text-base text-gray-800">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const BeyondSafety = ({
  heroImage,
  subtitle,
  contentTitle,
  contentSubtitle,
  AnotherImage,
}: {
  heroImage: string;
  subtitle?: string;
  contentTitle?: string;
  contentSubtitle?: string;
  AnotherImage: imageItem[];
}) => {
  return (
    <>
      <h2 className="self-center text-2xl md:text-4xl font-bold mt-12 md:mt-24">
        Beyond Safety
      </h2>
      <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-4 text-center px-4 md:px-0">
        {subtitle}
      </p>
      <div className="relative w-full md:w-5/6 h-64 md:h-[34rem] bg-gray-200 mt-4 md:mt-6">
        <Image
          src={heroImage}
          alt="Beyond Image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
      <div className="flex flex-col w-full px-4 md:px-24 mt-2">
        <h2 className="text-lg md:text-xl text-gray-800">{contentTitle}</h2>
        <p className="text-sm md:text-base text-gray-800">{contentSubtitle}</p>
      </div>
      {AnotherImage.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 w-full px-4 md:px-28 mt-6 md:mt-8">
          {AnotherImage.map((data) => (
            <div key={data.id} className="flex flex-col w-full">
              <div className="relative bg-gray-100 w-full aspect-square md:h-72 rounded overflow-hidden">
                <Image
                  src={data.img}
                  alt={`Image ${data.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 425px"
                />
              </div>
              <div className="flex flex-col w-full px-2 md:px-4 mt-2">
                <h2 className="text-lg md:text-xl text-gray-800 mb-1 md:mb-2">
                  {data.title}
                </h2>
                <p className="text-sm md:text-base text-gray-800">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const BeyondPerformance = ({
  heroImage,
  subtitle,
  contentTitle,
  contentSubtitle,
  AnotherImage,
}: {
  heroImage: string | "";
  subtitle?: string;
  contentTitle?: string;
  contentSubtitle?: string;
  AnotherImage: imageItem[];
}) => {
  return (
    <>
      <h2 className="self-center text-2xl md:text-4xl font-bold mt-12 md:mt-24">
        Beyond Performance
      </h2>
      <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-4 text-center px-4 md:px-0">
        {subtitle}
      </p>
      <div className="relative w-full md:w-5/6 h-64 md:h-[34rem] bg-gray-200 mt-4 md:mt-6">
        <Image
          src={heroImage}
          alt="Beyond Image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
      <div className="flex flex-col w-full px-4 md:px-24 mt-2">
        <h2 className="text-lg md:text-xl text-gray-800">{contentTitle}</h2>
        <p className="text-sm md:text-base text-gray-800">{contentSubtitle}</p>
      </div>
      {AnotherImage ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 w-full px-4 md:px-28 mt-6 md:mt-8">
          {AnotherImage.map((data) => (
            <div key={data.id} className="flex flex-col w-full">
              <div className="relative bg-gray-100 w-full aspect-square md:h-72 rounded overflow-hidden">
                <Image
                  src={data.img}
                  alt={`Image ${data.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 425px"
                />
              </div>
              <div className="flex flex-col w-full px-2 md:px-4 mt-2">
                <h2 className="text-lg md:text-xl text-gray-800 mb-1 md:mb-2">
                  {data.title}
                </h2>
                <p className="text-sm md:text-base text-gray-800">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <h2 className="text-gray-500">None</h2>
        </div>
      )}
    </>
  );
};

const BeyondConnected = ({
  heroImage,
  subtitle,
  contentTitle,
  contentSubtitle,
  AnotherImage,
}: {
  heroImage: string | "";
  subtitle?: string;
  contentTitle?: string;
  contentSubtitle?: string;
  AnotherImage: imageItem[];
}) => {
  return (
    <>
      <h2 className="self-center text-2xl md:text-4xl font-bold mt-12 md:mt-24">
        Beyond Connected
      </h2>
      <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-4 text-center px-4 md:px-0">
        {subtitle}
      </p>
      <div className="relative w-full md:w-5/6 h-64 md:h-[34rem] bg-gray-200 mt-4 md:mt-6">
        <Image
          src={heroImage}
          alt="Beyond Image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
      <div className="flex flex-col w-full px-4 md:px-24 mt-2">
        <h2 className="text-lg md:text-xl text-gray-800">{contentTitle}</h2>
        <p className="text-sm md:text-base text-gray-800">{contentSubtitle}</p>
      </div>
      {AnotherImage.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 w-full px-4 md:px-28 mt-6 md:mt-8">
          {AnotherImage.map((data) => (
            <div key={data.id} className="flex flex-col w-full">
              <div className="relative bg-gray-100 w-full aspect-square md:h-72 rounded overflow-hidden">
                <Image
                  src={data.img}
                  alt={`Image ${data.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 425px"
                />
              </div>
              <div className="flex flex-col w-full px-2 md:px-4 mt-2">
                <h2 className="text-lg md:text-xl text-gray-800 mb-1 md:mb-2">
                  {data.title}
                </h2>
                <p className="text-sm md:text-base text-gray-800">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const BeyondAccessoris = ({
  heroImage,
  subtitle,
  contentTitle,
  contentSubtitle,
  AnotherImage,
}: {
  heroImage: string | "";
  subtitle?: string;
  contentTitle?: string;
  contentSubtitle?: string;
  AnotherImage: imageItem[];
}) => {
  return (
    <>
      <h2 className="self-center text-2xl md:text-4xl font-bold mt-12 md:mt-24">
        Beyond Accessories
      </h2>
      <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-4 text-center px-4 md:px-0">
        {subtitle}
      </p>
      <div className="relative w-full md:w-5/6 h-64 md:h-[34rem] bg-gray-200 mt-4 md:mt-6">
        <Image
          src={heroImage}
          alt="Beyond Image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
      <div className="flex flex-col w-full px-4 md:px-24 mt-2">
        <h2 className="text-lg md:text-xl text-gray-800">{contentTitle}</h2>
        <p className="text-sm md:text-base text-gray-800">{contentSubtitle}</p>
      </div>
      {AnotherImage ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 w-full px-4 md:px-28 mt-6 md:mt-8">
          {AnotherImage.map((data) => (
            <div key={data.id} className="flex flex-col w-full">
              <div className="relative bg-gray-100 w-full aspect-square md:h-72 rounded overflow-hidden">
                <Image
                  src={data.img}
                  alt={`Image ${data.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 425px"
                />
              </div>
              <div className="flex flex-col w-full px-2 md:px-4 mt-2">
                <h2 className="text-lg md:text-xl text-gray-800 mb-1 md:mb-2">
                  {data.title}
                </h2>
                <p className="text-sm md:text-base text-gray-800">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <h2 className="text-gray-500">None</h2>
        </div>
      )}
    </>
  );
};

const ColorCar = ({
  heroImage,
  subtitle,
  contentTitle,
  contentSubtitle,
  AnotherImage,
}: {
  heroImage: string | "";
  subtitle?: string;
  contentTitle?: string;
  contentSubtitle?: string;
  AnotherImage: imageItem[];
}) => {
  return (
    <>
      <h2 className="self-center text-2xl md:text-4xl font-bold mt-12 md:mt-24">
        Color Car
      </h2>
      <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-4 text-center px-4 md:px-0">
        {subtitle}
      </p>
      <div className="relative w-full md:w-5/6 h-64 md:h-[34rem] bg-gray-200 mt-4 md:mt-6">
        <Image
          src={heroImage}
          alt="Beyond Image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
      <div className="flex flex-col w-full px-4 md:px-24 mt-2">
        <h2 className="text-lg md:text-xl text-gray-800">{contentTitle}</h2>
        <p className="text-sm md:text-base text-gray-800">{contentSubtitle}</p>
      </div>
      {AnotherImage ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 w-full px-4 md:px-28 mt-6 md:mt-8">
          {AnotherImage.map((data) => (
            <div key={data.id} className="flex flex-col w-full">
              <div className="relative bg-gray-100 w-full aspect-square md:h-72 rounded overflow-hidden">
                <Image
                  src={data.img}
                  alt={`Image ${data.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 425px"
                />
              </div>
              <div className="flex flex-col w-full px-2 md:px-4 mt-2">
                <h2 className="text-lg md:text-xl text-gray-800 mb-1 md:mb-2">
                  {data.title}
                </h2>
                <p className="text-sm md:text-base text-gray-800">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <h2 className="text-gray-500">None</h2>
        </div>
      )}
    </>
  );
};

DescCar.BeyondExterior = BeyondExterior;
DescCar.BeyondInterior = BeyondInterior;
DescCar.BeyondSafety = BeyondSafety;
DescCar.BeyondPerformance = BeyondPerformance;
DescCar.beyondConnected = BeyondConnected;
DescCar.Accessoris = BeyondAccessoris;
DescCar.ColorCar = ColorCar;