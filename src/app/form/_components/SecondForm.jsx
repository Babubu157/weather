import { Input } from "./Input";
import { Button } from "./Button";

export const SecondForm = () => {
  const inputs = [
    { type: "email", title: "E mail" },
    { type: "number", title: "Phone number" },
    { type: "password", title: "Password" },
    { type: "password", title: "Confirm password" },
  ];
  return (
    <div>
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
