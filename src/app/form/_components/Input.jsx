export const Input = ({ title, type }) => {
  return (
    <div className="gap-[8px]">
      <p className="text-[14px] font-bold">{title}</p>
      <input
        type={type}
        className="border w-full h-[44px] border rounded-[8px] border-[#CBD5E1]"
      ></input>
    </div>
  );
};
