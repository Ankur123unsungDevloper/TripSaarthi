"use client";

import { motion } from "framer-motion";
import {
  MapIcon,
  CalendarDaysIcon,
  LightBulbIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

// Define the animation states for the card and its icon
const cardVariants = {
  initial: { y: 0, scale: 1, boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1)" },
  hover: { y: -5, scale: 1, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" },
};

const iconVariants = {
  initial: { y: 0, scale: 1 },
  hover: { y: -20, scale: 1.75, rotate: 0 },
};

const featuresData = [
  {
    icon: <MapIcon className="w-8 h-8 text-primary" />,
    title: "Seamless Itinerary",
    description:
      "Craft your perfect trip with drag-and-drop ease for flights, hotels, and activities.",
  },
  {
    icon: <CalendarDaysIcon className="w-8 h-8 text-primary" />,
    title: "Smart Planning",
    description:
      "Effortlessly manage your bookings in one place, with instant updates and notifications.",
  },
  {
    icon: <LightBulbIcon className="w-8 h-8 text-primary" />,
    title: "Smart Recommendations",
    description:
      "Discover personalized travel suggestions tailored to your preferences.",
  },
  {
    icon: <ArrowPathIcon className="w-8 h-8 text-primary" />,
    title: "Real-time Updates",
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
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300 cursor-pointer"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            {/* Removed "overflow-hidden" class below */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <motion.div
                variants={iconVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                {feature.icon}
              </motion.div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;