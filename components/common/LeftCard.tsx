import Image, { StaticImageData } from "next/image";

export default function LeftCard({
  image,
  underPhoto,
  head,
  info,
}: {
  image: StaticImageData;
  underPhoto?: React.ReactNode;
  head?: string;
  info?: string;
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
          {head}
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-500">{info}</p>
      </div>

      <div className="relative md:w-[50%] lg:w-[95%]">
        <Image
        loading="eager"
          src={image}
          alt="Login illustration"
          className="w-full relative z-10"
        />
      </div>

      {underPhoto}
    </div>
  );
}
