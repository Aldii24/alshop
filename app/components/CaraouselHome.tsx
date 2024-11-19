"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useEffect, useState } from "react";

const imageCarousel = [
  {
    id: 1,
    src: "/caraousel1.png",
    title: "Converse Shoes",
    description: "Converse Shoes Collection 2024",
  },
  {
    id: 2,
    src: "/caraousel2.png",
    title: "New Balance Shoes",
    description: "New Balance Shoes Collection 2024",
  },
  {
    id: 3,
    src: "/caraousel3.png",
    title: "Classy Shoes",
    description: "Classy Shoes Collection 2024",
  },
];

const CaraouselHome = ({ autoPlay }: { autoPlay: boolean }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % imageCarousel.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prev) => (prev - 1 + imageCarousel.length) % imageCarousel.length
    );
  };

  useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(handleNext, 5000);
      return () => clearInterval(intervalId);
    }
  }, [autoPlay, currentImage]);

  return (
    <div className="relative bg-color-secondary w-full h-[200px] sm:h-[400px] flex items-center rounded-md">
      <div className="flex justify-between items-center w-full">
        <button
          onClick={handlePrev}
          className="absolute left-5 bg-gray-200 p-2 rounded-full shadow-[3px_3px_0_rgb(0,0,0)]
           active:shadow-[1px_1px_0_rgb(0,0,0)] active:translate-y-1 hover:bg-gray-300"
        >
          <CaretLeft />
        </button>

        <div className="flex justify-between px-20 w-full items-center">
          <div className="text-center mt-5">
            <h1 className="sm:hidden hidden lg:flex text-5xl font-bold mb-4">
              {imageCarousel[currentImage].title}
            </h1>
            <p className="text-gray-500 sm:hidden hidden lg:flex">
              {imageCarousel[currentImage].description}
            </p>
          </div>
          <Image
            className="rounded image-caraousel md:absolute md:right-20 md:bottom-0 sm:absolute sm:right-20 sm:bottom-0 absolute right-5 bottom-1"
            width={350}
            height={350}
            src={imageCarousel[currentImage].src}
            alt={imageCarousel[currentImage].description}
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-5 bg-gray-200 p-2 rounded-full shadow-[3px_3px_0_rgb(0,0,0)] active:shadow-[1px_1px_0_rgb(0,0,0)] active:translate-y-1 hover:bg-gray-300"
        >
          <CaretRight />
        </button>
      </div>
    </div>
  );
};

export default CaraouselHome;
