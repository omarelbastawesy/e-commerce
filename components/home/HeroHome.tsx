"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import shose from "@/public/shose.png";
import shirt from "@/public/tshirt.png";
import watches from "@/public/watches.png";
import headphone from "@/public/handphone.png";
import mouse from "@/public/mouse.png";
import backpack from "@/public/backpack.png";
import sunglass from "@/public/sunglasses.png";
import speaker from "@/public/speaker.png";
import stand from "@/public/stand.png";
import powerbank from "@/public/power bank.png";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "NIKE AIR MAX",
    subtitle: "Running comfort",
    discount: "Save 40%",
    image: shose,
  },
  {
    title: "SMART WATCH",
    subtitle: "Track your fitness",
    discount: "30% OFF",
    image: watches,
  },
  {
    title: "WIRELESS HEADPHONES",
    subtitle: "Deep bass sound",
    discount: "Up to 35% OFF",
    image: headphone,
  },
  {
    title: "GAMING MOUSE",
    subtitle: "High precision",
    discount: "20% Discount",
    image: mouse,
  },
  {
    title: "BACKPACK",
    subtitle: "Travel ready",
    discount: "Flat 25% OFF",
    image: backpack,
  },
  {
    title: "SUNGLASSES",
    subtitle: "UV protection",
    discount: "Buy 1 Get 1",
    image: sunglass,
  },
  {
    title: "SPORT T-SHIRT",
    subtitle: "Breathable fabric",
    discount: "From $15",
    image: shirt,
  },
  {
    title: "POWER BANK",
    subtitle: "Fast charging",
    discount: "Save 30%",
    image: powerbank,
  },
  {
    title: "BLUETOOTH SPEAKER",
    subtitle: "Portable sound",
    discount: "Up to 45% OFF",
    image: speaker,
  },
  {
    title: "LAPTOP STAND",
    subtitle: "Ergonomic design",
    discount: "20% OFF",
    image: stand,
  },
];

export default function HeroHome() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[346px] md:h-[420px] mx-auto overflow-hidden">
      {/* background container */}
      <div className="absolute inset-0 bg-[#0c59b6] rounded-[18px] overflow-hidden">
        {/* decorative circles (hidden on small screens to save space) */}
        <div className="hidden md:block absolute right-[-100px] top-[-370px] w-[564px] h-[824px]">
          <div className="absolute left-[20px] top-[370px] w-[564px] h-[564px] rounded-full border border-[#E2E2E2] flex items-center justify-center">
            <div className="w-[524px] h-[524px] rounded-full bg-[#F5A914]" />
          </div>
          <div className="absolute left-[98px] bottom-0 w-[192px] h-[192px] rounded-full border border-[#E2E2E2] flex items-center justify-center">
            <div className="w-[162px] h-[162px] rounded-full bg-[#F5A914]" />
          </div>
        </div>

        <div className="hidden md:block absolute right-[180px] top-[115px] w-[97px] h-[114px]">
          <svg viewBox="0 0 97 114" fill="none" className="w-full h-full">
            <path
              d="M0 0H97V97C97 106.389 89.3888 114 80 114H17C7.61116 114 0 106.389 0 97V0Z"
              fill="#B15655"
            />
          </svg>
        </div>

        {/* shoe image */}
        <div className="absolute right-0 top-0 w-full max-w-[590px] h-full pointer-events-none">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="w-full h-full object-contain"
          />
        </div>

        {/* navigation */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-[94px] md:h-[94px] rounded-full bg-[#F3F9FB] border-[6px] md:border-[9px] border-white flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronLeft size={24} className="text-[#242424]" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-[94px] md:h-[94px] rounded-full bg-[#F3F9FB] border-[6px] md:border-[9px] border-white flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronRight size={24} className="text-[#242424]" />
        </button>

        {/* content text */}
        <div className="absolute justify-between flex flex-col h-full top-0 left-4 sm:left-8 md:left-[98px] py-6 text-white max-w-[60%] md:max-w-[45%]">
          <div>
            <p className="text-sm sm:text-base md:text-[33px] font-semibold font-['Lato',sans-serif]">
              {slide.subtitle}
            </p>
            <h1 className="text-xl sm:text-3xl md:text-[60px] font-bold font-['Lato',sans-serif] leading-snug mt-2 md:mt-[11px]">
              {slide.title}
            </h1>
            <p className="text-sm sm:text-base md:text-[33px] font-semibold font-['Lato',sans-serif] mt-2 md:mt-[20px]">
              {slide.discount}
            </p>
          </div>

          {/* pagination dots */}
          <div className="flex gap-2 md:gap-[16px] mt-4 md:mt-[31px]">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`rounded-full bg-white transition-all ${
                  i === current ? "w-6 h-2" : "w-2 h-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
