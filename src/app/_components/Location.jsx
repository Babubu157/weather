import { MapPin } from "lucide-react";
import Image from "next/image";
import { CityName } from "./CityName";

export const Location = ({
  locationBgColor,
  locationGradient,
  cityText,
  srcPath,
  imgMargin,
}) => {
  return (
    <>
      {/* <div className="w-[420px] h-[510px]  z-200 rounded-4xl">
        <div className="flex gap-[10px] items-center">
          <div className="flex flex-col">
            <h4 className="text-gray-400">April 21, 2025</h4>
            <h1 className="text-5xl">Ulaanbaatar</h1>
          </div>
          <MapPin />
        </div>
        <Image
          src="/sun.png"
          width={262}
          height={262}
          className="absolute top-[204px] ml-[70px]"
        />
      </div>
      ; */}
      <div
        className={`absolute w-[398px] h-[504px] backdrop-blur-lg z-200 ${locationBgColor} ${locationGradient} rounded-t-4xl`}
      >
        <div className="absolute mt-[56px] ml-[40px]">
          <CityName cityText={cityText} />
        </div>
        <Image
          src={srcPath}
          alt="sun or moon"
          width={277}
          height={277}
          className={`${imgMargin} absolute  z-10`}
        />
        <div className="absolute w-[280px] h-[280px] ml-[60px] mt-[166px] blur-2xl"></div>
      </div>
    </>
  );
};
