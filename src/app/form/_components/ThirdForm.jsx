import { Input } from "./Input";
import { Button } from "./Button";

export const ThirdForm = () => {
  return (
    <div>
      <div className="flex flex-col gap-[12px]">
        <Input type="date" title="Date of birth"></Input>
        <Input type="file" accept="image/png"></Input>
      </div>
      <Button ButtonName={"Continue 1/3 >"} width={"w-full"} />
    </div>
  );
};
