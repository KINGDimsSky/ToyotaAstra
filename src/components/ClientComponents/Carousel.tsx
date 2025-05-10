'use client'

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Images } from "@/data/dataCarouselImage";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left'|'right'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    if (isTransitioning) return;
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === Images.length - 1 ? 0 : prevIndex + 1
    );
    setIsTransitioning(true);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Images.length - 1 : prevIndex - 1
    );
    setIsTransitioning(true);
  };

  const goToImage = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
    setIsTransitioning(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="h-[45vh] md:h-[90vh] w-full flex items-center justify-center relative overflow-hidden">
      <div className="relative w-full h-full">
        {Images.map((image, index) => (
          <div key={image} className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 
              index < currentIndex ? 
                (direction === 'right' ? '-translate-x-full' : 'translate-x-full') : 
                (direction === 'right' ? 'translate-x-full' : '-translate-x-full')
            }`}>
            <Image src={image} alt={`Carousel image ${index + 1}`} fill className="object-cover" priority={index === currentIndex}/>
          </div>
        ))}
      </div>
      <button onClick={prevImage} className="absolute left-5 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Previous image"
        disabled={isTransitioning}>
       <ArrowLeft size={24} />
      </button>
      <button onClick={nextImage} className="absolute right-5 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Next image"
        disabled={isTransitioning}>
        <ArrowRight size={24} />
      </button>
      <div className="absolute bottom-5 flex gap-2 z-10">
        {Images.map((_, index) => (
          <button key={index} onClick={() => goToImage(index)} className={`w-3 h-3 rounded-full transition-colors ${
            currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/70' }`}
            aria-label={`Go to image ${index + 1}`}
            disabled={isTransitioning}/>
       ))}
      </div>
    </div>
  );
}