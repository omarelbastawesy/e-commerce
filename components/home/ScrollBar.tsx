import Image from "next/image";
import Head from "../common/Head";
import zara from "@/public/zara.png";
import biba from "@/public/biba.png";
import prada from "@/public/prada.png";
import chanel from "@/public/chanel.png";
import hm from "@/public/hm.png";
import dolce from "@/public/dolce.png";
import gucci from "@/public/gucci.png";
import louisvuitton from "@/public/louisvuitton.png";
import versace from "@/public/versace.png";
import burberry from "@/public/burberry.png";
import nike from "@/public/nike.png";
import adidas from "@/public/adidas.png";

const brands = [
  { name: "Zara", image: zara },
  { name: "Biba", image: biba },
  { name: "Prada", image: prada },
  { name: "Chanel", image: chanel },
  { name: "H&M", image: hm },
  { name: "Dolce & Gabbana", image: dolce },
  { name: "Gucci", image: gucci },
  { name: "Louis Vuitton", image: louisvuitton },
  { name: "Versace", image: versace },
  { name: "Burberry", image: burberry },
  { name: "Nike", image: nike },
  { name: "Adidas", image: adidas },
];

export default function ShopByBrands() {
  return (
    <>
      <Head>Shop by Brands</Head>
      <div className="relative w-full overflow-hidden bg-transparent">
        <div
          className="overlay w-full h-full absolute top-0 left-0 pointer-events-none z-10"
          style={{
            // very narrow sharp white edges
            background:
              "linear-gradient(to right, white 0%, white 20px, transparent 50px, transparent calc(100% - 50px), white calc(100% - 20px), white 100%)",
          }}
        />
        <div className="relative">
          {/* Scrolling container */}
          <div className="flex md:gap-12 gap-8 animate-scroll">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div
                key={`brand-1-${index}`}
                className="flex-shrink-0 w-15 h-15 sm:w-25 sm:h-25 md:w-35 md:h-35 lg:w-42 lg:h-42 bg-[#f4f4f4] rounded-2xl flex items-center justify-center p-2 md:p-4 lg:p-6"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div
                key={`brand-2-${index}`}
                className="flex-shrink-0 w-28 h-28 md:w-42 md:h-42 bg-[#f4f4f4] rounded-2xl flex items-center justify-center p-6"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
