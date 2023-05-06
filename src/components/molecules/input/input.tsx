// Types
import { InputProps, handlerOnChangeEventProps } from "@/types/input.types";

// Compoenents
import ErrorMessageLabel from "@/components/atoms/errorMessageLabel/errorMessageLabel";

// React
import { useState } from "react";

export default function Input({
  name,
  onChange,
  placeholder,
  type,
  required,
}: InputProps) {
  const [messageError, setMessageError] = useState<string>("");

  function handlerOnChangeEvent({
    onChange,
    event,
  }: handlerOnChangeEventProps) {
    try {
      setMessageError("");
      return onChange(event);
    } catch (error) {
      const formatError = String(error).replace("Error: ", "");

      setMessageError(formatError);
    }
  }

  return (
    <div className="flex gap-2 flex-col">
      <div className="flex justify-between">
        <label className="flex flex-col text-marine-blue">{name}</label>

        <ErrorMessageLabel messageError={messageError} />
      </div>

      <input
        className="border border-solid border-cool-gray rounded-lg px-4 py-3 placeholder:text-marine-blue placeholder:font-medium focus:outline-purplish-blue text-marine-blue font-medium"
        type={type}
        placeholder={placeholder}
        onChange={(event) =>
          onChange && handlerOnChangeEvent({ onChange, event })
        }
        required={required}
        id="input"
      />
    </div>
  );
}
