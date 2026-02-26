"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import playStation from "@/public/playStation.png";
import iphone from "@/public/iphone.png";
import headphones from "@/public/headphones.png";
import watch from "@/public/watch.png";
import Head from "../common/Head";

const deals = [
  {
    id: 1,
    image: playStation, // ضع هنا صورة الكونسول
    title: "PlayStation 5",
    price: "$499",
    hours: 2,
    progress: 90,
    color: "blue",
  },
  {
    id: 2,
    image: iphone, // ضع هنا صورة الهاتف
    title: "iPhone 17",
    price: "$1199",
    hours: 8,
    progress: 60,
    color: "red",
  },
  {
    id: 3,
    image: headphones, // ضع هنا صورة سماعة
    title: "Sony Wireless",
    price: "$399",
    hours: 6,
    progress: 80,
    color: "green",
  },
  {
    id: 4,
    image: watch, // ضع هنا صورة ساعة ذكية
    title: "Apple Watch Series 9",
    price: "$449",
    hours: 4,
    progress: 70,
    color: "purple",
  },
];

export default function Deals() {
  // countdown state
  const [remaining, setRemaining] = useState({ d: 0, h: 0, m: 0, s: 0 });

  // set target time (initially 16d21h57m23s from now)
  const target = useRef<number>(
    new Date().getTime() +
      16 * 24 * 60 * 60 * 1000 +
      21 * 60 * 60 * 1000 +
      57 * 60 * 1000 +
      23 * 1000,
  );

  useEffect(() => {
    const tick = () => {
      const diff = target.current - Date.now();
      if (diff <= 0) {
        setRemaining({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setRemaining({ d, h, m, s });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col justify-between gap-4 items-center max-w-[1360px] mx-auto py-4">
      {/* Header */}
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between mb-10">
        <Head>Today&apos;s Deals of the day</Head>

        <div className="flex items-center justify-between gap-2">
          {/* Countdown Timer */}
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-semibold font-['Lato',sans-serif] text-black">
              Deals ends in:
            </span>
            <div className="bg-[#fcbd01] rounded-lg px-4 py-2 flex items-center gap-2 text-[20px] font-extrabold font-['Lato',sans-serif] text-[#191c1f]">
              <span>{remaining.d}d</span>
              <span>:</span>
              <span>{remaining.h}h</span>
              <span>:</span>
              <span>{remaining.m}m</span>
              <span>:</span>
              <span>{remaining.s}s</span>
            </div>
          </div>

          {/* View All Button */}
          <button className="cursor-pointer hidden md:block bg-[#fcbd01] rounded-lg px-4 py-3 text-[14px] font-medium text-[#0a0a0a] uppercase hover:bg-[#e5ab01] transition-colors">
            VIEW ALL
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        {deals.map((deal) => (
          <div key={deal.id} className="flex-1 flex flex-col min-w-[280px]">
            {/* Product Card */}
            <div className="relative bg-[#fafafa] rounded-[28px] p-2 mb-5">
              {/* New Badge */}
              <div className="absolute top-4 left-4 bg-[#fcbd01] rounded-tl-3xl rounded-br-3xl px-4 py-3 z-10">
                <span className="text-white text-[12px] font-semibold font-['Rubik',sans-serif]">
                  New
                </span>
              </div>

              {/* Product Image Container */}
              <div className="bg-[#ecedef] rounded-[26px] h-[335px] flex items-center justify-center p-8">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-contain rounded-[20px]"
                />
              </div>
            </div>

            {/* Flash Deal Progress */}
            <div className="mb-2">
              <p
                className={`text-[12px] font-['Lato',sans-serif] mb-2 ${
                  deal.color === "blue" ? "text-[#397cff]" : "text-[#ff4853]"
                }`}
              >
                Flash Deal Ends in {deal.hours} Hours
                <span className="font-['Poppins',sans-serif] font-black">
                  !
                </span>
              </p>
              <div
                className={`h-2 rounded-full ${
                  deal.color === "blue" ? "bg-[#cfdfff]" : "bg-[#ffd6d8]"
                }`}
              >
                <div
                  className={`h-2 rounded-full ${
                    deal.color === "blue" ? "bg-[#397cff]" : "bg-[#ff4853]"
                  }`}
                  style={{ width: `${deal.progress}%` }}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[23px] font-extrabold font-['Lato',sans-serif] text-[#232321] leading-tight h-14 line-clamp-2">
                {deal.title}
              </h3>

              {/* Buy Button */}
              <button className="cursor-pointer bg-[#232321] rounded-lg py-3 px-4 text-[14px] font-medium font-['Rubik',sans-serif] text-white uppercase tracking-wide hover:bg-[#3a3a3a] transition-colors">
                BUY NOW - <span className="text-[#ffa52f]">{deal.price}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="cursor-pointer md:hidden bg-[#fcbd01] rounded-lg px-4 py-3 text-[14px] font-medium text-[#0a0a0a] uppercase hover:bg-[#e5ab01] transition-colors">
        VIEW ALL
      </button>
    </div>
  );
}
