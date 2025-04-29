export const Button = ({ ButtonName, width, buttonHandler }) => {
  return (
    <div>
      <button
        className={`border h-[44px] bg-[#121316] text-[#fff] font-bold  rounded-[8px] ${width}`}
        onClick={buttonHandler}
      >
        {ButtonName}
      </button>
    </div>
  );
};
