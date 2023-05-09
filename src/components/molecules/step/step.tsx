// Components
import StepNumber from "@/components/atoms/stepNumber/stepNumber";

// Types
import { StepProps } from "@/types/components/atoms/step.types";

export default function Step({ number, name, select }: StepProps) {
  return (
    <div className="w-full flex max-md:flex-col justify-normal items-center gap-4">
      <StepNumber number={number} select={select} />

      <div className="flex flex-col">
        <span className="text-slate-200 text-sm max-sm:text-white max-sm:font-bold">
          STEP {number}
        </span>
        <span className="text-white uppercase font-bold max-sm:hidden">
          {name}
        </span>
      </div>
    </div>
  );
}
