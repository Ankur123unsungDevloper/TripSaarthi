/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";

const featuresData = [
  {
    iconName: "system-alt-2", // Compass/System
    title: "Seamless Itinerary",
    description:
      "Craft your perfect trip with drag-and-drop ease for flights, hotels, and activities.",
  },
  {
    iconName: "calendar-check", // Calendar
    title: "Smart Planning",
    description:
      "Effortlessly manage your bookings in one place, with instant updates and notifications.",
  },
  {
    iconName: "bulb", // Lightbulb
    title: "Smart Recommendations",
    description:
      "Discover personalized travel suggestions tailored to your preferences.",
  },
  {
    iconName: "sync", // Real-time Updates
    title: "Stay Updated",
    description:
      "Stay informed with live flight statuses, gate changes, and weather alerts.",
  },
];

const Feature = () => {
  return (
    <div className="flex flex-col items-center text-center my-16 px-4">
      <h2 className="text-4xl font-bold mb-10">Why Choose TripSaarthi?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col items-center bg-white p-6 rounded-xl shadow-lg 
              transition-shadow duration-300 ease-in-out
              hover:shadow-xl
            `}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 overflow-hidden group">
              <lord-icon
                src={`https://cdn.lordicon.com/${feature.iconName}.json`}
                trigger="hover"
                colors="primary:#5c43f7,secondary:#5c43f7"
                style={{ width: "64px", height: "64px" }}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;