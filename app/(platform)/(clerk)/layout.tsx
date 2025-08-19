import React from 'react';
import Image from "next/image";

const ClerkLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
      
      {/* Right side: The travel-themed signature design */}
      <div className="h-screen hidden lg:flex items-center justify-center relative overflow-hidden">
        <Image
          src={`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&q=80&random=${Math.random()}`}
          alt="Random travel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

        {/* Brand logo/text overlay on the image */}
        <div className="relative text-white z-10 text-center p-8 bg-gray-900/30 rounded-lg backdrop-blur-sm">
          <h2 className="text-4xl font-extrabold tracking-widest">
            TripSaarthi
          </h2>
          <p className="mt-2 text-lg italic">
            Your journey begins here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClerkLayout;
