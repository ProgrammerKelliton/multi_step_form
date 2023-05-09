// Types
import { StepNumberProps } from "@/types/components/atoms/step.types";

export default function StepNumber({ number, select }: StepNumberProps) {
  const isSelect = select ? "bg-light-blue" : "border-white border text-white";

  return (
    <div
      className={`${isSelect} w-10 h-10 font-medium flex justify-center items-center rounded-full`}
    >
      <span className="text-center">{number}</span>
    </div>
  );
}
