import { Header } from "./_components/Header";
import { FirstForm } from "./_components/FirstForm";
import { SecondForm } from "./_components/SecondForm";
import { ThirdForm } from "./_components/ThirdForm";

export default function Form() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#F8F8F8] ">
      <div className=" w-[480px] h-[655px] border border-[1px] p-[32px] gap-[12px]">
        <Header />
        <FirstForm />
        <SecondForm />
        <ThirdForm />
      </div>
    </div>
  );
}
