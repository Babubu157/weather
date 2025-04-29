"use client";
import { Header } from "./_components/Header";
import { FirstForm } from "./_components/FirstForm";
import { SecondForm } from "./_components/SecondForm";
import { ThirdForm } from "./_components/ThirdForm";
import { useState } from "react";

export default function Form() {
  const comps = [FirstForm, SecondForm, ThirdForm];

  const [ind, setInd] = useState(0);
  const Stepper = comps[ind];

  const nextHandler = () => {
    setInd((prev) => prev + 1);
  };

  const backHandler = () => {
    setInd((prev) => prev - 1);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#F8F8F8] ">
      <Stepper nextHandler={nextHandler} backHandler={backHandler} />
    </div>
  );
}
