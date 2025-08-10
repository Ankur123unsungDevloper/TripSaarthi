"use client";

import React, { useRef } from "react";
import { SplideRef } from "@splidejs/react-splide";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import CardSlider from "@/components/cardslider";

const Hero = () => {
  const sliderRef = useRef<SplideRef>(null);

  const handlePrev = () => {
    sliderRef.current?.splide?.go("<");
  };

  const handleNext = () => {
    sliderRef.current?.splide?.go(">");
  };

  return (
    <div className="flex flex-col h-200 relative w-full">
      {/* Heading + Arrows */}
      <div className="flex flex-row gap-0 items-center justify-between px-20 w-full h-40">
        <div className="flex flex-col items-start justify-center gap-2 h-30 w-132">
          <h2 className="text-5xl">Upcoming departures</h2>
        </div>
        <div className="flex flex-row w-20 h-20 items-center justify-center gap-2 relative right-10">
          <BsArrowLeftSquare
            onClick={handlePrev}
            className="h-10 w-10 cursor-pointer text-gray-700 transform transition-transform duration-300 hover:scale-110 hover:text-[#4A235A]"
          />
          <BsArrowRightSquare
            onClick={handleNext}
            className="h-10 w-10 cursor-pointer text-gray-700 transform transition-transform duration-300 hover:scale-110 hover:text-[#4A235A]"
          />
        </div>
      </div>

      {/* Cardslider */}
      <div className="relative w-full h-full mt-[150px] mx-auto bottom-30 text-[#333]">
        <CardSlider ref={sliderRef} />
      </div>
    </div>
  );
};

export default Hero;
