// React
import {
  ChangeEvent,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
} from "react";

export interface InputProps {
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface handlerOnChangeEventProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  event: ChangeEvent<HTMLInputElement>;
  setMessageError: Dispatch<SetStateAction<string>>;
}
