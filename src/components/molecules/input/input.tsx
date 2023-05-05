// Types
import { InputProps, handlerOnChangeEventProps } from "@/types/input.types";

// Compoenents
import ErrorMessageLabel from "@/components/atoms/errorMessageLabel/errorMessageLabel";

// React
import { useState } from "react";

export default function Input({
  messageError,
  name,
  onChange,
  placeholder,
  type,
  required,
}: InputProps) {
  const [foundMessageError, setFoundMessageError] = useState(false);

  function handlerOnChangeEvent({
    onChange,
    event,
  }: handlerOnChangeEventProps) {
    try {
      setFoundMessageError(false);
      return onChange(event);
    } catch (error) {
      setFoundMessageError(true);
    }
  }

  return (
    <div className="flex gap-2 flex-col">
      <div className="flex justify-between">
        <label className="flex flex-col text-marine-blue">{name}</label>

        <ErrorMessageLabel
          foundMessageError={foundMessageError}
          messageError={messageError}
        />
      </div>

      <input
        className="border border-solid border-cool-gray rounded-lg px-4 py-3 placeholder:text-marine-blue placeholder:font-medium focus:outline-purplish-blue text-marine-blue font-medium"
        type={type}
        placeholder={placeholder}
        onChange={(event) =>
          onChange && handlerOnChangeEvent({ onChange, event })
        }
        required={required}
      />
    </div>
  );
}
