"use client";
import { Header } from "./Header";
import { Input } from "./Input";
import { Button } from "./Button";
import { motion } from "framer-motion";

export const FirstForm = ({ nextHandler }) => {
  const inputs = [
    { type: "text", title: "First name" },
    { type: "text", title: "Last name" },
    { type: "text", title: "Username" },
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
        <div className="mt-[162px]">
          <Button
            ButtonName={"Continue 1/3 >"}
            width={"w-full"}
            buttonHandler={nextHandler}
          />
        </div>
      </div>
    </motion.div>
  );
};
