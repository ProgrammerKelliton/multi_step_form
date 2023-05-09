// Types
import { NavigateProps } from "@/types/components/molecules/navigation.types";

function Navigate({ action, setStep }: NavigateProps) {
  if (action === "next") {
    setStep((prev) => {
      return prev !== 4 ? prev + 1 : prev;
    });
  } else if (action === "back") {
    setStep((prev) => {
      return prev > 1 ? prev - 1 : prev;
    });
  }
}

export { Navigate };
