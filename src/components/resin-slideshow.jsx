import React, { useState } from 'react';

const images = [
  '/images/innoplus.jpg',
  '/images/lyondellbasell.jpg',
  'images/lyondellbasell2.jpg',
  "images/petbottlegrade.jpg",
  "images/polymaxx.jpg",
  "images/sabic.jpg",
  "images/truck1.jpg",
  "images/truck2.jpg",
  "images/truck3.jpg"
];

export default function ResinSlideshow() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center mt-12">

      <div className="relative w-full max-w-4xl">
        <img
          src={images[index]}
          alt="Plastic Resin"
          className="w-screen h-[450px] object-contain rounded-lg shadow-md"
        />

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white"
        >
          ▶
        </button>
      </div>

      <div className="mt-4 flex space-x-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-black' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}
