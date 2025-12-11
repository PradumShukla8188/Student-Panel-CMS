'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import slides from '@/data/slides.json';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-r from-rose-400 to-rose-600">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              filter: "brightness(0.7)",
            }}
          />

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-3xl text-white">

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 sm:mb-6 text-amber-300 drop-shadow-lg">
                {slide.subtitle}
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-xl leading-relaxed drop-shadow-md">
                {slide.description}
              </p>

              {/* Circle Badge */}
              <div className="mt-6 sm:mt-8 flex items-center gap-4">
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                      100
                    </div>
                    <div className="text-[10px] sm:text-xs">% SUCCESS</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Left Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 sm:p-2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>

      {/* Right Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 sm:p-2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentSlide ? "bg-amber-500 w-6 sm:w-8" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
