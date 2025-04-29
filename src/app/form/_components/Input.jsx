export const Input = ({ title }) => {
  return (
    <div className="gap-[8px]">
      <p className="text-[14px] font-bold">{title}</p>
      <input
        type="text"
        className="border w-full h-[44px] border rounded-[8px] border-[#CBD5E1]"
      ></input>
    </div>
  );
};
