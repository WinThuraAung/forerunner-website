import { useEffect, useState } from "react";
// import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function Home() {
    const images = [
        "images/plastic-resins.jpg",
        "images/plastic-resins2.jpg",
        "images/plastic-resins3.jpg"]


    const [index, setIndex] = useState(0);

    // Change image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // change every 5 seconds
        return () => clearInterval(interval);
      }, []);


    return (
        <>
              {/* Welcome Part*/}
      <div className="relative h-[600px] w-full overflow-hidden">
   
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url(${images[index]})`
          }}
        />
  
        {/* Content container - stays within normal layout bounds */}
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6 max-w-6xl mx-auto" 
          >
          <h1 className="md:text-5xl font-bold text-white drop-shadow-lg max-w-3xl" 
          style={{ 
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: '800',  // Even bolder
            letterSpacing: '-0.02em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)' // Better shadow
          }}
          >
            Welcome to Forerunner International Company Limited
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white drop-shadow max-w-2xl">
            Your trusted partner in plastic resin trading across Asia.
          </p>
  
          <Link to="/about">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition" >
            Learn More
          </button>
            </Link>
        </div>
      </div>
      
      {/* What we do section */}
      <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-10">What We Do</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4 text-[#b38a36]">🔄</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Plastic Resin Distribution</h3>
        <p className="text-gray-600">We supply a wide range of high-quality plastic resins tailored to industrial needs.</p>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4 text-[#b38a36]">📦</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Warehousing & Logistics</h3>
        <p className="text-gray-600">From port to factory, we ensure seamless logistics and reliable storage facilities.</p>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4 text-[#b38a36]">🇲🇲</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Regional Distribution</h3>
        <p className="text-gray-600">Our network spans across Myanmar to ensure fast and efficient regional supply coverage.</p>
      </div>
    </div>
  </div>
</section>

</>
      
    );
  }