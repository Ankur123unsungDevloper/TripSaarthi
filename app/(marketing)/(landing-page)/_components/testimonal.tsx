/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Frequent Traveler",
    feedback:
      "TripSaarthi made my vacation planning effortless. Everything from flights to hotels was perfectly arranged!",
    image: "/people/person1.jpg",
    rating: 5,
  },
  {
    name: "Ravi Mehta",
    role: "Business Consultant",
    feedback:
      "I love the smart recommendations! They always match my taste and budget perfectly.",
    image: "/people/person2.jpg",
    rating: 4,
  },
  {
    name: "Priya Desai",
    role: "Adventure Enthusiast",
    feedback:
      "Real-time updates saved me from missing my flight. Best travel tool ever!",
    image: "/people/person3.jpg",
    rating: 5,
  },
  {
    name: "Kunal Verma",
    role: "Backpacker",
    feedback:
      "I explored hidden gems I would’ve never found without TripSaarthi’s suggestions.",
    image: "/people/person4.jpg",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    role: "Photographer",
    feedback:
      "Perfect platform for planning my photography trips. Everything is organized beautifully.",
    image: "/people/person5.jpg",
    rating: 4,
  },
];

const Testimonial = () => {
  const [displayedIndexes, setDisplayedIndexes] = useState([0, 1, 2]);
  const [activeCard, setActiveCard] = useState(-1);
  const [rotationDegrees, setRotationDegrees] = useState([0, 0, 0]);

  useEffect(() => {
    const totalTestimonials = testimonials.length;
    let cardIndex = 0;

    const startAnimation = () => {
      setActiveCard(cardIndex);

      // First rotation to 180deg
      setRotationDegrees((prev) => {
        const newDegrees = [...prev];
        newDegrees[cardIndex] += 180;
        return newDegrees;
      });

      // After 500ms, update the content and start the next rotation
      setTimeout(() => {
        setDisplayedIndexes((prev) => {
          const newIndexes = [...prev];
          newIndexes[cardIndex] = (prev[cardIndex] + 3) % totalTestimonials;
          return newIndexes;
        });

        // Second rotation to 360deg
        setTimeout(() => {
          setRotationDegrees((prev) => {
            const newDegrees = [...prev];
            newDegrees[cardIndex] += 180;
            return newDegrees;
          });

          // After 500ms, reset state for the next cycle
          setTimeout(() => {
            setActiveCard(-1);
            cardIndex = (cardIndex + 1) % 3;
          }, 500);
        }, 500);
      }, 500);
    };

    // Initial call to start the animation
    startAnimation();
    const mainInterval = setInterval(startAnimation, 5000); // 5 seconds delay

    return () => clearInterval(mainInterval);
  }, []);

  return (
    <div className="flex flex-col items-center text-center my-16 px-6 bg-gray-50 py-12 rounded-xl w-full">
      <h2 className="text-4xl font-bold mb-10">What Our Travelers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-8xl">
        {displayedIndexes.map((index, i) => {
          const t = testimonials[index];
          const rotationStyle = {
            transform: `rotateY(${rotationDegrees[i]}deg)`,
          };

          return (
            <div
              key={i}
              className="bg-transparent rounded-xl shadow-lg relative h-70 w-full [perspective:1000px] transform-gpu"
            >
              <div
                className="w-full h-full relative transition-all duration-500 [transform-style:preserve-3d]"
                style={rotationStyle}
              >
                {/* Front of the Card */}
                <div className="absolute inset-0 bg-white rounded-xl [backface-visibility:hidden] p-6 flex flex-col justify-between">
                  <FaQuoteLeft className="text-primary absolute top-2 left-2 opacity-20 text-4xl" />
                  <p className="text-gray-600 mb-6 relative mt-10 text-left px-2">
                    {t.feedback}
                  </p>
                  <div className="flex items-center relative mt-6">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="ml-4 text-left">
                      <h3 className="font-semibold">{t.name}</h3>
                      <p className="text-sm text-gray-500">{t.role}</p>
                      <div className="flex text-yellow-400 mt-1">
                        {Array.from({ length: t.rating }).map((_, starIndex) => (
                          <FaStar key={starIndex} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of the Card (Logo/Text) */}
                <div className="absolute inset-0 bg-gray-200 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    TripSaarthi
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;