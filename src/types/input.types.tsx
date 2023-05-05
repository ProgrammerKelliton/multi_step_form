import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { InputErrors } from "./erros.types";

// ! InputErrors extends property messageError
export interface InputProps extends InputErrors {
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface handlerOnChangeEventProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  event: ChangeEvent<HTMLInputElement>;
}
