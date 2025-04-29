export const Button = ({ ButtonName, width }) => {
  return (
    <div>
      <button
        className={`border h-[44px] bg-[#121316] text-[#fff] font-bold inset-x-0 bottom-[32px] rounded-[8px] ${width} mt-[173px]`}
      >
        {ButtonName}
      </button>
    </div>
  );
};
