import { MapPin } from "lucide-react";
import { CurDate } from "./CurDate";

export const CityName = ({ cityText }) => {
  return (
    <div className="flex gap-[10px] items-center">
      <div className="flex flex-col">
        <CurDate />
        <h1 className={`text-5xl ${cityText}`}>Ulaanbaatar</h1>
      </div>
      <MapPin />
    </div>
  );
};
