import { Header } from "./Header";
import { Input } from "./Input";
import { Button } from "./Button";

export const FirstForm = () => {
  const inputs = [
    { type: "text", title: "First name" },
    { type: "text", title: "Last name" },
    { type: "text", title: "Username" },
  ];
  return (
    <div className=" w-[480px] h-[655px] border border-[1px] p-[32px] gap-[12px]">
      <Header />
      <div className="flex flex-col gap-[12px]">
        {inputs.map((el, index) => {
          return (
            <div key={index}>
              <Input type={el.type} title={el.title}></Input>
            </div>
          );
        })}
      </div>
      <Button ButtonName={"Continue 1/3 >"} width={"w-full"} />
    </div>
  );
};
