// Types
import { NextStepProps } from "@/types/components/atoms/nextStep.types";

export default function NextStep({
  onClick,
  backgroundColor,
  hoverBackgroundColor,
  name,
}: NextStepProps) {
  return (
    <button
      className={`${backgroundColor} hover:${hoverBackgroundColor} text-slate-200 font-medium py-3 px-6 rounded-xl`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
