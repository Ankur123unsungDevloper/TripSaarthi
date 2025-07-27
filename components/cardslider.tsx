/* eslint-disable @next/next/no-img-element */
import React, { forwardRef } from "react";
import {
  Splide,
  SplideSlide,
  SplideRef
} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { FaHeart } from "react-icons/fa";

// Card data
const cardData = [
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 Days, 4 Nights",
    title: "The Best of Vienna",
    likes: 1245,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "3 Days, 2 Nights",
    title: "Discover the Rich",
    likes: 980,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "6 Days, 5 Nights",
    title: "Explore Eastern India",
    likes: 765,
    users: ["/avatars/u1.png"],
  },
];


const CardSlider = forwardRef<SplideRef>((_props, ref) => {
  return (
    <div className="w-full px-4 md:px-10">
      <Splide
        ref={ref}
        options={{
          type: "slide",
          perPage: 5,
          gap: "1.5rem",
          pagination: false,
          arrows: false,
          breakpoints: {
            1024: { perPage: 3, focus: 1 },
            768: { perPage: 1, focus: 0 },
          },
        }}
        className="py-10 custom-splide"
        aria-label="Travel card slider"
      >
        {cardData.map((card, index) => (
          <SplideSlide key={index}>
            <div className="relative card-slide w-full h-120 transition-all duration-300 ease-in-out rounded-2xl overflow-hidden shadow-md">
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-40 z-10" />

              {/* Top-left title */}
              <div className="absolute top-3 left-3 z-20 p-2 rounded-md backdrop-blur-md bg-white/20 text-white shadow-md">
                <h3 className="font-bold text-base leading-tight max-w-100">{card.title}</h3>
                <p className="absolute left-0.5 -bottom-7 text-sm opacity-90 p-1 rounded-md backdrop-blur-md bg-white/20">{card.label}</p>
              </div>

              {/* Bottom-left users */}
              <div className="absolute bottom-3 left-3 flex items-center space-x-1 z-20">
                {card.users.slice(0, 2).map((u, i) => (
                  <img
                    key={i}
                    src={u}
                    alt={`user-${i}`}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                  />
                ))}
                {card.users.length > 2 && (
                  <div className="w-6 h-6 rounded-full bg-white text-black text-xs font-semibold flex items-center justify-center border-2 border-white">
                    +{card.users.length - 2}
                  </div>
                )}
              </div>

              {/* Bottom-right likes */}
              <div className="absolute bottom-3 right-3 text-white font-bold text-sm flex items-center z-20">
                <FaHeart className="w-4 h-4 mr-1 text-pink-500 transform transition-transform duration-300 hover:scale-125" />
                {card.likes.toLocaleString()}
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

    </div>
  );
});

CardSlider.displayName = "CardSlider";
export default CardSlider;
