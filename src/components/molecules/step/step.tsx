import StepNumber from "@/components/atoms/stepNumber/stepNumber";
import { StepProps } from "@/types/step.types";

export default function Step({ number, name, select }: StepProps) {
  return (
    <div className="w-full flex justify-normal items-center gap-4">
      <StepNumber number={number} select={select} />

      <div className="flex flex-col">
        <span className="text-slate-200 text-sm">STEP {number}</span>
        <span className="text-white uppercase font-bold">{name}</span>
      </div>
    </div>
  );
}
