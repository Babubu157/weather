import Image from "next/image";

export const LogoRight = () => {
  return (
    <Image
      src="/pineconeLogoRight.png"
      alt="logo"
      width={43}
      height={86}
      className="absolute ml-[53px] z-111"
    />
  );
};
