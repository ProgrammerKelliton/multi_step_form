// Types
import { InputProps } from "@/types/components/molecules/input.types";

// Compoenents
import ErrorMessageLabel from "@/components/atoms/errorMessageLabel/errorMessageLabel";

// React
import { useEffect, useState } from "react";

// Logic
import { handlerOnChangeEvent } from "./inputLogic";

export default function Input({
  name,
  onChange,
  placeholder,
  type,
  required,
}: InputProps) {
  const [messageError, setMessageError] = useState<string>("");
  const [inputColorError, setInputColorError] = useState<string>("");

  useEffect(() => {
    if (messageError !== "") setInputColorError("focus:outline-strawberry-red");
    else setInputColorError("focus:outline-purplish-blue");
  }, [messageError]);

  return (
    <div className="flex gap-2 flex-col">
      <div className="flex justify-between">
        <label className="flex flex-col text-marine-blue">{name}</label>

        <ErrorMessageLabel messageError={messageError} />
      </div>

      <input
        className={`${inputColorError} border border-solid border-cool-gray rounded-lg px-4 py-3 placeholder:text-marine-blue placeholder:font-medium text-marine-blue font-medium`}
        type={type}
        placeholder={placeholder}
        onChange={(event) =>
          onChange && handlerOnChangeEvent({ onChange, event, setMessageError })
        }
        required={required}
      />
    </div>
  );
}
