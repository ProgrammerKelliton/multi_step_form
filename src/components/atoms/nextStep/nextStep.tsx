// Types
import { NextStepProps } from "@/types/nextStep.types";

export default function NextStep({ onClick }: NextStepProps) {
  return (
    <button
      className="bg-marine-blue hover:bg-blue-900 text-slate-200 font-medium py-3 px-6 rounded-xl"
      onClick={onClick}
    >
      Next step
    </button>
  );
}
