export const Degree = ({ degreeTextGradient, conditionTextColor }) => {
  return (
    <div className="absolute w-[242px] h-[230px] mt-[478px] ml-[48px]">
      <p
        className={`text-[110px] ${degreeTextGradient} inline-block text-transparent bg-clip-text `}
      >
        26&deg;
      </p>
      <h6 className={`text-[24px] ${conditionTextColor} font-bold`}>Sunny</h6>
    </div>
  );
};

{
  /* <h1 class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">hello world</h1>
#6B7280
#111827 */
}
