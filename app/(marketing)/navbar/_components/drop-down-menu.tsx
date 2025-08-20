"use client";

import Image from "next/image";
import { useState } from "react";

export default function RandomImage() {
  const [imageUrl, setImageUrl] = useState(
    `https://source.unsplash.com/random/800x600/?sig=${Math.random()}`
  );

  // Function to refresh image
  const refreshImage = () => {
    setImageUrl(`https://source.unsplash.com/random/800x600/?sig=${Math.random()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-100 w-450 bg-gray-100 p-4 rounded-2xl shadow-md">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Random Unsplash"
          width={800}
          height={600}
          loading="lazy"
          className="rounded-2xl shadow-lg object-cover"
        />
      )}

      {/* Refresh button */}
      <button
        onClick={refreshImage}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Refresh Image
      </button>
    </div>
  );
}
