import { format } from "date-fns";
export const CurDate = () => {
  const date = new Date();
  const formattedDate = format(date, "MMMM dd,yyyy");
  return <h4 className="text-gray-400">{formattedDate}</h4>;
  //   return <h4 className="text-gray-400">{"hello"}</h4>;
};
