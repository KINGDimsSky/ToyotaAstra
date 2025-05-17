'use client'

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  job: string;
  message: string;
  rating: number;
  avatar: string;
}

export default function ClientRating() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left'|'right'>('right');
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sophia Williams",
      job: "CEO at NexGen Tech",
      message: "The level of professionalism and attention to detail exceeded all our expectations. Our productivity increased by 60% after implementation.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200"
    },
    {
      id: 2,
      name: "Michael Chen",
      job: "Marketing Director",
      message: "Working with this team was transformative. They understood our vision immediately and delivered beyond what we imagined possible.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      job: "Product Lead at InnovateX",
      message: "The seamless integration and intuitive design saved us countless hours. Customer satisfaction scores are at an all-time high.",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200"
    },
    {
      id: 4,
      name: "James Wilson",
      job: "CTO Digital Solutions",
      message: "Technical excellence combined with creative problem-solving. They identified opportunities we didn't even know existed.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrev = () => {
    setDirection('left');
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  return (
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative max-w-4xl mx-auto">
          <button onClick={goToPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110" aria-label="Previous testimonial">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110" aria-label="Next testimonial">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="relative h-[400px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 translate-x-0' :  direction === 'right' ? (index < currentIndex ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0') : (index > currentIndex ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0')}`}>
                <div className="h-full bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">
                  <div className="absolute top-8 left-8 text-blue-100 text-7xl font-serif">"</div>
                  <div className="p-12 pt-20 flex-1 flex flex-col">
                    <p className="text-xl text-gray-700 mb-8 flex-1">{testimonial.message}</p>
                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"/>
                        <div className="ml-4">
                          <div className="flex mb-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.job}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div className="inline-flex space-x-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => { setDirection(index > currentIndex ? 'right' : 'left'); setCurrentIndex(index); }} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`} aria-label={`Go to testimonial ${index + 1}`}/>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}