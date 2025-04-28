import Image from "next/image";

export const LogoLeft = () => {
  return (
    <Image
      src="/pineconeLogoLeft.png"
      alt="logo"
      width={43}
      height={86}
      className="absolute mr-[43px]"
    />
  );
};
