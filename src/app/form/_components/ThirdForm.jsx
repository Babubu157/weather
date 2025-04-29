import { Input } from "./Input";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { Header } from "./Header";

export const ThirdForm = ({ backHandler, nextHandler }) => {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className=" w-[480px] h-[655px] border border-[1px] p-[32px] gap-[12px]">
        <Header />
        <div className="flex flex-col gap-[12px]">
          <Input type="date" title="Date of birth"></Input>
          <div className="border bg-grey-400 h-[180px] w-[full]">
            <Input
              type="file"
              accept="image/png"
              className="border-none"
            ></Input>
          </div>
        </div>
        <div className="flex mt-[100px]">
          <Button
            ButtonName={"Back"}
            width={"w-[128px]"}
            buttonHandler={backHandler}
          />
          <Button
            ButtonName={"Continue 3/3 >"}
            width={"w-[280px]"}
            buttonHandler={nextHandler}
          />
        </div>
      </div>
    </motion.div>
  );
};
