// Types
import { handlerOnChangeEventProps } from "@/types/components/molecules/input.types";

function handlerOnChangeEvent({
  onChange,
  event,
  setMessageError,
}: handlerOnChangeEventProps) {
  try {
    setMessageError("");
    return onChange(event);
  } catch (error) {
    const formatError = String(error).replace("Error: ", "");

    setMessageError(formatError);
  }
}

export { handlerOnChangeEvent };
