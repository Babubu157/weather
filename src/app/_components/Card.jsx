"use client";

import { Icons } from "./Icons";
import { Degree } from "./Degree";
import { Location } from "./Location";

export const Card = ({
  CardBgColor,
  locationBgColor,
  locationGradient,
  degreeTextGradient,
  cityText,
  srcPath,
  imgMargin,
  conditionTextColor,
}) => {
  return (
    <div
      className={`relative w-[414px] h-[828px] z-100 rounded-4xl ${CardBgColor} backdrop-blur-md `}
    >
      <Location
        locationBgColor={locationBgColor}
        locationGradient={locationGradient}
        cityText={cityText}
        srcPath={srcPath}
        imgMargin={imgMargin}
      />
      <Degree
        degreeTextGradient={degreeTextGradient}
        conditionTextColor={conditionTextColor}
      />
      <Icons />
    </div>

    // {/* <div className="relative w-[414px] h-[828px] m-auto mt-[230px] bg-[#111827]/75 backdrop-blur-lg  z-15 rounded-4xl ">
    //   <Icons color="#D1D5DB"/>
    // </div> */}
  );
};
