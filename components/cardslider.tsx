/* eslint-disable @next/next/no-img-element */
import { forwardRef } from "react";
import { Splide, SplideSlide, SplideRef } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaHeart } from "react-icons/fa";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

// Card data
const cardData = [
  {
    image: "/places/Jagannath-temple.jpg",
    label: "7 Days, 6 Nights",
    title: "Sacred Pilgrimage to Puri",
    likes: 2150,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png", "/avatars/u4.png"],
  },
  {
    image: "/places/Ram-temple.jpg",
    label: "3 Days, 2 Nights",
    title: "Ayodhya: A Spiritual Journey",
    likes: 4500,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png", "/avatars/u4.png", "/avatars/u5.png"],
  },
  {
    image: "/places/temple.jpg", // Assuming this is a generic temple
    label: "6 Days, 5 Nights",
    title: "Southern India Temple Trail",
    likes: 1890,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/Kadarnath-temple.jpg", // Corrected spelling
    label: "8 Days, 7 Nights",
    title: "Gateway to Devotion",
    likes: 3200,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png", "/avatars/u4.png"],
  },
  {
    image: "/places/Munshi-Ghat.jpg",
    label: "4 Days, 3 Nights",
    title: "Varanasi: City of Lights",
    likes: 2750,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png"],
  },
  {
    image: "/places/tajmahal.jpg",
    label: "2 Days, 1 Night",
    title: "Agra: The Mughal Legacy",
    likes: 5120,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png", "/avatars/u4.png", "/avatars/u5.png"],
  },
  {
    image: "/places/hawa-mahal.jpg",
    label: "4 Days, 3 Nights",
    title: "Jaipur: The Pink City",
    likes: 1980,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png"],
  },
  {
    image: "/places/Somnath-temple.jpg",
    label: "5 Days, 4 Nights",
    title: "Gujarat's Coastal Temples",
    likes: 1100,
    users: ["/avatars/u1.png", "/avatars/u2.png"],
  },
  {
    image: "/places/Kerela.jpg",
    label: "7 Days, 6 Nights",
    title: "Backwaters and Beaches",
    likes: 2560,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png", "/avatars/u4.png"],
  },
  {
    image: "/places/Kanchenjunga.jpg",
    label: "10 Days, 9 Nights",
    title: "Trek to Kanchenjunga",
    likes: 1540,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png"],
  },
  {
    image: "/places/Masoori.jpg",
    label: "5 Days, 4 Nights",
    title: "Mussoorie: Queen of the Hills",
    likes: 1780,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png", "/avatars/u4.png"],
  },
  {
    image: "/places/maldives.jpg",
    label: "6 Days, 5 Nights",
    title: "Maldives: Island Paradise",
    likes: 3890,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png", "/avatars/u4.png", "/avatars/u5.png"],
  },
  {
    image: "/places/golden-temple.jpg",
    label: "3 Days, 2 Nights",
    title: "Amritsar: City of Faith",
    likes: 2950,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png"],
  },
  {
    image: "/places/goa-beaches.jpg",
    label: "5 Days, 4 Nights",
    title: "Goa: Sun, Sand & Sea",
    likes: 4120,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png", "/avatars/u4.png"],
  },
  {
    image: "/places/leh-ladakh.jpg",
    label: "9 Days, 8 Nights",
    title: "Leh-Ladakh: A Ride to Himalayas",
    likes: 3500,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png", "/avatars/u4.png", "/avatars/u5.png"],
  },
  {
    image: "/places/andaman-islands.jpg",
    label: "6 Days, 5 Nights",
    title: "Andaman: Tropical Island Getaway",
    likes: 2880,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png", "/avatars/u4.png"],
  },
  {
    image: "/places/rishikesh.jpg",
    label: "4 Days, 3 Nights",
    title: "Rishikesh: Adventure & Yoga",
    likes: 1650,
    users: ["/avatars/u1.png", "/avatars/u2.png", "/avatars/u3.png"],
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

              {/* Top-left title and label */}
              <div className="absolute top-3 left-3 z-20 p-2 rounded-md backdrop-blur-md bg-white/20 text-white shadow-md">
                <h3 className="font-bold text-base leading-tight max-w-100">{card.title}</h3>
                <p className="absolute left-0.5 -bottom-7 text-sm opacity-90 p-1 rounded-md backdrop-blur-md bg-white/20">{card.label}</p>
              </div>

              {/* Bottom-left users */}
              <div className="absolute bottom-3 left-3 z-20 flex items-center">
                <div className="flex -space-x-2">
                  {/* Slices the first 3 users */}
                  {card.users.slice(0, 3).map((u, i) => (
                    <Avatar key={i} className="w-8 h-8 rounded-full border-2 border-[#f0f0f0] bg-white">
                      <AvatarImage src={u} alt={`user-${i}`} />
                      <AvatarFallback>U{i + 1}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                {/* Conditionally renders the +N div */}
                {card.users.length > 3 && (
                  <div className="w-8 h-8 rounded-full bg-white text-black text-xs font-semibold flex items-center justify-center border-2 border-white ml-2">
                    +{card.users.length - 3}
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

CardSlider.displayName = 'CardSlider';

export default CardSlider;