// Types
import { ErrorMessageLabelProps } from "@/types/ErrorMessageLabel.types";

export default function ErrorMessageLabel({
  foundMessageError,
  messageError,
}: ErrorMessageLabelProps) {
  if (foundMessageError && messageError) {
    return (
      <label className="text-strawberry-red font-medium">{messageError}</label>
    );
  }

  return <></>;
}
