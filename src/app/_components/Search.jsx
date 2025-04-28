import { Search } from "lucide-react";

export const SearchLocation = ({ value, onChange }) => {
  console.log(value);
  return (
    <div className="rounded-4xl h-[80px] w-[567px] bg-[#FFFFFF] flex items-center justify-center">
      <Search className="h-[48px] w-[48px] opacity-[0.2]" />
      <input
        placeholder="search"
        className="h-[44px] w-[455px] focus:outline-none"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
