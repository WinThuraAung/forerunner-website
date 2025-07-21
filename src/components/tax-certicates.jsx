import { useState } from "react";

const taxImages = [
  "/images/tax-2015.png",
  "/images/tax-2016.png",
  "/images/tax-2017.png",
  "/images/tax-2018.png",
  "/images/tax-2019.png",
];

export default function TaxCertificates() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? taxImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === taxImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white px-6 md:px-20 lg:px-40">
      <h2 className="text-3xl font-bold text-center mb-6">Top Taxpayer Distinction</h2>
      <p className="text-center text-gray-600 mb-10">
      Forerunner International Co., Ltd. was honored annually by the Republic of the Union of Myanmar as one of the country’s Top 500 taxpayers from 2015 to 2019, in recognition of our commitment to transparency, integrity, and fiscal excellence.

</p>

      <div className="relative w-full max-w-4xl mx-auto">
        <img
          src={taxImages[current]}
          alt={`Tax Certificate ${2015 + current}`}
          className="rounded-lg shadow-lg mx-auto object-contain h-[500px] w-auto"
        />

        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-2 rounded-full shadow-md"
        >
          ◀
        </button>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-2 rounded-full shadow-md"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {taxImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
