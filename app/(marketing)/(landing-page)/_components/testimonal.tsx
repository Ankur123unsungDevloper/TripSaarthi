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
  const [cardIndexes, setCardIndexes] = useState([0, 1, 2]);
  const [animatingCard, setAnimatingCard] = useState<number | null>(null);

  useEffect(() => {
    let currentCard = 0;

    const interval = setInterval(() => {
      setAnimatingCard(currentCard);

      setTimeout(() => {
        setCardIndexes((prev) => {
          const newIndexes = [...prev];
          newIndexes[currentCard] =
            (prev[currentCard] + 1) % testimonials.length;
          return newIndexes;
        });
        setAnimatingCard(null);
        currentCard = (currentCard + 1) % 3;
      }, 300); // animation duration for slide out
    }, 2000); // interval between card changes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center text-center my-16 px-4 bg-gray-50 py-12 rounded-xl w-full">
      <h2 className="text-4xl font-bold mb-10">What Our Travelers Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl">
        {cardIndexes.map((index, i) => {
          const t = testimonials[index];
          return (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
              style={{ height: "200px" }} // fixed height
            >
              <div
                className={`transition-transform duration-300 ${
                  animatingCard === i
                    ? "-translate-y-5 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <FaQuoteLeft className="text-primary absolute top-4 left-4 opacity-20 text-4xl" />
                <p className="text-gray-600 mb-6">{t.feedback}</p>

                <div className="flex items-center">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
