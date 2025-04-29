import Image from "next/image";
export const Header = () => {
  return (
    <div className="flex flex-col mb-[28px]">
      <Image src="/pineLogo.png" alt="logo" width={60} height={60} />
      <p className="text-[26px] font-bold">Join Us! 😎</p>
      <p className="text-[18px] text-[#8E8E8E]">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
