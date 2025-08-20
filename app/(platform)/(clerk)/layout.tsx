/* eslint-disable @next/next/no-img-element */
"use client";

import React, {
  useEffect,
  useState
} from "react";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=travel,adventure,nature&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
        );
        const data = await response.json();
        setBgImage(data.urls?.regular);
      } catch (error) {
        console.error("Error fetching Unsplash image:", error);
      }
    }

    fetchImage();
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left side: Authentication form and text content */}
      <div className="flex flex-col items-center justify-center p-4 lg:p-8">
        <div className="max-w-md w-full">
          <div className="text-center space-y-4 pt-16 mb-8">
            <h1 className="font-bold text-3xl sm:text-4xl text-gray-800">
              Welcome to TripSaarthi!
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Your next adventure is just a login away.
            </p>
          </div>
          {children}
        </div>
      </div>

      {/* Right side: Travel-themed random background */}
      <div className="h-screen hidden lg:flex items-center justify-center relative overflow-hidden">
        {bgImage && (
          <img
            src={bgImage}
            alt="Random travel"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

        {/* Brand overlay */}
        <div className="relative text-white z-10 text-center p-8 bg-gray-900/30 rounded-lg backdrop-blur-sm">
          <h2 className="text-4xl font-extrabold tracking-widest">
            TripSaarthi
          </h2>
          <p className="mt-2 text-lg italic">Your journey begins here.</p>
        </div>
      </div>
    </div>
  );
};

export default ClerkLayout;
