import { House, MapPin, Heart, User } from "lucide-react";

export const Icons = () => {
  return (
    <>
      <div className="absolute flex w-[380px] h-[32px] z-150 gap-[50px] bottom-[40px] ml-[70px]">
        <House color="#D1D5DB" className="h-[32px] w-[32px]" />
        <MapPin color="#D1D5DB" className="h-[32px] w-[32px]" />
        <Heart color="#D1D5DB" className="h-[32px] w-[32px]" />
        <User color="#D1D5DB" className="h-[32px] w-[32px]" />
      </div>
    </>
  );
};
