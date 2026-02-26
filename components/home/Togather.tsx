import { Heart, ShoppingCart, Eye } from "lucide-react";
import Image from "next/image";
import sony from "@/public/headphones.png";
import webCamera from "@/public/webCamera.png";
import control from "@/public/control.png";
import screen from "@/public/screen.png";
import mobile from "@/public/phone.png";
import drone from "@/public/drone.png";
import droneBig from "@/public/droneBig.png";
import phone2 from "@/public/XiaomiPhone.png";
import playStation from "@/public/playStation.png";

const products = [
  {
    id: 1,
    image: sony,
    title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    price: 1200,
    isFeatured: false,
  },
  {
    id: 2,
    image: webCamera,
    title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
    price: 250,
    originalPrice: 360,
    badge: { text: "32% OFF", color: "yellow" },
    isFeatured: false,
  },
  {
    id: 3,
    image: control,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    price: 150,
    originalPrice: 865,
    badge: { text: "19% OFF", color: "yellow" },
    isFeatured: false,
  },
  {
    id: 4,
    image: screen,
    title: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    price: 160,
    badge: { text: "HOT", color: "red" },
    isFeatured: false,
  },
  {
    id: 5,
    image: mobile,
    title: "Simple Mobile 4G LTE Prepaid Smartphone",
    price: 220,
    isFeatured: false,
  },
  {
    id: 6,
    image: drone,
    title: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
    price: 70,
    originalPrice: 865.99,
    isFeatured: false,
  },
  {
    id: 7,
    image: droneBig,
    title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    price: 2300,
    badge: { text: "SOLD OUT", color: "gray" },
    isFeatured: false,
  },
  {
    id: 8,
    image: phone2,
    title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: 299,
    isFeatured: false,
  },
];

const featuredProduct = {
  id: 9,
  image: playStation,
  title:
    "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...",
  description:
    "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
  price: 442.12,
  originalPrice: 865.99,
  rating: 5,
  reviewCount: 52677,
  badges: [
    { text: "32% OFF", color: "yellow" },
    { text: "HOT", color: "red" },
  ],
  isFeatured: true,
};

function StarRating({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 0.5L12.245 7.255L19.511 7.755L14.23 12.255L15.878 19.378L10 15.5L4.122 19.378L5.77 12.255L0.489 7.755L7.755 7.255L10 0.5Z"
            fill="#EBC80C"
          />
        </svg>
      ))}
      <span className="text-[#77878f] text-[14px] font-['Public_Sans',sans-serif] ml-1">
        ({reviewCount.toLocaleString()})
      </span>
    </div>
  );
}

function ProductBadge({ text, color }: { text: string; color: string }) {
  const bgColor =
    color === "yellow" ? "#efd33d" : color === "red" ? "#ee5858" : "#929fa5";
  const textColor = color === "yellow" ? "#191c1f" : "white";

  return (
    <div
      className="px-2.5 py-1 rounded-sm"
      style={{ backgroundColor: bgColor }}
    >
      <span
        className="text-[12px] font-semibold font-['Public_Sans',sans-serif] leading-4"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <div className="bg-white border border-[#e4e7e9] rounded-sm group relative overflow-hidden">
      {/* Image Container */}
      <div className="relative p-4">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full aspect-[216/188] object-contain"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <ProductBadge
              text={product.badge.text}
              color={product.badge.color}
            />
          </div>
        )}

        {/* Hover Buttons */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button className="bg-[#191c1f] p-3 rounded-full hover:bg-[#2a2a2a] transition-colors">
            <Heart size={24} className="text-white" />
          </button>
          <button className="bg-[#191c1f] p-3 rounded-full hover:bg-[#2a2a2a] transition-colors">
            <ShoppingCart size={24} className="text-white" />
          </button>
          <button className="bg-[#191c1f] p-3 rounded-full hover:bg-[#2a2a2a] transition-colors">
            <Eye size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pt-2 space-y-2">
        <h3 className="text-[14px] font-semibold font-['Lato',sans-serif] text-[#191c1f] leading-5 line-clamp-2 min-h-[40px]">
          {product.title}
        </h3>

        <div className="flex items-center gap-1">
          {product.originalPrice && (
            <span className="text-[#929fa5] line-through font-['Public_Sans',sans-serif]">
              ₹{product.originalPrice}
            </span>
          )}
          <span className="text-[#2da5f3] font-semibold font-['Public_Sans',sans-serif]">
            ₹{product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

function FeaturedProductCard({ product }: { product: typeof featuredProduct }) {
  return (
    <div className="bg-white border border-[#e4e7e9] rounded-sm overflow-hidden h-full flex flex-col">
      {/* Image Container */}
      <div className="relative p-6 bg-white flex-shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full aspect-[280/268] object-contain"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {product.badges.map((badge, index) => (
            <ProductBadge key={index} text={badge.text} color={badge.color} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3 flex-grow flex flex-col">
        <div className="space-y-1.5">
          <StarRating
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
          <h3 className="text-[16px] font-semibold font-['Lato',sans-serif] text-[#191c1f] leading-6">
            {product.title}
          </h3>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-[#adb7bc] text-[16px] line-through font-['Public_Sans',sans-serif] leading-6">
            ₹{product.originalPrice}
          </span>
          <span className="text-[#2da5f3] text-[18px] font-semibold font-['Public_Sans',sans-serif] leading-6">
            ₹{product.price}
          </span>
        </div>

        <p className="text-[#5f6c72] text-[14px] font-['Public_Sans',sans-serif] leading-5">
          {product.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-auto pt-4">
          <button className="p-3 rounded-sm hover:bg-gray-100 transition-colors">
            <Heart size={24} className="text-[#191c1f]" />
          </button>

          <button className="bg-[#1877f2] hover:bg-[#0d6efd] transition-colors flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-sm">
            <ShoppingCart size={20} className="text-white" />
            <span className="text-white text-[14px] font-bold font-['Public_Sans',sans-serif] uppercase tracking-wide">
              Add to card
            </span>
          </button>

          <button className="p-3 rounded-sm hover:bg-gray-100 transition-colors">
            <Eye size={24} className="text-[#191c1f]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Togather() {
  return (
    <div className="w-full max-w-[1360px] mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[328px_1fr] gap-6">
        {/* Featured Product - Full width on mobile, left column on desktop */}
        <div className="w-full">
          <FeaturedProductCard product={featuredProduct} />
        </div>

        {/* Product Grid - 2 columns on mobile, 2 columns on tablet, 4 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
