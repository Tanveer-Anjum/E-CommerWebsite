import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner11.jpg";
import banner2 from "../assets/banner12.jpg";
import banner3 from "../assets/banner.webp";
import side1 from "../assets/banner.webp"; // small right-side banner
import side2 from "../assets/banner1.jpg"; // another small right-side banner


export default function Banner() {
  const images = [banner1, banner2, banner3];
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-[350px] z-0 mt-6 px-4">
      {/* Left: Big Slider */}
      <div className="relative col-span-2 overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="min-w-full h-full relative">
              <img
                src={img}
                alt={`Banner ${idx + 1}`}
                className="w-full h-[62%] object-cover rounded-lg"
              />
              <div className="absolute inset-0  bg-opacity-10"></div>
            </div>
          ))}
        </div>

      </div>

      {/* Right: Two Small Banners */}
      <div className="flex flex-col gap-4">
        <img
          src={side1}
          alt="Side Banner 1"
          className="w-full h-[30%] object-cover rounded-lg shadow"
        />
        <img
          src={side2}
          alt="Side Banner 2"
          className="w-full h-[30%] object-cover rounded-lg shadow"
        />
      </div>
    </section>
   
    </>
  
  );
}
