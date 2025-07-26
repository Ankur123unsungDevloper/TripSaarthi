/* eslint-disable @next/next/no-img-element */
import React, { forwardRef } from "react";
import { Splide, SplideSlide, SplideRef } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
    <div className="w-full h-full px-4 md:px-20">
      <Splide
        ref={ref}
        options={{
          type: "slide",
          perPage: 5,
          focus: "center",
          gap: "1.5rem",
          pagination: false,
          arrows: false,
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
        className="py-10"
        aria-label="Travel card slider"
      >
        {cardData.map((card, index) => (
          <SplideSlide key={index}>
            <div className="relative w-full h-120 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-opacity-40 z-10" />

              {/* Text top left */}
              <div className="absolute top-3 left-3 justify-start text-center text-white z-20">
                <h3 className="font-bold text-base leading-tight max-w-full">{card.title}</h3>
                <p className="text-sm absolute opacity-90">{card.label}</p>
              </div>

              {/* Users bottom left */}
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

              {/* Likes bottom right */}
              <div className="absolute bottom-3 right-3 text-white text-sm flex items-center z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-1 fill-pink-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 
                  2 12.28 2 8.5 2 5.42 4.42 3 
                  7.5 3c1.74 0 3.41 0.81 
                  4.5 2.09C13.09 3.81 14.76 3 
                  16.5 3 19.58 3 22 5.42 
                  22 8.5c0 3.78-3.4 6.86-8.55 
                  11.54L12 21.35z" />
                </svg>
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
