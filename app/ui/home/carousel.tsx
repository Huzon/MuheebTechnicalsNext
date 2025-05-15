'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/office.jpg",
    heading: "Home Renovations and Interiors",
    subheading: "Comprehensive solutions for stylish and modern home renovations"
  },
  {
    image: "/images/kitchen.jpg",
    heading: "Kitchen Makeovers",
    subheading: "Transform your kitchen with our premium remodeling services"
  },
  {
    image: "/images/bathroom.jpg",
    heading: "Bathroom Renovations",
    subheading: "Luxurious bathroom designs tailored to your preferences"
  },
  {
    image: "/images/living-room.jpg",
    heading: "Living Space Transformations",
    subheading: "Create inviting living areas with our expert design team"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      transitionToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const transitionToNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500); // This matches the transition duration
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Slide Image with Transition */}
      <div className={`relative h-full w-full transition-opacity duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].heading}
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Slide Content with Same Transition */}
      <div className={`absolute inset-0 flex flex-col justify-center items-center text-center p-5 z-10 text-white transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className="font-bold text-3xl md:text-5xl mb-4">
          {slides[currentSlide].heading}
        </h1>
        <h4 className="text-lg md:text-xl max-w-2xl">
          {slides[currentSlide].subheading}
        </h4>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}