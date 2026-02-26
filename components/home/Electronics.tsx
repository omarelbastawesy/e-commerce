import Image from "next/image";
import ApplePhone from "@/public/phone.png";
import SamsungPhone from "@/public/SamsungPhone.png";
import XiaomiPhone from "@/public/XiaomiPhone.png";
import RealmePhone from "@/public/RealmePhone.png";
import DellLaptop from "@/public/DellLaptop.png";
import HpLaptop from "@/public/HpLaptop.png";
import LenovoLaptop from "@/public/LenovoLaptop.png";
import AsusLaptop from "@/public/AsusLaptop.png";
import appleLogo from "@/public/appleLogo.png";
import samsungLogo from "@/public/samsongLogo.png";
import miLogo from "@/public/miLogo.png";
import realmeLogo from "@/public/realmeLogo.png";
import dellLogo from "@/public/dellLogo.png";
import hpLogo from "@/public/hpLogo.png";
import lenovoLogo from "@/public/lenovoLogo.png";
import asusLogo from "@/public/asusLogo.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Head from "../common/Head";

const deals = [
  {
    id: 1,
    brand: "APPLE",
    logo: appleLogo,
    product: "iPhone 17 Pro",
    category: "phone",
    discount: "UP to 35% OFF",
    image: ApplePhone,
    bgColor: "#313131",
    badgeColor: "#494949",
    textColor: "white",
    circleColor: "#404040",
  },
  {
    id: 2,
    brand: "SAMSUNG",
    logo: samsungLogo,
    product: "Galaxy S24 Ultra",
    category: "phone",
    discount: "UP to 40% OFF",
    image: SamsungPhone,
    bgColor: "#eef4ff",
    badgeColor: "#cddfff",
    textColor: "#222",
    circleColor: "#cddfff",
  },
  {
    id: 3,
    brand: "XIAOMI",
    logo: miLogo,
    product: "Xiaomi 14",
    category: "phone",
    discount: "UP to 50% OFF",
    image: XiaomiPhone,
    bgColor: "#ffecdf",
    badgeColor: "#ffd1b0",
    textColor: "#222",
    circleColor: "#FFD1B0",
  },
  {
    id: 4,
    brand: "REALME",
    logo: realmeLogo,
    product: "Realme GT 6",
    category: "phone",
    discount: "UP to 45% OFF",
    image: RealmePhone,
    bgColor: "#fff3cc",
    badgeColor: "#f6de8d",
    textColor: "#222",
    circleColor: "#F6DE8D",
  },
  {
    id: 5,
    brand: "DELL",
    logo: dellLogo,
    product: "Dell XPS 13",
    category: "laptop",
    discount: "UP to 30% OFF",
    image: DellLaptop,
    bgColor: "#eef2f7",
    badgeColor: "#d6dde8",
    textColor: "#222",
    circleColor: "#d6dde8",
  },
  {
    id: 6,
    brand: "HP",
    logo: hpLogo,
    product: "HP Spectre x360",
    category: "laptop",
    discount: "UP to 28% OFF",
    image: HpLaptop,
    bgColor: "#f2f2f2",
    badgeColor: "#e0e0e0",
    textColor: "#222",
    circleColor: "#e0e0e0",
  },
  {
    id: 7,
    brand: "LENOVO",
    logo: lenovoLogo,
    product: "Lenovo Legion 5",
    category: "laptop",
    discount: "UP to 42% OFF",
    image: LenovoLaptop,
    bgColor: "#ffeaea",
    badgeColor: "#ffcaca",
    textColor: "#222",
    circleColor: "#ffcaca",
  },
  {
    id: 8,
    brand: "ASUS",
    logo: asusLogo,
    product: "ASUS ROG Zephyrus G14",
    category: "laptop",
    discount: "UP to 37% OFF",
    image: AsusLaptop,
    bgColor: "#f0f7ff",
    badgeColor: "#cfe2ff",
    textColor: "#222",
    circleColor: "#cfe2ff",
  },
];

export default function Electronics() {
  return (
    <div className="w-full flex-col flex items-center justify-start overflow-hidden">
      {/* Header */}
      <div className="flex w-full items-center justify-between">
        <Head>
          top <span className="text-[#FCBD01]">Electronics Brands</span>
        </Head>

        {/* View All Button */}
        <button className="bg-[#fcbd01] rounded-lg px-7 py-2.5 text-[15px] font-extrabold font-['Lato',sans-serif] text-[#0a0a0a] uppercase tracking-[0.2px] hover:bg-[#e5ab01] transition-colors">
          VIEW ALL
        </button>
      </div>
      {/* Divider Line */}
      <div className="my-6 w-full h-px relative left-0 bg-[#d9d9d9]" />

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {deals.map((deal) => (
            <CarouselItem key={deal.id} className="basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div
                  className="relative h-[227px] rounded-[18px] overflow-hidden"
                  style={{ backgroundColor: deal.bgColor }}
                >
                  {/* Brand Badge */}
                  <div
                    className="absolute left-[22px] top-[22px] px-[22px] py-[10px] rounded-[9px] z-10"
                    style={{ backgroundColor: deal.badgeColor }}
                  >
                    <span
                      className="text-[15px] font-['Lato',sans-serif] tracking-[1.5px]"
                      style={{ color: deal.textColor }}
                    >
                      {deal.brand}
                    </span>
                  </div>

                  {/* Brand Logo */}
                  <div className="absolute left-[22px] top-[82px] z-10">
                    <div className="w-[73px] h-[73px]">
                      <Image
                        src={deal.logo}
                        alt={deal.brand}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Decorative Circle */}
                  <div
                    className="absolute right-[75px] top-[-93px] w-[269px] h-[269px] rounded-full opacity-80"
                    style={{
                      background: `radial-gradient(circle, ${deal.circleColor} 46%, transparent 50%)`,
                      border: `1px solid ${deal.circleColor}`,
                    }}
                  />

                  {/* Discount Text */}
                  <p
                    className="absolute left-[22px] bottom-[28px] text-[26px] font-semibold font-['Lato',sans-serif] leading-[33px] z-10"
                    style={{ color: deal.textColor }}
                  >
                    {deal.discount}
                  </p>

                  {/* Phone Image */}
                  <div className="absolute right-[50px] top-[13px] h-[202px] drop-shadow-2xl">
                    <Image
                      src={deal.image}
                      alt={deal.brand}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="link"
          className="hidden absolute left-0 -translate-x-1/3 md:flex bg-white rounded-full hover:shadow-lg hover:bg-gray-50 transition-colors"
        />
        <CarouselNext
          variant="ghost"
          className="hidden absolute right-0 translate-x-1/3 md:flex bg-white rounded-full hover:shadow-lg hover:bg-gray-50 transition-colors"
        />
      </Carousel>
    </div>
  );
}
