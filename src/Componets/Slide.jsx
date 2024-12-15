import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const images = [
  assets.slide1,
  assets.slide2,
  assets.slide3,
  assets.slide4
];

function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full max-w-8xl h-96 mb-20 mx-auto overflow-hidden rounded-lg border-2 border-gray-300">
      {/* Images */}
      <div className="flex justify-center items-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-96 object-cover"
        />
      </div>
    </div>
  );
}

export default Slide;
