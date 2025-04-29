import { Input } from "./Input";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { Header } from "./Header";

export const SecondForm = ({ backHandler, nextHandler }) => {
  const inputs = [
    { type: "email", title: "E mail" },
    { type: "number", title: "Phone number" },
    { type: "password", title: "Password" },
    { type: "password", title: "Confirm password" },
  ];
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
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
        <div className="flex justify-between mt-[100px]">
          <Button
            ButtonName={"Back"}
            width={"w-[128px]"}
            buttonHandler={backHandler}
          />
          <Button
            ButtonName={"Continue 2/3 >"}
            width={"w-[280px]"}
            buttonHandler={nextHandler}
          />
        </div>
      </div>
    </motion.div>
  );
};
