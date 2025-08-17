"use client";

import { useEffect, useRef, useState } from "react";

const IgnoreTools = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is in the viewport
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.5, // 50% of the element is visible
      }
    );

    const currentVideo = videoRef.current;
    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, []);

  useEffect(() => {
    // Only play/pause the video when the inView state changes
    if (inView) {
      if (videoRef.current) {
        videoRef.current.play();
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <div className="flex flex-row items-center justify-between py-16 px-6 w-full">
      <div className="flex flex-col items-center justify-center w-500">
        <video
          ref={videoRef}
          src="/video/ignoretool.mp4"
          loop
          muted
          playsInline
          className="rounded-2xl shadow-lg w-full h-auto"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full p-4">
        <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold">
          No need to juggle many apps anymore - plan everything in one place.
        </h3>
        <p className="text-base sm:text-xl md:text-xl">
          From flight reservations to activities and accommodation, streamline details
          on your travel plans into a single, intuitive platform. Say goodbye to scattered
          bookings and hello to seamless journey management.
        </p>
      </div>
    </div>
  );
};

export default IgnoreTools;