"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BadgeDollarSign,
  ChevronDown,
  ListMinus,
  MapPin,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Truck,
  User,
} from "lucide-react";
import flash from "@/public/flashLogo.png";
import Container from "./Container";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const categories = [
    {
      name: "All Categories",
      items: ["Electronics", "Fashion", "Home & Kitchen", "Beauty", "Sports"],
    },
    {
      name: "Premium Fruits",
      items: ["Apples", "Oranges", "Bananas", "Grapes", "Berries"],
    },
    {
      name: "Home & Kitchen",
      items: ["Cookware", "Storage", "Appliances", "Decor", "Furniture"],
    },
    {
      name: "Fashion",
      items: ["Men", "Women", "Kids", "Accessories", "Shoes"],
    },
    {
      name: "Electronics",
      items: ["Phones", "Laptops", "Tablets", "Cameras", "Audio"],
    },
    {
      name: "Beauty",
      items: ["Skincare", "Makeup", "Haircare", "Fragrances", "Tools"],
    },
    {
      name: "Home Improvement",
      items: ["Tools", "Hardware", "Paint", "Lighting", "Storage"],
    },
    {
      name: "Sports, Toys & Luggage",
      items: ["Sports Equipment", "Toys", "Luggage", "Outdoor", "Games"],
    },
  ];

  const toggleDropdown = (categoryName: string) => {
    setOpenDropdown(openDropdown === categoryName ? null : categoryName);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#0f0f0f] min-h-[42px] flex items-center justify-between px-4 md:px-8 text-sm py-2">
        <Container className="flex items-center justify-between">
          <p className="text-[#d9d9d9] font-semibold text-xs md:text-sm">
            Welcome to worldwide Megamart!
          </p>

          <div className="hidden lg:flex items-center gap-4 text-[#ededed]">
            {/* Deliver To */}
            <div className="flex items-center gap-1.5">
              <MapPin size={14} color="#d9d9d9" />
              <span>
                Deliver to <span className="font-semibold">423651</span>
              </span>
            </div>

            <div className="h-4 w-px bg-[#d9d9d9]" />

            {/* Track Order */}
            <div className="flex items-center gap-1.5">
              <Truck size={14} color="#d9d9d9" />
              <span>Track your order</span>
            </div>

            <div className="h-4 w-px bg-[#d9d9d9]" />

            {/* All Offers */}
            <div className="flex items-center gap-1.5">
              <BadgeDollarSign size={14} color="#d9d9d9" />
              <span>All Offers</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#ededed]" />
      <Container>
        {/* Main Header */}
        <div className="bg-white min-h-[70px] md:min-h-[90px] flex items-center justify-between px-4 gap-4">
          {/* Left - Menu Icon */}
          <button
            className="bg-[#f3f9fb] w-10 h-10 md:w-12 md:h-12 rounded-[10px] flex items-center justify-center shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <ListMinus />
          </button>

          {/* Logo & Offer */}
          <div className="flex items-center gap-2 md:gap-4 justify-between">
            <h1 className="text-lg md:text-[30px] font-extrabold text-[#0f0f0f] uppercase">
              UNITED DEAL
            </h1>
            <div className="flex flex-col">
              <Image src={flash} alt="Offer Badge" width={100} height={20} />
            </div>
          </div>

          {/* Center - Search Bar */}
          <div className="flex items-center gap-2 md:gap-2.5 bg-[#f3f9fb] rounded-[10px] px-3 md:px-4 h-10 md:h-12 flex-1 max-w-xl">
            <Search color="#666" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent text-xs md:text-sm text-[#666] placeholder-[#666] outline-none min-w-0"
            />
            <button className="shrink-0">
              <SlidersHorizontal color="#666" />
            </button>
          </div>

          {/* Right - Sign In and Cart */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Sign In/Sign Up */}
            <button className="hidden md:flex items-center gap-1.5">
              <User color="#666" />
              <span className="text-xs text-[#666] font-semibold uppercase">
                Sign Up/Sign In
              </span>
            </button>

            <div className="hidden md:block h-6 w-px bg-[#d9d9d9]" />

            {/* Cart */}
            <button className="flex items-center gap-1.5">
              <ShoppingCart color="#666" />
              <span className="hidden md:block text-base text-[#666] font-bold">
                Cart
              </span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#ededed]" />

        {/* Category Navigation - Desktop */}
        <div className="hidden lg:block bg-white min-h-[69px] px-8 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            {categories.map((category, index) => (
              <div key={category.name} className="relative">
                <button
                  onClick={() => toggleDropdown(category.name)}
                  className={`${
                    index === 0
                      ? "bg-[#161616] text-white"
                      : "bg-[#f3f9fb] text-[#222]"
                  } px-3.5 py-2 rounded-[18px] flex items-center gap-1.5 whitespace-nowrap hover:opacity-80 transition-opacity`}
                >
                  <span className="text-sm font-semibold">{category.name}</span>
                  <ChevronDown />
                </button>

                {/* Dropdown Menu */}
                {openDropdown === category.name && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50 border border-[#ededed]">
                    {category.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-[#222] hover:bg-[#f3f9fb] transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#ededed]">
            <div className="px-4 py-4 max-h-[60vh] overflow-y-auto">
              {categories.map((category, index) => (
                <div
                  key={category.name}
                  className="border-b border-[#ededed] last:border-b-0"
                >
                  <button
                    onClick={() => toggleDropdown(category.name)}
                    className="w-full flex items-center justify-between py-3 text-left"
                  >
                    <span className="text-sm font-semibold text-[#222]">
                      {category.name}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === category.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        d="M11.25 0.75L6 6L0.75 0.75"
                        stroke="#161616"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>

                  {openDropdown === category.name && (
                    <div className="pb-3 pl-4">
                      {category.items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block py-2 text-sm text-[#666] hover:text-[#222]"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile-only links */}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium text-[#666]"
                >
                  <MapPin />
                  Deliver to 423651
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium text-[#666]"
                >
                  <Truck />
                  Track your order
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium text-[#666]"
                >
                  <BadgeDollarSign />
                  All Offers
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium text-[#666]"
                >
                  <User />
                  Sign Up / Sign In
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Divider */}
        <div className="h-px bg-[#ededed]" />
      </Container>
    </header>
  );
}
