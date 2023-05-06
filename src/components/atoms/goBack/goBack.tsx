// Types
import { GoBackProps } from "@/types/goBack.types";

export default function GoBack({ number, onClick }: GoBackProps) {
  if (number === 1) {
    return <span></span>;
  }

  return (
    <button
      className="text-cool-gray font-medium hover:text-marine-blue"
      onClick={onClick}
    >
      Go Back
    </button>
  );
}
