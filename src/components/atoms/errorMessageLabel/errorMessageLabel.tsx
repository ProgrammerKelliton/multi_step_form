// Types
import { ErrorMessageLabelProps } from "@/types/ErrorMessageLabel.types";

export default function ErrorMessageLabel({
  messageError,
}: ErrorMessageLabelProps) {
  if (messageError !== "") {
    return (
      <label className="text-strawberry-red font-medium">{messageError}</label>
    );
  }

  return <></>;
}
