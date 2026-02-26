import Image from "next/image";
import phone from "@/public/phone.png";
import cosmetics from "@/public/cosmetics.png";
import electronics from "@/public/electronics.png";
import furniture from "@/public/furniture.png";
import watch from "@/public/watch.png";
import decor from "@/public/decor.png";
import accessories from "@/public/accessories.png";
import Head from "../common/Head";

const categories = [
  {
    name: "Mobile",
    image: phone,
    featured: false,
  },
  {
    name: "Cosmetics",
    image: cosmetics,
    featured: false,
  },
  {
    name: "Electronics",
    image: electronics,
    featured: false,
  },
  {
    name: "Furniture",
    image: furniture,
    featured: false,
  },
  {
    name: "Watches",
    image: watch,
    featured: false,
  },
  {
    name: "Decor",
    image: decor,
    featured: false,
  },
  {
    name: "Accessories",
    image: accessories,
    featured: false,
  },
];

export default function Category() {
  return (
    <div className="w-full max-w-[1360px] mx-auto py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Head>
          Shop from <span className="text-[#FCBD01]">top categories</span>
        </Head>

        {/* View All Button */}
        <button className="bg-[#fcbd01] rounded-lg px-7 py-2.5 text-[15px] font-extrabold font-['Lato',sans-serif] text-[#0a0a0a] uppercase tracking-[0.2px] hover:bg-[#e5ab01] transition-colors">
          VIEW ALL
        </button>
      </div>

      {/* Divider Line */}
      <div className="my-6 w-full h-px relative left-0 bg-[#d9d9d9]" />

      {/* Categories Grid */}
      <div className="grid grid-cols-7 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            {/* Category Circle */}
            <div
              className={`relative w-[145px] h-[145px] bg-[#f5f5f5] rounded-full flex items-center justify-center overflow-hidden cursor-pointer transition-all hover:shadow-xl ${
                category.featured ? "ring-[1.1px] ring-[#008ECC] shadow-lg" : ""
              }`}
            >
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Category Name */}
            <p className="text-[17.6px] font-bold font-['Lato',sans-serif] text-black text-center">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
