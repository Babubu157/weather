"use client";
import { MapPin } from "lucide-react";

export const Suggession = ({ citiesWithMatchedSearchValue, clickHandler }) => {
  // console.log(citiesWithMatchedSearchValue, 321321321);

  const firstFourMatchedValue =
    citiesWithMatchedSearchValue.length >= 4
      ? citiesWithMatchedSearchValue.splice(0, 4)
      : citiesWithMatchedSearchValue;

  return (
    <div className="flex flex-col gap-4 absolute z-200 p-4 bg-[#EE82EE] rounded-4xl w-[300px]">
      {firstFourMatchedValue?.map((el, index) => {
        return (
          <button
            key={index}
            className="cursor-pointer"
            onClick={() => clickHandler(el.cityName)}
          >
            <div className="flex gap-4 p-2 z-200">
              <MapPin />
              <p>
                {el.cityName}, {el.countryName}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};
