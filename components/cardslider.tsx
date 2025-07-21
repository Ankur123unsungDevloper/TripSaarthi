/* eslint-disable @next/next/no-img-element */
import React, { forwardRef } from "react";
import { Splide, SplideSlide, SplideRef } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const cardData = [
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/jagannath-temple.jpg",
    label: "5 days 4 nights",
    title: "The Best of Vienna and the Alps: A Tour of Austria",
    likes: 831,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
];

const CardSlider = forwardRef<SplideRef>((_props, ref) => {
  return (
    <div className="w-full px-4 md:px-20">
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
            768: { perPage: 1 },
            1024: { perPage: 2 },
          },
        }}
        className="py-10"
        aria-label="Travel card slider"
      >
        {cardData.map((card, index) => (
          <SplideSlide key={index}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden text-black w-full h-full transition-all duration-300 hover:scale-105">
              <div className="p-3">
                <span className="text-sm bg-gray-100 text-gray-800 rounded-full px-3 py-1 inline-block mb-2">
                  {card.label}
                </span>
              </div>
              <img
                src={card.image}
                alt="destination"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-base">{card.title}</h3>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex -space-x-2">
                    {card.users.map((u, i) => (
                      <img
                        key={i}
                        src={u}
                        alt="user"
                        className="w-6 h-6 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-pink-600 font-medium text-sm">
                    + {card.likes.toLocaleString()}
                  </span>
                </div>
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
