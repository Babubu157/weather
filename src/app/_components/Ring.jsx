export const Ring = ({ el }) => {
  return (
    <div
      // className={`z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border inset-0 border-gray-300 rounded-full ${el}`}
      className={`${el} absolute border border-[2px] border-[#D3D3D3] z-10 rounded-full`}
    ></div>
  );
};
