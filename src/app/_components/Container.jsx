"use client";

import { SearchLocation } from "./Search";
import { Card } from "./Card";
import { Suggession } from "./Suggession";
import { useState, useEffect } from "react";

export const Container = ({ citiesWithCountry }) => {
  const [search, setSearch] = useState("");

  const [clickedCityName, setClickedCityName] = useState("Ulan bator");
  // clickHandler ajillah uyed buyu hotiig songood darahad tuhain hotiin
  // neriig param-r damjuulj awaad clicked city name-g oorchildog
  // setClickedCityName-d param.r oghod clickedCityName oorchlogdono

  const clickHandler = (param) => {
    setClickedCityName(param);
    setSearch("");
  };
  // console.log(clickedCityName);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  //  console.log(citiesWithCountry);

  const citiesWithMatchedSearchValue = citiesWithCountry.flatMap((el) => {
    const matchedResultWithSearchValue = el.filter((city) => {
      if (city.cityName.toLowerCase().includes(search)) {
        return true;
      }
    });
    return matchedResultWithSearchValue;
  });

  console.log(citiesWithMatchedSearchValue);

  useEffect(() => {}, []);
  return (
    <div className="relative w-[1600px] h-[1200px] flex justify-center align-center">
      <div className="relative bg-[#F3F4F6] flex-1 h-full">
        <div className="absolute top-[40px] left-[40px]">
          <SearchLocation onChange={searchHandler} value={search} />

          {citiesWithMatchedSearchValue.length && search && (
            <div className="gap-4">
              <Suggession
                citiesWithMatchedSearchValue={citiesWithMatchedSearchValue}
                clickHandler={clickHandler}
              />
            </div>
          )}
        </div>

        <div className="absolute w-[176px] h-[176px]  rounded-[100%]  bg-radial from-white from-[5%] to-[#FF8E27] to-[50%] left-[130px] top-[177px]"></div>
        <div className="relative mt-[230px] ml-[193px]">
          <Card
            degreeTextGradient={"bg-gradient-to-t from-[#6B7280] to-[#111827]"}
            cityText={"text-[#111827] text-[48px] font-bold"}
            srcPath={"/sun.png"}
            imgMargin={"mt-[204px] ml-[77.5px]"}
            conditionTextColor={"text-[#FF8E27]"}
          />
        </div>
      </div>
      <div className=" relative bg-[#111827] flex-1 h-full">
        <div className="relative mt-[216px] ml-[193px]">
          <Card
            CardBgColor={"bg-[#111827]/50"}
            locationGradient={"bg-gradient-to-t from-[#111827] to-[#1F2937]"}
            degreeTextGradient={
              "bg-gradient-to-t from-[#F9FAFB]/0 to-[#F9FAFB]"
            }
            cityText={"text-[#FFFFFF] text-[48px] font-bold"}
            srcPath={"/moon.png"}
            imgMargin={"mt-[179px] ml-[76.5px]"}
            conditionTextColor={"text-[#777CCE]"}
          />
        </div>
        <div className="w-[176px] h-[176px]  rounded-[100%]  bg-radial from-white from-[5%] to-[#6E72C9] to-[50%] absolute right-[130px] top-[950px] z-10"></div>
      </div>
    </div>
  );
};
