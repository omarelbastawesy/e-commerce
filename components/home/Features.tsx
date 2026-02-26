import { Package, Trophy, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: (
      <Package
        className="w-10 h-10 text-[#191c1f] flex-shrink-0"
        strokeWidth={1.5}
      />
    ),
    title: "Fasted Delivery",
    description: "Delivery in 24/H",
  },
  {
    icon: (
      <Trophy
        className="w-10 h-10 text-[#191c1f] flex-shrink-0"
        strokeWidth={1.5}
      />
    ),
    title: "24 Hours Return",
    description: "100% money-back guarantee",
  },
  {
    icon: (
      <CreditCard
        className="w-10 h-10 text-[#191c1f] flex-shrink-0"
        strokeWidth={1.5}
      />
    ),
    title: "Secure Payment",
    description: "Your money is safe",
  },
  {
    icon: (
      <Headphones
        className="w-10 h-10 text-[#191c1f] flex-shrink-0"
        strokeWidth={1.5}
      />
    ),
    title: "Support 24/7",
    description: "Live contact/message",
  },
];

export default function Features() {
  return (
    <div className="w-full bg-white border border-[#e4e7e9] rounded-md p-4">
      <div className="grid place-items-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-center flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex w-[280px] self-center items-center gap-4 ${index < features.length - 1 && "lg:border-r border-[#e4e7e9]"} ${(index == 0 || index == 2) && "md:border-r border-[#e4e7e9]"} pr-4`}
          >
            <div className="flex items-center gap-4 p-4">
              {feature.icon}
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-[#191c1f] uppercase leading-5 w-48">
                  {feature.title}
                </p>
                <p className="text-sm font-normal text-[#5f6c72] leading-5 w-48">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
