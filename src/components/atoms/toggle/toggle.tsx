// Types
import { ToggleProps } from "@/types/components/atoms/toggle.types";

export default function Toggle({ onClick, isChecked }: ToggleProps) {
  return (
    <input
      readOnly
      checked={isChecked}
      onClick={onClick}
      type="checkbox"
      className="appearance-none bg-marine-blue w-12 rounded-2xl before:content-normal before:w-4 before:h-4 before:m-1 before:bg-white before:block before:rounded-xl flex items-center checked:before:translate-x-6 before:ease-in before:duration-300"
    />
  );
}
