

import React, { useState, useRef } from "react";
import { Typography, Button } from "@material-tailwind/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: "https://i.ibb.co/1Yd9yndw/section5.jpg",
      title: "Best Friend for Your Best Time",
      description:
        "Every pet listed on PetAdoptPlatform meets rigorous health and welfare standards, giving you confidence in your new family member..",
      cta: true,
    },
    {
      image: "https://i.ibb.co/wF1Ffx5t/section6.jpg",
    },
    {
      image: "https://i.ibb.co/W4Y0qVXz/section7.jpg",
    },
    {
      image: "https://i.ibb.co/Lzks6kNd/section8.jpg",
    },
  ];

  const carouselRef = useRef(null);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full  relative">
      {/* Carousel Container */}
      <div
        className="flex overflow-x-hidden scroll-smooth w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] rounded-lg"
        ref={carouselRef}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="min-w-full relative">
            <img
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            {slide.cta && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/40 dark:bg-black/60">
                <Typography
                  variant="h2"
                  className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-gray-200 text-sm sm:text-base max-w-md mt-3"
                >
                  {slide.description}
                </Typography>
                
                  <Button
                    color="orange"
                    size="lg"
                    className="mt-6 bg-gradient-to-r from-yellow-400 to-red-500 text-white hover:scale-105 transition-transform duration-300"
                  >
                    Explore our PetAdoptPlatform
                  </Button>
                
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Left/Right Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full shadow hover:scale-105 transition"
      >
        <ChevronLeftIcon className="w-6 h-6 text-black dark:text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full shadow hover:scale-105 transition"
      >
        <ChevronRightIcon className="w-6 h-6 text-black dark:text-white" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 py-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              scrollToSlide(idx);
            }}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx
                ? "bg-blue-500"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
